# American Supply Chain

Open-source index of U.S. manufacturers, industrial suppliers, battery supply-chain companies, and sourcing signals. The app is a static-first web UI with a small Node/Vercel-compatible API layer for search assistance, contribution PRs, reshoring signals, and paged manufacturer data.

## What Is Included

- Interactive U.S. manufacturer map and searchable list view.
- Core curated manufacturer dataset in `public/data/data.js`.
- Public NAATBatt battery supply-chain import in `public/data/naatbatt-imports.js`.
- IQS-derived motion-control and industrial supplier import in `public/data/iqs-companies.js`.
- Large MFG directory runtime data in `public/data/mfg-companies-lite.json` plus detail chunks under `public/data/mfg-company-details/`.
- Enrichment overrides in `public/data/mfg-enrichment-overrides.json`.
- Local cached manufacturing facts in `data/fun-facts-cache.json`.
- API routes for chat, contributions, fun facts, reshoring signals, MFG paging, map pins, and detail lookup.

Current dataset scale:

- `public/data/data.js`: about 282 curated records.
- `public/data/naatbatt-imports.js`: about 435 battery supply-chain records.
- `public/data/iqs-companies.js`: about 894 industrial supplier records.
- `public/data/mfg-companies-lite.json`: 321,298 lightweight manufacturer rows.
- `public/data/mfg-company-details/`: 321,298 detailed manufacturer records split into chunks.

## Project Layout

```txt
api/                 Vercel API route wrappers
data/                Server-only cached data
public/              Browser-served app files
public/assets/       Images and static assets
public/data/         Browser/API runtime datasets
server.js            Local server and shared API handler
```

## Runtime Files

These files are needed for the index to run:

- `public/index.html`, `public/styles.css`, `public/app.js`
- `server.js`, `api/*.js`
- `public/data/data.js`, `public/data/naatbatt-imports.js`, `public/data/iqs-companies.js`
- `public/data/mfg-companies-lite.json`, `public/data/mfg-company-details/*.json`, `public/data/mfg-enrichment-overrides.json`
- `data/fun-facts-cache.json`
- `public/assets/flag.png`, `public/assets/reindustrialize.png`
- `package.json`, `package-lock.json`

Raw spreadsheets, one-off import scratch files, old demo HTML, and unused assets are intentionally not kept in this branch.

## Run Locally

```sh
npm install
npm start
```

The server defaults to:

```txt
http://127.0.0.1:3000
```

The UI also uses browser-loaded CDN assets for Leaflet, D3, TopoJSON, analytics, and the U.S. map topology.

## Optional Environment

Most of the index works without secrets. These variables unlock optional server features:

```sh
OPENAI_API_KEY=...
OPENAI_MODEL=gpt-4.1
VECTOR_STORE_ID=...
GITHUB_TOKEN=...
GITHUB_REPO=bihanmahadewa/americansupplychain
GITHUB_BASE_BRANCH=main
```

- `OPENAI_API_KEY` and `VECTOR_STORE_ID` power `/api/chat`.
- `GITHUB_TOKEN` powers `/api/contribute`, which opens a pull request that edits `public/data/data.js`.
- Without those values, the map, list, search, static data, MFG paging, details, cached fun facts, and fallback reshoring signals still run.

## Data Contributions

Add curated records to `public/data/data.js`. Each company should be a real U.S.-based manufacturer or industrial supplier with factual public-source information.

Record shape:

```js
{
    id: 12345,
    name: "Company Name",
    twitter: "@handle",
    twitterUrl: "https://x.com/handle",
    website: "https://example.com",
    email: "info@example.com",
    phone: "555-555-5555",
    location: {
        city: "City",
        state: "State",
        zip: "12345"
    },
    industry: "Industry label",
    products: ["Product A", "Product B"],
    description: "Short factual summary.",
    founded: 1999,
    employees: "50-100",
    source: "Source name",
    sourceUrl: "https://source.example"
}
```

Contribution checks:

- Use unique IDs higher than the current max.
- Do not renumber existing records.
- Prefer official company sites or reputable directories.
- Keep descriptions short, factual, and verifiable.
- Check for duplicate companies before adding new records.
- Do not include sensitive personal data.

## API Routes

- `GET /api/mfg-lite?offset=0&limit=1000`
- `GET /api/mfg-map-pins?offset=0&limit=25000`
- `GET /api/company-details?id=123`
- `GET /api/signals`
- `POST /api/chat`
- `POST /api/fun-fact`
- `POST /api/contribute`

The `api/*.js` files are thin wrappers around `server.js` so the same handlers work locally and on Vercel.
