# Expanded Search Guide

## What's New

The search now covers ALL types of manufacturing businesses, not just those that say "manufacturer":

### Search Categories

1. **Sheet Metal** - Shops doing bending, laser cutting, metal fabrication
2. **PCB & Electronics** - Circuit board assembly, PCBA, electronics
3. **3D Printing** - Additive manufacturing, rapid prototyping
4. **CNC & Machining** - Machine shops, precision machining, job shops
5. **Fab Shops** - General fabrication, custom metalwork
6. **Injection Molding** - Plastic manufacturing, tooling
7. **Welding** - Custom welding services, metal joining
8. **Casting & Forging** - Die casting, metal casting, forging

## How to Search

### Quick Test (Free - see if it works)
```bash
node test-search.js
```

This runs 3 test queries to see if you have API credits remaining.

### Full Broad Search
```bash
npm run broad
```

Options:
1. **Search all categories** - Most comprehensive (uses more credits)
2. **Search specific categories** - Target specific industries
3. **Quick search** - 2 queries per category (faster, cheaper)

### Target Specific Industries

If you only want certain types of manufacturers:

```bash
npm run broad
# Then choose option 2
# Select: 1,2,3 for Sheet Metal, PCB, and 3D Printing
```

## Cost Estimates

Based on $0.15/1,000 tweets and $0.18/1,000 profiles:

- **Quick search** (2 queries × 8 categories): ~$1-2
- **Targeted search** (3 categories, 4 queries each): ~$2-3
- **Full search** (all categories): ~$5-10

## What It Finds

The search now captures businesses that describe themselves as:

✅ "CNC shop in Detroit"
✅ "PCB assembly services"
✅ "Custom sheet metal fabrication"
✅ "3D printing and prototyping"
✅ "We run a machine shop"
✅ "Injection molding since 1985"

Not just:
❌ "We are a manufacturer"

## Example Queries Being Used

### Sheet Metal
- sheet metal shop USA
- laser cutting shop
- metal bending services

### PCB
- PCB assembly USA
- circuit board manufacturer
- PCBA services USA

### 3D Printing
- 3D printing service USA
- additive manufacturing
- rapid prototyping USA

### CNC
- CNC shop USA
- machine shop
- precision machining

### And 30+ more queries across all categories

## Keywords Being Detected

Profile must mention one of these:
- Process terms: cnc, welding, machining, milling, 3d printing
- Business types: shop owner, machine shop, fab shop
- Materials: sheet metal, pcb, circuit board, plastic
- Methods: injection molding, casting, forging, laser cutting

## Output

All searches save to:
- `broad-search-results.json` - Raw data
- `broad-search-export.js` - Ready for data.js

Then:
1. Review the results
2. Copy valid entries to `data.js`
3. Refresh website to see them

## Filtering

The scraper automatically filters for:
✅ US-based (location has US state/city)
✅ Manufacturing-related (keywords in bio)
✅ Active accounts (minimum followers)

## Tips for Best Results

### 1. Start with Quick Search
Test with 2 queries per category to see what you find before committing to full search.

### 2. Target Your Industry
If you know what you want, search specific categories:
- Just PCB? Select category 2
- Just metal work? Select categories 1, 4, 5, 7

### 3. Check Results Frequently
Review `broad-search-results.json` after each category to see quality.

### 4. Combine with Network Analysis
```bash
# First: broad keyword search
npm run broad

# Then: analyze networks of best manufacturers found
node analyze-followers.js @bestMfgFound1 @bestMfgFound2
```

## Expected Results

With $10 in credits, you could find:
- 200-500 manufacturers across all categories
- Mix of small shops and larger operations
- Diverse locations across USA
- Various specializations

## Next Steps After Search

1. **Review results**
   ```bash
   cat broad-search-results.json | jq '.[] | {name, twitter, location, description}'
   ```

2. **Add to website**
   Copy entries from `broad-search-export.js` to `data.js`

3. **Enrich data**
   Visit their websites to add:
   - Email addresses
   - Phone numbers
   - Specific products
   - Employee count
   - Founded date

4. **Verify legitimacy**
   Check their X feed to confirm they're:
   - Actually manufacturing
   - Still in business
   - US-based

## Troubleshooting

### "Out of credits"
Add more at https://twitterapi.io/dashboard

### "Rate limited"
The script automatically waits and retries

### "No results found"
- Check if keywords are too specific
- Try broader terms
- Verify API key is working: `node test-api.js`

### "Too many results"
- Increase MIN_FOLLOWERS in .env
- Search specific categories only
- Add more filtering keywords

## Current Search Capacity

**40 queries** across 8 categories:
- Sheet Metal: 4 queries
- PCB: 4 queries
- 3D Printing: 4 queries
- CNC: 4 queries
- Fab Shops: 4 queries
- Injection Molding: 4 queries
- Welding: 4 queries
- Casting: 4 queries

Each query searches 30 tweets by default = **1,200 tweets** total

At $0.15/1,000 tweets = **~$0.18 for tweets**
Plus profile lookups = **~$5-10 total**

## Customization

Edit `broad-search.js` to:
- Add your own queries
- Change tweets per query
- Adjust sleep times
- Add new categories

Example:
```javascript
'Aerospace': [
    'aerospace manufacturing USA',
    'aircraft parts manufacturer',
    'aviation machining'
]
```
