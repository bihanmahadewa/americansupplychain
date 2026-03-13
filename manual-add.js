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
    // Save to JSON
    fs.writeFileSync('manual-manufacturers.json', JSON.stringify(manufacturers, null, 2));
    console.log('\n✓ Saved to manual-manufacturers.json');

    // Generate data.js format
    let output = '// Manually added manufacturers\n';
    output += '// Copy these into data.js\n\n';
    manufacturers.forEach(m => {
        output += `  {\n`;
        output += `    id: ${m.id},\n`;
        output += `    name: "${m.name}",\n`;
        output += `    twitter: "${m.twitter}",\n`;
        output += `    twitterUrl: "${m.twitterUrl}",\n`;
        output += `    website: "${m.website}",\n`;
        output += `    email: "${m.email}",\n`;
        output += `    phone: "${m.phone}",\n`;
        output += `    location: {\n`;
        output += `      city: "${m.location.city}",\n`;
        output += `      state: "${m.location.state}",\n`;
        output += `      zip: ""\n`;
        output += `    },\n`;
        output += `    industry: "${m.industry}",\n`;
        output += `    products: ${JSON.stringify(m.products)},\n`;
        output += `    description: "${m.description}",\n`;
        output += `    founded: ${m.founded},\n`;
        output += `    employees: "${m.employees}"\n`;
        output += `  },\n\n`;
    });

    fs.writeFileSync('manual-manufacturers-export.js', output);
    console.log('✓ Saved to manual-manufacturers-export.js');
    console.log('\nCopy the contents of manual-manufacturers-export.js into data.js');

    rl.close();
    process.exit(0);
}

console.log('=== Manual Manufacturer Entry Tool ===');
console.log('Add manufacturers you find on X.com\n');

addManufacturer().catch(console.error);
