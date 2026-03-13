require('dotenv').config();
const ManufacturerScraper = require('./scraper');

const API_KEY = process.env.TWITTER_API_KEY;

// Targeted search queries by category
const SEARCH_CATEGORIES = {
    'Sheet Metal': [
        'sheet metal shop USA',
        'sheet metal fabrication',
        'metal bending services',
        'laser cutting shop'
    ],
    'PCB & Electronics': [
        'PCB assembly USA',
        'circuit board manufacturer',
        'electronics assembly',
        'PCBA services USA'
    ],
    '3D Printing': [
        '3D printing service USA',
        'additive manufacturing',
        '3D printing shop',
        'rapid prototyping USA'
    ],
    'CNC & Machining': [
        'CNC shop USA',
        'machine shop',
        'precision machining',
        'CNC machining services'
    ],
    'Fab Shops': [
        'fab shop USA',
        'fabrication shop',
        'custom fabrication',
        'metal fabrication shop'
    ],
    'Injection Molding': [
        'injection molding USA',
        'plastic manufacturing',
        'molding shop USA',
        'custom molding'
    ],
    'Welding': [
        'welding shop USA',
        'welding fabrication',
        'custom welding',
        'metal welding services'
    ],
    'Casting & Forging': [
        'die casting USA',
        'metal casting',
        'forging shop',
        'aluminum casting'
    ]
};

async function searchByCategory(scraper, category, queries, tweetsPerQuery = 30) {
    console.log(`\n=== ${category} ===\n`);

    for (const query of queries) {
        console.log(`Searching: "${query}"`);

        try {
            const tweets = await scraper.searchTweets(query, tweetsPerQuery);
            console.log(`  Found ${tweets.length} tweets`);

            if (tweets.length === 0) continue;

            const usernames = await scraper.extractUsersFromTweets(tweets);
            console.log(`  Extracting ${usernames.length} unique users`);

            for (const username of usernames) {
                try {
                    const userInfo = await scraper.getUserInfo(username);
                    if (userInfo) {
                        await scraper.processProfile(userInfo);
                    }
                } catch (error) {
                    if (error.response?.status === 402) {
                        console.log('\n⚠️  API credits exhausted');
                        return 'OUT_OF_CREDITS';
                    }
                }
                await scraper.sleep(300);
            }
        } catch (error) {
            if (error.response?.status === 402) {
                console.log('\n⚠️  API credits exhausted');
                return 'OUT_OF_CREDITS';
            }
            console.error(`  Error: ${error.message}`);
        }

        await scraper.sleep(1500);
    }

    return 'OK';
}

async function main() {
    if (!API_KEY) {
        console.error('Error: TWITTER_API_KEY not found in .env file');
        process.exit(1);
    }

    console.log('=== Broad Manufacturing Search ===\n');
    console.log('Searching for:');
    Object.keys(SEARCH_CATEGORIES).forEach(cat => {
        console.log(`  - ${cat}`);
    });

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('\nOptions:');
    console.log('1. Search all categories (uses more credits)');
    console.log('2. Search specific categories');
    console.log('3. Quick search (2 queries per category)');

    const choice = await new Promise(resolve => {
        readline.question('\nChoose option (1-3): ', resolve);
    });

    let categoriesToSearch = Object.keys(SEARCH_CATEGORIES);
    let queriesPerCategory = 4;

    if (choice === '2') {
        console.log('\nAvailable categories:');
        categoriesToSearch.forEach((cat, i) => {
            console.log(`  ${i + 1}. ${cat}`);
        });

        const selected = await new Promise(resolve => {
            readline.question('\nEnter category numbers (comma-separated, or "all"): ', resolve);
        });

        if (selected.toLowerCase() !== 'all') {
            const indices = selected.split(',').map(n => parseInt(n.trim()) - 1);
            categoriesToSearch = indices
                .filter(i => i >= 0 && i < categoriesToSearch.length)
                .map(i => categoriesToSearch[i]);
        }
    } else if (choice === '3') {
        queriesPerCategory = 2;
        console.log('\nRunning quick search (2 queries per category)');
    }

    readline.close();

    console.log(`\nSearching ${categoriesToSearch.length} categories...\n`);

    const scraper = new ManufacturerScraper(API_KEY);

    for (const category of categoriesToSearch) {
        const queries = SEARCH_CATEGORIES[category].slice(0, queriesPerCategory);
        const result = await searchByCategory(scraper, category, queries);

        if (result === 'OUT_OF_CREDITS') {
            console.log('\nStopping search due to insufficient credits');
            break;
        }

        console.log(`\nProgress: ${scraper.manufacturers.length} manufacturers found so far`);
    }

    console.log('\n=== Search Complete ===\n');
    console.log(`Total found: ${scraper.manufacturers.length} manufacturers`);

    // Save results
    scraper.saveResults('broad-search-results.json');
    scraper.exportToDataJS('broad-search-export.js');

    console.log('\nFiles created:');
    console.log('  - broad-search-results.json');
    console.log('  - broad-search-export.js');

    // Breakdown by category
    console.log('\nBreakdown:');
    const byIndustry = {};
    scraper.manufacturers.forEach(m => {
        const desc = m.description.toLowerCase();
        for (const [category, queries] of Object.entries(SEARCH_CATEGORIES)) {
            if (queries.some(q => desc.includes(q.split(' ')[0].toLowerCase()))) {
                byIndustry[category] = (byIndustry[category] || 0) + 1;
            }
        }
    });

    Object.entries(byIndustry).forEach(([cat, count]) => {
        console.log(`  ${cat}: ${count}`);
    });
}

main().catch(console.error);
