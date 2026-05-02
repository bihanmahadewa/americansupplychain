// Public-field imports from NAATBatt battery database, filtered to existing site categories only.
(function () {
    const naatbattManufacturers = [
    {
        "id": 3034,
        "name": "ACP Technologies",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://acp-technologies.net/",
        "email": "",
        "phone": "586-359-6124",
        "location": {
            "city": "St Clair Shores",
            "state": "Michigan",
            "zip": "48080"
        },
        "industry": "Anode Materials",
        "products": [
            "Synthetic graphite"
        ],
        "description": "ACP Technologies focuses on developing domestic sources of affordable, carbon-based materials used in producing strategic materials such as carbon fiber, synthetic graphite, and carbon-carbon composites.",
        "founded": null,
        "employees": "20"
    },
    {
        "id": 3035,
        "name": "Advanced Carbon Products",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://advcarpro.com/",
        "email": "",
        "phone": "346-259-2927",
        "location": {
            "city": "Hitchins",
            "state": "Kentucky",
            "zip": "41146"
        },
        "industry": "Anode Materials",
        "products": [
            "Carbon-based materials"
        ],
        "description": "Advanced Carbon Products, LLC specializes in developing carbon product technologies that convert low-value oils into high-value products, with the goal to reduce costs and provide cost-effective processes.",
        "founded": null,
        "employees": "30"
    },
    {
        "id": 3036,
        "name": "Advano",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.advano.io/",
        "email": "",
        "phone": "415-634-9866",
        "location": {
            "city": "New Orleans",
            "state": "Louisiana",
            "zip": "70122"
        },
        "industry": "Anode Materials",
        "products": [
            "Silicon"
        ],
        "description": "Advano utilizes silicon in place of graphite to improve the battery performance for electric vehicles, consumer electronics, and energy storage systems.",
        "founded": null,
        "employees": "30"
    },
    {
        "id": 3037,
        "name": "Alabama Graphite Products LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://westwaterresources.net/",
        "email": "",
        "phone": "256-596-6065",
        "location": {
            "city": "Kelllyton",
            "state": "Alabama",
            "zip": "35089"
        },
        "industry": "Anode Materials",
        "products": [
            "Natural graphite - battery grade"
        ],
        "description": "Alabama Graphite, a subsidiary of Westwater, is focused on developing an advanced graphite processing plant in the state of Alabama to serve the green energy storage sector.",
        "founded": null,
        "employees": "30"
    },
    {
        "id": 3039,
        "name": "Alkegen",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.alkegen.com/",
        "email": "",
        "phone": "574-654-7201",
        "location": {
            "city": "New Carlisle",
            "state": "Indiana",
            "zip": "46552"
        },
        "industry": "Anode Materials",
        "products": [
            "Silicon composites"
        ],
        "description": "Alkegen offers filtration and catalysis technology, step-change battery innovation, thermal management, and construction and fire protection to manufacturing facilities. Its specialized materials assist with sustainability and cost-reduction.",
        "founded": null,
        "employees": "200 (Planned)"
    },
    {
        "id": 3040,
        "name": "Allied Graphite",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://alliedgraphite.com/our-operations/",
        "email": "",
        "phone": "480-590-6925",
        "location": {
            "city": "Mesa",
            "state": "Arizona",
            "zip": "85215"
        },
        "industry": "Anode Materials",
        "products": [
            "Coated Spherical graphite"
        ],
        "description": "Allied Graphite develops high-purity, coated spherical purified graphite anode materials. The company utilizes a proprietary, chemical-based purification process that avoids the use of hydrofluoric acid to produce battery-grade materials from natural flake graphite.",
        "founded": null,
        "employees": "65"
    },
    {
        "id": 3110,
        "name": "American Energy Technologies Company",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.usaenergytech.com/",
        "email": "",
        "phone": "847-404-5636",
        "location": {
            "city": "Wheeling",
            "state": "Illinois",
            "zip": "60090"
        },
        "industry": "Anode Materials",
        "products": [
            "Graphite powders"
        ],
        "description": "AETC is a small business specializing in advanced carbon and graphite materials. It provides a full vertical from raw material purification and spheronization to battery cell prototyping and forensic analysis.",
        "founded": null,
        "employees": "19"
    },
    {
        "id": 3041,
        "name": "Amprius",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://amprius.com/",
        "email": "",
        "phone": "800-425-8803",
        "location": {
            "city": "Fremont",
            "state": "California",
            "zip": "94538"
        },
        "industry": "Anode Materials",
        "products": [
            "Silicon"
        ],
        "description": "Amprius makes batteries with up to 100% higher energy density than standard lithium-ion batteries. The high storage capabilities they provide can enable new applications and accelerate markets.",
        "founded": null,
        "employees": "50"
    },
    {
        "id": 3042,
        "name": "Amsted Graphite Materials",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.amstedgraphite.com/",
        "email": "",
        "phone": "304-624-1200",
        "location": {
            "city": "Anmoore",
            "state": "West Virginia",
            "zip": "26323"
        },
        "industry": "Anode Materials",
        "products": [
            "Natural graphite - battery grade"
        ],
        "description": "Amsted Graphite develops innovative graphite material solutions for multiple industries. Its products offer high strength, low thermal expansion, and superior conductivity.",
        "founded": null,
        "employees": "140"
    },
    {
        "id": 3043,
        "name": "Anovion",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.anovion-anode.com/",
        "email": "",
        "phone": "716-731-3221",
        "location": {
            "city": "Sanborn",
            "state": "New York",
            "zip": "14132"
        },
        "industry": "Anode Materials",
        "products": [
            "Synthetic graphite"
        ],
        "description": "Anovion Technologies is a U.S-owned and based advanced materials business and commercial-scale manufacturer of premium, anode-grade, synthetic graphite.",
        "founded": null,
        "employees": "30"
    },
    {
        "id": 3044,
        "name": "Applied Materials",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.appliedmaterials.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Santa Clara",
            "state": "California",
            "zip": "95054"
        },
        "industry": "Anode Materials",
        "products": [],
        "description": "Applied Materials is a semiconductor and display equipment company. It improves the power, performance, area, cost and time-to-market of semiconductor devices, innovating the use of AI and other technology inflections.",
        "founded": null,
        "employees": "80"
    },
    {
        "id": 3045,
        "name": "Arcadium Lithium",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://arcadiumlithium.com/projects/",
        "email": "",
        "phone": "704-868-5400",
        "location": {
            "city": "Bessemer City",
            "state": "North Carolina",
            "zip": "28016"
        },
        "industry": "Anode Materials",
        "products": [
            "Lithium metal"
        ],
        "description": "Arcadium Lithium (2024 merger of Alkem and Livent) delivers sustainable lithium products globally, from resources in Argentina and Australia and conversion assets in the U.S., Asia, and the U.K.",
        "founded": null,
        "employees": "112"
    },
    {
        "id": 3051,
        "name": "Birla Carbon",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.birlacarbon.com/",
        "email": "",
        "phone": "337-836-5641",
        "location": {
            "city": "Centerville",
            "state": "Louisiana",
            "zip": "70522"
        },
        "industry": "Anode Materials",
        "products": [
            "Synthetic graphite"
        ],
        "description": "Birla Carbon is one of the largest manufacturers and suppliers of high-quality carbon black additives globally. Its manufacturing makes products stronger, lighter, and longer lasting.",
        "founded": null,
        "employees": "150 (Planned)"
    },
    {
        "id": 3054,
        "name": "Cabot Corporation",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.cabotcorp.com/",
        "email": "",
        "phone": "806-661-3100",
        "location": {
            "city": "Cabot Pampa",
            "state": "Texas",
            "zip": "79065"
        },
        "industry": "Anode Materials",
        "products": [
            "Carbon nanotubes",
            "carbon nanostructures",
            "conductive carbon",
            "dispersions"
        ],
        "description": "Cabot Corporation is a specialty chemicals and performance materials company, providing conductive additives, fumed metal oxides for battery component stability, and aerogel to mitigate thermal runaway.",
        "founded": null,
        "employees": "50"
    },
    {
        "id": 3055,
        "name": "Conovate Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.conovateinc.com/",
        "email": "",
        "phone": "414-67-5995",
        "location": {
            "city": "Milwaukee",
            "state": "Wisconsin",
            "zip": "53211"
        },
        "industry": "Anode Materials",
        "products": [],
        "description": "Conovate produces an advanced carbon-based nanomaterial, the world's only form of solid carbon monoxide. Benefits for the lithium-ion battery industry include sustainability, bio-renewable feedstock, and a secure supply chain.",
        "founded": null,
        "employees": "2"
    },
    {
        "id": 3058,
        "name": "Enevate",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.enevate.com/",
        "email": "",
        "phone": "949-243-0399",
        "location": {
            "city": "Irvine",
            "state": "California",
            "zip": "92617"
        },
        "industry": "Anode Materials",
        "products": [
            "Silicon composites"
        ],
        "description": "Enevate produces lithium-ion battery technologies that result in a vehicle charging time 10x faster than conventional EV batteries.",
        "founded": null,
        "employees": "73"
    },
    {
        "id": 3059,
        "name": "Epsilon Advanced Materials (EAM)",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.epsilonam.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Wilmington",
            "state": "North Carolina",
            "zip": ""
        },
        "industry": "Anode Materials",
        "products": [
            "Synthetic graphite"
        ],
        "description": "Epsilon Advanced Materials leads globally in creating high-quality battery materials from waste, reducing fuel consumption and supporting cleaner technologies, all reflecting its strong commitment to sustainability in the energy industry.",
        "founded": null,
        "employees": "500 (Planned)"
    },
    {
        "id": 3061,
        "name": "Farad Power Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.huntenergy.com/",
        "email": "",
        "phone": "408-472-3696",
        "location": {
            "city": "Sunnyvale",
            "state": "California",
            "zip": "94085"
        },
        "industry": "Anode Materials",
        "products": [
            "Synthetic graphite"
        ],
        "description": "Farad Power transforms agricultural waste into sustainable graphite for lithium-ion batteries, using biomass-derived chemicals in an eco-friendly process that supports an American supply chain.",
        "founded": null,
        "employees": "2"
    },
    {
        "id": 3063,
        "name": "Gotion",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.gotion.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Big Rapids",
            "state": "Michigan",
            "zip": ""
        },
        "industry": "Anode Materials",
        "products": [
            "LFP Anode"
        ],
        "description": "Based in the Silicon Valley, Gotion is an energy solutions company that aims to innovate and create the next generation of battery materials and technologies.",
        "founded": null,
        "employees": "588 (Planned)"
    },
    {
        "id": 3064,
        "name": "Graphex Technologies LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.graphexgroup.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Warren",
            "state": "Michigan",
            "zip": ""
        },
        "industry": "Anode Materials",
        "products": [
            "Spherical graphite"
        ],
        "description": "Graphex Group is a volume producer of spherical graphite for Li-ion battery anodes and provides professional services to the renewable energy sector.",
        "founded": null,
        "employees": "125 (Planned)"
    },
    {
        "id": 3065,
        "name": "Group14 Technologies",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.group14.technology/",
        "email": "",
        "phone": "206-385-0385",
        "location": {
            "city": "Moses Lake",
            "state": "Washington",
            "zip": "98072"
        },
        "industry": "Anode Materials",
        "products": [
            "Silicon composites"
        ],
        "description": "Group14 develops advanced silicon anode battery materials through a scalable modular manufacturing process that provides high energy density and cycle life sustainability.",
        "founded": null,
        "employees": "200"
    },
    {
        "id": 3066,
        "name": "Hycamite TCD Technologies Ltd",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://hycamite.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "",
            "state": "",
            "zip": ""
        },
        "industry": "Anode Materials",
        "products": [
            "Synthetic Graphite"
        ],
        "description": "Hycamite is decarbonizing the industry using its proprietary methane pyrolysis technology. It provides low-carbon hydrogen and sustainable carbon products including a precursor for graphite, which can be used as LIB anodes.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3012,
        "name": "Ionic Mineral Technologies",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://ionicmt.com/",
        "email": "",
        "phone": "385-241-2320",
        "location": {
            "city": "Provo",
            "state": "Utah",
            "zip": "84601"
        },
        "industry": "Anode Materials",
        "products": [
            "Nano-silicon"
        ],
        "description": "Ionic Mineral Technologies is a vertically-integrated company supplying naturally derived, drop-in anode materials using a patented technology. Ionic Mineral Technologies owns the highest purity deposit of nano-structured clay.",
        "founded": null,
        "employees": "11"
    },
    {
        "id": 3073,
        "name": "Libama LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.libamapower.com/",
        "email": "",
        "phone": "931-526-9591",
        "location": {
            "city": "Cookeville",
            "state": "Tennessee",
            "zip": "38501"
        },
        "industry": "Anode Materials",
        "products": [],
        "description": "Libama uses Advanced Metal Anode technology to enable the dramatic improvement of lithium batteries. The technology improves power, cost, safety, charge, and flexibility.",
        "founded": null,
        "employees": "2"
    },
    {
        "id": 3076,
        "name": "MIL Moses Lake Industries",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://mlindustries.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Moses Lake",
            "state": "Washington",
            "zip": "98837"
        },
        "industry": "Anode Materials",
        "products": [
            "Silane"
        ],
        "description": "Since 1984, Moses Lake Industries has been a top global supplier of high-performance chemicals for the semiconductor and flat panel industries.",
        "founded": null,
        "employees": "500"
    },
    {
        "id": 3077,
        "name": "MilliporeSigma",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.sigmaaldrich.com/",
        "email": "",
        "phone": "800-325-3010",
        "location": {
            "city": "Milwaukee",
            "state": "Wisconsin",
            "zip": "53209"
        },
        "industry": "Anode Materials",
        "products": [
            "Lithium Titanate (LTO)"
        ],
        "description": "MilliporeSigma provides high-purity materials for innovative energy storage, supporting battery R&D and production with reliable, quality-driven products from a global supply chain.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3080,
        "name": "NanoGraf Corporation",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.nanograf.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Flint",
            "state": "Michigan",
            "zip": "48505"
        },
        "industry": "Anode Materials",
        "products": [
            "Silicon anode"
        ],
        "description": "NanoGraf has developed a novel high-energy density silicon-based anode material that has long-term potential to replace graphite-based anodes in lithium-ion batteries.",
        "founded": null,
        "employees": "150 (Planned)"
    },
    {
        "id": 3081,
        "name": "Nanotech Energy",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.nanotechenergy.com/",
        "email": "",
        "phone": "800-995-5491",
        "location": {
            "city": "Los Angeles",
            "state": "California",
            "zip": "90025"
        },
        "industry": "Anode Materials",
        "products": [
            "Synthetic graphite"
        ],
        "description": "Nanotech Energy develops next-gen super materials, including graphene-powered batteries that serve as a non-flammable, inexpensive, and stable electrolyte.",
        "founded": null,
        "employees": "97"
    },
    {
        "id": 3083,
        "name": "NEI Corp",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.neicorporation.com/",
        "email": "",
        "phone": "732-868-3141",
        "location": {
            "city": "Somerset",
            "state": "New Jersey",
            "zip": "08873"
        },
        "industry": "Anode Materials",
        "products": [
            "Natural graphite"
        ],
        "description": "NEI Corporation is a nanotechnology-focused materials company that develops and manufactures advanced cathode, anode, electrolyte, and protective coating solutions. It serves the lithium-ion and sodium-ion battery markets with both standard commercial powders and custom-synthesized materials.",
        "founded": null,
        "employees": "30"
    },
    {
        "id": 3085,
        "name": "Novonix",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.novonixgroup.com/",
        "email": "",
        "phone": "423-541-5541",
        "location": {
            "city": "Chattanooga",
            "state": "Tennessee",
            "zip": "37408"
        },
        "industry": "Anode Materials",
        "products": [
            "Synthetic graphite"
        ],
        "description": "Novonix provides advanced, high-performance materials, equipment, and services for the lithium-ion battery industry, with operations in the United States and Canada.",
        "founded": null,
        "employees": "200"
    },
    {
        "id": 3086,
        "name": "Novonix Anode Materials LLC (NAM)",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.novonixgroup.com/",
        "email": "",
        "phone": "423-541-5541",
        "location": {
            "city": "Chattanooga",
            "state": "Tennessee",
            "zip": "37419"
        },
        "industry": "Anode Materials",
        "products": [
            "Synthetic graphite"
        ],
        "description": "Novonix Anode Materials is a domestic supplier of battery-grade synthetic graphite focused on large-scale and sustainable production, using proprietary graphite process technology and R&D capabilities.",
        "founded": null,
        "employees": "1000 (Planned)"
    },
    {
        "id": 3088,
        "name": "Pacific Industrial Development Corp",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.pidc.com/",
        "email": "",
        "phone": "734-930-9292",
        "location": {
            "city": "Adamstown",
            "state": "Maryland",
            "zip": "21710"
        },
        "industry": "Anode Materials",
        "products": [
            "LTO",
            "TNO",
            "HF Removal Additives",
            "Separator Coatings"
        ],
        "description": "PIDC is a global advanced materials manufacturer specializing in high-purity inorganic chemicals.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3089,
        "name": "Paraclete Energy, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.paracleteenergy.com/",
        "email": "",
        "phone": "734-288-4120",
        "location": {
            "city": "Chelsea",
            "state": "Michigan",
            "zip": "48118"
        },
        "industry": "Anode Materials",
        "products": [
            "Silicon"
        ],
        "description": "Paraclete Energy Inc. manufactures high-capacity, cycle-stable silicon for the lithium-ion battery market, using a patented artificial SEI.",
        "founded": null,
        "employees": "30"
    },
    {
        "id": 3090,
        "name": "Primet Precision Materials",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.primetprecision.com/",
        "email": "",
        "phone": "607-277-1530",
        "location": {
            "city": "Ithaca",
            "state": "New York",
            "zip": "14850"
        },
        "industry": "Anode Materials",
        "products": [],
        "description": "Piedmont Lithium is developing a world-class integrated lithium business in the United States, enabling the transition to a net-zero world and the creation of a clean energy economy in America.",
        "founded": null,
        "employees": "11"
    },
    {
        "id": 3093,
        "name": "Ryzon Materials Limited",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://ryzon.au",
        "email": "",
        "phone": "",
        "location": {
            "city": "",
            "state": "",
            "zip": ""
        },
        "industry": "Anode Materials",
        "products": [
            "Coated Spherical graphite"
        ],
        "description": "Ryzon Materials Limited is a vertically integrated lithium-ion battery company. It develops high-purity natural graphite from its Nachu project in Tanzania and is planning downstream AAM production for the U.S. market.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3094,
        "name": "SGL Carbon",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.sglcarbon.com/",
        "email": "",
        "phone": "828-437-3221",
        "location": {
            "city": "Morganton",
            "state": "North Carolina",
            "zip": "28655"
        },
        "industry": "Anode Materials",
        "products": [
            "Natural graphite",
            "Natural graphite - battery grade"
        ],
        "description": "SGL Carbon is a technology-based development of carbon-based solutions, helping customers improve their performance by optimizing materials at the nanoscale and delivering those improvements through sustainable, robust processes.",
        "founded": null,
        "employees": "90"
    },
    {
        "id": 3095,
        "name": "Sicona Battery Technologies Pty Ltd",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.siconabattery.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "TBA",
            "state": "TBA",
            "zip": ""
        },
        "industry": "Anode Materials",
        "products": [
            "Silicon-Carbon"
        ],
        "description": "Sicona produces high-performance silicon-carbon (SiCx®) anode materials using a \"top-down\" mechanical reduction process that avoids the high costs and hazards of silane gas.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3096,
        "name": "Sila Nanotechnologies",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.silanano.com/",
        "email": "",
        "phone": "408-475-7452",
        "location": {
            "city": "Alameda",
            "state": "California",
            "zip": "94501"
        },
        "industry": "Anode Materials",
        "products": [
            "Silicon composites"
        ],
        "description": "Sila delivers a market-proven nano-composite silicon anode to power lithium-ion batteries, with a commitment to quality, impactful innovation, and environmental health.",
        "founded": null,
        "employees": "350 (Planned)"
    },
    {
        "id": 3097,
        "name": "Sionic Energy",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://sionicenergy.com/",
        "email": "",
        "phone": "585-704-5529",
        "location": {
            "city": "Rochester",
            "state": "New York",
            "zip": "14615"
        },
        "industry": "Anode Materials",
        "products": [
            "Silicon"
        ],
        "description": "Sionic Energy’s breakthrough lithium-ion battery design is ready for rapid commercialization with backing from global automotive and battery industry leaders.",
        "founded": null,
        "employees": "20"
    },
    {
        "id": 3022,
        "name": "South Star Battery Metals Corp",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.southstarbatterymetals.com",
        "email": "",
        "phone": "",
        "location": {
            "city": "Coosa County",
            "state": "Alabama",
            "zip": "35151"
        },
        "industry": "Anode Materials",
        "products": [
            "Flake crystalline graphite concentrate"
        ],
        "description": "South Star focuses on acquiring and developing near-term production projects, delivering value in the industrial and battery metals sector through strong financial and operational metrics.",
        "founded": null,
        "employees": "50"
    },
    {
        "id": 3102,
        "name": "Superior Graphite",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.superiorgraphite.com/",
        "email": "",
        "phone": "708-458-0006",
        "location": {
            "city": "Bedford Park",
            "state": "Illinois",
            "zip": "60638"
        },
        "industry": "Anode Materials",
        "products": [
            "Synthetic graphite"
        ],
        "description": "Superior Graphite specializes in thermal purification, advanced sizing, and blending and coating technologies providing graphite and carbon-based solutions.",
        "founded": null,
        "employees": "300"
    },
    {
        "id": 3103,
        "name": "Syrah Technologies, LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.syrahresources.com.au/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Vidalia",
            "state": "Louisiana",
            "zip": "71373"
        },
        "industry": "Anode Materials",
        "products": [
            "Natural graphite - battery grade"
        ],
        "description": "The Syrah Vidalia processing facility produces graphite-based active anode materials. The facility brings a key industry to the United States to support the EV sector.",
        "founded": null,
        "employees": "101 (Planned)"
    },
    {
        "id": 3105,
        "name": "The Coretec Group",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://thecoretecgroup.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Ann Arbor",
            "state": "Michigan",
            "zip": "48103"
        },
        "industry": "Anode Materials",
        "products": [
            "Silicon-based active anode material"
        ],
        "description": "The Coretec Group is an industry leader in advanced silicon engineering to improve life and power tomorrow's EV, cleantech, and emerging technology markets.",
        "founded": null,
        "employees": "7"
    },
    {
        "id": 3028,
        "name": "Titan Mining Corp.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.titanminingcorp.com",
        "email": "",
        "phone": "315-535-3200",
        "location": {
            "city": "Gouverneur",
            "state": "New York",
            "zip": "13642"
        },
        "industry": "Anode Materials",
        "products": [
            "Natural graphite"
        ],
        "description": "Titan Mining produces zinc at its New York mine and is developing a project to become the USA's first fully integrated, end-to-end producer of natural flake graphite.",
        "founded": null,
        "employees": "140"
    },
    {
        "id": 3119,
        "name": "Urbix, Inc",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.urbix.inc/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Muscle Shoals",
            "state": "Alabama",
            "zip": ""
        },
        "industry": "Anode Materials",
        "products": [
            "Coated spherical purified graphite"
        ],
        "description": "Urbix, Inc. has developed a cost-effective, sustainable process to produce lithium-ion battery anode-grade coated spherical purified graphite at commercial scale.",
        "founded": null,
        "employees": "200 (Planned)"
    },
    {
        "id": 3032,
        "name": "Westwater Resources Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://westwaterresources.net/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Coosa County",
            "state": "Alabama",
            "zip": ""
        },
        "industry": "Anode Materials",
        "products": [
            "Natural graphite"
        ],
        "description": "Westwater is a startup graphite mining and processing company. The flake graphite can later be sed for battery anodes. The processing plant is under construction currently.",
        "founded": null,
        "employees": "15"
    },
    {
        "id": 3121,
        "name": "Advanced Battery Concepts",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://advancedbatteryconcepts.com/",
        "email": "",
        "phone": "989-424-6645",
        "location": {
            "city": "Clare",
            "state": "Michigan",
            "zip": "48617"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Sealed Bipolar Lead Acid"
        ],
        "description": "Advanced Battery Concepts delivers economical, socially, and environmentally responsible energy storage solutions with its advanced bipolar battery technology, driving a cleaner, more sustainable future.",
        "founded": null,
        "employees": "50"
    },
    {
        "id": 3122,
        "name": "Advanced Cell Engineering",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.advancedcellengineering.com/",
        "email": "",
        "phone": "772-382-9019",
        "location": {
            "city": "Stuart",
            "state": "Florida",
            "zip": "34997"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Packs"
        ],
        "description": "Advanced Cell Engineering discovers advanced lithium-ion technologies and create better energy storage solutions. Their mission is to accelerate the pace of battery innovation and empower customers.",
        "founded": null,
        "employees": "50"
    },
    {
        "id": 3123,
        "name": "AESC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.aesc-group.com/en/",
        "email": "",
        "phone": "615-768-3505",
        "location": {
            "city": "Smyrna",
            "state": "Tennessee",
            "zip": "37167"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Nickel manganese cobalt"
        ],
        "description": "AESC Group leads the decarbonization revolution with artificial intelligence converging with the internet of things -driven battery solutions, globally pioneering high-performance EV and energy storage, accelerating the shift to a sustainable future.",
        "founded": null,
        "employees": "350"
    },
    {
        "id": 3120,
        "name": "Altairnano",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://altairnano.com/",
        "email": "",
        "phone": "317-333-7617",
        "location": {
            "city": "Anderson",
            "state": "Indiana",
            "zip": "46013"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Lithium titanium oxide"
        ],
        "description": "Altairnano leverages nanoscale technologies for powerful lithium titanate solutions. Its unique nano cells bring advantages to electric grid, transportation, and industrial applications.",
        "founded": null,
        "employees": "106"
    },
    {
        "id": 3125,
        "name": "Amplify Cell Technologies",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://amplifycelltech.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Byhalia",
            "state": "Mississippi",
            "zip": ""
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Lithium-iron-phosphate battery cells"
        ],
        "description": "Amplify Cell Technologies produces lithium-iron-phosphate battery cells for electric commercial vehicles.",
        "founded": null,
        "employees": "2000"
    },
    {
        "id": 3126,
        "name": "Amprius",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://amprius.com/",
        "email": "",
        "phone": "800-425-8803",
        "location": {
            "city": "Fremont",
            "state": "California",
            "zip": "94538"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Silicon nanowire anode",
            "Lithium-ion batteries"
        ],
        "description": "Amprius pioneers the highest energy density lithium-ion batteries, enabling new applications and accelerating markets with indispensable storage capabilities using silicon nanowires.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3127,
        "name": "Ateios Systems",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://ateios.com/",
        "email": "",
        "phone": "330-310-1323",
        "location": {
            "city": "Newberry",
            "state": "Indiana",
            "zip": "47449"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Electrode"
        ],
        "description": "Ateios Systems, under a U.S. Army contract, will produce 3Ah Li-ion batteries with reduced fire risk, featuring Ateios electrolyte, graphene-based anode, and semi-solid-state, nickel-manganese-cobalt cathode for military use.",
        "founded": null,
        "employees": "12"
    },
    {
        "id": 3128,
        "name": "Blue Current",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://bluecurrent.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Hayward",
            "state": "California",
            "zip": "94545"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Silicon-based solid-state batteries"
        ],
        "description": "Blue Current is developing silicon-based solid-state batteries for safer, high-energy-density energy storage solutions.",
        "founded": null,
        "employees": "50"
    },
    {
        "id": 3129,
        "name": "Camel Group",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.camelbatt.com/",
        "email": "",
        "phone": "734-929-4396",
        "location": {
            "city": "Battle Creek",
            "state": "Michigan",
            "zip": "49037"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Flooded and AGM Batteries"
        ],
        "description": "The Camel Group's main focus includes automobile low-voltage batteries and energy storage.",
        "founded": null,
        "employees": "35"
    },
    {
        "id": 3130,
        "name": "Clarios",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://clairos.com/",
        "email": "",
        "phone": "616-494-4420",
        "location": {
            "city": "Holland",
            "state": "Michigan",
            "zip": "49423"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Lithium nickel cobalt aluminum oxide"
        ],
        "description": "Clarios develops advanced batteries for evolving transportation needs. It transforms insightful ideas into impactful realities, anticipating and delivering solutions with agility and flexibility.",
        "founded": null,
        "employees": "85"
    },
    {
        "id": 3131,
        "name": "Dragonfly Energy Holdings Corp",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://dragonflyenergy.com/",
        "email": "",
        "phone": "775-622-3448",
        "location": {
            "city": "Reno",
            "state": "Nevada",
            "zip": "89521"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "LFP"
        ],
        "description": "Dragonfly Energy, based in Reno, manufactures lithium-ion batteries using a patented dry electrode process, supporting U.S. supply chains with Battle Born Batteries® for RV, marine, and off-grid applications.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3132,
        "name": "Durapower Tech Private Limited",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://durapowergroup.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "",
            "state": "",
            "zip": ""
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Packs"
        ],
        "description": "Durapower is a leading global provider of high-performance, end-to-end energy storage solutions, specializing in lithium-ion battery technology for automotive, marine, and stationary applications.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3140,
        "name": "e-Storage",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://csestorage.com",
        "email": "",
        "phone": "",
        "location": {
            "city": "Shelbyville",
            "state": "Kentucky",
            "zip": "40065"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "LFP batteries for utility-scale energy storage"
        ],
        "description": "e-Storage, a subsidiary of Canadian Solar, is building a utility-scale battery facility in Kentucky through its local entity, Shelbyville Battery Manufacturing, focusing on integrated lithium iron phosphate battery production and R&D.",
        "founded": null,
        "employees": "700"
    },
    {
        "id": 3133,
        "name": "EaglePicher Technologies, LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.eaglepicher.com/",
        "email": "",
        "phone": "417-624-3167",
        "location": {
            "city": "Joplin",
            "state": "Missouri",
            "zip": "64804"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Nickel manganese cobalt",
            "Nickel cobalt aluminum oxide"
        ],
        "description": "EaglePicher Technologies specializes in designing and manufacturing advanced lithium-ion batteries for various applications, including defense, aerospace, and medical devices, ensuring high-performance and reliability.",
        "founded": null,
        "employees": "750"
    },
    {
        "id": 3134,
        "name": "EC Power",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://ecpowergroup.com/",
        "email": "",
        "phone": "814-861-6233",
        "location": {
            "city": "State College",
            "state": "Pennsylvania",
            "zip": "16803"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Nickel manganese cobalt"
        ],
        "description": "EC Power innovates with 30x technology and rapid thermal control. Focused on cooperation, science, and fairness, it unites to deliver faster, reliable lithium-ion batteries globally.",
        "founded": null,
        "employees": "12"
    },
    {
        "id": 3135,
        "name": "Electrovaya",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://electrovaya.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Jamestown",
            "state": "New York",
            "zip": ""
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Nickel cobalt aluminum oxide"
        ],
        "description": "Pioneering the energy transformation with safe, durable lithium-ion batteries, Electrovaya's mission is to accelerate the energy transition with advanced technology for safer and better batteries.",
        "founded": null,
        "employees": "250 (Planned)"
    },
    {
        "id": 3136,
        "name": "ElevenEs",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://elevenes.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "",
            "state": "",
            "zip": ""
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "LFP"
        ],
        "description": "ElevenEs is a Serbian company specializing in the development and manufacturing of lithium-iron-phosphate (LFP) batteries. The company has a focus on prismatic LFP cells and has established an R&D center and production facility in Subotica, Serbia.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3137,
        "name": "EnerSys",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.enersys.com/en/",
        "email": "",
        "phone": "732-543-7900",
        "location": {
            "city": "Sylmar",
            "state": "California",
            "zip": "91342"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Nickel manganese cobalt",
            "Nickel cobalt manganese oxide"
        ],
        "description": "EnerSys provides energy storage systems and technology for industrial applications, manufacturing and distributing reserve and motive power batteries, chargers, power equipment, and accessories for telecommunications, utilities, medical, aerospace, and defense.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3138,
        "name": "Enovix",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.enovix.com/",
        "email": "",
        "phone": "510-695-2350",
        "location": {
            "city": "Fremont",
            "state": "California",
            "zip": "94538"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Lithium cobalt oxide",
            "Nickel manganese cobalt"
        ],
        "description": "Enovix's breakthrough cell architecture is unlocking the full potential of next-gen devices with 100% active silicon anode.",
        "founded": null,
        "employees": "215"
    },
    {
        "id": 3139,
        "name": "Enpower Greentech",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.enpower-greentech.com/#top",
        "email": "",
        "phone": "",
        "location": {
            "city": "Ann Arbor",
            "state": "Michigan",
            "zip": "48103"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Lithium iron phosphate",
            "Nickel manganese cobalt"
        ],
        "description": "Enpower Greentech is a developer of energy storage battery technologies and services designed for renewable energy and smart power applications with focus on cell manufacturing, such as lithium iron phosphate.",
        "founded": null,
        "employees": "127"
    },
    {
        "id": 3141,
        "name": "Factorial Energy",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://factorialenergy.com/",
        "email": "",
        "phone": "617-315-9733",
        "location": {
            "city": "Methuen",
            "state": "Massachusetts",
            "zip": ""
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Solid-state battery"
        ],
        "description": "Factorial Energy is a U.S.-based company developing and manufacturing solid-state battery technology for electric vehicles. The company is focused on its proprietary FEST® (Factorial Electrolyte System Technology) platform.",
        "founded": null,
        "employees": "150"
    },
    {
        "id": 3142,
        "name": "Five Stone Energy",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.fivestonegreen.com/",
        "email": "",
        "phone": "917-528-3159",
        "location": {
            "city": "Fairfax",
            "state": "Virginia",
            "zip": "22030"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Nickel manganese cobalt",
            "Lithium iron phosphate"
        ],
        "description": "Five Stone Energy produces lithium iron phosphate and nickel manganese cobalt battery cells for energy storage systems and electric vehicles without toxic chemicals. It plans to build a battery manufacturing facility.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3143,
        "name": "Ford Motor Company",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://blueovalsk.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Stanton",
            "state": "Tennessee",
            "zip": "38069"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Nickel manganese cobalt",
            "Lithium iron phosphate"
        ],
        "description": "BlueOval SK shapes America's mobility future, pivotal in EV adoption. Its high-efficiency lithium-ion batteries offer convenient transport—charging faster and traveling farther, driving an endurable tomorrow.",
        "founded": null,
        "employees": "5800 (Planned)"
    },
    {
        "id": 3144,
        "name": "Forge Nano",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.forgenano.com/",
        "email": "",
        "phone": "720-259-8579",
        "location": {
            "city": "Thornton",
            "state": "Colorado",
            "zip": "80241"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Nickel manganese cobalt with ALD"
        ],
        "description": "Forge Nano, a materials science leader, accelerates manufacturing innovation and transforms product performance with its nanocoating technology, Atomic Armor.",
        "founded": null,
        "employees": "50"
    },
    {
        "id": 3145,
        "name": "Forge Nano - Forge Battery",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.forgenano.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Morrisville",
            "state": "North Carolina",
            "zip": "27560"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Nickel manganese cobalt with ALD"
        ],
        "description": "Forge Nano, a materials science leader, accelerates manufacturing innovation and transforms product performance with its nanocoating technology, Atomic Armor.",
        "founded": null,
        "employees": "204 (Planned)"
    },
    {
        "id": 3146,
        "name": "FREYR",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.freyrbattery.com/extra-pages/facilities/giga-factory-usa",
        "email": "",
        "phone": "",
        "location": {
            "city": "",
            "state": "Georgia",
            "zip": ""
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Nickel cobalt manganese oxide",
            "Lithium iron phosphate"
        ],
        "description": "FREYR is building a Giga America clean battery manufacturing facility based on the next-generation SemiSolid™ Lithium-Ion Battery Technology platform developed by 24M Technologies Inc.",
        "founded": null,
        "employees": "720 (Planned)"
    },
    {
        "id": 3147,
        "name": "General Motors (GM) - Samsung SDI JV",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://gmauthority.com/blog/gm/gm-facilities/ultium-cells-battery-plants-global/ultium-cells-usa-battery-plants/gm-new-carlisle-indiana-battery-plant/",
        "email": "",
        "phone": "",
        "location": {
            "city": "near New Carlisle",
            "state": "Indiana",
            "zip": ""
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "LFP"
        ],
        "description": "GM's Indiana battery facility in New Carlisle, in partnership with Samsung, will mass-produce lithium ion cells for its electric vehicle lineup, representing its fourth U.S. battery plant, currently under construction.",
        "founded": null,
        "employees": "1700 (Planned)"
    },
    {
        "id": 3148,
        "name": "Gotion",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.gotion.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Manteno",
            "state": "Illinois",
            "zip": ""
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Nickel cobalt manganese oxide",
            "Lithium iron phosphate"
        ],
        "description": "Gotion is a rapidly expanding company focused on innovative energy solutions and next-gen battery technology such as advanced lithium-ion batteries for electric vehicles and stationary applications.",
        "founded": null,
        "employees": "2600 (Planned)"
    },
    {
        "id": 3149,
        "name": "Ion Storage Systems",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://ionstoragesystems.com/",
        "email": "",
        "phone": "240-384-6020",
        "location": {
            "city": "Beltsville",
            "state": "Maryland",
            "zip": "20705"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Prismatic (pouch) cells"
        ],
        "description": "ION offers a uniquely adaptable solid-state battery solution for a variety of applications including defense and aerospace, consumer electronics, electric vehicles, and grid storage.",
        "founded": null,
        "employees": "70"
    },
    {
        "id": 3150,
        "name": "Ionblox",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.ionblox.com/",
        "email": "",
        "phone": "510-962-3682",
        "location": {
            "city": "Fremont",
            "state": "California",
            "zip": "94538"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Nickel manganese cobalt"
        ],
        "description": "Ionblox transforms lithium-ion batteries using high-capacity silicon monoxide anodes. Its nano-engineered SEI layer and advanced cell architecture ensure high conductivity and extended cycle life, even with extreme fast charging.",
        "founded": null,
        "employees": "18"
    },
    {
        "id": 3151,
        "name": "LG Energy Solution",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://lgenergymi.com/",
        "email": "",
        "phone": "517-267-044",
        "location": {
            "city": "Lansing",
            "state": "Michigan",
            "zip": "48864"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Nickel manganese cobalt",
            "Lithium iron phosphate"
        ],
        "description": "LG Energy Solution is producing batteries for the future of transportation with cutting-edge battery cells crafted by innovation. Its committed to utilizing state-of-the-art industry methods for superior cell production.",
        "founded": null,
        "employees": "1700 (Planned)"
    },
    {
        "id": 3152,
        "name": "Linova Energy",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.linovaenergy.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Monrovia",
            "state": "California",
            "zip": "91016"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Metal-free cathodes"
        ],
        "description": "Linova Energy is developing ultra-high-energy batteries with polymer cathodes for EV, aerospace, and energy storage, using metal-free cathodes without nickel or cobalt for a sustainable, cost-effective power solution.",
        "founded": null,
        "employees": "10"
    },
    {
        "id": 3153,
        "name": "Lithion Battery, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.lithionbattery.com/",
        "email": "",
        "phone": "702-478-3590",
        "location": {
            "city": "Henderson",
            "state": "Nevada",
            "zip": "89074"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Lithium iron phosphate"
        ],
        "description": "Lithion Batteries, a vertically integrated manufacturer of battery cells and packs, produces custom, high-quality power solutions globally, emphasizing reliability in critical applications.",
        "founded": null,
        "employees": "31"
    },
    {
        "id": 3154,
        "name": "Lyten, Inc",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://lyten.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Reno",
            "state": "Nevada",
            "zip": ""
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Lithium-sulfur battery cells"
        ],
        "description": "Lyten is a super-material applications company that has developed Lyten 3D Graphene™, which it uses to produce high-performance, next-generation lithium-sulfur batteries.",
        "founded": null,
        "employees": "1000"
    },
    {
        "id": 3155,
        "name": "Medtronic",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.medtronic.com/",
        "email": "",
        "phone": "763-514-4000",
        "location": {
            "city": "Brooklyn Center",
            "state": "Minnesota",
            "zip": "55430"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Specialized li-ion batteries for implantable medical devices"
        ],
        "description": "Medtronic is a global medical technology company. It designs, tests, and manufactures its own specialized batteries for use in critical life-sustaining medical devices like pacemakers and neurostimulators.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3156,
        "name": "Microvast",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://microvast.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Clarksville",
            "state": "Tennessee",
            "zip": "37040"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Nickel manganese cobalt",
            "Lithium iron phosphate",
            "Lithium titanium oxide"
        ],
        "description": "Microvast controls every aspect of battery development for industry-leading energy density, safety, ultra-fast charging, and long lifespans in commercial transportation and energy storage.",
        "founded": null,
        "employees": "287 (Planned)"
    },
    {
        "id": 3157,
        "name": "Nanoramic Laboratories",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://nanoramic.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Bridgeport",
            "state": "Connecticut",
            "zip": "06604"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Electrode"
        ],
        "description": "Nanoramic Laboratories is a U.S. company that has developed Neocarbonix™, an advanced electrode technology designed to improve performance and lower the cost of lithium-ion battery manufacturing.",
        "founded": null,
        "employees": "300"
    },
    {
        "id": 3158,
        "name": "Nanotech Energy",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://nanotechenergy.com/",
        "email": "",
        "phone": "800-995-5491",
        "location": {
            "city": "Los Angeles",
            "state": "California",
            "zip": "90025"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Cell"
        ],
        "description": "Nanotech Energy delivers safe and efficient super material-based solutions for cutting-edge products.",
        "founded": null,
        "employees": "23"
    },
    {
        "id": 3159,
        "name": "Navitas Systems, LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.navitassys.com/",
        "email": "",
        "phone": "734-205-1400",
        "location": {
            "city": "Ann Arbor",
            "state": "Michigan",
            "zip": "48108"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Nickel manganese cobalt"
        ],
        "description": "Navitas Systems specializes in comprehensive energy storage solutions, manufacturing lithium cells and products for commercial and U.S. government/military customers. Its capabilities include advanced chemistries, electronics, system integration, and more.",
        "founded": null,
        "employees": "118"
    },
    {
        "id": 3160,
        "name": "Nexeon",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.ingevity.com/about/our-story/",
        "email": "",
        "phone": "",
        "location": {
            "city": "North Charleston",
            "state": "South Carolina",
            "zip": "29405"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Silicon-based anode materials"
        ],
        "description": "Ingevity delivers solutions that purify, protect, and enhance, using innovative technologies to solve complex problems and promote sustainability.",
        "founded": null,
        "employees": "5000"
    },
    {
        "id": 3161,
        "name": "Nuvvon Inc",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://nuvvon.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Parsippany",
            "state": "New Jersey",
            "zip": "07054"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Solid-state battery"
        ],
        "description": "Nuvvon is a solid-state battery materials company developing next-generation energy storage solutions.",
        "founded": null,
        "employees": "9"
    },
    {
        "id": 3162,
        "name": "Our Next Energy, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://one.ai/",
        "email": "",
        "phone": "248-677-1010",
        "location": {
            "city": "Belleville",
            "state": "Michigan",
            "zip": "48111"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Lithium iron phosphate"
        ],
        "description": "Our Next Energy is doubling the EV range, prioritizing safety with innovative chemistries, and building a North American supply chain with abundant materials for cost-effective, resilient batteries.",
        "founded": null,
        "employees": "2100 (Planned)"
    },
    {
        "id": 3163,
        "name": "Panasonic",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://automotive.na.panasonic.com/ev-energy",
        "email": "",
        "phone": "",
        "location": {
            "city": "De Soto",
            "state": "Kansas",
            "zip": "66018"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Nickel manganese cobalt",
            "NCA"
        ],
        "description": "With a century of experience making batteries, Panasonic is now focused on batteries for EVs that boast high safety, high capacity, and high energy density and building a factory in Kansas.",
        "founded": null,
        "employees": "4000 (Planned)"
    },
    {
        "id": 3164,
        "name": "Piersica",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://piersica.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Sunrise",
            "state": "Florida",
            "zip": "33351"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Solid-state battery"
        ],
        "description": "Piersica is a developer of solid-state lithium batteries for safe electric propulsion and energy storage, using proprietary technology for high-rate li-metal anodes, solid separators, and high-voltage cathodes to enhance environmental sustainability.",
        "founded": null,
        "employees": "9"
    },
    {
        "id": 3165,
        "name": "QuantumScape",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.quantumscape.com/",
        "email": "",
        "phone": "408-452-2000",
        "location": {
            "city": "San Jose",
            "state": "California",
            "zip": "95110"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Solid-state battery"
        ],
        "description": "QuantumScape is building high-performing solid-state batteries. Its decade-long effort results in fast-charging, long-lasting, and safer batteries, addressing key areas like battery life and charging speed.",
        "founded": null,
        "employees": "600 (Planned)"
    },
    {
        "id": 3166,
        "name": "Rivian",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://rivian.com/",
        "email": "",
        "phone": "888-748-4261",
        "location": {
            "city": "Atlanta",
            "state": "Georgia",
            "zip": "30308"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Cell"
        ],
        "description": "Rivian manufactures electric SUVs, pickup trucks, and delivery vans (for Amazon). It integrates Li-ion batteries with management system for reliability and performance with a growing charging network in North America.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3167,
        "name": "Saft America Inc",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.saft.com/",
        "email": "",
        "phone": "904-861-1501",
        "location": {
            "city": "Jacksonville",
            "state": "Florida",
            "zip": "32221"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "NMC"
        ],
        "description": "Saft delivers longer-lasting batteries and systems for critical safety applications, back-up power, and propulsion, ensuring high performance in various environments.",
        "founded": null,
        "employees": "45"
    },
    {
        "id": 3168,
        "name": "Sakuu Corp",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.sakuu.com/batteries",
        "email": "",
        "phone": "888-376-5387",
        "location": {
            "city": "San Jose",
            "state": "California",
            "zip": "95138"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Kavian™ 3D printing platform",
            "Cypress® Li-Metal battery cells"
        ],
        "description": "Sakuu is a leader in battery innovation, offering advanced solutions like the Kavian platform for sustainable, high-volume electrode printing and Cypress Li-Metal Cell technology for superior battery performance.",
        "founded": null,
        "employees": "60"
    },
    {
        "id": 3169,
        "name": "Sion Power",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://sionpower.com/",
        "email": "",
        "phone": "520-799-7500",
        "location": {
            "city": "Tucson",
            "state": "Arizona",
            "zip": "85756"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Lithium-metal batteries"
        ],
        "description": "Sion Power pioneers high-energy lithium-metal rechargeable batteries, focusing on electric vehicles and aerospace markets with dendrite-resistant technology.",
        "founded": null,
        "employees": "100"
    },
    {
        "id": 3170,
        "name": "SK Battery America",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://eng.sk.com/",
        "email": "",
        "phone": "706-520-7500",
        "location": {
            "city": "Commerce",
            "state": "Georgia",
            "zip": "30529"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Nickel manganese cobalt"
        ],
        "description": "SK Battery America, a subsidiary of SK Innovation, manufactures advanced lithium-ion batteries in various format and chemistries for electric vehicles at their production facilities in Georgia, USA.",
        "founded": null,
        "employees": "1300"
    },
    {
        "id": 3171,
        "name": "StarPlus Energy (JV Stellantis - Samsung SDI Co) Ltd",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.stellantis.com/en/news/press-releases/2022/may/stellantis-and-samsung-announce-battery-plant-in-kokomo",
        "email": "",
        "phone": "",
        "location": {
            "city": "Kokomo",
            "state": "Indiana",
            "zip": ""
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "LFP",
            "NMC"
        ],
        "description": "StarPlus Energy, a joint venture between Stellantis and Samsung SDI, specializes in producing lithium-ion batteries for electric vehicles in its North American facilities.",
        "founded": null,
        "employees": "1400 (Planned)"
    },
    {
        "id": 3172,
        "name": "Stryten Energy",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.stryten.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Cumming",
            "state": "Georgia",
            "zip": "30040"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Cell"
        ],
        "description": "Stryten Energy is a U.S.-based energy storage solutions provider manufacturing advanced lead, lithium, and vanadium redox flow batteries for a wide range of sectors.",
        "founded": null,
        "employees": "400"
    },
    {
        "id": 3173,
        "name": "Tesla Inc, Panasonic Corp",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.tesla.com/giga-nevada",
        "email": "",
        "phone": "888-518-3752",
        "location": {
            "city": "Sparks",
            "state": "Nevada",
            "zip": "89434"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Lithium nickel cobalt aluminum oxide"
        ],
        "description": "Tesla/Panasonic Gigafactory Nevada is one of the world's highest volume plants for electric motors, energy storage products(lithium -ion), vehicle powertrains and batteries—producing billions of cells per year.",
        "founded": null,
        "employees": "300 (Planned)"
    },
    {
        "id": 3174,
        "name": "Toyota",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.toyota.com/usa/operations/map/tbmnc",
        "email": "",
        "phone": "",
        "location": {
            "city": "Liberty",
            "state": "North Carolina",
            "zip": ""
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "NMC"
        ],
        "description": "Toyota Battery Manufacturing, North Carolina, will produce lithium-ion batteries for its growing electrified vehicle range. It will be operational in 2025 with 100% renewable energy and six production lines.",
        "founded": null,
        "employees": "500 (Planned)"
    },
    {
        "id": 3175,
        "name": "Ultium Cells LLC (JV of GM and LG Energy Solution)",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.ultiumcell.com/",
        "email": "",
        "phone": "931-486-5440",
        "location": {
            "city": "Spring Hill",
            "state": "Tennessee",
            "zip": "37174"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "NMCA",
            "LFP",
            "Nickel manganese cobalt"
        ],
        "description": "Ultium Cells is producing batteries for the future of transportation with cutting-edge battery cells crafted by innovation. Its committed to utilizing state-of-the-art industry methods for superior cell production.",
        "founded": null,
        "employees": "1700 (Planned)"
    },
    {
        "id": 3176,
        "name": "Ultralife Corp",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.ultralifecorporation.com/",
        "email": "",
        "phone": "315-332-7100",
        "location": {
            "city": "Newark",
            "state": "New York",
            "zip": "14513"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Cell"
        ],
        "description": "Ultralife Corporation designs and manufactures rugged batteries (both rechargeable and non‑rechargeable) and communications systems for defense, energy, medical, and industrial applications globally.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3177,
        "name": "Xalt Energy MI LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.xaltenergy.com/",
        "email": "",
        "phone": "989-486-8501",
        "location": {
            "city": "Midland",
            "state": "Michigan",
            "zip": "48640"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Nickel manganese cobalt"
        ],
        "description": "Xalt Energy, based in Michigan, specializes in designing and manufacturing high-quality lithium-ion batteries for heavy-duty commercial, industrial, and marine electric vehicles and energy storage applications.",
        "founded": null,
        "employees": "265"
    },
    {
        "id": 3178,
        "name": "Xerion Advanced Battery Corp",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://xerionbattery.com/",
        "email": "",
        "phone": "720-229-0697",
        "location": {
            "city": "Vandalia",
            "state": "Ohio",
            "zip": "45377"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Lithium cobalt oxide",
            "Nickel manganese cobalt",
            "Lithium cobalt oxide Silicon cells"
        ],
        "description": "Xerion focuses on developing and manufacturing innovative, high-performance battery technologies, including advanced lithium-ion batteries, advanced cathodes, and Si-anode, for various applications with fast charging needs",
        "founded": null,
        "employees": "200 (Planned)"
    },
    {
        "id": 3179,
        "name": "ZincFive",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://zincfive.com/",
        "email": "",
        "phone": "503-594-2222",
        "location": {
            "city": "Tualatin",
            "state": "Oregon",
            "zip": "97062"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Nickel-zinc (NiZn) batteries"
        ],
        "description": "ZincFive develops and delivers proprietary nickel-zinc battery solutions. The company offers safe, high-power-density, and recyclable battery systems for mission-critical applications like data centers and transportation.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3124,
        "name": "Æsir Technologies, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.aesirtec.com",
        "email": "",
        "phone": "417-553-0237",
        "location": {
            "city": "Bozeman",
            "state": "Montana",
            "zip": "59718"
        },
        "industry": "Battery Cell Manufacturing",
        "products": [
            "Rechargeable aqueous hybrid battery"
        ],
        "description": "Æsir Technologies develops lithium-zinc batteries offering enhanced cycle life, energy density, and safety. Its rechargeable aqueous hybrid battery technology provides sustainable, recyclable, and non-toxic energy storage solutions.",
        "founded": null,
        "employees": "50"
    },
    {
        "id": 3181,
        "name": "AA Portable Power Corp.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.batteryspace.com/?gad=1&gclid=Cj0KCQjwk96lBhDHARIsAEKO4xY2o39jDdsYILun_GXH8PAloFNva54KUidx4aN6RDw6Uc46SGLc530aAjq2EALw_wcB",
        "email": "",
        "phone": "510-525-2328",
        "location": {
            "city": "Richmond",
            "state": "California",
            "zip": "94804"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "AA Portable Power Corp. (dba: Batteryspace.com) was founded in 2000 and became a reputable battery manufacturer over the years.",
        "founded": null,
        "employees": "30"
    },
    {
        "id": 3182,
        "name": "Accelera by Cummins",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.accelerazero.com",
        "email": "",
        "phone": "",
        "location": {
            "city": "Columbus",
            "state": "Indiana",
            "zip": "47201"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Integrated Battery Packs for Trucks and Energy Storage"
        ],
        "description": "Accelera by Cummins provides a diverse portfolio of zero-emission solutions including lithium batteries for the world’s most economically vital industries, empowering them to accelerate the transition to a sustainable future.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3184,
        "name": "Acculon Energy",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://acculonenergy.com/",
        "email": "",
        "phone": "614-259-7792",
        "location": {
            "city": "Columbus",
            "state": "Ohio",
            "zip": "43212"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Acculon Energy is a battery system developer and manufacturer. It provides an innovative end-to-end approach for accelerating market entry while minimizing risk during commercialization.",
        "founded": null,
        "employees": "15"
    },
    {
        "id": 3185,
        "name": "AESC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.aesc-group.com/en/",
        "email": "",
        "phone": "502-377-5675",
        "location": {
            "city": "Bowling Green",
            "state": "Kentucky",
            "zip": "42101"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "AESC Group leads a revolution with artificial intelligence converging with the internet of things-driven battery solutions, globally pioneering high-performance EV and energy storage, accelerating the shift to an endurable future.",
        "founded": null,
        "employees": "2000 (Planned)"
    },
    {
        "id": 3186,
        "name": "AKASOL, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.borgwarner.com/acquires/akasol",
        "email": "",
        "phone": "248-25-7843",
        "location": {
            "city": "Hazel Park",
            "state": "Michigan",
            "zip": "48030"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs",
            "Modules/ Arrays"
        ],
        "description": "BorgWarner's acquisition of AKASOL is expected to significantly strengthen the company’s commercial vehicle and industrial electrification capabilities, which positions it to capitalize on a fast-growing battery systems market.",
        "founded": null,
        "employees": "20"
    },
    {
        "id": 3187,
        "name": "Akku Energy Devices LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://akkuenergydevices.com/",
        "email": "",
        "phone": "303-808-4551",
        "location": {
            "city": "Denver",
            "state": "Colorado",
            "zip": "80205"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Akku Energy Devices LLC is a battery module and pack manufacturer specializing in micro-mobility, last-mile delivery vehicles, transportable energy storage, and stationary storage systems.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3188,
        "name": "Alpha Technologies",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.alpha.com/",
        "email": "",
        "phone": "800-322-5742",
        "location": {
            "city": "Suwanee",
            "state": "Georgia",
            "zip": "30024"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Modules/ Arrays"
        ],
        "description": "Alpha Technologies, and EnerSys company, delivers integrated energy storage systems designed to meet the demands of a fast-evolving energy future, particularly in broadband and renewable energy applications.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3180,
        "name": "Altairnano",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://altairnano.com/",
        "email": "",
        "phone": "317-333-7617",
        "location": {
            "city": "Anderson",
            "state": "Indiana",
            "zip": "46013"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Modules/ Arrays",
            "Racks / Cabinets"
        ],
        "description": "Altairnano leverages nanoscale technologies for powerful lithium titanate solutions. Its unique nano cells bring advantages to electric grid, transportation, and industrial applications.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3189,
        "name": "Ameresco",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.ameresco.com/",
        "email": "",
        "phone": "720-627-8772",
        "location": {
            "city": "Lakewood",
            "state": "Colorado",
            "zip": "80228"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Battery Energy Storage"
        ],
        "description": "Ameresco – an independent provider of innovative energy efficiency renewable energy solutions throughout North America - offers unique expertise across an array of green energy services including battery energy storage.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3190,
        "name": "American Lithium Energy",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.americanlithiumenergy.com/",
        "email": "",
        "phone": "760-444-5244",
        "location": {
            "city": "Carlsbad",
            "state": "California",
            "zip": "92008"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "American Lithium Energy ships the world's highest energy density silicon anode lithium-ion batteries.",
        "founded": null,
        "employees": "13"
    },
    {
        "id": 3191,
        "name": "Archer Aviation Inc",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://archer.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "San Jose",
            "state": "California",
            "zip": "95134"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Archer is a leader in the electric, vertical take-off and landing space, developing electric air taxis to revolutionize urban transportation with safe and low-noise aircraft.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3192,
        "name": "Auto Motive Power, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.amp.tech/",
        "email": "",
        "phone": "800-894-7104",
        "location": {
            "city": "Santa Fe Springs",
            "state": "California",
            "zip": "90670"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Auto Motive Power, Inc., part of Ford, designs automotive-grade hardware and software for e-mobility, specializing in battery management systems and charging solutions from drone to trucks.",
        "founded": null,
        "employees": "100"
    },
    {
        "id": 3193,
        "name": "Battery Specialties",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://batteryspecialties.com/",
        "email": "",
        "phone": "800-854-5759",
        "location": {
            "city": "Costa Mesa",
            "state": "California",
            "zip": "92626"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Battery Specialties is involved in industrial and commercial battery distribution.",
        "founded": null,
        "employees": "35"
    },
    {
        "id": 3194,
        "name": "Beam",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://beamforall.com/",
        "email": "",
        "phone": "872-281-7606",
        "location": {
            "city": "Broadview",
            "state": "Illinois",
            "zip": "60155"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Modules/ Arrays"
        ],
        "description": "AllCell Technology produces safe lithium-ion batteries.",
        "founded": null,
        "employees": "44"
    },
    {
        "id": 3195,
        "name": "BETA Technologies",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://beta.team/",
        "email": "",
        "phone": "802-281-3623",
        "location": {
            "city": "South Burlington",
            "state": "Vermont",
            "zip": "05403"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "BETA Technologies is an aerospace company developing and manufacturing electric flight and charging systems for the logistics, medical, defense, and passenger sectors.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3196,
        "name": "Black Teal Energy",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.blacktealenergy.com/",
        "email": "",
        "phone": "310-525-5296",
        "location": {
            "city": "Sacramento",
            "state": "California",
            "zip": "95838"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Enclosures",
            "aftermarket EV batteries",
            "Energy Storage Systems"
        ],
        "description": "Black Teal Energy focuses on sustainable energy solutions, offering aftermarket batteries for electric vehicles and energy storage systems, aiming for 100% recyclability and extending the lifespan of battery materials.",
        "founded": null,
        "employees": "22"
    },
    {
        "id": 3197,
        "name": "Blue Line Battery, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://bluelinebattery.com/",
        "email": "",
        "phone": "262-501-3376",
        "location": {
            "city": "Beloit",
            "state": "Wisconsin",
            "zip": "53511"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Blue Line Battery focuses on the next stage in lithium-ion technology.",
        "founded": null,
        "employees": "12"
    },
    {
        "id": 3198,
        "name": "BlueOvalSK (JV - Ford and SK ON)",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://blueovalsk.com/kentucky",
        "email": "",
        "phone": "",
        "location": {
            "city": "Glendale",
            "state": "Kentucky",
            "zip": "42740"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "BlueOvalSK's mega campus is envisioned to be an endurable automotive manufacturing ecosystem.",
        "founded": null,
        "employees": "5000 (Planned)"
    },
    {
        "id": 3199,
        "name": "BMW Manufacturing",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.bmwgroup-werke.com/en.html",
        "email": "",
        "phone": "864-802-6000",
        "location": {
            "city": "Woodruff",
            "state": "South Carolina",
            "zip": "29651"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "BMW Manufacturing, a subsidiary of BMW Group, assembles several vehicle models and battery packs in this 8 million square-foot campus in Greer, South Carolina.",
        "founded": null,
        "employees": "120"
    },
    {
        "id": 3200,
        "name": "BMZ USA Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.bmz-group.com/index.php/en/",
        "email": "",
        "phone": "757-821-8494",
        "location": {
            "city": "Virginia Beach",
            "state": "Virginia",
            "zip": "23455"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "BMZ innovates high-tech batteries for global brands, integrating cutting-edge tech. Its one-stop-shop ensures excellence across the value chain, from production to after-sales.",
        "founded": null,
        "employees": "100"
    },
    {
        "id": 3201,
        "name": "BorgWarner",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.borgwarner.com/technologies/battery-systems",
        "email": "",
        "phone": "864-985-0568",
        "location": {
            "city": "Seneca",
            "state": "South Carolina",
            "zip": "29678"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Modules/ Arrays"
        ],
        "description": "BorgWarner is a global automotive tier-1 supplier transitioning rapidly toward electrification.",
        "founded": null,
        "employees": "122"
    },
    {
        "id": 3202,
        "name": "Braille Battery, Inc",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://braillebattery.com/",
        "email": "",
        "phone": "941-312-5047",
        "location": {
            "city": "Sarasota",
            "state": "Florida",
            "zip": "34243"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Braille Battery is a world leader in light-weight AGM batteries.",
        "founded": null,
        "employees": "15"
    },
    {
        "id": 3203,
        "name": "Caterpillar",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.caterpillar.com/en.html",
        "email": "",
        "phone": "",
        "location": {
            "city": "Irwine",
            "state": "Texas",
            "zip": "75309"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Battery Energy Storage"
        ],
        "description": "Caterpillar is a manufacturer of construction and mining equipment, off-highway diesel and natural gas engines, industrial gas turbines. recently engaged in battery storage for many of its applications",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3204,
        "name": "Cell-Con, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://cell-con.com/",
        "email": "",
        "phone": "800-771-7139",
        "location": {
            "city": "Bedford",
            "state": "Pennsylvania",
            "zip": "15522"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs with Lithium and LPF"
        ],
        "description": "Cell-Con is a leading U.S. manufacturer of custom and stocked battery packs from cells, specializing in Li-ion, NiMH, LiFePO4, NiCd, and lead-acid power systems; and for portable devices.",
        "founded": null,
        "employees": "30"
    },
    {
        "id": 3205,
        "name": "Clarios",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.clairos.com/",
        "email": "",
        "phone": "616-494-4420",
        "location": {
            "city": "Holland",
            "state": "Michigan",
            "zip": "49423"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Clarios develops and manufactures advanced automotive batteries, focusing on lead-acid and lithium-ion technologies for vehicles, including start-stop, conventional, and electric vehicles.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3206,
        "name": "Coulomb Solutions Inc. (CSI)",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://coulombsolutions.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "TBA",
            "state": "TBA",
            "zip": ""
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Coulomb Solutions Inc. addresses commercial EV challenges and to enable North American original equipment manufacturers to be highly successful in launching electric variants of its commercial truck and bus platforms.",
        "founded": null,
        "employees": "50"
    },
    {
        "id": 3207,
        "name": "Cuberg",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://cuberg.net/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Emeryville",
            "state": "California",
            "zip": "947608"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Cuberg combines next-generation battery technology, world-class R&D expertise, and a global manufacturing capacity to enable entirely new modes of all-electric transportation.",
        "founded": null,
        "employees": "40"
    },
    {
        "id": 3208,
        "name": "Custom Power",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.custompower.com/",
        "email": "",
        "phone": "800-896-5059",
        "location": {
            "city": "Fountain Valley",
            "state": "California",
            "zip": "92708"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Custom Power specializes in designing and manufacturing custom battery packs for Defense, Aerospace, Medical, and Industrial sectors, with a focus on lithium-ion and other chemistries.",
        "founded": null,
        "employees": "75"
    },
    {
        "id": 3209,
        "name": "Daimler",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.daimlertruck.com/en",
        "email": "",
        "phone": "",
        "location": {
            "city": "Vance",
            "state": "Alabama",
            "zip": "35490"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "The Daimler Tuscaloosa Plant, operated by Mercedes-Benz, is focused on electric vehicle production, including EQS and EQE SUV models, supported by a new battery plant in Bibb County, Alabama.",
        "founded": null,
        "employees": "4400 (Planned)"
    },
    {
        "id": 3210,
        "name": "Daimler Truck North America",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://northamerica.daimlertruck.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Portland",
            "state": "Oregon",
            "zip": "97217"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Integrated Battery Packs for Trucks and Energy Storage"
        ],
        "description": "Daimler Truck North America manufactures, sells, and services several renowned commercial vehicle brands including Freightliner Trucks, Western Star Trucks, Thomas Built Buses, with an emphasis on electrification with LIBs",
        "founded": null,
        "employees": "2800"
    },
    {
        "id": 3211,
        "name": "Dantona Industries, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://dantona.com/",
        "email": "",
        "phone": "800-326-8662",
        "location": {
            "city": "Wantagh",
            "state": "New York",
            "zip": "11793"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Dantona Industries is a supplier of industrial and consumer batteries, chargers, and battery packs.",
        "founded": null,
        "employees": "30"
    },
    {
        "id": 3212,
        "name": "EaglePicher Technologies, LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.eaglepicher.com/",
        "email": "",
        "phone": "417-624-3167",
        "location": {
            "city": "Joplin",
            "state": "Missouri",
            "zip": "64804"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "EaglePicher Technologies specializes in designing and manufacturing advanced lithium-ion batteries for various applications, including defense, aerospace, and medical devices, ensuring high-performance and reliability.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3213,
        "name": "Eaton",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.eaton.com/country.html",
        "email": "",
        "phone": "",
        "location": {
            "city": "Raleigh",
            "state": "North Carolina",
            "zip": "27616"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Eaton provides electric vehicle charging solutions and lithium-ion battery and energy storage systems to support the transition to low-carbon transportation. It also collaborates on electric drives for commercial vehicles.",
        "founded": null,
        "employees": "650"
    },
    {
        "id": 3214,
        "name": "Echandia",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://echandia.se/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Marysville",
            "state": "Washington",
            "zip": "98271"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Safe and Durable Maritime Battery Systems"
        ],
        "description": "Echandia provides heavy-duty energy storage systems for maritime vessels and large-scale applications, prioritizing durability, safety, and long cycle life for extreme conditions.",
        "founded": null,
        "employees": "25"
    },
    {
        "id": 3215,
        "name": "Electric Power Systems",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://epsenergy.com/",
        "email": "",
        "phone": "435-535-6978",
        "location": {
            "city": "North Logan",
            "state": "Utah",
            "zip": "84341"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Modules/ Arrays"
        ],
        "description": "Electric Power Systems (EPS) develops advanced lithium-ion energy storage solutions, including high-power, scalable powertrains certifiable for electrified aviation, and a broad range of applications, from fixed-wing aircraft to eVTOLs.",
        "founded": null,
        "employees": "135"
    },
    {
        "id": 3216,
        "name": "Electrochem Solutions, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.electrochemsolutions.com/",
        "email": "",
        "phone": "781-830-5800",
        "location": {
            "city": "Raynham",
            "state": "Massachusetts",
            "zip": "02767"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Electrochem is the premium provider of custom power solutions for critical applications where energy demands are high, operating conditions are extreme, and the cost of failure is significant.",
        "founded": null,
        "employees": "120"
    },
    {
        "id": 3218,
        "name": "ElringKlinger",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://elringklinger.de/en",
        "email": "",
        "phone": "864-855-4422",
        "location": {
            "city": "Easley",
            "state": "South Carolina",
            "zip": "29640"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "ElringKlinger is a global automotive supplier and a full-service provider for battery technology.",
        "founded": null,
        "employees": "350"
    },
    {
        "id": 3219,
        "name": "EMBS Battery Systems",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://embatterysystems.com/",
        "email": "",
        "phone": "864-220-1010",
        "location": {
            "city": "Greenville",
            "state": "South Carolina",
            "zip": "29605"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Battery Systems"
        ],
        "description": "EMBS Battery Systems is a battery pack original design manufacturer and manufacturing services provider, specializing in low-voltage lithium-ion battery packs for robotics and other cordless applications.",
        "founded": null,
        "employees": "10"
    },
    {
        "id": 3220,
        "name": "Emerging Power",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://emergingpower.com/",
        "email": "",
        "phone": "201-441-3590",
        "location": {
            "city": "Hackensack",
            "state": "New Jersey",
            "zip": "7601"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Emerging Power is a New Jersey‑based small business since 2000, designing and manufacturing custom battery packs across chemistries for original equipment manufacturers, commercial, military, medical, internet of things, and unmanned aerial vehicle applications.",
        "founded": null,
        "employees": "50"
    },
    {
        "id": 3221,
        "name": "Empower Greentech",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://enpower-greentech.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Fullerton",
            "state": "California",
            "zip": "92831"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Enpower Greentech is a U.S.-based advanced battery cell manufacturer delivering semi‑solid‑state lithium‑ion, lithium‑metal, and silicon‑rich batteries which are designed and made in America for high-performance energy and mobility applications.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3222,
        "name": "EnerSys",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.alpha.com/",
        "email": "",
        "phone": "800-322-5742",
        "location": {
            "city": "Suwanee",
            "state": "Georgia",
            "zip": "30024"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "EnerSys is a provider of energy storage systems for industrial applications, manufacturing and distributing a range of products including power batteries, battery chargers, power equipment for various industries​",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3223,
        "name": "Eviation Aircraft",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.eviation.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Arlington",
            "state": "Washington",
            "zip": "98223"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Battery Systems"
        ],
        "description": "Eviation Aircraft develops and manufactures efficient electric aircraft to deliver a competitive solution for the regional mobility of people and goods.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3224,
        "name": "EVS Supply",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.evssupply.com/assembly-capabilities/",
        "email": "",
        "phone": "00-776-5267",
        "location": {
            "city": "Richardson",
            "state": "Texas",
            "zip": "75081"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "EVS Supply is a U.S. specialty battery distributor and custom battery pack manufacturer offering standard and custom lithium, NiMH, lead‑acid, and flashlight power solutions.",
        "founded": null,
        "employees": "25"
    },
    {
        "id": 3225,
        "name": "Exponential Power",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.exponentialpower.com/",
        "email": "",
        "phone": "630-221-1730",
        "location": {
            "city": "Carol Stream",
            "state": "Illinois",
            "zip": "60188"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Exponential Power provides stored power products and services.",
        "founded": null,
        "employees": "100"
    },
    {
        "id": 3226,
        "name": "Factorial Energy",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://factorialenergy.com/",
        "email": "",
        "phone": "617-315-9733",
        "location": {
            "city": "Woborn",
            "state": "Massachusetts",
            "zip": "1801"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Factorial delivers high performing, safe solid-state batteries that power life to the fullest.",
        "founded": null,
        "employees": "100"
    },
    {
        "id": 3227,
        "name": "Fedco Electronics, Inc., d/b/a Fedco Batteries",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.fedcobatteries.com/",
        "email": "",
        "phone": "920-922-6490",
        "location": {
            "city": "Fond du Lac",
            "state": "Wisconsin",
            "zip": "54937"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Fedco Electronics, Inc., d/b/a Fedco Batteries, designs and manufactures custom lithium primary and lithium-ion rechargeable battery assemblies for critical applications.",
        "founded": null,
        "employees": "36"
    },
    {
        "id": 3228,
        "name": "Fleetzero",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.fleetzero.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Birmingham",
            "state": "Alabama",
            "zip": "35203"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Battery Systems"
        ],
        "description": "Fleetzero designs and manufactures custom battery packs for ocean-going ships, offering sustainable maritime power solutions through advanced battery integration and electric shipping services.",
        "founded": null,
        "employees": "12"
    },
    {
        "id": 3229,
        "name": "Flexodes, Inc",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.flexodesinc.com/",
        "email": "",
        "phone": "281-850-8015",
        "location": {
            "city": "Sugar Land",
            "state": "Texas",
            "zip": "77479"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Flexodes is a manufacturing company that is developing a lithium-sulfur battery.",
        "founded": null,
        "employees": "2"
    },
    {
        "id": 3230,
        "name": "Flux Power, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.fluxpower.com/",
        "email": "",
        "phone": "877-505-3589",
        "location": {
            "city": "Vista",
            "state": "California",
            "zip": "92081"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Flux Power, Inc. designs, manufactures, and sells advanced lithium-ion batteries for industrial and commercial uses, including material handling equipment, airport ground support, and stationary energy storage​​​",
        "founded": null,
        "employees": "121"
    },
    {
        "id": 3231,
        "name": "Ford Motor Company",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://corporate.ford.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Glendale",
            "state": "Kentucky",
            "zip": "42740"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Ford's mega campus is envisioned to be an endurable automotive manufacturing ecosystem.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3232,
        "name": "Forsee Power",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.forseepower.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Hilliard",
            "state": "Ohio",
            "zip": "43026"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Forsee Power offers durable lithium-ion batteries lasting up to 15 years. Its solutions cater to all energy needs.",
        "founded": null,
        "employees": "1000"
    },
    {
        "id": 3233,
        "name": "Fortescue",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.fortescue.com/en",
        "email": "",
        "phone": "",
        "location": {
            "city": "Detroit",
            "state": "Michigan",
            "zip": ""
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Fortescue is an Australian mining and green energy company rapidly diversifying into battery manufacturing, hydrogen, and renewables to decarbonize heavy industry through its Fortescue Energy and Fortescue Metals divisions.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3234,
        "name": "Galvion",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.galvion.com/",
        "email": "",
        "phone": "508-490-9960",
        "location": {
            "city": "Marlborough",
            "state": "Massachusetts",
            "zip": "1752"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Galvion designs and manufactures integrated tactical head‑protection systems and intelligent lithium‑ion power and data solutions for military and tactical operators worldwide.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3235,
        "name": "General Motors (GM) Subsystems Manufacturing",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.gm.com/",
        "email": "",
        "phone": "313-972-6178",
        "location": {
            "city": "Brownstown Charter Twp",
            "state": "Michigan",
            "zip": "`48183"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Brownstown Battery Assembly Plant was the first U.S. battery assembly plant operated by a major automaker. The plant was converted from an empty warehouse into a battery manufacturing site.",
        "founded": null,
        "employees": "107"
    },
    {
        "id": 3236,
        "name": "Gotion High-tech",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.gotion.com/",
        "email": "",
        "phone": "510-249-5610",
        "location": {
            "city": "Fremont",
            "state": "California",
            "zip": "94538"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Gotion High-tech is a China-based battery manufacturer specializing in lithium iron phosphate and ternary cells for EVs and energy storage, with expanding global production in the U.S., Germany, and Asia.",
        "founded": null,
        "employees": "200"
    },
    {
        "id": 3237,
        "name": "Greenworks",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.greenworkstools.com/",
        "email": "",
        "phone": "423-226-2719",
        "location": {
            "city": "Morristown",
            "state": "Tennessee",
            "zip": "37813"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Greenworks is a U.S. and global brand pioneering cordless lithium‑ion home and lawn care tools with over 500 products ranging from trimmers to power stations, leading innovation since 2002.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3238,
        "name": "GS Yuasa Lithium Power, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://gsyuasa-lp.com/",
        "email": "",
        "phone": "888-479-8272",
        "location": {
            "city": "Roswell",
            "state": "Georgia",
            "zip": "30076"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "GS Yuasa Lithium Power delivers advanced batteries and battery systems for North American clients within the aerospace, industrial, military, and specialty markets.",
        "founded": null,
        "employees": "38"
    },
    {
        "id": 3239,
        "name": "Highpower International Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.highpowertech.com/",
        "email": "",
        "phone": "844-948-3076",
        "location": {
            "city": "Mountain View",
            "state": "California",
            "zip": "94040"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Highpower International Inc. develops, manufactures, and markets Ni-MH and lithium-ion batteries for consumer and industrial uses. It focuses on clean energy storage it is engaged in battery production and research.",
        "founded": null,
        "employees": "120"
    },
    {
        "id": 3240,
        "name": "HiTHIUM Energy Storage Technology USA Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://hithium.com/en/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Mesquite",
            "state": "Texas",
            "zip": "75126"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Battery Energy Storage"
        ],
        "description": "HiTHIUM manufactures high-quality stationary energy storage products for large-scale projects and commercial customers, driven by a commitment to quality for the energy transition and future generations.",
        "founded": null,
        "employees": "200"
    },
    {
        "id": 3241,
        "name": "Honda - LGES Partnership",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://lgeshonda.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Jeffersonville",
            "state": "Ohio",
            "zip": "43128"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "This battery plant is a joint venture between LG Energy Solution and Honda.",
        "founded": null,
        "employees": "2200 (Planned)"
    },
    {
        "id": 3242,
        "name": "Hybrid Design Services, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.hybriddesignservices.com/",
        "email": "",
        "phone": "248-298-3400",
        "location": {
            "city": "Troy",
            "state": "Michigan",
            "zip": "48083"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Hybrid Design Services, Inc. provides innovative solutions in the energy sector, specializing in battery pack and power distribution systems. It offers several services including engineering, design, and prototyping.",
        "founded": null,
        "employees": "25"
    },
    {
        "id": 3243,
        "name": "Hyundai Mobis",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.mobis.co.kr/en/index.do",
        "email": "",
        "phone": "334-387-4800",
        "location": {
            "city": "Montgomery",
            "state": "Alabama",
            "zip": "36108"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Hyundai Mobis is a global auto parts vendor, focusing on autonomous driving, connectivity, and electrification to be a leader in the era of smart mobility.",
        "founded": null,
        "employees": "400 (Planned)"
    },
    {
        "id": 3245,
        "name": "Inventus Power",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://inventuspower.com/",
        "email": "",
        "phone": "877-423-4242",
        "location": {
            "city": "Woodridge",
            "state": "Illinois",
            "zip": "60517"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Inventus Power provides advanced battery and power systems for global OEMs. It specializes in the design and manufacture of Li-ion battery packs, smart chargers, and efficient power supplies.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3246,
        "name": "Ionblox",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.ionblox.com/",
        "email": "",
        "phone": "510-509-1067",
        "location": {
            "city": "Newark",
            "state": "California",
            "zip": "94560"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Modules/ Arrays"
        ],
        "description": "Ionblox specializes in lithium-ion batteries using high-capacity silicon monoxide anodes. Its nano-engineered SEI layer and advanced cell architecture ensure high conductivity and extended cycle life, even with extreme fast charging.",
        "founded": null,
        "employees": "32"
    },
    {
        "id": 3247,
        "name": "Joby Aviation, Inc",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.jobyaviation.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Vandalia",
            "state": "Ohio",
            "zip": "45377"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Joby Aviation is a California-based company developing an all-electric, vertical take-off and landing air taxi for commercial passenger service.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3248,
        "name": "Kreisel Electric (John Deere)",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.deere.com/en/",
        "email": "",
        "phone": "336-996-8100",
        "location": {
            "city": "Kernersville",
            "state": "North Carolina",
            "zip": "27284"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "John Deere is a leader in agricultural, construction, and forestry equipment. This facility will develop and manufacture Kreisel battery and CHIMERO charger technology to serve the North American off-highway market.",
        "founded": null,
        "employees": "180 (Planned)"
    },
    {
        "id": 3249,
        "name": "LG Chem",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.lgchem.com/main/index",
        "email": "",
        "phone": "480-358-3000",
        "location": {
            "city": "Queen Creek",
            "state": "Arizona",
            "zip": "85142"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "LG Chem is leading with science for sustainability.",
        "founded": null,
        "employees": "2000 (Planned)"
    },
    {
        "id": 3250,
        "name": "LG Energy Solution Michigan Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.lgenergymi.com/",
        "email": "",
        "phone": "616-494-7100",
        "location": {
            "city": "Holland",
            "state": "Michigan",
            "zip": "49423"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "LG Energy Solution is shaping the future of the automotive industry by leading the EV charge and paving the path toward a more sustainable future.",
        "founded": null,
        "employees": "1495"
    },
    {
        "id": 3251,
        "name": "LG Energy Solution Vertech",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://lgensol-vt.com/",
        "email": "",
        "phone": "508-497-7319",
        "location": {
            "city": "Westborough",
            "state": "Massachusetts",
            "zip": "1581"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Stationary Energy Storage Systems"
        ],
        "description": "LG Energy Solution Vertech focuses on designing and manufacturing stationary energy storage solutions in Massachusetts.",
        "founded": null,
        "employees": "100"
    },
    {
        "id": 3252,
        "name": "Lithion Battery",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.lithionbattery.com/",
        "email": "",
        "phone": "702-478-3590",
        "location": {
            "city": "Henderson",
            "state": "Nevada",
            "zip": "89011"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Modules/ Arrays",
            "Packs"
        ],
        "description": "Lithion Batteries, a vertically integrated manufacturer of battery cells and packs, produces custom, high-quality power solutions globally, emphasizing reliability in critical applications.",
        "founded": null,
        "employees": "250"
    },
    {
        "id": 3253,
        "name": "Lithium Rhino",
        "twitter": "",
        "twitterUrl": "",
        "website": "www.lithiumrhino.com",
        "email": "",
        "phone": "813-336-2457",
        "location": {
            "city": "Charlotte",
            "state": "North Carolina",
            "zip": "28273"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Lithium Rhino manufactures plug‑and‑play lithium‑ion battery conversion kits for golf carts, offering zero‑maintenance, high‑cycle (6000+) performance plus eco‑friendly, 99%‑recyclable design.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3254,
        "name": "Lithos Energy",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://lithosenergy.com/",
        "email": "",
        "phone": "415-856-8200",
        "location": {
            "city": "San Rafael",
            "state": "California",
            "zip": "94903"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Lithos Energy is a U.S. company engineering and manufacturing modular lithium‑ion battery systems with proprietary BMS, tailored for rugged, high‑performance off‑road, marine, and heavy‑equipment applications.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3255,
        "name": "Lockheed Martin",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.lockheedmartin.com/",
        "email": "",
        "phone": "617-374-3797",
        "location": {
            "city": "Grand Prairie",
            "state": "Texas",
            "zip": "75051"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Racks / Cabinets"
        ],
        "description": "Lockheed Martin Energy is advancing the energy storage market by offering lithium-ion battery systems. These systems are designed for efficiency and integration, featuring comprehensive battery management and thermal management systems.",
        "founded": null,
        "employees": "100"
    },
    {
        "id": 3256,
        "name": "Lyten",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://lyten.com/",
        "email": "",
        "phone": "408-940-9298",
        "location": {
            "city": "San Jose",
            "state": "California",
            "zip": "95134"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Lyten specializes in developing advanced materials like 3D graphene, used in light-weighting, electrification, and sensing technologies. Its innovations include lithium-sulfur batteries and advanced sensors for applications in transportation and aerospace​.",
        "founded": null,
        "employees": "112"
    },
    {
        "id": 3257,
        "name": "Magnis",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.im3ny.com/",
        "email": "",
        "phone": "‪607-398-0618",
        "location": {
            "city": "Endicott",
            "state": "New York",
            "zip": "13760"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Magnis is a company specializing in the development and production of lithium-ion battery technology for electric vehicles and energy storage systems.",
        "founded": null,
        "employees": "200 (Planned)"
    },
    {
        "id": 3258,
        "name": "Mercedes-Benz",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://group.mercedes-benz.com/careers/about-us/locations/location-detail-page-416402.html",
        "email": "",
        "phone": "",
        "location": {
            "city": "Woodstock",
            "state": "Alabama",
            "zip": "35188"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Mercedes-Benz is a global German automaker known for luxury vehicles, now heavily investing in electric mobility, in-house battery tech, and global gigafactories through its Mercedes-Benz Electric and Acceleration to Electric strategies.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3259,
        "name": "Microvast",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://microvast.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Clarksville",
            "state": "Tennessee",
            "zip": "37040"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs",
            "Modules/ Arrays"
        ],
        "description": "Microvast manufactures of lithium-ion cells and provides battery solutions for transportation, heavy equipment, and energy storage. It uses aramid separators in some of its products.",
        "founded": null,
        "employees": "143 (Planned)"
    },
    {
        "id": 3260,
        "name": "Military Battery Systems",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://milbatteries.com/",
        "email": "",
        "phone": "970-586-0660",
        "location": {
            "city": "Gypsum",
            "state": "Colorado",
            "zip": ""
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Military Battery Systems, Inc., based in Arvada, Colorado, offers OPTIMA batteries, rugged lithium-ion portable power systems (GRIDLESS), and resilient communications solutions—field‑tested for warfighters, equipment, vehicles, and remote, solar‑compatible off‑grid use.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3261,
        "name": "Mullen Automotive, Inc",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://mullencommercial.com/contact-us",
        "email": "",
        "phone": "",
        "location": {
            "city": "Fullerton",
            "state": "California",
            "zip": "92831"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Mullen Automotive is a U.S. electric vehicle company in Brea, California, specializing in rebadging Chinese-made EVs for passenger and commercial use while investing in domestic battery production.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3262,
        "name": "Navitas Systems LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.navitassys.com/",
        "email": "",
        "phone": "734-205-1400",
        "location": {
            "city": "Ann Arbor",
            "state": "Michigan",
            "zip": "48103"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Navitas Systems specializes in comprehensive energy storage solutions, manufacturing lithium cells and products for commercial and U.S. government/military customers. Its capabilities include advanced chemistries, electronics, system integration, and more.",
        "founded": null,
        "employees": "118"
    },
    {
        "id": 3263,
        "name": "Nikola",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.nikolamotor.com/",
        "email": "",
        "phone": "833-467-2237",
        "location": {
            "city": "Coolidge",
            "state": "Arizona",
            "zip": "90058"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Modules/ Arrays",
            "Packs"
        ],
        "description": "Nikola is specializing in heavy-duty commercial battery-electric vehicles, along with energy solutions. It focuses on developing and manufacturing transportation technologies, aimed at reducing emissions in the heavy-duty transport sector.",
        "founded": null,
        "employees": "75"
    },
    {
        "id": 3264,
        "name": "Octillion Power Systems, LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://octillion.us/",
        "email": "",
        "phone": "510-589-1156",
        "location": {
            "city": "Richmond",
            "state": "California",
            "zip": "94804"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Octillion Power Systems is a leading value-chain enabler for electric vehicles custom made and mass produced.",
        "founded": null,
        "employees": "400"
    },
    {
        "id": 3265,
        "name": "Our Next Energy, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://one.ai/",
        "email": "",
        "phone": "248-677-1010",
        "location": {
            "city": "Belleville",
            "state": "Michigan",
            "zip": "48111"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Our Next Energy develops energy storage for the grid and electric vehicles.",
        "founded": null,
        "employees": "2100 (Planned)"
    },
    {
        "id": 3266,
        "name": "Paladin Power Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://paladinpower.com/",
        "email": "",
        "phone": "951-468-1248",
        "location": {
            "city": "Temecula",
            "state": "California",
            "zip": "92592"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Racks / Cabinets"
        ],
        "description": "Paladin Power produces residential and commercial energy storage solution (ESS) by stacking lithium ion batteries with efficient inverters",
        "founded": null,
        "employees": "50"
    },
    {
        "id": 3267,
        "name": "Polyplus Battery",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.polyplus.com/",
        "email": "",
        "phone": "510.841.7242",
        "location": {
            "city": "Berkeley",
            "state": "California",
            "zip": "94710"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "PolyPlus Battery Company is advancing battery technology with its proprietary Glass Protected Li Metal Batteries, which offer solid-state lithium anode laminates that can double the energy density of rechargeable batteries​",
        "founded": null,
        "employees": "50"
    },
    {
        "id": 3268,
        "name": "Pomega Energy Storage Technologies",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://tr.pomega.com/en/pomega-energy-storage-technologies-breaks-ground-for-new-lithium-ion-battery-plant/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Walterboro",
            "state": "South Carolina",
            "zip": "29488"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Racks / Cabinets"
        ],
        "description": "Pomega Energy Storage Technologies broke ground for a new lithium-ion battery plant with focus on Lithium Iron Phosphate cell production.",
        "founded": null,
        "employees": "575"
    },
    {
        "id": 3269,
        "name": "ProTechnologies, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "http://www.protechnologies.com/",
        "email": "",
        "phone": "800-333-1375",
        "location": {
            "city": "Pilot Mountain",
            "state": "North Carolina",
            "zip": "27041"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "PTI is a custom battery pack manufacturer for OEMs across various industries, offering design, engineering, and manufacturing with a focus on cost efficiency and performance. lifetime warranty.",
        "founded": null,
        "employees": "30"
    },
    {
        "id": 3270,
        "name": "Proterra",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.proterra.com/",
        "email": "",
        "phone": "864-438-0000",
        "location": {
            "city": "Greenville",
            "state": "South Carolina",
            "zip": "29607"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Proterra is dedicated to creating innovative electric vehicle and lithium-ion battery technologies for zero-emission electric transit vehicles (buses) and commercial trucks EV solutions emphasizing reliability, safety, and environmental responsibility.",
        "founded": null,
        "employees": "350"
    },
    {
        "id": 3271,
        "name": "Purcell Systems",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.purcellsystems.com/",
        "email": "",
        "phone": "509-755-0341",
        "location": {
            "city": "Spokane Valley",
            "state": "Washington",
            "zip": "99216"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Modules/ Arrays",
            "Packs"
        ],
        "description": "Purcell Systems designs and manufactures innovative, industry-leading, thermally managed, modular outdoor electronic equipment enclosure solutions for various applications. It is developing and manufacturing battery packs for stationary applications.",
        "founded": null,
        "employees": "37"
    },
    {
        "id": 3272,
        "name": "Re:Build Manufacturing LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://rebuildmanufacturing.com",
        "email": "",
        "phone": "603 769 3170",
        "location": {
            "city": "Nashua",
            "state": "New Hampshire",
            "zip": "03063"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Re:Build Manufacturing, American engineering and production services company, focuses on US manufacturing in sectors like Mobility and Electrification, offering design, prototyping, systems integration, battery technology and fabrication services.",
        "founded": null,
        "employees": "60"
    },
    {
        "id": 3273,
        "name": "Rivian",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://rivian.com/",
        "email": "",
        "phone": "888-748-4261",
        "location": {
            "city": "Atlanta",
            "state": "Georgia",
            "zip": "30308"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Rivian manufactures electric SUVs, pickup trucks, and delivery vans (for Amazon). It integrates Li-ion batteries with management system for reliability and performance with a growing charging network in North America.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3274,
        "name": "Saft America, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.saftbatteries.com/",
        "email": "",
        "phone": "904-861-1501",
        "location": {
            "city": "Jacksonville",
            "state": "Florida",
            "zip": "32221"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Racks / Cabinets",
            "Modules/ Arrays",
            "Packs"
        ],
        "description": "Saft America specializes in designing and manufacturing high-technology batteries such as lithium ion for industrial and defense applications, focusing on advanced energy storage and power delivery solutions.",
        "founded": null,
        "employees": "90"
    },
    {
        "id": 3275,
        "name": "Simpliphi Power, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.simpliphipower.com/",
        "email": "",
        "phone": "805-640-6700",
        "location": {
            "city": "Oxnard",
            "state": "California",
            "zip": "93030"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Racks / Cabinets",
            "Packs"
        ],
        "description": "Simpliphi Power develops vertically integrated energy storage systems.",
        "founded": null,
        "employees": "17"
    },
    {
        "id": 3276,
        "name": "Soelect, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.soelect.com/",
        "email": "",
        "phone": "336-500-8686",
        "location": {
            "city": "Greensboro",
            "state": "North Carolina",
            "zip": "27410"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Soelect provides dendrite-resistant anode technology and solid-state electrolytes for safe, high-capacity batteries, targeting diverse sectors like EVs and aerospace, with a focus on education and scalable manufacturing.",
        "founded": null,
        "employees": "20"
    },
    {
        "id": 3277,
        "name": "South 8 Technologies",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://south8.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "San Diego",
            "state": "California",
            "zip": "92109"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "South 8 Technologies develops LiGas®, which is a patented liquefied‑gas electrolyte for lithium‑ion batteries, enabling safer, ultra‑wide‑temperature (–60 °C to +60 °C) performance across defense, aerospace, automotive, and energy applications.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3278,
        "name": "Sparkz Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.sparkz.energy/",
        "email": "",
        "phone": "510-789-3410",
        "location": {
            "city": "Livermore",
            "state": "California",
            "zip": "94550"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Sparkz Inc. is an energy startup focused on developing cobalt-free, high energy-density lithium-ion batteries with a fast formation cycling process that reduces production time significantly.",
        "founded": null,
        "employees": "50"
    },
    {
        "id": 3279,
        "name": "Stafl Systems",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.staflsystems.com",
        "email": "",
        "phone": "415-228-3183",
        "location": {
            "city": "South San Francisco",
            "state": "California",
            "zip": "94080"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Stafl Systems provides battery packs, battery management systems and powertrain solutions for the aviation, marine, off-highway and defense markets.",
        "founded": null,
        "employees": "37"
    },
    {
        "id": 3281,
        "name": "Statevolt",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.statevolt.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Los Angeles",
            "state": "California",
            "zip": "90067"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Statevolt is engaged in building a technology-agnostic, a lithium- ion cell production facility in California with modular and scalable approach with the intent to build a large Gigafactories in America",
        "founded": null,
        "employees": "2500 (Planned)"
    },
    {
        "id": 3282,
        "name": "Stellantis - Samsung SDI Co Ltd",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.stellantis.com/en/news/press-releases/2022/may/stellantis-and-samsung-announce-battery-plant-in-kokomo",
        "email": "",
        "phone": "",
        "location": {
            "city": "Kokomo",
            "state": "Indiana",
            "zip": ""
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Modules/ Arrays"
        ],
        "description": "Stellantis and Samsung SDI invested more than $2.5 billion in joint venture for lithium-ion battery production plant in United States.",
        "founded": null,
        "employees": "1400 (Planned)"
    },
    {
        "id": 3283,
        "name": "Stihl",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.stihlusa.com/about-stihl/corporate/facts/",
        "email": "",
        "phone": "800-467-8445",
        "location": {
            "city": "Virginia Beach",
            "state": "Virginia",
            "zip": "23452"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Stihl is a German manufacturer of outdoor power equipment, known for chainsaws and battery-powered tools, now expanding its lithium-ion product line for professional landscaping, forestry, and residential use.",
        "founded": null,
        "employees": "2700"
    },
    {
        "id": 3284,
        "name": "Sunlight Batteries USA",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.sunlight-group.com/en/global/ecosystem/facilities/mebane/",
        "email": "",
        "phone": "888-443-8761",
        "location": {
            "city": "Mebane",
            "state": "North Carolina",
            "zip": "27302"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Sunlight Batteries USA, based in North Carolina, is the U.S. arm of Greece’s Sunlight Group, producing and selling lead‑acid and lithium‑ion batteries for industrial and energy storage markets across the Americas.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3285,
        "name": "Tenergy Corp",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.tenergy.com/",
        "email": "",
        "phone": "510-687-0388",
        "location": {
            "city": "Fremont",
            "state": "California",
            "zip": "94539"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Tenergy offers a broad product and technical capabilities in NiMH, Li-Ion, Li-Polymer, LiFePO4 and NiCd battery packs, chargers, power management and other emerging power technologies",
        "founded": null,
        "employees": "75"
    },
    {
        "id": 3286,
        "name": "TNR Technical, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.tnrtechnical.com/",
        "email": "",
        "phone": "800-346-0601",
        "location": {
            "city": "Sanford",
            "state": "Florida",
            "zip": "32771"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "TNR Technical manufactures brand-name batteries and custom battery packs.",
        "founded": null,
        "employees": "30"
    },
    {
        "id": 3287,
        "name": "Toyota",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://pressroom.toyota.com/a-fresh-coat-toyota-kentucky-invests-922-million-to-build-advanced-paint-facility/",
        "email": "",
        "phone": "502-868-2000",
        "location": {
            "city": "Georgetown",
            "state": "Kentucky",
            "zip": "40324"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Toyota is a Japanese multinational automaker leading in hybrid vehicles and expanding rapidly into battery electric vehicles, solid-state battery R&D, and global EV production through its Toyota and Lexus brands.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3288,
        "name": "Trojan Battery Company, LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.trojanbattery.com/",
        "email": "",
        "phone": "562-236-3000",
        "location": {
            "city": "Santa Fe Springs",
            "state": "California",
            "zip": "90670"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Trojan, a major lead-acid battery producer, has launched Trillium, a line of lithium-ion batteries designed for various applications, offering high efficiency, safety, and a long cycle life expectancy.",
        "founded": null,
        "employees": "1000"
    },
    {
        "id": 3289,
        "name": "Ultralife Corporation",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.ultralifecorporation.com/",
        "email": "",
        "phone": "315-332-7100",
        "location": {
            "city": "Newark",
            "state": "New York",
            "zip": "14513"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Ultralife Corporation designs and manufactures rugged batteries (both rechargeable and non‑rechargeable) and communications systems for defense, energy, medical, and industrial applications globally.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3290,
        "name": "Volkswagen Group",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.volkswagengroupofamerica.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Chattanooga",
            "state": "Tennessee",
            "zip": "37416"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Volkswagen Group is a leading global automaker accelerating its transition to electric mobility with unified prismatic cell production, battery gigafactories, and EV models across VW, Audi, Porsche, and other brands.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3292,
        "name": "Volvo",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.volvocars.com/us",
        "email": "",
        "phone": "",
        "location": {
            "city": "Greer",
            "state": "South Carolina",
            "zip": "29651"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs Modules"
        ],
        "description": "Proterra is powering the shift to electric with quiet transportation with innovative technologies, providing safer and reliable options.",
        "founded": null,
        "employees": "100"
    },
    {
        "id": 3293,
        "name": "Volvo Group",
        "twitter": "",
        "twitterUrl": "",
        "website": "volvogroup.com",
        "email": "",
        "phone": "",
        "location": {
            "city": "Greer",
            "state": "South Carolina",
            "zip": "29651"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Volvo Trucks is a global leader in heavy-duty commercial vehicles, advancing battery-electric and fuel cell truck platforms, with in-house battery pack assembly and a strong focus on transport solutions.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3294,
        "name": "Wabtec Corp.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.wabteccorp.com/",
        "email": "",
        "phone": "412-825-1000",
        "location": {
            "city": "Pittsburgh",
            "state": "Pennsylvania",
            "zip": "15212"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Wabteco, specializes in rail and transit solutions, including the development of innovative battery and energy storage technologies for rail such as FLXdrive battery-electric locomotive to lower fuel consumption.",
        "founded": null,
        "employees": "300"
    },
    {
        "id": 3296,
        "name": "Xalt Energy MI LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.xaltenergy.com/",
        "email": "",
        "phone": "989-486-8501",
        "location": {
            "city": "Midland",
            "state": "Michigan",
            "zip": "48640"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Modules/ Arrays",
            "Packs",
            "Racks / Cabinets"
        ],
        "description": "Xalt develops lithium-ion cells and packs by combining advanced chemistries, low-impedance cell design and world-class manufacturing to high-tech storage solutions in marine, commercial electric transportation, and specialty applications.",
        "founded": null,
        "employees": "52"
    },
    {
        "id": 3297,
        "name": "Yotta Energy",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.yottaenergy.com/",
        "email": "",
        "phone": "512-856-7788",
        "location": {
            "city": "Austin",
            "state": "Texas",
            "zip": "78744"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Yotta develops a range of distributed energy technologies. SolarLEAF is a lithium energy storage technology to directly integrate with solar modules with a uniquely atent heat thermal management.",
        "founded": null,
        "employees": "20"
    },
    {
        "id": 3298,
        "name": "Zakuro, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.zakurobattery.com/",
        "email": "",
        "phone": "517-488-6994",
        "location": {
            "city": "Ann Arbor",
            "state": "Michigan",
            "zip": "48103"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "Zakuro develop solid-state energy storage eliminating the flammable liquid electrolyte of lithium-ion batteries. existing manufacturing capability to lower cost and speed adoption rates, enabling batteries with a lithium metal anode.",
        "founded": null,
        "employees": "6"
    },
    {
        "id": 3299,
        "name": "Zeus Battery Products",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.zeusbatteryproducts.com/",
        "email": "",
        "phone": "877-469-4255",
        "location": {
            "city": "Bloomingdale",
            "state": "Illinois",
            "zip": "60108"
        },
        "industry": "Battery Pack Assembly",
        "products": [
            "Packs"
        ],
        "description": "ZEUS manufactures and assemble battery packs from cells with experience encompassing unique designs, including extensive experience with all chemistries such as various lithium-ion formulations, nickel metal hydride, and lead-acid .",
        "founded": null,
        "employees": "75"
    },
    {
        "id": 3033,
        "name": "6K, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.6kinc.com/",
        "email": "",
        "phone": "978-258-1645",
        "location": {
            "city": "North Andover",
            "state": "Massachusetts",
            "zip": "01845"
        },
        "industry": "Cathode Materials",
        "products": [
            "Lithium iron phosphate",
            "Nickel manganese cobalt",
            "LFP",
            "NMC"
        ],
        "description": "6k is a chemical and materials company. For batteries, it produces various chemistries of anodes, cathodes, and electrolytes. Examples include nickel-manganese-cobalt cathodes and silicone anodes.",
        "founded": null,
        "employees": "150 (Planned)"
    },
    {
        "id": 3038,
        "name": "Alionyx Energy Systems",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.alionyx.com/",
        "email": "",
        "phone": "818-292-2157",
        "location": {
            "city": "Monrovia",
            "state": "California",
            "zip": "91016"
        },
        "industry": "Cathode Materials",
        "products": [],
        "description": "Alionyx is a battery materials company that seeks to replace metal electrodes with organic redox active polymers, improving the rate capability, cost, environmental impact, and cycle life of current technologies.",
        "founded": null,
        "employees": "5"
    },
    {
        "id": 3046,
        "name": "Arcadium Lithium",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://arcadiumlithium.com/projects/",
        "email": "",
        "phone": "704-868-5400",
        "location": {
            "city": "Bessemer City",
            "state": "North Carolina",
            "zip": "28016"
        },
        "industry": "Cathode Materials",
        "products": [
            "Lithium hydroxide"
        ],
        "description": "Arcadium Lithium (2024 merger of Alkem and Livent) delivers sustainable lithium products globally, from resources in Argentina and Australia and conversion assets in the U.S., Asia, and the U.K.",
        "founded": null,
        "employees": "112"
    },
    {
        "id": 3047,
        "name": "Ascend Elements",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://ascendelements.com/",
        "email": "",
        "phone": "248-468-6766",
        "location": {
            "city": "Novi",
            "state": "Michigan",
            "zip": "48377"
        },
        "industry": "Cathode Materials",
        "products": [
            "Nickel manganese cobalt"
        ],
        "description": "Ascend Elements manufactures advanced battery materials using elements from spent lithium-ion batteries. Its Hydro-to-Cathode process transforms waste into high-value materials for EV batteries.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3049,
        "name": "BASF Toda America LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.basf.com/jp/en/who-we-are/microsites/basf-toda-battery-materials.html",
        "email": "",
        "phone": "269-962-0353",
        "location": {
            "city": "Battle Creek",
            "state": "Michigan",
            "zip": "49037"
        },
        "industry": "Cathode Materials",
        "products": [
            "Nickel cobalt aluminum oxide",
            "Nickel manganese cobalt",
            "Lithium manganese oxide"
        ],
        "description": "BASF TODA Battery Materials LLC provides cathode active materials, including Nickel Cobalt Aluminum oxide and Nickel Cobalt Manganese oxide, for lithium-ion batteries.",
        "founded": null,
        "employees": "9"
    },
    {
        "id": 3050,
        "name": "Battery Streak",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://batterystreak.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Camarillo",
            "state": "California",
            "zip": "93012"
        },
        "industry": "Cathode Materials",
        "products": [
            "nano-titanium niobium oxide",
            "nano-nickel cobalt aluminum",
            "nano-lithium vanadiumphosphate"
        ],
        "description": "Battery Streak is developing ultra fast charging using its patented nanostructure process for both the anode and cathode materials. It is using niobium in its anode and is developing a cobalt and nickel-free cathode.",
        "founded": null,
        "employees": "10"
    },
    {
        "id": 3052,
        "name": "Borman Specialty Materials",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.bormansm.com/",
        "email": "",
        "phone": "702-651-2200",
        "location": {
            "city": "Henderson",
            "state": "Nevada",
            "zip": "89015"
        },
        "industry": "Cathode Materials",
        "products": [],
        "description": "The Borman operation, a descendant of a U.S. government magnesium manufacturing plant, produces a variety of specialty materials, including electrolytic manganese dioxide.",
        "founded": null,
        "employees": "100"
    },
    {
        "id": 3053,
        "name": "Cabot Corporation",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.cabotcorp.com/",
        "email": "",
        "phone": "806-661-3100",
        "location": {
            "city": "Cabot Pampa",
            "state": "Texas",
            "zip": "79065"
        },
        "industry": "Cathode Materials",
        "products": [
            "Carbon nanotubes",
            "carbon nanostructures",
            "conductive carbon",
            "dispersions"
        ],
        "description": "Cabot Corporation is a specialty chemicals and performance materials company, providing conductive additives, fumed metal oxides for battery component stability, and aerogel to mitigate thermal runaway.",
        "founded": null,
        "employees": "50"
    },
    {
        "id": 3056,
        "name": "Controlled Thermal Resources",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.cthermal.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Imperial",
            "state": "California",
            "zip": "92251"
        },
        "industry": "Cathode Materials",
        "products": [
            "Lithium hydroxide",
            "Lithium carbonate"
        ],
        "description": "Controlled Thermal Resources is a U.S. company specializing in lithium and battery materials. Using a fully-integrated onsite process, it quickly produces battery-grade lithium in one location.",
        "founded": null,
        "employees": "50"
    },
    {
        "id": 3057,
        "name": "Element 25",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.element25.com.au/site/content/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Ascencion Parish",
            "state": "Louisiana",
            "zip": ""
        },
        "industry": "Cathode Materials",
        "products": [
            "High-purity manganese sulfate monohydrate"
        ],
        "description": "Element 25 operates its Butcherbird Manganese Project in Western Australia and is developing the capability to produce high purity manganese sulfate monohydrate for the electric vehicle market.",
        "founded": null,
        "employees": "65 (Planned)"
    },
    {
        "id": 3060,
        "name": "EVelution Energy",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.evelutionenergy.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Yuma",
            "state": "Arizona",
            "zip": "85364"
        },
        "industry": "Cathode Materials",
        "products": [
            "Cobalt sulfate"
        ],
        "description": "EVelution Energy is building the first solar-powered, carbon-neutral cobalt processing facility in the United States.",
        "founded": null,
        "employees": "60"
    },
    {
        "id": 3009,
        "name": "GKN Hoeganaes Gallatin",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.gknpm.com/en/our-businesses/gkn-hoeganaes/",
        "email": "",
        "phone": "615-451-2000",
        "location": {
            "city": "Gallatin",
            "state": "Tennessee",
            "zip": "37066"
        },
        "industry": "Cathode Materials",
        "products": [
            "Iron powder"
        ],
        "description": "GKN Hoeganaes Gallatin specializes in water-atomized iron powder production and material manufacturing for a variety of industries. With seven manufacturing facilities, it provides localized supply and support to customers worldwide.",
        "founded": null,
        "employees": "220"
    },
    {
        "id": 3062,
        "name": "Gotion",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.gotion.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Big Rapids",
            "state": "Michigan",
            "zip": ""
        },
        "industry": "Cathode Materials",
        "products": [
            "LFP Cathode"
        ],
        "description": "Based in the Silicon Valley, Gotion is an energy solutions company that aims to innovate and create the next generation of battery materials and technologies.",
        "founded": null,
        "employees": "1763 (Planned)"
    },
    {
        "id": 3067,
        "name": "ICL-IP America Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.icl-ip.com/",
        "email": "",
        "phone": "314-577-1600",
        "location": {
            "city": "St. Louis",
            "state": "Missouri",
            "zip": "63111"
        },
        "industry": "Cathode Materials",
        "products": [
            "Lithium iron phosphate"
        ],
        "description": "ICL-IP, a global specialty minerals company, is building a battery materials manufacturing plant in St. Louis expected to be one of first large-scale lithium iron phosphate (LFP) facility in U.S.",
        "founded": null,
        "employees": "150 (Planned)"
    },
    {
        "id": 3068,
        "name": "Innophos",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.innophos.com/markets/industrial-specialties/lfp-battery-materials",
        "email": "",
        "phone": "",
        "location": {
            "city": "East Windsor",
            "state": "New Jersey",
            "zip": "8512"
        },
        "industry": "Cathode Materials",
        "products": [
            "Phosphates precursors"
        ],
        "description": "Innophos, a North American phosphate manufacturer, plays a key role in the LFP and LMFP battery materials supply chain, producing purified phosphoric acid and phosphate salts for cathodes and electrolytes.",
        "founded": null,
        "employees": "800"
    },
    {
        "id": 3069,
        "name": "Ioneer",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.ioneer.com/",
        "email": "",
        "phone": "775-382-4800",
        "location": {
            "city": "Silver Peak (nearest)",
            "state": "Nevada",
            "zip": "89047"
        },
        "industry": "Cathode Materials",
        "products": [
            "Lithium hydroxide"
        ],
        "description": "Ioneer seeks to develop a U.S.-based source of lithium and boron that can be extracted in an environmentally and socially responsible manner.",
        "founded": null,
        "employees": "290 (Planned)"
    },
    {
        "id": 3070,
        "name": "L&F / Mitra Chem",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.mitrachem.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Muskegon",
            "state": "Michigan",
            "zip": ""
        },
        "industry": "Cathode Materials",
        "products": [
            "Lithium iron phosphate"
        ],
        "description": "L&F Co., Ltd. is a South Korean battery materials provider specializing in cathode active materials (CAM). Mitra Chem is a U.S.-based innovator that uses an AI-enabled platform to accelerate the development and production of iron-based cathode materials like LFP and LMFP.",
        "founded": null,
        "employees": "150 (Planned)"
    },
    {
        "id": 3071,
        "name": "Lanxess 70% Standard Lithium 30%",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.lanxess.com",
        "email": "",
        "phone": "203-573-2000",
        "location": {
            "city": "El Dorado",
            "state": "Arkansas",
            "zip": "71730"
        },
        "industry": "Cathode Materials",
        "products": [
            "Lithium carbonate"
        ],
        "description": "LANXESS plans to supply Standard Lithium with lithium-rich brine required for lithium extraction to benefit from the lithium market and strengthen the margin of its additive business.",
        "founded": null,
        "employees": "144"
    },
    {
        "id": 3072,
        "name": "LG Chem",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.lgchem.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Clarksville",
            "state": "Tennessee",
            "zip": ""
        },
        "industry": "Cathode Materials",
        "products": [
            "Nickel manganese cobalt"
        ],
        "description": "LG Chem is a science-oriented corporation working in the areas of protochemicals, advanced materials, and life sciences.",
        "founded": null,
        "employees": "860 (Planned)"
    },
    {
        "id": 3074,
        "name": "Linova Energy",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.linovaenergy.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Monrovia",
            "state": "California",
            "zip": "91016"
        },
        "industry": "Cathode Materials",
        "products": [
            "Metal-free cathodes"
        ],
        "description": "Linova Energy is developing ultra-high-energy batteries with polymer cathodes for EV, aerospace, and energy storage, using metal-free cathodes without nickel or cobalt for a sustainable, cost-effective power solution.",
        "founded": null,
        "employees": "10"
    },
    {
        "id": 3075,
        "name": "Mexichem Fluor, Inc. d/b/a Koura,",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.kouraglobal.com",
        "email": "",
        "phone": "",
        "location": {
            "city": "St. Gabriel",
            "state": "Louisiana",
            "zip": ""
        },
        "industry": "Cathode Materials",
        "products": [
            "Lithium hexafluorophosphate"
        ],
        "description": "Mexichem Fluor Inc. d/b/a Koura is a global leader in the development, manufacture, and supply of fluoroproducts, plans to build the first U.S. manufacturing plant for lithium hexafluorophosphate.",
        "founded": null,
        "employees": "200 (Planned)"
    },
    {
        "id": 3078,
        "name": "Missouri Cobalt LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.mocobalt.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Fredericktown",
            "state": "Missouri",
            "zip": "63645"
        },
        "industry": "Cathode Materials",
        "products": [],
        "description": "Missouri Cobalt is committed to producing clean and ethical battery metals that will support the advancement of America’s renewable energy resources, creating good jobs in Madison County and being a good steward of the environment.",
        "founded": null,
        "employees": "250 (Planned)"
    },
    {
        "id": 3079,
        "name": "Mitra Chem",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.mitrachem.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Mountain View",
            "state": "California",
            "zip": "94043"
        },
        "industry": "Cathode Materials",
        "products": [
            "Lithium iron phosphate"
        ],
        "description": "Mitra Chem is innovating and commercializing iron-based cathode materials to enable mass-market electrification in transportation and energy storage",
        "founded": null,
        "employees": "30"
    },
    {
        "id": 3116,
        "name": "Mitra Future Technologies, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.mitrachem.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Muskegon",
            "state": "Michigan",
            "zip": ""
        },
        "industry": "Cathode Materials",
        "products": [
            "Active materials"
        ],
        "description": "Mitra Future Technologies will establish domestic manufacturing of U.S.-made, Section 30D qualifying lithium iron phosphate cathode active materials for electric vehicle, energy storage systems, and defense applications.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3082,
        "name": "NEI Corp",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.neicorporation.com/",
        "email": "",
        "phone": "732-868-3141",
        "location": {
            "city": "Somerset",
            "state": "New Jersey",
            "zip": "08873"
        },
        "industry": "Cathode Materials",
        "products": [
            "Nickel-based cathode powders"
        ],
        "description": "NEI Corporation is a nanotechnology-focused materials company that develops and manufactures advanced cathode, anode, electrolyte, and protective coating solutions. It serves the lithium-ion and sodium-ion battery markets with both standard commercial powders and custom-synthesized materials.",
        "founded": null,
        "employees": "30"
    },
    {
        "id": 3084,
        "name": "Ni-CAT",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://nicat.co/",
        "email": "",
        "phone": "90 541 130 620 1",
        "location": {
            "city": "Dover",
            "state": "Delaware",
            "zip": "19901"
        },
        "industry": "Cathode Materials",
        "products": [
            "High Ni cathodes",
            "NMC 622",
            "811",
            "NCA for lithium ion cells"
        ],
        "description": "Ni-CAT develops advanced, high-performance, high-Ni cathode battery materials that meet industry standards, supporting the EV transition with innovative, cost-effective, and energy-dense solutions for a sustainable future.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3091,
        "name": "Primet Precision Materials",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.primetprecision.com/",
        "email": "",
        "phone": "607-277-1530",
        "location": {
            "city": "Ithaca",
            "state": "New York",
            "zip": "14850"
        },
        "industry": "Cathode Materials",
        "products": [],
        "description": "Primet Precision Materials is an advanced materials company focused on meeting society's critical need for improved battery performance in applications ranging from consumer handheld devices to electric and hybrid-electric vehicles.",
        "founded": null,
        "employees": "11"
    },
    {
        "id": 3092,
        "name": "Revex Technologies, Inc",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://revextech.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Champion",
            "state": "Michigan",
            "zip": ""
        },
        "industry": "Cathode Materials",
        "products": [
            "Nickel sulfate"
        ],
        "description": "The REV Nickel Project partners with the only operating U.S. nickel mine to convert waste streams and spent batteries into valuable critical materials.",
        "founded": null,
        "employees": "5"
    },
    {
        "id": 3098,
        "name": "South32 Hermosa, Inc",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://south32hermosa.com/en_US/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Patagonia",
            "state": "Arizona",
            "zip": ""
        },
        "industry": "Cathode Materials",
        "products": [
            "High purity manganese sulfate monohydrate (HPMSM)"
        ],
        "description": "South32’s Hermosa Project will be the only domestically mined source of high-purity manganese sulfate monohydrate for electric vehicle battery chemistries.",
        "founded": null,
        "employees": "150 (Planned)"
    },
    {
        "id": 3099,
        "name": "Sparkz Inc",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://sparkz.energy/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Sacramento",
            "state": "California",
            "zip": "95837"
        },
        "industry": "Cathode Materials",
        "products": [
            "FeCAM™ cathode material",
            "Iron Phosphate precursor"
        ],
        "description": "Sparkz is a U.S.-based battery technology startup founded in 2019. It specializes in FeCAM™, a proprietary nickel-free and cobalt-free, lithium iron phosphate cathode material.",
        "founded": null,
        "employees": "50"
    },
    {
        "id": 3101,
        "name": "Sun Chemicals",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.sunchemical.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Cincinnati",
            "state": "Ohio",
            "zip": "45232"
        },
        "industry": "Cathode Materials",
        "products": [
            "Iron oxide"
        ],
        "description": "Sun Chemical manufactures ultra-pure iron oxides tailored for the battery industry as feedstock for LFP. It also operates many U.S. chemical factories that can make cathode materials.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3106,
        "name": "The Metals Company",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.metals.co/",
        "email": "",
        "phone": "",
        "location": {
            "city": "",
            "state": "Texas",
            "zip": ""
        },
        "industry": "Cathode Materials",
        "products": [
            "Cobalt sulfate",
            "Nickel sulfate"
        ],
        "description": "The Metals Company produces metals from polymetallic rocks to power electric vehicles. Its metallurgical processes derive key battery metals while generating zero solid processing waste.",
        "founded": null,
        "employees": "150"
    },
    {
        "id": 3107,
        "name": "The Mosaic Company",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.mosaicco.com/",
        "email": "",
        "phone": "813-775-4200",
        "location": {
            "city": "Tampa",
            "state": "Florida",
            "zip": "33602"
        },
        "industry": "Cathode Materials",
        "products": [
            "Phosphoric acid"
        ],
        "description": "The Mosaic Company mines and processes phosphate and potash minerals into crop nutrients to help farmers produce more food per acre.",
        "founded": null,
        "employees": "4500"
    },
    {
        "id": 3108,
        "name": "Wildcat Discovery Technologies",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.huntenergy.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "San Diego",
            "state": "California",
            "zip": ""
        },
        "industry": "Cathode Materials",
        "products": [
            "Lithium iron phosphate",
            "Lithium manganese iron phosphate",
            "Disordered Rocksalt"
        ],
        "description": "Wildcat is engaged in battery material development, integration, and supply. A key step towards this is to produce high-performance US-made cathode material to enable widespread adoption of clean energy.",
        "founded": null,
        "employees": "65 (Planned)"
    },
    {
        "id": 3013,
        "name": "Jervois Mining",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.jervoisidahocobalt.com/",
        "email": "",
        "phone": "208-756-4578",
        "location": {
            "city": "Lemhi County",
            "state": "Idaho",
            "zip": ""
        },
        "industry": "Critical Minerals Mining",
        "products": [
            "Cobalt concentrates"
        ],
        "description": "Jervois Mining is constructing a nickel and cobalt refinery and mining company. The cobalt is refined into cobalt oxide and cobalt sulfate for use as a cathode precursor.",
        "founded": null,
        "employees": "38"
    },
    {
        "id": 3017,
        "name": "Missouri Cobalt LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.mocobalt.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Fredericktown",
            "state": "Missouri",
            "zip": "63645"
        },
        "industry": "Critical Minerals Mining",
        "products": [
            "Cobalt concentrates"
        ],
        "description": "Missouri Cobalt mines and process cobalt, nickel, and copper ore. Ores are separated using froth floatation.",
        "founded": null,
        "employees": "50"
    },
    {
        "id": 3087,
        "name": "Nth Cycle",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://nthcycle.com/",
        "email": "",
        "phone": "978-969-2321",
        "location": {
            "city": "Fairfield",
            "state": "Ohio",
            "zip": "45014"
        },
        "industry": "Critical Minerals Processing",
        "products": [
            "Nickel-Cobalt Mixed Hydroxide Precipitate"
        ],
        "description": "Nth Cycle is a metal refining technology company. It utilizes a modular electro-extraction system to recover critical metals like nickel and cobalt from battery scrap and ore, producing high-purity battery-grade materials.",
        "founded": null,
        "employees": "30"
    },
    {
        "id": 3109,
        "name": "Addionics",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.addionics.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Cupertino",
            "state": "California",
            "zip": "95014"
        },
        "industry": "Electronics",
        "products": [
            "Copper"
        ],
        "description": "Addionics provides specialized technology redesigning battery architecture. Its Smart 3D Current Collectors™ fabrication method enhances battery performance: capacity, safety, charging time, lifetime, and cost of the batteries.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3111,
        "name": "Chang Chun Petrochemical Co., Ltd.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.ccp.com.tw/ccpweb.nsf/CompanyEN?OpenAgent&CompanyName=%E9%95%B7%E6%98%A5%EF%BC%88%E7%BE%8E%E5%9C%8B%EF%BC%89%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8",
        "email": "",
        "phone": "724-719-6257",
        "location": {
            "city": "Wexford",
            "state": "Pennsylvania",
            "zip": "15090"
        },
        "industry": "Electronics",
        "products": [
            "Copper"
        ],
        "description": "Chang Chun Petrochemical Co., Ltd. operates petrochemical products production businesses. The company produces polyvinyl alcohols, butanediol, propylene alcohols, and other products such as copper foils for LIBS.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3112,
        "name": "Denkai America",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://denkaiamerica.com/",
        "email": "",
        "phone": "803-425-7900",
        "location": {
            "city": "Camden",
            "state": "South Carolina",
            "zip": "29020"
        },
        "industry": "Electronics",
        "products": [
            "Copper"
        ],
        "description": "Denkai America is a leader in the manufacture of high-quality electrodeposited copper foils for printed circuit board, industrial, and energy storage applications.",
        "founded": null,
        "employees": "75"
    },
    {
        "id": 3113,
        "name": "Gränges",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.granges.com/markets-and-products/americas/",
        "email": "",
        "phone": "615-778-2000",
        "location": {
            "city": "Newport",
            "state": "Arkansas",
            "zip": "37067"
        },
        "industry": "Electronics",
        "products": [
            "Aluminum"
        ],
        "description": "Gränges is one of the industry leaders in aluminum rolling and recycling in selected niches. It produces aluminum current collectors for LIBs.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3115,
        "name": "Lotte Aluminum Materials USA LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://lottealuminiummaterialsusa.com/",
        "email": "",
        "phone": "270-986-7148",
        "location": {
            "city": "Elizabethtown",
            "state": "Kentucky",
            "zip": "42701"
        },
        "industry": "Electronics",
        "products": [
            "Aluminum"
        ],
        "description": "Lotte Aluminum has been involved in the aluminum foil industry in Korea for a long time. In the United States, it is producing current collectors for secondary batteries such as LIBs.",
        "founded": null,
        "employees": "122"
    },
    {
        "id": 3117,
        "name": "Redwood Materials",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.redwoodmaterials.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Carson City",
            "state": "Nevada",
            "zip": "89706"
        },
        "industry": "Electronics",
        "products": [
            "Copper"
        ],
        "description": "Redwood recycles lithium-ion batteries and produces battery materials for electromobility and electrical storage systems. Redwood extracts various materials such as copper and cathode precursors for reintroduction to the supply chain.",
        "founded": null,
        "employees": "707"
    },
    {
        "id": 3301,
        "name": "Abbott Furnace Company",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://abbottfurnace.com/",
        "email": "",
        "phone": "814-781-6355",
        "location": {
            "city": "Saint Marys",
            "state": "Pennsylvania",
            "zip": "15857"
        },
        "industry": "Heat Treatment",
        "products": [
            "Continuous belt industrial furnaces"
        ],
        "description": "Abbott Furnace Company creates belt furnaces, pusher furnaces, roller hearth kilns, and lab furnaces for processing battery materials and manufacturing battery components.",
        "founded": null,
        "employees": "53"
    },
    {
        "id": 3302,
        "name": "Across International",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.acrossinternational.com/",
        "email": "",
        "phone": "888-988-0899",
        "location": {
            "city": "Livingston",
            "state": "New Jersey",
            "zip": "07039"
        },
        "industry": "Heat Treatment",
        "products": [
            "Lab furnaces",
            "Vacuum ovens",
            "Forced-air ovens"
        ],
        "description": "Across International is an industry leader in the manufacture of heat treatment, laboratory, and material processing equipment with recent emphasis on lithium-ion battery materials.",
        "founded": null,
        "employees": "25"
    },
    {
        "id": 3305,
        "name": "Adphos North America, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.adphos.com/",
        "email": "",
        "phone": "262-790-9100",
        "location": {
            "city": "Brookfield",
            "state": "Wisconsin",
            "zip": "53005"
        },
        "industry": "Heat Treatment",
        "products": [
            "Ovens - Drying",
            "Curing and Heating"
        ],
        "description": "Adphos designs, manufactures, markets, services and supports a wide range of standard and custom solutions based on adphosNIR® which reduces the time and space for thermal processes and increases efficiency.",
        "founded": null,
        "employees": "7"
    },
    {
        "id": 3310,
        "name": "ASI, Division of Thermal Technologies, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.asitti.com/",
        "email": "",
        "phone": "920-468-5477",
        "location": {
            "city": "Green Bay",
            "state": "Wisconsin",
            "zip": "54311"
        },
        "industry": "Heat Treatment",
        "products": [
            "Drying and curing equipment"
        ],
        "description": "ASI specializes in custom drying, curing, and cooling solutions for the converting, roll-to-roll, and continuous process industries. Its forced air convection systems employ a variety of transport and heating methods.",
        "founded": null,
        "employees": "40"
    },
    {
        "id": 3340,
        "name": "HED International",
        "twitter": "",
        "twitterUrl": "",
        "website": "http://www.hed.com/site/",
        "email": "",
        "phone": "609-466-1900",
        "location": {
            "city": "Ringoes",
            "state": "New Jersey",
            "zip": "08551"
        },
        "industry": "Heat Treatment",
        "products": [
            "Ovens"
        ],
        "description": "HED leads in continuous thick film/tape and web coating systems for electronic components and advanced materials producing millions of square inches of thin tape cast ceramic, metal and composite products.",
        "founded": null,
        "employees": "15"
    },
    {
        "id": 3354,
        "name": "Marion Process Solutions",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.marionsolutions.com/",
        "email": "",
        "phone": "319-377-6371",
        "location": {
            "city": "Marion",
            "state": "Iowa",
            "zip": "52302"
        },
        "industry": "Heat Treatment",
        "products": [
            "Ovens"
        ],
        "description": "Marion Process Solutions is the leading global manufacturer of mixers, blenders, thermal processing equipment, and size reduction equipment.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3397,
        "name": "Onejoon",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://onejoon.com/",
        "email": "",
        "phone": "678-551-6558",
        "location": {
            "city": "Roswell",
            "state": "Georgia",
            "zip": "30075"
        },
        "industry": "Heat Treatment",
        "products": [
            "Industrial Furnaces & Powder Process Equipment"
        ],
        "description": "ONEJOON is a global leader in high-temperature industrial furnace technology and automated material handling.",
        "founded": null,
        "employees": "10"
    },
    {
        "id": 3374,
        "name": "Resodyn Acoustic Mixers",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.resodynmixers.com/",
        "email": "",
        "phone": "406-497-5333",
        "location": {
            "city": "Butte",
            "state": "Montana",
            "zip": "59701"
        },
        "industry": "Heat Treatment",
        "products": [
            "Mixing",
            "blending",
            "drying",
            "and dispersion equipment"
        ],
        "description": "Resodyn serves industrial mixing and processing industry via manufacturing, distribution, and direct sale of mixing equipment that mixes materials such as lithium-ion battery slurry with high dispersion and quality.",
        "founded": null,
        "employees": "30"
    },
    {
        "id": 3376,
        "name": "ROSS Mixers",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.mixers.com/",
        "email": "",
        "phone": "631-234-0500",
        "location": {
            "city": "Hauppage",
            "state": "New York",
            "zip": "11788"
        },
        "industry": "Heat Treatment",
        "products": [
            "Mixing",
            "blending",
            "drying and dispersion equipment"
        ],
        "description": "Ross mixing, blending, drying and dispersion equipment are used in many industries such manufacturing lithium-ion cells. Available in either standard or custom designs, to meet specific processing needs.",
        "founded": null,
        "employees": "50"
    },
    {
        "id": 3385,
        "name": "Swindell Dressler International",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.swindelldressler.com/",
        "email": "",
        "phone": "724-316-6060",
        "location": {
            "city": "Coraopolis",
            "state": "Pennsylvania",
            "zip": "15108"
        },
        "industry": "Heat Treatment",
        "products": [
            "Calcining & Sintering Kilns for cathode and anode active materials"
        ],
        "description": "Swindell Dressler is an engineering and manufacturing company that provides turnkey, integrated heat-treatment systems globally for clients producing ceramics and other advanced materials.",
        "founded": null,
        "employees": "70"
    },
    {
        "id": 3429,
        "name": "Battery Technology, Inc. (BTI)",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.batterytech.com/",
        "email": "",
        "phone": "(626) 336-6878",
        "location": {
            "city": "City of Industry",
            "state": "California",
            "zip": "91745"
        },
        "industry": "Industrial Supply",
        "products": [
            "Replacement Batteries for Consumer electronics"
        ],
        "description": "Battery Technology, Inc. supplies replacement batteries and AC power adapters for notebooks, digital cameras, PDAs, mobile devices, and APC UPS systems globally.",
        "founded": null,
        "employees": "100"
    },
    {
        "id": 3430,
        "name": "MSE Supplies LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.msesupplies.com/",
        "email": "",
        "phone": "520-789-6673",
        "location": {
            "city": "Tucson",
            "state": "Arizona",
            "zip": "85706"
        },
        "industry": "Industrial Supply",
        "products": [
            "Cathode",
            "Anode",
            "Electrolyte",
            "Current collectors"
        ],
        "description": "MSE Supplies offers advanced materials such those for lithium-ion batteries, laboratory equipment, and analytical services, focusing on quality and value to support global scientific and engineering innovations.",
        "founded": null,
        "employees": "13"
    },
    {
        "id": 3434,
        "name": "Univar Solutions, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.univarsolutions.com/",
        "email": "",
        "phone": "331-777-6000",
        "location": {
            "city": "Downders Grove",
            "state": "Illinois",
            "zip": "60515"
        },
        "industry": "Industrial Supply",
        "products": [
            "Chemicals",
            "Material supplier"
        ],
        "description": "Univar Solutions is a distributor of specialty chemicals and ingredients used in lithium-ion material processing and offers the latest ingredients with sustainable solutions.",
        "founded": null,
        "employees": "5000"
    },
    {
        "id": 3000,
        "name": "Aether",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.aetherbio.com/",
        "email": "",
        "phone": "415-316-3591",
        "location": {
            "city": "Menlo Park",
            "state": "California",
            "zip": "94025"
        },
        "industry": "Lithium Mining",
        "products": [
            "Lithium"
        ],
        "description": "Aether engineers enzymes to make novel products. It recently developed a cheaper, faster and more sustainable direct lithium extraction technology using robotics, machine learning, and synthetic biology.",
        "founded": null,
        "employees": "40"
    },
    {
        "id": 3001,
        "name": "American Lithium",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://americanlithiumcorp.com/tlc-lithium-project/",
        "email": "",
        "phone": "604-428-6126",
        "location": {
            "city": "Tonopah",
            "state": "Nevada",
            "zip": "89049"
        },
        "industry": "Lithium Mining",
        "products": [
            "Lithium Sedimentary"
        ],
        "description": "American Lithium develops large-scale lithium projects in Nevada and Peru, utilizing sustainable mining and extraction methods to supply battery-grade lithium for the EV and energy storage sectors.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3002,
        "name": "Anson Resources",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.ansonresources.com/",
        "email": "",
        "phone": "702 759 0182",
        "location": {
            "city": "Moab",
            "state": "Utah",
            "zip": "84532"
        },
        "industry": "Lithium Mining",
        "products": [
            "Lithium Carbonate",
            "Lithium Brine"
        ],
        "description": "Anson Resources is an ASX-listed mineral resources company developing the Paradox Lithium Project in Utah, aiming to become a significant supplier of lithium carbonate for the global EV battery market.",
        "founded": null,
        "employees": "5"
    },
    {
        "id": 3048,
        "name": "Ascend Elements",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://ascendelements.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Covington",
            "state": "Georgia",
            "zip": "30014"
        },
        "industry": "Lithium Mining",
        "products": [
            "Lithium carbonate or hydroxide"
        ],
        "description": "Ascend Elements manufactures advanced battery materials using elements from spent lithium-ion batteries. Its Hydro-to-Cathode process transforms waste into high-value materials for EV batteries.",
        "founded": null,
        "employees": "180 (Planned)"
    },
    {
        "id": 3003,
        "name": "BHE Renewables",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.bherenewables.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Calipatria",
            "state": "California",
            "zip": "92233"
        },
        "industry": "Lithium Mining",
        "products": [
            "Lithium"
        ],
        "description": "BHE Renewables owns and operates renewable energy projects, including geothermal facilities, and is collaborating with Occidental to develop lithium extraction technologies.",
        "founded": null,
        "employees": "240"
    },
    {
        "id": 3004,
        "name": "Chevron USA",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.chevron.com",
        "email": "",
        "phone": "925-842-1000",
        "location": {
            "city": "",
            "state": "Texas",
            "zip": ""
        },
        "industry": "Lithium Mining",
        "products": [
            "Direct Lithium Extraction (DLE)"
        ],
        "description": "Chevron is a multinational energy corporation that has recently entered the domestic lithium sector to support U.S. energy security and expand its new energies business.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3005,
        "name": "Compass Minerals",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.compassminerals.com/",
        "email": "",
        "phone": "801-731-3100",
        "location": {
            "city": "Ogden",
            "state": "Utah",
            "zip": "84404"
        },
        "industry": "Lithium Mining",
        "products": [
            "Lithium"
        ],
        "description": "Compass Minerals is a leading provider of essential minerals and is expanding its portfolio to include lithium extraction.",
        "founded": null,
        "employees": "400"
    },
    {
        "id": 3006,
        "name": "Controlled Thermal Resources",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.cthermal.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Imperial",
            "state": "California",
            "zip": "92251"
        },
        "industry": "Lithium Mining",
        "products": [
            "Lithium carbonate - crude"
        ],
        "description": "Controlled Thermal Resource Holdings, Inc. is an American company advancing the development of lithium and battery material products and renewable energy.",
        "founded": null,
        "employees": "50"
    },
    {
        "id": 3007,
        "name": "Energy Source Minerals",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.esminerals.com/atlis",
        "email": "",
        "phone": "",
        "location": {
            "city": "Imperial County",
            "state": "California",
            "zip": ""
        },
        "industry": "Lithium Mining",
        "products": [
            "Lithium"
        ],
        "description": "EnergySource Minerals is a California-based company focused on its lithium project, Project ATLiS, with environmental targets to decrease land use, water depletion, and CO2 emissions.",
        "founded": null,
        "employees": "62 (Planned)"
    },
    {
        "id": 3008,
        "name": "Exxon Mobil",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://corporate.exxonmobil.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Magnolia",
            "state": "Arkansas",
            "zip": "71753"
        },
        "industry": "Lithium Mining",
        "products": [
            "Lithium Brine",
            "Lithium Carbonate"
        ],
        "description": "ExxonMobil is an international energy company developing a large-scale lithium business by leveraging subsurface expertise and Direct Lithium Extraction (DLE) to supply domestic battery-grade materials for electric vehicles.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3010,
        "name": "In-Medix, Inc",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.exideindustries.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "",
            "state": "Nevada",
            "zip": ""
        },
        "industry": "Lithium Mining",
        "products": [
            "Lithium"
        ],
        "description": "Exide Industries is India's largest manufacturer of storage batteries, with a strategy to expand into lithium-ion cell production and secure raw material supply chains.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3011,
        "name": "Ioneer",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.ioneer.com/rhyolite-ridge-project/",
        "email": "",
        "phone": "725-212-4060",
        "location": {
            "city": "Esmeralda County",
            "state": "Nevada",
            "zip": "89010"
        },
        "industry": "Lithium Mining",
        "products": [
            "Lithium Carbonate & Boric acid"
        ],
        "description": "Ioneer Ltd is an Australian-headquartered critical minerals developer focused on supplying battery-grade lithium and boron to the EV supply chain.",
        "founded": null,
        "employees": "600"
    },
    {
        "id": 3014,
        "name": "Jindalee Lithium",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.jindaleelithium.com",
        "email": "",
        "phone": "",
        "location": {
            "city": "McDermitt",
            "state": "Nevada",
            "zip": ""
        },
        "industry": "Lithium Mining",
        "products": [
            "Lithium"
        ],
        "description": "Jindalee Lithium aims to develop the company’s flagship McDermitt Lithium Project, supplying a resource vital to the electrification of America’s automotive industry.",
        "founded": null,
        "employees": "5"
    },
    {
        "id": 3015,
        "name": "Lilac Solutions, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.lilacsolutions.com/",
        "email": "",
        "phone": "401-714-7906",
        "location": {
            "city": "Box Elder County",
            "state": "Utah",
            "zip": "94607"
        },
        "industry": "Lithium Mining",
        "products": [
            "Lithium",
            "Lithium Carbonate"
        ],
        "description": "Lilac Solutions is a company that plans to extract lithium from brine for use in lithium-ion batteries.",
        "founded": null,
        "employees": "250 (Planned)"
    },
    {
        "id": 3018,
        "name": "NeoLith Energy",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.slb.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Silver Peak",
            "state": "Nevada",
            "zip": "89047"
        },
        "industry": "Lithium Mining",
        "products": [
            "Lithium"
        ],
        "description": "NeoLith Energy, a division of Schlumberger, focuses on developing sustainable lithium extraction technologies to meet growing demand for battery materials.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3020,
        "name": "Noram Lithium Corp",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.noramlithiumcorp.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Clayton Valley",
            "state": "Nevada",
            "zip": "89047"
        },
        "industry": "Lithium Mining",
        "products": [
            "Lithium carbonate - crude"
        ],
        "description": "Noram Lithium Corp. is a startup lithium mine. It refines the ore into lithium carbonate for use as a cathode precursor.",
        "founded": null,
        "employees": "300"
    },
    {
        "id": 3021,
        "name": "Rio Tinto",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.borax.com/",
        "email": "",
        "phone": "760-762-7000",
        "location": {
            "city": "Boron",
            "state": "California",
            "zip": "93516"
        },
        "industry": "Lithium Mining",
        "products": [
            "Lithium Carbonate"
        ],
        "description": "Rio Tinto is a global mining company developing lithium production from waste rock at its Boron, California, operation.",
        "founded": null,
        "employees": "1000"
    },
    {
        "id": 3023,
        "name": "Standard Lithium",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.standardlithium.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Smackover",
            "state": "Arkansas",
            "zip": ""
        },
        "industry": "Lithium Mining",
        "products": [
            "Lithium carbonate",
            "Battery grade"
        ],
        "description": "SWA Lithium aims to be one of the first commercial-scale, direct lithium extraction companies in the Smackover Formation, producing up to 45,000 tonne per year of battery-quality lithium carbonate.",
        "founded": null,
        "employees": "90 (Planned)"
    },
    {
        "id": 3100,
        "name": "Stardust Power",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://stardust-power.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Muskogee",
            "state": "Oklahoma",
            "zip": ""
        },
        "industry": "Lithium Mining",
        "products": [
            "Lithium carbonate or hydroxide"
        ],
        "description": "Stardust Power is a development-stage company focused on creating a strategically central battery-grade lithium refinery to serve the growing U.S. market.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3024,
        "name": "Summit Nanotech",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.summitnanotech.com/",
        "email": "",
        "phone": "860-595-7221",
        "location": {
            "city": "Lafayette",
            "state": "Colorado",
            "zip": "80026"
        },
        "industry": "Lithium Mining",
        "products": [
            "Lithium extraction services"
        ],
        "description": "Summit Nanotech is a cleantech firm specializing in direct lithium extraction technology to enhance lithium access and support the global energy transition sustainably.",
        "founded": null,
        "employees": "100"
    },
    {
        "id": 3025,
        "name": "Surge Battery Metals",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://surgebatterymetals.com/",
        "email": "",
        "phone": "604-662-8184",
        "location": {
            "city": "Elko",
            "state": "Nevada",
            "zip": "89801"
        },
        "industry": "Lithium Mining",
        "products": [
            "Lithium Carbonate"
        ],
        "description": "Surge Battery Metals focuses on exploring clean, high-grade lithium energy metals in Nevada, United States.",
        "founded": null,
        "employees": "15"
    },
    {
        "id": 3104,
        "name": "TerraVolta",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.terravolta.com/",
        "email": "",
        "phone": "713-936-0274",
        "location": {
            "city": "Houston",
            "state": "Texas",
            "zip": "77019"
        },
        "industry": "Lithium Mining",
        "products": [
            "Lithium carbonate or hydroxide"
        ],
        "description": "TerraVolta builds a reliable supply chain by delivering high-quality lithium (precursors) for electric mobility across industries. It extracts lithium from brine, treat , dry, purify to Li carbonate and hydroxide.",
        "founded": null,
        "employees": "5"
    },
    {
        "id": 3026,
        "name": "TerraVolta Resources",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.terravolta.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Texarkana",
            "state": "Texas",
            "zip": ""
        },
        "industry": "Lithium Mining",
        "products": [
            "Lithium carbonate",
            "Battery grade"
        ],
        "description": "TerraVolta Resources plans to design, build, and operate a commercial-scale lithium extraction and refining facility to produce battery-grade lithium from domestic brine resources.",
        "founded": null,
        "employees": "8"
    },
    {
        "id": 3027,
        "name": "Titan Lithium",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://titanlithiuminc.com/titan-lithium",
        "email": "",
        "phone": "702-595-2247",
        "location": {
            "city": "Las Vegas",
            "state": "Nevada",
            "zip": "89118"
        },
        "industry": "Lithium Mining",
        "products": [
            "Lithium"
        ],
        "description": "Titan Lithium is a project of China Dongsheng International Lithium, a Nevada-based lithium explorer and developer advancing its lithium project in Nye County, Nevada.",
        "founded": null,
        "employees": "200"
    },
    {
        "id": 3031,
        "name": "Venari Minerals",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://venariminerals.com/project-nevada-lithium-usa",
        "email": "",
        "phone": "",
        "location": {
            "city": "Currant",
            "state": "Nevada",
            "zip": "89049"
        },
        "industry": "Lithium Mining",
        "products": [
            "Lithium carbonate"
        ],
        "description": "Venari Minerals (formerly Astute Metals) is an Australian explorer rapidly advancing critical mineral assets in Nevada.",
        "founded": null,
        "employees": "3"
    },
    {
        "id": 3312,
        "name": "ATS Industrial Automation",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://atsindustrialautomation.com/",
        "email": "",
        "phone": "614-888-2344",
        "location": {
            "city": "Lewis Center",
            "state": "Ohio",
            "zip": "43035"
        },
        "industry": "Manufacturing Automation",
        "products": [
            "Battery module assembly and testing lines",
            "Automation Systems",
            "Robotic Systems"
        ],
        "description": "ATS Industrial Automation provides automated battery assembly and testing solutions for electric vehicles.",
        "founded": null,
        "employees": "140"
    },
    {
        "id": 3313,
        "name": "Automation EZ LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "http://www.automationez.com/",
        "email": "",
        "phone": "520-400-9496",
        "location": {
            "city": "Tucson",
            "state": "Arizona",
            "zip": "85741"
        },
        "industry": "Manufacturing Automation",
        "products": [
            "Pneumatic"
        ],
        "description": "Automation EZTM core competency is design, integration, and fabrication of Industrial automation machinery and semi-automation equipment, with recent attention to lithium-ion battery manufacturing.",
        "founded": null,
        "employees": "133"
    },
    {
        "id": 3334,
        "name": "Festo",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.festo.com/us/en/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Madison",
            "state": "Ohio",
            "zip": "45039"
        },
        "industry": "Manufacturing Automation",
        "products": [
            "Machine and Automation"
        ],
        "description": "Festo is a global leader in automation technology. From the cell to module production and insertion of the battery systems, it has suitable automation solutions for manufacturers.",
        "founded": null,
        "employees": "150"
    },
    {
        "id": 3338,
        "name": "Frontier",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.frontiercoating.com/",
        "email": "",
        "phone": "763-755-7744",
        "location": {
            "city": "Ramsey",
            "state": "Minnesota",
            "zip": "55303"
        },
        "industry": "Manufacturing Automation",
        "products": [
            "Coaters"
        ],
        "description": "Frontier and DeltaModTech provide numerous solutions for coating and converting delicate substrates, including automation, laser etching, and advanced assembly processes, especially in lithium ion cell manufacturing.",
        "founded": null,
        "employees": "115"
    },
    {
        "id": 3343,
        "name": "Honeywell International",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.honeywell.com/us/en",
        "email": "",
        "phone": "877-841-2840",
        "location": {
            "city": "Charlotte",
            "state": "North Carolina",
            "zip": "28202"
        },
        "industry": "Manufacturing Automation",
        "products": [
            "Electrode Metrology",
            "Manufacturing and Safety sensors",
            "Automation hardware",
            "Actuators",
            "Robotics",
            "Formation equipment"
        ],
        "description": "Honeywell delivers industry-specific solutions that include integrated manufacturing systems for the lithium-ion battery industry, aerospace products and services, and building control equipment",
        "founded": null,
        "employees": "1300"
    },
    {
        "id": 3357,
        "name": "MiSUMi",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://us.misumi-ec.com/",
        "email": "",
        "phone": "800-681-7475",
        "location": {
            "city": "Schaumburg",
            "state": "Illinois",
            "zip": "6013"
        },
        "industry": "Manufacturing Automation",
        "products": [
            "automation",
            "press die",
            "and plastic mold applications"
        ],
        "description": "MISUMI offers a significant number of products and configurations for diverse industries, from automotive to semiconductor, as a top engineering resource. This includes automation equipment.",
        "founded": null,
        "employees": "5000"
    },
    {
        "id": 3370,
        "name": "POLYTEC USA Corp",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://polytec.bmgroup.com/",
        "email": "",
        "phone": "713 376-5796",
        "location": {
            "city": "Houston",
            "state": "Texas",
            "zip": "77080"
        },
        "industry": "Manufacturing Automation",
        "products": [
            "Automation Systems",
            "Robotic Systems"
        ],
        "description": "Polytec specializes in mechatronics, intralogistics, and renewable solutions, offering custom automation and robotics systems, ensuring innovation, reliability, safety, and sustainability.",
        "founded": null,
        "employees": "30"
    },
    {
        "id": 3379,
        "name": "Schenck Process, LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.schenckprocess.com/",
        "email": "",
        "phone": "816-891-9300",
        "location": {
            "city": "Kansas City",
            "state": "Missouri",
            "zip": "64153"
        },
        "industry": "Manufacturing Automation",
        "products": [],
        "description": "Schenck specializes in precision bulk material handling and automation technology - pneumatic conveyors, loss in weight feeders, screeners, and classifiers - for many industries including lithium-ion cell manufacturing.",
        "founded": null,
        "employees": "113"
    },
    {
        "id": 3382,
        "name": "SMC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.smcusa.com/",
        "email": "",
        "phone": "800-762-7621",
        "location": {
            "city": "Noblesville",
            "state": "Indiana",
            "zip": "46060"
        },
        "industry": "Manufacturing Automation",
        "products": [
            "Automation machinery"
        ],
        "description": "SMC Corporation of America leads in pneumatic technology, supporting global automation with a 30% market share and comprehensive services.",
        "founded": null,
        "employees": "869"
    },
    {
        "id": 3390,
        "name": "Unit X Labs",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.unitxlabs.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Santa Clara",
            "state": "California",
            "zip": "95054"
        },
        "industry": "Manufacturing Automation",
        "products": [
            "AI-powered battery manufacturing"
        ],
        "description": "UnitX transforms visual inspection lines using AI, deep learning, and robotics, enhancing precision and efficiency while improving safety and cycle time for lithium-ion battery manufacturing.",
        "founded": null,
        "employees": "100"
    },
    {
        "id": 3300,
        "name": "24M Technologies",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.24-m.com/",
        "email": "",
        "phone": "617-553-1012",
        "location": {
            "city": "Cambridge",
            "state": "Massachusetts",
            "zip": "02139"
        },
        "industry": "Manufacturing Equipment",
        "products": [],
        "description": "24M Technologies specializes in developing advanced lithium-ion batteries with a unique design and manufacturing, aiming to improve energy density, safety, and cost-effectiveness for various applications.",
        "founded": null,
        "employees": "110"
    },
    {
        "id": 3303,
        "name": "ACS",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.acscm.com/",
        "email": "",
        "phone": "608-663-1590",
        "location": {
            "city": "Verona",
            "state": "Wisconsin",
            "zip": "53593"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Test Cells"
        ],
        "description": "ACS designs, engineers, and builds integrated equipment, controls, and facilities for industry leaders, maximizing efficiency through innovative systems.",
        "founded": null,
        "employees": "115 (Planned)"
    },
    {
        "id": 3304,
        "name": "Admiral Instruments",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.admiralinstruments.com/",
        "email": "",
        "phone": "480-256-8706",
        "location": {
            "city": "Tempe",
            "state": "Arizona",
            "zip": "85281"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Cell tester"
        ],
        "description": "Admiral Instruments focuses on providing precision instruments for measuring and testing the performance and safety of lithium-ion batteries and other electrochemical devices.",
        "founded": null,
        "employees": "30"
    },
    {
        "id": 3306,
        "name": "AM Batteries",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://am-batteries.com/",
        "email": "",
        "phone": "978-488-1632",
        "location": {
            "city": "Billerica",
            "state": "Massachusetts",
            "zip": "01821"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Coater",
            "dry battery electrode production"
        ],
        "description": "AM Batteries ‘powder to electrode’ method is creating a more energy-efficient electrode manufacturing process.",
        "founded": null,
        "employees": "50"
    },
    {
        "id": 3307,
        "name": "Anguil Environmental Systems, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://anguil.com/",
        "email": "",
        "phone": "414-365-6400",
        "location": {
            "city": "Milwaukee",
            "state": "Wisconsin",
            "zip": "53223"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Air Pollution Control Technologies",
            "Wastewater Treatment Systems",
            "Energy Recovery Equipment"
        ],
        "description": "Anguil Environmental offers global solutions for air and water pollution in the battery production cycle, specializing in oxidizers for VOCs, Hazardous Air Pollutants, and NOX, along with turnkey wastewater treatments.",
        "founded": null,
        "employees": "10"
    },
    {
        "id": 3308,
        "name": "Applied Spectra",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://appliedspectra.com/",
        "email": "",
        "phone": "510-657-7679",
        "location": {
            "city": "West Sacramento",
            "state": "California",
            "zip": "95605"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "LA and LIBS analytical instruments"
        ],
        "description": "Applied Spectra provides laser ablation and laser-induced breakdown spectroscopy instruments for elemental and isotopic analysis.",
        "founded": null,
        "employees": "30"
    },
    {
        "id": 3309,
        "name": "Arbin Instruments",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.arbin.com/",
        "email": "",
        "phone": "979-690-2751",
        "location": {
            "city": "College Station",
            "state": "Texas",
            "zip": "77845"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Cell tester",
            "Module/pack tester"
        ],
        "description": "Arbin Instruments designs and manufactures testing equipment for evaluating the performance and lifespan of all batteries including lithium-ion batteries and other energy storage systems.",
        "founded": null,
        "employees": "67"
    },
    {
        "id": 3311,
        "name": "Associated Environmental Systems",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.associatedenvironmentalsystems.com/",
        "email": "",
        "phone": "978-772-0022",
        "location": {
            "city": "Acton",
            "state": "Massachusetts",
            "zip": "01720"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Environmental test chambers for battery testing"
        ],
        "description": "AES provides environmental test chambers for lithium-ion battery testing.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3314,
        "name": "B&P Littleford",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.bplittleford.com/",
        "email": "",
        "phone": "989-757-1300",
        "location": {
            "city": "Saginaw",
            "state": "Michigan",
            "zip": "48601"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Vacuum dryers"
        ],
        "description": "B&P Littleford designs and builds a wide spectrum of mixing, drying, compounding, reacting, extracting and centrifugal separation equipment for many different manufacturing applications.",
        "founded": null,
        "employees": "986"
    },
    {
        "id": 3315,
        "name": "BioLogic",
        "twitter": "",
        "twitterUrl": "",
        "website": "www.biologic.net",
        "email": "",
        "phone": "865-769-3800",
        "location": {
            "city": "Knoxville",
            "state": "Tennessee",
            "zip": "37923"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Testing equipment"
        ],
        "description": "BioLogic designs and manufactures precise testing equipment and software for the battery industry, including modular potentiostat/galvanostat systems and battery cyclers with Native environmental impact statement for energy storage R&D.",
        "founded": null,
        "employees": "12"
    },
    {
        "id": 3316,
        "name": "Bitrode Corporation",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.bitrode.com/",
        "email": "",
        "phone": "636-343-6112",
        "location": {
            "city": "St. Louis",
            "state": "Missouri",
            "zip": "63123"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Cell tester",
            "Module/pack tester"
        ],
        "description": "Bitrode Corporation specializes in manufacturing testing equipment for production and laboratory settings, focusing on lithium-ion batteries and energy storage systems' performance and reliability evaluation.",
        "founded": null,
        "employees": "46"
    },
    {
        "id": 3317,
        "name": "Black Bros Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.blackbros.com/",
        "email": "",
        "phone": "800-252-2568",
        "location": {
            "city": "High Point",
            "state": "North Carolina",
            "zip": "27263"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Coaters"
        ],
        "description": "Black Bros. designs and manufactures premier roll coating and laminating equipment with recent focus on lithium ion battery manufacturing",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3318,
        "name": "Bry-Air Inc",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.bryair.com/",
        "email": "",
        "phone": "740-965-2974",
        "location": {
            "city": "Sunbury",
            "state": "Ohio",
            "zip": "43074"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Dehumidification systems for battery dry rooms"
        ],
        "description": "Bry-Air Inc. is a provider of dehumidification solutions critical for lithium-ion battery manufacturing.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3320,
        "name": "Busch Vacuum Solutions",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.buschvacuum.com/",
        "email": "",
        "phone": "757-463-7800",
        "location": {
            "city": "Virginia Beach",
            "state": "Virginia",
            "zip": "23452"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Vacuum pumps",
            "Other vacuum systems"
        ],
        "description": "Busch Vacuum Solutions provides vacuum technology for lithium-ion battery production, enhancing efficiency and safety in processes like electrolyte filling and degassing.",
        "founded": null,
        "employees": "500"
    },
    {
        "id": 3319,
        "name": "Bühler Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.buhlergroup.com/global/en/locations/USA-Plymouth-Minneapolis-MN.html",
        "email": "",
        "phone": "763-847 9900",
        "location": {
            "city": "Plymouth",
            "state": "Minnesota",
            "zip": "55441"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Cell manufacturing",
            "Continuous electrode mass mixing with twin screw extruders",
            "Powder handling",
            "and Dosing"
        ],
        "description": "Bühler offers solutions for cell manufacturing, including continuous electrode mass mixing with twin screw extruders, powder handling, and dosing supporting both wet and dry formulations for processing various battery materials.",
        "founded": null,
        "employees": "4"
    },
    {
        "id": 3321,
        "name": "Carl Zeiss Industrial Quality Solutions",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.zeiss.com",
        "email": "",
        "phone": "800-327-9735",
        "location": {
            "city": "Maple Grove",
            "state": "Minnesota",
            "zip": "55369"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Computed Tomography"
        ],
        "description": "Carl Zeiss Industrial Quality Solutions provides quality assurance equipment and solutions for battery safety and performance, offering advanced microscopy, computed tomography, and measurement systems for battery manufacturing.",
        "founded": null,
        "employees": "200"
    },
    {
        "id": 3322,
        "name": "Chroma ATE Inc",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.chromaate.com/",
        "email": "",
        "phone": "949-421-0355",
        "location": {
            "city": "Irvine",
            "state": "California",
            "zip": "92618"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Cell cycler",
            "Formation",
            "Cell validation Tester",
            "Module/pack tester"
        ],
        "description": "Chroma ATE Inc specializes in providing testing and measurement solutions for lithium-ion batteries, ensuring their quality, performance, and safety through a range of testing equipment and services.",
        "founded": null,
        "employees": "15"
    },
    {
        "id": 3323,
        "name": "CSM Products, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.csm.de/us/",
        "email": "",
        "phone": "248-836-4995",
        "location": {
            "city": "Auburn Hills",
            "state": "Michigan",
            "zip": "48326"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Electrical systems"
        ],
        "description": "CSM Products uses its advanced measurement technology, to constantly setting new technological standards, driving innovation in vehicle development and actively supporting customers in shaping the mobility transformation.",
        "founded": null,
        "employees": "11"
    },
    {
        "id": 3324,
        "name": "Davis-Standard",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://davis-standard.com/",
        "email": "",
        "phone": "315-598-7121",
        "location": {
            "city": "Fulton",
            "state": "New York",
            "zip": "13069"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Separator film and coating machines"
        ],
        "description": "Davis-Standard is a manufacturer of equipment to produce and coat films and foils including battery separator film and coating machines for lithium ion batteries.",
        "founded": null,
        "employees": "100"
    },
    {
        "id": 3325,
        "name": "Digatron Power Electronics",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.digatron.com/",
        "email": "",
        "phone": "203-446-8000",
        "location": {
            "city": "Shelton",
            "state": "Connecticut",
            "zip": "06484"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Cell tester",
            "Slitters",
            "Stacker",
            "Welders",
            "Electrolyte fill",
            "Winder"
        ],
        "description": "Digatron specializes in providing testing and simulation solutions for lithium-ion batteries, formation systems, ensuring their performance and reliability through a range of testing equipment and services.",
        "founded": null,
        "employees": "12"
    },
    {
        "id": 3326,
        "name": "Donaldson Company",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.donaldson.com/en-us/industrial-dust-fume-mist/",
        "email": "",
        "phone": "619-481-5765",
        "location": {
            "city": "Bloomington",
            "state": "Minnesota",
            "zip": "55431"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Dust Collection",
            "Fume Collection"
        ],
        "description": "Donaldson Torit Division provides industrial dust collection systems and air filtration equipment. Its equipment improves air quality and safety in industrial environments by capturing and filtering dust particles.",
        "founded": null,
        "employees": "20"
    },
    {
        "id": 3327,
        "name": "Dorey Converting Systems (DCS) USA",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.converting-systems.com/",
        "email": "",
        "phone": "330-685-6320",
        "location": {
            "city": "Morrisville",
            "state": "North Carolina",
            "zip": "27560"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Rotary die cutting",
            "Laminating machine"
        ],
        "description": "Dorey Converting Systems, is a leader in rotary die-cutting with commitment to innovation, precision, and quality",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3328,
        "name": "Dukosi Ltd",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.dukosi.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Orion Charter Township",
            "state": "Michigan",
            "zip": "48360"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Battery sensor - wireless communication"
        ],
        "description": "Dukosi innovates battery technology with a unique chip-on-cell approach, enhancing performance, safety, and efficiency for electric vehicles, energy storage, and industrial transport.",
        "founded": null,
        "employees": "20"
    },
    {
        "id": 3329,
        "name": "Dürr Megtec",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.durr-megtec.com/",
        "email": "",
        "phone": "920-336-5716",
        "location": {
            "city": "De Pere",
            "state": "Wisconsin",
            "zip": "54156"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Coaters",
            "Solvent recovery"
        ],
        "description": "Dürr Megtec provides solutions for lithium-ion battery manufacturing, including coaters and solvent recovery systems, control systems, and thermal processing equipment.",
        "founded": null,
        "employees": "230"
    },
    {
        "id": 3330,
        "name": "EaglePicher Technologies LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.eaglepicher.com/",
        "email": "",
        "phone": "417-623-8000",
        "location": {
            "city": "Joplin",
            "state": "Missouri",
            "zip": "64801"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Charger"
        ],
        "description": "EaglePicher Technologies specializes in designing and manufacturing advanced lithium-ion batteries for various applications, including defense, aerospace, and medical devices, ensuring high-performance and reliability.",
        "founded": null,
        "employees": "750"
    },
    {
        "id": 3331,
        "name": "Edwards Vacuum",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.edwardsvacuum.com/",
        "email": "",
        "phone": "503-629-2501",
        "location": {
            "city": "Hillsboro",
            "state": "Oregon",
            "zip": "97124"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Vacuum pumps",
            "Other vacuum systems"
        ],
        "description": "Edwards provides advanced vacuum and abatement technology, collaborating with customers to create innovative, environmentally responsible products.",
        "founded": null,
        "employees": "250"
    },
    {
        "id": 3332,
        "name": "ENTEK",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.entek.com/extrusion-solutions//",
        "email": "",
        "phone": "541-259-1068",
        "location": {
            "city": "Lebanon",
            "state": "Oregon",
            "zip": "97355"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Extruders",
            "turn-key separator plants"
        ],
        "description": "ENTEK specializes in providing equipment and solutions for lithium-ion battery manufacturing, including extrusion systems for separator production, contributing to battery manufacturing efficiency and quality.",
        "founded": null,
        "employees": "170"
    },
    {
        "id": 3333,
        "name": "Excelitas Technologies",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.noblelight.com/en/etc/home_etc/home_noblelight.html",
        "email": "",
        "phone": "301-990-8700",
        "location": {
            "city": "Gaithersburg",
            "state": "Maryland",
            "zip": "20878"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "UV and IR light for electrode production",
            "electrical isolation and protective coating."
        ],
        "description": "Heraeus Noblelight specializes in providing advanced UV and infrared radiation solutions used in lithium-ion battery manufacturing processes for electrode production, electrical isolation, and protective coating.",
        "founded": null,
        "employees": "150"
    },
    {
        "id": 3335,
        "name": "FlackTek",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://flacktek.com/",
        "email": "",
        "phone": "864-895-7441",
        "location": {
            "city": "Landrum",
            "state": "South Carolina",
            "zip": "29356"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Mixers"
        ],
        "description": "FlackTek™ designs, customizes, and manufactures mixers out of a state-of-the-art facility in Colorado. It also provides supplies, accessories, training and service for the machines from R&D through industrial production",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3336,
        "name": "Flexo Concepts",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.flexoconcepts.com/",
        "email": "",
        "phone": "508-830-9506",
        "location": {
            "city": "Plymouth",
            "state": "Massachusetts",
            "zip": "02360"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "High Performance Doctor Blades"
        ],
        "description": "Flexo Concepts has been a leader in doctor blade innovation. It can provide both standard and custom engineered solutions for your application.",
        "founded": null,
        "employees": "20"
    },
    {
        "id": 3337,
        "name": "Forge Nano",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.forgenano.com/",
        "email": "",
        "phone": "720-259-8579",
        "location": {
            "city": "Thornton",
            "state": "Colorado",
            "zip": "80241"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Coaters"
        ],
        "description": "Forge Nano is a materials science company using their Atomic Armor nanocoating technology to drive manufacturing innovation and enhance product performance, contributing to sustainability.",
        "founded": null,
        "employees": "50"
    },
    {
        "id": 3339,
        "name": "GI Tech",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.gitech.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Schaumburg",
            "state": "Illinois",
            "zip": "60173"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Coating and laminating machines for making li-ion electrodes"
        ],
        "description": "GI Tech provides ultra-precision parts processing through ceaseless technological development, continuous customer satisfaction, and expansion of production facilities. For LIBs, it offers coating and laminating machines for making li-ion electrodes",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3341,
        "name": "Herrmann Ultrasonics, Inc",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.herrmannultrasonics.com/en-us/",
        "email": "",
        "phone": "630-626-1626",
        "location": {
            "city": "Bartlett",
            "state": "Illinois",
            "zip": "60103"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Welders"
        ],
        "description": "Herrmann Ultrasonics is a leading global provider of ultrasonic welding solutions, delivering innovative and precise welding technology that enhances product quality and manufacturing efficiency for the battery and other industries.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3342,
        "name": "Hilton International Industries, Co.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.hiltonind.com/",
        "email": "",
        "phone": "941-371-2600",
        "location": {
            "city": "Sarasota",
            "state": "Florida",
            "zip": "34232"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Winder"
        ],
        "description": "Hilton has a strong winding machine heritage for aluminum, copper and lithium metal foils and coated substrates. Its offerings include winding and stacking machines for lithium-ion battery manufacturing.",
        "founded": null,
        "employees": "108"
    },
    {
        "id": 3344,
        "name": "IAC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://iac-intl.com/industries-served/battery-manufacturing-storage/",
        "email": "",
        "phone": "913-384-5511",
        "location": {
            "city": "Overland Park",
            "state": "Kansas",
            "zip": "66202"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Air pollution control systems",
            "pneumatic conveying systems",
            "bulk storage and dry material handling systems",
            "rotary dryers",
            "automated controls",
            "and dry sorbent injection systems."
        ],
        "description": "IAC is a fully integrated contractor and OEM of air pollution control systems, pneumatic conveying systems, bulk storage and dry material handling systems, rotary dryers, and dry sorbent injection systems.",
        "founded": null,
        "employees": "200"
    },
    {
        "id": 3345,
        "name": "Innovative Machine Corp.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.innovativemach.com/",
        "email": "",
        "phone": "205-856-4100",
        "location": {
            "city": "Birmingham",
            "state": "Alabama",
            "zip": "35217"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Calendaring",
            "Coaters",
            "Slitters"
        ],
        "description": "Innovative Machine designs and manufactures custom calendar, coating, laminating, and slitting machines for plastic films and foils. Its machines are used in may industries including battery manufacturing.",
        "founded": null,
        "employees": "28"
    },
    {
        "id": 3346,
        "name": "Intecells",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.intecells.com/",
        "email": "",
        "phone": "248-817-5911",
        "location": {
            "city": "Troy",
            "state": "Michigan",
            "zip": "48084"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Coaters"
        ],
        "description": "Intecells provides cold plasma coating technology that is flexible, accessible, and sustainable for lithium ion battery manufacturing.",
        "founded": null,
        "employees": "10"
    },
    {
        "id": 3348,
        "name": "Jakertech LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.jakertechusa.com/",
        "email": "",
        "phone": "612-801-8099",
        "location": {
            "city": "Fridley",
            "state": "Minnesota",
            "zip": "55432"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Process and equipment for injection molded solid state batteries"
        ],
        "description": "Jakertech provides Injection molding equipment for solid state batteries using polymers.",
        "founded": null,
        "employees": "5"
    },
    {
        "id": 3349,
        "name": "KMC Global, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.kmcorpglobal.com/battery-recycling/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Kalamazoo",
            "state": "Michigan",
            "zip": "49048"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Tubular Drag Conveyors",
            "Bulk Bag Loading & Unloading",
            "Hydrometallurgical Wastewater Recycling",
            "Rubber belt & Drag Conveyors",
            "Density Separation and Screening Conveyors",
            "Screw conveyors"
        ],
        "description": "KMC Global provides equipment that meets clients’ needs (e.g., battery recycling). The equipment includes conveyors, material screeners, metal crushers, bulk bag loading and unloading, hydrometallurgical, and wastewater recycling.",
        "founded": null,
        "employees": "51"
    },
    {
        "id": 3350,
        "name": "Leybold USA",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.leybold.com/en-us",
        "email": "",
        "phone": "",
        "location": {
            "city": "Export",
            "state": "Pennsylvania",
            "zip": "15632"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Vacuum solutions and services. supports manufacturers in the development of battery technologies"
        ],
        "description": "Leybold helps manufacture state-of-the-art, innovative vacuum pumps, components, and standardized and fully customized vacuum solutions more precisely, economically, innovatively and, last but not least, more sustainably.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3351,
        "name": "Liminal Insights",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.liminalinsights.com/",
        "email": "",
        "phone": "510-298-7541",
        "location": {
            "city": "Emeryville",
            "state": "California",
            "zip": "94608"
        },
        "industry": "Manufacturing Equipment",
        "products": [],
        "description": "Laminal solution is EchoStat®, an advanced inspection and analytics platform that provides visibility inside batteries throughout the manufacturing process allowing identification flaws in real time.",
        "founded": null,
        "employees": "30"
    },
    {
        "id": 3352,
        "name": "Maccor, Inc",
        "twitter": "",
        "twitterUrl": "",
        "website": "http://www.maccor.com",
        "email": "",
        "phone": "918-446-1874",
        "location": {
            "city": "Tulsa",
            "state": "Oklahoma",
            "zip": "74107"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Formation",
            "aging",
            "and cycling testers for cells",
            "modules",
            "and packs",
            "EV and ES battery testers"
        ],
        "description": "Maccor is a U.S. manufacturer of equipment used in the battery industry for formation, aging, and cycling of cells, modules, and packs in both production and laboratory environments.",
        "founded": null,
        "employees": "130"
    },
    {
        "id": 3353,
        "name": "Marion Process Solutions",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.marionsolutions.com/",
        "email": "",
        "phone": "319-377-6371",
        "location": {
            "city": "Marion",
            "state": "Iowa",
            "zip": "52302"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Mixers"
        ],
        "description": "Marion Process Solutions is the leading global manufacturer of mixers, blenders, thermal processing equipment, and size reduction equipment.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3355,
        "name": "Maxcess",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.maxcessintl.com/",
        "email": "",
        "phone": "405-755-1600",
        "location": {
            "city": "Oklahoma City",
            "state": "Oklahoma",
            "zip": "73114"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Test Cells and Coaters"
        ],
        "description": "Maxcess manufactures web guiding, tension control, slitting, die cutting, winding, precision rolls and vision components and machine integration for roll-to-roll converting and manufacturing processes.",
        "founded": null,
        "employees": "200"
    },
    {
        "id": 3356,
        "name": "Midtronics",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.midtronics.com/",
        "email": "",
        "phone": "630-323-2800",
        "location": {
            "city": "Willowbrook",
            "state": "Illinois",
            "zip": "60527"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Charger",
            "EV/HEV Battery Service Tool",
            "Module Balancing"
        ],
        "description": "Midtronics provides battery management systems and solutions for service and maintenance of lithium-ion batteries for electrified vehicles.",
        "founded": null,
        "employees": "150"
    },
    {
        "id": 3431,
        "name": "MSE Supplies LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.msesupplies.com/",
        "email": "",
        "phone": "520-789-6673",
        "location": {
            "city": "Tucson",
            "state": "Arizona",
            "zip": "85706"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Battery manufacturing and testing equipment"
        ],
        "description": "MSE Supplies offers advanced materials such those for lithium-ion batteries, laboratory equipment, and analytical services, focusing on quality and value to support global scientific and engineering innovations.",
        "founded": null,
        "employees": "13"
    },
    {
        "id": 3358,
        "name": "MTI Corporation",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.mtixtl.com/",
        "email": "",
        "phone": "510-525-3070",
        "location": {
            "city": "Richmond",
            "state": "California",
            "zip": "94804"
        },
        "industry": "Manufacturing Equipment",
        "products": [],
        "description": "MTI Corporation is a provider of equipment and materials for lithium-ion battery research and production, offering tools and materials to support battery development and manufacturing.",
        "founded": null,
        "employees": "22"
    },
    {
        "id": 3359,
        "name": "Muhlbauer, Inc",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.muehlbauer.de/",
        "email": "",
        "phone": "757-947-2820",
        "location": {
            "city": "Newport News",
            "state": "Virginia",
            "zip": "23603"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Cell Notching Modules",
            "Cell Stacking Modules",
            "Tab Pre-welding",
            "CT-Scan",
            "Lid Welding"
        ],
        "description": "Muhlbauer is a leading global provider of turnkey solutions for battery cell production, including equipment for all phases from notching to filling, as well as machinery for cell connecting boards.",
        "founded": null,
        "employees": "50"
    },
    {
        "id": 3360,
        "name": "Nederman-LCI",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.lcicorp.com/",
        "email": "",
        "phone": "704-486-8440",
        "location": {
            "city": "Charlotte",
            "state": "North Carolina",
            "zip": "28216"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Laboratory Equipment",
            "Extruders",
            "Granulators",
            "Marumerizer Spheronizer",
            "Circle Feeder",
            "Circle Feeder for Dust Collectors (CFD)"
        ],
        "description": "LCI provides process technology, expertise, and support for powder processing and evaporation equipment, including evaporators, drying systems, extrusion and spherization systems, mixers, feeders, and pelletizers.",
        "founded": null,
        "employees": "60"
    },
    {
        "id": 3361,
        "name": "Nederman-Mikropul",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.nedermanmikropul.com/en/",
        "email": "",
        "phone": "704-859-2723",
        "location": {
            "city": "Charlotte",
            "state": "North Carolina",
            "zip": "28216"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Other - Air pollution control"
        ],
        "description": "Mikropul provides air filtration solutions for keeping air clean in the manufacturing many industries including battery production.",
        "founded": null,
        "employees": "150"
    },
    {
        "id": 3362,
        "name": "NETZSCH Grinding & Dispersing",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://grinding.netzsch.com/en",
        "email": "",
        "phone": "610-363-8010",
        "location": {
            "city": "Exton",
            "state": "Pennsylvania",
            "zip": "19341"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Wet grinders",
            "dry grinders",
            "planetary mixers",
            "high speed dispersers",
            "inline mixers/ dispersers",
            "homogenizers"
        ],
        "description": "NETZSCH Grinding & Dispersing provides many wet and dry grinding systems for different grinding as well as mixers, kneaders or dispersers for low or high-viscosity products for many applications.",
        "founded": null,
        "employees": "65"
    },
    {
        "id": 3363,
        "name": "NETZSCH Pumps & Systems",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://pumps-systems.netzsch.com/en-US",
        "email": "",
        "phone": "610-363-8010",
        "location": {
            "city": "Exton",
            "state": "Pennsylvania",
            "zip": "19341"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Lithium-ion battery gas detector"
        ],
        "description": "NETZSCH Pumps & Systems provides positive displacement pumps complex fluid handling in various industries including batteries.",
        "founded": null,
        "employees": "72"
    },
    {
        "id": 3364,
        "name": "Nexceris LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://nexceris.com/",
        "email": "",
        "phone": "614-842-6606",
        "location": {
            "city": "Lewis Center",
            "state": "Ohio",
            "zip": "43035"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Process controls for cathodes"
        ],
        "description": "Nexceris specializes in research, development, and manufacturing of advanced lithium-ion cathode materials, enhancing their performance and offering a Li-ion Tamer's lithium-ion gas detection solutions for safety.",
        "founded": null,
        "employees": "65"
    },
    {
        "id": 3365,
        "name": "Nordson Corp.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.nordson.com/",
        "email": "",
        "phone": "760-431-1919",
        "location": {
            "city": "Carlsbad",
            "state": "California",
            "zip": "92010"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Dispensing and Coating equipment"
        ],
        "description": "Nordson Corporation provides precision equipment for lithium-ion battery manufacturing, such as dispensing and coating for enhancing production speed and performance.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3366,
        "name": "Nuburu, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.nuburu.net/",
        "email": "",
        "phone": "720-767-1400",
        "location": {
            "city": "Centennial",
            "state": "Colorado",
            "zip": "80112"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Welders"
        ],
        "description": "NUBURU provides blue lasers for battery manufacturing, enabling high-speed, defect-free welding of various metals (copper, aluminum, nickel, stainless steel), increasing throughput, improving yields, and maintaining quality.",
        "founded": null,
        "employees": "30"
    },
    {
        "id": 3367,
        "name": "Omni Metalcraft",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://omni.com/",
        "email": "",
        "phone": "989-368-7000",
        "location": {
            "city": "Alpena",
            "state": "Michigan",
            "zip": "49707"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Material handling equipment - chain",
            "belt and roller conveyors"
        ],
        "description": "Omni Metalcraft has been supplying material handling equipment and systems to customers in a wide variety of industries, including the circular economy for over 40 years.",
        "founded": null,
        "employees": "15"
    },
    {
        "id": 3368,
        "name": "PEC North America",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.peccorp.com/",
        "email": "",
        "phone": "561-962-2824",
        "location": {
            "city": "Boca Raton",
            "state": "Florida",
            "zip": "33431"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Turnkey systems for electrolyte filling and cell finishing lines"
        ],
        "description": "PEC produces and services turn-key systems for cell manufacturing and testing.",
        "founded": null,
        "employees": "10"
    },
    {
        "id": 3369,
        "name": "Plasmatreat North America",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.plasmatreat.com/en/",
        "email": "",
        "phone": "847-783-0622",
        "location": {
            "city": "Elgin",
            "state": "Illinois",
            "zip": "60124"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Other - surface treatment"
        ],
        "description": "Plasmatreat provides innovative solutions for the pretreatment and activation of substrate surfaces such electrode manufacturing. Its Openair-Plasma™technology is used in EV battery manufacturing",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3371,
        "name": "Precision Roll Grinders",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.precisionrollgrinders.com/",
        "email": "",
        "phone": "610-395-6966",
        "location": {
            "city": "Allentown",
            "state": "Pennsylvania",
            "zip": "18106"
        },
        "industry": "Manufacturing Equipment",
        "products": [],
        "description": "PRG provides large roll and cylindrical shaft grinding equipment for various industries including lithium ion cell manufacturing. Its precision grinding, inspection, and repair services improve the precision of critical processes.",
        "founded": null,
        "employees": "60"
    },
    {
        "id": 3372,
        "name": "Pred Materials International, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.predmaterials.com/",
        "email": "",
        "phone": "917-957-4762",
        "location": {
            "city": "New York",
            "state": "New York",
            "zip": "10165"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Welders",
            "Winder",
            "Electrolyte fill",
            "Stacker",
            "Mixers",
            "Sealing machines"
        ],
        "description": "Pred Materials International distributes high quality, high value-added specialty chemicals, components, and manufacturing tools and equipment including mixers, stacking, sealing, and welding machines, manufactured by world's advanced companies.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3373,
        "name": "Qlar",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.qlar.com",
        "email": "",
        "phone": "816-891-9300",
        "location": {
            "city": "Kansas City",
            "state": "Missouri",
            "zip": "64153"
        },
        "industry": "Manufacturing Equipment",
        "products": [],
        "description": "Qlar's weighing and feeding systems offer solutions for the requirements and processes through every step of the production process, from lithium carbonate to lithium hydroxide, from graphite powder to nickel powder.",
        "founded": null,
        "employees": "113"
    },
    {
        "id": 3375,
        "name": "Ross Engineering",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.mixers.com/",
        "email": "",
        "phone": "631-234-0500",
        "location": {
            "city": "Savannah",
            "state": "Georgia",
            "zip": "31405"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Mixers",
            "Blenders",
            "Dispersers",
            "Dryers"
        ],
        "description": "Ross mixing, blending, drying and dispersion equipment are used in many industries such manufacturing lithium-ion cells. Available in either standard or custom designs, to meet specific processing needs.",
        "founded": null,
        "employees": "50"
    },
    {
        "id": 3377,
        "name": "Ross SysCon",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.rosssyscon.com/",
        "email": "",
        "phone": "631-234-0500",
        "location": {
            "city": "Savannah",
            "state": "Georgia",
            "zip": "31405"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Process control"
        ],
        "description": "ROSS SysCon offers extensive experience and equipment in process controls such as temperature, flow, vacuum / pressure and pH.",
        "founded": null,
        "employees": "10"
    },
    {
        "id": 3378,
        "name": "SAUERESSIG North America, Inc",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.saueressig.com/en/",
        "email": "",
        "phone": "336-395-6200",
        "location": {
            "city": "Burlington",
            "state": "North Carolina",
            "zip": "27215"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Cutting and embossing tools"
        ],
        "description": "SAUERESSIG Engineering provides advanced specialty equipment and turnkey solutions for the production of electrodes for lithium-ion batteries and capacitors.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3380,
        "name": "Scientific Climate Systems",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.scs-usa.com/",
        "email": "",
        "phone": "844-399-2884",
        "location": {
            "city": "Houston",
            "state": "Texas",
            "zip": "77041"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Humidity control and Dry rooms"
        ],
        "description": "Scientific Climate designs and manufacture custom low-humidity control chambers for lithium battery research and production, crucial for moisture-sensitive environments.",
        "founded": null,
        "employees": "15"
    },
    {
        "id": 3381,
        "name": "Securaplane Technologies Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.securaplane.com/",
        "email": "",
        "phone": "520-297-0844",
        "location": {
            "city": "Oro Valley",
            "state": "Arizona",
            "zip": "85755"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Battery Management Units"
        ],
        "description": "Securaplane offers lithium-ion systems for aerospace with longer aircraft range and capacity. It combines advanced features like small cell clusters, integrated monitoring, and enhanced power management for extended battery life.",
        "founded": null,
        "employees": "100"
    },
    {
        "id": 3383,
        "name": "Sonobond Ultrasonics",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.sonobondultrasonics.com/",
        "email": "",
        "phone": "610-696-4710",
        "location": {
            "city": "West Chester",
            "state": "Pennsylvania",
            "zip": "19380"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Welders"
        ],
        "description": "Sonobond Ultrasonics, Inc. is a leading provider of ultrasonic metal welding and textile bonding equipment for industries around the world.",
        "founded": null,
        "employees": "30"
    },
    {
        "id": 3432,
        "name": "Sovema Global Services, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.sovemagroup.com/",
        "email": "",
        "phone": "636-343-6112",
        "location": {
            "city": "St. Louis",
            "state": "Missouri",
            "zip": "63123"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Electrode Notching Machines",
            "Stacking Machines",
            "Winding Machines",
            "Tab Welding Machines",
            "Cell Packaging Machines",
            "Electrolyte Filling Machines"
        ],
        "description": "Sovema Group provides technology solutions for battery manufacturing and testing, offering four brands (Sovema, Solith, Sovel, Bitrode) and handling projects from lab lines to mass production.",
        "founded": null,
        "employees": "2"
    },
    {
        "id": 3384,
        "name": "Spraying Systems Co",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.spray.com/",
        "email": "",
        "phone": "630-665-5000",
        "location": {
            "city": "Glendale Heights",
            "state": "Illinois",
            "zip": "60139"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Spray nozzles"
        ],
        "description": "Spraying Systems Co. is the leading manufacturer of spray nozzles and systems, providing solutions that optimize operations and promote manufacturing practices globally.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3433,
        "name": "Stat Peel Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.statpeel.com/",
        "email": "",
        "phone": "801-308-8387",
        "location": {
            "city": "Sandy",
            "state": "Utah",
            "zip": "84092"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Aerosol measurement equipment"
        ],
        "description": "Stat Peel creates advanced personal solutions to monitor exposure to airborne materials to help you avoid contamination and risk.",
        "founded": null,
        "employees": "1"
    },
    {
        "id": 3386,
        "name": "Titan Advanced Energy Solutions",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.titanaes.com/",
        "email": "",
        "phone": "978-414-5538",
        "location": {
            "city": "Salem",
            "state": "Massachusetts",
            "zip": "01970"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "ultrasound system",
            "anomaly detection"
        ],
        "description": "Titan developed a high-resolution ultrasound system for real-time cell inspection technology that sees inside a cell during manufacturing process, instantly mapping its morphology and identifying manufacturing anomalies",
        "founded": null,
        "employees": "57"
    },
    {
        "id": 3387,
        "name": "Tokuden, Inc",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.tokuden.com/english",
        "email": "",
        "phone": "770-449-3625",
        "location": {
            "city": "Norcross",
            "state": "Georgia",
            "zip": "30071"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Induction Heated Jacket Rolls for battery press/calender applications"
        ],
        "description": "Tokuden is a manufacturer of specialized induction heating equipment, including precision heated rolls critical for the calendering process in lithium-ion battery electrode manufacturing.",
        "founded": null,
        "employees": "2"
    },
    {
        "id": 3388,
        "name": "Trane",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.trane.com/commercial/north-america/us/en/products-systems/chillers/chiller-heater-systems.html",
        "email": "",
        "phone": "704-895-4000",
        "location": {
            "city": "Davidson",
            "state": "North Carolina",
            "zip": "28036"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Thermal Energy Storage"
        ],
        "description": "Trane's thermal energy storage, like a battery for heating and cooling, offers affordable, flexible solutions, improving energy efficiency and ROI with recent tax incentives.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3389,
        "name": "TRUMPF",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.trumpf.com/en_US/",
        "email": "",
        "phone": "734-454-7200",
        "location": {
            "city": "Plymouth",
            "state": "Michigan",
            "zip": "48170"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Machine tools and lasers"
        ],
        "description": "TRUMPF is a technology and market leader in highly versatile machine tools for sheet metal processing and in the field of industrial lasers.",
        "founded": null,
        "employees": "1200"
    },
    {
        "id": 3391,
        "name": "Van Dyk Recycling Solutions",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://vdrs.com/",
        "email": "",
        "phone": "203-967-1100",
        "location": {
            "city": "Norwalk",
            "state": "Connecticut",
            "zip": "6854"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Equipment from Reckelberg Environmental Technologies (RET) to recycle lithium-ion batteries of all kinds and scrap fractions from the battery production"
        ],
        "description": "Van Dyk Recycling Solutions leads the North American market with over 340 materials recovery facilities and 2,400 recycling and sorting systems installed to date.",
        "founded": null,
        "employees": "100"
    },
    {
        "id": 3392,
        "name": "VIVET Technology Inc",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://vivettechnology.com/",
        "email": "",
        "phone": "313-742-748",
        "location": {
            "city": "Dearborn",
            "state": "Michigan",
            "zip": "48126"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Repeating Layer Process (RLP) for battery module assembly"
        ],
        "description": "Vivet Technology is revolutionizing manufacturing with its patented Repeating Layer Process, a parallel processing model that improves efficiency and scalability for battery module assembly and other industries.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3393,
        "name": "WAM USA, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://waminc.com/en-US/WAMUS/home",
        "email": "",
        "phone": "770-339-6767",
        "location": {
            "city": "Saginaw",
            "state": "Texas",
            "zip": "76131"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Screw conveyors",
            "mixers",
            "dust collectors",
            "silo tops",
            "butterfly valves",
            "rotary valves"
        ],
        "description": "WAM Inc. provides its customers with attractively priced products in industrial quality, tailored to the needs of a variety of industries.",
        "founded": null,
        "employees": "5"
    },
    {
        "id": 3394,
        "name": "Waters TA Instruments",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.tainstruments.com/",
        "email": "",
        "phone": "801-763-1500",
        "location": {
            "city": "Lindon",
            "state": "Utah",
            "zip": "84042"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Thermal analysis",
            "Mechanical testing",
            "Welders"
        ],
        "description": "Waters TA Instruments provides testing equipment for thermal analysis, rheology, microcalorimetry, and mechanical analysis instrumentation.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3395,
        "name": "Waygate Technologies USA",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.bakerhughes.com/waygate-technologies",
        "email": "",
        "phone": "",
        "location": {
            "city": "Houston",
            "state": "Texas",
            "zip": "77073"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "X-ray and computed tomography (CT) equipment"
        ],
        "description": "Waygate Technologies, a Baker Hughes business, is an industrial inspection solutions company and the world leader in non-destructive testing.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3396,
        "name": "Xerion Advanced Battery Corp",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://xerionbattery.com/",
        "email": "",
        "phone": "937-733-8976",
        "location": {
            "city": "Kettering",
            "state": "Ohio",
            "zip": "45420"
        },
        "industry": "Manufacturing Equipment",
        "products": [
            "Electrode processing"
        ],
        "description": "Xerion Advanced Battery Corp develops lower-cost, higher-performance lithium-ion batteries using patented DirectPlate and StructurePore technologies for innovative refining and electrode architecture.",
        "founded": null,
        "employees": "53"
    },
    {
        "id": 3398,
        "name": "A&D Technology",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.aanddtech.com/",
        "email": "",
        "phone": "734-973-1111",
        "location": {
            "city": "Ann Arbor",
            "state": "Michigan",
            "zip": "48108"
        },
        "industry": "Manufacturing Software",
        "products": [
            "Battery management system - hardware-in-loop test system",
            "iTest"
        ],
        "description": "A&D Technology specializes in hardware-in-the-loop simulation systems to simulate batteries to minimize BMS development time; it tests, collects, organizes and safely stores data from battery testing equipment.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3399,
        "name": "ACCURE Battery Intelligence, Inc. - Boston",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.accure.net/",
        "email": "",
        "phone": "+49-241-96073-400",
        "location": {
            "city": "Boston",
            "state": "Massachusetts",
            "zip": "2108"
        },
        "industry": "Manufacturing Software",
        "products": [
            "Battery analytics software to monitor the health of Li-ion batteries."
        ],
        "description": "Accure Battery Intelligence Inc. provides battery analytics software to monitor the health of Li-ion batteries.",
        "founded": null,
        "employees": "3"
    },
    {
        "id": 3400,
        "name": "ACCURE Battery Intelligence, Inc. - Bozeman",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.accure.net/",
        "email": "",
        "phone": "+49-241-96073-400",
        "location": {
            "city": "Bozeman",
            "state": "Montana",
            "zip": "59771"
        },
        "industry": "Manufacturing Software",
        "products": [
            "Battery analytics software to monitor the health of Li-ion batteries."
        ],
        "description": "Accure Battery Intelligence Inc. provides battery analytics software to monitor the health of Li-ion batteries.",
        "founded": null,
        "employees": "1"
    },
    {
        "id": 3427,
        "name": "Aionics, Inc",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://aionics.io/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Palo Alto",
            "state": "California",
            "zip": "94302"
        },
        "industry": "Manufacturing Software",
        "products": [
            "AI-driven battery material design and consulting services"
        ],
        "description": "Aionics uses AI and simulation to design advanced materials for clean energy applications.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3401,
        "name": "Analog Devices",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.analog.com/en/index.html",
        "email": "",
        "phone": "",
        "location": {
            "city": "Wilmington",
            "state": "Massachusetts",
            "zip": "01887"
        },
        "industry": "Manufacturing Software",
        "products": [
            "Software for BMS"
        ],
        "description": "Analog Devices makes a wide range of battery management products including chargers, fuel gauges, and smart battery components.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3402,
        "name": "Ansys",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.ansys.com/",
        "email": "",
        "phone": "724-820-3700",
        "location": {
            "city": "Canonsburg",
            "state": "Pennsylvania",
            "zip": "15317"
        },
        "industry": "Manufacturing Software",
        "products": [
            "Battery",
            "Electric vehicle simulation and design"
        ],
        "description": "ANSYS offers numerous simulation tools for simulating EV and battery performance, development, and deployment.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3403,
        "name": "Ascend Analytics",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.ascendanalytics.com/",
        "email": "",
        "phone": "303-415-1400",
        "location": {
            "city": "Boulder",
            "state": "Colorado",
            "zip": "80302"
        },
        "industry": "Manufacturing Software",
        "products": [
            "BatterySIMM Val",
            "SmartBidder"
        ],
        "description": "Ascend Analytics advanced software and consulting services capture the new dynamics of energy markets, from real-time operations to long-term planning, to optimize electric power supply resources.",
        "founded": null,
        "employees": "40"
    },
    {
        "id": 3426,
        "name": "BattGenie Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://battgenie.life/",
        "email": "",
        "phone": "206-395-5087",
        "location": {
            "city": "Seattle",
            "state": "Washington",
            "zip": "98105"
        },
        "industry": "Manufacturing Software",
        "products": [
            "Battery management system"
        ],
        "description": "BattGenie Inc. develops software to improve lithium-ion battery performance and safety.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3404,
        "name": "Bitrode Corporation",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.bitrode.com/",
        "email": "",
        "phone": "636-343-6112",
        "location": {
            "city": "St. Louis",
            "state": "Missouri",
            "zip": "63123"
        },
        "industry": "Manufacturing Software",
        "products": [
            "VisuaLCN"
        ],
        "description": "Bitrode offers VisuaLCN as a laboratory software to control battery lab test instruments and analyze results.",
        "founded": null,
        "employees": "92"
    },
    {
        "id": 3405,
        "name": "Bloomy",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.bloomy.com/",
        "email": "",
        "phone": "860-298-9925",
        "location": {
            "city": "South Windsor",
            "state": "Connecticut",
            "zip": "06074"
        },
        "industry": "Manufacturing Software",
        "products": [
            "Battery simulator",
            "Battery management system - hardware-in-loop test system",
            "Battery management system - validation system",
            "Battery management system - manufacturing test system"
        ],
        "description": "Bloomy is a leader in automated test, data acquisition, and control systems",
        "founded": null,
        "employees": "36"
    },
    {
        "id": 3406,
        "name": "Byterat",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.byterat.io/",
        "email": "",
        "phone": "",
        "location": {
            "city": "San Francisco",
            "state": "California",
            "zip": "94108"
        },
        "industry": "Manufacturing Software",
        "products": [
            "Enterprise Battery Intelligence"
        ],
        "description": "Byterat is a modern data platform for battery companies, purpose-built to manage, visualize, and analyze battery data securely at scale.",
        "founded": null,
        "employees": "10"
    },
    {
        "id": 3407,
        "name": "Comsol, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.comsol.com/",
        "email": "",
        "phone": "781-273-3322",
        "location": {
            "city": "Burlington",
            "state": "Massachusetts",
            "zip": "01803"
        },
        "industry": "Manufacturing Software",
        "products": [
            "Battery design module"
        ],
        "description": "COMSOL software simulates real-world designs, devices, and processes with multiphysics.",
        "founded": null,
        "employees": "20"
    },
    {
        "id": 3408,
        "name": "Currents",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://currents.market/",
        "email": "",
        "phone": "",
        "location": {
            "city": "San Francisco",
            "state": "California",
            "zip": "94133"
        },
        "industry": "Manufacturing Software",
        "products": [
            "End of Life Battery Management"
        ],
        "description": "Currents is a B2B marketplace designed for buyers and sellers of retired electric vehicle batteries for vehicle equipment original manufacturers, second life integrators, auto recyclers, and dismantlers.",
        "founded": null,
        "employees": "10"
    },
    {
        "id": 3409,
        "name": "Dassault Systemes",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.3ds.com/",
        "email": "",
        "phone": "781-810-3000",
        "location": {
            "city": "Waltham",
            "state": "Massachusetts",
            "zip": "02451"
        },
        "industry": "Manufacturing Software",
        "products": [
            "BIOVIA",
            "CATIA",
            "SIMULIA"
        ],
        "description": "Dassault Systems offers several simulations tools for 3D product design, digital prototyping, analysis, and simulation for product development; scientific solutions to discover, develop and deliver innovative materials and formulas",
        "founded": null,
        "employees": "6670"
    },
    {
        "id": 3410,
        "name": "Eyelit",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.eyelit.com/",
        "email": "",
        "phone": "905-502-6184",
        "location": {
            "city": "Frisco",
            "state": "Texas",
            "zip": "75034"
        },
        "industry": "Manufacturing Software",
        "products": [
            "Eyelit",
            "MESTEC",
            "Automation/integration"
        ],
        "description": "Eyelit's software provides fully integrated, collaborative solutions for companies manufacturing high-tech and nanotechnology products, including semiconductors, lithium-ion batteries supported with slurry mixing, electrode coating, cell assembly, final sorting, and testing",
        "founded": null,
        "employees": "97"
    },
    {
        "id": 3411,
        "name": "Fraunhofer",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.itwm.fraunhofer.de/en/departments/sms/products-services/best-battery-electrochemistry-simulation-tool.html",
        "email": "",
        "phone": "734-354-9700",
        "location": {
            "city": "Plymouth",
            "state": "Michigan",
            "zip": "48170"
        },
        "industry": "Manufacturing Software",
        "products": [
            "Battery and Electrochemistry Simulation Tool"
        ],
        "description": "Fraunhofer offers physics-based 3D simulation of lithium-ion batteries; and describes cell behavior by physical partial differential equation model to describe the charge, ion and energy transport in the cell.",
        "founded": null,
        "employees": "124"
    },
    {
        "id": 3412,
        "name": "Gamma Technologies, LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.gtisoft.com/gt-autolion/",
        "email": "",
        "phone": "630-325-5848",
        "location": {
            "city": "Westmont",
            "state": "Illinois",
            "zip": "60559"
        },
        "industry": "Manufacturing Software",
        "products": [
            "GT-AutoLion"
        ],
        "description": "Gamma offers GT-AutoLion lithium-ion battery simulation software used by cell designers and OEMs to predict performance, degradation, and safety for any lithium-ion cell.",
        "founded": null,
        "employees": "114"
    },
    {
        "id": 3413,
        "name": "Hexagon Manufacturing",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://hexagon.com/company/divisions/manufacturing-intelligence",
        "email": "",
        "phone": "",
        "location": {
            "city": "North Kingstown",
            "state": "Rhode Island",
            "zip": "02852"
        },
        "industry": "Manufacturing Software",
        "products": [
            "Battery modeling and simulation tools and hardware devices for battery manufacturing and inspection"
        ],
        "description": "Hexagon’s Manufacturing Intelligence division empowers innovation and creativity. Our solutions support optimization throughout the product lifecycle, freeing creators to make better products in new innovative ways, for people and planet.",
        "founded": null,
        "employees": "150"
    },
    {
        "id": 3414,
        "name": "Honeywell International",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.honeywell.com/us/en",
        "email": "",
        "phone": "877-841-2840",
        "location": {
            "city": "Houston",
            "state": "Texas",
            "zip": "28202"
        },
        "industry": "Manufacturing Software",
        "products": [
            "Manufacturing Execution Systems",
            "Quality Management System",
            "Production Management and Planning",
            "Building Management System",
            "Advanced Process Control and Automation",
            "Cyber Security"
        ],
        "description": "Honeywell is a technology company offering industry-specific solutions, including integrated manufacturing systems for the lithium-ion battery industry, aerospace products and services; control technologies; and performance materials globally.",
        "founded": null,
        "employees": "850"
    },
    {
        "id": 3415,
        "name": "Leaptran, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.leaptran.com/",
        "email": "",
        "phone": "210-643-1977",
        "location": {
            "city": "San Antonio",
            "state": "Texas",
            "zip": "78229"
        },
        "industry": "Manufacturing Software",
        "products": [
            "Leapmind"
        ],
        "description": "Leaptran offers battery degradation modeling by using data-driven algorithms to enable forecasting-based distributed energy resources management and integration.",
        "founded": null,
        "employees": "8"
    },
    {
        "id": 3416,
        "name": "Mathworks",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.mathworks.com/products/simscape-electrical.html?s_tid=srchtitle_Simscape%20electrical_1",
        "email": "",
        "phone": "508-647-7000",
        "location": {
            "city": "Natick",
            "state": "Massachusetts",
            "zip": "01760"
        },
        "industry": "Manufacturing Software",
        "products": [
            "Simscape Electrical"
        ],
        "description": "Mathworks provides software for modeling and simulating electronic, mechatronic, and electrical power systems for semiconductors, motors, and components for applications such as electromechanical actuation, smart grids, and renewable energy systems.",
        "founded": null,
        "employees": "4200"
    },
    {
        "id": 3417,
        "name": "Micantis, Inc",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://micantis.io/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Boulder",
            "state": "Colorado",
            "zip": "80302"
        },
        "industry": "Manufacturing Software",
        "products": [
            "Validate and Quality Test Batteries"
        ],
        "description": "Micantis provides battery data analytics for battery manufacturers and product companies",
        "founded": null,
        "employees": "25"
    },
    {
        "id": 3418,
        "name": "Modelon",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.modelon.com/",
        "email": "",
        "phone": "734-274-5933",
        "location": {
            "city": "Ann Arbor",
            "state": "Michigan",
            "zip": "48104"
        },
        "industry": "Manufacturing Software",
        "products": [
            "Modelon Impact"
        ],
        "description": "Modelon offers systems modeling and simulation software to promote product innovation, development ,and operations in a range of industries, including batteries.",
        "founded": null,
        "employees": "100"
    },
    {
        "id": 3428,
        "name": "Ohm AI",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.ohm.ai/",
        "email": "",
        "phone": "831-588-7285",
        "location": {
            "city": "San Francisco",
            "state": "California",
            "zip": "94111"
        },
        "industry": "Manufacturing Software",
        "products": [
            "AI agents for battery R&D",
            "validation",
            "& manufacturing workflows"
        ],
        "description": "Ohm provides artificial intelligence agents for battery teams, trained in electrochemistry and data engineering. The agents embed into R&D and manufacturing workflows to accelerate innovation and bridge workforce gaps.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3419,
        "name": "Peaxy",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.peaxy.net/",
        "email": "",
        "phone": "408-441-6500",
        "location": {
            "city": "San Jose",
            "state": "California",
            "zip": "95131"
        },
        "industry": "Manufacturing Software",
        "products": [
            "Peaxy Battery Intelligence"
        ],
        "description": "Peaxy’s software provides full data traceability and analytics for battery R&D and manufacturing, battery hardware integration, grid and energy storage systems, electric transport, and defense readiness",
        "founded": null,
        "employees": "41"
    },
    {
        "id": 3420,
        "name": "QAD, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.qad.com/",
        "email": "",
        "phone": "770-903-7200",
        "location": {
            "city": "Duluth",
            "state": "Georgia",
            "zip": "30097"
        },
        "industry": "Manufacturing Software",
        "products": [
            "Manufacturing enterprise resource planning"
        ],
        "description": "QAD’s software focuses on manufacturing and supply chain using Adaptive Manufacturing Enterprise.",
        "founded": null,
        "employees": "1000"
    },
    {
        "id": 3421,
        "name": "SandboxAQ",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.sandboxaq.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Palo Alto",
            "state": "California",
            "zip": "94301"
        },
        "industry": "Manufacturing Software",
        "products": [
            "Predict battery shelf-life testing and predictive maintenance"
        ],
        "description": "SandboxAQ collaborates with the U.S. Army to enhance battery shelf-life predictions and predictive maintenance using AI-driven large quantitative models.",
        "founded": null,
        "employees": "286"
    },
    {
        "id": 3422,
        "name": "Sendyne",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.sensata.com/sendyne-redirect",
        "email": "",
        "phone": "212-966-0600",
        "location": {
            "city": "New York",
            "state": "New York",
            "zip": "10013"
        },
        "industry": "Manufacturing Software",
        "products": [
            "CellMod"
        ],
        "description": "Sendyne offers Virtual Battery Software, a functional mockup unit that can be integrated into simulation packages; using ambient conditions, it estimates voltage, state of charge, and cell internal variables.",
        "founded": null,
        "employees": "14"
    },
    {
        "id": 3423,
        "name": "Siemens Digital Industries Software",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.plm.automation.siemens.com/global/en/products/simcenter/#top",
        "email": "",
        "phone": "202-434-4800",
        "location": {
            "city": "Washington",
            "state": "District of Columbia",
            "zip": "20001"
        },
        "industry": "Manufacturing Software",
        "products": [
            "Simcenter"
        ],
        "description": "Siemens DIS offers a flexible, open, and scalable portfolio of predictive simulation and test applications that support you at every step in your digital journey particularly for lithium-ion battery simulations.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3424,
        "name": "Twaice",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.twaice.com/?null=",
        "email": "",
        "phone": "312-494-2079",
        "location": {
            "city": "Chicago",
            "state": "Illinois",
            "zip": "60601"
        },
        "industry": "Manufacturing Software",
        "products": [
            "Battery Simulation Models electric-thermal-aging"
        ],
        "description": "Twaice is a battery software company using AI to create digital solutions for a greener world, enabling energy and mobility leaders to accelerate the shift to cleaner battery power.",
        "founded": null,
        "employees": "100"
    },
    {
        "id": 3425,
        "name": "Voltaiq",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.voltaiq.com/",
        "email": "",
        "phone": "888-477-9549",
        "location": {
            "city": "Cupertion",
            "state": "California",
            "zip": "95014"
        },
        "industry": "Manufacturing Software",
        "products": [
            "Enterprise Battery Intelligence"
        ],
        "description": "Voltaiq develops Battery Intelligence software to address challenges in battery development, data analysis, and acceleration of the battery ecosystem. It expedites the transition to a battery-powered world through advanced analytics.",
        "founded": null,
        "employees": "28"
    },
    {
        "id": 3016,
        "name": "Lundin Mining",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.lundinmining.com/operations/eagle/",
        "email": "",
        "phone": "906-339-7000",
        "location": {
            "city": "Michigamme Township",
            "state": "Michigan",
            "zip": ""
        },
        "industry": "Nickel Mining",
        "products": [
            "Nickel ore",
            "Nickel concentrates"
        ],
        "description": "Lundin Mining mines and processes copper and nickel ore. The nickel ore is ground down and separated to be used for cathodes.",
        "founded": null,
        "employees": "200"
    },
    {
        "id": 3019,
        "name": "NewRange Copper Nickel JV",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.newrangecoppernickel.com/",
        "email": "",
        "phone": "218-471-2150",
        "location": {
            "city": "Hoyt Lakes",
            "state": "Minnesota",
            "zip": "55750"
        },
        "industry": "Nickel Mining",
        "products": [
            "Nickel concentrates"
        ],
        "description": "New Range Copper Nickel is a mining company that is under construction. The battery resources provided will be nickel and cobalt.",
        "founded": null,
        "employees": "34"
    },
    {
        "id": 3029,
        "name": "Trilogy Metals",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://trilogymetals.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "North of Arctic Circle",
            "state": "Alaska",
            "zip": ""
        },
        "industry": "Nickel Mining",
        "products": [
            "Nickel",
            "copper",
            "zinc"
        ],
        "description": "Trilogy Metals is a base metals exploration company focused on the Upper Kobuk Mineral Projects (UKMP) in the Ambler Mining District. It is backed by a direct federal investment.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3030,
        "name": "Twin Metals Minnesota",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.twin-metals.com/",
        "email": "",
        "phone": "",
        "location": {
            "city": "Ely",
            "state": "Minnesota",
            "zip": "55731"
        },
        "industry": "Nickel Mining",
        "products": [
            "Nickel concentrates"
        ],
        "description": "Twin Metals Minnesota is a mining startup focused on mining nickel and copper. The nickel is useful for cathodes.",
        "founded": null,
        "employees": "750 (Planned)"
    },
    {
        "id": 3347,
        "name": "Intertape Polymer Group",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.itape.com/",
        "email": "",
        "phone": "617-817-5659",
        "location": {
            "city": "Sarasota",
            "state": "Florida",
            "zip": "34232"
        },
        "industry": "Packaging / Kitting",
        "products": [
            "Separators",
            "Tapes",
            "Films",
            "Foams",
            "Dielectrics",
            "Adhesive Solutions"
        ],
        "description": "Intertape Polymer Group is a packaging products and systems company developing and producing a large variety of paper-based and film-based pressure-sensitive and water-activated tape for applications ranging from common to niche.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3114,
        "name": "Kureha",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.kureha.com/",
        "email": "",
        "phone": "423-624-3500",
        "location": {
            "city": "Chattanooga",
            "state": "Tennessee",
            "zip": "37406"
        },
        "industry": "Polymer Compounding",
        "products": [
            "Cell materials"
        ],
        "description": "Kureha America produces PVDF binders for lithium-ion batteries, enhancing electrode adhesion, chemical resistance, and cycle life in EV and energy storage applications.",
        "founded": null,
        "employees": ""
    },
    {
        "id": 3118,
        "name": "Syensqo",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.syensqo.com/en/usa",
        "email": "",
        "phone": "706-790-3100",
        "location": {
            "city": "Augusta",
            "state": "Georgia",
            "zip": "30906"
        },
        "industry": "Polymer Compounding",
        "products": [
            "Binders - PVDF"
        ],
        "description": "Syensqo is a global science leader and a spin-off from the Solvay Group (December 2023). The company focuses on specialty materials including high-performance polymers and composite materials.",
        "founded": null,
        "employees": "100 (Planned)"
    },
    {
        "id": 3183,
        "name": "Acculon Energy",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://acculonenergy.com/",
        "email": "",
        "phone": "614-259-7792",
        "location": {
            "city": "Columbus",
            "state": "Ohio",
            "zip": "43212"
        },
        "industry": "Power Electronics",
        "products": [
            "Battery Management System"
        ],
        "description": "Acculon Energy is a battery system developer and manufacturer. It provides an innovative end-to-end approach for accelerating market entry while minimizing risk during commercialization.",
        "founded": null,
        "employees": "15"
    },
    {
        "id": 3217,
        "name": "Element Energy, Inc.",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://elementenergy.com/",
        "email": "",
        "phone": "650-330-6600",
        "location": {
            "city": "Melno Park",
            "state": "California",
            "zip": "94025"
        },
        "industry": "Power Electronics",
        "products": [
            "Battery management system"
        ],
        "description": "Element is developer of a battery management system designed to improve safety, energy throughput, and lifetime of lithium-ion battery packs for cost-effective repurposing of second-life EV batteries for stationary applications.",
        "founded": null,
        "employees": "24"
    },
    {
        "id": 3244,
        "name": "Indie Power Systems",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://indiepowerchargers.com/",
        "email": "",
        "phone": "317-650-3627",
        "location": {
            "city": "Plano",
            "state": "Texas",
            "zip": "75074"
        },
        "industry": "Power Electronics",
        "products": [
            "Battery management system"
        ],
        "description": "Indie Power Systems is a vertically integrated player in EV charging, grid, and energy.",
        "founded": null,
        "employees": "4"
    },
    {
        "id": 3280,
        "name": "Stafl Systems",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.staflsystems.com",
        "email": "",
        "phone": "415-228-3183",
        "location": {
            "city": "South San Francisco",
            "state": "California",
            "zip": "94080"
        },
        "industry": "Power Electronics",
        "products": [
            "Battery management system"
        ],
        "description": "Stafl Systems provides battery packs, battery management systems and powertrain solutions for the aviation, marine, off-highway and defense markets.",
        "founded": null,
        "employees": "38"
    },
    {
        "id": 3291,
        "name": "Voltronix",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.voltronix.com/",
        "email": "",
        "phone": "866-777-2329",
        "location": {
            "city": "Rancho Santa Margarita",
            "state": "California",
            "zip": "92688"
        },
        "industry": "Power Electronics",
        "products": [
            "Battery management system"
        ],
        "description": "Voltronix, provides durable, high-performance lithium-ion batteries for semi-truck fleets at the LA Port, now supplies batteries and management systems to electric vehicle and energy storage sectors.",
        "founded": null,
        "employees": "75"
    },
    {
        "id": 3295,
        "name": "Xalt Energy MI LLC",
        "twitter": "",
        "twitterUrl": "",
        "website": "https://www.xaltenergy.com/",
        "email": "",
        "phone": "989-486-8501",
        "location": {
            "city": "Midland",
            "state": "Michigan",
            "zip": "48640"
        },
        "industry": "Power Electronics",
        "products": [
            "Battery management system"
        ],
        "description": "Xalt develops lithium-ion cells and packs by combining advanced chemistries, low-impedance cell design and world-class manufacturing to high-tech storage solutions in marine, commercial electric transportation, and specialty applications.",
        "founded": null,
        "employees": "52"
    }
];

    const normalizeImportKey = (value) => String(value || "")
        .toLowerCase()
        .replace(/&/g, " and ")
        .replace(/[^a-z0-9]+/g, " ")
        .split(" ")
        .filter(Boolean)
        .filter(token => !["inc", "incorporated", "llc", "corp", "corporation", "co", "company", "ltd", "limited", "plc", "holdings", "technologies"].includes(token))
        .join(" ");

    const importKeys = new Set(manufacturers.map((manufacturer) => `${normalizeImportKey(manufacturer.name)}|${manufacturer.industry}`));
    naatbattManufacturers.forEach((manufacturer) => {
        const key = `${normalizeImportKey(manufacturer.name)}|${manufacturer.industry}`;
        if (!importKeys.has(key)) {
            manufacturers.push(manufacturer);
            importKeys.add(key);
        }
    });
})();
