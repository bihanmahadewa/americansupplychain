#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const LITE_PATH = path.join(ROOT, 'mfg-companies-lite.json');
const DETAILS_DIR = path.join(ROOT, 'mfg-company-details');
const OVERRIDES_PATH = path.join(ROOT, 'mfg-enrichment-overrides.json');

const STATE_ALIASES = {
    al: 'Alabama', ak: 'Alaska', az: 'Arizona', ar: 'Arkansas', ca: 'California', co: 'Colorado', ct: 'Connecticut',
    de: 'Delaware', dc: 'District of Columbia', fl: 'Florida', ga: 'Georgia', hi: 'Hawaii', id: 'Idaho', il: 'Illinois',
    in: 'Indiana', ia: 'Iowa', ks: 'Kansas', ky: 'Kentucky', la: 'Louisiana', me: 'Maine', md: 'Maryland',
    ma: 'Massachusetts', mi: 'Michigan', mn: 'Minnesota', ms: 'Mississippi', mo: 'Missouri', mt: 'Montana',
    ne: 'Nebraska', nv: 'Nevada', nh: 'New Hampshire', nj: 'New Jersey', nm: 'New Mexico', ny: 'New York',
    nc: 'North Carolina', nd: 'North Dakota', oh: 'Ohio', ok: 'Oklahoma', or: 'Oregon', pa: 'Pennsylvania',
    ri: 'Rhode Island', sc: 'South Carolina', sd: 'South Dakota', tn: 'Tennessee', tx: 'Texas', ut: 'Utah',
    vt: 'Vermont', va: 'Virginia', wa: 'Washington', wv: 'West Virginia', wi: 'Wisconsin', wy: 'Wyoming'
};

const STATE_NAMES = new Set(Object.values(STATE_ALIASES));
const args = parseArgs(process.argv.slice(2));

main().catch((error) => {
    console.error(error);
    process.exit(1);
});

async function main() {
    const liteRows = JSON.parse(fs.readFileSync(LITE_PATH, 'utf8'));
    const missingRows = liteRows.filter((row) => !row?.[3] || !row?.[4]);
    const missingIds = new Set(missingRows.map((row) => String(row[0])));
    const overrides = args.rebuild ? {} : readOverrides();
    const detailsById = loadDetailsForIds(missingIds);

    let localDetailUpdates = 0;
    for (const row of missingRows) {
        const id = String(row[0]);
        const detail = detailsById.get(id);
        if (!detail) {
            continue;
        }

        const update = {};
        if (detail.website && !row[5]) {
            update.website = detail.website;
        }
        if (detail.description) {
            update.description = detail.description;
        }
        if (isUsefulProducts(detail.products)) {
            update.products = detail.products.filter(Boolean);
        }

        if (Object.keys(update).length > 0) {
            const didChange = mergeOverride(overrides, id, update, {
                type: 'local_detail_chunk',
                path: `mfg-company-details/${detail.__file}`
            });
            if (didChange) {
                localDetailUpdates += 1;
            }
        }
    }

    let searchUpdates = 0;
    if (!args.localOnly) {
        searchUpdates = await enrichFromGoogleSearch(missingRows, overrides);
    }

    writeOverrides(overrides);
    console.log(JSON.stringify({
        missingLocationRows: missingRows.length,
        localDetailUpdates,
        searchUpdates,
        overridesWritten: Object.keys(overrides).length,
        output: path.relative(ROOT, OVERRIDES_PATH)
    }, null, 2));
}

function parseArgs(argv) {
    const parsed = {
        localOnly: argv.includes('--local-only'),
        rebuild: argv.includes('--rebuild'),
        limit: 25,
        offset: 0
    };

    argv.forEach((arg, index) => {
        if (arg === '--limit') {
            parsed.limit = Number(argv[index + 1] || parsed.limit);
        }
        if (arg === '--offset') {
            parsed.offset = Number(argv[index + 1] || parsed.offset);
        }
    });

    return parsed;
}

function readOverrides() {
    if (!fs.existsSync(OVERRIDES_PATH)) {
        return {};
    }
    return JSON.parse(fs.readFileSync(OVERRIDES_PATH, 'utf8'));
}

function writeOverrides(overrides) {
    const ordered = Object.fromEntries(
        Object.entries(overrides).sort(([a], [b]) => Number(a) - Number(b))
    );
    fs.writeFileSync(OVERRIDES_PATH, `${JSON.stringify(ordered, null, 2)}\n`);
}

function loadDetailsForIds(ids) {
    const detailsById = new Map();
    if (!fs.existsSync(DETAILS_DIR)) {
        return detailsById;
    }

    const files = fs.readdirSync(DETAILS_DIR).filter((file) => file.endsWith('.json')).sort();
    for (const file of files) {
        const rows = JSON.parse(fs.readFileSync(path.join(DETAILS_DIR, file), 'utf8'));
        for (const row of rows) {
            const id = String(row.id);
            if (ids.has(id)) {
                detailsById.set(id, { ...row, __file: file });
            }
        }
    }
    return detailsById;
}

async function enrichFromGoogleSearch(missingRows, overrides) {
    const apiKey = process.env.GOOGLE_SEARCH_API_KEY;
    const cx = process.env.GOOGLE_SEARCH_CX;
    if (!apiKey || !cx) {
        console.warn('Skipping Google search enrichment. Set GOOGLE_SEARCH_API_KEY and GOOGLE_SEARCH_CX, or pass --local-only.');
        return 0;
    }

    const candidates = missingRows
        .filter((row) => {
            const override = overrides[String(row[0])] || {};
            return !override.location?.city || !override.location?.state;
        })
        .slice(args.offset, args.offset + args.limit);

    let updates = 0;
    for (const row of candidates) {
        const result = await lookupCompanyLocation(row, apiKey, cx);
        if (!result) {
            continue;
        }

        mergeOverride(overrides, String(row[0]), {
            location: {
                city: result.city,
                state: result.state,
                zip: result.zip || ''
            },
            website: row[5] || result.website || undefined,
            description: result.description || undefined
        }, {
            type: 'google_custom_search',
            query: result.query,
            url: result.url
        });
        updates += 1;
        await sleep(120);
    }

    return updates;
}

async function lookupCompanyLocation(row, apiKey, cx) {
    const [id, name, industry, , , website] = row;
    const query = [name, industry, 'manufacturer address city state'].filter(Boolean).join(' ');
    const url = new URL('https://www.googleapis.com/customsearch/v1');
    url.searchParams.set('key', apiKey);
    url.searchParams.set('cx', cx);
    url.searchParams.set('q', query);
    url.searchParams.set('num', '5');

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Google Custom Search failed for ${id}: ${response.status}`);
    }

    const payload = await response.json();
    const items = Array.isArray(payload.items) ? payload.items : [];
    const knownDomain = getDomain(website);
    const candidates = [];

    items.forEach((item, index) => {
        const text = [
            item.title,
            item.snippet,
            item.htmlSnippet,
            item.displayLink,
            item.link
        ].filter(Boolean).join(' ');
        const parsedLocations = parseLocationCandidates(text);
        parsedLocations.forEach((location) => {
            const resultDomain = getDomain(item.link);
            const domainBoost = knownDomain && resultDomain.includes(knownDomain) ? 6 : 0;
            candidates.push({
                ...location,
                score: 10 - index + domainBoost,
                url: item.link,
                website: item.link,
                description: item.snippet || '',
                query
            });
        });
    });

    candidates.sort((a, b) => b.score - a.score);
    return candidates[0] || null;
}

function parseLocationCandidates(text) {
    const normalized = decodeHtml(String(text || '').replace(/<[^>]+>/g, ' '));
    const candidates = [];
    const cityStatePattern = /\b([A-Z][a-zA-Z.' -]{1,40}),\s+(Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|District of Columbia|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming|AL|AK|AZ|AR|CA|CO|CT|DE|DC|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY)\b(?:\s+(\d{5}))?/g;

    let match;
    while ((match = cityStatePattern.exec(normalized)) !== null) {
        const city = cleanupCity(match[1]);
        const state = normalizeState(match[2]);
        if (city && state && STATE_NAMES.has(state)) {
            candidates.push({ city, state, zip: match[3] || '' });
        }
    }
    return candidates;
}

function cleanupCity(value) {
    return String(value || '')
        .replace(/\b(?:address|headquarters|located in|city|suburb|street)\b/gi, '')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/^[^A-Za-z]+|[^A-Za-z. -]+$/g, '');
}

function normalizeState(value) {
    const token = String(value || '').trim();
    return STATE_ALIASES[token.toLowerCase()] || token;
}

function mergeOverride(overrides, id, update, source) {
    const existing = overrides[id] || {};
    const before = JSON.stringify(existing);
    const next = { ...existing };

    if (update.location) {
        next.location = {
            ...(existing.location || {}),
            ...removeUndefined(update.location)
        };
    }
    ['website', 'description', 'products'].forEach((key) => {
        if (update[key] !== undefined && update[key] !== '') {
            next[key] = update[key];
        }
    });
    const sources = existing.sources || [];
    const sourceKey = JSON.stringify(source);
    next.sources = sources.some((entry) => JSON.stringify(entry) === sourceKey)
        ? sources
        : [...sources, source];
    overrides[id] = next;
    return JSON.stringify(next) !== before;
}

function isUsefulProducts(products) {
    if (!Array.isArray(products)) {
        return false;
    }
    const cleaned = products.map((product) => String(product || '').trim()).filter(Boolean);
    if (!cleaned.length) {
        return false;
    }
    return cleaned.some((product) => product.toLowerCase() !== 'industrial products');
}

function removeUndefined(value) {
    return Object.fromEntries(Object.entries(value).filter(([, entry]) => entry !== undefined));
}

function getDomain(value) {
    try {
        return new URL(value).hostname.replace(/^www\./, '').toLowerCase();
    } catch {
        return '';
    }
}

function decodeHtml(value) {
    return value
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>');
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
