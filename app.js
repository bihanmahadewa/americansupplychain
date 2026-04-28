// DOM Elements
const stateFilter = document.getElementById('stateFilter');
const industryFilter = document.getElementById('industryFilter');
const clearFiltersBtn = document.getElementById('clearFilters');
const directoryGrid = document.getElementById('directoryGrid');
const graphContainer = document.getElementById('graphContainer');
const networkGraphEl = document.getElementById('networkGraph');
const mapSearchInput = document.getElementById('mapSearchInput');
const mapSearchResults = document.getElementById('mapSearchResults');
const mapDetailPanel = document.getElementById('mapDetailPanel');
const resultsCount = document.getElementById('resultsCount');
const suggestBtn = document.getElementById('suggestBtn');
const treeViewBtn = document.getElementById('treeViewBtn');
const graphViewBtn = document.getElementById('graphViewBtn');
const mapModeCategoriesBtn = document.getElementById('mapModeCategoriesBtn');
const mapModeCompaniesBtn = document.getElementById('mapModeCompaniesBtn');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatMessages');
const assistantResults = document.getElementById('assistantResults');
const assistantPanel = document.getElementById('assistantPanel');
const assistantPanelBody = document.getElementById('assistantPanelBody');
const assistantQuickLinks = document.getElementById('assistantQuickLinks');
const assistantPowered = document.getElementById('assistantPowered');
const funFactTrigger = document.getElementById('funFactTrigger');
const funFactCard = document.getElementById('funFactCard');
const funFactText = document.getElementById('funFactText');
const hottestStartupsList = document.getElementById('hottestStartupsList');
const peopleToFollowList = document.getElementById('peopleToFollowList');
const scrollStory = document.getElementById('scrollStory');
const assistantMobileToggle = document.getElementById('assistantMobileToggle');
const assistantMobileBackdrop = document.getElementById('assistantMobileBackdrop');
const appLoadingOverlay = document.getElementById('appLoadingOverlay');

const visibleIndustryAliases = {
    'Alloy Development': 'Alloy development',
    'Specialty Alloys': 'Alloy development',
    'CNC Machining': 'CNC machining',
    'Foundry / Casting': 'Metal casting / foundry',
    'Injection Molding': 'Injection molding',
    'Metal Manufacturing': 'Smelting / primary metals',
    'PLCs / Motion Control': 'PLCs / motion control',
    'Precision Manufacturing': 'CNC machining',
    'Stamping / Deep Draw': 'Stamping / deep draw'
};

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
let manufacturerAssignments = buildManufacturerAssignmentLookup();
const manufacturerImportKeys = new Set(manufacturers.map((manufacturer) => (
    `${normalizeImportKey(manufacturer.name)}|${manufacturer.industry}`
)));

let filteredManufacturers = [...manufacturers];
let currentView = 'graph';
let mapDisplayMode = 'clusters';
let usMap = null;
let markerLayer = null;
let referenceLayer = null;
let vectorBaseLayer = null;
let stateSvgRenderer = null;
let mapMarkerRenderer = null;
let activeMapCategory = null;
let activeMapState = null;
let currentStateClusterStyles = new Map();
let markerAnimationTimer = null;
let usTopoJsonPromise = null;
let staticSvgRenderToken = 0;
let mapSearchDebounceTimer = null;
let lastRenderedUnmappedManufacturers = [];
const companyDetailsCache = new Map();
let mfgTotalAvailable = 0;
let mfgLoadedCount = 0;
let mfgLoadOffset = 0;
let mfgEnrichmentOverrides = {};
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
const lower48Bounds = [
    [24.3, -125.2],
    [49.8, -66.6]
];

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

const stateFipsNames = {
    "01": "Alabama",
    "02": "Alaska",
    "04": "Arizona",
    "05": "Arkansas",
    "06": "California",
    "08": "Colorado",
    "09": "Connecticut",
    "10": "Delaware",
    "11": "District of Columbia",
    "12": "Florida",
    "13": "Georgia",
    "15": "Hawaii",
    "16": "Idaho",
    "17": "Illinois",
    "18": "Indiana",
    "19": "Iowa",
    "20": "Kansas",
    "21": "Kentucky",
    "22": "Louisiana",
    "23": "Maine",
    "24": "Maryland",
    "25": "Massachusetts",
    "26": "Michigan",
    "27": "Minnesota",
    "28": "Mississippi",
    "29": "Missouri",
    "30": "Montana",
    "31": "Nebraska",
    "32": "Nevada",
    "33": "New Hampshire",
    "34": "New Jersey",
    "35": "New Mexico",
    "36": "New York",
    "37": "North Carolina",
    "38": "North Dakota",
    "39": "Ohio",
    "40": "Oklahoma",
    "41": "Oregon",
    "42": "Pennsylvania",
    "44": "Rhode Island",
    "45": "South Carolina",
    "46": "South Dakota",
    "47": "Tennessee",
    "48": "Texas",
    "49": "Utah",
    "50": "Vermont",
    "51": "Virginia",
    "53": "Washington",
    "54": "West Virginia",
    "55": "Wisconsin",
    "56": "Wyoming"
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

document.addEventListener('DOMContentLoaded', async () => {
    setAppLoading(true);
    attachEventListeners();
    switchView('graph');
    moveStorySectionToBottom();
    normalizeManufacturerIndustries(manufacturers);
    await loadIqsCompanies();
    await loadMfgCompanies();
    filteredManufacturers = [...manufacturers];
    populateFilters();
    switchView('graph');
    initializeFunFacts();
    renderStoryPanels();
    initializeStoryObserver();
    setAppLoading(false);
});

function moveStorySectionToBottom() {
    if (!scrollStory) {
        return;
    }

    const main = document.querySelector('main.container');
    if (!main) {
        return;
    }

    main.appendChild(scrollStory);
}

function setAppLoading(isLoading) {
    if (!appLoadingOverlay) {
        return;
    }

    document.body.classList.toggle('is-loading', Boolean(isLoading));
    appLoadingOverlay.classList.toggle('is-hidden', !isLoading);
}

async function loadIqsCompanies() {
    if (Array.isArray(window.__iqsCompaniesData) && window.__iqsCompaniesData.length > 0) {
        mergeImportedManufacturers(window.__iqsCompaniesData);
        return;
    }

    try {
        const response = await fetch('iqs-companies.json?v=20260418-1', { cache: 'no-store' });
        if (!response.ok) {
            return;
        }

        const records = await response.json();
        mergeImportedManufacturers(records);
    } catch (error) {
        console.warn('Unable to load IQS company imports.', error);
    }
}

async function loadMfgCompanies() {
    try {
        await loadMfgEnrichmentOverrides();
        const response = await fetch('mfg-companies-lite.json?v=20260425-1', { cache: 'no-store' });
        if (!response.ok) {
            return;
        }

        const rows = await response.json();
        if (!Array.isArray(rows)) {
            return;
        }
        mfgTotalAvailable = rows.length;
        const records = rows.map((row) => ({
            ...buildMfgRecordFromRow(row),
            source: 'MFG Companies import',
            sourceCategory: 'Bulk import lite',
            detailsLoaded: Boolean(mfgEnrichmentOverrides[String(row?.[0])]?.description)
        }));

        if (!records.length) {
            return;
        }

        mergeImportedManufacturers(records);
        mfgLoadedCount = records.length;
        mfgLoadOffset = records.length;
    } catch (error) {
        console.warn('Unable to load MFG company imports.', error);
    }
}

async function loadMfgEnrichmentOverrides() {
    try {
        const response = await fetch('mfg-enrichment-overrides.json?v=20260428-1', { cache: 'no-store' });
        if (!response.ok) {
            mfgEnrichmentOverrides = {};
            return;
        }
        const payload = await response.json();
        mfgEnrichmentOverrides = payload && typeof payload === 'object' ? payload : {};
    } catch (error) {
        mfgEnrichmentOverrides = {};
    }
}

function buildMfgRecordFromRow(row) {
    const id = String(row?.[0]);
    const override = mfgEnrichmentOverrides[id] || {};
    const locationOverride = override.location || {};

    return {
        id: row?.[0],
        name: row?.[1] || '',
        twitter: '',
        twitterUrl: '',
        website: override.website || row?.[5] || '',
        email: '',
        phone: '',
        location: {
            city: locationOverride.city || row?.[3] || '',
            state: locationOverride.state || row?.[4] || '',
            zip: locationOverride.zip || ''
        },
        industry: row?.[2] || 'Manufacturing',
        products: Array.isArray(override.products) ? override.products : [],
        description: override.description || '',
        founded: null,
        employees: '',
        geo: override.geo || null
    };
}

function mergeImportedManufacturers(importedManufacturers) {
    normalizeManufacturerIndustries(importedManufacturers);

    let didAddManufacturer = false;

    importedManufacturers.forEach((manufacturer) => {
        const key = `${normalizeImportKey(manufacturer.name)}|${manufacturer.industry}`;
        if (!manufacturerImportKeys.has(key)) {
            manufacturers.push(manufacturer);
            manufacturerImportKeys.add(key);
            manufacturerAssignments.set(manufacturer.id, assignManufacturerToTaxonomy(manufacturer));
            didAddManufacturer = true;
        }
    });
    return didAddManufacturer;
}

function normalizeImportKey(value) {
    return String(value || '')
        .toLowerCase()
        .replace(/&/g, ' and ')
        .replace(/[^a-z0-9]+/g, ' ')
        .split(' ')
        .filter(Boolean)
        .filter(token => ![
            'inc',
            'incorporated',
            'llc',
            'corp',
            'corporation',
            'co',
            'company',
            'ltd',
            'limited',
            'plc',
            'holdings',
            'technologies'
        ].includes(token))
        .join(' ');
}

function normalizeManufacturerIndustries(records) {
    records.forEach((manufacturer) => {
        const normalizedIndustry = visibleIndustryAliases[manufacturer.industry];
        if (normalizedIndustry) {
            manufacturer.industry = normalizedIndustry;
        }
    });
}

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
    lastRenderedUnmappedManufacturers = boardData.unmappedManufacturers;

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
        categorizedCount: manufacturersToRender.length - unmappedManufacturers.length,
        populatedSubcategories,
        totalSubcategories: taxonomyIndex.length
    };
}

function renderBoardMarkup(boardData, noMatches) {
    const isFilterActive = stateFilter.value || industryFilter.value;
    const boardMarkup = boardData.sections.map(section => renderSectionMarkup(section, isFilterActive)).join('');
    const unmappedMarkup = renderUnmappedSectionMarkup(boardData.unmappedManufacturers);
    const noMatchesMarkup = noMatches
        ? '<div class="no-results">No companies match the current filters. The empty directory stays visible so the gaps remain obvious.</div>'
        : '';

    return `${noMatchesMarkup}${boardMarkup}${unmappedMarkup}`;
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

function renderUnmappedSectionMarkup(unmappedManufacturers) {
    if (!Array.isArray(unmappedManufacturers) || unmappedManufacturers.length === 0) {
        return '';
    }

    return `
        <section class="section-board unmapped-section">
            <div class="section-board-header">
                <h2>Uncategorized</h2>
                <span class="section-board-total">${unmappedManufacturers.length}</span>
            </div>
            <div class="subcategory-grid">
                <div class="subcategory-card has-data" data-subcategory-key="uncategorized" data-is-uncategorized="true">
                    <div class="subcategory-summary">
                        <span class="subcategory-name">Pending category mapping</span>
                        <span class="subcategory-badge">${unmappedManufacturers.length}</span>
                    </div>
                </div>
            </div>
            <div class="section-content-area" id="section-content-uncategorized" style="display: none;"></div>
        </section>
    `;
}

function renderManufacturerMarkup(manufacturer) {
    const location = formatLocation(manufacturer.location);
    const needsDetails = manufacturer.source === 'MFG Companies import' && !manufacturer.detailsLoaded;
    const searchText = [
        manufacturer.name,
        location,
        manufacturer.industry,
        manufacturer.description,
        (manufacturer.products || []).join(' '),
        manufacturer.website
    ].filter(Boolean).join(' ').toLowerCase();
    const links = [
        manufacturer.website
            ? `<a href="${escapeAttribute(manufacturer.website)}" target="_blank" rel="noopener">${escapeHtml(formatWebsiteLabel(manufacturer.website))}</a>`
            : '<span class="manufacturer-link-muted">no website found</span>',
        manufacturer.twitter && manufacturer.twitterUrl
            ? `<a href="${escapeAttribute(manufacturer.twitterUrl)}" target="_blank" rel="noopener">${escapeHtml(manufacturer.twitter)}</a>`
            : '',
        manufacturer.email ? `<a href="mailto:${escapeAttribute(manufacturer.email)}">email</a>` : ''
    ].filter(Boolean).join(' | ');
    const badges = renderManufacturerBadges(manufacturer);

    const website = manufacturer.website ? escapeAttribute(manufacturer.website) : '';
    const sortName = String(manufacturer.name || '').toLowerCase();
    const sortDescription = String(manufacturer.description || '').toLowerCase();
    const sortProducts = String((manufacturer.products || []).join(', ') || '').toLowerCase();
    const sortLinks = String(manufacturer.website || manufacturer.twitter || manufacturer.email || '').toLowerCase();

    return `
        <li class="manufacturer-item manufacturer-card${website ? ' is-clickable' : ''}"${website ? ` data-website="${website}"` : ''} data-search-text="${escapeAttribute(searchText)}" data-sort-name="${escapeAttribute(sortName)}" data-sort-description="${escapeAttribute(sortDescription)}" data-sort-products="${escapeAttribute(sortProducts)}" data-sort-links="${escapeAttribute(sortLinks)}">
            <div class="manufacturer-card-head">
                <div class="manufacturer-card-title">
                    ${manufacturer.website
                        ? `<a class="manufacturer-name" href="${escapeAttribute(manufacturer.website)}" target="_blank" rel="noopener">${escapeHtml(manufacturer.name)}</a>`
                        : `<span class="manufacturer-name">${escapeHtml(manufacturer.name)}</span>`}
                    <span class="manufacturer-location">${escapeHtml(location)}</span>
                </div>
                ${badges}
            </div>
            <p class="manufacturer-description">${escapeHtml(manufacturer.description || (needsDetails ? 'Details available on demand.' : ''))}</p>
            <div class="manufacturer-card-meta">
                <p class="manufacturer-products"><strong>Products:</strong> ${escapeHtml((manufacturer.products || []).join(', ') || 'n/a')}</p>
                <p class="manufacturer-links"><strong>Links:</strong> ${links}</p>
            </div>
        </li>
    `;
}

function renderManufacturerBadges(manufacturer) {
    const foundedLabel = formatEstablishedLabel(manufacturer.founded);
    const isEdmImport = manufacturer.source === 'IQS' && manufacturer.sourceCategory === 'EDM';

    if (!manufacturer.ycCompany && !manufacturer.ycBatch && !foundedLabel && !isEdmImport) {
        return '';
    }

    const badges = [];

    if (manufacturer.ycCompany) {
        badges.push('<span class="manufacturer-chip">YC</span>');
    }

    if (manufacturer.ycBatch) {
        badges.push(`<span class="manufacturer-chip manufacturer-chip-secondary">${escapeHtml(shortenYcBatch(manufacturer.ycBatch))}</span>`);
    }

    if (isEdmImport) {
        badges.push('<span class="manufacturer-chip manufacturer-chip-source">EDM</span>');
    }

    if (foundedLabel) {
        badges.push(`<span class="manufacturer-chip manufacturer-chip-secondary">${escapeHtml(foundedLabel)}</span>`);
    }

    return `<div class="manufacturer-chips">${badges.join('')}</div>`;
}

function formatWebsiteLabel(website) {
    if (!website) {
        return '';
    }

    try {
        const hostname = new URL(website).hostname.toLowerCase();
        return hostname.replace(/^www\./, '');
    } catch (error) {
        return String(website)
            .replace(/^https?:\/\//i, '')
            .replace(/^www\./i, '')
            .replace(/\/.*$/, '');
    }
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
    summaryParts.push(`${boardData.categorizedCount} categorized`);
    summaryParts.push(`${boardData.unmappedManufacturers.length} uncategorized`);

    resultsCount.textContent = summaryParts.join('  |  ');
}

function attachBoardEventListeners() {
    directoryGrid.querySelectorAll('.subcategory-card.has-data').forEach(card => {
        card.addEventListener('click', () => {
            const section = card.closest('.section-board');
            const contentArea = section.querySelector('.section-content-area');
            const isUncategorized = card.getAttribute('data-is-uncategorized') === 'true';
            const manufacturers = isUncategorized
                ? lastRenderedUnmappedManufacturers
                : JSON.parse(decodeURIComponent(card.getAttribute('data-manufacturers') || '[]'));
            const maxRows = 2000;
            const isTrimmed = manufacturers.length > maxRows;
            const visibleManufacturers = isTrimmed ? manufacturers.slice(0, maxRows) : manufacturers;
            const canLoadMoreMfg = isUncategorized && mfgTotalAvailable > mfgLoadedCount;

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
                ${isTrimmed ? `<p class="table-limit-note">Showing first ${maxRows.toLocaleString()} of ${manufacturers.length.toLocaleString()} companies for performance. Use filters to narrow and view more.</p>` : ''}
                ${canLoadMoreMfg ? `<p class="table-limit-note">Loaded ${mfgLoadedCount.toLocaleString()} of ${mfgTotalAvailable.toLocaleString()} MFG companies. <button type="button" class="load-more-mfg">Load more names</button></p>` : ''}
                <div class="subcategory-search">
                    <input type="search" class="subcategory-search-input" placeholder="Search companies in this list..." aria-label="Search companies in this list">
                    <button type="button" class="manufacturer-sort-btn manufacturer-sort-company" data-sort-key="name">Sort Company</button>
                    <span class="subcategory-search-count">${visibleManufacturers.length.toLocaleString()} shown</span>
                </div>
                <ul class="manufacturer-list manufacturer-card-list">
                    ${visibleManufacturers.map(renderManufacturerMarkup).join('')}
                </ul>
            `;
            contentArea.style.display = 'block';

            const searchInput = contentArea.querySelector('.subcategory-search-input');
            const searchCount = contentArea.querySelector('.subcategory-search-count');
            if (searchInput && searchCount) {
                searchInput.addEventListener('input', () => {
                    const query = searchInput.value.trim().toLowerCase();
                    let visibleRows = 0;

                    contentArea.querySelectorAll('.manufacturer-item').forEach((row) => {
                        const haystack = row.getAttribute('data-search-text') || '';
                        const isMatch = !query || haystack.includes(query);
                        row.style.display = isMatch ? '' : 'none';
                        if (isMatch) {
                            visibleRows += 1;
                        }
                    });

                    searchCount.textContent = `${visibleRows.toLocaleString()} shown`;
                });
            }

            const companySortBtn = contentArea.querySelector('.manufacturer-sort-company');
            if (companySortBtn) {
                companySortBtn.addEventListener('click', () => {
                    const list = contentArea.querySelector('.manufacturer-list');
                    if (!list) {
                        return;
                    }

                    const previousSortDirection = contentArea.getAttribute('data-sort-direction') || 'asc';
                    const nextDirection = previousSortDirection === 'asc' ? 'desc' : 'asc';
                    contentArea.setAttribute('data-sort-direction', nextDirection);

                    const rows = Array.from(list.querySelectorAll('.manufacturer-item'));
                    rows.sort((a, b) => {
                        const left = (a.getAttribute('data-sort-name') || '').toLowerCase();
                        const right = (b.getAttribute('data-sort-name') || '').toLowerCase();
                        const compare = left.localeCompare(right);
                        return nextDirection === 'asc' ? compare : -compare;
                    });

                    rows.forEach((row) => list.appendChild(row));
                    companySortBtn.classList.add('is-active');
                    companySortBtn.classList.toggle('is-desc', nextDirection === 'desc');
                });
            }

            contentArea.querySelectorAll('.manufacturer-item.is-clickable').forEach((item) => {
                item.addEventListener('click', (event) => {
                    if (event.target.closest('a, button')) {
                        return;
                    }

                    const website = item.getAttribute('data-website');
                    if (website) {
                        window.open(website, '_blank', 'noopener');
                    }
                });
            });

            contentArea.querySelectorAll('.load-company-details').forEach((button) => {
                button.addEventListener('click', async (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    const id = Number(button.getAttribute('data-company-id') || 0);
                    if (!id) {
                        return;
                    }

                    const li = button.closest('.manufacturer-item');
                    if (!li) {
                        return;
                    }

                    button.disabled = true;
                    button.textContent = 'loading...';

                    const company = await fetchCompanyDetails(id);
                    if (!company) {
                        button.textContent = 'unavailable';
                        return;
                    }

                    const manufacturer = manufacturers.find((row) => row.id === id);
                    if (manufacturer) {
                        Object.assign(manufacturer, company, { detailsLoaded: true });
                    }

                    li.outerHTML = renderManufacturerMarkup({
                        ...(manufacturer || company),
                        detailsLoaded: true
                    });
                });
            });

            contentArea.querySelectorAll('.load-more-mfg').forEach((button) => {
                button.addEventListener('click', async (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    button.disabled = true;
                    button.textContent = 'loading more...';
                    await loadNextMfgCompaniesPage();
                    filterManufacturers();
                });
            });
        });
    });
}

async function fetchCompanyDetails(companyId) {
    if (companyDetailsCache.has(companyId)) {
        return companyDetailsCache.get(companyId);
    }

    try {
        const response = await fetch(`/api/company-details?id=${encodeURIComponent(String(companyId))}`);
        if (!response.ok) {
            return null;
        }

        const payload = await response.json();
        if (!payload || !payload.company) {
            return null;
        }

        companyDetailsCache.set(companyId, payload.company);
        return payload.company;
    } catch (error) {
        return null;
    }
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

function normalizeSearchText(value) {
    return String(value || '')
        .toLowerCase()
        .replace(/[^a-z0-9@.]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function getManufacturerSearchText(manufacturer) {
    return normalizeSearchText([
        manufacturer.name,
        manufacturer.industry,
        manufacturer.description,
        (manufacturer.products || []).join(' '),
        manufacturer.location?.city,
        manufacturer.location?.state,
        manufacturer.website,
        manufacturer.email
    ].filter(Boolean).join(' '));
}

function getSearchTokens(value) {
    return normalizeSearchText(value)
        .split(' ')
        .filter(Boolean)
        .filter(token => ![
            'a',
            'an',
            'and',
            'co',
            'company',
            'companies',
            'corp',
            'find',
            'for',
            'inc',
            'llc',
            'manufacturer',
            'manufacturers',
            'manufacturing',
            'the'
        ].includes(token));
}

function matchesSearchQuery(manufacturer, searchQuery) {
    const tokens = getSearchTokens(searchQuery);
    if (!tokens.length) {
        return true;
    }

    const searchable = getManufacturerSearchText(manufacturer);
    return tokens.every(token => searchable.includes(token));
}

function filterManufacturers() {
    const selectedState = stateFilter.value;
    const selectedIndustry = industryFilter.value;
    const searchQuery = normalizeSearchText(mapSearchInput?.value || '');

    filteredManufacturers = manufacturers.filter(manufacturer => {
        const matchesState = selectedState === '' || manufacturer.location.state === selectedState;
        const matchesIndustry = selectedIndustry === '' || manufacturer.industry === selectedIndustry;
        const matchesSearch = matchesSearchQuery(manufacturer, searchQuery);

        return matchesState && matchesIndustry && matchesSearch;
    });

    if (currentView === 'tree') {
        renderManufacturers(filteredManufacturers);

        // Auto-expand first subcategory when industry filter is selected
        if (selectedIndustry && selectedIndustry !== '') {
            const firstSubcategory = directoryGrid.querySelector('.subcategory-card.has-data');
            if (firstSubcategory) {
                firstSubcategory.click();
            }
        }
    }

    if (currentView === 'graph') {
        renderGraph(filteredManufacturers);
    }

    renderMapSearchResults();
}

function clearFilters() {
    stateFilter.value = '';
    industryFilter.value = '';
    if (mapSearchInput) {
        mapSearchInput.value = '';
    }
    activeMapCategory = null;
    activeMapState = null;
    closeMapDetailPanel();
    clearMapSearchResults();
    if (usMap) {
        usMap.fitBounds(lower48Bounds, {
            padding: [18, 18],
            maxZoom: 5,
            animate: true
        });
    }
    filterManufacturers();
}

function renderMapSearchResults() {
    if (!mapSearchResults || !mapSearchInput) {
        return;
    }

    const query = mapSearchInput.value.trim();
    if (!query) {
        clearMapSearchResults();
        return;
    }

    const visibleMatches = rankSearchResults(filteredManufacturers, query).slice(0, 30);
    mapSearchResults.hidden = false;

    if (!visibleMatches.length) {
        mapSearchResults.innerHTML = `
            <p class="map-search-empty">No matching companies yet.</p>
        `;
        return;
    }

    mapSearchResults.innerHTML = `
        <div class="map-search-results-head">
            <strong>${visibleMatches.length.toLocaleString()} shown</strong>
            <span>${filteredManufacturers.length.toLocaleString()} matches</span>
        </div>
        <div class="map-search-result-list">
            ${visibleMatches.map(renderMapSearchResultButton).join('')}
        </div>
    `;

    mapSearchResults.querySelectorAll('[data-company-id]').forEach((button) => {
        button.addEventListener('click', async () => {
            const companyId = button.getAttribute('data-company-id');
            const manufacturer = manufacturers.find((entry) => String(entry.id) === String(companyId));
            if (manufacturer) {
                await showSearchCompanyDetail(manufacturer);
            }
        });
    });
}

function rankSearchResults(items, query) {
    const normalizedQuery = normalizeSearchText(query);
    return [...items].sort((a, b) => {
        const aScore = getSearchResultScore(a, normalizedQuery);
        const bScore = getSearchResultScore(b, normalizedQuery);
        if (aScore !== bScore) {
            return bScore - aScore;
        }
        return a.name.localeCompare(b.name);
    });
}

function getSearchResultScore(manufacturer, normalizedQuery) {
    const name = normalizeSearchText(manufacturer.name);
    const industry = normalizeSearchText(manufacturer.industry);
    const products = normalizeSearchText((manufacturer.products || []).join(' '));
    let score = 0;

    if (name === normalizedQuery) score += 100;
    if (name.startsWith(normalizedQuery)) score += 60;
    if (name.includes(normalizedQuery)) score += 35;
    if (industry.includes(normalizedQuery)) score += 20;
    if (products.includes(normalizedQuery)) score += 12;
    if (manufacturer.description) score += 2;
    if (manufacturer.website) score += 1;
    return score;
}

function renderMapSearchResultButton(manufacturer) {
    const location = formatLocation(manufacturer.location) || 'Location unavailable';
    const description = manufacturer.description || (manufacturer.products || []).slice(0, 3).join(', ') || manufacturer.industry || 'Manufacturing company';

    return `
        <button class="map-search-result" type="button" data-company-id="${escapeAttribute(manufacturer.id)}">
            <span class="map-search-result-title">${escapeHtml(manufacturer.name || 'Unnamed company')}</span>
            <span class="map-search-result-meta">${escapeHtml([manufacturer.industry, location].filter(Boolean).join(' | '))}</span>
            <span class="map-search-result-desc">${escapeHtml(description)}</span>
        </button>
    `;
}

async function showSearchCompanyDetail(manufacturer) {
    if (!mapSearchResults || !manufacturer) {
        return;
    }

    let company = manufacturer;
    if (manufacturer.source === 'MFG Companies import' && !manufacturer.detailsLoaded) {
        const details = await fetchCompanyDetails(manufacturer.id);
        if (details) {
            Object.assign(manufacturer, details, { detailsLoaded: true });
            company = manufacturer;
        }
    }

    const coordinates = getManufacturerCoordinates(company);
    if (coordinates && usMap) {
        usMap.flyTo(coordinates, Math.max(usMap.getZoom(), 7.2), {
            animate: true,
            duration: 0.75
        });
    }

    renderSearchCompanyDetail(company);
}

function renderSearchCompanyDetail(manufacturer) {
    const assignment = manufacturerAssignments.get(manufacturer.id);
    const categoryLabel = getMainCategoryLabel(assignment);
    const location = formatLocation(manufacturer.location) || 'Location unavailable';
    const products = (manufacturer.products || []).filter(Boolean);
    const website = manufacturer.website
        ? `<a href="${escapeAttribute(manufacturer.website)}" target="_blank" rel="noopener">${escapeHtml(formatWebsiteLabel(manufacturer.website))}</a>`
        : '<span>No website listed</span>';

    mapSearchResults.hidden = false;
    mapSearchResults.innerHTML = `
        <article class="map-search-detail">
            <button class="map-search-back" type="button">&larr; Results</button>
            <p class="map-detail-kicker">${escapeHtml(categoryLabel)}</p>
            <h2>${escapeHtml(manufacturer.name || 'Manufacturer')}</h2>
            <p class="map-detail-location">${escapeHtml(location)}</p>
            <p class="map-detail-description">${escapeHtml(manufacturer.description || 'No description available yet.')}</p>
            <dl class="map-detail-list">
                <div>
                    <dt>Sector</dt>
                    <dd>${escapeHtml(manufacturer.industry || 'Manufacturing')}</dd>
                </div>
                <div>
                    <dt>Products</dt>
                    <dd>${escapeHtml(products.length ? products.slice(0, 8).join(', ') : 'Not listed')}</dd>
                </div>
                <div>
                    <dt>Website</dt>
                    <dd>${website}</dd>
                </div>
            </dl>
        </article>
    `;

    const backButton = mapSearchResults.querySelector('.map-search-back');
    if (backButton) {
        backButton.addEventListener('click', renderMapSearchResults);
    }
}

function clearMapSearchResults() {
    if (mapSearchResults) {
        mapSearchResults.hidden = true;
        mapSearchResults.innerHTML = '';
    }
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

    const pendingMessage = appendChatMessage('bot', '');
    pendingMessage.classList.add('is-loading');
    pendingMessage.innerHTML = `
        <span class="typing-dots" aria-label="Assistant is typing" role="status">
            <span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>
        </span>
    `;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 50_000);

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            signal: controller.signal,
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
        pendingMessage.classList.remove('is-loading');
        pendingMessage.innerHTML = formatAssistantResponse(payload.answer || 'No response returned.');
        renderAssistantResults(payload.context || []);
    } catch (error) {
        pendingMessage.classList.remove('is-loading');
        if (error && error.name === 'AbortError') {
            pendingMessage.textContent = 'Assistant request timed out. Please try again.';
        } else {
            pendingMessage.textContent = error.message || 'Assistant request failed.';
        }
    } finally {
        clearTimeout(timeout);
        assistantRequestInFlight = false;
        chatSend.disabled = false;
        chatInput.disabled = false;
        openMobileAssistantPanel();
        chatInput.focus();
        scrollChatToBottom();
    }
}

function attachEventListeners() {
    stateFilter.addEventListener('change', filterManufacturers);
    industryFilter.addEventListener('change', filterManufacturers);
    if (mapSearchInput) {
        mapSearchInput.addEventListener('input', () => {
            window.clearTimeout(mapSearchDebounceTimer);
            mapSearchDebounceTimer = window.setTimeout(() => {
                activeMapCategory = null;
                activeMapState = null;
                closeMapDetailPanel();
                filterManufacturers();
            }, 120);
        });
    }
    clearFiltersBtn.addEventListener('click', clearFilters);

    treeViewBtn.addEventListener('click', () => switchView('tree'));
    graphViewBtn.addEventListener('click', () => switchView('graph'));
    if (mapModeCategoriesBtn) {
        mapModeCategoriesBtn.addEventListener('click', () => {
            mapDisplayMode = 'clusters';
            mapModeCategoriesBtn.classList.add('active');
            mapModeCompaniesBtn?.classList.remove('active');
            if (currentView === 'graph') {
                renderGraph(filteredManufacturers);
            }
        });
    }
    if (mapModeCompaniesBtn) {
        mapModeCompaniesBtn.addEventListener('click', () => {
            mapDisplayMode = 'clusters';
            mapModeCompaniesBtn.classList.add('active');
            mapModeCategoriesBtn?.classList.remove('active');
            if (currentView === 'graph') {
                renderGraph(filteredManufacturers);
            }
        });
    }

    chatSend.addEventListener('click', sendChatMessage);
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendChatMessage();
        }
    });
    chatInput.addEventListener('focus', () => {
        setAssistantExpanded(true);
    });

    if (funFactTrigger) {
        funFactTrigger.addEventListener('click', rotateFunFact);
    }

    if (assistantMobileToggle) {
        assistantMobileToggle.addEventListener('click', toggleMobileAssistantPanel);
    }

    if (assistantMobileBackdrop) {
        assistantMobileBackdrop.addEventListener('click', closeMobileAssistantPanel);
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMobileAssistantPanel();
        }
    });

    document.addEventListener('click', (event) => {
        if (isMobileViewport() || !assistantPanel) {
            return;
        }

        const target = event.target;
        if (!(target instanceof Node)) {
            return;
        }

        if (!assistantPanel.contains(target)) {
            setAssistantExpanded(false);
        }
    });

    window.addEventListener('resize', () => {
        if (!isMobileViewport()) {
            closeMobileAssistantPanel();
        }
        if (currentView === 'graph' && usMap) {
            usMap.invalidateSize();
        }
    });

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

function isMobileViewport() {
    return window.matchMedia('(max-width: 720px)').matches;
}

function toggleMobileAssistantPanel() {
    if (!isMobileViewport()) {
        chatInput.focus();
        return;
    }

    if (assistantPanel && assistantPanel.classList.contains('is-mobile-open')) {
        closeMobileAssistantPanel();
    } else {
        openMobileAssistantPanel();
    }
}

function openMobileAssistantPanel() {
    if (!isMobileViewport() || !assistantPanel) {
        return;
    }

    assistantPanel.classList.add('is-mobile-open');
    document.body.classList.add('has-mobile-chat-open');

    if (assistantMobileBackdrop) {
        assistantMobileBackdrop.hidden = false;
        assistantMobileBackdrop.classList.add('is-visible');
    }

    if (assistantMobileToggle) {
        assistantMobileToggle.setAttribute('aria-expanded', 'true');
    }
}

function closeMobileAssistantPanel() {
    if (!assistantPanel) {
        return;
    }

    assistantPanel.classList.remove('is-mobile-open');
    document.body.classList.remove('has-mobile-chat-open');

    if (assistantMobileBackdrop) {
        assistantMobileBackdrop.classList.remove('is-visible');
        assistantMobileBackdrop.hidden = true;
    }

    if (assistantMobileToggle) {
        assistantMobileToggle.setAttribute('aria-expanded', 'false');
    }
}

function setAssistantExpanded(expanded) {
    if (!assistantPanel || isMobileViewport()) {
        return;
    }

    assistantPanel.classList.toggle('is-expanded', Boolean(expanded));
}

function switchView(view) {
    currentView = view;
    document.body.classList.toggle('is-map-view', view === 'graph');

    if (view === 'tree') {
        treeViewBtn.classList.add('active');
        graphViewBtn.classList.remove('active');
        renderManufacturers(filteredManufacturers);
        directoryGrid.style.display = 'block';
        graphContainer.style.display = 'none';
        if (scrollStory) {
            scrollStory.style.display = 'block';
        }
        return;
    }

    treeViewBtn.classList.remove('active');
    graphViewBtn.classList.add('active');
    directoryGrid.style.display = 'none';
    graphContainer.style.display = 'block';
    if (scrollStory) {
        scrollStory.style.display = 'block';
    }
    renderGraph(filteredManufacturers);
}

function buildMapPins(manufacturersToGraph) {
    const pins = [];

    manufacturersToGraph.forEach(manufacturer => {
        const coordinates = getManufacturerCoordinates(manufacturer);
        if (!coordinates) {
            return;
        }

        const assignment = manufacturerAssignments.get(manufacturer.id);
        const categoryLabel = getMapCategoryLabel(assignment, manufacturer);
        const stateLabel = manufacturer.location?.state || 'Unknown state';
        if (activeMapCategory && categoryLabel !== activeMapCategory) {
            return;
        }
        if (activeMapState && stateLabel !== activeMapState) {
            return;
        }

        pins.push({
            manufacturer,
            coordinates,
            markerColor: getCategoryColor(assignment, manufacturer),
            categoryLabel,
            stateLabel,
            location: formatLocation(manufacturer.location)
        });
    });

    return pins;
}

function buildAggregateMapPins(pins) {
    const zoom = usMap?.getZoom() || defaultUSView.zoom;
    const drillLevel = getMapDrillLevel();
    const buckets = new Map();

    pins.forEach((pin) => {
        const stateLabel = pin.stateLabel || pin.manufacturer.location?.state || 'Unknown state';
        const key = getClusterBucketKey(pin, drillLevel, zoom, stateLabel);
        const bucket = buckets.get(key) || {
            coordinates: getInitialClusterCoordinates(pin, drillLevel, stateLabel),
            coordinateTotals: [0, 0],
            markerColor: pin.markerColor,
            categoryLabel: activeMapCategory || 'Manufacturers',
            stateLabel,
            location: getClusterLocationLabel(drillLevel, stateLabel),
            count: 0,
            segments: new Map(),
            samples: [],
            isAggregate: true,
            drillLevel
        };

        bucket.coordinateTotals[0] += pin.coordinates[0];
        bucket.coordinateTotals[1] += pin.coordinates[1];
        bucket.count += 1;
        const segment = bucket.segments.get(pin.categoryLabel) || {
            categoryLabel: pin.categoryLabel,
            markerColor: pin.markerColor,
            count: 0
        };
        segment.count += 1;
        bucket.segments.set(pin.categoryLabel, segment);
        if (bucket.samples.length < 3) {
            bucket.samples.push(pin.manufacturer.name);
        }
        buckets.set(key, bucket);
    });

    return Array.from(buckets.values()).map((bucket) => {
        const useStateCentroid = bucket.drillLevel === 'national';
        return {
            ...bucket,
            coordinates: useStateCentroid
                ? bucket.coordinates
                : [
                    bucket.coordinateTotals[0] / bucket.count,
                    bucket.coordinateTotals[1] / bucket.count
                ],
            segments: Array.from(bucket.segments.values())
                .sort((a, b) => b.count - a.count)
                .map((segment) => ({
                    ...segment,
                    percent: segment.count / bucket.count
                }))
        };
    });
}

function getInitialClusterCoordinates(pin, drillLevel, stateLabel) {
    if (drillLevel === 'national') {
        const stateKey = resolveStateKey(normalizeGeographyToken(stateLabel));
        if (stateKey && stateCentroids[stateKey]) {
            return stateCentroids[stateKey];
        }
    }

    return [...pin.coordinates];
}

function getMapDrillLevel() {
    const zoom = usMap?.getZoom() || defaultUSView.zoom;
    if (zoom >= 8) {
        return 'local';
    }
    if (zoom >= 6) {
        return 'state';
    }
    return 'national';
}

function getClusterBucketKey(pin, drillLevel, zoom, stateLabel) {
    if (drillLevel === 'national') {
        return stateLabel;
    }

    return `${stateLabel}|${getSpatialBucketKey(pin.coordinates, zoom)}`;
}

function getClusterLocationLabel(drillLevel, stateLabel) {
    if (drillLevel === 'national') {
        return stateLabel;
    }

    if (drillLevel === 'state') {
        return `${stateLabel} region`;
    }

    return 'Local cluster';
}

function getSpatialBucketKey(coordinates, zoom) {
    const cellSize = zoom >= 8 ? 0.26 : zoom >= 7 ? 0.42 : 0.78;
    const latBucket = Math.floor(coordinates[0] / cellSize);
    const lngBucket = Math.floor(coordinates[1] / cellSize);
    return `${latBucket}|${lngBucket}`;
}

function getAggregateMarkerRadius(count) {
    return Math.min(34, Math.max(9, Math.log10((count || 1) + 1) * 9.5));
}

function createClusterMarkerIcon(pin) {
    const isNational = pin.drillLevel === 'national';
    const radius = isNational ? 13 : getAggregateMarkerRadius(pin.count);
    const size = Math.ceil(radius * 2 + 10);
    const center = size / 2;
    const dominantColor = getClusterDominantColor(pin);

    return L.divIcon({
        className: 'cluster-ring-icon',
        iconSize: [size, size],
        iconAnchor: [center, center],
        html: `
            <svg class="cluster-ring-svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" aria-hidden="true">
                <circle cx="${center}" cy="${center}" r="${radius + 3}" fill="#ffffff" fill-opacity="0.92"></circle>
                <circle cx="${center}" cy="${center}" r="${radius}" fill="${escapeAttribute(lightenColor(dominantColor, 0.58))}" fill-opacity="${isNational ? '0.32' : '0.74'}" stroke="${escapeAttribute(dominantColor)}" stroke-width="${isNational ? '2.2' : '2.8'}"></circle>
                <circle cx="${center}" cy="${center}" r="${Math.max(5, radius * 0.48)}" fill="#ffffff" fill-opacity="0.9"></circle>
                <text x="${center}" y="${center}" text-anchor="middle" dominant-baseline="central">${formatClusterCount(pin.count)}</text>
            </svg>
        `
    });
}

function getClusterDominantColor(pin) {
    return pin.segments?.[0]?.markerColor || pin.markerColor || '#56B4E9';
}

function lightenColor(hexColor, amount = 0.62) {
    const normalized = String(hexColor || '').replace('#', '');
    if (!/^[0-9a-f]{6}$/i.test(normalized)) {
        return '#dbeafe';
    }

    const numeric = Number.parseInt(normalized, 16);
    const r = (numeric >> 16) & 255;
    const g = (numeric >> 8) & 255;
    const b = numeric & 255;
    const lighten = (channel) => Math.round(channel + (255 - channel) * amount);
    return `rgb(${lighten(r)}, ${lighten(g)}, ${lighten(b)})`;
}

function formatClusterCount(count) {
    if (count >= 1000) {
        return `${Math.round(count / 1000)}k`;
    }

    return String(count);
}

function getMapTooltipMarkup(pin) {
    if (pin.isAggregate) {
        const samples = pin.samples?.length
            ? `<span>${escapeHtml(pin.samples.join(', '))}</span>`
            : '';
        const topSegments = pin.segments?.slice(0, 3).map((segment) => (
            `${segment.categoryLabel} ${Math.round(segment.percent * 100)}%`
        )).join(' | ');
        const action = pin.drillLevel === 'local'
            ? 'Click to inspect nearby manufacturers'
            : 'Click to zoom into this cluster';
        return `
            <strong>${pin.count.toLocaleString()} manufacturers</strong>
            <span>${escapeHtml(pin.location)}</span>
            ${topSegments ? `<span>${escapeHtml(topSegments)}</span>` : ''}
            ${samples}
            <span>${escapeHtml(action)}</span>
        `;
    }

    return `
        <strong>${escapeHtml(pin.manufacturer.name || 'Manufacturer')}</strong>
        <span>${escapeHtml(pin.location || 'Location unavailable')}</span>
        <span>${escapeHtml(pin.categoryLabel || pin.manufacturer.industry || 'Manufacturing')}</span>
    `;
}

function updateMapModeHint(mappableCount, renderedCount) {
    if (!resultsCount) {
        return;
    }

    const drillLabel = {
        national: 'state clusters',
        state: 'regional clusters',
        local: 'local clusters'
    }[getMapDrillLevel()];
    resultsCount.textContent = `${filteredManufacturers.length.toLocaleString()} matches | ${mappableCount.toLocaleString()} mappable | ${renderedCount.toLocaleString()} ${drillLabel} | click clusters to zoom`;
}

function showMapDetailPanel(manufacturer) {
    if (!mapDetailPanel || !manufacturer) {
        return;
    }

    const location = formatLocation(manufacturer.location);
    const assignment = manufacturerAssignments.get(manufacturer.id);
    const categoryLabel = getMainCategoryLabel(assignment);
    const website = manufacturer.website
        ? `<a href="${escapeAttribute(manufacturer.website)}" target="_blank" rel="noopener">${escapeHtml(formatWebsiteLabel(manufacturer.website))}</a>`
        : '<span>No website listed</span>';
    const products = (manufacturer.products || []).filter(Boolean);

    mapDetailPanel.innerHTML = `
        <button class="map-detail-close" type="button" aria-label="Close place details">&times;</button>
        <p class="map-detail-kicker">${escapeHtml(categoryLabel)}</p>
        <h2>${escapeHtml(manufacturer.name || 'Manufacturer')}</h2>
        <p class="map-detail-location">${escapeHtml(location || 'Location unavailable')}</p>
        <p class="map-detail-description">${escapeHtml(manufacturer.description || 'No description available yet.')}</p>
        <dl class="map-detail-list">
            <div>
                <dt>Sector</dt>
                <dd>${escapeHtml(manufacturer.industry || 'Manufacturing')}</dd>
            </div>
            <div>
                <dt>Products</dt>
                <dd>${escapeHtml(products.length ? products.slice(0, 6).join(', ') : 'Not listed')}</dd>
            </div>
            <div>
                <dt>Website</dt>
                <dd>${website}</dd>
            </div>
        </dl>
    `;
    mapDetailPanel.hidden = false;

    const closeButton = mapDetailPanel.querySelector('.map-detail-close');
    if (closeButton) {
        closeButton.addEventListener('click', closeMapDetailPanel);
    }
}

function closeMapDetailPanel() {
    if (mapDetailPanel) {
        mapDetailPanel.hidden = true;
        mapDetailPanel.innerHTML = '';
    }
}

function renderGraph(manufacturersToGraph) {
    generateMapLegend(manufacturersToGraph);

    if (!networkGraphEl) {
        return;
    }

    if (typeof L === 'undefined') {
        staticSvgRenderToken += 1;
        renderStaticSvgMap([], staticSvgRenderToken);
        return;
    }

    initializeUSMap();

    if (!usMap || !markerLayer) {
        return;
    }

    markerLayer.clearLayers();

    const pins = buildMapPins(manufacturersToGraph);
    const visiblePins = buildAggregateMapPins(pins);
    updateStateClusterStyles(visiblePins);

    if (!shouldRenderClusterMarkers()) {
        updateMapModeHint(pins.length, visiblePins.length);
        return;
    }

    visiblePins.forEach((pin) => {
        const marker = L.marker(pin.coordinates, {
            icon: createClusterMarkerIcon(pin),
            keyboard: false
        });

        marker.bindTooltip(getMapTooltipMarkup(pin), {
            direction: 'top',
            offset: [0, -8],
            opacity: 0.96,
            sticky: true
        });

        marker.on('click', () => {
            drillIntoMapCluster(pin);
        });

        marker.addTo(markerLayer);
    });

    updateMapModeHint(pins.length, visiblePins.length);
}

function drillIntoMapCluster(pin) {
    if (!usMap || !pin) {
        return;
    }

    activeMapState = pin.stateLabel || activeMapState;
    closeMapDetailPanel();

    const currentZoom = usMap.getZoom();
    if (pin.drillLevel === 'national') {
        usMap.flyTo(pin.coordinates, Math.max(6.3, currentZoom + 1.6), {
            animate: true,
            duration: 0.85
        });
        return;
    }

    if (pin.drillLevel === 'state') {
        usMap.flyTo(pin.coordinates, Math.max(8.1, currentZoom + 1.4), {
            animate: true,
            duration: 0.85
        });
        return;
    }

    showClusterDetailPanel(pin);
    usMap.flyTo(pin.coordinates, Math.min(9.4, Math.max(currentZoom, 8.4)), {
        animate: true,
        duration: 0.5
    });
}

function showClusterDetailPanel(pin) {
    if (!mapDetailPanel || !pin) {
        return;
    }

    mapDetailPanel.innerHTML = `
        <button class="map-detail-close" type="button" aria-label="Close cluster details">&times;</button>
        <p class="map-detail-kicker">${escapeHtml(pin.categoryLabel || 'Manufacturers')}</p>
        <h2>${pin.count.toLocaleString()} manufacturers</h2>
        <p class="map-detail-location">${escapeHtml(pin.location || pin.stateLabel || 'U.S. cluster')}</p>
        <p class="map-detail-description">This cluster groups nearby companies in the selected category. Use search or filters to narrow to specific names.</p>
        ${pin.samples?.length ? `
            <dl class="map-detail-list">
                <div>
                    <dt>Examples</dt>
                    <dd>${escapeHtml(pin.samples.join(', '))}</dd>
                </div>
            </dl>
        ` : ''}
    `;
    mapDetailPanel.hidden = false;

    const closeButton = mapDetailPanel.querySelector('.map-detail-close');
    if (closeButton) {
        closeButton.addEventListener('click', closeMapDetailPanel);
    }
}

function updateStateClusterStyles(visiblePins) {
    currentStateClusterStyles = new Map();
    const stateBuckets = new Map();

    visiblePins.forEach((pin) => {
        const stateKey = resolveStateKey(normalizeGeographyToken(pin.stateLabel));
        if (!stateKey || !Array.isArray(pin.segments)) {
            return;
        }

        const stateBucket = stateBuckets.get(stateKey) || {
            count: 0,
            segments: new Map()
        };
        stateBucket.count += pin.count;

        pin.segments.forEach((segment) => {
            const existingSegment = stateBucket.segments.get(segment.categoryLabel) || {
                categoryLabel: segment.categoryLabel,
                markerColor: segment.markerColor,
                count: 0
            };
            existingSegment.count += segment.count;
            stateBucket.segments.set(segment.categoryLabel, existingSegment);
        });

        stateBuckets.set(stateKey, stateBucket);
    });

    stateBuckets.forEach((bucket, stateKey) => {
        const segments = Array.from(bucket.segments.values())
            .sort((a, b) => b.count - a.count)
            .map((segment) => ({
                ...segment,
                percent: segment.count / bucket.count
            }));
        const dominantSegment = segments[0];

        if (dominantSegment) {
            currentStateClusterStyles.set(stateKey, {
                gradientId: `state-mix-${stateKey.replace(/[^a-z0-9]+/g, '-')}`,
                strokeColor: dominantSegment.markerColor,
                count: bucket.count,
                segments
            });
        }
    });

    refreshVectorBaseMapStyles();
    updateStateGradientDefinitions();
}

function shouldRenderClusterMarkers() {
    return getMapDrillLevel() === 'local' && Boolean(normalizeSearchText(mapSearchInput?.value || ''));
}

function refreshVectorBaseMapStyles() {
    if (!vectorBaseLayer) {
        return;
    }

    vectorBaseLayer.setStyle((feature) => getStateFeatureStyle(feature));
}

function updateStateGradientDefinitions() {
    const svg = networkGraphEl?.querySelector('.leaflet-overlay-pane svg');
    if (!svg) {
        return;
    }

    let defs = svg.querySelector('defs');
    if (!defs) {
        defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        svg.insertBefore(defs, svg.firstChild);
    }

    defs.querySelectorAll('[id^="state-mix-"]').forEach((node) => node.remove());

    currentStateClusterStyles.forEach((style) => {
        if (!style.gradientId || !Array.isArray(style.segments)) {
            return;
        }

        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
        gradient.setAttribute('id', style.gradientId);
        gradient.setAttribute('cx', '50%');
        gradient.setAttribute('cy', '50%');
        gradient.setAttribute('r', '75%');
        gradient.setAttribute('fx', '42%');
        gradient.setAttribute('fy', '38%');

        let offset = 0;
        style.segments.forEach((segment) => {
            const start = offset;
            const end = Math.min(1, offset + segment.percent);
            const color = lightenColor(segment.markerColor, 0.48);
            appendGradientStop(gradient, start, color);
            appendGradientStop(gradient, end, color);
            offset = end;
        });

        defs.appendChild(gradient);
    });

    applyStateGradientFills();
}

function applyStateGradientFills() {
    if (!vectorBaseLayer) {
        return;
    }

    vectorBaseLayer.eachLayer((layer) => {
        const stateKey = getStateFeatureKey(layer.feature);
        const clusterStyle = currentStateClusterStyles.get(stateKey);
        if (clusterStyle?.gradientId && layer._path) {
            layer._path.setAttribute('fill', `url(#${clusterStyle.gradientId})`);
        }
    });
}

function appendGradientStop(gradient, offset, color) {
    const stop = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop.setAttribute('offset', `${Math.round(offset * 1000) / 10}%`);
    stop.setAttribute('stop-color', color);
    gradient.appendChild(stop);
}

function initializeUSMap() {
    if (usMap || typeof L === 'undefined') {
        return;
    }

    mapMarkerRenderer = L.canvas({ padding: 0.35 });
    usMap = L.map(networkGraphEl, {
        center: defaultUSView.center,
        zoom: defaultUSView.zoom,
        minZoom: 3,
        maxZoom: 12,
        zoomControl: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
        touchZoom: false,
        preferCanvas: true
    });

    stateSvgRenderer = L.svg({ padding: 0.2 });
    referenceLayer = L.layerGroup().addTo(usMap);
    addReferenceMapChrome();
    addVectorBaseMap();

    usMap.fitBounds(lower48Bounds, {
        padding: [18, 18],
        maxZoom: 5
    });

    markerLayer = L.layerGroup().addTo(usMap);
    usMap.on('zoomend moveend', () => {
        if (currentView === 'graph') {
            renderGraph(filteredManufacturers);
        }
    });
}

async function addVectorBaseMap() {
    if (!usMap || !window.topojson) {
        return;
    }

    try {
        const usTopoJson = await loadUsTopoJson();
        if (!usMap || vectorBaseLayer) {
            return;
        }

        const states = window.topojson.feature(usTopoJson, usTopoJson.objects.states);
        vectorBaseLayer = L.geoJSON(states, {
            interactive: true,
            renderer: stateSvgRenderer,
            style: getStateFeatureStyle,
            onEachFeature: (feature, layer) => {
                layer.bindTooltip(() => getStateTooltipMarkup(feature), {
                    direction: 'top',
                    opacity: 0.96,
                    sticky: true
                });
                layer.on('mousemove', (event) => updateStateHoverTooltip(feature, layer, event));
                layer.on('mouseout', () => layer.setTooltipContent(getStateTooltipMarkup(feature)));
                layer.on('click', () => drillIntoStateFeature(feature));
            }
        }).addTo(usMap);
        vectorBaseLayer.bringToBack();
        refreshVectorBaseMapStyles();
        updateStateGradientDefinitions();
    } catch (error) {
        console.warn('Unable to load vector base map.', error);
    }
}

function updateStateHoverTooltip(feature, layer, event) {
    const segment = getStateSegmentAtPointer(feature, layer, event);
    layer.setTooltipContent(getStateTooltipMarkup(feature, segment));
}

function getStateSegmentAtPointer(feature, layer, event) {
    const stateKey = getStateFeatureKey(feature);
    const clusterStyle = currentStateClusterStyles.get(stateKey);
    if (!clusterStyle?.segments?.length || !layer?._path || !event?.originalEvent) {
        return null;
    }

    const bounds = layer._path.getBoundingClientRect();
    if (!bounds.width) {
        return null;
    }

    const ratio = Math.min(0.999, Math.max(0, (event.originalEvent.clientX - bounds.left) / bounds.width));
    let cumulative = 0;
    return clusterStyle.segments.find((segment) => {
        cumulative += segment.percent;
        return ratio <= cumulative;
    }) || clusterStyle.segments[clusterStyle.segments.length - 1];
}

function getStateTooltipMarkup(feature, focusedSegment = null) {
    const stateKey = getStateFeatureKey(feature);
    const clusterStyle = currentStateClusterStyles.get(stateKey);
    const stateName = stateFipsNames[String(feature?.id || '').padStart(2, '0')] || 'State';

    if (!clusterStyle) {
        return `<strong>${escapeHtml(stateName)}</strong><span>No mapped companies in current view</span>`;
    }

    if (focusedSegment) {
        return `
            <strong>${escapeHtml(focusedSegment.categoryLabel)}</strong>
            <span>${escapeHtml(stateName)} | ${focusedSegment.count.toLocaleString()} manufacturers | ${Math.round(focusedSegment.percent * 100)}%</span>
            <span>Click to zoom into this state</span>
        `;
    }

    const segments = clusterStyle.segments
        .slice(0, 6)
        .map((segment) => `${escapeHtml(segment.categoryLabel)}: ${Math.round(segment.percent * 100)}%`)
        .join('<br>');

    return `
        <strong>${escapeHtml(stateName)} | ${clusterStyle.count.toLocaleString()} manufacturers</strong>
        <span>${segments}</span>
        <span>Click to zoom into this state</span>
    `;
}

function drillIntoStateFeature(feature) {
    const stateKey = getStateFeatureKey(feature);
    const clusterStyle = currentStateClusterStyles.get(stateKey);
    if (!clusterStyle || !usMap) {
        return;
    }

    const coordinates = stateCentroids[stateKey];
    if (!coordinates) {
        return;
    }

    activeMapState = stateFipsNames[String(feature?.id || '').padStart(2, '0')] || activeMapState;
    closeMapDetailPanel();
    usMap.flyTo(coordinates, 6.3, {
        animate: true,
        duration: 0.85
    });
}

function getStateFeatureStyle(feature) {
    const stateKey = getStateFeatureKey(feature);
    const clusterStyle = currentStateClusterStyles.get(stateKey);

    return {
        color: clusterStyle?.strokeColor || '#9aa7b6',
        weight: clusterStyle ? 1.25 : 1.15,
        opacity: clusterStyle ? 0.58 : 0.9,
        fillColor: clusterStyle?.gradientId ? `url(#${clusterStyle.gradientId})` : '#fbfcfe',
        fillOpacity: clusterStyle ? 0.9 : 0.94
    };
}

function getStateFeatureKey(feature) {
    const stateId = String(feature?.id || '').padStart(2, '0');
    const fipsStateName = stateFipsNames[stateId] || '';
    return normalizeGeographyToken(fipsStateName);
}

async function renderStaticSvgMap(pins, renderToken) {
    if (!networkGraphEl) {
        return;
    }

    const width = Math.max(980, networkGraphEl.clientWidth || 980);
    const height = Math.max(560, networkGraphEl.clientHeight || 560);
    if (!window.d3 || !window.topojson) {
        networkGraphEl.innerHTML = `<div class="map-fallback-message">Map geometry unavailable.</div>`;
        return;
    }

    let usTopoJson;
    try {
        usTopoJson = await loadUsTopoJson();
    } catch (error) {
        networkGraphEl.innerHTML = `<div class="map-fallback-message">Unable to load map geometry.</div>`;
        return;
    }

    if (renderToken !== staticSvgRenderToken) {
        return;
    }

    const nation = window.topojson.feature(usTopoJson, usTopoJson.objects.nation);
    const states = window.topojson.feature(usTopoJson, usTopoJson.objects.states);
    const projection = window.d3.geoAlbersUsa().fitExtent([[16, 12], [width - 16, height - 12]], nation);
    const geoPath = window.d3.geoPath(projection);

    const statesMarkup = states.features.map((feature) => (
        `<path d="${geoPath(feature)}" class="us-state-path"></path>`
    )).join('');

    const nationPath = geoPath(nation) || '';
    if (mapDisplayMode === 'companies') {
        networkGraphEl.innerHTML = `
            <div class="map-canvas-wrap">
                <svg class="us-static-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="U.S. map with all company pins">
                    <rect x="0" y="0" width="${width}" height="${height}" fill="#f7f7f8"></rect>
                    <path d="${nationPath}" class="us-nation-fill"></path>
                    <g class="us-states-layer">${statesMarkup}</g>
                </svg>
                <canvas class="us-pins-canvas" width="${width}" height="${height}" aria-hidden="true"></canvas>
            </div>
        `;
        renderCompanyPinsOnCanvas(pins, projection);
        return;
    }

    const pinMarkup = pins.map((pin) => {
        const projected = projection([pin.coordinates[1], pin.coordinates[0]]);
        if (!projected) {
            return '';
        }

        const radius = pin.isCategoryAggregate
            ? Math.min(11, Math.max(3, Math.log10((pin.count || 1) + 1) * 2.1))
            : 2.8;
        const name = pin.manufacturer.name || '';
        const details = pin.isCategoryAggregate
            ? `${pin.location || ''} · ${pin.count || 0} companies`
            : `${pin.location || 'Location unavailable'} · ${pin.categoryLabel}`;

        return `<circle cx="${projected[0].toFixed(1)}" cy="${projected[1].toFixed(1)}" r="${radius.toFixed(1)}" fill="${pin.markerColor}" fill-opacity="0.78" class="us-pin" data-company-name="${escapeAttribute(name)}" data-company-location="${escapeAttribute(details)}" data-company-category="${escapeAttribute(pin.categoryLabel || '')}">
            <title>${escapeHtml(name)} · ${escapeHtml(details)}</title>
        </circle>`;
    }).join('');

    networkGraphEl.innerHTML = `
        <svg class="us-static-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Static U.S. map with category pins">
            <rect x="0" y="0" width="${width}" height="${height}" fill="#f7f7f8"></rect>
            <path d="${nationPath}" class="us-nation-fill"></path>
            <g class="us-states-layer">${statesMarkup}</g>
            <g class="us-pins-layer">${pinMarkup}</g>
        </svg>
    `;

    attachMapPinHoverTooltips();
}

function renderCompanyPinsOnCanvas(pins, projection) {
    const canvas = networkGraphEl.querySelector('.us-pins-canvas');
    if (!canvas || !projection) {
        return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0.55;
    pins.forEach((pin) => {
        const projected = projection([pin.coordinates[1], pin.coordinates[0]]);
        if (!projected) {
            return;
        }
        ctx.fillStyle = pin.markerColor;
        ctx.fillRect(projected[0], projected[1], 1.6, 1.6);
    });
    ctx.globalAlpha = 1;
}

function attachMapPinHoverTooltips() {
    if (!networkGraphEl) {
        return;
    }

    let tooltip = networkGraphEl.querySelector('.map-pin-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'map-pin-tooltip';
        tooltip.hidden = true;
        networkGraphEl.appendChild(tooltip);
    }

    const showTooltip = (event) => {
        const target = event.currentTarget;
        if (!(target instanceof Element)) {
            return;
        }

        const company = target.getAttribute('data-company-name') || 'Company';
        const location = target.getAttribute('data-company-location') || '';
        const category = target.getAttribute('data-company-category') || '';
        tooltip.innerHTML = `
            <strong>${escapeHtml(company)}</strong>
            <span>${escapeHtml([location, category].filter(Boolean).join(' | '))}</span>
        `;
        tooltip.hidden = false;
        positionMapTooltip(event, tooltip);
    };

    const moveTooltip = (event) => {
        if (tooltip.hidden) {
            return;
        }
        positionMapTooltip(event, tooltip);
    };

    const hideTooltip = () => {
        tooltip.hidden = true;
    };

    networkGraphEl.querySelectorAll('.us-pin').forEach((pin) => {
        pin.addEventListener('mouseenter', showTooltip);
        pin.addEventListener('mousemove', moveTooltip);
        pin.addEventListener('mouseleave', hideTooltip);
    });
}

function positionMapTooltip(event, tooltip) {
    const containerRect = networkGraphEl.getBoundingClientRect();
    const offsetX = 12;
    const offsetY = 12;
    const left = event.clientX - containerRect.left + offsetX;
    const top = event.clientY - containerRect.top + offsetY;
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
}

async function loadUsTopoJson() {
    if (!usTopoJsonPromise) {
        usTopoJsonPromise = fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch US atlas: ${response.status}`);
                }
                return response.json();
            });
    }

    return usTopoJsonPromise;
}

function addReferenceMapChrome() {
    if (!usMap || !referenceLayer) {
        return;
    }

    usMap.setMaxBounds([
        [15, -170],
        [72, -52]
    ]);

    L.rectangle(lower48Bounds, {
        color: '#d7dde6',
        weight: 0,
        fillOpacity: 0,
        interactive: false
    }).addTo(referenceLayer);
}

function getManufacturerCoordinates(manufacturer) {
    const geoLat = Number(manufacturer.geo?.lat);
    const geoLon = Number(manufacturer.geo?.lon);
    if (Number.isFinite(geoLat) && Number.isFinite(geoLon)) {
        return [geoLat, geoLon];
    }

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

function getMapCategoryLabel(assignment, manufacturer) {
    return assignment?.subcategory || manufacturer?.industry || assignment?.section || 'Other';
}

function getCategoryColor(assignment, manufacturer) {
    return getIndustryColor(getMapCategoryLabel(assignment, manufacturer));
}

function generateMapLegend(manufacturersToGraph) {
    const mapLegend = document.getElementById('mapLegend');
    if (!mapLegend) return;

    const categoryColors = new Map();
    manufacturersToGraph.forEach(manufacturer => {
        const assignment = manufacturerAssignments.get(manufacturer.id);
        const categoryLabel = getMapCategoryLabel(assignment, manufacturer);
        if (activeMapCategory && categoryLabel !== activeMapCategory) {
            return;
        }
        const color = getCategoryColor(assignment, manufacturer);
        categoryColors.set(categoryLabel, color);
    });

    const sortedCategories = Array.from(categoryColors.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    if (sortedCategories.length === 0) {
        mapLegend.innerHTML = '';
        return;
    }

    mapLegend.innerHTML = `
        <h3>Cluster Colors</h3>
        <p class="legend-caption">Click a category, then click clusters to zoom from state to regional density.</p>
        <button class="legend-reset${activeMapCategory ? '' : ' is-active'}" type="button" data-category="">
            Show all clusters
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
            activeMapState = null;
            if (!activeMapCategory && usMap) {
                usMap.fitBounds(lower48Bounds, {
                    padding: [18, 18],
                    maxZoom: 5,
                    animate: true
                });
            }
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
        return;
    }

    let list = assistantResults.querySelector('.assistant-results-list');
    if (!list) {
        list = document.createElement('div');
        list.className = 'assistant-results-list';
        assistantResults.appendChild(list);
    }

    const existingKeys = new Set(
        Array.from(list.querySelectorAll('[data-company-key]'))
            .map(node => node.getAttribute('data-company-key') || '')
            .filter(Boolean)
    );

    items.forEach(item => {
        const name = item.name || 'Untitled';
        const companyKey = name.trim().toLowerCase();
        if (companyKey && existingKeys.has(companyKey)) {
            return;
        }

        const card = document.createElement('article');
        card.className = 'assistant-result-card';
        if (companyKey) {
            card.setAttribute('data-company-key', companyKey);
            existingKeys.add(companyKey);
        }

        const details = [item.category, item.industry, item.location].filter(Boolean).join(' | ');
        card.innerHTML = `
            <h3>${escapeHtml(name)}</h3>
            <p>${escapeHtml(details)}</p>
        `;
        list.appendChild(card);
    });
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

async function rotateFunFact() {
    if (!funFactCard || !funFactText || !manufacturingFunFacts.length) {
        return;
    }

    if (funFactTrigger) {
        funFactTrigger.disabled = true;
    }
    funFactCard.hidden = false;
    funFactCard.classList.remove('is-visible');
    funFactText.textContent = nextLocalFunFact();

    try {
        const response = await fetch('/api/fun-fact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });
        const payload = await response.json();
        if (!response.ok) {
            throw new Error(payload.error || 'Fun fact request failed.');
        }
        funFactText.textContent = String(payload.fact || '').trim() || nextLocalFunFact();
    } catch (error) {
        funFactText.textContent = nextLocalFunFact();
    } finally {
        if (funFactTrigger) {
            funFactTrigger.disabled = false;
        }
        requestAnimationFrame(() => {
            funFactCard.classList.add('is-visible');
        });
    }
}

function nextLocalFunFact() {
    currentFunFactIndex = (currentFunFactIndex + 1) % manufacturingFunFacts.length;
    return manufacturingFunFacts[currentFunFactIndex];
}

function renderStoryPanels() {
    if (hottestStartupsList) {
        const startupRows = getHottestStartups(8);
        hottestStartupsList.innerHTML = startupRows.map((company) => {
            const location = formatLocation(company.location || {});
            const websiteLink = company.website
                ? `<a href="${escapeAttribute(company.website)}" target="_blank" rel="noopener">Website</a>`
                : '<span class="story-link-muted">No website</span>';
            const founded = company.founded ? `Founded ${escapeHtml(String(company.founded))}` : 'Founded n/a';
            const employees = company.employees ? `Team ${escapeHtml(String(company.employees))}` : 'Team n/a';
            return `
                <li class="story-company-card">
                    <div class="story-company-top">
                        ${company.website
                            ? `<a class="story-company-name" href="${escapeAttribute(company.website)}" target="_blank" rel="noopener">${escapeHtml(company.name)}</a>`
                            : `<span class="story-company-name">${escapeHtml(company.name)}</span>`}
                        <span class="story-company-industry">${escapeHtml(company.industry || 'Industrial')}</span>
                    </div>
                    <p class="story-company-description">${escapeHtml(company.description || 'No description available yet.')}</p>
                    <div class="story-company-meta">
                        <span>${escapeHtml(location || 'Location n/a')}</span>
                        <span>${founded}</span>
                        <span>${employees}</span>
                    </div>
                    <div class="story-company-links">${websiteLink}</div>
                </li>
            `;
        }).join('');
    }

    if (peopleToFollowList) {
        const builders = [
            { handle: '@packyM', label: 'Packy McCormick', url: 'https://x.com/packyM' },
            { handle: '@Austen', label: 'Austen Allred', url: 'https://x.com/Austen' },
            { handle: '@turnercj', label: 'Turner Novak', url: 'https://x.com/turnercj' },
            { handle: '@balajis', label: 'Balaji Srinivasan', url: 'https://x.com/balajis' },
            { handle: '@dunkhippo33', label: 'Deedy Das', url: 'https://x.com/dunkhippo33' },
            { handle: '@Farzyness', label: 'Farz', url: 'https://x.com/Farzyness' }
        ];

        peopleToFollowList.innerHTML = builders.map((person) => (
            `<li class="story-profile-card">
                <a class="story-profile-name" href="${escapeAttribute(person.url)}" target="_blank" rel="noopener">${escapeHtml(person.label)}</a>
                <span class="story-profile-handle">${escapeHtml(person.handle)}</span>
                <a class="story-profile-link" href="${escapeAttribute(person.url)}" target="_blank" rel="noopener">Open Profile</a>
            </li>`
        )).join('');
    }
}

function getHottestStartups(limit) {
    const ranked = manufacturers
        .filter((company) => company && company.name)
        .map((company) => ({
            company,
            score: (
                (company.ycCompany ? 12 : 0) +
                (company.ycBatch ? 6 : 0) +
                (company.founded && Number(company.founded) >= 2018 ? 4 : 0)
            )
        }))
        .sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score;
            }
            return String(b.company.founded || '').localeCompare(String(a.company.founded || ''));
        })
        .map((entry) => entry.company);

    const seen = new Set();
    const unique = [];
    ranked.forEach((company) => {
        const key = String(company.name || '').toLowerCase();
        if (key && !seen.has(key)) {
            seen.add(key);
            unique.push(company);
        }
    });

    return unique.slice(0, limit);
}

function initializeStoryObserver() {
    if (!scrollStory || !('IntersectionObserver' in window)) {
        return;
    }

    const steps = Array.from(scrollStory.querySelectorAll('.story-step'));
    if (!steps.length) {
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            steps.forEach((step) => step.classList.remove('active'));
            entry.target.classList.add('active');

            activeMapCategory = null;
            renderGraph(filteredManufacturers);
        });
    }, {
        threshold: 0.55
    });

    steps.forEach((step) => observer.observe(step));
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
    if (assistantPowered) {
        assistantPowered.classList.add('is-hidden');
    }
    if (funFactTrigger) {
        funFactTrigger.classList.add('is-hidden');
    }
    if (funFactCard) {
        funFactCard.classList.add('is-hidden');
    }
    setAssistantExpanded(true);
}
