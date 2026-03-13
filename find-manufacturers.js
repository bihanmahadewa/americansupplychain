require('dotenv').config();
const ManufacturerScraper = require('./scraper');
const FollowerAnalyzer = require('./analyze-followers');

const API_KEY = process.env.TWITTER_API_KEY;

async function main() {
    if (!API_KEY) {
        console.error('Error: TWITTER_API_KEY not found in .env file');
        process.exit(1);
    }

    console.log('=== American Manufacturing Directory - Auto Discovery ===\n');
    console.log('This will:');
    console.log('1. Analyze followers/following of @fabworks_guy and @zanehengsperger');
    console.log('2. Search for manufacturing-related tweets to find founders');
    console.log('3. Filter for US-based manufacturers');
    console.log('4. Extract product and contact info\n');

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const answer = await new Promise(resolve => {
        readline.question('This will use API credits. Continue? (y/n): ', resolve);
    });
    readline.close();

    if (answer.toLowerCase() !== 'y') {
        console.log('Cancelled.');
        process.exit(0);
    }

    console.log('\n--- Phase 1: Analyzing Reference Profiles ---\n');

    const analyzer = new FollowerAnalyzer(API_KEY);

    // Analyze fabworks_guy
    console.log('Analyzing @fabworks_guy network...');
    await analyzer.analyzeReferenceProfile('fabworks_guy', true, true);
    console.log(`Found ${analyzer.scraper.manufacturers.length} manufacturers so far`);

    await analyzer.sleep(3000);

    // Analyze zanehengsperger
    console.log('\nAnalyzing @zanehengsperger network...');
    await analyzer.analyzeReferenceProfile('zanehengsperger', true, true);
    console.log(`Found ${analyzer.scraper.manufacturers.length} manufacturers so far`);

    console.log('\n--- Phase 2: Searching Manufacturing Tweets ---\n');

    // Run tweet search (limited queries to save credits)
    const tweetQueries = [
        'we manufacture in America',
        'our factory in USA',
        'made in our USA facility',
        'sheet metal fabrication shop',
        'CNC machining services USA'
    ];

    for (const query of tweetQueries) {
        console.log(`\nSearching: "${query}"`);
        const tweets = await analyzer.scraper.searchTweets(query, 30);
        console.log(`Found ${tweets.length} tweets`);

        const usernames = await analyzer.scraper.extractUsersFromTweets(tweets);
        console.log(`Extracting ${usernames.length} unique users...`);

        for (const username of usernames) {
            const userInfo = await analyzer.scraper.getUserInfo(username);
            if (userInfo) {
                await analyzer.scraper.processProfile(userInfo);
            }
            await analyzer.sleep(500);
        }

        await analyzer.sleep(2000);
    }

    console.log('\n--- Results ---\n');
    console.log(`✓ Found ${analyzer.scraper.manufacturers.length} manufacturers total`);

    // Save results
    analyzer.saveResults('manufacturers-found.json');
    analyzer.exportToDataJS('manufacturers-export.js');

    console.log('\nFiles created:');
    console.log('1. manufacturers-found.json - Full data');
    console.log('2. manufacturers-export.js - Ready for data.js');
    console.log('\nNext steps:');
    console.log('1. Review manufacturers-found.json');
    console.log('2. Fill in missing details (city, state, industry)');
    console.log('3. Copy entries to data.js');
    console.log('4. Test on website (open index.html)');
}

main().catch(console.error);
