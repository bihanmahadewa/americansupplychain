// Manufacturers database
const manufacturers = [
    // Example entries - replace with real X.com profiles
    {
        id: 1,
        name: "American Steel Works",
        twitter: "@AmericanSteel",
        twitterUrl: "https://x.com/AmericanSteel",
        website: "https://americansteel.com",
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
        website: "https://libertytextiles.com",
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
        website: "https://midwesttools.com",
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
        website: "https://pacificelec.com",
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
        website: "https://heritagefurniture.com",
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
        website: "https://americanstalls.com/",
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
        industry: "PLCs / Motion Control",
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
        website: "https://www.foundationmfg.com/",
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
        website: "https://ickler.com/",
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
        website: "https://www.aerospacewelding.com/",
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
        website: "https://www.technoxmachine.com/",
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
    },
    {
        id: 42,
        name: "Freeport-McMoRan",
        twitter: "",
        twitterUrl: "",
        website: "https://www.fcx.com/",
        email: "fcx_communications@fmi.com",
        phone: "(602) 366-8100",
        location: {
            city: "Phoenix",
            state: "Arizona",
            zip: "85040"
        },
        industry: "Mining",
        products: [
            "Copper",
            "Gold",
            "Molybdenum"
        ],
        description: "Phoenix-based mining company focused on copper with major copper, gold, and molybdenum operations in the Americas and Indonesia.",
        founded: 1987,
        employees: ""
    },
    {
        id: 43,
        name: "Newmont",
        twitter: "",
        twitterUrl: "",
        website: "https://www.newmont.com/",
        email: "",
        phone: "(303) 863-7414",
        location: {
            city: "Denver",
            state: "Colorado",
            zip: "80237"
        },
        industry: "Precious Metals Mining",
        products: [
            "Gold",
            "Copper",
            "Silver"
        ],
        description: "Denver-headquartered mining company and major producer of gold, copper, and silver with a broad North American operating footprint.",
        founded: 1921,
        employees: ""
    },
    {
        id: 44,
        name: "Southern Copper",
        twitter: "",
        twitterUrl: "",
        website: "https://southerncoppercorp.com/",
        email: "",
        phone: "(602) 264-1375",
        location: {
            city: "Phoenix",
            state: "Arizona",
            zip: "85020"
        },
        industry: "Mining",
        products: [
            "Copper",
            "Molybdenum",
            "Zinc",
            "Silver"
        ],
        description: "Phoenix-based mining and metallurgical company producing copper and valuable byproducts including molybdenum, zinc, and silver.",
        founded: 1952,
        employees: ""
    },
    {
        id: 45,
        name: "Cleveland-Cliffs",
        twitter: "",
        twitterUrl: "",
        website: "https://www.clevelandcliffs.com/",
        email: "info@clevelandcliffs.com",
        phone: "(216) 694-5700",
        location: {
            city: "Cleveland",
            state: "Ohio",
            zip: "44114"
        },
        industry: "Iron Ore Mining",
        products: [
            "Iron ore pellets",
            "Steel inputs",
            "Flat-rolled steel"
        ],
        description: "Cleveland-headquartered steelmaker and iron ore producer with major mining and steel operations across the U.S. Midwest.",
        founded: 1847,
        employees: "25000+"
    },
    {
        id: 46,
        name: "MP Materials",
        twitter: "",
        twitterUrl: "",
        website: "https://www.mpmaterials.com/",
        email: "",
        phone: "",
        location: {
            city: "Las Vegas",
            state: "Nevada",
            zip: "89135"
        },
        industry: "Rare Earth Mining",
        products: [
            "Rare earth concentrate",
            "Rare earth oxides",
            "Rare earth metals",
            "NdFeB magnets"
        ],
        description: "Rare earth producer headquartered in Las Vegas with mining and processing at Mountain Pass, California and downstream magnet manufacturing in Texas.",
        founded: 2017,
        employees: ""
    },
    {
        id: 273,
        name: "USA Rare Earth",
        twitter: "",
        twitterUrl: "",
        website: "https://usare.com/",
        email: "",
        phone: "",
        location: {
            city: "Stillwater",
            state: "Oklahoma",
            zip: ""
        },
        industry: "Rare Earth Mining",
        products: [
            "Rare earth feedstock",
            "Separated rare earths",
            "Magnet supply chain development"
        ],
        description: "Rare earth developer advancing the Round Top project in Texas alongside a domestic separation and magnet supply chain buildout, with pilot-scale activity and Department of Defense support in place.",
        founded: null,
        employees: ""
    },
    {
        id: 274,
        name: "Rare Element Resources",
        twitter: "",
        twitterUrl: "",
        website: "https://www.rareelementresources.com/",
        email: "",
        phone: "",
        location: {
            city: "Littleton",
            state: "Colorado",
            zip: ""
        },
        industry: "Rare Earth Mining",
        products: [
            "Bear Lodge rare earth feedstock",
            "Separated NdPr oxide",
            "Rare earth separation technology"
        ],
        description: "Rare earth company advancing the Bear Lodge project in Wyoming and the Upton demonstration processing and separation plant, with commissioning targeted and permitting work continuing.",
        founded: null,
        employees: ""
    },
    {
        id: 275,
        name: "Ucore Rare Metals",
        twitter: "",
        twitterUrl: "",
        website: "https://ucore.com/",
        email: "",
        phone: "",
        location: {
            city: "Alexandria",
            state: "Louisiana",
            zip: ""
        },
        industry: "Rare Earth Mining",
        products: [
            "RapidSX rare earth separation",
            "Separated rare earth oxides",
            "Strategic metals processing"
        ],
        description: "Rare earth processing company commercializing RapidSX separation in Alexandria, Louisiana while continuing longer-term development of the Bokan project in Alaska.",
        founded: null,
        employees: ""
    },
    {
        id: 276,
        name: "American Rare Earths",
        twitter: "",
        twitterUrl: "",
        website: "https://www.americanree.com/",
        email: "",
        phone: "",
        location: {
            city: "Laramie",
            state: "Wyoming",
            zip: ""
        },
        industry: "Rare Earth Mining",
        products: [
            "Halleck Creek rare earth resource",
            "Cowboy State Mine development",
            "Rare earth processing development"
        ],
        description: "Rare earth developer advancing Halleck Creek in Wyoming, including the Cowboy State Mine phase and supporting processing work in the state.",
        founded: null,
        employees: ""
    },
    {
        id: 277,
        name: "Aerotech",
        twitter: "",
        twitterUrl: "",
        website: "https://www.aerotech.com/",
        email: "",
        phone: "+1-412-963-7470",
        location: {
            city: "Pittsburgh",
            state: "Pennsylvania",
            zip: "15238"
        },
        industry: "PLCs / Motion Control",
        products: [
            "Precision stages",
            "Motion controllers",
            "Actuators",
            "Positioning systems"
        ],
        description: "Pittsburgh motion-control company building high-precision stages, actuators, and controllers for demanding automation, metrology, photonics, and alignment applications.",
        founded: null,
        employees: ""
    },
    {
        id: 278,
        name: "ADVANCED Motion Controls",
        twitter: "",
        twitterUrl: "",
        website: "https://www.a-m-c.com/",
        email: "",
        phone: "(805) 389-1935",
        location: {
            city: "Camarillo",
            state: "California",
            zip: "93012"
        },
        industry: "PLCs / Motion Control",
        products: [
            "Servo drives",
            "Servo amplifiers",
            "Motor controllers",
            "Motion control systems"
        ],
        description: "Camarillo-based manufacturer of servo drives and motor controllers used in robotics and industrial automation systems.",
        founded: 1987,
        employees: ""
    },
    {
        id: 279,
        name: "Kollmorgen",
        twitter: "",
        twitterUrl: "",
        website: "https://www.kollmorgen.com/en-us",
        email: "",
        phone: "",
        location: {
            city: "Radford",
            state: "Virginia",
            zip: ""
        },
        industry: "PLCs / Motion Control",
        products: [
            "Servo motors",
            "Stepper motors",
            "Drives",
            "Automation controllers",
            "AGV control systems"
        ],
        description: "Motion supplier serving machine builders and robotics teams with motors, drives, automation platforms, and vehicle control systems.",
        founded: null,
        employees: ""
    },
    {
        id: 280,
        name: "Applied Motion Products",
        twitter: "",
        twitterUrl: "",
        website: "https://www.applied-motion.com",
        email: "",
        phone: "(831) 761-6555",
        location: {
            city: "Watsonville",
            state: "California",
            zip: "95076"
        },
        industry: "PLCs / Motion Control",
        products: [
            "Stepper motors",
            "Servo motors",
            "Drives",
            "Controllers",
            "Gearheads"
        ],
        description: "Watsonville motion-control manufacturer focused on stepper and servo motors, drives, and controllers for OEM and industrial applications.",
        founded: 1978,
        employees: ""
    },
    {
        id: 281,
        name: "Allied Motion",
        twitter: "",
        twitterUrl: "",
        website: "https://www.alliedmotion.com/",
        email: "",
        phone: "+1 (716) 242-7535",
        location: {
            city: "Amherst",
            state: "New York",
            zip: ""
        },
        industry: "PLCs / Motion Control",
        products: [
            "Brushless motors",
            "Servo motors",
            "Motion controllers",
            "Drives",
            "Encoders"
        ],
        description: "Amherst-based motion company supplying motors, drives, controllers, and encoders for automation, robotics, medical, and vehicle systems.",
        founded: 1962,
        employees: ""
    },
    {
        id: 282,
        name: "Moog Inc.",
        twitter: "",
        twitterUrl: "",
        website: "https://www.moog.com/",
        email: "",
        phone: "+1 (716) 652-2000",
        location: {
            city: "Elma",
            state: "New York",
            zip: "14059"
        },
        industry: "PLCs / Motion Control",
        products: [
            "Electrohydraulic actuators",
            "Electric motion systems",
            "Servo valves",
            "Industrial motion control systems"
        ],
        description: "Elma-based motion-control manufacturer building electric, hydraulic, and electrohydraulic systems for industrial automation and other high-performance applications.",
        founded: 1951,
        employees: ""
    },
    {
        id: 47,
        name: "Peabody Energy",
        twitter: "",
        twitterUrl: "",
        website: "https://www.peabodyenergy.com/",
        email: "",
        phone: "(314) 342-3400",
        location: {
            city: "St. Louis",
            state: "Missouri",
            zip: "63101"
        },
        industry: "Coal Mining",
        products: [
            "Thermal coal",
            "Metallurgical coal"
        ],
        description: "St. Louis-based coal producer supplying coal for power generation and steelmaking markets.",
        founded: 1883,
        employees: ""
    },
    {
        id: 48,
        name: "Coeur Mining",
        twitter: "",
        twitterUrl: "",
        website: "https://www.coeur.com/",
        email: "investors@coeur.com",
        phone: "(312) 489-5800",
        location: {
            city: "Chicago",
            state: "Illinois",
            zip: "60606"
        },
        industry: "Precious Metals Mining",
        products: [
            "Gold",
            "Silver"
        ],
        description: "Chicago-headquartered precious metals producer with U.S. operations in Nevada, Alaska, and South Dakota.",
        founded: 1928,
        employees: ""
    },
    {
        id: 49,
        name: "Albemarle Corporation",
        twitter: "",
        twitterUrl: "",
        website: "https://www.albemarle.com/",
        email: "",
        phone: "(980) 299-5700",
        location: {
            city: "Charlotte",
            state: "North Carolina",
            zip: "28209"
        },
        industry: "Lithium Mining",
        products: [
            "Lithium",
            "Lithium hydroxide",
            "Lithium carbonate"
        ],
        description: "U.S.-based critical materials company with corporate headquarters in Charlotte and lithium operations including Silver Peak, Nevada and Kings Mountain, North Carolina.",
        founded: 1887,
        employees: ""
    },
    {
        id: 50,
        name: "Lithium Americas",
        twitter: "",
        twitterUrl: "",
        website: "https://www.lithiumamericas.com/",
        email: "info@lithiumamericas.com",
        phone: "(775) 827-3318",
        location: {
            city: "Reno",
            state: "Nevada",
            zip: "89511"
        },
        industry: "Lithium Mining",
        products: [
            "Lithium carbonate",
            "Lithium ore development"
        ],
        description: "Lithium developer advancing the Thacker Pass project in northern Nevada to supply battery-quality lithium carbonate for the North American supply chain.",
        founded: null,
        employees: ""
    },
    {
        id: 51,
        name: "American Battery Technology Company",
        twitter: "",
        twitterUrl: "",
        website: "https://americanbatterytechnology.com/",
        email: "info@batterymetals.com",
        phone: "(775) 473-4744",
        location: {
            city: "Reno",
            state: "Nevada",
            zip: "89503"
        },
        industry: "Critical Minerals Mining",
        products: [
            "Lithium extraction technology",
            "Battery metals",
            "Lithium-ion battery recycling"
        ],
        description: "Reno-based battery materials company developing domestic lithium extraction projects in Nevada alongside battery recycling and battery metal recovery technologies.",
        founded: 2011,
        employees: "170+"
    },
    {
        id: 52,
        name: "Piedmont Lithium",
        twitter: "",
        twitterUrl: "",
        website: "https://www.piedmontlithium.com/",
        email: "info@piedmontlithium.com",
        phone: "(704) 461-8000",
        location: {
            city: "Belmont",
            state: "North Carolina",
            zip: "28012"
        },
        industry: "Lithium Mining",
        products: [
            "Lithium hydroxide",
            "Spodumene concentrate",
            "Lithium project development"
        ],
        description: "U.S.-based lithium company advancing Carolina Lithium and Tennessee Lithium to support the North American battery and EV supply chain.",
        founded: null,
        employees: ""
    },
    {
        id: 53,
        name: "Century Lithium",
        twitter: "",
        twitterUrl: "",
        website: "https://www.centurylithium.com/",
        email: "info@centurylithium.com",
        phone: "",
        location: {
            city: "Esmeralda County",
            state: "Nevada",
            zip: ""
        },
        industry: "Lithium Mining",
        products: [
            "Battery-grade lithium carbonate",
            "Lithium claystone project development"
        ],
        description: "Advanced-stage lithium developer advancing the Angel Island lithium project in west-central Nevada with integrated on-site lithium carbonate processing plans.",
        founded: null,
        employees: ""
    },
    {
        id: 54,
        name: "U.S. Strategic Metals",
        twitter: "",
        twitterUrl: "",
        website: "https://www.usstrategicmetals.com/",
        email: "",
        phone: "",
        location: {
            city: "St. Louis",
            state: "Missouri",
            zip: "63105"
        },
        industry: "Critical Minerals Processing",
        products: [
            "Cobalt processing",
            "Nickel processing",
            "Critical minerals refining"
        ],
        description: "St. Louis-based critical minerals platform developing domestic multi-metallic processing and refining capacity for strategic battery materials including cobalt and nickel.",
        founded: null,
        employees: ""
    },
    {
        id: 55,
        name: "Talon Metals",
        twitter: "",
        twitterUrl: "",
        website: "https://talonmetals.com/",
        email: "kicis@talonmetals.com",
        phone: "(218) 768-3292",
        location: {
            city: "Tamarack",
            state: "Minnesota",
            zip: "55787"
        },
        industry: "Nickel Mining",
        products: [
            "Nickel",
            "Copper",
            "Cobalt"
        ],
        description: "Developer of the Tamarack nickel-copper-cobalt project in central Minnesota focused on supplying domestic battery metals.",
        founded: null,
        employees: ""
    },
    {
        id: 56,
        name: "Alaska Energy Metals",
        twitter: "",
        twitterUrl: "",
        website: "https://alaskaenergymetals.com/",
        email: "info@alaskaenergymetals.com",
        phone: "(907) 677-7479",
        location: {
            city: "Anchorage",
            state: "Alaska",
            zip: "99518"
        },
        industry: "Nickel Mining",
        products: [
            "Nickel",
            "Copper",
            "Cobalt"
        ],
        description: "Alaska critical minerals developer advancing the Nikolai nickel project as a domestic source of nickel and associated battery metals.",
        founded: null,
        employees: ""
    },
    {
        id: 57,
        name: "High-Purity Silicon America Corporation",
        twitter: "",
        twitterUrl: "",
        website: "https://www.hpsacorp.com/",
        email: "info@hpsacorp.com",
        phone: "(251) 443-6440",
        location: {
            city: "Theodore",
            state: "Alabama",
            zip: "36582"
        },
        industry: "Semiconductor Silicon",
        products: [
            "Ultra-pure polycrystalline silicon",
            "Chlorosilane gases"
        ],
        description: "U.S. producer of ultra-pure polycrystalline silicon and chlorosilanes for semiconductor manufacturing.",
        founded: null,
        employees: ""
    },
    {
        id: 58,
        name: "Silfex",
        twitter: "",
        twitterUrl: "",
        website: "https://www.silfex.com/",
        email: "",
        phone: "",
        location: {
            city: "Eaton",
            state: "Ohio",
            zip: ""
        },
        industry: "Semiconductor Components",
        products: [
            "Precision silicon components",
            "Silicon carbide components",
            "Semiconductor equipment parts"
        ],
        description: "Ohio-based manufacturer of precision silicon components used to make and operate semiconductor manufacturing equipment.",
        founded: null,
        employees: ""
    },
    {
        id: 59,
        name: "Hemlock Semiconductor Corporation",
        twitter: "",
        twitterUrl: "",
        website: "https://www.hscpoly.com/",
        email: "",
        phone: "",
        location: {
            city: "Hemlock",
            state: "Michigan",
            zip: "48626"
        },
        industry: "Semiconductor Silicon",
        products: [
            "Hyper-pure polysilicon",
            "Semiconductor-grade polysilicon"
        ],
        description: "Michigan-based producer of hyper-pure polysilicon used as a foundational input for semiconductor wafers and chips.",
        founded: 1961,
        employees: ""
    },
    {
        id: 60,
        name: "Mississippi Silicon LLC",
        twitter: "",
        twitterUrl: "",
        website: "https://www.missilicon.com/",
        email: "",
        phone: "(662) 696-2600",
        location: {
            city: "Burnsville",
            state: "Mississippi",
            zip: "38833"
        },
        industry: "Semiconductor Silicon",
        products: [
            "Silicon metal",
            "Refined silicon feedstock"
        ],
        description: "Domestic manufacturer of silicon metal in Mississippi supplying silicon feedstock for downstream polysilicon and related products.",
        founded: null,
        employees: ""
    },
    {
        id: 61,
        name: "Entegris",
        twitter: "",
        twitterUrl: "",
        website: "https://www.entegris.com/",
        email: "",
        phone: "+1 978 436 6500",
        location: {
            city: "",
            state: "Massachusetts",
            zip: ""
        },
        industry: "Semiconductor Components",
        products: [
            "High-purity silicon carbide components",
            "SUPERSiC materials"
        ],
        description: "Advanced materials supplier producing high-purity silicon carbide products under the SUPERSiC line for semiconductor equipment applications.",
        founded: null,
        employees: ""
    },
    {
        id: 62,
        name: "WaferPro",
        twitter: "",
        twitterUrl: "",
        website: "https://waferpro.com/",
        email: "info@waferpro.com",
        phone: "(408) 622-9129",
        location: {
            city: "San Jose",
            state: "California",
            zip: "95112"
        },
        industry: "Semiconductor Wafers",
        products: [
            "Prime silicon wafers",
            "Monocrystalline silicon wafers",
            "CZ ingot wafers",
            "300 mm wafers"
        ],
        description: "San Jose wafer supplier producing prime silicon wafers from CZ ingots for semiconductor applications up to 300 mm.",
        founded: null,
        employees: ""
    },
    {
        id: 63,
        name: "Siltronic",
        twitter: "",
        twitterUrl: "",
        website: "https://www.siltronic.com/",
        email: "",
        phone: "(503) 243-2020",
        location: {
            city: "Portland",
            state: "Oregon",
            zip: "97210"
        },
        industry: "Semiconductor Wafers",
        products: [
            "Hyperpure silicon wafers",
            "Polished wafers",
            "Epitaxial 200 mm wafers"
        ],
        description: "Silicon wafer manufacturer operating a Portland site focused on polished and epitaxial 200 mm wafers for semiconductor production.",
        founded: null,
        employees: ""
    },
    {
        id: 64,
        name: "Noah Chemicals",
        twitter: "",
        twitterUrl: "",
        website: "https://www.noahchemicals.com/",
        email: "info@noahchemicals.com",
        phone: "(210) 691-2000",
        location: {
            city: "San Antonio",
            state: "Texas",
            zip: "78249"
        },
        industry: "High Purity Silicon Chemicals",
        products: [
            "High-purity silicon powders",
            "High-purity silicon pieces",
            "Specialty silicon chemicals"
        ],
        description: "San Antonio specialty chemical supplier offering high-purity silicon powders and related materials for semiconductor and high-tech applications.",
        founded: null,
        employees: ""
    },
    {
        id: 65,
        name: "Centrus Energy Corp.",
        twitter: "",
        twitterUrl: "",
        website: "https://www.centrusenergy.com/",
        email: "LeistikowD@CentrusEnergy.com",
        phone: "(301) 564-3200",
        location: {
            city: "Bethesda",
            state: "Maryland",
            zip: "20817"
        },
        industry: "Uranium Enrichment",
        products: [
            "Low-enriched uranium",
            "HALEU",
            "Gas centrifuge enrichment services"
        ],
        description: "U.S.-owned nuclear fuel company producing HALEU and developing expanded LEU and HALEU enrichment capacity, including operations at the American Centrifuge Plant in Piketon, Ohio.",
        founded: null,
        employees: ""
    },
    {
        id: 66,
        name: "Urenco USA",
        twitter: "",
        twitterUrl: "",
        website: "https://urencousa.com/",
        email: "",
        phone: "",
        location: {
            city: "Eunice",
            state: "New Mexico",
            zip: ""
        },
        industry: "Uranium Enrichment",
        products: [
            "LEU",
            "LEU+",
            "Uranium enrichment services"
        ],
        description: "Operator of the National Enrichment Facility in Eunice, New Mexico and the only commercial uranium enrichment plant currently operating in the United States.",
        founded: null,
        employees: ""
    },
    {
        id: 67,
        name: "Digital Tool & Die Inc.",
        twitter: "",
        twitterUrl: "",
        website: "https://digitaltooldie.com/",
        email: "sales@digitaltool-die.com",
        phone: "(616) 532-8020",
        location: {
            city: "Grandville",
            state: "Michigan",
            zip: "49418"
        },
        industry: "Tool and Die Manufacturing",
        products: [
            "Sheet metal stamping dies",
            "Progressive dies",
            "Transfer dies",
            "Fixtures"
        ],
        description: "Michigan tool and die shop designing and fabricating sheet metal stamping dies, transfer dies, and specialty tooling for automotive, appliance, furniture, and military applications.",
        founded: 1989,
        employees: ""
    },
    {
        id: 68,
        name: "Standard Tool & Die",
        twitter: "",
        twitterUrl: "",
        website: "https://standardtool.net/",
        email: "",
        phone: "(269) 465-6004",
        location: {
            city: "Stevensville",
            state: "Michigan",
            zip: "49127"
        },
        industry: "Tool and Die Manufacturing",
        products: [
            "Die cast dies",
            "Plastic molds",
            "Trim dies"
        ],
        description: "Michigan manufacturer of die cast dies, plastic molds, and trim dies serving automotive, appliance, furniture, and household goods industries.",
        founded: null,
        employees: ""
    },
    {
        id: 69,
        name: "Tooling Systems Group",
        twitter: "",
        twitterUrl: "",
        website: "https://www.toolingsystemsgroup.com/",
        email: "",
        phone: "(616) 863-8623",
        location: {
            city: "Grand Rapids",
            state: "Michigan",
            zip: "49505"
        },
        industry: "Tool and Die Manufacturing",
        products: [
            "Sheet metal stamping dies",
            "Mold tooling",
            "Automation systems",
            "Fixtures"
        ],
        description: "Grand Rapids-based family of tooling companies focused on stamping dies, mold tooling, automation systems, fixtures, and machining for Tier 1 and OEM manufacturers.",
        founded: null,
        employees: "600+"
    },
    {
        id: 70,
        name: "American Tool & Die",
        twitter: "",
        twitterUrl: "",
        website: "https://www.americantoolanddie.com/",
        email: "sales@atd1.net",
        phone: "(803) 568-2136",
        location: {
            city: "Swansea",
            state: "South Carolina",
            zip: "29160"
        },
        industry: "Tool and Die Manufacturing",
        products: [
            "Custom tools and dies",
            "Metal stamping",
            "CNC machining",
            "Automation"
        ],
        description: "Full-service tool and die manufacturer providing custom dies, stamping, CNC machining, automation, and engineering solutions for aerospace, automotive, HVAC, and industrial markets.",
        founded: 1982,
        employees: ""
    },
    {
        id: 71,
        name: "Overton Industries",
        twitter: "",
        twitterUrl: "",
        website: "https://overtonind.com/",
        email: "sales@overtonind.com",
        phone: "(317) 831-4542",
        location: {
            city: "Mooresville",
            state: "Indiana",
            zip: "46158"
        },
        industry: "Precision Tooling",
        products: [
            "Precision tooling",
            "Carbide tooling",
            "Precision stamping dies",
            "Blanking dies"
        ],
        description: "Indiana precision tooling company specializing in carbide tooling and high-precision stamping dies including high-speed, blanking, progressive, and powder metal dies.",
        founded: 1968,
        employees: ""
    },
    {
        id: 72,
        name: "Exact Tool & Die Inc.",
        twitter: "",
        twitterUrl: "",
        website: "https://www.exact-tool.com/",
        email: "info@exact-tool.com",
        phone: "(216) 676-9140",
        location: {
            city: "Brook Park",
            state: "Ohio",
            zip: "44142"
        },
        industry: "Tool and Die Manufacturing",
        products: [
            "Precision die construction",
            "Metal stampings",
            "Assemblies"
        ],
        description: "Family-owned Ohio shop providing die design and build, metal stampings, and assemblies with in-house tooling, prototyping, and production stamping.",
        founded: 1978,
        employees: ""
    },
    {
        id: 73,
        name: "Progressive Machine Die",
        twitter: "",
        twitterUrl: "",
        website: "https://pmd-inc.com/",
        email: "",
        phone: "(330) 405-6600",
        location: {
            city: "Macedonia",
            state: "Ohio",
            zip: "44056"
        },
        industry: "Tool and Die Manufacturing",
        products: [
            "Progressive die stamping",
            "In-house tooling",
            "Custom stampings"
        ],
        description: "Ohio metal stamper offering progressive die stamping, in-house tooling, prototyping, and production for industrial hardware and custom stamped parts.",
        founded: 1963,
        employees: ""
    },
    {
        id: 74,
        name: "South Shore Manufacturing",
        twitter: "",
        twitterUrl: "",
        website: "https://www.southshoremanufacturing.com/",
        email: "",
        phone: "(781) 447-9264",
        location: {
            city: "Hanson",
            state: "Massachusetts",
            zip: "02341"
        },
        industry: "Precision Tooling",
        products: [
            "Progressive die tooling",
            "Mold tooling",
            "Extrusion dies",
            "Fixtures and gages"
        ],
        description: "New England precision machining and tooling shop with experience in progressive die tooling, mold tooling, extrusion dies, fixtures, and gages for semiconductor, defense, automation, and industrial customers.",
        founded: 1985,
        employees: ""
    },
    {
        id: 75,
        name: "Scot Forge",
        twitter: "",
        twitterUrl: "",
        website: "https://www.scotforge.com/",
        email: "",
        phone: "(800) 435-6621",
        location: {
            city: "Spring Grove",
            state: "Illinois",
            zip: "60081"
        },
        industry: "Forging",
        products: [
            "Open-die forgings",
            "Rolled ring forgings",
            "Large custom forgings"
        ],
        description: "Industry leader in open-die and rolled-ring forging supplying large, high-strength forged components for aerospace, mining, defense, energy, and heavy industrial markets.",
        founded: null,
        employees: ""
    },
    {
        id: 76,
        name: "Cornell Forge Company",
        twitter: "",
        twitterUrl: "",
        website: "https://www.cornellforge.com/",
        email: "sales@cornellforge.com",
        phone: "(708) 458-1582",
        location: {
            city: "Chicago",
            state: "Illinois",
            zip: "60638"
        },
        industry: "Forging",
        products: [
            "Steel forgings",
            "Metal forgings",
            "Industrial forged components"
        ],
        description: "Chicago forging company providing precision-crafted forged components for aerospace, automotive, energy, defense, industrial machinery, and oil and gas applications.",
        founded: null,
        employees: ""
    },
    {
        id: 77,
        name: "Meadville Forging Company",
        twitter: "",
        twitterUrl: "",
        website: "https://www.meadforge.com/",
        email: "",
        phone: "(814) 332-8200",
        location: {
            city: "Meadville",
            state: "Pennsylvania",
            zip: "16335"
        },
        industry: "Forging",
        products: [
            "Closed-die steel forgings",
            "Precision steel parts",
            "CNC machining"
        ],
        description: "Pennsylvania manufacturer of closed-die steel forgings with in-house tool and die capability, heat treating, and CNC machining, specializing in precision steel components.",
        founded: 1971,
        employees: ""
    },
    {
        id: 78,
        name: "Walker Forge",
        twitter: "",
        twitterUrl: "",
        website: "https://www.walkerforge.com/",
        email: "",
        phone: "(414) 223-2754",
        location: {
            city: "Clintonville",
            state: "Wisconsin",
            zip: ""
        },
        industry: "Forging",
        products: [
            "Closed-die steel forgings",
            "Impression-die forgings",
            "Forge die design and build"
        ],
        description: "Wisconsin closed-die forging company producing forged steel components for transportation, agriculture, construction, energy, and industrial applications.",
        founded: null,
        employees: ""
    },
    {
        id: 79,
        name: "Carbo Forge",
        twitter: "",
        twitterUrl: "",
        website: "https://carboforge.com/",
        email: "",
        phone: "",
        location: {
            city: "Fremont",
            state: "Ohio",
            zip: ""
        },
        industry: "Forging",
        products: [
            "Precision closed-die steel forgings",
            "Carbon steel forgings",
            "Alloy steel forgings",
            "Stainless steel forgings"
        ],
        description: "Employee-owned Ohio closed-die impression forging company producing precision carbon, alloy, and stainless steel forgings for construction, transportation, and industrial markets.",
        founded: null,
        employees: ""
    },
    {
        id: 80,
        name: "Shultz Steel Company",
        twitter: "",
        twitterUrl: "",
        website: "https://www.shultzsteel.com/",
        email: "",
        phone: "(323) 357-3200",
        location: {
            city: "South Gate",
            state: "California",
            zip: "90280"
        },
        industry: "Forging",
        products: [
            "Open-die forgings",
            "Closed-die forgings",
            "Seamless rolled rings",
            "Superalloy forgings"
        ],
        description: "California forging company operating very large forging presses to produce aerospace and defense forgings in superalloys and steels.",
        founded: null,
        employees: ""
    },
    {
        id: 81,
        name: "Indiana Precision Forge, L.L.C.",
        twitter: "",
        twitterUrl: "",
        website: "https://www.ipfllc.com/",
        email: "",
        phone: "",
        location: {
            city: "Columbus",
            state: "Indiana",
            zip: ""
        },
        industry: "Cold Forging",
        products: [
            "Cold forged parts",
            "Machined precision parts"
        ],
        description: "Indiana supplier of cold-forged and machined precision parts with high-volume production focused on automotive applications.",
        founded: null,
        employees: ""
    },
    {
        id: 82,
        name: "Precision Metal Products (PMP Forge)",
        twitter: "",
        twitterUrl: "",
        website: "https://www.pmpforge.com/",
        email: "sales@pmpforge.com",
        phone: "(619) 448-2711",
        location: {
            city: "El Cajon",
            state: "California",
            zip: "92020"
        },
        industry: "Precision Forging",
        products: [
            "Near-net precision forgings",
            "Titanium forgings",
            "Nickel alloy forgings",
            "Machined forged components"
        ],
        description: "California manufacturer of net and near-net forged and machined components in titanium, stainless, nickel alloys, maraging steels, and cobalt alloys for aerospace, defense, medical, and power markets.",
        founded: 1963,
        employees: ""
    },
    {
        id: 83,
        name: "QuesTek Innovations LLC",
        twitter: "",
        twitterUrl: "",
        website: "https://www.questek.com/",
        email: "",
        phone: "",
        location: {
            city: "Evanston",
            state: "Illinois",
            zip: ""
        },
        industry: "Alloy Development",
        products: [
            "Computational alloy design",
            "ICME alloy development",
            "Custom high-performance alloys"
        ],
        description: "Materials engineering company using integrated computational materials engineering to design and deploy custom high-performance alloys for aerospace, energy, automotive, defense, and additive manufacturing.",
        founded: null,
        employees: ""
    },
    {
        id: 84,
        name: "Carpenter Technology Corporation",
        twitter: "",
        twitterUrl: "",
        website: "https://www.carpentertechnology.com/",
        email: "",
        phone: "(610) 208-2000",
        location: {
            city: "Philadelphia",
            state: "Pennsylvania",
            zip: ""
        },
        industry: "Specialty Alloys",
        products: [
            "Titanium alloys",
            "Superalloys",
            "Stainless steels",
            "Tool steels",
            "Powder metals"
        ],
        description: "Producer of premium specialty alloys and powder metals for aerospace, transportation, medical, defense, and energy applications.",
        founded: null,
        employees: ""
    },
    {
        id: 85,
        name: "ATI Specialty Materials",
        twitter: "",
        twitterUrl: "",
        website: "https://www.atimaterials.com/",
        email: "",
        phone: "(214) 631-3100",
        location: {
            city: "Dallas",
            state: "Texas",
            zip: ""
        },
        industry: "Specialty Alloys",
        products: [
            "Nickel-based superalloys",
            "Cobalt-based superalloys",
            "Titanium alloys",
            "Specialty steels"
        ],
        description: "High-performance materials producer developing and qualifying specialty alloys and superalloys for aerospace, energy, and defense programs.",
        founded: null,
        employees: ""
    },
    {
        id: 86,
        name: "RTP Company",
        twitter: "",
        twitterUrl: "",
        website: "https://www.rtpcompany.com/",
        email: "",
        phone: "(800) 433-4787",
        location: {
            city: "Winona",
            state: "Minnesota",
            zip: ""
        },
        industry: "Polymer Compounding",
        products: [
            "Custom thermoplastic compounds",
            "Engineering resin compounds",
            "Conductive compounds",
            "Flame-retardant compounds"
        ],
        description: "Custom thermoplastic compounder formulating specialty compounds across dozens of resin systems with tailored electrical, structural, thermal, and wear properties.",
        founded: null,
        employees: ""
    },
    {
        id: 87,
        name: "Star Plastics",
        twitter: "",
        twitterUrl: "",
        website: "https://www.starplastics.com/",
        email: "",
        phone: "(800) 779-7646",
        location: {
            city: "Millwood",
            state: "West Virginia",
            zip: ""
        },
        industry: "Polymer Compounding",
        products: [
            "Custom color compounds",
            "Engineering thermoplastic compounds",
            "Blending and toll compounding"
        ],
        description: "Compounder and blender of custom color and engineering-grade thermoplastics serving automotive, consumer, and industrial customers from multiple U.S. sites.",
        founded: null,
        employees: ""
    },
    {
        id: 88,
        name: "Adell Plastics",
        twitter: "",
        twitterUrl: "",
        website: "https://adellplastics.com/",
        email: "",
        phone: "(410) 789-7337",
        location: {
            city: "Baltimore",
            state: "Maryland",
            zip: ""
        },
        industry: "Polymer Compounding",
        products: [
            "Nylon compounds",
            "Polypropylene compounds",
            "Polyester compounds",
            "Polycarbonate compounds"
        ],
        description: "Baltimore compounder producing engineered compounds based on commodity and engineering resins for medical, automotive, electronics, film, and fiber markets.",
        founded: null,
        employees: ""
    },
    {
        id: 89,
        name: "Hexcel Corporation",
        twitter: "",
        twitterUrl: "",
        website: "https://www.hexcel.com/",
        email: "",
        phone: "(203) 969-0666",
        location: {
            city: "Stamford",
            state: "Connecticut",
            zip: ""
        },
        industry: "Carbon Fiber Materials",
        products: [
            "Carbon fiber",
            "Composite reinforcements",
            "Resin systems",
            "Prepregs"
        ],
        description: "Major producer of high-performance carbon fibers, prepregs, and resin systems for aerospace and industrial composites.",
        founded: null,
        employees: ""
    },
    {
        id: 90,
        name: "Toray Composite Materials America, Inc.",
        twitter: "",
        twitterUrl: "",
        website: "https://www.toraycma.com/",
        email: "",
        phone: "(253) 286-8000",
        location: {
            city: "Tacoma",
            state: "Washington",
            zip: ""
        },
        industry: "Carbon Fiber Materials",
        products: [
            "TORAYCA carbon fiber",
            "Advanced prepreg materials",
            "Composite materials"
        ],
        description: "U.S. carbon fiber and prepreg manufacturer supplying aerospace, defense, automotive, and industrial composite markets from multiple domestic sites.",
        founded: null,
        employees: ""
    },
    {
        id: 91,
        name: "Mars Materials Inc.",
        twitter: "",
        twitterUrl: "",
        website: "https://www.marsmaterials.com/",
        email: "",
        phone: "",
        location: {
            city: "Houston",
            state: "Texas",
            zip: ""
        },
        industry: "Carbon Fiber Materials",
        products: [
            "Carbon fiber precursor chemicals",
            "CO2-derived intermediates",
            "PAN precursor feedstock"
        ],
        description: "Houston company developing CO2-derived chemical intermediates for PAN-based carbon fiber precursor production.",
        founded: null,
        employees: ""
    },
    {
        id: 92,
        name: "Axiom Materials",
        twitter: "",
        twitterUrl: "",
        website: "https://www.axiommaterials.com/",
        email: "",
        phone: "(714) 734-3905",
        location: {
            city: "Santa Ana",
            state: "California",
            zip: ""
        },
        industry: "Ceramic Matrix Composites",
        products: [
            "Oxide-oxide CMC prepregs",
            "SiC-based CMC systems",
            "Ceramic prepreg materials"
        ],
        description: "Industrial-scale producer of oxide-oxide ceramic matrix composite prepregs and developer of C-SiC and SiC-SiC systems for aerospace, hypersonics, EV, and energy applications.",
        founded: null,
        employees: ""
    },
    {
        id: 93,
        name: "GE Aerospace",
        twitter: "",
        twitterUrl: "",
        website: "https://www.geaerospace.com/",
        email: "",
        phone: "",
        location: {
            city: "Huntsville",
            state: "Alabama",
            zip: ""
        },
        industry: "Ceramic Matrix Composites",
        products: [
            "SiC ceramic matrix composites",
            "CMC turbine components"
        ],
        description: "Operates Huntsville facilities to mass-produce silicon-carbide ceramic matrix composite materials and turbine components for jet engines and gas turbines.",
        founded: null,
        employees: ""
    },
    {
        id: 94,
        name: "Stratus Materials Inc.",
        twitter: "",
        twitterUrl: "",
        website: "https://www.stratusmaterials.com/",
        email: "",
        phone: "",
        location: {
            city: "Pittsburgh",
            state: "Pennsylvania",
            zip: ""
        },
        industry: "Cathode Materials",
        products: [
            "Lithium manganese-rich cathode materials",
            "Cobalt-free cathode active materials"
        ],
        description: "Develops and manufactures cobalt-free, manganese-rich cathode active materials for EV and stationary energy-storage lithium-ion batteries.",
        founded: null,
        employees: ""
    },
    {
        id: 95,
        name: "ACT-ion Battery Technologies",
        twitter: "",
        twitterUrl: "",
        website: "https://act-ion.com/",
        email: "",
        phone: "",
        location: {
            city: "Dallas",
            state: "Texas",
            zip: ""
        },
        industry: "Cathode Materials",
        products: [
            "Single-crystal cathode active materials",
            "Hydro4Crystal cathode production"
        ],
        description: "Battery materials company producing high-performance cathode active materials through a continuous Hydro4Crystal manufacturing process.",
        founded: null,
        employees: ""
    },
    {
        id: 96,
        name: "Lithium Werks, Inc.",
        twitter: "",
        twitterUrl: "",
        website: "https://lithiumwerks.com/",
        email: "",
        phone: "",
        location: {
            city: "Round Rock",
            state: "Texas",
            zip: ""
        },
        industry: "Cathode Materials",
        products: [
            "LFP cathode powders",
            "Battery electrodes"
        ],
        description: "Battery manufacturer and developer building North American capacity for lithium iron phosphate cathode powders and finished battery electrodes.",
        founded: null,
        employees: ""
    },
    {
        id: 97,
        name: "Graphite One Inc.",
        twitter: "",
        twitterUrl: "",
        website: "https://www.graphiteoneinc.com/",
        email: "",
        phone: "",
        location: {
            city: "Anchorage",
            state: "Alaska",
            zip: ""
        },
        industry: "Anode Materials",
        products: [
            "Battery-grade graphite",
            "Graphite anode materials"
        ],
        description: "Developer of an integrated U.S. graphite supply chain spanning Alaska resource development through advanced anode material processing in Ohio.",
        founded: null,
        employees: ""
    },
    {
        id: 98,
        name: "Solidion Technology Inc.",
        twitter: "",
        twitterUrl: "",
        website: "https://solidiontech.com/",
        email: "",
        phone: "",
        location: {
            city: "Dallas",
            state: "Texas",
            zip: ""
        },
        industry: "Anode Materials",
        products: [
            "Silicon-rich anodes",
            "Advanced battery electrode materials",
            "Graphene-sulfur battery technology"
        ],
        description: "Battery technology company holding a substantial IP portfolio in silicon anodes, graphene-based electrodes, and next-generation battery materials.",
        founded: null,
        employees: ""
    },
    {
        id: 99,
        name: "Coreshell Technologies",
        twitter: "",
        twitterUrl: "",
        website: "https://www.coreshelltech.com/",
        email: "",
        phone: "",
        location: {
            city: "",
            state: "California",
            zip: ""
        },
        industry: "Anode Materials",
        products: [
            "Coated silicon anode material",
            "Metallurgical-grade silicon anode technology"
        ],
        description: "Battery materials company developing coated metallurgical-grade silicon anode material for higher-capacity lithium-ion batteries.",
        founded: null,
        employees: ""
    },
    {
        id: 100,
        name: "Intel Corporation",
        twitter: "",
        twitterUrl: "",
        website: "https://www.intel.com/",
        email: "",
        phone: "",
        location: {
            city: "Santa Clara",
            state: "California",
            zip: ""
        },
        industry: "Semiconductor Fab",
        products: [
            "Advanced logic wafers",
            "CPUs",
            "Foundry wafers",
            "Advanced packaging"
        ],
        description: "Major U.S. semiconductor manufacturer operating leading-edge R&D and high-volume fabs in Hillsboro, Oregon; Chandler, Arizona; and advanced packaging and manufacturing operations in Rio Rancho, New Mexico.",
        founded: null,
        employees: ""
    },
    {
        id: 101,
        name: "TSMC Arizona",
        twitter: "",
        twitterUrl: "",
        website: "https://www.tsmc.com/",
        email: "",
        phone: "",
        location: {
            city: "Phoenix",
            state: "Arizona",
            zip: ""
        },
        industry: "Semiconductor Foundry",
        products: [
            "Leading-edge foundry wafers",
            "4 nm wafers",
            "3 nm and 2 nm fab expansion"
        ],
        description: "U.S. foundry operation centered on Fab 21 in Phoenix, Arizona with 4 nm production and a planned multi-fab advanced-node cluster.",
        founded: null,
        employees: ""
    },
    {
        id: 102,
        name: "Samsung Austin Semiconductor",
        twitter: "",
        twitterUrl: "",
        website: "https://semiconductor.samsung.com/us/",
        email: "",
        phone: "",
        location: {
            city: "Austin",
            state: "Texas",
            zip: ""
        },
        industry: "Semiconductor Fab",
        products: [
            "Logic chips",
            "SoC manufacturing",
            "Foundry wafers"
        ],
        description: "Samsung's U.S. semiconductor manufacturing platform with established Austin fabs and a next-generation Taylor, Texas fab complex for logic and foundry production.",
        founded: null,
        employees: ""
    },
    {
        id: 103,
        name: "Texas Instruments (TI)",
        twitter: "",
        twitterUrl: "",
        website: "https://www.ti.com/",
        email: "",
        phone: "",
        location: {
            city: "Dallas",
            state: "Texas",
            zip: ""
        },
        industry: "Semiconductor Fab",
        products: [
            "Analog chips",
            "Embedded processors",
            "300 mm wafers",
            "Power semiconductors"
        ],
        description: "U.S. semiconductor manufacturer running large 300 mm analog and embedded processing fabs in Richardson, Texas and Lehi, Utah.",
        founded: null,
        employees: ""
    },
    {
        id: 104,
        name: "Micron Technology",
        twitter: "",
        twitterUrl: "",
        website: "https://www.micron.com/",
        email: "",
        phone: "",
        location: {
            city: "Boise",
            state: "Idaho",
            zip: ""
        },
        industry: "Semiconductor Fab",
        products: [
            "DRAM",
            "Memory wafers",
            "Advanced memory fabs"
        ],
        description: "Memory manufacturer building a leading-edge DRAM megafab in Boise, Idaho and planning a large multi-fab memory complex in Onondaga County, New York.",
        founded: null,
        employees: ""
    },
    {
        id: 105,
        name: "GlobalFoundries",
        twitter: "",
        twitterUrl: "",
        website: "https://www.gf.com/",
        email: "",
        phone: "",
        location: {
            city: "Malta",
            state: "New York",
            zip: ""
        },
        industry: "Semiconductor Foundry",
        products: [
            "300 mm foundry wafers",
            "RF chips",
            "Automotive semiconductors",
            "Specialty CMOS"
        ],
        description: "Major U.S. foundry operator with Fab 8 in Malta, New York and the East Fishkill fab serving specialty, RF, automotive, industrial, and image sensor processes.",
        founded: null,
        employees: ""
    },
    {
        id: 106,
        name: "SkyWater Technology",
        twitter: "",
        twitterUrl: "",
        website: "https://www.skywatertechnology.com/",
        email: "",
        phone: "",
        location: {
            city: "Bloomington",
            state: "Minnesota",
            zip: ""
        },
        industry: "Semiconductor Foundry",
        products: [
            "Trusted foundry wafers",
            "Mixed-signal chips",
            "Specialty process wafers"
        ],
        description: "U.S.-owned pure-play semiconductor foundry operating a DOD-trusted 200 mm fab in Bloomington, Minnesota and a second specialty fab in NeoCity, Florida.",
        founded: null,
        employees: ""
    },
    {
        id: 107,
        name: "Wolfspeed",
        twitter: "",
        twitterUrl: "",
        website: "https://www.wolfspeed.com/",
        email: "",
        phone: "",
        location: {
            city: "Marcy",
            state: "New York",
            zip: ""
        },
        industry: "Power Semiconductor Fab",
        products: [
            "200 mm silicon carbide power devices",
            "SiC wafers",
            "Power semiconductors"
        ],
        description: "Silicon-carbide semiconductor manufacturer operating the Mohawk Valley Fab in Marcy, New York for EV and industrial power devices.",
        founded: null,
        employees: ""
    },
    {
        id: 108,
        name: "Tesla Inc.",
        twitter: "",
        twitterUrl: "",
        website: "https://www.tesla.com/",
        email: "",
        phone: "",
        location: {
            city: "Austin",
            state: "Texas",
            zip: ""
        },
        industry: "Battery Cell Manufacturing",
        products: [
            "2170 lithium-ion cells",
            "4680 cylindrical cells",
            "LFP energy storage cells"
        ],
        description: "Vertically integrated battery manufacturer producing cylindrical lithium-ion cells at Gigafactory Nevada and scaling 4680 cell production in Texas for vehicles and stationary storage.",
        founded: null,
        employees: ""
    },
    {
        id: 109,
        name: "Panasonic Energy of North America",
        twitter: "",
        twitterUrl: "",
        website: "https://na.panasonic.com/panasonic-energy",
        email: "",
        phone: "",
        location: {
            city: "Sparks",
            state: "Nevada",
            zip: ""
        },
        industry: "Battery Cell Manufacturing",
        products: [
            "2170 cylindrical cells",
            "NCA battery cells"
        ],
        description: "Battery cell producer and major Tesla supplier manufacturing cylindrical cells in Nevada and expanding U.S. production with a new facility in De Soto, Kansas.",
        founded: null,
        employees: ""
    },
    {
        id: 110,
        name: "Ultium Cells LLC",
        twitter: "",
        twitterUrl: "",
        website: "https://ultiumcells.com/",
        email: "",
        phone: "",
        location: {
            city: "Lordstown",
            state: "Ohio",
            zip: ""
        },
        industry: "Battery Cell Manufacturing",
        products: [
            "Pouch lithium-ion cells",
            "NCM cells",
            "NCMA cells"
        ],
        description: "GM and LG Energy Solution joint venture operating a multi-gigafactory U.S. footprint in Ohio and Tennessee for EV pouch cell production.",
        founded: null,
        employees: ""
    },
    {
        id: 111,
        name: "SK On",
        twitter: "",
        twitterUrl: "",
        website: "https://sk-on.com/",
        email: "",
        phone: "",
        location: {
            city: "Commerce",
            state: "Georgia",
            zip: ""
        },
        industry: "Battery Cell Manufacturing",
        products: [
            "Pouch lithium-ion cells",
            "Prismatic lithium-ion cells",
            "High-nickel NCM cells"
        ],
        description: "Large U.S. battery cell manufacturer supplying Ford, Hyundai, and Volkswagen from major Georgia operations and additional JV projects in Kentucky and Tennessee.",
        founded: null,
        employees: ""
    },
    {
        id: 112,
        name: "LG Energy Solution America",
        twitter: "",
        twitterUrl: "",
        website: "https://www.lgensol.com/",
        email: "",
        phone: "",
        location: {
            city: "Holland",
            state: "Michigan",
            zip: ""
        },
        industry: "Battery Cell Manufacturing",
        products: [
            "Pouch cells",
            "Cylindrical cells",
            "Prismatic cells",
            "NCM/NCA/LFP cells"
        ],
        description: "Battery manufacturer supplying major U.S. automakers from existing and expanding American operations in Michigan and Arizona.",
        founded: null,
        employees: ""
    },
    {
        id: 113,
        name: "Samsung SDI America",
        twitter: "",
        twitterUrl: "",
        website: "https://www.samsungsdi.com/",
        email: "",
        phone: "",
        location: {
            city: "New Carlisle",
            state: "Indiana",
            zip: ""
        },
        industry: "Battery Cell Manufacturing",
        products: [
            "Prismatic cells",
            "Cylindrical cells",
            "NCA battery cells"
        ],
        description: "Battery cell producer developing U.S. prismatic and cylindrical manufacturing capacity through its Indiana GM joint venture.",
        founded: null,
        employees: ""
    },
    {
        id: 114,
        name: "AESC US",
        twitter: "",
        twitterUrl: "",
        website: "https://us.aesc-group.com/",
        email: "",
        phone: "",
        location: {
            city: "Smyrna",
            state: "Tennessee",
            zip: ""
        },
        industry: "Battery Cell Manufacturing",
        products: [
            "Pouch cells",
            "EV battery cells",
            "Energy storage cells"
        ],
        description: "Battery cell manufacturer expanding U.S. pouch-cell production in Tennessee and Kentucky to support Nissan and other OEM programs.",
        founded: null,
        employees: ""
    },
    {
        id: 115,
        name: "KORE Power",
        twitter: "",
        twitterUrl: "",
        website: "https://korepower.com/",
        email: "",
        phone: "",
        location: {
            city: "Buckeye",
            state: "Arizona",
            zip: ""
        },
        industry: "Battery Cell Manufacturing",
        products: [
            "Pouch lithium-ion cells",
            "Stationary storage cells"
        ],
        description: "Battery company developing the KOREPlex facility in Arizona for high-energy-density pouch cells aimed at stationary storage and industrial applications.",
        founded: null,
        employees: ""
    },
    {
        id: 116,
        name: "American Battery Factory",
        twitter: "",
        twitterUrl: "",
        website: "https://americanbatteryfactory.com/",
        email: "",
        phone: "",
        location: {
            city: "",
            state: "Utah",
            zip: ""
        },
        industry: "Battery Cell Manufacturing",
        products: [
            "LFP prismatic cells"
        ],
        description: "Developer of planned U.S. LFP battery gigafactories starting in Utah with a focus on domestic prismatic cell production.",
        founded: null,
        employees: ""
    },
    {
        id: 117,
        name: "ASML Holding NV",
        twitter: "",
        twitterUrl: "",
        website: "https://www.asml.com/",
        email: "",
        phone: "",
        location: {
            city: "Wilton",
            state: "Connecticut",
            zip: ""
        },
        industry: "EUV Lithography",
        products: [
            "EUV lithography scanners",
            "High-NA EUV systems",
            "DUV lithography systems"
        ],
        description: "Sole EUV scanner manufacturer serving U.S. fabs through American sales and service operations, with tools deployed at leading-edge domestic semiconductor fabs.",
        founded: null,
        employees: ""
    },
    {
        id: 118,
        name: "ZEISS Semiconductor Manufacturing Technology",
        twitter: "",
        twitterUrl: "",
        website: "https://www.zeiss.com/smt",
        email: "",
        phone: "",
        location: {
            city: "",
            state: "California",
            zip: ""
        },
        industry: "EUV Lithography",
        products: [
            "EUV projection optics",
            "High-NA EUV optics",
            "EUV photomask blanks"
        ],
        description: "Optics supplier for EUV lithography systems, providing mirrors, projection optics, and photomask blank technology used in advanced semiconductor manufacturing.",
        founded: null,
        employees: ""
    },
    {
        id: 119,
        name: "Cymer",
        twitter: "",
        twitterUrl: "",
        website: "https://www.asml.com/en/products/euv-light-sources",
        email: "",
        phone: "",
        location: {
            city: "San Diego",
            state: "California",
            zip: ""
        },
        industry: "EUV Lithography",
        products: [
            "EUV light sources",
            "Laser-produced plasma source systems"
        ],
        description: "ASML subsidiary in San Diego producing the EUV light sources that generate extreme ultraviolet radiation for leading-edge lithography scanners.",
        founded: null,
        employees: ""
    },
    {
        id: 120,
        name: "Nikon Precision",
        twitter: "",
        twitterUrl: "",
        website: "https://www.nikonprecision.com/",
        email: "",
        phone: "",
        location: {
            city: "Melville",
            state: "New York",
            zip: ""
        },
        industry: "Photolithography",
        products: [
            "DUV lithography scanners",
            "193 nm immersion scanners"
        ],
        description: "Supplier of DUV and legacy photolithography systems used for pre-EUV semiconductor nodes and specialty applications in the U.S. market.",
        founded: null,
        employees: ""
    },
    {
        id: 121,
        name: "Canon USA, Inc.",
        twitter: "",
        twitterUrl: "",
        website: "https://global.canon/en/lithography",
        email: "",
        phone: "",
        location: {
            city: "Richardson",
            state: "Texas",
            zip: ""
        },
        industry: "Photolithography",
        products: [
            "DUV lithography systems",
            "Nanoimprint lithography systems"
        ],
        description: "Provider of legacy and alternative lithography platforms serving semiconductor manufacturing, including DUV and nanoimprint systems.",
        founded: null,
        employees: ""
    },
    {
        id: 122,
        name: "Framatome Inc.",
        twitter: "",
        twitterUrl: "",
        website: "https://www.framatome.com",
        email: "",
        phone: "",
        location: {
            city: "Richland",
            state: "Washington",
            zip: ""
        },
        industry: "Nuclear Fuel Fabrication",
        products: [
            "Light water reactor fuel fabrication",
            "PWR fuel assemblies",
            "BWR fuel assemblies"
        ],
        description: "Largest U.S. commercial nuclear fuel fabricator; supplies Westinghouse-type PWR and BWR fuel assemblies.",
        founded: null,
        employees: ""
    },
    {
        id: 123,
        name: "Westinghouse Electric Company",
        twitter: "",
        twitterUrl: "",
        website: "https://westinghousenuclear.com",
        email: "",
        phone: "",
        location: {
            city: "Hopkins",
            state: "South Carolina",
            zip: ""
        },
        industry: "Nuclear Fuel Fabrication",
        products: [
            "PWR fuel assemblies",
            "AP1000 fuel",
            "Advanced nuclear fuel products"
        ],
        description: "Global leader in PWR fuel with U.S. fuel manufacturing and R&D operations in South Carolina.",
        founded: null,
        employees: ""
    },
    {
        id: 124,
        name: "Global Nuclear Fuel - Americas (GE Hitachi)",
        twitter: "",
        twitterUrl: "",
        website: "https://gnf-americas.com",
        email: "",
        phone: "",
        location: {
            city: "Wilmington",
            state: "North Carolina",
            zip: ""
        },
        industry: "Nuclear Fuel Fabrication",
        products: [
            "BWR fuel assemblies",
            "Advanced BWR fuel designs"
        ],
        description: "Sole U.S. supplier of boiling water reactor fuel assemblies, with advanced BWR fuel capabilities.",
        founded: null,
        employees: ""
    },
    {
        id: 125,
        name: "BWX Technologies (BWXT)",
        twitter: "",
        twitterUrl: "",
        website: "https://www.bwxt.com",
        email: "",
        phone: "",
        location: {
            city: "Lynchburg",
            state: "Virginia",
            zip: ""
        },
        industry: "Nuclear Fuel Fabrication",
        products: [
            "Naval reactor fuel",
            "TRISO fuel",
            "Research reactor fuel"
        ],
        description: "DOE contractor for naval propulsion fuel fabrication and an advanced fuel developer for TRISO and HTGR programs.",
        founded: null,
        employees: ""
    },
    {
        id: 126,
        name: "Centrus Energy Corp. (MOX fuel capability)",
        twitter: "",
        twitterUrl: "",
        website: "https://www.centrusenergy.com",
        email: "",
        phone: "",
        location: {
            city: "Piketon",
            state: "Ohio",
            zip: ""
        },
        industry: "Nuclear Fuel Fabrication",
        products: [
            "Mixed oxide fuel capability (planned)",
            "HALEU production",
            "Advanced fuel production capability"
        ],
        description: "Preparing for HALEU expansion and potential mixed oxide fuel production to support advanced reactor fuel supply.",
        founded: null,
        employees: ""
    },
    {
        id: 127,
        name: "Aarrowcast Inc.",
        twitter: "",
        twitterUrl: "",
        website: "https://aarrowcast.com",
        email: "",
        phone: "",
        location: {
            city: "Wauconda",
            state: "Illinois",
            zip: ""
        },
        industry: "Foundry / Casting",
        products: [
            "Investment casting",
            "Steel castings",
            "Stainless castings",
            "Nickel alloy castings"
        ],
        description: "U.S. investment casting company focused on steel, stainless, and nickel alloy cast components.",
        founded: null,
        employees: ""
    },
    {
        id: 128,
        name: "Alcast Technologies",
        twitter: "",
        twitterUrl: "",
        website: "https://alcastcompany.com",
        email: "",
        phone: "",
        location: {
            city: "Ronkonkoma",
            state: "New York",
            zip: ""
        },
        industry: "Foundry / Casting",
        products: [
            "Investment casting",
            "Aluminum castings",
            "Superalloy castings"
        ],
        description: "Investment casting supplier producing aluminum and superalloy cast components for precision applications.",
        founded: null,
        employees: ""
    },
    {
        id: 129,
        name: "Aero Metals Alliance",
        twitter: "",
        twitterUrl: "",
        website: "https://aerometalsalliance.com",
        email: "",
        phone: "",
        location: {
            city: "Multiple U.S. facilities",
            state: "",
            zip: ""
        },
        industry: "Foundry / Casting",
        products: [
            "Investment casting",
            "Sand casting",
            "V-process casting",
            "Aerospace alloy castings"
        ],
        description: "Multi-site U.S. casting platform offering investment, sand, and V-process casting for aerospace-grade alloys.",
        founded: null,
        employees: ""
    },
    {
        id: 130,
        name: "All Metals & Forge Group",
        twitter: "",
        twitterUrl: "",
        website: "https://steelforge.com",
        email: "",
        phone: "",
        location: {
            city: "Cleveland",
            state: "Ohio",
            zip: ""
        },
        industry: "Foundry / Casting",
        products: [
            "Investment casting services",
            "Sand casting services",
            "Steel cast components"
        ],
        description: "Cleveland-based supplier providing investment and sand casting services for industrial and engineered components.",
        founded: null,
        employees: ""
    },
    {
        id: 131,
        name: "American Casting Company",
        twitter: "",
        twitterUrl: "",
        website: "https://americancastingco.com",
        email: "",
        phone: "",
        location: {
            city: "Pueblo",
            state: "Colorado",
            zip: ""
        },
        industry: "Foundry / Casting",
        products: [
            "Sand casting",
            "Gray iron castings",
            "Ductile iron castings"
        ],
        description: "Foundry specializing in sand-cast gray and ductile iron components for heavy-use applications.",
        founded: null,
        employees: ""
    },
    {
        id: 132,
        name: "Buck Company",
        twitter: "",
        twitterUrl: "",
        website: "https://buckcompany.com",
        email: "",
        phone: "",
        location: {
            city: "Wooster",
            state: "Ohio",
            zip: ""
        },
        industry: "Foundry / Casting",
        products: [
            "Green sand casting",
            "Gray iron castings",
            "Ductile iron castings"
        ],
        description: "Ohio iron foundry focused on green sand casting for gray and ductile iron product lines.",
        founded: null,
        employees: ""
    },
    {
        id: 133,
        name: "Denthur Casting",
        twitter: "",
        twitterUrl: "",
        website: "https://denthur.com",
        email: "",
        phone: "",
        location: {
            city: "Grand Rapids",
            state: "Michigan",
            zip: ""
        },
        industry: "Foundry / Casting",
        products: [
            "Die casting",
            "Aluminum die cast parts",
            "Zinc die cast parts"
        ],
        description: "Die casting operation producing aluminum and zinc components for volume manufacturing programs.",
        founded: null,
        employees: ""
    },
    {
        id: 134,
        name: "MetalTek International",
        twitter: "",
        twitterUrl: "",
        website: "https://www.metaltek.com",
        email: "",
        phone: "",
        location: {
            city: "Waukesha",
            state: "Wisconsin",
            zip: ""
        },
        industry: "Foundry / Casting",
        products: [
            "Investment casting",
            "Centrifugal casting",
            "Sand casting",
            "Superalloy castings"
        ],
        description: "Casting manufacturer with investment, centrifugal, and sand casting capabilities for high-performance alloy components.",
        founded: null,
        employees: ""
    },
    {
        id: 135,
        name: "Fathom",
        twitter: "",
        twitterUrl: "",
        website: "https://fathommfg.com",
        email: "",
        phone: "",
        location: {
            city: "Hartland",
            state: "Wisconsin",
            zip: ""
        },
        industry: "CNC Machining",
        products: [
            "CNC machining",
            "Additive manufacturing",
            "Injection molding",
            "Finishing"
        ],
        description: "Digital manufacturing provider offering CNC machining and adjacent services for aerospace, robotics, and defense programs.",
        founded: null,
        employees: ""
    },
    {
        id: 136,
        name: "eMachineShop",
        twitter: "",
        twitterUrl: "",
        website: "https://www.emachineshop.com",
        email: "",
        phone: "",
        location: {
            city: "Mahwah",
            state: "New Jersey",
            zip: ""
        },
        industry: "CNC Machining",
        products: [
            "Custom CNC milling",
            "Custom CNC turning",
            "Waterjet cutting",
            "EDM",
            "Laser cutting"
        ],
        description: "Online manufacturing platform for custom CNC parts and complementary cutting processes serving electronics and hardware teams.",
        founded: null,
        employees: ""
    },
    {
        id: 137,
        name: "Owens Industries",
        twitter: "",
        twitterUrl: "",
        website: "https://www.owensind.com",
        email: "",
        phone: "",
        location: {
            city: "Zablocki",
            state: "Wisconsin",
            zip: ""
        },
        industry: "CNC Machining",
        products: [
            "Ultra-precision 5-axis CNC machining",
            "Swiss turning",
            "EDM",
            "Tight-tolerance components"
        ],
        description: "Ultra-precision CNC shop with 5-axis, Swiss turning, and EDM capabilities for aerospace, optics, and medical devices.",
        founded: null,
        employees: ""
    },
    {
        id: 138,
        name: "Baker Industries (Lincoln Electric)",
        twitter: "",
        twitterUrl: "",
        website: "https://www.bakerindustriesinc.com",
        email: "",
        phone: "",
        location: {
            city: "Macomb",
            state: "Michigan",
            zip: ""
        },
        industry: "CNC Machining",
        products: [
            "Large-scale 5-axis CNC machining",
            "Welding",
            "Metal additive manufacturing",
            "Automation systems"
        ],
        description: "Large-format machining and tooling operation combining 5-axis CNC, welding, and metal additive manufacturing.",
        founded: null,
        employees: ""
    },
    {
        id: 139,
        name: "Buck's CNC Machining",
        twitter: "",
        twitterUrl: "",
        website: "https://buckscnc.com",
        email: "",
        phone: "",
        location: {
            city: "Heyburn",
            state: "Idaho",
            zip: ""
        },
        industry: "CNC Machining",
        products: [
            "3-axis milling",
            "4-axis milling",
            "5-axis milling",
            "CNC turning",
            "EDM",
            "Grinding",
            "CMM inspection"
        ],
        description: "Idaho CNC machine shop supporting defense, aerospace, and industrial work with multi-axis machining and inspection capabilities.",
        founded: null,
        employees: ""
    },
    {
        id: 140,
        name: "Advance CNC Machining",
        twitter: "",
        twitterUrl: "",
        website: "https://advancecnc.com",
        email: "",
        phone: "",
        location: {
            city: "Grove City",
            state: "Ohio",
            zip: ""
        },
        industry: "CNC Machining",
        products: [
            "Automated 5-axis milling",
            "High-volume CNC turning",
            "Reverse engineering"
        ],
        description: "Ohio CNC manufacturer focused on automated high-volume milling and turning for aerospace, automotive, and medical sectors.",
        founded: null,
        employees: ""
    },
    {
        id: 141,
        name: "United CNC Machining",
        twitter: "",
        twitterUrl: "",
        website: "https://unitedcncmachining.com",
        email: "",
        phone: "",
        location: {
            city: "Auburn Hills",
            state: "Michigan",
            zip: ""
        },
        industry: "CNC Machining",
        products: [
            "Multi-axis CNC milling",
            "5-axis CNC turning",
            "Exotic alloy machining"
        ],
        description: "Multi-axis machining supplier producing precision components in standard and exotic alloys for aerospace and defense programs.",
        founded: null,
        employees: ""
    },
    {
        id: 142,
        name: "Pioneer Service",
        twitter: "",
        twitterUrl: "",
        website: "https://pioneerservice.com",
        email: "",
        phone: "",
        location: {
            city: "St. Charles",
            state: "Illinois",
            zip: ""
        },
        industry: "CNC Machining",
        products: [
            "Swiss CNC turning",
            "Micro-machining",
            "Tight-tolerance medical components"
        ],
        description: "Swiss turning and micro-machining shop serving medical device and aerospace applications with very tight tolerance requirements.",
        founded: null,
        employees: ""
    },
    {
        id: 143,
        name: "Plastikon Industries",
        twitter: "",
        twitterUrl: "",
        website: "https://plastikon.com",
        email: "",
        phone: "",
        location: {
            city: "Hayward",
            state: "California",
            zip: ""
        },
        industry: "Injection Molding",
        products: [
            "High-volume injection molding",
            "Custom molded plastic parts",
            "Production molding programs"
        ],
        description: "High-volume U.S. injection molder serving production-scale programs across multiple domestic facilities.",
        founded: null,
        employees: ""
    },
    {
        id: 144,
        name: "LTM Plastics",
        twitter: "",
        twitterUrl: "",
        website: "https://ltmplastics.com",
        email: "",
        phone: "",
        location: {
            city: "Denver",
            state: "Colorado",
            zip: ""
        },
        industry: "Injection Molding",
        products: [
            "Precision injection molding",
            "Medical molded components",
            "Electronics molded components"
        ],
        description: "Precision injection molding supplier focused on medical and electronics applications.",
        founded: null,
        employees: ""
    },
    {
        id: 145,
        name: "The Rodon Group",
        twitter: "",
        twitterUrl: "",
        website: "https://www.rodongroup.com",
        email: "",
        phone: "",
        location: {
            city: "Hatfield",
            state: "Pennsylvania",
            zip: ""
        },
        industry: "Injection Molding",
        products: [
            "High-volume injection molding",
            "Tight-tolerance molded parts",
            "Custom tooling and molding"
        ],
        description: "Pennsylvania molder known for high-volume, tight-tolerance injection molded plastic components.",
        founded: null,
        employees: ""
    },
    {
        id: 146,
        name: "Seaway Plastics Engineering",
        twitter: "",
        twitterUrl: "",
        website: "https://seawaype.com",
        email: "",
        phone: "",
        location: {
            city: "Port Richey",
            state: "Florida",
            zip: ""
        },
        industry: "Injection Molding",
        products: [
            "Micro-molding",
            "Engineering resin molding",
            "Precision injection molding"
        ],
        description: "Engineering-focused molder specializing in micro-molding and precision parts using high-performance resins.",
        founded: null,
        employees: ""
    },
    {
        id: 147,
        name: "Trans-Matic",
        twitter: "",
        twitterUrl: "",
        website: "https://www.trans-matic.com",
        email: "",
        phone: "",
        location: {
            city: "Holland",
            state: "Michigan",
            zip: ""
        },
        industry: "Stamping / Deep Draw",
        products: [
            "Deep draw metal stamping",
            "Transfer press stamping",
            "Automotive stamped components",
            "HVAC stamped components"
        ],
        description: "Michigan deep draw specialist producing high-volume stamped components for automotive and HVAC applications.",
        founded: null,
        employees: ""
    },
    {
        id: 148,
        name: "Hudson Technologies",
        twitter: "",
        twitterUrl: "",
        website: "https://www.hudson-technologies.com",
        email: "",
        phone: "",
        location: {
            city: "Elk Grove Village",
            state: "Illinois",
            zip: ""
        },
        industry: "Stamping / Deep Draw",
        products: [
            "Precision deep draw stamping",
            "Prototype-to-production stampings",
            "Design review support"
        ],
        description: "Precision deep draw stamper with in-house design support and prototyping for complex formed components.",
        founded: null,
        employees: ""
    },
    {
        id: 149,
        name: "DureX Inc.",
        twitter: "",
        twitterUrl: "",
        website: "https://durexinc.com",
        email: "",
        phone: "",
        location: {
            city: "Union",
            state: "New Jersey",
            zip: ""
        },
        industry: "Stamping / Deep Draw",
        products: [
            "Deep draw metal enclosures",
            "Deep draw housings",
            "Seamless formed components"
        ],
        description: "New Jersey deep draw manufacturer focused on seamless enclosures and housings for complex metal part geometries.",
        founded: null,
        employees: ""
    },
    {
        id: 150,
        name: "Wedge Products",
        twitter: "",
        twitterUrl: "",
        website: "https://www.wedgeproducts.com",
        email: "",
        phone: "",
        location: {
            city: "Grove City",
            state: "Ohio",
            zip: ""
        },
        industry: "Stamping / Deep Draw",
        products: [
            "Deep draw stamping",
            "ISO-certified stamped components",
            "Aerospace and defense stampings"
        ],
        description: "Ohio metal former providing deep draw stamped parts for aerospace, automotive, and defense applications.",
        founded: null,
        employees: ""
    },
    {
        id: 151,
        name: "Hines Precision Inc. (The Hines Group)",
        twitter: "",
        twitterUrl: "",
        website: "https://hinesprecision.com",
        email: "",
        phone: "",
        location: {
            city: "Frankfort",
            state: "New York",
            zip: ""
        },
        industry: "Stamping / Deep Draw",
        products: [
            "Precision metal stamping",
            "Deep draw components",
            "Design-to-production support"
        ],
        description: "Precision stamping supplier offering deep draw capabilities and end-to-end support from design through production.",
        founded: null,
        employees: ""
    },
    {
        id: 152,
        name: "ITW Drawform",
        twitter: "",
        twitterUrl: "",
        website: "https://www.itwdrawform.com",
        email: "",
        phone: "",
        location: {
            city: "Zeeland",
            state: "Michigan",
            zip: ""
        },
        industry: "Stamping / Deep Draw",
        products: [
            "Precision deep draw stamping",
            "Automotive deep draw parts",
            "Value-added forming operations"
        ],
        description: "Automotive-focused precision deep draw operation with advanced forming and value-added secondary processing.",
        founded: null,
        employees: ""
    },
    {
        id: 153,
        name: "Plug Power Inc.",
        twitter: "",
        twitterUrl: "",
        website: "https://www.plugpower.com",
        email: "",
        phone: "",
        location: {
            city: "Latham",
            state: "New York",
            zip: ""
        },
        industry: "Electrolysis / Green Hydrogen",
        products: [
            "PEM electrolyzers",
            "Integrated hydrogen systems",
            "Green hydrogen production systems"
        ],
        description: "U.S. hydrogen systems company deploying PEM electrolyzers and integrated green hydrogen infrastructure.",
        founded: null,
        employees: ""
    },
    {
        id: 154,
        name: "Nel Hydrogen (Nel ASA)",
        twitter: "",
        twitterUrl: "",
        website: "https://nelhydrogen.com",
        email: "",
        phone: "",
        location: {
            city: "",
            state: "Connecticut",
            zip: ""
        },
        industry: "Electrolysis / Green Hydrogen",
        products: [
            "Alkaline electrolyzers",
            "PEM electrolyzers",
            "Hydrogen production systems"
        ],
        description: "Electrolyzer supplier with U.S. operations supporting large-scale alkaline and PEM hydrogen projects.",
        founded: null,
        employees: ""
    },
    {
        id: 155,
        name: "Cummins Inc.",
        twitter: "",
        twitterUrl: "",
        website: "https://www.cummins.com/hydrogen",
        email: "",
        phone: "",
        location: {
            city: "Minneapolis",
            state: "Minnesota",
            zip: ""
        },
        industry: "Electrolysis / Green Hydrogen",
        products: [
            "PEM electrolyzer modules",
            "Hydrogen production systems",
            "MW-scale electrolyzer packages"
        ],
        description: "Industrial manufacturer developing and scaling PEM electrolyzer systems for large green hydrogen deployments.",
        founded: null,
        employees: ""
    },
    {
        id: 156,
        name: "Bloom Energy",
        twitter: "",
        twitterUrl: "",
        website: "https://www.bloomenergy.com",
        email: "",
        phone: "",
        location: {
            city: "San Jose",
            state: "California",
            zip: ""
        },
        industry: "Electrolysis / Green Hydrogen",
        products: [
            "Solid oxide electrolysis systems",
            "SOEC hydrogen production platforms"
        ],
        description: "Energy technology company advancing high-efficiency solid oxide electrolysis for hydrogen production.",
        founded: null,
        employees: ""
    },
    {
        id: 157,
        name: "ITM Power",
        twitter: "",
        twitterUrl: "",
        website: "https://itm-power.com",
        email: "",
        phone: "",
        location: {
            city: "U.S. partnership projects",
            state: "",
            zip: ""
        },
        industry: "Electrolysis / Green Hydrogen",
        products: [
            "PEM electrolyzers",
            "Industrial-scale hydrogen systems"
        ],
        description: "PEM electrolyzer company participating in U.S. green hydrogen projects through industrial partnerships.",
        founded: null,
        employees: ""
    },
    {
        id: 158,
        name: "First Solar",
        twitter: "",
        twitterUrl: "",
        website: "https://www.firstsolar.com",
        email: "",
        phone: "",
        location: {
            city: "Perrysburg",
            state: "Ohio",
            zip: ""
        },
        industry: "Solar Cell Manufacturing",
        products: [
            "CdTe thin-film solar cells",
            "Solar modules",
            "Utility-scale PV products"
        ],
        description: "Major U.S. solar manufacturer producing cadmium telluride thin-film solar cells and modules.",
        founded: null,
        employees: ""
    },
    {
        id: 159,
        name: "Qcells (Hanwha)",
        twitter: "",
        twitterUrl: "",
        website: "https://us.qcells.com",
        email: "",
        phone: "",
        location: {
            city: "Cartersville",
            state: "Georgia",
            zip: ""
        },
        industry: "Solar Cell Manufacturing",
        products: [
            "Monocrystalline solar cells",
            "PERC/TOPCon cells",
            "Solar modules"
        ],
        description: "Solar producer building large-scale U.S. monocrystalline cell and module manufacturing capacity.",
        founded: null,
        employees: ""
    },
    {
        id: 160,
        name: "Mission Solar",
        twitter: "",
        twitterUrl: "",
        website: "https://www.missionsolar.com",
        email: "",
        phone: "",
        location: {
            city: "San Antonio",
            state: "Texas",
            zip: ""
        },
        industry: "Solar Cell Manufacturing",
        products: [
            "PERC monocrystalline solar cells",
            "Solar modules"
        ],
        description: "Texas-based solar manufacturer focused on domestic PERC monocrystalline cell and module output.",
        founded: null,
        employees: ""
    },
    {
        id: 161,
        name: "Silfab Solar",
        twitter: "",
        twitterUrl: "",
        website: "https://www.silfabsolar.com",
        email: "",
        phone: "",
        location: {
            city: "Bellingham",
            state: "Washington",
            zip: ""
        },
        industry: "Solar Cell Manufacturing",
        products: [
            "Monocrystalline N-type cells",
            "Solar modules"
        ],
        description: "U.S. solar manufacturer producing and expanding domestic N-type monocrystalline cell and module capability.",
        founded: null,
        employees: ""
    },
    {
        id: 162,
        name: "Heliene",
        twitter: "",
        twitterUrl: "",
        website: "https://heliene.com",
        email: "",
        phone: "",
        location: {
            city: "Mt. Iron",
            state: "Minnesota",
            zip: ""
        },
        industry: "Solar Cell Manufacturing",
        products: [
            "PERC/TOPCon cells",
            "Solar modules"
        ],
        description: "North American solar producer ramping domestic PERC/TOPCon cell and module manufacturing.",
        founded: null,
        employees: ""
    },
    {
        id: 163,
        name: "GE Vernova (GE Power)",
        twitter: "",
        twitterUrl: "",
        website: "https://www.gevernova.com",
        email: "",
        phone: "",
        location: {
            city: "Greenville",
            state: "South Carolina",
            zip: ""
        },
        industry: "Turbine Manufacturing",
        products: [
            "Gas turbines",
            "Steam turbines",
            "HA/7F/LM turbine platforms"
        ],
        description: "Major turbine OEM manufacturing gas and steam turbine platforms for utility and industrial power generation.",
        founded: null,
        employees: ""
    },
    {
        id: 164,
        name: "Siemens Energy",
        twitter: "",
        twitterUrl: "",
        website: "https://www.siemens-energy.com",
        email: "",
        phone: "",
        location: {
            city: "Orlando",
            state: "Florida",
            zip: ""
        },
        industry: "Turbine Manufacturing",
        products: [
            "Gas turbines",
            "HL-class turbines",
            "Steam turbines"
        ],
        description: "Power technology supplier with U.S. turbine manufacturing and service support for gas and steam fleets.",
        founded: null,
        employees: ""
    },
    {
        id: 165,
        name: "Mitsubishi Power Americas",
        twitter: "",
        twitterUrl: "",
        website: "https://power.mhi.com",
        email: "",
        phone: "",
        location: {
            city: "Lake Mary",
            state: "Florida",
            zip: ""
        },
        industry: "Turbine Manufacturing",
        products: [
            "J-class gas turbines",
            "Steam turbines"
        ],
        description: "Power OEM delivering advanced gas and steam turbine systems for utility-scale generation.",
        founded: null,
        employees: ""
    },
    {
        id: 166,
        name: "Solar Turbines (Caterpillar)",
        twitter: "",
        twitterUrl: "",
        website: "https://www.solarturbines.com",
        email: "",
        phone: "",
        location: {
            city: "San Diego",
            state: "California",
            zip: ""
        },
        industry: "Turbine Manufacturing",
        products: [
            "Industrial gas turbines",
            "Mars turbine series",
            "Taurus turbine series",
            "Centaur turbine series"
        ],
        description: "Industrial turbine manufacturer focused on 1-30 MW gas turbine packages for energy and process applications.",
        founded: null,
        employees: ""
    },
    {
        id: 167,
        name: "Vestas Wind Systems",
        twitter: "",
        twitterUrl: "",
        website: "https://www.vestas.com",
        email: "",
        phone: "",
        location: {
            city: "",
            state: "Colorado",
            zip: ""
        },
        industry: "Turbine Manufacturing",
        products: [
            "Wind turbine nacelles",
            "Wind turbine blades",
            "Wind turbine towers"
        ],
        description: "Wind turbine manufacturer with U.S. production and integration capacity for onshore and offshore wind systems.",
        founded: null,
        employees: ""
    },
    {
        id: 168,
        name: "Bodycote Thermal Processing",
        twitter: "",
        twitterUrl: "",
        website: "https://www.bodycote.com",
        email: "",
        phone: "",
        location: {
            city: "Multiple U.S. locations",
            state: "",
            zip: ""
        },
        industry: "Heat Treatment",
        products: [
            "Heat treatment services",
            "Vacuum heat treatment",
            "NADCAP-qualified processing"
        ],
        description: "Thermal processing provider offering broad heat treatment capabilities across multiple U.S. facilities.",
        founded: null,
        employees: ""
    },
    {
        id: 169,
        name: "Paulo",
        twitter: "",
        twitterUrl: "",
        website: "https://www.paulo.com",
        email: "",
        phone: "",
        location: {
            city: "St. Louis",
            state: "Missouri",
            zip: ""
        },
        industry: "Heat Treatment",
        products: [
            "Heat treatment services",
            "Vacuum carburizing",
            "Large-part thermal processing"
        ],
        description: "U.S. heat treater with multi-site operations and capabilities for large parts and advanced carburizing cycles.",
        founded: null,
        employees: ""
    },
    {
        id: 170,
        name: "Surface Combustion",
        twitter: "",
        twitterUrl: "",
        website: "https://www.surfacecombustion.com",
        email: "",
        phone: "",
        location: {
            city: "Toledo",
            state: "Ohio",
            zip: ""
        },
        industry: "Heat Treatment",
        products: [
            "Industrial heat-treatment furnaces",
            "Thermal processing systems",
            "Furnace services"
        ],
        description: "Heat-treatment furnace manufacturer and service provider supporting thermal processing operations.",
        founded: null,
        employees: ""
    },
    {
        id: 171,
        name: "Valence Surface Technologies",
        twitter: "",
        twitterUrl: "",
        website: "https://www.valencesurfacetech.com",
        email: "",
        phone: "",
        location: {
            city: "San Jose",
            state: "California",
            zip: ""
        },
        industry: "Surface Finishing / Plating",
        products: [
            "Aerospace plating",
            "Anodizing",
            "Chemical surface processing"
        ],
        description: "Aerospace-focused provider of plating, anodizing, and related chemical surface finishing services.",
        founded: null,
        employees: ""
    },
    {
        id: 172,
        name: "Anomatic Corp.",
        twitter: "",
        twitterUrl: "",
        website: "https://anomatic.com",
        email: "",
        phone: "",
        location: {
            city: "New Albany",
            state: "Ohio",
            zip: ""
        },
        industry: "Surface Finishing / Plating",
        products: [
            "Anodizing",
            "Bright dipping",
            "Decorative metal finishing"
        ],
        description: "Metal finishing company specializing in anodizing and bright-dip surface treatment processes.",
        founded: null,
        employees: ""
    },
    {
        id: 173,
        name: "Keller Technology",
        twitter: "",
        twitterUrl: "",
        website: "https://kellertechnology.com",
        email: "",
        phone: "",
        location: {
            city: "Rochester",
            state: "New York",
            zip: ""
        },
        industry: "Surface Finishing / Plating",
        products: [
            "Electropolishing",
            "Passivation",
            "Plating services"
        ],
        description: "Precision manufacturer offering electropolish, passivation, and plating as part of advanced finishing workflows.",
        founded: null,
        employees: ""
    },
    {
        id: 174,
        name: "Advanced Plating Technologies",
        twitter: "",
        twitterUrl: "",
        website: "https://advancedplatingtech.com",
        email: "",
        phone: "",
        location: {
            city: "Milwaukee",
            state: "Wisconsin",
            zip: ""
        },
        industry: "Surface Finishing / Plating",
        products: [
            "Electroless nickel plating",
            "Hard chrome plating",
            "Engineered coating services"
        ],
        description: "Plating specialist focused on electroless nickel and hard chrome finishes for engineered components.",
        founded: null,
        employees: ""
    },
    {
        id: 175,
        name: "Amkor Technology",
        twitter: "",
        twitterUrl: "",
        website: "https://amkor.com",
        email: "",
        phone: "",
        location: {
            city: "Peoria",
            state: "Arizona",
            zip: ""
        },
        industry: "SMT / Chip Packaging",
        products: [
            "Advanced chip packaging",
            "Fan-out packaging",
            "2.5D/3D packaging",
            "SiP",
            "Flip chip"
        ],
        description: "U.S.-based OSAT provider delivering advanced packaging for AI, HPC, and high-volume semiconductor programs.",
        founded: null,
        employees: ""
    },
    {
        id: 176,
        name: "UTAC",
        twitter: "",
        twitterUrl: "",
        website: "https://utacgroup.com",
        email: "",
        phone: "",
        location: {
            city: "Austin",
            state: "Texas",
            zip: ""
        },
        industry: "SMT / Chip Packaging",
        products: [
            "Advanced semiconductor packaging",
            "Power semiconductor packaging",
            "Automotive packaging"
        ],
        description: "Semiconductor packaging company expanding U.S. capacity for automotive and power device packaging.",
        founded: null,
        employees: ""
    },
    {
        id: 177,
        name: "Infineon Technologies",
        twitter: "",
        twitterUrl: "",
        website: "https://www.infineon.com",
        email: "",
        phone: "",
        location: {
            city: "Austin",
            state: "Texas",
            zip: ""
        },
        industry: "Power Electronics",
        products: [
            "SiC/GaN power modules",
            "IGBTs",
            "MOSFETs",
            "Power semiconductors"
        ],
        description: "Power semiconductor supplier focused on SiC and GaN devices for EV, industrial, and renewable energy systems.",
        founded: null,
        employees: ""
    },
    {
        id: 178,
        name: "ON Semiconductor (onsemi)",
        twitter: "",
        twitterUrl: "",
        website: "https://www.onsemi.com",
        email: "",
        phone: "",
        location: {
            city: "Phoenix",
            state: "Arizona",
            zip: ""
        },
        industry: "Power Electronics",
        products: [
            "SiC MOSFETs",
            "IGBTs",
            "Power modules"
        ],
        description: "Power electronics manufacturer supplying automotive and industrial markets with SiC and IGBT technologies.",
        founded: null,
        employees: ""
    },
    {
        id: 179,
        name: "Vishay Intertechnology",
        twitter: "",
        twitterUrl: "",
        website: "https://www.vishay.com",
        email: "",
        phone: "",
        location: {
            city: "Malvern",
            state: "Pennsylvania",
            zip: ""
        },
        industry: "Power Electronics",
        products: [
            "Power MOSFETs",
            "Diodes",
            "Discrete power components",
            "Passive components"
        ],
        description: "Supplier of discrete power semiconductors and passives used across automotive, industrial, and electronics systems.",
        founded: null,
        employees: ""
    },
    {
        id: 180,
        name: "Molex",
        twitter: "",
        twitterUrl: "",
        website: "https://www.molex.com",
        email: "",
        phone: "",
        location: {
            city: "Lisle",
            state: "Illinois",
            zip: ""
        },
        industry: "Wire Harness / Electrical Integration",
        products: [
            "Custom wire harnesses",
            "Cable assemblies",
            "Connectors",
            "Electrical integration systems"
        ],
        description: "Connectivity manufacturer building high-reliability wire harness and cable assembly solutions for aerospace and automotive platforms.",
        founded: null,
        employees: ""
    },
    {
        id: 181,
        name: "TE Connectivity",
        twitter: "",
        twitterUrl: "",
        website: "https://www.te.com",
        email: "",
        phone: "",
        location: {
            city: "Berwyn",
            state: "Pennsylvania",
            zip: ""
        },
        industry: "Wire Harness / Electrical Integration",
        products: [
            "Wire harnesses",
            "Connectors",
            "Cable assemblies",
            "Electrical integration"
        ],
        description: "Connectivity and sensor company providing wire harness, connector, and integration solutions for transportation and industrial systems.",
        founded: null,
        employees: ""
    },
    {
        id: 182,
        name: "Yazaki North America",
        twitter: "",
        twitterUrl: "",
        website: "https://www.yazaki-group.com",
        email: "",
        phone: "",
        location: {
            city: "Canton",
            state: "Michigan",
            zip: ""
        },
        industry: "Wire Harness / Electrical Integration",
        products: [
            "Automotive wire harnesses",
            "Vehicle electrical distribution systems"
        ],
        description: "Automotive electrical systems supplier with large-scale wire harness manufacturing and integration programs.",
        founded: null,
        employees: ""
    },
    {
        id: 183,
        name: "Romtronic",
        twitter: "",
        twitterUrl: "",
        website: "https://www.romtronic.com",
        email: "",
        phone: "",
        location: {
            city: "U.S. operations",
            state: "",
            zip: ""
        },
        industry: "Wire Harness / Electrical Integration",
        products: [
            "Custom wire harnesses",
            "Cable assemblies",
            "Electrical assemblies"
        ],
        description: "Custom wire harness and cable assembly supplier serving automotive, medical, and industrial customers.",
        founded: null,
        employees: ""
    },
    {
        id: 184,
        name: "Astronics",
        twitter: "",
        twitterUrl: "",
        website: "https://www.astronics.com",
        email: "",
        phone: "",
        location: {
            city: "Kirkland",
            state: "Washington",
            zip: ""
        },
        industry: "Wire Harness / Electrical Integration",
        products: [
            "Aerospace wire harnesses",
            "Aircraft electrical integration systems"
        ],
        description: "Aerospace systems provider focused on aircraft electrical systems, harnesses, and integration hardware.",
        founded: null,
        employees: ""
    },
    {
        id: 185,
        name: "Northvolt North America",
        twitter: "",
        twitterUrl: "",
        website: "https://northvolt.com",
        email: "",
        phone: "",
        location: {
            city: "Quebec",
            state: "",
            zip: ""
        },
        industry: "Battery Pack Assembly",
        products: [
            "EV battery packs",
            "Energy storage packs"
        ],
        description: "Battery manufacturer developing EV and energy storage pack capacity in North America with U.S. expansion plans.",
        founded: null,
        employees: ""
    },
    {
        id: 186,
        name: "Lincoln Electric",
        twitter: "",
        twitterUrl: "",
        website: "https://www.lincolnelectric.com",
        email: "",
        phone: "",
        location: {
            city: "Cleveland",
            state: "Ohio",
            zip: ""
        },
        industry: "Welding / Brazing",
        products: [
            "Welding equipment",
            "Welding consumables",
            "Welding automation systems",
            "MIG/TIG/stick systems"
        ],
        description: "Global welding technology leader manufacturing welding power sources, consumables, and automation platforms.",
        founded: null,
        employees: ""
    },
    {
        id: 187,
        name: "Miller Electric Mfg. LLC",
        twitter: "",
        twitterUrl: "",
        website: "https://www.millerwelds.com",
        email: "",
        phone: "",
        location: {
            city: "Appleton",
            state: "Wisconsin",
            zip: ""
        },
        industry: "Welding / Brazing",
        products: [
            "Welding power sources",
            "Plasma cutters",
            "Engine-driven welders"
        ],
        description: "Welding equipment manufacturer producing industrial power sources, plasma systems, and field welding solutions.",
        founded: null,
        employees: ""
    },
    {
        id: 188,
        name: "Bodycote Plc",
        twitter: "",
        twitterUrl: "",
        website: "https://www.bodycote.com",
        email: "",
        phone: "",
        location: {
            city: "Multiple U.S. facilities",
            state: "",
            zip: ""
        },
        industry: "Welding / Brazing",
        products: [
            "Vacuum brazing",
            "Heat treatment services"
        ],
        description: "Thermal processing provider offering vacuum brazing and related treatments for aerospace and automotive components.",
        founded: null,
        employees: ""
    },
    {
        id: 189,
        name: "Byron Products",
        twitter: "",
        twitterUrl: "",
        website: "https://byronproducts.com",
        email: "",
        phone: "",
        location: {
            city: "Arcanum",
            state: "Ohio",
            zip: ""
        },
        industry: "Welding / Brazing",
        products: [
            "Vacuum brazing",
            "Heat treating",
            "Thermal processing services"
        ],
        description: "Ohio thermal processor focused on vacuum brazing and heat treatment for precision industrial parts.",
        founded: null,
        employees: ""
    },
    {
        id: 190,
        name: "Ickler Company Inc.",
        twitter: "",
        twitterUrl: "",
        website: "https://perrywelding.com/",
        email: "",
        phone: "",
        location: {
            city: "Sauk Rapids",
            state: "Minnesota",
            zip: ""
        },
        industry: "Welding / Brazing",
        products: [
            "Custom metal fabrication",
            "Welding services"
        ],
        description: "Custom metal fabricator providing welding-backed manufacturing support for industrial components.",
        founded: null,
        employees: ""
    },
    {
        id: 191,
        name: "Lynn Welding Co., Inc.",
        twitter: "",
        twitterUrl: "",
        website: "https://www.mccormicksmetrology.com/",
        email: "",
        phone: "",
        location: {
            city: "Newington",
            state: "Connecticut",
            zip: ""
        },
        industry: "Welding / Brazing",
        products: [
            "Resistance welding",
            "Fusion welding",
            "Brazing",
            "CNC machining"
        ],
        description: "Connecticut manufacturer offering resistance and fusion welding, brazing, and CNC machining services.",
        founded: null,
        employees: ""
    },
    {
        id: 192,
        name: "Technox Machine & Manufacturing Inc.",
        twitter: "",
        twitterUrl: "",
        website: "https://www.prattandwhitney.com/",
        email: "",
        phone: "",
        location: {
            city: "Chicago",
            state: "Illinois",
            zip: ""
        },
        industry: "Welding / Brazing",
        products: [
            "Welding",
            "Fabrication",
            "Machining",
            "Industrial machine parts"
        ],
        description: "Machine and fabrication supplier providing welding and machining support for industrial parts.",
        founded: null,
        employees: ""
    },
    {
        id: 193,
        name: "Perry Welding and Machine",
        twitter: "",
        twitterUrl: "",
        website: "https://usindt.com/",
        email: "",
        phone: "",
        location: {
            city: "Twinsburg",
            state: "Ohio",
            zip: ""
        },
        industry: "Welding / Brazing",
        products: [
            "Custom welding",
            "Machining",
            "Fabrication services"
        ],
        description: "Ohio shop offering custom welding and machining for industrial and maintenance applications.",
        founded: 1975,
        employees: ""
    },
    {
        id: 194,
        name: "Sartorius",
        twitter: "",
        twitterUrl: "",
        website: "https://www.sartorius.com",
        email: "",
        phone: "",
        location: {
            city: "Ann Arbor",
            state: "Michigan",
            zip: ""
        },
        industry: "Bioreactors / Fermentation",
        products: [
            "BIOSTAT stirred tank bioreactors",
            "Single-use bioreactors",
            "Scalable bioprocess systems"
        ],
        description: "Bioprocess technology supplier offering scalable stirred-tank and single-use bioreactor platforms.",
        founded: null,
        employees: ""
    },
    {
        id: 195,
        name: "Eppendorf",
        twitter: "",
        twitterUrl: "",
        website: "https://www.eppendorf.com",
        email: "",
        phone: "",
        location: {
            city: "Enfield",
            state: "Connecticut",
            zip: ""
        },
        industry: "Bioreactors / Fermentation",
        products: [
            "New Brunswick bioreactors",
            "Lab-scale fermentation systems",
            "Pilot-scale bioprocess systems"
        ],
        description: "Bioprocess instrumentation company supplying lab-to-pilot bioreactors for fermentation and cell culture.",
        founded: null,
        employees: ""
    },
    {
        id: 196,
        name: "Thermo Fisher Scientific",
        twitter: "",
        twitterUrl: "",
        website: "https://www.thermofisher.com",
        email: "",
        phone: "",
        location: {
            city: "Grand Island",
            state: "New York",
            zip: ""
        },
        industry: "Bioreactors / Fermentation",
        products: [
            "HyPerforma single-use bioreactors",
            "Cell culture systems",
            "Fermentation systems"
        ],
        description: "Life sciences supplier providing single-use bioreactor systems for cell culture and fermentation processes.",
        founded: null,
        employees: ""
    },
    {
        id: 197,
        name: "Pall Corporation",
        twitter: "",
        twitterUrl: "",
        website: "https://www.pall.com",
        email: "",
        phone: "",
        location: {
            city: "Port Washington",
            state: "New York",
            zip: ""
        },
        industry: "Bioreactors / Fermentation",
        products: [
            "Xcellerex bioreactors",
            "Single-use bioprocess systems"
        ],
        description: "Bioprocess equipment provider focused on single-use bioreactor platforms for biomanufacturing workflows.",
        founded: null,
        employees: ""
    },
    {
        id: 198,
        name: "Pfizer",
        twitter: "",
        twitterUrl: "",
        website: "https://www.pfizer.com",
        email: "",
        phone: "",
        location: {
            city: "Kalamazoo",
            state: "Michigan",
            zip: ""
        },
        industry: "Pharmaceutical Manufacturing",
        products: [
            "Sterile injectables",
            "Biologics",
            "Vaccines"
        ],
        description: "Large pharmaceutical manufacturer with U.S. facilities supporting sterile products, biologics, and vaccine production.",
        founded: null,
        employees: ""
    },
    {
        id: 199,
        name: "Moderna",
        twitter: "",
        twitterUrl: "",
        website: "https://www.modernatx.com",
        email: "",
        phone: "",
        location: {
            city: "Norwood",
            state: "Massachusetts",
            zip: ""
        },
        industry: "Pharmaceutical Manufacturing",
        products: [
            "mRNA vaccines",
            "Lipid nanoparticle formulations"
        ],
        description: "Biopharmaceutical manufacturer focused on mRNA platform products and vaccine production.",
        founded: null,
        employees: ""
    },
    {
        id: 200,
        name: "Gilead Sciences",
        twitter: "",
        twitterUrl: "",
        website: "https://www.gilead.com",
        email: "",
        phone: "",
        location: {
            city: "Foster City",
            state: "California",
            zip: ""
        },
        industry: "Pharmaceutical Manufacturing",
        products: [
            "Antiviral medicines",
            "Biologics"
        ],
        description: "Biopharmaceutical company manufacturing antiviral and biologic therapies for global markets.",
        founded: null,
        employees: ""
    },
    {
        id: 201,
        name: "Regeneron",
        twitter: "",
        twitterUrl: "",
        website: "https://www.regeneron.com",
        email: "",
        phone: "",
        location: {
            city: "Tarrytown",
            state: "New York",
            zip: ""
        },
        industry: "Pharmaceutical Manufacturing",
        products: [
            "Monoclonal antibodies",
            "Biologic therapeutics"
        ],
        description: "Biologics manufacturer with major capabilities in monoclonal antibody development and production.",
        founded: null,
        employees: ""
    },
    {
        id: 202,
        name: "Amgen",
        twitter: "",
        twitterUrl: "",
        website: "https://www.amgen.com",
        email: "",
        phone: "",
        location: {
            city: "Thousand Oaks",
            state: "California",
            zip: ""
        },
        industry: "Pharmaceutical Manufacturing",
        products: [
            "Biologics",
            "Biosimilars"
        ],
        description: "Biotechnology manufacturer producing biologic medicines and biosimilar therapies.",
        founded: null,
        employees: ""
    },
    {
        id: 203,
        name: "Lonza",
        twitter: "",
        twitterUrl: "",
        website: "https://www.lonza.com",
        email: "",
        phone: "",
        location: {
            city: "Portsmouth",
            state: "New Hampshire",
            zip: ""
        },
        industry: "Pharmaceutical Manufacturing",
        products: [
            "Biologics CDMO services",
            "Cell and gene therapy manufacturing"
        ],
        description: "Contract development and manufacturing provider supporting biologics and advanced therapy production.",
        founded: null,
        employees: ""
    },
    {
        id: 204,
        name: "Catalent",
        twitter: "",
        twitterUrl: "",
        website: "https://www.catalent.com",
        email: "",
        phone: "",
        location: {
            city: "Kansas City",
            state: "Missouri",
            zip: ""
        },
        industry: "Pharmaceutical Manufacturing",
        products: [
            "Oral solid dose manufacturing",
            "Biologics manufacturing",
            "Sterile fill services"
        ],
        description: "CDMO with multi-site U.S. operations providing oral, biologic, and sterile pharmaceutical manufacturing services.",
        founded: null,
        employees: ""
    },
    {
        id: 205,
        name: "Hyundai Metaplant America",
        twitter: "",
        twitterUrl: "",
        website: "https://www.hyundai.com/worldwide/en/company/hyundai-motor-group-metaplant-america",
        email: "",
        phone: "",
        location: {
            city: "Savannah",
            state: "Georgia",
            zip: ""
        },
        industry: "Robotics Assembly",
        products: [
            "EV assembly lines",
            "Robotic welding systems",
            "Robotic material handling"
        ],
        description: "Large-scale EV manufacturing complex with highly automated robotic welding and handling operations.",
        founded: null,
        employees: ""
    },
    {
        id: 206,
        name: "FANUC America",
        twitter: "",
        twitterUrl: "",
        website: "https://www.fanucamerica.com",
        email: "",
        phone: "",
        location: {
            city: "Rochester Hills",
            state: "Michigan",
            zip: ""
        },
        industry: "Robotics Assembly",
        products: [
            "Industrial robot manufacturing",
            "Robotic assembly cells",
            "Automation training systems"
        ],
        description: "Industrial robotics manufacturer with U.S. robot production, assembly demonstrations, and workforce training operations.",
        founded: null,
        employees: ""
    },
    {
        id: 207,
        name: "Ford BlueOval City",
        twitter: "",
        twitterUrl: "",
        website: "https://corporate.ford.com/operations/blueoval-city.html",
        email: "",
        phone: "",
        location: {
            city: "Stanton",
            state: "Tennessee",
            zip: ""
        },
        industry: "Robotics Assembly",
        products: [
            "EV truck assembly",
            "Robotic battery insertion",
            "Automated vehicle manufacturing"
        ],
        description: "Ford EV megasite built around high-density robotic assembly for electric vehicle production.",
        founded: null,
        employees: ""
    },
    {
        id: 208,
        name: "Rivian Manufacturing Plant",
        twitter: "",
        twitterUrl: "",
        website: "https://rivian.com",
        email: "",
        phone: "",
        location: {
            city: "Normal",
            state: "Illinois",
            zip: ""
        },
        industry: "Robotics Assembly",
        products: [
            "EV truck and SUV assembly",
            "Automated body and final assembly"
        ],
        description: "High-automation EV manufacturing plant producing electric trucks and SUVs with robotic assembly workflows.",
        founded: null,
        employees: ""
    },
    {
        id: 209,
        name: "Boston Dynamics (Hyundai)",
        twitter: "",
        twitterUrl: "",
        website: "https://www.bostondynamics.com",
        email: "",
        phone: "",
        location: {
            city: "Waltham",
            state: "Massachusetts",
            zip: ""
        },
        industry: "Robotics Assembly",
        products: [
            "Robot R&D and assembly",
            "Spot robots",
            "Stretch robots"
        ],
        description: "Advanced robotics developer combining R&D and assembly for next-generation mobile and industrial robots.",
        founded: null,
        employees: ""
    },
    {
        id: 210,
        name: "Standard Bots",
        twitter: "",
        twitterUrl: "",
        website: "https://standardbots.com",
        email: "",
        phone: "",
        location: {
            city: "New York",
            state: "New York",
            zip: ""
        },
        industry: "Robotics Assembly",
        products: [
            "AI cobots",
            "CNC tending robots",
            "Cobot assembly systems"
        ],
        description: "Robotics company producing AI-enabled cobots for rapid deployment in manufacturing assembly and tending tasks.",
        founded: null,
        employees: ""
    },
    {
        id: 211,
        name: "Machina Labs",
        twitter: "",
        twitterUrl: "",
        website: "https://machinalabs.ai",
        email: "",
        phone: "",
        location: {
            city: "Los Angeles",
            state: "California",
            zip: ""
        },
        industry: "Robotics Assembly",
        products: [
            "Robotic metal forming",
            "AI robotic assembly",
            "Aerospace part forming cells"
        ],
        description: "AI robotics company applying robotic forming and assembly methods to aerospace and industrial components.",
        founded: null,
        employees: ""
    },
    {
        id: 212,
        name: "Universal Robots USA",
        twitter: "",
        twitterUrl: "",
        website: "https://www.universal-robots.com",
        email: "",
        phone: "",
        location: {
            city: "Waltham",
            state: "Massachusetts",
            zip: ""
        },
        industry: "Robotics Assembly",
        products: [
            "Collaborative robots",
            "Cobot assembly applications"
        ],
        description: "Collaborative robotics supplier supporting U.S. assembly automation deployments across multiple industries.",
        founded: null,
        employees: ""
    },
    {
        id: 213,
        name: "Yaskawa Motoman",
        twitter: "",
        twitterUrl: "",
        website: "https://www.motoman.com",
        email: "",
        phone: "",
        location: {
            city: "Miamisburg",
            state: "Ohio",
            zip: ""
        },
        industry: "Robotics Assembly",
        products: [
            "Industrial robots",
            "Robotic assembly cells",
            "Factory automation systems"
        ],
        description: "Industrial robotics manufacturer with U.S. operations delivering assembly and automation robot platforms.",
        founded: null,
        employees: ""
    },
    {
        id: 214,
        name: "FARO",
        twitter: "",
        twitterUrl: "",
        website: "https://www.faro.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "CMM / Metrology",
        products: ["3D metrology systems", "Measurement systems"],
        description: "Supplier of 3D metrology and precision measurement systems for industrial inspection.",
        founded: null,
        employees: ""
    },
    {
        id: 215,
        name: "KLA Corporation",
        twitter: "",
        twitterUrl: "",
        website: "https://www.kla.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "CMM / Metrology",
        products: ["Metrology systems", "Inspection systems"],
        description: "Provider of process metrology and inspection systems for advanced manufacturing.",
        founded: null,
        employees: ""
    },
    {
        id: 216,
        name: "ATT Metrology Solutions",
        twitter: "",
        twitterUrl: "",
        website: "https://www.attinc.com/metrology",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "CMM / Metrology",
        products: ["Advanced metrology services"],
        description: "Metrology services firm focused on advanced dimensional measurement and inspection.",
        founded: null,
        employees: ""
    },
    {
        id: 217,
        name: "McCormick's Metrology",
        twitter: "",
        twitterUrl: "",
        website: "https://aegeusinspections.com/",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "CMM / Metrology",
        products: ["Precision measurement", "Quality assurance metrology"],
        description: "Precision measurement provider supporting quality assurance and metrology workflows.",
        founded: null,
        employees: ""
    },
    {
        id: 218,
        name: "Q-PLUS Labs",
        twitter: "",
        twitterUrl: "",
        website: "https://www.qpluslabs.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "CMM / Metrology",
        products: ["Dimensional measurement", "Inspection services"],
        description: "Inspection laboratory offering dimensional metrology and quality verification services.",
        founded: null,
        employees: ""
    },
    {
        id: 219,
        name: "Garber Metrology",
        twitter: "",
        twitterUrl: "",
        website: "https://garbermetrology.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "CMM / Metrology",
        products: ["Calibration services", "Metrology services"],
        description: "Calibration and metrology service provider supporting industrial measurement systems.",
        founded: null,
        employees: ""
    },
    {
        id: 220,
        name: "Pratt & Whitney Measurement Systems",
        twitter: "",
        twitterUrl: "",
        website: "https://qualitysupportgroup.com/",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "CMM / Metrology",
        products: ["Ultra-precision metrology products"],
        description: "Provider of ultra-precision metrology products for high-tolerance manufacturing.",
        founded: null,
        employees: ""
    },
    {
        id: 221,
        name: "MISTRAS Group",
        twitter: "",
        twitterUrl: "",
        website: "https://www.mistrasgroup.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Non-Destructive Testing",
        products: ["NDT equipment", "Inspection services"],
        description: "Non-destructive testing company providing equipment and field inspection services.",
        founded: null,
        employees: ""
    },
    {
        id: 222,
        name: "U.S. Inspection & NDT",
        twitter: "",
        twitterUrl: "",
        website: "https://productivityteam.com/",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Non-Destructive Testing",
        products: ["NDT services", "Visual testing"],
        description: "Inspection provider focused on non-destructive and visual testing services.",
        founded: null,
        employees: ""
    },
    {
        id: 223,
        name: "Acuren",
        twitter: "",
        twitterUrl: "",
        website: "https://www.acuren.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Non-Destructive Testing",
        products: ["NDT services", "Inspection services"],
        description: "Inspection services company with a broad portfolio of non-destructive testing capabilities.",
        founded: null,
        employees: ""
    },
    {
        id: 224,
        name: "Aegeus Inspection Solutions",
        twitter: "",
        twitterUrl: "",
        website: "https://www.americancleanrooms.com/",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Non-Destructive Testing",
        products: ["Technical assurance", "NDT services"],
        description: "Technical assurance and NDT provider supporting industrial asset integrity programs.",
        founded: null,
        employees: ""
    },
    {
        id: 225,
        name: "Applied Technical Services",
        twitter: "",
        twitterUrl: "",
        website: "https://www.atslab.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Non-Destructive Testing",
        products: ["Inspection services", "Testing services"],
        description: "Engineering and testing firm offering inspection and non-destructive test services.",
        founded: null,
        employees: ""
    },
    {
        id: 226,
        name: "KTA-Tator",
        twitter: "",
        twitterUrl: "",
        website: "https://kta.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Non-Destructive Testing",
        products: ["Inspection services", "NDT services"],
        description: "Inspection organization delivering NDT and related quality assurance services.",
        founded: null,
        employees: ""
    },
    {
        id: 227,
        name: "XNDT",
        twitter: "",
        twitterUrl: "",
        website: "https://xndt.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Non-Destructive Testing",
        products: ["NDT services"],
        description: "Service provider focused on non-destructive testing for industrial inspection needs.",
        founded: null,
        employees: ""
    },
    {
        id: 228,
        name: "Intertek",
        twitter: "",
        twitterUrl: "",
        website: "https://www.intertek.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "PPAP / Process Validation",
        products: ["PPAP solutions", "Validation services"],
        description: "Testing and assurance company offering PPAP and process validation support services.",
        founded: null,
        employees: ""
    },
    {
        id: 229,
        name: "QSG (Quality Support Group)",
        twitter: "",
        twitterUrl: "",
        website: "https://csitesting.com/",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "PPAP / Process Validation",
        products: ["PPAP consulting", "APQP support"],
        description: "Quality consulting group providing PPAP and APQP implementation support.",
        founded: null,
        employees: ""
    },
    {
        id: 230,
        name: "The Productivity Team",
        twitter: "",
        twitterUrl: "",
        website: "https://www.cleanroomcertification.com/",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "PPAP / Process Validation",
        products: ["PPAP consulting services"],
        description: "Consulting organization helping manufacturers execute PPAP validation requirements.",
        founded: null,
        employees: ""
    },
    {
        id: 231,
        name: "Pro QC International",
        twitter: "",
        twitterUrl: "",
        website: "https://www.proqc.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "PPAP / Process Validation",
        products: ["PPAP audits", "Supplier validation"],
        description: "Quality services firm offering PPAP audits and supplier process validation support.",
        founded: null,
        employees: ""
    },
    {
        id: 232,
        name: "RGBSI",
        twitter: "",
        twitterUrl: "",
        website: "https://www.rgbsi.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "PPAP / Process Validation",
        products: ["PPAP services"],
        description: "Engineering services provider with PPAP and process validation offerings.",
        founded: null,
        employees: ""
    },
    {
        id: 233,
        name: "VaLogic Bio",
        twitter: "",
        twitterUrl: "",
        website: "https://valogicbio.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Cleanroom Qualification",
        products: ["Cleanroom certification", "Cleanroom testing"],
        description: "Provider of cleanroom qualification, certification, and compliance testing services.",
        founded: null,
        employees: ""
    },
    {
        id: 234,
        name: "American Cleanroom Systems",
        twitter: "",
        twitterUrl: "",
        website: "https://www.ceproinc.com/",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Cleanroom Qualification",
        products: ["Cleanroom testing", "Cleanroom certification"],
        description: "Cleanroom services firm focused on testing and certification workflows.",
        founded: null,
        employees: ""
    },
    {
        id: 235,
        name: "CSI Testing",
        twitter: "",
        twitterUrl: "",
        website: "https://kpak.com/",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Cleanroom Qualification",
        products: ["Cleanroom compliance", "Cleanroom certification"],
        description: "Testing provider supporting cleanroom compliance and certification requirements.",
        founded: null,
        employees: ""
    },
    {
        id: 236,
        name: "Technical Safety Services",
        twitter: "",
        twitterUrl: "",
        website: "https://www.techsafety.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Cleanroom Qualification",
        products: ["Cleanroom testing", "Certification services"],
        description: "Technical services provider offering cleanroom testing and certification support.",
        founded: null,
        employees: ""
    },
    {
        id: 237,
        name: "Pace Analytical",
        twitter: "",
        twitterUrl: "",
        website: "https://www.paceanalytical.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Cleanroom Qualification",
        products: ["Cleanroom testing", "Certification services"],
        description: "Analytical services company providing cleanroom qualification and testing services.",
        founded: null,
        employees: ""
    },
    {
        id: 238,
        name: "C.E.R.T.S.",
        twitter: "",
        twitterUrl: "",
        website: "https://www.cleanroomcertification.com/",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Cleanroom Qualification",
        products: ["Cleanroom testing", "Cleanroom certification"],
        description: "Cleanroom qualification provider focused on testing and certification activities.",
        founded: null,
        employees: ""
    },
    {
        id: 239,
        name: "CEPro",
        twitter: "",
        twitterUrl: "",
        website: "https://www.ceproinc.com/",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Cleanroom Qualification",
        products: ["Laboratory certification", "Cleanroom certification"],
        description: "Certification provider for laboratories and cleanroom environments.",
        founded: null,
        employees: ""
    },
    {
        id: 240,
        name: "Tesla Energy",
        twitter: "",
        twitterUrl: "",
        website: "https://www.tesla.com/energy",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Grid-Scale Energy Storage",
        products: ["Megapack", "Utility-scale battery storage"],
        description: "Grid-scale storage provider delivering Megapack battery energy storage systems.",
        founded: null,
        employees: ""
    },
    {
        id: 241,
        name: "Fluence",
        twitter: "",
        twitterUrl: "",
        website: "https://fluenceenergy.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Grid-Scale Energy Storage",
        products: ["Grid-scale BESS integration"],
        description: "Battery energy storage integrator focused on utility-scale grid deployments.",
        founded: null,
        employees: ""
    },
    {
        id: 242,
        name: "Powin Energy",
        twitter: "",
        twitterUrl: "",
        website: "https://powin.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Grid-Scale Energy Storage",
        products: ["Modular utility-scale BESS"],
        description: "Energy storage company building modular utility-scale battery systems.",
        founded: null,
        employees: ""
    },
    {
        id: 243,
        name: "Form Energy",
        twitter: "",
        twitterUrl: "",
        website: "https://formenergy.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Grid-Scale Energy Storage",
        products: ["Long-duration iron-air storage"],
        description: "Developer of long-duration iron-air energy storage technology for grid applications.",
        founded: null,
        employees: ""
    },
    {
        id: 244,
        name: "Gridstor",
        twitter: "",
        twitterUrl: "",
        website: "https://gridstor.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Grid-Scale Energy Storage",
        products: ["Battery energy storage projects"],
        description: "Developer and operator of battery energy storage projects for grid services.",
        founded: null,
        employees: ""
    },
    {
        id: 245,
        name: "ESS Inc.",
        twitter: "",
        twitterUrl: "",
        website: "https://essinc.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Grid-Scale Energy Storage",
        products: ["Iron flow long-duration storage"],
        description: "Energy storage manufacturer focused on iron flow battery systems for long-duration use cases.",
        founded: null,
        employees: ""
    },
    {
        id: 246,
        name: "FlexGen",
        twitter: "",
        twitterUrl: "",
        website: "https://www.flexgen.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Grid-Scale Energy Storage",
        products: ["BESS integration software", "Grid services controls"],
        description: "Grid storage integration company combining BESS hardware and software controls.",
        founded: null,
        employees: ""
    },
    {
        id: 247,
        name: "UPS",
        twitter: "",
        twitterUrl: "",
        website: "https://www.ups.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Freight / Shipping",
        products: ["Freight shipping", "Parcel shipping"],
        description: "Logistics company providing parcel and freight transportation services.",
        founded: null,
        employees: ""
    },
    {
        id: 248,
        name: "FedEx",
        twitter: "",
        twitterUrl: "",
        website: "https://www.fedex.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Freight / Shipping",
        products: ["Freight services", "Air shipping", "Ground shipping"],
        description: "Global transportation network serving freight and parcel shipping markets.",
        founded: null,
        employees: ""
    },
    {
        id: 249,
        name: "XPO Logistics",
        twitter: "",
        twitterUrl: "",
        website: "https://www.xpo.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Freight / Shipping",
        products: ["LTL freight", "Truckload logistics"],
        description: "Freight transportation company with LTL and truckload logistics operations.",
        founded: null,
        employees: ""
    },
    {
        id: 250,
        name: "J.B. Hunt Transport",
        twitter: "",
        twitterUrl: "",
        website: "https://www.jbhunt.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Freight / Shipping",
        products: ["Intermodal freight", "Truckload shipping"],
        description: "Transportation provider focused on intermodal and truckload freight services.",
        founded: null,
        employees: ""
    },
    {
        id: 251,
        name: "Knight-Swift Transportation",
        twitter: "",
        twitterUrl: "",
        website: "https://knight-swift.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Freight / Shipping",
        products: ["Truckload freight", "LTL freight"],
        description: "Freight carrier operating truckload and LTL transportation networks.",
        founded: null,
        employees: ""
    },
    {
        id: 252,
        name: "Old Dominion Freight Line",
        twitter: "",
        twitterUrl: "",
        website: "https://www.odfl.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Freight / Shipping",
        products: ["LTL shipping services"],
        description: "LTL-focused freight carrier serving U.S. shipping corridors.",
        founded: null,
        employees: ""
    },
    {
        id: 253,
        name: "Schneider National",
        twitter: "",
        twitterUrl: "",
        website: "https://schneider.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Freight / Shipping",
        products: ["Truckload freight services"],
        description: "Transportation and logistics provider focused on truckload freight operations.",
        founded: null,
        employees: ""
    },
    {
        id: 254,
        name: "Lineage Logistics",
        twitter: "",
        twitterUrl: "",
        website: "https://www.onelineage.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Warehousing / Cold Chain",
        products: ["Refrigerated warehousing", "Cold chain logistics"],
        description: "Cold chain operator with large refrigerated warehousing and logistics networks.",
        founded: null,
        employees: ""
    },
    {
        id: 255,
        name: "Americold Logistics",
        twitter: "",
        twitterUrl: "",
        website: "https://www.americold.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Warehousing / Cold Chain",
        products: ["Temperature-controlled warehousing"],
        description: "Provider of temperature-controlled warehousing and cold chain logistics services.",
        founded: null,
        employees: ""
    },
    {
        id: 256,
        name: "United States Cold Storage",
        twitter: "",
        twitterUrl: "",
        website: "https://www.uscold.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Warehousing / Cold Chain",
        products: ["Cold storage", "Cold chain logistics"],
        description: "Cold storage operator offering warehousing and refrigerated distribution services.",
        founded: null,
        employees: ""
    },
    {
        id: 257,
        name: "Interstate Warehousing",
        twitter: "",
        twitterUrl: "",
        website: "https://interstatewarehousing.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Warehousing / Cold Chain",
        products: ["Refrigerated warehousing"],
        description: "Cold chain warehousing provider with refrigerated storage capabilities.",
        founded: null,
        employees: ""
    },
    {
        id: 258,
        name: "FreezPak Logistics",
        twitter: "",
        twitterUrl: "",
        website: "https://freezpak.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Warehousing / Cold Chain",
        products: ["Cold storage facilities"],
        description: "Cold storage logistics provider serving temperature-sensitive supply chains.",
        founded: null,
        employees: ""
    },
    {
        id: 259,
        name: "Burris Logistics",
        twitter: "",
        twitterUrl: "",
        website: "https://www.burrislogistics.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Warehousing / Cold Chain",
        products: ["Cold chain warehousing"],
        description: "Logistics company focused on refrigerated warehousing and cold chain operations.",
        founded: null,
        employees: ""
    },
    {
        id: 260,
        name: "Staci Americas",
        twitter: "",
        twitterUrl: "",
        website: "https://www.staci.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Packaging / Kitting",
        products: ["Custom packaging", "Kitting services"],
        description: "Logistics and fulfillment provider offering custom kitting and packaging operations.",
        founded: null,
        employees: ""
    },
    {
        id: 261,
        name: "KPAK",
        twitter: "",
        twitterUrl: "",
        website: "https://kpak.com/",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Packaging / Kitting",
        products: ["Product kitting services"],
        description: "Service provider specializing in product kitting and packaging support.",
        founded: null,
        employees: ""
    },
    {
        id: 262,
        name: "Red Stag Fulfillment",
        twitter: "",
        twitterUrl: "",
        website: "https://redstagfulfillment.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Packaging / Kitting",
        products: ["3PL kitting", "Assembly and fulfillment"],
        description: "Fulfillment provider offering kitting, assembly, and packaging operations.",
        founded: null,
        employees: ""
    },
    {
        id: 263,
        name: "ShipBob",
        twitter: "",
        twitterUrl: "",
        website: "https://www.shipbob.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Packaging / Kitting",
        products: ["Kitting", "Bundling", "E-commerce fulfillment"],
        description: "E-commerce logistics platform with kitting and bundling capabilities.",
        founded: null,
        employees: ""
    },
    {
        id: 264,
        name: "SpeedCommerce",
        twitter: "",
        twitterUrl: "",
        website: "https://www.speedcommerce.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Packaging / Kitting",
        products: ["Kitting", "Assembly", "Packaging services"],
        description: "Commerce operations provider delivering kitting, assembly, and packaging services.",
        founded: null,
        employees: ""
    },
    {
        id: 265,
        name: "Industrial Packaging",
        twitter: "",
        twitterUrl: "",
        website: "https://www.industrialpackaging.com",
        email: "",
        phone: "",
        location: { city: "", state: "", zip: "" },
        industry: "Packaging / Kitting",
        products: ["Contract packaging", "Kitting services"],
        description: "Contract packaging firm offering custom packaging and kitting support.",
        founded: null,
        employees: ""
    },
    {
        id: 266,
        name: "Kyten Technologies",
        twitter: "",
        twitterUrl: "",
        website: "https://kytentech.com",
        email: "",
        phone: "",
        location: { city: "Seattle", state: "Washington", zip: "" },
        industry: "Battery Pack Assembly",
        products: ["Aerospace-grade battery packs", "Custom battery pack design", "Battery pack qualification", "Battery pack production"],
        description: "YC-backed U.S. manufacturer building custom aerospace-grade battery packs for drones, submarines, and satellites with rapid design, qualification, and production workflows.",
        founded: 2026,
        employees: "1-10"
    },
    {
        id: 267,
        name: "Duranium",
        twitter: "",
        twitterUrl: "",
        website: "https://www.duranium.co/",
        email: "",
        phone: "",
        location: { city: "Alameda", state: "California", zip: "" },
        industry: "Metal Manufacturing",
        products: ["Magnesium", "Titanium", "Aluminum", "Zirconium", "Hafnium"],
        description: "YC-backed U.S. producer modernizing carbochlorination to reshore critical metal production including magnesium, titanium, aluminum, zirconium, and hafnium.",
        founded: 2025,
        employees: "1-10"
    },
    {
        id: 268,
        name: "Forge Robotics",
        twitter: "",
        twitterUrl: "",
        website: "https://forge-robotics.com",
        email: "",
        phone: "",
        location: { city: "San Francisco", state: "California", zip: "" },
        industry: "Welding / Brazing",
        products: ["Autonomous welding systems", "Robotic metal fabrication", "Vision-guided weld seam mapping"],
        description: "YC-backed robotics company building autonomous welding systems that turn raw metal stock into fully welded parts through vision-guided metal fabrication.",
        founded: 2025,
        employees: "1-10"
    },
    {
        id: 269,
        name: "Allus AI",
        twitter: "",
        twitterUrl: "",
        website: "https://allus.ai",
        email: "",
        phone: "",
        location: { city: "Atlanta", state: "Georgia", zip: "" },
        industry: "Manufacturing Automation",
        products: ["Factory vision models", "Defect detection", "Process monitoring", "Manufacturing computer vision"],
        description: "YC-backed manufacturing AI company deploying vision foundation models that help factories detect defects, monitor process compliance, and improve production in real time.",
        founded: 2025,
        employees: "1-10"
    },
    {
        id: 270,
        name: "F4",
        twitter: "",
        twitterUrl: "",
        website: "https://www.f4.dev",
        email: "",
        phone: "",
        location: { city: "San Francisco", state: "California", zip: "" },
        industry: "Manufacturing Software",
        products: ["Drawing compliance checks", "GD&T interpretation", "Inspection plans", "Tolerance analysis"],
        description: "YC-backed software platform for hardware teams that automates engineering drawing compliance checks, GD&T interpretation, inspection planning, and tolerance analysis.",
        founded: 2025,
        employees: "1-10"
    },
    {
        id: 271,
        name: "Oklo",
        twitter: "",
        twitterUrl: "",
        website: "http://oklo.com",
        email: "",
        phone: "",
        location: { city: "Santa Clara", state: "California", zip: "" },
        industry: "Nuclear Fuel Fabrication",
        products: ["Advanced fission power plants", "Fuel fabrication", "Fuel recycling technologies"],
        description: "YC-backed nuclear company developing advanced fission power plants, prototypic fuel fabrication, and fuel recycling technologies in the United States.",
        founded: 2013,
        employees: "50-100"
    },
    {
        id: 272,
        name: "Tensr",
        twitter: "",
        twitterUrl: "",
        website: "https://www.tensr.co",
        email: "",
        phone: "",
        location: { city: "San Francisco", state: "California", zip: "" },
        industry: "Manufacturing Automation",
        products: ["Autonomous factory systems", "Robotic manufacturing cells", "Automated CNC workflows", "Automated assembly"],
        description: "YC-backed industrial startup building fully autonomous robotic factories for CNC, assembly, packaging, and rapid-turn hardware production.",
        founded: 2025,
        employees: "1-10"
    },
    {
        id: 30994,
        name: "InventWood",
        twitter: "",
        twitterUrl: "",
        website: "https://www.inventwood.com",
        email: "",
        phone: "",
        location: {
            city: "Frederick",
            state: "Maryland",
            zip: "21703"
        },
        industry: "Densified Wood Materials",
        products: [
            "SUPERWOOD",
            "Premium cladding",
            "Decking",
            "Structural components (mullions, louvers, beams, columns, trusses)"
        ],
        description: "InventWood makes SUPERWOOD, a densified wood material with up to 10x the strength-to-weight ratio of steel. SUPERWOOD is fire-, moisture-, and termite-resistant, and it sequesters carbon. Can replace steel and aluminum across construction, defense, and transportation, strengthening domestic manufacturing and supply-chain resilience.",
        employees: "10-50"
    },
    {
            "id": 30995,
            "name": "Diversified Plastics Industries",
            "twitter": "",
            "twitterUrl": "https://divplastics.com/",
            "website": "https://divplastics.com/",
            "email": "businessoffice@divplastics.com",
            "phone": "918-245-0770",
            "location": {
                    "city": "Sand Springs",
                    "state": "Oklahoma",
                    "zip": ""
            },
            "industry": "Manufacturing",
            "products": [
                    "Vacuum Molding Plastic"
            ],
            "description": "We vacuum mold. Big or small. American plastic molded by Americans.",
            "founded": 1985,
            "employees": "10",
            "source": "Community submission",
            "sourceUrl": "https://divplastics.com/"
    },
    // Add your X.com manufacturer profiles here following this format
];

const ycManufacturingRoboticsCompanies = [
    {"id": 30991, "name": "Forge Robotics", "twitter": "", "twitterUrl": "", "website": "https://forge-robotics.com", "email": "", "phone": "", "location": {"city": "San Francisco", "state": "California", "zip": ""}, "industry": "Welding / Brazing", "products": ["Robotic welding for metal fabrication"], "description": "YC-backed robotics company focused on welding and metal fabrication workflows.", "founded": null, "employees": "1", "ycCompany": true, "ycBatch": "Fall 2025"},
    {"id": 30895, "name": "Allus AI", "twitter": "", "twitterUrl": "", "website": "https://allus.ai", "email": "", "phone": "", "location": {"city": "Atlanta", "state": "Georgia", "zip": ""}, "industry": "Manufacturing Automation", "products": ["Manufacturing vision systems", "Factory inspection automation"], "description": "YC-backed manufacturing vision company building automation tools for factory operations.", "founded": null, "employees": "3", "ycCompany": true, "ycBatch": "Fall 2025"},
    {"id": 30904, "name": "Tensr", "twitter": "", "twitterUrl": "", "website": "https://tensr.com/", "email": "", "phone": "", "location": {"city": "San Francisco", "state": "California", "zip": ""}, "industry": "Manufacturing Automation", "products": ["Autonomous robotic factories", "Automated manufacturing cells"], "description": "YC-backed startup building autonomous robotic factory systems.", "founded": null, "employees": "3", "ycCompany": true, "ycBatch": "Fall 2025"},
    {"id": 30818, "name": "Nox Metals", "twitter": "", "twitterUrl": "", "website": "https://noxmetals.co/", "email": "", "phone": "", "location": {"city": "Detroit", "state": "Michigan", "zip": ""}, "industry": "Metal Manufacturing", "products": ["Industrial metal supply"], "description": "YC-backed company supplying industrial metals for the domestic manufacturing base.", "founded": null, "employees": "11", "ycCompany": true, "ycBatch": "Summer 2025"},
    {"id": 30781, "name": "Duranium", "twitter": "", "twitterUrl": "", "website": "https://www.duranium.co/", "email": "", "phone": "", "location": {"city": "Alameda", "state": "California", "zip": ""}, "industry": "Metal Manufacturing", "products": ["Critical metals production"], "description": "YC-backed company reshoring critical metal production in the United States.", "founded": null, "employees": "4", "ycCompany": true, "ycBatch": "Summer 2025"},
    {"id": 29804, "name": "Inversion Semiconductor", "twitter": "", "twitterUrl": "", "website": "https://www.inversionsemi.com/", "email": "", "phone": "", "location": {"city": "San Francisco", "state": "California", "zip": ""}, "industry": "Semiconductor Fab", "products": ["Chip manufacturing"], "description": "YC-backed semiconductor company focused on faster chip manufacturing.", "founded": null, "employees": "6", "ycCompany": true, "ycBatch": "Winter 2025"},
    {"id": 17878, "name": "Industrial Next", "twitter": "", "twitterUrl": "", "website": "https://industrialnext.ai", "email": "", "phone": "", "location": {"city": "San Francisco", "state": "California", "zip": ""}, "industry": "Manufacturing Automation", "products": ["Autonomous factory automation"], "description": "YC-backed industrial automation company focused on autonomous manufacturing systems.", "founded": null, "employees": "3", "ycCompany": true, "ycBatch": "Winter 2022"},
    {"id": 14554, "name": "RMFG", "twitter": "", "twitterUrl": "", "website": "https://www.rmfgen.com/", "email": "", "phone": "", "location": {"city": "Fort Worth", "state": "Texas", "zip": ""}, "industry": "Digital Manufacturing", "products": ["Contract manufacturing"], "description": "YC-backed contract manufacturer serving fast-moving hardware companies.", "founded": null, "employees": "25", "ycCompany": true, "ycBatch": "Summer 2021"},
    {"id": 6832, "name": "JITX", "twitter": "", "twitterUrl": "", "website": "https://jitx.com", "email": "", "phone": "", "location": {"city": "Berkeley", "state": "California", "zip": ""}, "industry": "Electronics", "products": ["PCB design automation"], "description": "YC-backed electronics company automating circuit board design.", "founded": null, "employees": "12", "ycCompany": true, "ycBatch": "Summer 2018"},
    {"id": 1690, "name": "Overview", "twitter": "", "twitterUrl": "", "website": "https://overview.ai", "email": "", "phone": "", "location": {"city": "San Francisco", "state": "California", "zip": ""}, "industry": "Manufacturing Software", "products": ["Industrial quality inspection software"], "description": "YC-backed software company for industrial quality inspection and defect detection.", "founded": null, "employees": "60", "ycCompany": true, "ycBatch": "Winter 2019"},
    {"id": 447, "name": "Octopart", "twitter": "", "twitterUrl": "", "website": "http://octopart.com", "email": "", "phone": "", "location": {"city": "New York", "state": "New York", "zip": ""}, "industry": "Electronics", "products": ["Electronic component search"], "description": "YC-backed search platform for electronic components and parts sourcing.", "founded": null, "employees": "11", "ycCompany": true, "ycBatch": "Winter 2007"},
    {"id": 1537, "name": "Rain Neuromorphics", "twitter": "", "twitterUrl": "", "website": "https://rain.ai", "email": "", "phone": "", "location": {"city": "Redwood City", "state": "California", "zip": ""}, "industry": "Semiconductor Fab", "products": ["AI processors"], "description": "YC-backed semiconductor company building neuromorphic AI processors.", "founded": null, "employees": "57", "ycCompany": true, "ycBatch": "Summer 2018"},
    {"id": 810, "name": "Reduced Energy Microsystems", "twitter": "", "twitterUrl": "", "website": "http://www.reducedenergymicrosystems.com", "email": "", "phone": "", "location": {"city": "San Francisco", "state": "California", "zip": ""}, "industry": "Semiconductor Fab", "products": ["Low-power silicon"], "description": "YC-backed semiconductor company building low-power silicon for embedded AI.", "founded": null, "employees": "11", "ycCompany": true, "ycBatch": "Summer 2015"},
    {"id": 601, "name": "MadeSolid", "twitter": "", "twitterUrl": "", "website": "http://madesolid.com", "email": "", "phone": "", "location": {"city": "Emeryville", "state": "California", "zip": ""}, "industry": "3D Printing Materials", "products": ["Functional 3D printing materials"], "description": "YC-backed materials company focused on functional materials for 3D printing.", "founded": null, "employees": "2", "ycCompany": true, "ycBatch": "Winter 2014"},
    {"id": 1538, "name": "Voodoo Manufacturing", "twitter": "", "twitterUrl": "", "website": "http://www.voodoomfg.com", "email": "", "phone": "", "location": {"city": "New York", "state": "New York", "zip": ""}, "industry": "Digital Manufacturing", "products": ["On-demand manufacturing"], "description": "YC-backed digital manufacturer offering on-demand production capacity.", "founded": null, "employees": "19", "ycCompany": true, "ycBatch": "Winter 2017"},
    {"id": 13214, "name": "Pashi", "twitter": "", "twitterUrl": "", "website": "https://pashi.com", "email": "", "phone": "", "location": {"city": "San Francisco", "state": "California", "zip": ""}, "industry": "Manufacturing Software", "products": ["Production line software"], "description": "YC-backed software company for operating and optimizing production lines.", "founded": null, "employees": "3", "ycCompany": true, "ycBatch": "Winter 2020"},
    {"id": 12865, "name": "Blockstamp", "twitter": "", "twitterUrl": "", "website": "https://www.blockstampsf.com/", "email": "", "phone": "", "location": {"city": "Los Angeles", "state": "California", "zip": ""}, "industry": "Manufacturing Software", "products": ["Industrial asset management software"], "description": "YC-backed software for industrial equipment and asset management.", "founded": null, "employees": "2", "ycCompany": true, "ycBatch": "Summer 2019"},
    {"id": 30992, "name": "Flexport", "twitter": "@flexport", "twitterUrl": "https://x.com/flexport", "website": "https://www.flexport.com", "email": "", "phone": "", "location": {"city": "San Francisco", "state": "California", "zip": "94104"}, "industry": "Freight / Shipping", "products": ["Ocean freight", "Air freight", "Trucking", "Supply chain management"], "description": "Technology-driven freight forwarder offering ocean, air, and trucking services with real-time supply chain visibility.", "founded": 2013, "employees": "3000+"},
    {"id": 30993, "name": "Flexport", "twitter": "@flexport", "twitterUrl": "https://x.com/flexport", "website": "https://www.flexport.com", "email": "", "phone": "", "location": {"city": "San Francisco", "state": "California", "zip": "94104"}, "industry": "Warehousing / Cold Chain", "products": ["Warehousing", "Fulfillment", "Distribution", "Inventory management"], "description": "Technology-driven logistics platform providing warehousing, fulfillment, and distribution services across the United States.", "founded": 2013, "employees": "3000+"}
];

const manufacturersByName = new Map(manufacturers.map(manufacturer => [
    manufacturer.name.toLowerCase(),
    manufacturer
]));

ycManufacturingRoboticsCompanies.forEach(company => {
    const key = company.name.toLowerCase();
    const existing = manufacturersByName.get(key);

    if (existing) {
        manufacturersByName.set(key, {
            ...existing,
            ...company,
            products: company.products && company.products.length ? company.products : existing.products,
            description: company.description || existing.description,
            website: company.website || existing.website,
            location: company.location.city && company.location.state ? company.location : existing.location
        });
        return;
    }

    manufacturersByName.set(key, company);
});

manufacturers.length = 0;
manufacturers.push(...manufacturersByName.values());

// Extract unique states and industries for filters
function getUniqueStates() {
    return [...new Set(manufacturers.map(m => m.location.state))].sort();
}

function getUniqueIndustries() {
    return [...new Set(manufacturers.map(m => m.industry))].sort();
}
