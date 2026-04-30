const http = require('http');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || '127.0.0.1';
const ROOT = __dirname;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4.1';
const VECTOR_STORE_ID = process.env.VECTOR_STORE_ID || '';
const FUN_FACTS_CACHE_PATH = path.join(ROOT, 'fun-facts-cache.json');
const MFG_COMPANY_DETAILS_PATH = path.join(ROOT, 'mfg-companies-import.json');
const MFG_COMPANY_DETAILS_CHUNKS_DIR = path.join(ROOT, 'mfg-company-details');
const DEFAULT_FUN_FACTS = [
    'The Springfield Armory helped pioneer interchangeable parts manufacturing in the U.S. during the 1800s.',
    'By 1913, Ford cut Model T assembly time to about 93 minutes, redefining industrial scale.',
    'WWII factory conversion helped U.S. industry build ships, aircraft, and vehicles at historic speed.',
    'American machine tool makers enabled precision production across aerospace, auto, and defense.',
    'Containerization and logistics innovation helped U.S. manufacturers ship faster and cheaper worldwide.'
];
const SIGNALS_CACHE_TTL_MS = 45 * 60 * 1000;
const SIGNAL_KEYWORDS = [
    'reshor',
    'buy america',
    'made in america',
    'manufacturing',
    'supply chain',
    'critical mineral',
    'semiconductor',
    'antidumping',
    'countervailing',
    'import restriction',
    'tariff',
    'section 232',
    'section 301',
    'forced labor'
];
const SIGNAL_FALLBACKS = [
    {
        title: 'CBP forced labor enforcement actions',
        source: 'CBP',
        tag: 'Import enforcement',
        url: 'https://www.cbp.gov/trade/forced-labor'
    },
    {
        title: 'Federal Register trade and duty notices',
        source: 'Federal Register',
        tag: 'Duty / rulemaking',
        url: 'https://www.federalregister.gov/'
    },
    {
        title: 'Manufacturing.gov federal announcements',
        source: 'Manufacturing.gov',
        tag: 'Reshoring',
        url: 'https://www.manufacturing.gov/federal-announcements'
    }
];

const MIME_TYPES = {
    '.css': 'text/css; charset=utf-8',
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.txt': 'text/plain; charset=utf-8',
    '.webp': 'image/webp'
};

const workspaceFiles = buildWorkspaceFileManifest();
const manufacturers = loadManufacturers();
let funFactsCache = loadFunFactsCache();
let funFactCursor = 0;
let mfgCompanyDetailsById = null;
let mfgLiteRows = null;
let signalsCache = {
    fetchedAt: 0,
    signals: SIGNAL_FALLBACKS
};

const requestHandler = async (req, res) => {
    try {
        const pathname = normalizePathname(req.url);

        if (req.method === 'GET' && (pathname === '/api/slideshow' || pathname === '/slideshow')) {
            sendJson(res, 200, { slides: getSlideshowSlides() });
            return;
        }

        if (req.method === 'POST' && (pathname === '/api/chat' || pathname === '/chat')) {
            await handleChatRequest(req, res);
            return;
        }
        if (req.method === 'POST' && (pathname === '/api/fun-fact' || pathname === '/fun-fact')) {
            await handleFunFactRequest(req, res);
            return;
        }
        if (req.method === 'GET' && pathname === '/api/signals') {
            await handleSignalsRequest(req, res);
            return;
        }
        if (req.method === 'GET' && pathname === '/api/company-details') {
            await handleCompanyDetailsRequest(req, res);
            return;
        }
        if (req.method === 'GET' && pathname === '/api/mfg-lite') {
            await handleMfgLiteRequest(req, res);
            return;
        }
        if (req.method === 'GET' && pathname === '/api/mfg-map-pins') {
            await handleMfgMapPinsRequest(req, res);
            return;
        }

        if (pathname.startsWith('/api/') || pathname === '/api' || pathname === '/chat' || pathname === '/fun-fact') {
            sendJson(res, 404, { error: 'API route not found.' });
            return;
        }

        if (req.method === 'GET') {
            await serveStaticFile(req, res);
            return;
        }

        sendJson(res, 405, { error: 'Method not allowed.' });
    } catch (error) {
        console.error(error);
        sendJson(res, 500, { error: 'Server error.' });
    }
};

const server = http.createServer(requestHandler);

if (require.main === module) {
    server.listen(PORT, HOST, () => {
        console.log(`American Supply Chain server running at http://${HOST}:${PORT}`);
    });
}

module.exports = requestHandler;

async function handleChatRequest(req, res) {
    if (!OPENAI_API_KEY) {
        sendJson(res, 500, {
            error: 'Missing OPENAI_API_KEY. Add it to your environment before using the assistant.'
        });
        return;
    }
    if (!VECTOR_STORE_ID) {
        sendJson(res, 500, {
            error: 'Missing VECTOR_STORE_ID. Add it to your environment before using vector search.'
        });
        return;
    }

    const body = await readJsonBody(req);
    const userMessage = String(body.message || '').trim();

    if (!userMessage) {
        sendJson(res, 400, { error: 'Message is required.' });
        return;
    }

    const visibleManufacturers = Array.isArray(body.visibleManufacturers) ? body.visibleManufacturers : [];
    const uiState = body.uiState || {};
    const context = buildAssistantContext(userMessage, visibleManufacturers, uiState);
    const candidatePool = visibleManufacturers.length ? visibleManufacturers : manufacturers;
    const candidateBriefs = candidatePool.slice(0, 100).map(item => ({
        name: item.name || '',
        category: item.category || '',
        industry: item.industry || '',
        location: item.location || '',
        products: Array.isArray(item.products) ? item.products.slice(0, 8) : [],
        description: item.description || ''
    }));

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 45_000);
    let response;
    try {
        response = await fetch('https://api.openai.com/v1/responses', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            },
            signal: controller.signal,
            body: JSON.stringify({
                model: OPENAI_MODEL,
                previous_response_id: body.previousResponseId || undefined,
                tools: [
                    {
                        type: 'file_search',
                        vector_store_ids: [VECTOR_STORE_ID],
                        max_num_results: 12
                    }
                ],
                include: ['file_search_call.results'],
                input: [
                    {
                        role: 'developer',
                        content: [
                            {
                                type: 'input_text',
                                text: [
                                    'You are the American Supply Chain Directory Assistant.',
                                    'Use file_search results and the provided candidate list.',
                                    'Return strict JSON only.',
                                    'Schema:',
                                    '{"mode":"clarify|recommend","answer":"string","follow_up_questions":["string"],"top_matches":[{"name":"string","reason":"string"}]}',
                                    'Core Behavior:',
                                    '* Be direct. No fluff. No filler.',
                                    '* If the question is generic, give a generic, concise answer immediately.',
                                    '* If the question is specific but missing key details, enter clarify mode.',
                                    '* If enough detail exists, enter recommend mode.',
                                    'Clarify Mode Rules:',
                                    '* Set "mode": "clarify"',
                                    '* Ask exactly one sharp, targeted question',
                                    '* No extra text. No explanations.',
                                    '* "answer" must contain only that question',
                                    '* "follow_up_questions" must contain that same question',
                                    '* "top_matches" must be empty',
                                    'Recommend Mode Rules:',
                                    '* Set "mode": "recommend"',
                                    '* Provide 3-5 matches max',
                                    '* Only use candidates from the provided list',
                                    '* Each match must include a clear, specific reason',
                                    '* If evidence is weak or incomplete, state that directly',
                                    '* Keep "answer" under 200 characters',
                                    'Direct Answer Rules (No Clarify Needed):',
                                    '* If the user asks:',
                                    '  * aggregate questions ("how many", "count")',
                                    '  * strategy questions ("where to start", "priorities")',
                                    '    -> answer directly, no clarification',
                                    'Tone Constraints:',
                                    '* Minimal, factual, surgical',
                                    '* No politeness padding',
                                    '* No assumptions beyond available data'
                                ].join(' ')
                            }
                        ]
                    },
                    {
                        role: 'user',
                        content: [
                            {
                                type: 'input_text',
                                text: JSON.stringify({
                                    user_query: userMessage,
                                    ui_state: uiState,
                                    workspace_files: workspaceFiles,
                                    context,
                                    candidates: candidateBriefs
                                })
                            }
                        ]
                    }
                ]
            })
        });
    } catch (error) {
        clearTimeout(timeout);
        const isTimeout = error && error.name === 'AbortError';
        sendJson(res, 504, {
            error: isTimeout
                ? 'Assistant timed out while searching. Try a shorter request or resend.'
                : 'Network error while contacting OpenAI.'
        });
        return;
    } finally {
        clearTimeout(timeout);
    }

    const payload = await response.json();
    if (!response.ok) {
        console.error(payload);
        sendJson(res, response.status, {
            error: payload.error?.message || 'OpenAI request failed.'
        });
        return;
    }

    const outputText = extractOutputText(payload);
    const parsed = tryParseAssistantJson(outputText);
    const forceRecommend = shouldForceRecommendMode(userMessage);
    const mode = forceRecommend
        ? 'recommend'
        : (parsed?.mode === 'clarify' ? 'clarify' : 'recommend');
    const topMatches = Array.isArray(parsed?.top_matches) ? parsed.top_matches : [];
    const selectedManufacturers = selectManufacturersByName(
        candidatePool,
        topMatches.map(match => match && match.name).filter(Boolean)
    );
    const answer = mode === 'clarify'
        ? formatClarifyResponse(parsed)
        : (parsed?.answer || outputText);
    const responseAnswer = mode === 'clarify'
        ? answer
        : clampAnswerLength(answer, 200);

    sendJson(res, 200, {
        answer: responseAnswer,
        responseId: payload.id || null,
        model: payload.model || OPENAI_MODEL,
        context: mode === 'clarify'
            ? []
            : (selectedManufacturers.length ? selectedManufacturers : context.relevantManufacturers.slice(0, 5))
    });
}

function normalizePathname(urlValue) {
    const parsed = new URL(urlValue || '/', 'http://localhost');
    const pathname = parsed.pathname || '/';
    if (pathname.length > 1 && pathname.endsWith('/')) {
        return pathname.slice(0, -1);
    }
    return pathname;
}

async function handleFunFactRequest(req, res) {
    const fact = nextCachedFunFact();

    sendJson(res, 200, {
        fact,
        model: 'local-cache'
    });
}

async function handleSignalsRequest(req, res) {
    const now = Date.now();
    if (now - signalsCache.fetchedAt < SIGNALS_CACHE_TTL_MS && signalsCache.signals.length) {
        sendJson(res, 200, {
            signals: signalsCache.signals,
            cached: true
        });
        return;
    }

    const signals = await fetchReshoringSignals();
    signalsCache = {
        fetchedAt: Date.now(),
        signals: signals.length ? signals : SIGNAL_FALLBACKS
    };

    sendJson(res, 200, {
        signals: signalsCache.signals,
        cached: false
    });
}

async function handleCompanyDetailsRequest(req, res) {
    const requestUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const id = Number(requestUrl.searchParams.get('id') || 0);

    if (!id) {
        sendJson(res, 400, { error: 'Company id is required.' });
        return;
    }

    if (!mfgCompanyDetailsById) {
        mfgCompanyDetailsById = loadMfgCompanyDetailsById();
    }

    const record = mfgCompanyDetailsById.get(id);
    if (!record) {
        sendJson(res, 404, { error: 'Company details not found.' });
        return;
    }

    sendJson(res, 200, { company: record });
}

async function handleMfgLiteRequest(req, res) {
    const requestUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const offset = Math.max(0, Number(requestUrl.searchParams.get('offset') || 0));
    const limit = Math.min(25000, Math.max(1, Number(requestUrl.searchParams.get('limit') || 1000)));

    if (!mfgLiteRows) {
        mfgLiteRows = loadMfgLiteRows();
    }

    const total = mfgLiteRows.length;
    const rows = mfgLiteRows.slice(offset, offset + limit);
    sendJson(res, 200, { rows, total, offset, limit });
}

async function handleMfgMapPinsRequest(req, res) {
    const requestUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const offset = Math.max(0, Number(requestUrl.searchParams.get('offset') || 0));
    const limit = Math.min(50000, Math.max(1, Number(requestUrl.searchParams.get('limit') || 25000)));

    if (!mfgLiteRows) {
        mfgLiteRows = loadMfgLiteRows();
    }

    const total = mfgLiteRows.length;
    const rows = mfgLiteRows
        .slice(offset, offset + limit)
        .map(row => [row?.[0], row?.[1] || '', row?.[2] || 'Manufacturing', row?.[3] || '', row?.[4] || '']);
    sendJson(res, 200, { rows, total, offset, limit });
}

async function serveStaticFile(req, res) {
    const requestUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const rawPath = requestUrl.pathname === '/' ? '/index.html' : requestUrl.pathname;
    const normalizedPath = path.normalize(rawPath).replace(/^(\.\.[/\\])+/, '');
    const filePath = path.join(ROOT, normalizedPath);

    if (!filePath.startsWith(ROOT)) {
        sendJson(res, 403, { error: 'Forbidden.' });
        return;
    }

    const exists = fs.existsSync(filePath);
    if (!exists || fs.statSync(filePath).isDirectory()) {
        sendJson(res, 404, { error: 'Not found.' });
        return;
    }

    const extension = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
        'Content-Type': MIME_TYPES[extension] || 'application/octet-stream'
    });
    fs.createReadStream(filePath).pipe(res);
}

function loadManufacturers() {
    const dataPath = path.join(ROOT, 'data.js');
    const source = fs.readFileSync(dataPath, 'utf8');
    const sandbox = {};
    vm.createContext(sandbox);
    vm.runInContext(`${source}\nthis.__manufacturers = manufacturers;`, sandbox);
    return Array.isArray(sandbox.__manufacturers) ? sandbox.__manufacturers : [];
}

function loadMfgCompanyDetailsById() {
    const map = new Map();
    const rows = loadMfgCompanyDetailRows();

    rows.forEach((row) => {
        if (row && Number.isFinite(Number(row.id))) {
            map.set(Number(row.id), row);
        }
    });

    return map;
}

function loadMfgCompanyDetailRows() {
    if (fs.existsSync(MFG_COMPANY_DETAILS_CHUNKS_DIR)) {
        const chunkFiles = fs.readdirSync(MFG_COMPANY_DETAILS_CHUNKS_DIR)
            .filter(name => /^part-\d+\.json$/i.test(name))
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

        if (chunkFiles.length > 0) {
            return chunkFiles.flatMap((name) => {
                const raw = fs.readFileSync(path.join(MFG_COMPANY_DETAILS_CHUNKS_DIR, name), 'utf8');
                const rows = JSON.parse(raw);
                return Array.isArray(rows) ? rows : [];
            });
        }
    }

    if (!fs.existsSync(MFG_COMPANY_DETAILS_PATH)) {
        return [];
    }

    const raw = fs.readFileSync(MFG_COMPANY_DETAILS_PATH, 'utf8');
    const rows = JSON.parse(raw);
    return Array.isArray(rows) ? rows : [];
}

function loadMfgLiteRows() {
    const dataPath = path.join(ROOT, 'mfg-companies-lite.json');
    if (!fs.existsSync(dataPath)) {
        return [];
    }

    const raw = fs.readFileSync(dataPath, 'utf8');
    const rows = JSON.parse(raw);
    return Array.isArray(rows) ? rows : [];
}

function buildWorkspaceFileManifest() {
    return fs.readdirSync(ROOT)
        .filter(name => !name.startsWith('.'))
        .map(name => {
            const fullPath = path.join(ROOT, name);
            const stats = fs.statSync(fullPath);
            return {
                path: name,
                type: stats.isDirectory() ? 'directory' : 'file',
                size: stats.size
            };
        });
}

function getSlideshowSlides() {
    const slideshowDir = path.join(ROOT, 'slideshow');
    if (!fs.existsSync(slideshowDir)) {
        return [];
    }

    return fs.readdirSync(slideshowDir)
        .filter(name => /\.(png|jpe?g|webp|gif)$/i.test(name))
        .sort((a, b) => a.localeCompare(b))
        .map(name => ({
            name,
            src: `/slideshow/${encodeURIComponent(name)}`,
            alt: `Historical American manufacturing ad: ${name}`,
            title: name
                .replace(/\.[^.]+$/, '')
                .replace(/[-_]+/g, ' ')
        }));
}

function buildAssistantContext(userMessage, visibleManufacturers, uiState) {
    const sourceManufacturers = visibleManufacturers.length ? visibleManufacturers : manufacturers;
    const rankedManufacturers = rankManufacturers(sourceManufacturers, userMessage).slice(0, 8);

    return {
        directorySummary: {
            totalManufacturers: manufacturers.length,
            visibleManufacturers: sourceManufacturers.length,
            activeView: uiState.currentView || 'tree',
            filters: {
                state: uiState.stateFilter || null,
                industry: uiState.industryFilter || null,
                mapCategory: uiState.activeMapCategory || null
            }
        },
        relevantManufacturers: rankedManufacturers,
        visibleCategoryCounts: summarizeByCategory(sourceManufacturers)
    };
}

function rankManufacturers(candidates, query) {
    const tokens = tokenize(query);

    return candidates
        .map(candidate => ({
            candidate,
            score: scoreManufacturer(candidate, tokens)
        }))
        .sort((a, b) => b.score - a.score || a.candidate.name.localeCompare(b.candidate.name))
        .map(entry => entry.candidate);
}

function scoreManufacturer(candidate, tokens) {
    const haystack = [
        candidate.name,
        candidate.category,
        candidate.industry,
        candidate.location,
        ...(candidate.products || []),
        candidate.description
    ].join(' ').toLowerCase();

    if (!tokens.length) {
        return 0;
    }

    return tokens.reduce((score, token) => (
        haystack.includes(token) ? score + token.length : score
    ), 0);
}

function summarizeByCategory(items) {
    const counts = new Map();

    items.forEach(item => {
        const key = item.category || 'Other';
        counts.set(key, (counts.get(key) || 0) + 1);
    });

    return Array.from(counts.entries())
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .map(([category, count]) => ({ category, count }));
}

function tokenize(value) {
    return String(value || '')
        .toLowerCase()
        .split(/[^a-z0-9]+/)
        .filter(token => token.length > 2);
}

function extractOutputText(payload) {
    if (typeof payload.output_text === 'string' && payload.output_text.trim()) {
        return payload.output_text.trim();
    }

    const parts = [];
    const outputItems = Array.isArray(payload.output) ? payload.output : [];

    outputItems.forEach(item => {
        const contents = Array.isArray(item.content) ? item.content : [];
        contents.forEach(content => {
            if (content.type === 'output_text' && content.text) {
                parts.push(content.text);
            }
        });
    });

    return parts.join('\n').trim();
}

function tryParseAssistantJson(value) {
    const raw = String(value || '').trim();
    if (!raw) {
        return null;
    }

    try {
        return JSON.parse(raw);
    } catch (error) {
        const match = raw.match(/\{[\s\S]*\}/);
        if (!match) {
            return null;
        }
        try {
            return JSON.parse(match[0]);
        } catch (secondError) {
            return null;
        }
    }
}

function normalizeString(value) {
    return String(value || '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ' ')
        .trim();
}

function selectManufacturersByName(pool, names) {
    const wanted = names
        .map(normalizeString)
        .filter(Boolean);
    if (!wanted.length) {
        return [];
    }

    const selected = [];
    const used = new Set();

    wanted.forEach(target => {
        const index = pool.findIndex((item, idx) => {
            if (used.has(idx)) return false;
            const name = normalizeString(item.name);
            return name === target || name.includes(target) || target.includes(name);
        });
        if (index >= 0) {
            used.add(index);
            selected.push(pool[index]);
        }
    });

    return selected.slice(0, 3);
}

function formatClarifyResponse(parsed) {
    const modelQuestions = Array.isArray(parsed?.follow_up_questions)
        ? parsed.follow_up_questions
            .map(item => toQuestionLine(item))
            .filter(Boolean)
        : [];
    const primaryModelQuestion = modelQuestions[0];
    if (primaryModelQuestion) {
        return primaryModelQuestion;
    }

    const answerQuestion = toQuestionLine(parsed?.answer || '');
    if (answerQuestion) {
        return answerQuestion;
    }

    return 'What exact actuator type do you need (linear, rotary, servo, BLDC, or stepper)?';
}

function toQuestionLine(value) {
    const text = String(value || '')
        .replace(/\s+/g, ' ')
        .trim();
    if (!text) {
        return '';
    }

    // Strip common filler intros so we keep only concrete asks.
    const stripped = text
        .replace(/^(great|thanks|thank you|to help|before i recommend|i need|could you|please)\b[:,\s-]*/i, '')
        .trim();
    const candidate = stripped || text;

    // Only keep lines that are actual questions.
    if (!candidate.includes('?') && candidate.split(' ').length < 4) {
        return '';
    }

    return candidate.endsWith('?') ? candidate : `${candidate}?`;
}

function clampAnswerLength(value, maxLength) {
    const text = String(value || '').replace(/\s+/g, ' ').trim();
    if (!text || text.length <= maxLength) {
        return text;
    }
    return `${text.slice(0, Math.max(0, maxLength - 1)).trim()}…`;
}

function clampFunFact(value) {
    const text = String(value || '')
        .replace(/\s+/g, ' ')
        .replace(/^["'`]+|["'`]+$/g, '')
        .trim();
    if (!text) {
        return '';
    }
    if (text.length <= 160) {
        return text;
    }
    return `${text.slice(0, 159).trim()}…`;
}

function loadFunFactsCache() {
    try {
        if (!fs.existsSync(FUN_FACTS_CACHE_PATH)) {
            return [...DEFAULT_FUN_FACTS];
        }

        const raw = fs.readFileSync(FUN_FACTS_CACHE_PATH, 'utf8');
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) {
            return [...DEFAULT_FUN_FACTS];
        }

        const cleaned = parsed
            .map(item => clampFunFact(item))
            .filter(Boolean);

        return cleaned.length ? cleaned : [...DEFAULT_FUN_FACTS];
    } catch (error) {
        console.error('Failed to load fun facts cache:', error);
        return [...DEFAULT_FUN_FACTS];
    }
}

function nextCachedFunFact() {
    if (!funFactsCache.length) {
        funFactsCache = [...DEFAULT_FUN_FACTS];
        funFactCursor = 0;
    }

    const fact = funFactsCache[funFactCursor % funFactsCache.length];
    funFactCursor = (funFactCursor + 1) % Math.max(1, funFactsCache.length);

    return fact;
}

function shouldForceRecommendMode(message) {
    const text = String(message || '').toLowerCase();
    if (!text) {
        return false;
    }

    const strategySignals = [
        'what categories',
        'which categories',
        'where should i start',
        'where do i start',
        'how should i start',
        'top priorities',
        'look at first',
        'first when sourcing',
        'in general'
    ];

    return strategySignals.some(signal => text.includes(signal));
}

async function fetchReshoringSignals() {
    const sourceResults = await Promise.allSettled([
        fetchFederalRegisterSignals(),
        fetchManufacturingGovSignals(),
        fetchCbpForcedLaborSignals()
    ]);

    const signals = sourceResults
        .flatMap(result => result.status === 'fulfilled' ? result.value : [])
        .filter(Boolean);

    return dedupeSignals(signals)
        .sort((a, b) => getSignalTime(b) - getSignalTime(a))
        .slice(0, 12);
}

async function fetchFederalRegisterSignals() {
    const terms = [
        'antidumping countervailing duty',
        'import restrictions',
        'Section 232 manufacturing',
        'Buy America manufacturing',
        'critical minerals supply chain'
    ];
    const requests = terms.map(async (term) => {
        const url = new URL('https://www.federalregister.gov/api/v1/documents.json');
        url.searchParams.set('per_page', '4');
        url.searchParams.set('order', 'newest');
        url.searchParams.set('conditions[term]', term);
        const payload = await fetchJsonWithTimeout(url.toString(), 7000);
        return Array.isArray(payload.results)
            ? payload.results
                .map(item => {
                    const text = [item.title, item.abstract].filter(Boolean).join(' ');
                    if (!isSignalRelevant(text)) {
                        return null;
                    }
                    return {
                        title: item.title || item.abstract || 'Federal Register notice',
                        source: 'Federal Register',
                        tag: tagSignal(text),
                        url: item.html_url || item.pdf_url || item.public_inspection_pdf_url || 'https://www.federalregister.gov/',
                        date: item.publication_date || item.signing_date || ''
                    };
                })
                .filter(Boolean)
            : [];
    });

    const results = await Promise.allSettled(requests);
    return results.flatMap(result => result.status === 'fulfilled' ? result.value : []);
}

async function fetchManufacturingGovSignals() {
    const html = await fetchTextWithTimeout('https://www.manufacturing.gov/federal-announcements', 7000);
    const section = html
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '');
    const headingMatches = Array.from(section.matchAll(/<h3[^>]*>\s*<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>\s*<\/h3>/gi));
    const plainHeadingMatches = headingMatches.length
        ? headingMatches
        : Array.from(section.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)).map(match => ['', '', match[1]]);

    return plainHeadingMatches
        .slice(0, 8)
        .map((match) => {
            const href = match[1] || '/federal-announcements';
            const title = cleanMarkup(match[2] || '');
            if (!title || !isSignalRelevant(title)) {
                return null;
            }
            return {
                title,
                source: 'Manufacturing.gov',
                tag: tagSignal(title),
                url: absolutizeUrl(href, 'https://www.manufacturing.gov'),
                date: extractNearbyDate(section, title)
            };
        })
        .filter(Boolean);
}

async function fetchCbpForcedLaborSignals() {
    const html = (await fetchTextWithTimeout('https://www.cbp.gov/trade/forced-labor', 7000))
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '');
    const recent = html.split(/Recent Enforcement Actions/i)[1] || '';
    const matches = Array.from(recent.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi));
    return matches
        .slice(0, 10)
        .map(match => {
            const text = cleanMarkup(match[1]);
            if (!isCleanSignalTitle(text) || !isSignalRelevant(text)) {
                return null;
            }
            const hrefMatch = match[1].match(/href="([^"]+)"/i);
            return {
                title: text.replace(/-Press Release Date\s*/i, ' - '),
                source: 'CBP',
                tag: 'Import enforcement',
                url: absolutizeUrl(hrefMatch?.[1] || '/trade/forced-labor', 'https://www.cbp.gov'),
                date: extractDateFromText(text)
            };
        })
        .filter(Boolean);
}

async function fetchJsonWithTimeout(url, timeoutMs) {
    const response = await fetchWithTimeout(url, timeoutMs, {
        headers: { 'Accept': 'application/json' }
    });
    if (!response.ok) {
        throw new Error(`Fetch failed: ${response.status} ${url}`);
    }
    return response.json();
}

async function fetchTextWithTimeout(url, timeoutMs) {
    const response = await fetchWithTimeout(url, timeoutMs, {
        headers: { 'Accept': 'text/html,application/rss+xml,application/xml;q=0.9,*/*;q=0.8' }
    });
    if (!response.ok) {
        throw new Error(`Fetch failed: ${response.status} ${url}`);
    }
    return response.text();
}

async function fetchWithTimeout(url, timeoutMs, options = {}) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);
    try {
        return await fetch(url, {
            ...options,
            signal: controller.signal
        });
    } finally {
        clearTimeout(timeout);
    }
}

function dedupeSignals(signals) {
    const seen = new Set();
    return signals.filter(signal => {
        const key = normalizeSignalKey(signal.url || signal.title);
        if (!key || seen.has(key)) {
            return false;
        }
        seen.add(key);
        return true;
    });
}

function normalizeSignalKey(value) {
    return String(value || '')
        .toLowerCase()
        .replace(/^https?:\/\/(www\.)?/, '')
        .replace(/[?#].*$/, '')
        .replace(/\W+/g, ' ')
        .trim();
}

function isSignalRelevant(value) {
    const text = String(value || '').toLowerCase();
    return SIGNAL_KEYWORDS.some(keyword => text.includes(keyword));
}

function isCleanSignalTitle(value) {
    const text = String(value || '').trim();
    if (!text || text.length > 220) {
        return false;
    }
    if (/[{}]|Skip to main content|Official websites use|Enter Search Term/i.test(text)) {
        return false;
    }
    return true;
}

function tagSignal(value) {
    const text = String(value || '').toLowerCase();
    if (text.includes('forced labor') || text.includes('withhold release') || text.includes('uflpa')) {
        return 'Import enforcement';
    }
    if (text.includes('antidumping') || text.includes('countervailing') || text.includes('tariff') || text.includes('section 232') || text.includes('section 301')) {
        return 'Duty / tariff';
    }
    if (text.includes('grant') || text.includes('funding') || text.includes('loan') || text.includes('award')) {
        return 'Funding';
    }
    if (text.includes('buy america') || text.includes('made in america') || text.includes('reshor')) {
        return 'Reshoring';
    }
    if (text.includes('critical mineral') || text.includes('semiconductor') || text.includes('supply chain')) {
        return 'Supply chain';
    }
    return 'Signal';
}

function cleanMarkup(value) {
    return decodeHtmlEntities(String(value || '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim());
}

function decodeHtmlEntities(value) {
    return String(value || '')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&nbsp;/g, ' ');
}

function absolutizeUrl(value, baseUrl) {
    try {
        return new URL(value || '/', baseUrl).toString();
    } catch (error) {
        return baseUrl;
    }
}

function extractNearbyDate(html, title) {
    const index = html.indexOf(title);
    if (index < 0) {
        return '';
    }
    return extractDateFromText(cleanMarkup(html.slice(index, index + 500)));
}

function extractDateFromText(value) {
    const match = String(value || '').match(/\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t(?:ember)?)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\.?\s+\d{1,2},?\s+\d{4}\b|\b\d{1,2}\/\d{1,2}\/\d{4}\b/i);
    if (!match) {
        return '';
    }
    const date = new Date(match[0]);
    return Number.isNaN(date.getTime()) ? '' : date.toISOString();
}

function getSignalTime(signal) {
    const date = new Date(signal.date || 0);
    return Number.isNaN(date.getTime()) ? 0 : date.getTime();
}

function readJsonBody(req) {
    return new Promise((resolve, reject) => {
        let raw = '';

        req.on('data', chunk => {
            raw += chunk;
            if (raw.length > 2_000_000) {
                reject(new Error('Request body too large.'));
                req.destroy();
            }
        });

        req.on('end', () => {
            try {
                resolve(raw ? JSON.parse(raw) : {});
            } catch (error) {
                reject(error);
            }
        });

        req.on('error', reject);
    });
}

function sendJson(res, statusCode, payload) {
    res.writeHead(statusCode, {
        'Content-Type': 'application/json; charset=utf-8'
    });
    res.end(JSON.stringify(payload));
}
