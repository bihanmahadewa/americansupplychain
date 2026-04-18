// DOM Elements
const stateFilter = document.getElementById('stateFilter');
const industryFilter = document.getElementById('industryFilter');
const clearFiltersBtn = document.getElementById('clearFilters');
const directoryGrid = document.getElementById('directoryGrid');
const graphContainer = document.getElementById('graphContainer');
const networkGraphEl = document.getElementById('networkGraph');
const resultsCount = document.getElementById('resultsCount');
const suggestBtn = document.getElementById('suggestBtn');
const treeViewBtn = document.getElementById('treeViewBtn');
const graphViewBtn = document.getElementById('graphViewBtn');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatMessages');
const assistantResults = document.getElementById('assistantResults');
const assistantPanelBody = document.getElementById('assistantPanelBody');
const assistantQuickLinks = document.getElementById('assistantQuickLinks');
const funFactTrigger = document.getElementById('funFactTrigger');
const funFactCard = document.getElementById('funFactCard');
const funFactText = document.getElementById('funFactText');

const tierTaxonomy = [
    {
        tier: 'S',
        label: 'Mine to metal',
        sections: [
            {
                name: 'Extraction',
                subcategories: [
                    {
                        name: 'Rare earth mining + separation',
                        industryMatches: ['Rare Earth Mining'],
                        keywordMatches: ['rare earth', 'separation', 'magnetics', 'ndpr']
                    },
                    {
                        name: 'Lithium / cobalt / nickel mining',
                        industryMatches: [
                            'Lithium Mining',
                            'Nickel Mining',
                            'Battery Metals Mining',
                            'Critical Minerals Mining',
                            'Critical Minerals Processing'
                        ],
                        keywordMatches: ['lithium', 'nickel', 'cobalt', 'thacker pass', 'tamarack', 'battery metals']
                    },
                    {
                        name: 'Mining / ore extraction',
                        industryMatches: ['Mining', 'Coal Mining', 'Iron Ore Mining', 'Precious Metals Mining'],
                        keywordMatches: ['ore extraction', 'mining', 'mine', 'copper', 'gold', 'silver', 'coal', 'iron ore']
                    }
                ]
            },
            {
                name: 'Primary Processing',
                subcategories: [
                    {
                        name: 'Smelting / primary metals',
                        industryMatches: ['Metal Manufacturing', 'Steel Manufacturing'],
                        keywordMatches: ['smelting', 'primary metals', 'steel beams', 'structural steel']
                    },
                    {
                        name: 'Semiconductor grade silicon refining',
                        industryMatches: [
                            'Semiconductor Silicon',
                            'Semiconductor Wafers',
                            'Semiconductor Components',
                            'High Purity Silicon Chemicals'
                        ],
                        keywordMatches: [
                            'semiconductor grade silicon',
                            'silicon refining',
                            'polysilicon',
                            'polycrystalline silicon',
                            'chlorosilane',
                            'silicon wafers',
                            'hyperpure silicon',
                            'high-purity silicon',
                            'silicon carbide',
                            'prime silicon wafers',
                            '200 mm wafers',
                            '300 mm wafers'
                        ]
                    },
                    {
                        name: 'Uranium enrichment',
                        industryMatches: ['Uranium Enrichment'],
                        keywordMatches: ['uranium enrichment', 'leu', 'haleu', 'centrifuge', 'enriched uranium', 'u-235']
                    }
                ]
            },
            {
                name: 'Tooling',
                subcategories: [
                    {
                        name: 'Forging',
                        industryMatches: ['Forging', 'Cold Forging', 'Precision Forging'],
                        keywordMatches: [
                            'open-die forging',
                            'rolled ring forging',
                            'closed-die forging',
                            'impression-die forging',
                            'cold forged',
                            'precision forging',
                            'near-net forging',
                            'forged components',
                            'steel forgings'
                        ]
                    },
                    {
                        name: 'Tool and die making',
                        industryMatches: [
                            'Manufacturing Equipment',
                            'Tool and Die Manufacturing',
                            'Precision Tooling'
                        ],
                        keywordMatches: [
                            'tool and die',
                            'machine tools',
                            'tooling',
                            'progressive dies',
                            'transfer dies',
                            'trim dies',
                            'die cast dies',
                            'mold tooling',
                            'stamping dies'
                        ]
                    }
                ]
            }
        ]
    },
    {
        tier: 'A',
        label: 'Materials and process bottlenecks',
        sections: [
            {
                name: 'Advanced Materials',
                subcategories: [
                    {
                        name: 'Alloy development',
                        industryMatches: ['Alloy Development', 'Specialty Alloys'],
                        keywordMatches: ['alloy development', 'specialty alloys', 'superalloys', 'titanium alloys', 'powder metals']
                    },
                    {
                        name: 'Polymer compounding',
                        industryMatches: ['3D Printing Materials', 'Polymer Compounding'],
                        keywordMatches: ['polymer compounding', 'thermoplastic compounding', 'engineering resins', 'custom color compounding', 'compounds nylon']
                    },
                    {
                        name: 'Carbon fiber / composites precursor',
                        industryMatches: ['3D Printing Materials', 'Carbon Fiber Materials'],
                        keywordMatches: ['carbon fiber', 'prepreg', 'composite reinforcements', 'composites precursor', 'pan precursor']
                    },
                    {
                        name: 'Ceramic matrix composites',
                        industryMatches: ['Ceramic Matrix Composites'],
                        keywordMatches: ['ceramic matrix composite', 'cmc', 'oxide-oxide', 'sic-sic', 'silicon carbide composite']
                    },
                    {
                        name: 'Cathode / anode materials',
                        industryMatches: ['Cathode Materials', 'Anode Materials', 'Battery Materials'],
                        keywordMatches: ['cathode', 'anode', 'lfp', 'graphite anode', 'silicon anode', 'cathode active materials']
                    }
                ]
            },
            {
                name: 'Critical Fabrication',
                subcategories: [
                    {
                        name: 'Semiconductor fab',
                        industryMatches: ['Semiconductor Fab', 'Semiconductor Foundry', 'Power Semiconductor Fab'],
                        keywordMatches: [
                            'semiconductor fab',
                            'chip fab',
                            'foundry',
                            'logic fab',
                            'dram fab',
                            '300 mm',
                            '200 mm',
                            'advanced packaging',
                            'silicon foundry',
                            'sic fab'
                        ]
                    },
                    {
                        name: 'Battery cell manufacturing',
                        industryMatches: ['Battery Cell Manufacturing'],
                        keywordMatches: [
                            'battery cell',
                            'gigafactory',
                            '2170',
                            '4680',
                            'lfp cells',
                            'pouch cells',
                            'prismatic cells',
                            'ncm',
                            'ncma',
                            'battery production'
                        ]
                    },
                    {
                        name: 'Photolithography / EUV',
                        industryMatches: ['Photolithography', 'EUV Lithography'],
                        keywordMatches: [
                            'photolithography',
                            'euv',
                            'duv',
                            'lithography',
                            'scanner',
                            'euv optics',
                            'euv light source',
                            'high-na',
                            '193 nm'
                        ]
                    },
                    {
                        name: 'Nuclear fuel fabrication',
                        industryMatches: ['Nuclear Fuel Fabrication'],
                        keywordMatches: ['nuclear fuel', 'fuel fabrication', 'fuel assemblies', 'uo2', 'zircaloy']
                    }
                ]
            }
        ]
    },
    {
        tier: 'B',
        label: 'Forming and treatment',
        sections: [
            {
                name: 'Forming',
                subcategories: [
                    {
                        name: 'Metal casting / foundry',
                        industryMatches: ['Metal Manufacturing', 'Steel Manufacturing', 'Foundry / Casting'],
                        keywordMatches: [
                            'foundry',
                            'casting',
                            'metal fabrication',
                            'sand casting',
                            'investment casting',
                            'die casting',
                            'centrifugal casting',
                            'permanent mold'
                        ]
                    },
                    {
                        name: 'CNC machining',
                        industryMatches: ['Precision Manufacturing', 'Manufacturing', 'CNC Machining'],
                        keywordMatches: ['cnc', 'machining', 'machine shop', 'custom parts', '5-axis', 'swiss turning', 'edm']
                    },
                    {
                        name: 'Injection molding',
                        industryMatches: ['Injection Molding'],
                        keywordMatches: [
                            'injection molding',
                            'thermoplastic',
                            'mold tooling',
                            'overmolding',
                            'micro-molding',
                            'high-volume molding'
                        ]
                    },
                    {
                        name: 'Stamping / deep draw',
                        industryMatches: ['Stamping / Deep Draw'],
                        keywordMatches: [
                            'stamping',
                            'deep draw',
                            'deep draw stamping',
                            'progressive stamping',
                            'transfer stamping',
                            'four slide',
                            'metal stamping'
                        ]
                    },
                    {
                        name: '3D printing',
                        industryMatches: [
                            '3D Printing',
                            'Additive Manufacturing',
                            'Metal 3D Printing',
                            '3D Printing Services',
                            'Construction 3D Printing'
                        ],
                        keywordMatches: [
                            '3d printing',
                            'additive manufacturing',
                            'binder jetting',
                            'sla',
                            'sls',
                            'fdm',
                            'metal additive',
                            'large-scale 3d printing'
                        ]
                    },
                    // {
                    //     name: 'Powder metallurgy',
                    //     industryMatches: [],
                    //     keywordMatches: ['powder metallurgy', 'binder jetting', 'metal 3d printing']
                    // }
                ]
            },
            {
                name: 'Energy Systems',
                subcategories: [
                    {
                        name: 'Electrolysis / green hydrogen',
                        industryMatches: ['Electrolysis / Green Hydrogen'],
                        keywordMatches: ['electrolysis', 'green hydrogen', 'electrolyzer', 'pem electrolyzer', 'soec']
                    },
                    {
                        name: 'Solar cell manufacturing',
                        industryMatches: ['Solar Cell Manufacturing'],
                        keywordMatches: ['solar cell', 'solar module', 'topcon', 'perc', 'thin-film']
                    },
                    {
                        name: 'Turbine manufacturing',
                        industryMatches: ['Turbine Manufacturing'],
                        keywordMatches: ['turbine', 'gas turbine', 'steam turbine', 'wind turbine', 'nacelle']
                    }
                ]
            },
            {
                name: 'Treatment',
                subcategories: [
                    {
                        name: 'Heat treatment',
                        industryMatches: ['Heat Treatment'],
                        keywordMatches: [
                            'heat treatment',
                            'annealing',
                            'normalizing',
                            'hardening',
                            'quenching',
                            'tempering',
                            'carburizing',
                            'stress relieving',
                            'vacuum heat treatment'
                        ]
                    },
                    {
                        name: 'Surface finishing / plating',
                        industryMatches: ['Surface Finishing / Plating'],
                        keywordMatches: [
                            'surface finishing',
                            'plating',
                            'electroplating',
                            'electroless',
                            'anodizing',
                            'powder coating',
                            'passivation',
                            'electropolish',
                            'blasting'
                        ]
                    }
                ]
            }
        ]
    },
    {
        tier: 'C',
        label: 'Assemblies and applied manufacturing',
        sections: [
            {
                name: 'Electronics',
                subcategories: [
                    {
                        name: 'PCB fabrication',
                        industryMatches: ['Electronics'],
                        keywordMatches: ['circuit boards', 'pcb fabrication', 'pcb']
                    },
                    {
                        name: 'SMT / chip packaging',
                        industryMatches: ['Electronics', 'SMT / Chip Packaging'],
                        keywordMatches: ['smt', 'chip packaging', 'advanced packaging', 'fan-out', 'foveros', 'emib', 'flip chip', 'sip', 'wafer-level packaging', 'trusted foundry']
                    },
                    {
                        name: 'Power electronics',
                        industryMatches: ['Electronics', 'Power Electronics'],
                        keywordMatches: ['power electronics', 'power module', 'igbt', 'mosfet', 'sic', 'gan', 'power management ic']
                    },
                    {
                        name: 'Wire harness / electrical integration',
                        industryMatches: ['Wire Harness / Electrical Integration'],
                        keywordMatches: ['wire harness', 'electrical integration', 'cable assemblies', 'connectors']
                    },
                    {
                        name: 'Battery pack assembly',
                        industryMatches: ['Battery Pack Assembly'],
                        keywordMatches: ['battery pack assembly', 'battery pack', 'cell-to-pack', 'ev battery pack', 'pouch cell assembly']
                    }
                ]
            },
            {
                name: 'Joining + Assembly',
                subcategories: [
                    {
                        name: 'Welding / brazing',
                        industryMatches: ['Welding / Brazing'],
                        keywordMatches: [
                            'welding',
                            'brazing',
                            'mig',
                            'gmaw',
                            'tig',
                            'gtaw',
                            'stick',
                            'smaw',
                            'fcaw',
                            'resistance welding',
                            'vacuum brazing',
                            'induction brazing',
                            'furnace brazing',
                            'metal fabrication'
                        ]
                    }
                ]
            },
            {
                name: 'Bio',
                subcategories: [
                    {
                        name: 'Bioreactors / fermentation',
                        industryMatches: ['Bioreactors / Fermentation'],
                        keywordMatches: [
                            'bioreactor',
                            'fermentation',
                            'stirred tank reactor',
                            'single-use bioreactor',
                            'cell culture',
                            'air-lift',
                            'wave bioreactor'
                        ]
                    },
                    {
                        name: 'Pharmaceutical manufacturing',
                        industryMatches: ['Pharmaceutical Manufacturing'],
                        keywordMatches: [
                            'pharmaceutical',
                            'peptides',
                            'biologics',
                            'sterile fill-finish',
                            'api synthesis',
                            'vaccines',
                            'monoclonal antibodies',
                            'cdmo'
                        ]
                    }
                ]
            }
        ]
    },
    {
        tier: 'D',
        label: 'System assembly and validation',
        sections: [
            {
                name: 'Systems Integration',
                subcategories: [
                    { name: 'Final vehicle assembly', industryMatches: ['Automotive Manufacturing'], keywordMatches: ['vehicle assembly', 'automotive'] },
                    {
                        name: 'Satellite / spacecraft integration',
                        industryMatches: ['Aerospace Manufacturing', 'Drone Manufacturing'],
                        keywordMatches: ['satellite', 'spacecraft', 'aerospace', 'drone']
                    },
                    {
                        name: 'Robotics assembly',
                        industryMatches: ['Robotics Assembly'],
                        keywordMatches: [
                            'robotics assembly',
                            'robotics',
                            'robot assembly',
                            'cobot',
                            'industrial robots',
                            'automated assembly',
                            'vision-guided',
                            'robot cell'
                        ]
                    }
                ]
            },
            {
                name: 'Quality + Validation',
                subcategories: [
                    {
                        name: 'CMM / metrology',
                        industryMatches: ['CMM / Metrology'],
                        keywordMatches: ['metrology', 'cmm', 'dimensional measurement', 'inspection systems', 'calibration']
                    },
                    {
                        name: 'Non-destructive testing',
                        industryMatches: ['Non-Destructive Testing'],
                        keywordMatches: ['non-destructive testing', 'ndt', 'inspection services', 'visual testing']
                    },
                    {
                        name: 'PPAP / process validation',
                        industryMatches: ['PPAP / Process Validation'],
                        keywordMatches: ['ppap', 'process validation', 'apqp', 'supplier validation']
                    },
                    {
                        name: 'Cleanroom qualification',
                        industryMatches: ['Cleanroom Qualification'],
                        keywordMatches: ['cleanroom qualification', 'cleanroom', 'cleanroom certification', 'cleanroom testing']
                    }
                ]
            }
        ]
    },
    {
        tier: 'E',
        label: 'Infrastructure and industrial enablers',
        sections: [
            {
                name: 'Infra + Logistics',
                subcategories: [
                    {
                        name: 'Grid-scale energy storage',
                        industryMatches: ['Grid-Scale Energy Storage'],
                        keywordMatches: ['grid-scale energy storage', 'bess', 'megapack', 'long-duration storage', 'battery energy storage']
                    },
                    {
                        name: 'Freight / shipping',
                        industryMatches: ['Freight / Shipping'],
                        keywordMatches: ['freight', 'shipping', 'ltl', 'truckload', 'intermodal', 'parcel']
                    },
                    {
                        name: 'Warehousing / cold chain',
                        industryMatches: ['Warehousing / Cold Chain'],
                        keywordMatches: ['warehousing', 'cold chain', 'cold storage', 'refrigerated warehousing']
                    },
                    {
                        name: 'Packaging / kitting',
                        industryMatches: ['Packaging / Kitting'],
                        keywordMatches: ['packaging', 'kitting', 'bundling', 'contract packaging']
                    }
                ]
            },
            {
                name: 'Enablers',
                subcategories: [
                    {
                        name: 'Industrial automation',
                        industryMatches: ['Manufacturing Automation'],
                        keywordMatches: ['industrial automation', 'factory automation']
                    },
                    {
                        name: 'PLCs / motion control',
                        industryMatches: ['Manufacturing Automation', 'PLCs / Motion Control'],
                        keywordMatches: ['plcs', 'motion control']
                    },
                    {
                        name: 'CAD/CAM/simulation',
                        industryMatches: ['Digital Manufacturing', 'Manufacturing Software', 'Rapid Manufacturing'],
                        keywordMatches: ['cad', 'cam', 'simulation', 'digital fabrication', 'quoting']
                    }
                ]
            }
        ]
    }
];

const taxonomyIndex = flattenTaxonomy(tierTaxonomy);
const expandedSubcategories = new Set();
const manufacturerAssignments = buildManufacturerAssignmentLookup();

let filteredManufacturers = [...manufacturers];
let currentView = 'tree';
let usMap = null;
let markerLayer = null;
let activeMapCategory = null;
let assistantPreviousResponseId = null;
let assistantRequestInFlight = false;
let hasStartedAssistantConversation = false;
let currentFunFactIndex = -1;

const manufacturingFunFacts = [
    'The Springfield Armory helped pioneer interchangeable parts manufacturing in the United States during the 19th century.',
    'Rosie the Riveter became a symbol of the wartime factory workforce that reshaped American industrial production.',
    'Detroit once produced so many vehicles that the city became one of the strongest symbols of large-scale industrial capacity in the world.',
    'American machine tool builders were a backbone of 20th century manufacturing because they enabled other factories to make precise parts at scale.',
    'The U.S. aerospace supply chain helped push advances in aluminum, composites, controls, and precision machining across the broader industrial base.'
];

const defaultUSView = {
    center: [39.5, -98.35],
    zoom: 4
};

const stateCentroids = {
    alabama: [32.806671, -86.79113],
    alaska: [61.370716, -152.404419],
    arizona: [33.729759, -111.431221],
    arkansas: [34.969704, -92.373123],
    california: [36.116203, -119.681564],
    colorado: [39.059811, -105.311104],
    connecticut: [41.597782, -72.755371],
    delaware: [39.318523, -75.507141],
    "district of columbia": [38.9072, -77.0369],
    florida: [27.766279, -81.686783],
    georgia: [33.040619, -83.643074],
    hawaii: [21.094318, -157.498337],
    idaho: [44.240459, -114.478828],
    illinois: [40.349457, -88.986137],
    indiana: [39.849426, -86.258278],
    iowa: [42.011539, -93.210526],
    kansas: [38.5266, -96.726486],
    kentucky: [37.66814, -84.670067],
    louisiana: [31.169546, -91.867805],
    maine: [44.693947, -69.381927],
    maryland: [39.063946, -76.802101],
    massachusetts: [42.230171, -71.530106],
    michigan: [43.326618, -84.536095],
    minnesota: [45.694454, -93.900192],
    mississippi: [32.741646, -89.678696],
    missouri: [38.456085, -92.288368],
    montana: [46.921925, -110.454353],
    nebraska: [41.12537, -98.268082],
    nevada: [38.313515, -117.055374],
    "new hampshire": [43.452492, -71.563896],
    "new jersey": [40.298904, -74.521011],
    "new mexico": [34.840515, -106.248482],
    "new york": [42.165726, -74.948051],
    "north carolina": [35.630066, -79.806419],
    "north dakota": [47.528912, -99.784012],
    ohio: [40.388783, -82.764915],
    oklahoma: [35.565342, -96.928917],
    oregon: [44.572021, -122.070938],
    pennsylvania: [40.590752, -77.209755],
    "rhode island": [41.680893, -71.51178],
    "south carolina": [33.856892, -80.945007],
    "south dakota": [44.299782, -99.438828],
    tennessee: [35.747845, -86.692345],
    texas: [31.054487, -97.563461],
    utah: [40.150032, -111.862434],
    vermont: [44.045876, -72.710686],
    virginia: [37.769337, -78.169968],
    washington: [47.400902, -121.490494],
    "west virginia": [38.491226, -80.954453],
    wisconsin: [44.268543, -89.616508],
    wyoming: [42.755966, -107.30249]
};

const stateAliases = {
    al: "alabama", ak: "alaska", az: "arizona", ar: "arkansas", ca: "california", co: "colorado", ct: "connecticut",
    de: "delaware", dc: "district of columbia", fl: "florida", ga: "georgia", hi: "hawaii", id: "idaho", il: "illinois",
    in: "indiana", ia: "iowa", ks: "kansas", ky: "kentucky", la: "louisiana", me: "maine", md: "maryland",
    ma: "massachusetts", mi: "michigan", mn: "minnesota", ms: "mississippi", mo: "missouri", mt: "montana",
    ne: "nebraska", nv: "nevada", nh: "new hampshire", nj: "new jersey", nm: "new mexico", ny: "new york",
    nc: "north carolina", nd: "north dakota", oh: "ohio", ok: "oklahoma", or: "oregon", pa: "pennsylvania",
    ri: "rhode island", sc: "south carolina", sd: "south dakota", tn: "tennessee", tx: "texas", ut: "utah",
    vt: "vermont", va: "virginia", wa: "washington", wv: "west virginia", wi: "wisconsin", wy: "wyoming"
};

const cityCoordinates = {
    "auburn hills|michigan": [42.6875, -83.2341],
    "austin|texas": [30.2672, -97.7431],
    "bellingham|washington": [48.7519, -122.4787],
    "bethesda|maryland": [38.9847, -77.0947],
    "boise|idaho": [43.615, -116.2023],
    "brook park|ohio": [41.3984, -81.8046],
    "burlington|massachusetts": [42.5048, -71.1956],
    "campbell|california": [37.2872, -121.95],
    "charlotte|north carolina": [35.2271, -80.8431],
    "chicago|illinois": [41.8781, -87.6298],
    "cleveland|ohio": [41.4993, -81.6944],
    "columbus|indiana": [39.2014, -85.9214],
    "dallas|texas": [32.7767, -96.797],
    "denver|colorado": [39.7392, -104.9903],
    "detroit|michigan": [42.3314, -83.0458],
    "el cajon|california": [32.7948, -116.9625],
    "elk grove village|illinois": [42.0039, -87.9703],
    "frankfort|new york": [43.0381, -75.0707],
    "gaithersburg|maryland": [39.1434, -77.2014],
    "grand rapids|michigan": [42.9634, -85.6681],
    "greenville|south carolina": [34.8526, -82.394],
    "grove city|ohio": [39.8815, -83.0929],
    "hartland|wisconsin": [43.1022, -88.342],
    "hatfield|pennsylvania": [40.2798, -75.2993],
    "heyburn|idaho": [42.5588, -113.7633],
    "holland|michigan": [42.7875, -86.1089],
    "houston|texas": [29.7604, -95.3698],
    "lake mary|florida": [28.7589, -81.3178],
    "latham|new york": [42.747, -73.759],
    "los angeles|california": [34.0522, -118.2437],
    "macedonia|ohio": [41.3137, -81.5046],
    "macomb|michigan": [42.7009, -82.9599],
    "mahwah|new jersey": [41.0887, -74.1438],
    "malta|new york": [42.9748, -73.7854],
    "maple plain|minnesota": [45.0077, -93.6641],
    "milwaukee|wisconsin": [43.0389, -87.9065],
    "minneapolis|minnesota": [44.9778, -93.265],
    "new albany|ohio": [40.0817, -82.8088],
    "new york|new york": [40.7128, -74.006],
    "orlando|florida": [28.5383, -81.3792],
    "perrysburg|ohio": [41.5569, -83.6272],
    "phoenix|arizona": [33.4484, -112.074],
    "pittsburgh|pennsylvania": [40.4406, -79.9959],
    "port richey|florida": [28.2711, -82.7193],
    "richardson|texas": [32.9483, -96.7299],
    "rochester|new york": [43.1566, -77.6088],
    "san antonio|texas": [29.4241, -98.4936],
    "san diego|california": [32.7157, -117.1611],
    "san francisco|california": [37.7749, -122.4194],
    "san jose|california": [37.3382, -121.8863],
    "st. charles|illinois": [41.9142, -88.3087],
    "st. louis|missouri": [38.627, -90.1994],
    "torrance|california": [33.8358, -118.3406],
    "union|new jersey": [40.6976, -74.2632],
    "wauconda|illinois": [42.2586, -88.14],
    "waukesha|wisconsin": [43.0117, -88.2315],
    "wooster|ohio": [40.8051, -81.9351],
    "zeeland|michigan": [42.8125, -86.0186]
};

const categoryColorPalette = [
    '#0072B2',
    '#E69F00',
    '#009E73',
    '#D55E00',
    '#CC79A7',
    '#56B4E9',
    '#F0E442',
    '#000000',
    '#C44E52',
    '#8172B3',
    '#64B5CD',
    '#8C8C8C'
];

const allUSStates = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
];

document.addEventListener('DOMContentLoaded', () => {
    populateFilters();
    renderManufacturers(manufacturers);
    initializeFunFacts();
    attachEventListeners();
});

function flattenTaxonomy(tiers) {
    const flat = [];

    tiers.forEach(tier => {
        tier.sections.forEach(section => {
            section.subcategories.forEach(subcategory => {
                flat.push({
                    section: section.name,
                    subcategory: subcategory.name,
                    key: createSubcategoryKey(section.name, subcategory.name),
                    industryMatches: subcategory.industryMatches || [],
                    keywordMatches: subcategory.keywordMatches || []
                });
            });
        });
    });

    return flat;
}

function createSubcategoryKey(section, subcategory) {
    return `${section}__${subcategory}`.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

function buildManufacturerAssignmentLookup() {
    const lookup = new Map();

    manufacturers.forEach(manufacturer => {
        lookup.set(manufacturer.id, assignManufacturerToTaxonomy(manufacturer));
    });

    return lookup;
}

function assignManufacturerToTaxonomy(manufacturer) {
    const haystack = [
        manufacturer.name,
        manufacturer.industry,
        manufacturer.description,
        manufacturer.products.join(' '),
        manufacturer.location.city,
        manufacturer.location.state
    ].join(' ').toLowerCase();

    const industryMatch = taxonomyIndex.find(entry => (
        entry.industryMatches.includes(manufacturer.industry)
    ));

    if (industryMatch) {
        return industryMatch;
    }

    return taxonomyIndex.find(entry => (
        entry.keywordMatches.some(keyword => haystack.includes(keyword.toLowerCase()))
    )) || null;
}

function populateFilters() {
    allUSStates.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateFilter.appendChild(option);
    });

    getUniqueIndustries().filter(Boolean).forEach(industry => {
        const option = document.createElement('option');
        option.value = industry;
        option.textContent = industry;
        industryFilter.appendChild(option);
    });
}

function renderManufacturers(manufacturersToRender) {
    const boardData = buildBoardData(manufacturersToRender);

    directoryGrid.innerHTML = renderBoardMarkup(boardData, manufacturersToRender.length === 0);
    updateResultsSummary(boardData, manufacturersToRender.length);
    attachBoardEventListeners();
}

function buildBoardData(manufacturersToRender) {
    const groupedBySubcategory = new Map();
    const unmappedManufacturers = [];

    manufacturersToRender.forEach(manufacturer => {
        const assignment = manufacturerAssignments.get(manufacturer.id);

        if (!assignment) {
            unmappedManufacturers.push(manufacturer);
            return;
        }

        if (!groupedBySubcategory.has(assignment.key)) {
            groupedBySubcategory.set(assignment.key, []);
        }

        groupedBySubcategory.get(assignment.key).push(manufacturer);
    });

    const sections = tierTaxonomy.flatMap(tier => (
        tier.sections.map(section => {
            let sectionCount = 0;

            const subcategories = section.subcategories.map(subcategory => {
                const key = createSubcategoryKey(section.name, subcategory.name);
                const matches = (groupedBySubcategory.get(key) || []).slice().sort(compareManufacturers);
                sectionCount += matches.length;

                return {
                    key,
                    name: subcategory.name,
                    manufacturers: matches
                };
            });

            return {
                name: section.name,
                count: sectionCount,
                subcategories
            };
        })
    ));

    const populatedSubcategories = sections.reduce((count, section) => (
        count + section.subcategories.filter(subcategory => subcategory.manufacturers.length > 0).length
    ), 0);

    return {
        sections,
        unmappedManufacturers: unmappedManufacturers.sort(compareManufacturers),
        populatedSubcategories,
        totalSubcategories: taxonomyIndex.length
    };
}

function renderBoardMarkup(boardData, noMatches) {
    const isFilterActive = stateFilter.value || industryFilter.value;
    const boardMarkup = boardData.sections.map(section => renderSectionMarkup(section, isFilterActive)).join('');
    const noMatchesMarkup = noMatches
        ? '<div class="no-results">No companies match the current filters. The empty directory stays visible so the gaps remain obvious.</div>'
        : '';

    return `${noMatchesMarkup}${boardMarkup}`;
}

function renderSectionMarkup(section, isFilterActive) {
    // When filters are active, only show subcategories with manufacturers
    const subcategoriesToRender = isFilterActive
        ? section.subcategories.filter(sub => sub.manufacturers.length > 0)
        : section.subcategories;

    // If filtering and no subcategories have data, hide the entire section
    if (isFilterActive && subcategoriesToRender.length === 0) {
        return '';
    }

    return `
        <section class="section-board">
            <div class="section-board-header">
                <h2>${escapeHtml(section.name)}</h2>
                <span class="section-board-total">${section.count}</span>
            </div>
            <div class="subcategory-grid">
                ${subcategoriesToRender.map(subcategory => renderSubcategoryMarkup(subcategory)).join('')}
            </div>
            <div class="section-content-area" id="section-content-${escapeHtml(section.name.replace(/\s+/g, '-').toLowerCase())}" style="display: none;"></div>
        </section>
    `;
}

function renderSubcategoryMarkup(subcategory) {
    if (subcategory.manufacturers.length === 0) {
        return `
            <div class="subcategory-card is-empty">
                <div class="subcategory-summary">
                    <span class="subcategory-name">${escapeHtml(subcategory.name)}</span>
                    <span class="subcategory-badge">0</span>
                </div>
                <p class="subcategory-empty-note">No companies indexed yet. This is a sourcing gap.</p>
            </div>
        `;
    }

    const serializedManufacturers = encodeURIComponent(JSON.stringify(subcategory.manufacturers));

    return `
        <div class="subcategory-card has-data" data-subcategory-key="${escapeHtml(subcategory.key)}" data-manufacturers="${escapeAttribute(serializedManufacturers)}">
            <div class="subcategory-summary">
                <span class="subcategory-name">${escapeHtml(subcategory.name)}</span>
                <span class="subcategory-badge">${subcategory.manufacturers.length}</span>
            </div>
        </div>
    `;
}

function renderManufacturerMarkup(manufacturer) {
    const location = formatLocation(manufacturer.location);
    const links = [
        manufacturer.website
            ? `<a href="${escapeAttribute(manufacturer.website)}" target="_blank" rel="noopener">site</a>`
            : '<span class="manufacturer-link-muted">no website found</span>',
        manufacturer.twitter && manufacturer.twitterUrl
            ? `<a href="${escapeAttribute(manufacturer.twitterUrl)}" target="_blank" rel="noopener">${escapeHtml(manufacturer.twitter)}</a>`
            : '',
        manufacturer.email ? `<a href="mailto:${escapeAttribute(manufacturer.email)}">email</a>` : ''
    ].filter(Boolean).join(' | ');
    const badges = renderManufacturerBadges(manufacturer);

    return `
        <li class="manufacturer-item">
            <div class="manufacturer-line">
                ${manufacturer.website
                    ? `<a class="manufacturer-name" href="${escapeAttribute(manufacturer.website)}" target="_blank" rel="noopener">${escapeHtml(manufacturer.name)}</a>`
                    : `<span class="manufacturer-name">${escapeHtml(manufacturer.name)}</span>`}
                ${badges}
                <span class="manufacturer-location">${escapeHtml(location)}</span>
            </div>
            <p class="manufacturer-description">${escapeHtml(manufacturer.description)}</p>
            <p class="manufacturer-products">${escapeHtml(manufacturer.products.join(', '))}</p>
            <p class="manufacturer-links">${links}</p>
        </li>
    `;
}

function renderManufacturerBadges(manufacturer) {
    const foundedLabel = formatEstablishedLabel(manufacturer.founded);

    if (!manufacturer.ycCompany && !manufacturer.ycBatch && !foundedLabel) {
        return '';
    }

    const badges = [];

    if (manufacturer.ycCompany) {
        badges.push('<span class="manufacturer-chip">YC</span>');
    }

    if (manufacturer.ycBatch) {
        badges.push(`<span class="manufacturer-chip manufacturer-chip-secondary">${escapeHtml(shortenYcBatch(manufacturer.ycBatch))}</span>`);
    }

    if (foundedLabel) {
        badges.push(`<span class="manufacturer-chip manufacturer-chip-secondary">${escapeHtml(foundedLabel)}</span>`);
    }

    return `<div class="manufacturer-chips">${badges.join('')}</div>`;
}

function formatEstablishedLabel(founded) {
    if (founded === null || founded === undefined || founded === '') {
        return '';
    }

    const foundedString = String(founded).trim();
    if (!/^\d{4}$/.test(foundedString)) {
        return '';
    }

    return `Established ${foundedString}`;
}

function shortenYcBatch(batch) {
    const match = String(batch || '').match(/^(Spring|Summer|Fall|Winter)\s+(\d{4})$/i);
    if (!match) {
        return String(batch || '');
    }

    const seasonMap = {
        spring: 'Sp',
        summer: 'Su',
        fall: 'F',
        winter: 'W'
    };

    return `${seasonMap[match[1].toLowerCase()] || match[1]}${match[2]}`;
}

function updateResultsSummary(boardData, visibleCount) {
    const hiddenCount = manufacturers.length - visibleCount;
    const summaryParts = [
        `${manufacturers.length} manufacturers available`
    ];

    if (hiddenCount > 0) {
        summaryParts.push(`${visibleCount} shown`);
    }

    resultsCount.textContent = summaryParts.join('  |  ');
}

function attachBoardEventListeners() {
    directoryGrid.querySelectorAll('.subcategory-card.has-data').forEach(card => {
        card.addEventListener('click', () => {
            const section = card.closest('.section-board');
            const contentArea = section.querySelector('.section-content-area');
            const manufacturers = JSON.parse(decodeURIComponent(card.getAttribute('data-manufacturers') || '[]'));

            // If clicking the same card that's already active, close it
            if (card.classList.contains('active')) {
                card.classList.remove('active');
                contentArea.style.display = 'none';
                return;
            }

            // Remove active class from all cards in this section
            section.querySelectorAll('.subcategory-card').forEach(c => {
                c.classList.remove('active');
            });

            // Add active class to clicked card
            card.classList.add('active');

            // Populate content area
            contentArea.innerHTML = `
                <div class="manufacturer-table">
                    <div class="manufacturer-table-header">
                        <span>Company</span>
                        <span>Description</span>
                        <span>Products</span>
                        <span>Links</span>
                    </div>
                    <ul class="manufacturer-list">
                        ${manufacturers.map(renderManufacturerMarkup).join('')}
                    </ul>
                </div>
            `;
            contentArea.style.display = 'block';
        });
    });
}

function compareManufacturers(a, b) {
    return a.name.localeCompare(b.name);
}

function formatLocation(location) {
    return [location.city, location.state].filter(Boolean).join(', ');
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeAttribute(value) {
    return escapeHtml(value);
}

function filterManufacturers() {
    const selectedState = stateFilter.value;
    const selectedIndustry = industryFilter.value;

    filteredManufacturers = manufacturers.filter(manufacturer => {
        const matchesState = selectedState === '' || manufacturer.location.state === selectedState;
        const matchesIndustry = selectedIndustry === '' || manufacturer.industry === selectedIndustry;

        return matchesState && matchesIndustry;
    });

    renderManufacturers(filteredManufacturers);

    // Auto-expand first subcategory when industry filter is selected
    if (selectedIndustry && selectedIndustry !== '') {
        const firstSubcategory = directoryGrid.querySelector('.subcategory-card.has-data');
        if (firstSubcategory) {
            firstSubcategory.click();
        }
    }

    if (currentView === 'graph') {
        renderGraph(filteredManufacturers);
    }

}

function clearFilters() {
    stateFilter.value = '';
    industryFilter.value = '';
    activeMapCategory = null;
    filterManufacturers();
}

async function sendChatMessage() {
    const message = chatInput.value.trim();
    await sendAssistantPrompt(message);
}

async function sendAssistantPrompt(message) {
    const trimmedMessage = String(message || '').trim();
    if (!trimmedMessage || assistantRequestInFlight) return;

    startAssistantConversation();
    assistantRequestInFlight = true;
    chatSend.disabled = true;
    chatInput.disabled = true;

    appendChatMessage('user', escapeHtml(trimmedMessage));
    chatInput.value = '';

    const pendingMessage = appendChatMessage('bot', 'Working through the current directory context...');

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: trimmedMessage,
                previousResponseId: assistantPreviousResponseId,
                uiState: getAssistantUiState(),
                visibleManufacturers: filteredManufacturers.map(toAssistantManufacturerContext)
            })
        });

        const payload = await response.json();
        if (!response.ok) {
            throw new Error(payload.error || 'Assistant request failed.');
        }

        assistantPreviousResponseId = payload.responseId || assistantPreviousResponseId;
        pendingMessage.innerHTML = formatAssistantResponse(payload.answer || 'No response returned.');
        renderAssistantResults(payload.context || []);
    } catch (error) {
        pendingMessage.textContent = error.message || 'Assistant request failed.';
    } finally {
        assistantRequestInFlight = false;
        chatSend.disabled = false;
        chatInput.disabled = false;
        chatInput.focus();
        scrollChatToBottom();
    }
}

function attachEventListeners() {
    stateFilter.addEventListener('change', filterManufacturers);
    industryFilter.addEventListener('change', filterManufacturers);
    clearFiltersBtn.addEventListener('click', clearFilters);

    treeViewBtn.addEventListener('click', () => switchView('tree'));
    graphViewBtn.addEventListener('click', () => switchView('graph'));

    chatSend.addEventListener('click', sendChatMessage);
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendChatMessage();
        }
    });

    if (funFactTrigger) {
        funFactTrigger.addEventListener('click', rotateFunFact);
    }

    if (assistantQuickLinks) {
        assistantQuickLinks.querySelectorAll('[data-prompt]').forEach(button => {
            button.addEventListener('click', async () => {
                const prompt = button.getAttribute('data-prompt') || '';
                await sendAssistantPrompt(prompt);
            });
        });
    }

    suggestBtn.addEventListener('click', () => {
        window.open('https://github.com/bihanmahadewa/americansupplychain', '_blank');
    });
}

function switchView(view) {
    currentView = view;

    if (view === 'tree') {
        treeViewBtn.classList.add('active');
        graphViewBtn.classList.remove('active');
        directoryGrid.style.display = 'block';
        graphContainer.style.display = 'none';
        return;
    }

    treeViewBtn.classList.remove('active');
    graphViewBtn.classList.add('active');
    directoryGrid.style.display = 'none';
    graphContainer.style.display = 'block';
    renderGraph(filteredManufacturers);
}

function renderGraph(manufacturersToGraph) {
    initializeUSMap();

    if (!usMap || !markerLayer) {
        return;
    }

    markerLayer.clearLayers();

    // Generate legend
    generateMapLegend(manufacturersToGraph);

    const bounds = [];

    manufacturersToGraph.forEach(manufacturer => {
        const coordinates = getManufacturerCoordinates(manufacturer);
        if (!coordinates) {
            return;
        }

        const assignment = manufacturerAssignments.get(manufacturer.id);
        const location = formatLocation(manufacturer.location);
        const markerColor = getCategoryColor(assignment);
        const categoryLabel = getMainCategoryLabel(assignment);
        const isActiveCategory = !activeMapCategory || categoryLabel === activeMapCategory;

        const marker = L.circleMarker(coordinates, {
            radius: isActiveCategory ? 6 : 4,
            color: markerColor,
            weight: 1,
            fillColor: markerColor,
            opacity: isActiveCategory ? 1 : 0.18,
            fillOpacity: isActiveCategory ? 0.9 : 0.12
        });

        marker.bindPopup(`
            <strong>${escapeHtml(manufacturer.name)}</strong><br>
            ${escapeHtml(location || 'Location unavailable')}<br>
            ${escapeHtml(categoryLabel)}<br>
            ${escapeHtml(manufacturer.industry || 'Unknown industry')}
        `);

        markerLayer.addLayer(marker);
        bounds.push(coordinates);
    });

    if (bounds.length > 0) {
        usMap.fitBounds(bounds, {
            padding: [24, 24],
            maxZoom: 8
        });
    } else {
        usMap.setView(defaultUSView.center, defaultUSView.zoom);
    }

    // The map lives in a hidden container until tab switch; force a resize pass.
    setTimeout(() => usMap.invalidateSize(), 0);
}

function initializeUSMap() {
    if (usMap || typeof L === 'undefined') {
        return;
    }

    usMap = L.map(networkGraphEl, {
        center: defaultUSView.center,
        zoom: defaultUSView.zoom,
        minZoom: 3
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(usMap);

    markerLayer = L.layerGroup().addTo(usMap);
}

function getManufacturerCoordinates(manufacturer) {
    const rawState = normalizeGeographyToken(manufacturer.location.state);
    const stateKey = resolveStateKey(rawState);

    const rawCity = normalizeGeographyToken(getPrimaryCityCandidate(manufacturer.location.city));

    if (rawCity && stateKey) {
        const preciseCityKey = `${rawCity}|${stateKey}`;
        if (cityCoordinates[preciseCityKey]) {
            return cityCoordinates[preciseCityKey];
        }
    }

    if (stateKey && stateCentroids[stateKey]) {
        return stateCentroids[stateKey];
    }

    return null;
}

function getPrimaryCityCandidate(cityValue) {
    if (!cityValue) {
        return '';
    }

    const splitters = [';', '&', '/'];
    let cleaned = String(cityValue);
    splitters.forEach(splitter => {
        cleaned = cleaned.split(splitter)[0];
    });

    if (cleaned.includes(',')) {
        cleaned = cleaned.split(',')[0];
    }

    return cleaned.trim();
}

function normalizeGeographyToken(value) {
    return String(value || '')
        .trim()
        .toLowerCase()
        .replace(/\./g, '')
        .replace(/\s+/g, ' ');
}

function resolveStateKey(rawState) {
    if (!rawState) {
        return '';
    }

    if (stateAliases[rawState]) {
        return stateAliases[rawState];
    }

    if (stateCentroids[rawState]) {
        return rawState;
    }

    return '';
}

function getIndustryColor(industry) {
    const token = normalizeGeographyToken(industry || 'unknown');
    const hash = token.split('').reduce((accumulator, character) => (
        (accumulator * 31 + character.charCodeAt(0)) >>> 0
    ), 0);

    return categoryColorPalette[hash % categoryColorPalette.length];
}

function getMainCategoryLabel(assignment) {
    return assignment?.section || 'Other';
}

function getCategoryColor(assignment) {
    return getIndustryColor(getMainCategoryLabel(assignment));
}

function generateMapLegend(manufacturersToGraph) {
    const mapLegend = document.getElementById('mapLegend');
    if (!mapLegend) return;

    const categoryColors = new Map();
    manufacturersToGraph.forEach(manufacturer => {
        const assignment = manufacturerAssignments.get(manufacturer.id);
        const categoryLabel = getMainCategoryLabel(assignment);
        const color = getCategoryColor(assignment);
        categoryColors.set(categoryLabel, color);
    });

    const sortedCategories = Array.from(categoryColors.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    if (sortedCategories.length === 0) {
        mapLegend.innerHTML = '';
        return;
    }

    mapLegend.innerHTML = `
        <h3>Map Legend</h3>
        <p class="legend-caption">Click a category to highlight only that group.</p>
        <button class="legend-reset${activeMapCategory ? '' : ' is-active'}" type="button" data-category="">
            Show all categories
        </button>
        <div class="legend-items">
            ${sortedCategories.map(([category, color]) => `
                <button
                    class="legend-item${activeMapCategory === category ? ' is-active' : ''}"
                    type="button"
                    data-category="${escapeAttribute(category)}"
                >
                    <div class="legend-color" style="background-color: ${color};"></div>
                    <span>${escapeHtml(category)}</span>
                </button>
            `).join('')}
        </div>
    `;

    mapLegend.querySelectorAll('[data-category]').forEach(element => {
        element.addEventListener('click', () => {
            const selectedCategory = element.getAttribute('data-category') || null;
            activeMapCategory = selectedCategory === activeMapCategory ? null : selectedCategory;
            renderGraph(filteredManufacturers);
        });
    });
}

function appendChatMessage(role, html) {
    const message = document.createElement('div');
    message.className = `chat-message ${role}`;
    message.innerHTML = html;
    chatMessages.appendChild(message);
    scrollChatToBottom();
    return message;
}

function scrollChatToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getAssistantUiState() {
    return {
        currentView,
        stateFilter: stateFilter.value || null,
        industryFilter: industryFilter.value || null,
        activeMapCategory,
        visibleManufacturerCount: filteredManufacturers.length
    };
}

function toAssistantManufacturerContext(manufacturer) {
    const assignment = manufacturerAssignments.get(manufacturer.id);

    return {
        id: manufacturer.id,
        name: manufacturer.name,
        industry: manufacturer.industry,
        category: getMainCategoryLabel(assignment),
        location: formatLocation(manufacturer.location),
        products: manufacturer.products,
        description: manufacturer.description,
        website: manufacturer.website || '',
        email: manufacturer.email || ''
    };
}

function renderAssistantResults(items) {
    if (!assistantResults) {
        return;
    }

    if (!items.length) {
        assistantResults.innerHTML = '';
        return;
    }

    assistantResults.innerHTML = `
        <div class="assistant-results-list">
            ${items.map(item => `
                <article class="assistant-result-card">
                    <h3>${escapeHtml(item.name || 'Untitled')}</h3>
                    <p>${escapeHtml([item.category, item.industry, item.location].filter(Boolean).join(' | '))}</p>
                    ${item.website ? `<a href="${escapeAttribute(item.website)}" target="_blank" rel="noopener">Open website</a>` : ''}
                </article>
            `).join('')}
        </div>
    `;
}

function formatAssistantResponse(text) {
    const paragraphs = escapeHtml(text)
        .split(/\n{2,}/)
        .map(block => block.replace(/\n/g, '<br>'))
        .filter(Boolean);

    return paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('');
}

function initializeFunFacts() {
    if (!funFactTrigger || !funFactCard || !funFactText) {
        return;
    }
}

function rotateFunFact() {
    if (!funFactCard || !funFactText || !manufacturingFunFacts.length) {
        return;
    }

    currentFunFactIndex = (currentFunFactIndex + 1) % manufacturingFunFacts.length;
    funFactCard.hidden = false;
    funFactCard.classList.remove('is-visible');
    funFactText.textContent = manufacturingFunFacts[currentFunFactIndex];
    requestAnimationFrame(() => {
        funFactCard.classList.add('is-visible');
    });
}

function startAssistantConversation() {
    if (hasStartedAssistantConversation) {
        return;
    }

    hasStartedAssistantConversation = true;
    if (assistantPanelBody) {
        assistantPanelBody.classList.remove('is-landing');
    }
    if (assistantQuickLinks) {
        assistantQuickLinks.classList.add('is-hidden');
    }
    if (funFactTrigger) {
        funFactTrigger.classList.add('is-hidden');
    }
    if (funFactCard) {
        funFactCard.classList.add('is-hidden');
    }
}
