require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

const API_KEY = process.env.TWITTER_API_KEY;
const BASE_URL = 'https://api.twitterapi.io/twitter';

// Broad manufacturing search queries - capture all types of makers/fabricators
const SEARCH_QUERIES = [
    // Fab shops & fabrication
    'fab shop USA',
    'fabrication shop America',
    'machine shop American',
    'job shop manufacturing',

    // Sheet metal
    'sheet metal shop USA',
    'sheet metal fabrication America',
    'metal bending USA',
    'laser cutting shop',

    // PCB & Electronics
    'PCB assembly USA',
    'PCB manufacturing America',
    'electronics assembly shop',
    'circuit board USA',
    'PCBA services America',

    // 3D Printing & Additive
    '3D printing service USA',
    'additive manufacturing America',
    '3D printing shop USA',
    'rapid prototyping USA',

    // CNC & Machining
    'CNC shop USA',
    'CNC machining America',
    'precision machining USA',
    'turning milling USA',

    // Welding & Metal
    'welding shop USA',
    'metal fabrication America',
    'custom metalwork USA',

    // Injection molding & Plastics
    'injection molding USA',
    'plastic manufacturing America',
    'tooling shop USA',

    // Casting & Forging
    'die casting USA',
    'metal casting America',
    'forging shop USA',

    // Assembly & Contract
    'contract manufacturer USA',
    'assembly services America',
    'production shop USA',

    // Specific processes
    'powder coating USA',
    'anodizing shop America',
    'plating services USA',
    'heat treating USA'
];

// Keywords to look for in profiles - expanded for all types of makers
const MANUFACTURING_KEYWORDS = [
    // General
    'manufacturer', 'manufacturing', 'fabrication', 'made in usa',
    'made in america', 'american made', 'factory', 'production',
    'shop owner', 'machine shop', 'fab shop', 'job shop',

    // Processes
    'cnc', 'machining', 'milling', 'turning', 'grinding',
    'welding', 'laser cutting', 'waterjet', 'plasma cutting',
    'bending', 'forming', 'stamping', 'punching',

    // Materials & Methods
    'sheet metal', 'metal fabrication', 'metalwork',
    'pcb', 'circuit board', 'electronics assembly', 'pcba',
    '3d printing', 'additive manufacturing', 'rapid prototyping',
    'injection molding', 'plastic', 'tooling',
    'casting', 'forging', 'die casting',

    // Finishing
    'powder coating', 'anodizing', 'plating', 'finishing',
    'heat treating', 'coating',

    // Business types
    'contract manufacturer', 'oem', 'custom parts',
    'precision', 'engineering', 'assembly',
    'industrial', 'production', 'prototype'
];

// US state abbreviations and names for location filtering
const US_LOCATIONS = [
    'USA', 'United States', 'America', 'US',
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

class ManufacturerScraper {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.foundProfiles = new Set();
        this.manufacturers = [];
    }

    async searchTweets(query, maxResults = 100) {
        try {
            console.log(`Searching tweets: "${query}"...`);

            let allTweets = [];
            let cursor = '';
            const pagesNeeded = Math.ceil(maxResults / 20);

            for (let i = 0; i < pagesNeeded; i++) {
                const response = await axios.get(`${BASE_URL}/tweet/advanced_search`, {
                    params: {
                        query: query,
                        queryType: 'Latest',
                        cursor: cursor
                    },
                    headers: {
                        'x-api-key': this.apiKey
                    }
                });

                if (response.data && response.data.tweets) {
                    allTweets.push(...response.data.tweets);

                    if (!response.data.has_next_page || allTweets.length >= maxResults) {
                        break;
                    }

                    cursor = response.data.next_cursor;
                    await this.sleep(1000); // Rate limiting
                }
            }

            return allTweets.slice(0, maxResults);
        } catch (error) {
            console.error(`Error searching tweets for "${query}":`, error.message);
            return [];
        }
    }

    async getUserInfo(username) {
        try {
            const response = await axios.get(`${BASE_URL}/user/info`, {
                params: {
                    userName: username
                },
                headers: {
                    'x-api-key': this.apiKey
                }
            });

            return response.data;
        } catch (error) {
            console.error(`Error getting user info for @${username}:`, error.message);
            return null;
        }
    }

    isUSBased(location) {
        if (!location) return false;
        const upperLocation = location.toUpperCase();
        return US_LOCATIONS.some(loc => upperLocation.includes(loc));
    }

    isManufacturer(profile) {
        const bioText = (profile.description || '').toLowerCase();
        const nameText = (profile.name || '').toLowerCase();

        return MANUFACTURING_KEYWORDS.some(keyword =>
            bioText.includes(keyword) || nameText.includes(keyword)
        );
    }

    extractWebsite(user) {
        return user.url || '';
    }

    async getUserTweets(username, count = 20) {
        try {
            const response = await axios.get(`${BASE_URL}/user/last_tweets`, {
                params: {
                    userName: username,
                    count: count
                },
                headers: {
                    'x-api-key': this.apiKey
                }
            });

            return response.data.tweets || [];
        } catch (error) {
            console.error(`Error fetching tweets for @${username}:`, error.message);
            return [];
        }
    }

    extractProductsFromTweets(tweets) {
        const products = new Set();
        const productKeywords = ['manufacturing', 'produce', 'make', 'build', 'fabricate'];

        tweets.forEach(tweet => {
            const text = tweet.text.toLowerCase();
            // Simple extraction - can be improved with NLP
            productKeywords.forEach(keyword => {
                if (text.includes(keyword)) {
                    // Extract surrounding context (very basic)
                    const words = text.split(' ');
                    const index = words.findIndex(w => w.includes(keyword));
                    if (index !== -1 && index + 1 < words.length) {
                        products.add(words[index + 1]);
                    }
                }
            });
        });

        return Array.from(products).slice(0, 5);
    }

    async processProfile(profile) {
        const username = profile.screen_name || profile.userName;

        if (this.foundProfiles.has(username)) {
            return null;
        }

        // Filter: must be US-based
        if (!this.isUSBased(profile.location)) {
            return null;
        }

        // Filter: must have manufacturing keywords
        if (!this.isManufacturer(profile)) {
            return null;
        }

        // Filter: minimum followers (avoid spam/inactive)
        const minFollowers = parseInt(process.env.MIN_FOLLOWERS) || 50;
        if (profile.followers_count < minFollowers) {
            return null;
        }

        this.foundProfiles.add(username);

        console.log(`✓ Found: @${username} (${profile.name})`);

        // Fetch recent tweets to extract product info
        const tweets = await this.getUserTweets(username, 20);
        const products = this.extractProductsFromTweets(tweets);

        const manufacturer = {
            name: profile.name,
            twitter: `@${username}`,
            twitterUrl: `https://x.com/${username}`,
            website: this.extractWebsite(profile) || '',
            location: profile.location || '',
            description: profile.description || '',
            followers: profile.followers_count,
            verified: profile.verified || false,
            products: products.length > 0 ? products : ['Contact for product details'],
            tweets: tweets.slice(0, 3).map(t => ({
                text: t.text || t.full_text,
                created_at: t.created_at
            }))
        };

        this.manufacturers.push(manufacturer);
        return manufacturer;
    }

    async extractUsersFromTweets(tweets) {
        const usernames = new Set();

        tweets.forEach(tweet => {
            // Extract tweet author
            if (tweet.user && tweet.user.screen_name) {
                usernames.add(tweet.user.screen_name);
            }
            if (tweet.userName) {
                usernames.add(tweet.userName);
            }
        });

        return Array.from(usernames);
    }

    async runSearch() {
        console.log('Starting manufacturer search via tweets...\n');

        for (const query of SEARCH_QUERIES) {
            console.log(`\nSearching: "${query}"`);
            const tweets = await this.searchTweets(query, 50);

            console.log(`Found ${tweets.length} tweets, extracting users...`);
            const usernames = await this.extractUsersFromTweets(tweets);

            console.log(`Found ${usernames.length} unique users, analyzing...`);

            for (const username of usernames) {
                const userInfo = await this.getUserInfo(username);
                if (userInfo) {
                    await this.processProfile(userInfo);
                }
                await this.sleep(500);
            }

            await this.sleep(2000);
        }

        console.log(`\n✓ Search complete! Found ${this.manufacturers.length} manufacturers`);
        return this.manufacturers;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    saveResults(filename = 'manufacturers-found.json') {
        fs.writeFileSync(filename, JSON.stringify(this.manufacturers, null, 2));
        console.log(`Results saved to ${filename}`);
    }

    exportToDataJS(filename = 'manufacturers-export.js') {
        let output = '// Auto-generated manufacturer data\nconst newManufacturers = [\n';

        this.manufacturers.forEach((m, index) => {
            output += `  {\n`;
            output += `    id: ${index + 100}, // Adjust ID as needed\n`;
            output += `    name: "${m.name}",\n`;
            output += `    twitter: "${m.twitter}",\n`;
            output += `    twitterUrl: "${m.twitterUrl}",\n`;
            output += `    website: "${m.website}",\n`;
            output += `    email: "", // Add manually\n`;
            output += `    phone: "", // Add manually\n`;
            output += `    location: {\n`;
            output += `      city: "", // Parse from: ${m.location}\n`;
            output += `      state: "", // Parse from: ${m.location}\n`;
            output += `      zip: ""\n`;
            output += `    },\n`;
            output += `    industry: "", // Categorize manually\n`;
            output += `    products: ${JSON.stringify(m.products)},\n`;
            output += `    description: "${m.description.replace(/"/g, '\\"')}",\n`;
            output += `    founded: null, // Add if known\n`;
            output += `    employees: "" // Add if known\n`;
            output += `  }${index < this.manufacturers.length - 1 ? ',' : ''}\n`;
        });

        output += '];\n\n';
        output += '// Copy these entries into data.js\n';
        output += 'module.exports = newManufacturers;\n';

        fs.writeFileSync(filename, output);
        console.log(`Data.js export saved to ${filename}`);
    }
}

// Main execution
async function main() {
    if (!API_KEY) {
        console.error('Error: TWITTER_API_KEY not found in .env file');
        console.error('1. Copy .env.example to .env');
        console.error('2. Add your API key from https://twitterapi.io');
        process.exit(1);
    }

    const scraper = new ManufacturerScraper(API_KEY);
    await scraper.runSearch();
    scraper.saveResults();
    scraper.exportToDataJS();

    console.log('\nNext steps:');
    console.log('1. Review manufacturers-found.json');
    console.log('2. Check manufacturers-export.js');
    console.log('3. Copy valid entries to data.js');
    console.log('4. Fill in missing details (city, state, industry, etc.)');
}

if (require.main === module) {
    main().catch(console.error);
}

module.exports = ManufacturerScraper;
