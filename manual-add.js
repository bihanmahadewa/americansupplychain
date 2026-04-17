// Manual manufacturer entry tool
// Use this to easily add manufacturers from X profiles you find

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const manufacturers = [];

function question(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
}

async function addManufacturer() {
    console.log('\n=== Add New Manufacturer ===\n');

    const name = await question('Company Name: ');
    const twitter = await question('X Handle (without @): ');
    const website = await question('Website: ');
    const email = await question('Email (optional): ');
    const phone = await question('Phone (optional): ');
    const city = await question('City: ');
    const state = await question('State: ');
    const industry = await question('Industry: ');
    const products = await question('Products (comma separated): ');
    const description = await question('Description: ');
    const founded = await question('Founded (optional): ');
    const employees = await question('Employee count (optional): ');

    const manufacturer = {
        id: Date.now(),
        name: name,
        twitter: `@${twitter}`,
        twitterUrl: `https://x.com/${twitter}`,
        website: website,
        email: email,
        phone: phone,
        location: {
            city: city,
            state: state,
            zip: ""
        },
        industry: industry,
        products: products.split(',').map(p => p.trim()),
        description: description,
        founded: founded ? parseInt(founded) : null,
        employees: employees
    };

    manufacturers.push(manufacturer);
    console.log('\n✓ Manufacturer added!\n');

    const addMore = await question('Add another? (y/n): ');
    if (addMore.toLowerCase() === 'y') {
        await addManufacturer();
    } else {
        saveAndExit();
    }
}

function saveAndExit() {
    const existingData = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
    const newData = existingData.concat(manufacturers);
    fs.writeFileSync('data.json', JSON.stringify(newData, null, 2));
    console.log('\n✓ Saved to data.json');

    rl.close();
    process.exit(0);
}

console.log('=== Manual Manufacturer Entry Tool ===');
console.log('Add manufacturers you find on X.com\n');

addManufacturer().catch(console.error);
