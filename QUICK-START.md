# Quick Start Guide

## View the Directory

Just open these files in your browser:
- `index.html` - Styled version
- `minimal.html` - Simple version

## Add Manufacturers (3 Methods)

### Method 1: Manual Entry (Works Now)

```bash
node manual-add.js
```

Follow the prompts to add manufacturers. Copy the output into `data.js`.

### Method 2: Edit data.js Directly

Open `data.js` and add entries following the existing format.

### Method 3: Twitter API Scraper (Needs Setup)

The automated scraper is ready but needs proper TwitterAPI.io endpoint documentation.

**To get it working:**

1. Contact TwitterAPI.io support:
   - Email: hello@twitterapi.io
   - Live chat: https://twitterapi.io (24/7)

2. Ask for:
   - Complete endpoint documentation
   - Example code for searching users
   - Example code for getting user followers

3. Your API key: `new1_9d7114abf07b44f4961293991fdddf60`

## Finding Manufacturers on X

### Search Strategies

1. **Keyword Search**
   - "american manufacturing" + location
   - "made in USA" + industry
   - "#madeinamerica" + product type

2. **Industry-Specific**
   - Sheet metal fabrication USA
   - CNC machining American
   - Textile manufacturer America
   - Electronics assembly US

3. **Follow the Network**
   - Find one manufacturer
   - Check who they follow
   - Check their followers
   - Look at their retweets/mentions

### Profile Indicators

Look for:
- Location in bio (US city/state)
- Manufacturing keywords
- Products mentioned
- Factory/facility photos
- B2B language

### Good Reference Profiles to Start

Find 2-3 manufacturers in industries you want to cover, then:
- Follow their followers
- Check who they engage with
- Look at industry hashtags they use

## Current Status

✅ Website working
✅ Search/filter working
✅ Manual entry tool ready
⏸️ Auto-scraper ready (waiting for API docs)

## Next Steps

1. Use manual-add.js to add manufacturers you know
2. Search X.com for manufacturers
3. Contact TwitterAPI.io for proper API documentation
4. Once API docs are available, run automated scraper

## Test Your Setup

```bash
# View the website
open index.html

# Or minimal version
open minimal.html

# Add manufacturers manually
node manual-add.js
```
