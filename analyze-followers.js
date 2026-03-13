require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const ManufacturerScraper = require('./scraper');

const API_KEY = process.env.TWITTER_API_KEY;
const BASE_URL = 'https://api.twitterapi.io/twitter';

class FollowerAnalyzer {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.scraper = new ManufacturerScraper(apiKey);
    }

    async getFollowers(username, count = 200) {
        try {
            console.log(`Fetching followers of @${username}...`);

            const response = await axios.get(`${BASE_URL}/user/followers`, {
                params: {
                    userName: username,
                    count: count
                },
                headers: {
                    'x-api-key': this.apiKey
                }
            });

            return response.data.followers || [];
        } catch (error) {
            console.error(`Error fetching followers of @${username}:`, error.message);
            return [];
        }
    }

    async getFollowing(username, count = 200) {
        try {
            console.log(`Fetching following of @${username}...`);

            const response = await axios.get(`${BASE_URL}/user/followings`, {
                params: {
                    userName: username,
                    count: count
                },
                headers: {
                    'x-api-key': this.apiKey
                }
            });

            return response.data.followings || [];
        } catch (error) {
            console.error(`Error fetching following of @${username}:`, error.message);
            return [];
        }
    }

    async analyzeReferenceProfile(username, analyzeFollowers = true, analyzeFollowing = true) {
        console.log(`\nAnalyzing @${username}...\n`);

        const allProfiles = [];

        if (analyzeFollowers) {
            const followers = await this.getFollowers(username);
            console.log(`Found ${followers.length} followers`);
            allProfiles.push(...followers);
            await this.sleep(1000);
        }

        if (analyzeFollowing) {
            const following = await this.getFollowing(username);
            console.log(`Found ${following.length} following`);
            allProfiles.push(...following);
            await this.sleep(1000);
        }

        console.log(`\nProcessing ${allProfiles.length} profiles...\n`);

        for (const profile of allProfiles) {
            await this.scraper.processProfile(profile);
            await this.sleep(500); // Rate limiting
        }

        return this.scraper.manufacturers;
    }

    async analyzeMultipleReferences(usernames, analyzeFollowers = true, analyzeFollowing = true) {
        console.log(`Analyzing ${usernames.length} reference profiles...\n`);

        for (const username of usernames) {
            await this.analyzeReferenceProfile(username, analyzeFollowers, analyzeFollowing);
            await this.sleep(2000);
        }

        console.log(`\n✓ Analysis complete! Found ${this.scraper.manufacturers.length} manufacturers`);
        return this.scraper.manufacturers;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    saveResults(filename = 'followers-analysis.json') {
        this.scraper.saveResults(filename);
    }

    exportToDataJS(filename = 'followers-export.js') {
        this.scraper.exportToDataJS(filename);
    }
}

// Main execution
async function main() {
    if (!API_KEY) {
        console.error('Error: TWITTER_API_KEY not found in .env file');
        process.exit(1);
    }

    // Reference profiles - manufacturers to analyze
    const referenceProfiles = [
        'fabworks_guy',
        'zanehengsperger'
    ];

    console.log('=== Follower Analysis Tool ===\n');
    console.log('This tool analyzes followers/following of reference profiles');
    console.log('to find similar manufacturers.\n');

    const analyzer = new FollowerAnalyzer(API_KEY);

    // Analyze both followers and following
    await analyzer.analyzeMultipleReferences(
        referenceProfiles,
        true,  // Analyze followers
        true   // Analyze following
    );

    analyzer.saveResults('followers-analysis.json');
    analyzer.exportToDataJS('followers-export.js');

    console.log('\nResults saved!');
    console.log('- followers-analysis.json (raw data)');
    console.log('- followers-export.js (ready for data.js)');
}

// Run if called directly
if (require.main === module) {
    // Check for command line arguments
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.log('\nUsage:');
        console.log('  node analyze-followers.js @username1 @username2 ...');
        console.log('\nOr edit the referenceProfiles array in this file.\n');
        main().catch(console.error);
    } else {
        // Use command line arguments as reference profiles
        const usernames = args.map(u => u.replace('@', ''));
        const analyzer = new FollowerAnalyzer(API_KEY);

        analyzer.analyzeMultipleReferences(usernames, true, true)
            .then(() => {
                analyzer.saveResults('followers-analysis.json');
                analyzer.exportToDataJS('followers-export.js');
                console.log('\nDone!');
            })
            .catch(console.error);
    }
}

module.exports = FollowerAnalyzer;
