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
const DEFAULT_FUN_FACTS = [
    'The Springfield Armory helped pioneer interchangeable parts manufacturing in the U.S. during the 1800s.',
    'By 1913, Ford cut Model T assembly time to about 93 minutes, redefining industrial scale.',
    'WWII factory conversion helped U.S. industry build ships, aircraft, and vehicles at historic speed.',
    'American machine tool makers enabled precision production across aerospace, auto, and defense.',
    'Containerization and logistics innovation helped U.S. manufacturers ship faster and cheaper worldwide.'
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

const server = http.createServer(async (req, res) => {
    try {
        if (req.method === 'GET' && req.url.startsWith('/api/slideshow')) {
            sendJson(res, 200, { slides: getSlideshowSlides() });
            return;
        }

        if (req.method === 'POST' && req.url === '/api/chat') {
            await handleChatRequest(req, res);
            return;
        }
        if (req.method === 'POST' && req.url === '/api/fun-fact') {
            await handleFunFactRequest(req, res);
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
});

server.listen(PORT, HOST, () => {
    console.log(`American Supply Chain server running at http://${HOST}:${PORT}`);
});

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

async function handleFunFactRequest(req, res) {
    const fact = nextCachedFunFact();

    sendJson(res, 200, {
        fact,
        model: 'local-cache'
    });
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
