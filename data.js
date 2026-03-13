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
    },
    // New batch - Digital Manufacturing & 3D Printing Companies
    {
        id: 12,
        name: "Nox Metals",
        twitter: "@noxmetals",
        twitterUrl: "https://x.com/noxmetals",
        website: "",
        email: "",
        phone: "",
        location: {
            city: "",
            state: "",
            zip: ""
        },
        industry: "Metal Manufacturing",
        products: [
            "Metal parts",
            "Manufacturing services"
        ],
        description: "Metal manufacturing and fabrication. Founded by Zane Hengsperger.",
        founded: null,
        employees: ""
    },
    {
        id: 13,
        name: "Digital Metal",
        twitter: "@digitalmetalinc",
        twitterUrl: "https://x.com/digitalmetalinc",
        website: "",
        email: "",
        phone: "",
        location: {
            city: "",
            state: "",
            zip: ""
        },
        industry: "Additive Manufacturing",
        products: [
            "Metal 3D printing",
            "Binder jetting",
            "Metal parts"
        ],
        description: "Digital metal manufacturing. Founded by Connor Kapoor.",
        founded: null,
        employees: ""
    },
    {
        id: 14,
        name: "Foundation Manufacturing",
        twitter: "@FoundationManf",
        twitterUrl: "https://x.com/FoundationManf",
        website: "",
        email: "",
        phone: "",
        location: {
            city: "",
            state: "",
            zip: ""
        },
        industry: "Manufacturing",
        products: [
            "Manufacturing services",
            "Custom parts"
        ],
        description: "Manufacturing company. Founded by Joe Metzler.",
        founded: null,
        employees: ""
    },
    {
        id: 15,
        name: "Nora Mark",
        twitter: "@andrewkornuta",
        twitterUrl: "https://x.com/andrewkornuta",
        website: "https://www.noramark.com",
        email: "",
        phone: "",
        location: {
            city: "",
            state: "",
            zip: ""
        },
        industry: "Manufacturing",
        products: [
            "Manufacturing services"
        ],
        description: "Manufacturing company founded by Andrew Kornuta.",
        founded: null,
        employees: ""
    },
    {
        id: 16,
        name: "Markforged",
        twitter: "@Markforged",
        twitterUrl: "https://x.com/Markforged",
        website: "https://markforged.com",
        email: "",
        phone: "",
        location: {
            city: "Waltham",
            state: "Massachusetts",
            zip: ""
        },
        industry: "3D Printing",
        products: [
            "Industrial 3D printers",
            "Carbon fiber printing",
            "Metal 3D printing",
            "Composite materials"
        ],
        description: "Leading provider of industrial 3D printers for manufacturing strong, functional parts.",
        founded: 2013,
        employees: "250-500"
    },
    {
        id: 17,
        name: "Desktop Metal",
        twitter: "@DesktopMetal",
        twitterUrl: "https://x.com/DesktopMetal",
        website: "https://www.desktopmetal.com",
        email: "",
        phone: "",
        location: {
            city: "Burlington",
            state: "Massachusetts",
            zip: ""
        },
        industry: "Additive Manufacturing",
        products: [
            "Metal 3D printing",
            "Binder jetting",
            "Production systems",
            "Additive manufacturing software"
        ],
        description: "Additive manufacturing solutions for metal and composite parts. Founded by Ric Fulop.",
        founded: 2015,
        employees: "500-1000"
    },
    {
        id: 18,
        name: "Carbon",
        twitter: "@Carbon",
        twitterUrl: "https://x.com/Carbon",
        website: "https://www.carbon3d.com",
        email: "",
        phone: "",
        location: {
            city: "Redwood City",
            state: "California",
            zip: ""
        },
        industry: "3D Printing",
        products: [
            "Digital Light Synthesis",
            "Production 3D printers",
            "Engineering resins",
            "Manufacturing software"
        ],
        description: "Revolutionary 3D printing technology for production manufacturing. Founded by Joseph DeSimone.",
        founded: 2013,
        employees: "250-500"
    },
    {
        id: 19,
        name: "Divergent 3D",
        twitter: "@Divergent3D",
        twitterUrl: "https://x.com/Divergent3D",
        website: "https://www.divergent3d.com",
        email: "",
        phone: "",
        location: {
            city: "Torrance",
            state: "California",
            zip: ""
        },
        industry: "Automotive Manufacturing",
        products: [
            "Additive manufacturing systems",
            "Automotive structures",
            "DAPS technology"
        ],
        description: "Revolutionizing automotive manufacturing with additive manufacturing and digital assembly.",
        founded: 2014,
        employees: "100-250"
    },
    {
        id: 20,
        name: "Formlabs",
        twitter: "@formlabs",
        twitterUrl: "https://x.com/formlabs",
        website: "https://formlabs.com",
        email: "",
        phone: "",
        location: {
            city: "Somerville",
            state: "Massachusetts",
            zip: ""
        },
        industry: "3D Printing",
        products: [
            "SLA 3D printers",
            "SLS 3D printers",
            "Resins and materials",
            "3D printing software"
        ],
        description: "Professional 3D printing solutions for prototyping and production.",
        founded: 2011,
        employees: "500-1000"
    },
    {
        id: 21,
        name: "VELO3D",
        twitter: "@VELO3DMetal",
        twitterUrl: "https://x.com/VELO3DMetal",
        website: "https://www.velo3d.com",
        email: "",
        phone: "",
        location: {
            city: "Campbell",
            state: "California",
            zip: ""
        },
        industry: "Metal 3D Printing",
        products: [
            "Sapphire metal 3D printers",
            "Flow software",
            "Assure quality assurance"
        ],
        description: "Advanced metal additive manufacturing for aerospace and high-performance applications.",
        founded: 2014,
        employees: "250-500"
    },
    {
        id: 22,
        name: "3D Systems",
        twitter: "@3dsystems",
        twitterUrl: "https://x.com/3dsystems",
        website: "https://www.3dsystems.com",
        email: "",
        phone: "",
        location: {
            city: "Rock Hill",
            state: "South Carolina",
            zip: ""
        },
        industry: "3D Printing",
        products: [
            "3D printers",
            "3D printing materials",
            "3D printing software",
            "On-demand manufacturing"
        ],
        description: "Pioneer in 3D printing with comprehensive additive manufacturing solutions.",
        founded: 1986,
        employees: "1000+"
    },
    {
        id: 23,
        name: "3DEO",
        twitter: "@3DEOinc",
        twitterUrl: "https://x.com/3DEOinc",
        website: "https://www.3deo.com",
        email: "",
        phone: "",
        location: {
            city: "Torrance",
            state: "California",
            zip: ""
        },
        industry: "Metal 3D Printing",
        products: [
            "Metal 3D printing",
            "Production metal parts",
            "Intelligent layering"
        ],
        description: "High-volume metal 3D printing for production manufacturing.",
        founded: 2016,
        employees: "50-100"
    },
    {
        id: 24,
        name: "Fictiv",
        twitter: "",
        twitterUrl: "",
        website: "https://www.fictiv.com",
        email: "",
        phone: "",
        location: {
            city: "San Francisco",
            state: "California",
            zip: ""
        },
        industry: "Digital Manufacturing",
        products: [
            "CNC machining",
            "3D printing",
            "Injection molding",
            "Urethane casting"
        ],
        description: "Digital manufacturing platform for custom parts with instant quotes.",
        founded: 2013,
        employees: "100-250"
    },
    {
        id: 25,
        name: "Xometry",
        twitter: "",
        twitterUrl: "",
        website: "https://www.xometry.com",
        email: "",
        phone: "",
        location: {
            city: "Derwood",
            state: "Maryland",
            zip: ""
        },
        industry: "Manufacturing Marketplace",
        products: [
            "CNC machining",
            "3D printing",
            "Sheet metal fabrication",
            "Injection molding"
        ],
        description: "On-demand manufacturing marketplace connecting customers with manufacturing capacity.",
        founded: 2013,
        employees: "500-1000"
    },
    {
        id: 26,
        name: "Protolabs",
        twitter: "",
        twitterUrl: "",
        website: "https://www.protolabs.com",
        email: "",
        phone: "",
        location: {
            city: "Maple Plain",
            state: "Minnesota",
            zip: ""
        },
        industry: "Rapid Manufacturing",
        products: [
            "CNC machining",
            "3D printing",
            "Injection molding",
            "Sheet metal fabrication"
        ],
        description: "Digital manufacturer of custom prototypes and production parts.",
        founded: 1999,
        employees: "1000+"
    },
    {
        id: 27,
        name: "Shapeways",
        twitter: "",
        twitterUrl: "",
        website: "https://www.shapeways.com",
        email: "",
        phone: "",
        location: {
            city: "New York",
            state: "New York",
            zip: ""
        },
        industry: "3D Printing Services",
        products: [
            "3D printing",
            "Multi Jet Fusion",
            "SLS printing",
            "Metal printing"
        ],
        description: "3D printing service and marketplace for custom products.",
        founded: 2007,
        employees: "100-250"
    },
    {
        id: 28,
        name: "Voodoo Manufacturing",
        twitter: "",
        twitterUrl: "",
        website: "https://www.voodoomfg.com",
        email: "",
        phone: "",
        location: {
            city: "Brooklyn",
            state: "New York",
            zip: ""
        },
        industry: "3D Printing",
        products: [
            "High-volume 3D printing",
            "FDM printing",
            "Production services"
        ],
        description: "Automated 3D printing for production manufacturing at scale.",
        founded: 2015,
        employees: "50-100"
    },
    {
        id: 29,
        name: "MakerBot",
        twitter: "",
        twitterUrl: "",
        website: "https://www.makerbot.com",
        email: "",
        phone: "",
        location: {
            city: "Brooklyn",
            state: "New York",
            zip: ""
        },
        industry: "3D Printing",
        products: [
            "3D printers",
            "3D printing materials",
            "MakerBot CloudPrint",
            "Education solutions"
        ],
        description: "Desktop 3D printers for education and professional use.",
        founded: 2009,
        employees: "100-250"
    },
    {
        id: 30,
        name: "Filabot",
        twitter: "",
        twitterUrl: "",
        website: "https://www.filabot.com",
        email: "",
        phone: "",
        location: {
            city: "Barre",
            state: "Vermont",
            zip: ""
        },
        industry: "3D Printing Materials",
        products: [
            "Filament extruders",
            "Plastic recycling systems",
            "3D printing filament"
        ],
        description: "Systems for creating and recycling 3D printing filament.",
        founded: 2012,
        employees: "10-50"
    },
    {
        id: 31,
        name: "Atum",
        twitter: "",
        twitterUrl: "",
        website: "https://atum.works",
        email: "",
        phone: "",
        location: {
            city: "",
            state: "",
            zip: ""
        },
        industry: "Manufacturing Software",
        products: [
            "Manufacturing execution system",
            "Production management",
            "Quality control"
        ],
        description: "Software for modern manufacturing operations and quality management.",
        founded: null,
        employees: "10-50"
    },
    {
        id: 32,
        name: "Stratasys",
        twitter: "",
        twitterUrl: "",
        website: "https://www.stratasys.com",
        email: "",
        phone: "",
        location: {
            city: "Eden Prairie",
            state: "Minnesota",
            zip: ""
        },
        industry: "3D Printing",
        products: [
            "FDM 3D printers",
            "PolyJet 3D printers",
            "3D printing materials",
            "Additive manufacturing"
        ],
        description: "Global leader in 3D printing and additive manufacturing solutions.",
        founded: 1989,
        employees: "1000+"
    },
    {
        id: 34,
        name: "AZUL 3D",
        twitter: "",
        twitterUrl: "",
        website: "https://www.azul3d.com",
        email: "",
        phone: "",
        location: {
            city: "Evanston",
            state: "Illinois",
            zip: ""
        },
        industry: "3D Printing",
        products: [
            "High-speed 3D printing",
            "HARP technology",
            "Large-format printing"
        ],
        description: "Revolutionary high-speed 3D printing technology for production manufacturing.",
        founded: 2019,
        employees: "10-50"
    },
    {
        id: 35,
        name: "NextFab",
        twitter: "",
        twitterUrl: "",
        website: "https://nextfab.com",
        email: "",
        phone: "",
        location: {
            city: "Philadelphia",
            state: "Pennsylvania",
            zip: ""
        },
        industry: "Makerspace",
        products: [
            "3D printing",
            "CNC machining",
            "Laser cutting",
            "Maker services"
        ],
        description: "Makerspace and manufacturing services for inventors and entrepreneurs.",
        founded: 2009,
        employees: "10-50"
    },
    {
        id: 36,
        name: "Branch Technology",
        twitter: "",
        twitterUrl: "",
        website: "https://branchtechnology.com",
        email: "",
        phone: "",
        location: {
            city: "Chattanooga",
            state: "Tennessee",
            zip: ""
        },
        industry: "Construction 3D Printing",
        products: [
            "Large-scale 3D printing",
            "Construction automation",
            "Cellular fabrication"
        ],
        description: "Large-scale additive manufacturing for construction and architecture.",
        founded: 2015,
        employees: "10-50"
    },
    {
        id: 37,
        name: "Skydio",
        twitter: "",
        twitterUrl: "",
        website: "https://www.skydio.com",
        email: "",
        phone: "",
        location: {
            city: "San Mateo",
            state: "California",
            zip: ""
        },
        industry: "Drone Manufacturing",
        products: [
            "Autonomous drones",
            "AI-powered navigation",
            "Utility inspection drones"
        ],
        description: "American-made autonomous drones for utilities, construction, and defense.",
        founded: 2014,
        employees: "250-500"
    },
    {
        id: 38,
        name: "Hadrian",
        twitter: "",
        twitterUrl: "",
        website: "https://www.hadrian.co",
        email: "",
        phone: "",
        location: {
            city: "Los Angeles",
            state: "California",
            zip: ""
        },
        industry: "Aerospace Manufacturing",
        products: [
            "Automated machining",
            "Aerospace components",
            "Rocket parts"
        ],
        description: "Automated precision manufacturing for aerospace and defense.",
        founded: 2021,
        employees: "50-100"
    },
    {
        id: 39,
        name: "Prototek",
        twitter: "",
        twitterUrl: "",
        website: "https://prototek.com",
        email: "",
        phone: "",
        location: {
            city: "Portland",
            state: "Oregon",
            zip: ""
        },
        industry: "Digital Manufacturing",
        products: [
            "CNC machining",
            "Sheet metal fabrication",
            "3D printing",
            "Prototyping"
        ],
        description: "Digital manufacturing and rapid prototyping services.",
        founded: 1987,
        employees: "100-250"
    },
    {
        id: 40,
        name: "Paperless Parts",
        twitter: "",
        twitterUrl: "",
        website: "https://www.paperlessparts.com",
        email: "",
        phone: "",
        location: {
            city: "Boston",
            state: "Massachusetts",
            zip: ""
        },
        industry: "Manufacturing Software",
        products: [
            "Quoting software",
            "Manufacturing ERP",
            "Shop management"
        ],
        description: "Software to help machine shops quote faster and run more efficiently.",
        founded: 2017,
        employees: "50-100"
    },
    {
        id: 41,
        name: "Fab Foundation",
        twitter: "",
        twitterUrl: "",
        website: "https://fabfoundation.org",
        email: "",
        phone: "",
        location: {
            city: "Cambridge",
            state: "Massachusetts",
            zip: ""
        },
        industry: "Maker Education",
        products: [
            "Fab lab network",
            "Digital fabrication education",
            "Community makerspaces"
        ],
        description: "Non-profit supporting fab labs and digital fabrication education worldwide.",
        founded: 2009,
        employees: "10-50"
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
