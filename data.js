// Manufacturers database
const manufacturers = [
    // Example entries - replace with real X.com profiles
    {
        id: 1,
        name: "American Steel Works",
        twitter: "@AmericanSteel",
        twitterUrl: "https://x.com/AmericanSteel",
        website: "https://americansteel.example.com",
        email: "info@americansteel.com",
        phone: "(412) 555-0100",
        location: {
            city: "Pittsburgh",
            state: "Pennsylvania",
            zip: "15222"
        },
        industry: "Metal Manufacturing",
        products: [
            "Structural steel",
            "Steel beams",
            "Custom metal fabrication"
        ],
        description: "Family-owned steel manufacturer serving construction and industrial sectors across America since 1952.",
        founded: 1952,
        employees: "500-1000"
    },
    {
        id: 2,
        name: "Liberty Textiles",
        twitter: "@LibertyTextiles",
        twitterUrl: "https://x.com/LibertyTextiles",
        website: "https://libertytextiles.example.com",
        email: "sales@libertytextiles.com",
        phone: "(704) 555-0200",
        location: {
            city: "Charlotte",
            state: "North Carolina",
            zip: "28201"
        },
        industry: "Textiles",
        products: [
            "Cotton fabrics",
            "Denim",
            "Industrial textiles",
            "Outdoor fabrics"
        ],
        description: "Producing high-quality American-made textiles with sustainable practices and fair labor standards.",
        founded: 1985,
        employees: "250-500"
    },
    {
        id: 3,
        name: "Midwest Machine Tools",
        twitter: "@MidwestTools",
        twitterUrl: "https://x.com/MidwestTools",
        website: "https://midwesttools.example.com",
        email: "contact@midwesttools.com",
        phone: "(414) 555-0300",
        location: {
            city: "Milwaukee",
            state: "Wisconsin",
            zip: "53202"
        },
        industry: "Manufacturing Equipment",
        products: [
            "CNC machines",
            "Precision tools",
            "Industrial equipment",
            "Custom tooling solutions"
        ],
        description: "Precision manufacturing equipment built in America for American manufacturers. Quality tools for quality work.",
        founded: 1978,
        employees: "100-250"
    },
    {
        id: 4,
        name: "Pacific Electronics Manufacturing",
        twitter: "@PacificElec",
        twitterUrl: "https://x.com/PacificElec",
        website: "https://pacificelec.example.com",
        email: "info@pacificelec.com",
        phone: "(408) 555-0400",
        location: {
            city: "San Jose",
            state: "California",
            zip: "95113"
        },
        industry: "Electronics",
        products: [
            "Circuit boards",
            "Electronic components",
            "LED systems",
            "Custom electronics"
        ],
        description: "American-made electronics and circuit board manufacturing with cutting-edge technology and quality control.",
        founded: 1995,
        employees: "50-100"
    },
    {
        id: 5,
        name: "Heritage Furniture Co.",
        twitter: "@HeritageFurn",
        twitterUrl: "https://x.com/HeritageFurn",
        website: "https://heritagefurniture.example.com",
        email: "sales@heritagefurniture.com",
        phone: "(828) 555-0500",
        location: {
            city: "Asheville",
            state: "North Carolina",
            zip: "28801"
        },
        industry: "Furniture",
        products: [
            "Solid wood furniture",
            "Custom cabinetry",
            "Office furniture",
            "Home furnishings"
        ],
        description: "Handcrafted American furniture using locally-sourced hardwoods and traditional woodworking techniques.",
        founded: 1968,
        employees: "25-50"
    },
    // Real manufacturers found via X.com
    {
        id: 6,
        name: "The Anaya Group (American Stalls)",
        twitter: "@yash_balasaria",
        twitterUrl: "https://x.com/yash_balasaria",
        website: "",
        email: "",
        phone: "",
        location: {
            city: "Washington",
            state: "DC",
            zip: ""
        },
        industry: "Steel Manufacturing",
        products: [
            "Steel manufacturing",
            "Steel distribution",
            "American Stalls products"
        ],
        description: "World class group of steel manufacturing and distribution firms. CEO at American Stalls & President at Anaya Steel.",
        founded: null,
        employees: ""
    },
    {
        id: 7,
        name: "Gen3 Industrial Supply",
        twitter: "@gen3industrial",
        twitterUrl: "https://x.com/gen3industrial",
        website: "https://t.co/rBlTnub8Cu",
        email: "",
        phone: "",
        location: {
            city: "Northern",
            state: "Michigan",
            zip: ""
        },
        industry: "Industrial Supply",
        products: [
            "Machine tools",
            "Industrial supplies",
            "Branded equipment"
        ],
        description: "Delivering branded machine tools and industrial supplies to American manufacturers.",
        founded: null,
        employees: "1-50"
    },
    {
        id: 8,
        name: "Aether Manufacturing",
        twitter: "@jakeb_aether",
        twitterUrl: "https://x.com/jakeb_aether",
        website: "https://t.co/nov145ZbEs",
        email: "",
        phone: "",
        location: {
            city: "Austin",
            state: "Texas",
            zip: ""
        },
        industry: "Precision Manufacturing",
        products: [
            "Precision manufacturing",
            "Autonomous factories",
            "Modular manufacturing systems"
        ],
        description: "Reshoring American precision manufacturing with autonomous 'lights out' modular factories.",
        founded: null,
        employees: "1-50"
    },
    {
        id: 9,
        name: "Cavela",
        twitter: "@anthonysardain",
        twitterUrl: "https://x.com/anthonysardain",
        website: "https://t.co/jbdgwQ5hzp",
        email: "",
        phone: "",
        location: {
            city: "San Francisco",
            state: "California",
            zip: ""
        },
        industry: "Manufacturing Technology",
        products: [
            "AI-enabled manufacturing",
            "Global manufacturing solutions",
            "Brand manufacturing"
        ],
        description: "AI-enabled global manufacturing for the world's best brands.",
        founded: null,
        employees: "1-50"
    },
    {
        id: 10,
        name: "Deploy Conduit",
        twitter: "@itsdannypereira",
        twitterUrl: "https://x.com/itsdannypereira",
        website: "https://t.co/DM8T16TjyF",
        email: "",
        phone: "",
        location: {
            city: "Detroit",
            state: "Michigan",
            zip: ""
        },
        industry: "Manufacturing Automation",
        products: [
            "Factory automation",
            "Manufacturing software",
            "Local factory solutions"
        ],
        description: "American manufacturing propagandist. Automating your local factory.",
        founded: null,
        employees: "1-50"
    },
    {
        id: 11,
        name: "Oil & Gas Manufacturing",
        twitter: "@MagyarScoundrel",
        twitterUrl: "https://x.com/MagyarScoundrel",
        website: "",
        email: "",
        phone: "",
        location: {
            city: "Houston",
            state: "Texas",
            zip: ""
        },
        industry: "Oil & Gas Manufacturing",
        products: [
            "Oil & Gas equipment",
            "Industrial manufacturing",
            "EDM services"
        ],
        description: "Manufacturing for the Oil & Gas Industry, Peptides, EDM services.",
        founded: null,
        employees: "1-50"
    }
    // Add your X.com manufacturer profiles here following this format
];

// Extract unique states and industries for filters
function getUniqueStates() {
    return [...new Set(manufacturers.map(m => m.location.state))].sort();
}

function getUniqueIndustries() {
    return [...new Set(manufacturers.map(m => m.industry))].sort();
}
