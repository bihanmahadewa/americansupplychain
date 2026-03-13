# Twitter Scraper Guide

This guide shows you how to find American manufacturers on X.com using automated search.

## Setup

### 1. Get TwitterAPI.io Access

1. Go to https://twitterapi.io
2. Sign up (free trial with $0.10 credit, no credit card)
3. Get your API key from the dashboard

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure API Key

```bash
cp .env.example .env
```

Edit `.env` and add your API key:
```
TWITTER_API_KEY=your_actual_api_key_here
```

## Usage

### Method 1: Keyword Search

Search for manufacturers using predefined queries:

```bash
npm run search
```

This will:
- Search for 15+ manufacturing-related queries
- Filter for US-based accounts
- Extract profile info and recent tweets
- Save results to `manufacturers-found.json`
- Generate `manufacturers-export.js` ready for data.js

**Built-in search queries:**
- "american manufacturing bio:manufacturer"
- "sheet metal fabrication USA"
- "CNC machining American made"
- "industrial design manufacturing US"
- "textile manufacturer USA"
- And more...

### Method 2: Analyze Reference Profiles

Find manufacturers by analyzing followers of known manufacturers:

```bash
# Analyze specific profiles
node analyze-followers.js @exampleMfg1 @exampleMfg2

# Or edit analyze-followers.js and run
npm run analyze
```

**How it works:**
1. Fetches followers and following of reference profiles
2. Filters for US-based manufacturers
3. Extracts product info from their tweets
4. Saves results in same format as keyword search

## Customization

### Add Your Own Search Queries

Edit `scraper.js` and modify `SEARCH_QUERIES`:

```javascript
const SEARCH_QUERIES = [
    'your custom query here',
    'aerospace parts USA',
    'medical device manufacturer America',
    // Add more...
];
```

### Adjust Filters

In `.env`:
```
MIN_FOLLOWERS=50        # Minimum followers required
MAX_RESULTS_PER_QUERY=100  # Results per search
```

### Add Keywords

Edit `MANUFACTURING_KEYWORDS` in `scraper.js`:

```javascript
const MANUFACTURING_KEYWORDS = [
    'manufacturer',
    'fabrication',
    'your industry term',
    // Add more...
];
```

## Output Files

### manufacturers-found.json
Raw data with all found profiles:
```json
[
  {
    "name": "Company Name",
    "twitter": "@handle",
    "website": "https://...",
    "location": "City, State",
    "followers": 1234,
    "products": ["..."],
    "tweets": [...]
  }
]
```

### manufacturers-export.js
Ready-to-copy format for `data.js`:
```javascript
const newManufacturers = [
  {
    id: 100,
    name: "Company Name",
    twitter: "@handle",
    // ... complete format
  }
];
```

## Workflow

1. **Run search**
   ```bash
   npm run search
   ```

2. **Review results**
   - Open `manufacturers-found.json`
   - Verify they're legitimate manufacturers
   - Check locations and products

3. **Analyze reference profiles** (optional)
   ```bash
   node analyze-followers.js @knownMfg1 @knownMfg2
   ```

4. **Combine results**
   - Merge `manufacturers-export.js` and `followers-export.js`
   - Remove duplicates
   - Fill in missing details

5. **Add to website**
   - Copy entries from export files to `data.js`
   - Complete missing fields (city, state, industry)
   - Test on website

## Tips

### Finding Good Reference Profiles

Look for manufacturers that:
- Have 1000+ followers
- Post regularly about products
- Follow other manufacturers
- Engage with industry accounts

### Best Search Terms

- Industry-specific: "injection molding", "powder coating"
- Process-based: "CNC machining", "laser cutting"
- Material-focused: "aluminum fabrication", "carbon fiber"
- Location-based: "California manufacturer", "Texas metalwork"

### Avoiding Spam

The scraper filters for:
- Minimum follower count
- US location in bio
- Manufacturing keywords in bio
- Active accounts (with recent tweets)

## Cost Estimate

Based on TwitterAPI.io pricing ($0.15/1000 tweets, $0.18/1000 profiles):

- **Keyword search**: ~$0.02-0.05 per run
- **Follower analysis**: ~$0.04 per reference profile
- **Free trial**: $0.10 credit = ~200-300 profiles

## Troubleshooting

### "TWITTER_API_KEY not found"
- Make sure `.env` file exists
- Check API key is correctly copied
- No quotes needed around the key

### "Error searching"
- Check API credit balance
- Verify API key is active
- Rate limit might be hit (wait 1 minute)

### "No manufacturers found"
- Adjust MIN_FOLLOWERS in .env (try lower number)
- Broaden MANUFACTURING_KEYWORDS
- Check search queries are relevant

### "Too many results"
- Increase MIN_FOLLOWERS
- Add more specific keywords
- Reduce MAX_RESULTS_PER_QUERY

## Next Steps

After collecting profiles:
1. Manually verify each manufacturer
2. Visit their websites for complete info
3. Categorize by industry
4. Parse locations into city/state
5. Add email/phone if available on website
6. Check their X feed for product launches

## Advanced Usage

### Combine Both Methods

```javascript
// In a custom script:
const ManufacturerScraper = require('./scraper');
const FollowerAnalyzer = require('./analyze-followers');

async function fullSearch() {
    // 1. Keyword search
    const scraper = new ManufacturerScraper(API_KEY);
    await scraper.runSearch();

    // 2. Analyze top results as references
    const topProfiles = scraper.manufacturers
        .filter(m => m.followers > 1000)
        .slice(0, 5)
        .map(m => m.twitter.replace('@', ''));

    const analyzer = new FollowerAnalyzer(API_KEY);
    await analyzer.analyzeMultipleReferences(topProfiles);

    // Combine results
    // ...
}
```

### Filter by Industry

Add to scraper.js:
```javascript
const targetIndustries = ['automotive', 'aerospace', 'medical'];

function matchesIndustry(profile) {
    const bio = profile.description.toLowerCase();
    return targetIndustries.some(ind => bio.includes(ind));
}
```

## API Documentation

TwitterAPI.io endpoints used:
- `GET /search` - Search users by query
- `GET /tweets/user/:username` - Get user tweets
- `GET /followers/:username` - Get followers
- `GET /following/:username` - Get following

Full docs: https://twitterapi.io/docs
