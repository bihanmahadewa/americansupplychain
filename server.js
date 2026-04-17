const http = require('http');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || '127.0.0.1';
const ROOT = __dirname;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-5';

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

    const body = await readJsonBody(req);
    const userMessage = String(body.message || '').trim();

    if (!userMessage) {
        sendJson(res, 400, { error: 'Message is required.' });
        return;
    }

    const visibleManufacturers = Array.isArray(body.visibleManufacturers) ? body.visibleManufacturers : [];
    const uiState = body.uiState || {};
    const context = buildAssistantContext(userMessage, visibleManufacturers, uiState);

    const response = await fetch('https://api.openai.com/v1/responses', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: OPENAI_MODEL,
            previous_response_id: body.previousResponseId || undefined,
            input: [
                {
                    role: 'developer',
                    content: [
                        {
                            type: 'input_text',
                            text: [
                                'You are the American Supply Chain directory assistant.',
                                'Answer using the provided workspace metadata and manufacturer context.',
                                'Be concrete and concise.',
                                'If the user asks for suppliers, recommend only companies that appear in the supplied context.',
                                'If evidence is incomplete, say that directly and explain what is missing.',
                                'Prefer bullet points when listing companies.',
                                'When helpful, mention category, industry, location, and why the match is relevant.'
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
                                context
                            })
                        }
                    ]
                }
            ]
        })
    });

    const payload = await response.json();
    if (!response.ok) {
        console.error(payload);
        sendJson(res, response.status, {
            error: payload.error?.message || 'OpenAI request failed.'
        });
        return;
    }

    sendJson(res, 200, {
        answer: extractOutputText(payload),
        responseId: payload.id || null,
        model: payload.model || OPENAI_MODEL,
        context: context.relevantManufacturers
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
