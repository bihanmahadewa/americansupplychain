require('dotenv').config();
const axios = require('axios');

const API_KEY = process.env.TWITTER_API_KEY;

async function testAPI() {
    console.log('Testing TwitterAPI.io connection...\n');

    if (!API_KEY) {
        console.error('❌ No API key found in .env');
        return;
    }

    console.log(`✓ API Key loaded: ${API_KEY.substring(0, 10)}...`);

    try {
        // Test 1: Try to get followings of a known user
        console.log('Testing with user/followings endpoint...\n');
        const response = await axios.get('https://api.twitterapi.io/twitter/user/followings', {
            params: {
                userName: 'elonmusk'
            },
            headers: {
                'x-api-key': API_KEY
            }
        });

        if (response.data && response.data.followings) {
            console.log(`✓ API working! Found ${response.data.followings.length} followings\n`);
            console.log('Sample results:');
            response.data.followings.slice(0, 3).forEach(user => {
                console.log(`  - @${user.screen_name}: ${user.name}`);
                console.log(`    Location: ${user.location}`);
                console.log(`    Followers: ${user.followers_count}`);
                console.log(`    ${user.description?.substring(0, 60)}...`);
                console.log('');
            });

            console.log('✓ API connected successfully!\n');
            console.log('Next step: Update scraper with correct endpoints');
        } else {
            console.log('⚠ Unexpected response format');
            console.log('Response keys:', Object.keys(response.data));
        }
    } catch (error) {
        console.error('❌ API Error:', error.response?.data || error.message);
        console.log('\nTroubleshooting:');
        console.log('1. Check your API key at https://twitterapi.io');
        console.log('2. Verify you have credits remaining');
        console.log('3. Check your internet connection');
    }
}

testAPI();
