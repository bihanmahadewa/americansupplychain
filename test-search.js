require('dotenv').config();
const ManufacturerScraper = require('./scraper');

const API_KEY = process.env.TWITTER_API_KEY;

// Quick test with just a few queries
const TEST_QUERIES = [
    'CNC shop USA',
    'PCB assembly USA',
    '3D printing service USA'
];

async function quickTest() {
    console.log('=== Quick Search Test ===\n');
    console.log('Testing with 3 queries to see what we can find\n');

    const scraper = new ManufacturerScraper(API_KEY);

    for (const query of TEST_QUERIES) {
        console.log(`Searching: "${query}"`);

        try {
            const tweets = await scraper.searchTweets(query, 10);
            console.log(`  ✓ Found ${tweets.length} tweets`);

            if (tweets.length > 0) {
                const usernames = await scraper.extractUsersFromTweets(tweets);
                console.log(`  ✓ Extracted ${usernames.length} unique users`);

                // Just show first 3 usernames
                console.log(`  Sample users: ${usernames.slice(0, 3).join(', ')}`);
            }
        } catch (error) {
            if (error.response?.status === 402) {
                console.log('  ❌ Out of API credits');
                console.log('\nTo continue searching:');
                console.log('  1. Add credits at https://twitterapi.io');
                console.log('  2. Run: npm run broad');
                return;
            } else if (error.response?.status === 429) {
                console.log('  ⚠️  Rate limited, waiting...');
                await scraper.sleep(5000);
            } else {
                console.log(`  ❌ Error: ${error.message}`);
            }
        }

        await scraper.sleep(2000);
    }

    console.log(`\n✓ Test complete!`);
    console.log('\nExpanded search now includes:');
    console.log('  • Sheet metal shops');
    console.log('  • PCB assembly');
    console.log('  • 3D printing services');
    console.log('  • CNC/machine shops');
    console.log('  • Fab shops');
    console.log('  • Injection molding');
    console.log('  • Welding shops');
    console.log('  • Casting & forging');
    console.log('\nReady to run full search with: npm run broad');
}

quickTest().catch(console.error);
