# OS Dataset Contributor Guide

This repository contains the **OS (open-source) manufacturing dataset** used by the American Supply Chain directory.

## What Contributors Should Know
- The app currently reads records from `data.js`.
- Supporting JSON files (for imports or experiments) exist in the repo, but `data.js` is the source currently loaded by the server.
- Each entry should represent a real U.S.-based manufacturer or industrial supplier.

## Record Shape
Use this structure for each company entry:

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
  sourceCategory: "Optional source grouping"
}
```

## Data Standards
- Keep entries factual and concise.
- Use official company websites or reputable directories as sources.
- Avoid placeholders like `example.com` in production entries.
- Prefer full U.S. state names (for consistency with existing records).
- Keep `products` specific and useful for matching.
- Do not include sensitive personal data.

## ID Rules
- IDs must be unique.
- When adding records, use IDs higher than the current max.
- Do not renumber existing entries.

## Contribution Workflow
1. Add or edit records in `data.js`.
2. Validate syntax (no trailing structural errors, valid JS object formatting).
3. Start the app:
   - `npm install`
   - `npm start`
4. Spot-check the UI/API behavior for regressions.
5. Submit a PR with a clear summary:
   - What was added/changed
   - Source(s) used
   - Any assumptions or normalization decisions

## Quality Checklist
- [ ] Entry is a real company and relevant to U.S. supply chain/manufacturing.
- [ ] `name`, `industry`, `location`, `products`, and `description` are present.
- [ ] `website` is valid and reachable.
- [ ] `id` is unique.
- [ ] No duplicate company already exists under another spelling.
- [ ] No sensitive or unverifiable claims.

## Notes for Large Imports
For large batch imports (for example from spreadsheets or directories):
- Normalize state, phone, and product naming before merge.
- De-duplicate against `name + website + location`.
- Keep raw source files in clearly named files/folders for traceability.

## Questions
If any schema or sourcing rule is unclear, open an issue/PR note with a short proposed convention so we can keep the dataset consistent.
