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
const contributeBtn = document.getElementById('contributeBtn');
const contributeModal = document.getElementById('contributeModal');
const contributeForm = document.getElementById('contributeForm');
const contributeSubmit = document.getElementById('contributeSubmit');
const contributeStatus = document.getElementById('contributeStatus');
const contributeState = document.getElementById('contributeState');
const contributeIndustry = document.getElementById('contributeIndustry');
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
const signalsRail = document.getElementById('signalsRail');

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
let pinCanvasLayer = null;
let pinWebglState = null;
let currentMapPins = [];
let pinHitGrid = null;
let stateFeatureBounds = new Map();
let mapMarkerRenderer = null;
let activeMapCategory = null;
let activeMapSubcategory = null;
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
let mfgMapPinRecords = [];
let mfgMapPinStaticRows = null;
let mfgMapPinsLoading = false;
let mfgMapPinsLoaded = false;
let mfgEnrichmentOverrides = {};
let assistantPreviousResponseId = null;
let assistantRequestInFlight = false;
let hasStartedAssistantConversation = false;
let currentFunFactIndex = -1;
let listTableVisibleLimit = 1000;

const MFG_INITIAL_PAGE_SIZE = 10000;
const MFG_PAGE_SIZE = 10000;
const MFG_MAP_PIN_PAGE_SIZE = 50000;
const DETAIL_PIN_RENDER_LIMIT = 400000;
const USE_WEBGL_PIN_LAYER = false;
const CANVAS_PIN_HOVER_THROTTLE_MS = 32;
const PIN_HIT_GRID_CELL_SIZE = 18;
const LIST_TABLE_BATCH_SIZE = 1000;
const LARGE_PIN_COUNT_THRESHOLD = 20000;

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

const mapSectionColors = {
    'Extraction': '#2563eb',
    'Primary Processing': '#dc2626',
    'Tooling': '#7c3aed',
    'Advanced Materials': '#059669',
    'Critical Fabrication': '#f59e0b',
    'Forming': '#0891b2',
    'Energy Systems': '#16a34a',
    'Treatment': '#ea580c',
    'Electronics': '#db2777',
    'Joining + Assembly': '#4f46e5',
    'Bio': '#65a30d',
    'Systems Integration': '#0f766e',
    'Quality + Validation': '#9333ea',
    'Infra + Logistics': '#64748b',
    'Enablers': '#111827',
    'Other': '#94a3b8'
};
const mapCategoryOrder = [
    ...tierTaxonomy.flatMap(tier => tier.sections.map(section => section.name)),
    'Other'
];
const mapCategoryIndexByLabel = new Map(mapCategoryOrder.map((label, index) => [label, index]));

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
    switchView(getInitialView());
    moveStorySectionToBottom();
    normalizeManufacturerIndustries(manufacturers);
    await loadIqsCompanies();
    await loadMfgCompanies();
    filteredManufacturers = [...manufacturers];
    populateFilters();
    populateContributionOptions();
    switchView(getInitialView());
    startMfgMapPinLoad();
    initializeFunFacts();
    renderStoryPanels();
    initializeStoryObserver();
    initializeReshoringSignals();
    setAppLoading(false);
});

function getInitialView() {
    return isMobileViewport() ? 'tree' : 'graph';
}

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
        const payload = await fetchMfgLitePage(0, MFG_INITIAL_PAGE_SIZE);
        if (!payload?.rows?.length) {
            return;
        }

        mfgTotalAvailable = payload.total || payload.rows.length;
        const records = payload.rows.map(buildMfgManufacturerRecord);

        if (!records.length) {
            return;
        }

        mergeImportedManufacturers(records);
        mfgLoadedCount = records.length;
        mfgLoadOffset = payload.offset + payload.rows.length;
    } catch (error) {
        console.warn('Unable to load MFG company imports.', error);
    }
}

async function loadNextMfgCompaniesPage() {
    const payload = await fetchMfgLitePage(mfgLoadOffset, MFG_PAGE_SIZE);
    if (!payload?.rows?.length) {
        return;
    }

    const records = payload.rows.map(buildMfgManufacturerRecord);
    mergeImportedManufacturers(records);
    mfgTotalAvailable = payload.total || mfgTotalAvailable;
    mfgLoadedCount += records.length;
    mfgLoadOffset = payload.offset + payload.rows.length;
}

function startMfgMapPinLoad() {
    if (mfgMapPinsLoading || mfgMapPinsLoaded) {
        return;
    }

    mfgMapPinsLoading = true;
    loadMfgMapPins()
        .catch(error => {
            console.warn('Unable to load full MFG map pins.', error);
        })
        .finally(() => {
            mfgMapPinsLoading = false;
            mfgMapPinsLoaded = true;
            if (currentView === 'graph') {
                renderGraph(filteredManufacturers);
            } else if (currentView === 'tree') {
                renderManufacturers(filteredManufacturers);
            }
        });
}

async function loadMfgMapPins() {
    let offset = 0;
    let total = Infinity;
    const records = [];

    while (offset < total) {
        const payload = await fetchMfgMapPinPage(offset, MFG_MAP_PIN_PAGE_SIZE);
        if (!payload?.rows?.length) {
            break;
        }

        payload.rows.forEach((row) => {
            const record = buildMfgMapPinRecord(row);
            if (record) {
                records.push(record);
            }
        });

        mfgMapPinRecords = records;
        total = payload.total || records.length;
        offset = payload.offset + payload.rows.length;

        if (currentView === 'graph') {
            renderGraph(filteredManufacturers);
        } else if (currentView === 'tree') {
            renderManufacturers(filteredManufacturers);
        }

        await new Promise(resolve => window.setTimeout(resolve, 0));
    }
}

async function fetchMfgMapPinPage(offset, limit) {
    try {
        const response = await fetch(`/api/mfg-map-pins?offset=${encodeURIComponent(String(offset))}&limit=${encodeURIComponent(String(limit))}`, {
            cache: 'no-store'
        });
        if (response.ok) {
            const payload = await response.json();
            return {
                rows: Array.isArray(payload.rows) ? payload.rows : [],
                total: Number(payload.total || 0),
                offset: Number(payload.offset || offset)
            };
        }
    } catch (error) {
        // Static-file fallback below keeps the map usable without the local API.
    }

    if (!mfgMapPinStaticRows) {
        const response = await fetch('mfg-companies-lite.json?v=20260425-1', { cache: 'no-store' });
        if (!response.ok) {
            return { rows: [], total: 0, offset };
        }
        const rows = await response.json();
        mfgMapPinStaticRows = Array.isArray(rows) ? rows : [];
    }

    return {
        rows: mfgMapPinStaticRows
            .slice(offset, offset + limit)
            .map(row => [row?.[0], row?.[1] || '', row?.[2] || 'Manufacturing', row?.[3] || '', row?.[4] || '']),
        total: mfgMapPinStaticRows.length,
        offset
    };
}

async function fetchMfgLitePage(offset, limit) {
    try {
        const response = await fetch(`/api/mfg-lite?offset=${encodeURIComponent(String(offset))}&limit=${encodeURIComponent(String(limit))}`, {
            cache: 'no-store'
        });
        if (response.ok) {
            const payload = await response.json();
            return {
                rows: Array.isArray(payload.rows) ? payload.rows : [],
                total: Number(payload.total || 0),
                offset: Number(payload.offset || offset)
            };
        }
    } catch (error) {
        // Static-file fallback below keeps the app usable without the local API.
    }

    if (offset > 0) {
        return { rows: [], total: mfgTotalAvailable, offset };
    }

    const response = await fetch('mfg-companies-lite.json?v=20260425-1', { cache: 'no-store' });
    if (!response.ok) {
        return { rows: [], total: 0, offset };
    }

    const rows = await response.json();
    if (!Array.isArray(rows)) {
        return { rows: [], total: 0, offset };
    }

    return {
        rows: rows.slice(0, limit),
        total: rows.length,
        offset
    };
}

function buildMfgManufacturerRecord(row) {
    return {
        ...buildMfgRecordFromRow(row),
        source: 'MFG Companies import',
        sourceCategory: 'Bulk import lite',
        detailsLoaded: Boolean(mfgEnrichmentOverrides[String(row?.[0])]?.description)
    };
}

function buildMfgMapPinRecord(row) {
    const id = row?.[0];
    const name = row?.[1] || '';
    const industry = visibleIndustryAliases[row?.[2]] || row?.[2] || 'Manufacturing';
    const city = row?.[3] || '';
    const state = row?.[4] || '';
    const rawState = normalizeGeographyToken(state);
    const stateKey = resolveStateKey(rawState);
    const rawCity = normalizeGeographyToken(getPrimaryCityCandidate(city));
    const cityCoordinateKey = rawCity && stateKey ? `${rawCity}|${stateKey}` : '';
    const baseCoordinates = cityCoordinateKey && cityCoordinates[cityCoordinateKey]
        ? cityCoordinates[cityCoordinateKey]
        : (stateKey && stateCentroids[stateKey] ? stateCentroids[stateKey] : null);

    if (!baseCoordinates) {
        return null;
    }

    const manufacturer = {
        id,
        name,
        twitter: '',
        twitterUrl: '',
        website: '',
        email: '',
        phone: '',
        location: { city, state, zip: '' },
        industry,
        products: [],
        description: '',
        founded: null,
        employees: '',
        source: 'MFG Companies import',
        sourceCategory: 'Map pins lite',
        detailsLoaded: false,
        isMapPinLite: true
    };
    const assignment = assignManufacturerToTaxonomy(manufacturer);
    const categoryLabel = getMapCategoryLabel(assignment, manufacturer);
    const subcategoryLabel = getMapSubcategoryLabel(assignment);
    const markerColor = getCategoryColor(assignment, manufacturer);
    const location = formatLocation(manufacturer.location);

    return {
        id,
        name,
        city,
        state,
        stateKey,
        industry,
        manufacturer,
        baseCoordinates,
        hasPreciseCity: Boolean(cityCoordinateKey && cityCoordinates[cityCoordinateKey]),
        categoryLabel,
        subcategoryLabel,
        markerColor,
        location,
        searchText: normalizeSearchText([name, industry, city, state].filter(Boolean).join(' '))
    };
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

    tierTaxonomy.flatMap(tier => tier.sections).forEach(section => {
        const group = document.createElement('optgroup');
        group.label = section.name;

        section.subcategories.forEach(subcategory => {
            const option = document.createElement('option');
            option.value = createSubcategoryFilterValue(section.name, subcategory.name);
            option.textContent = subcategory.name;
            group.appendChild(option);
        });

        industryFilter.appendChild(group);
    });
}

function createCategoryFilterValue(category) {
    return `category:${category}`;
}

function createSubcategoryFilterValue(category, subcategory) {
    return `subcategory:${category}||${subcategory}`;
}

function parseTaxonomyFilterValue(value) {
    const raw = String(value || '');
    if (!raw) {
        return { type: 'all' };
    }
    if (raw.startsWith('category:')) {
        return {
            type: 'category',
            category: raw.slice('category:'.length)
        };
    }
    if (raw.startsWith('subcategory:')) {
        const [category, subcategory] = raw.slice('subcategory:'.length).split('||');
        return {
            type: 'subcategory',
            category: category || '',
            subcategory: subcategory || ''
        };
    }

    return {
        type: 'industry',
        industry: raw
    };
}

function matchesTaxonomyFilter(manufacturer, filterValue, record = null) {
    const filter = parseTaxonomyFilterValue(filterValue);
    if (filter.type === 'all') {
        return true;
    }
    if (filter.type === 'industry') {
        return manufacturer.industry === filter.industry;
    }

    const assignment = manufacturerAssignments.get(manufacturer.id) || assignManufacturerToTaxonomy(manufacturer);
    const category = record?.categoryLabel || getMapCategoryLabel(assignment, manufacturer);
    const subcategory = record?.subcategoryLabel || getMapSubcategoryLabel(assignment);

    if (filter.type === 'category') {
        return category === filter.category;
    }

    return category === filter.category && subcategory === filter.subcategory;
}

function renderManufacturers(manufacturersToRender) {
    if (currentView === 'tree') {
        renderListTable();
        return;
    }

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

function renderListTable() {
    const rows = buildListTableRows();
    const visibleRows = rows.slice(0, listTableVisibleLimit);
    const canShowMore = rows.length > visibleRows.length;

    directoryGrid.innerHTML = `
        <section class="list-table-view" aria-label="Manufacturer table">
            <div class="list-table-shell">
                <table class="manufacturer-data-table">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Category</th>
                            <th>Location</th>
                            <th>Links</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${visibleRows.map(renderListTableRow).join('')}
                    </tbody>
                </table>
            </div>
            ${canShowMore ? `
                <button type="button" class="list-table-more" aria-label="Show more rows">Show ${Math.min(LIST_TABLE_BATCH_SIZE, rows.length - visibleRows.length).toLocaleString()} more</button>
            ` : ''}
        </section>
    `;

    attachListTableEventListeners();
    if (resultsCount) {
        resultsCount.textContent = rows.length.toLocaleString();
    }
}

function buildListTableRows() {
    const selectedState = stateFilter?.value || '';
    const selectedIndustry = industryFilter?.value || '';
    const searchQuery = normalizeSearchText(mapSearchInput?.value || '');
    const searchTokens = getSearchTokens(searchQuery);
    const rowsById = new Map();

    manufacturers.forEach((manufacturer) => {
        if (!matchesListTableFilters(manufacturer, selectedState, selectedIndustry, searchTokens)) {
            return;
        }

        rowsById.set(String(manufacturer.id), createListTableRowFromManufacturer(manufacturer));
    });

    mfgMapPinRecords.forEach((record) => {
        const manufacturer = record.manufacturer;
        if (!manufacturer || rowsById.has(String(manufacturer.id))) {
            return;
        }
        if (!matchesListTableFilters(manufacturer, selectedState, selectedIndustry, searchTokens, record.searchText)) {
            return;
        }

        rowsById.set(String(manufacturer.id), createListTableRowFromMfgRecord(record));
    });

    return Array.from(rowsById.values());
}

function matchesListTableFilters(manufacturer, selectedState, selectedIndustry, searchTokens, searchText = '') {
    if (selectedState && manufacturer.location?.state !== selectedState) {
        return false;
    }
    if (selectedIndustry && !matchesTaxonomyFilter(manufacturer, selectedIndustry)) {
        return false;
    }
    if (!searchTokens.length) {
        return true;
    }

    const searchable = searchText || getManufacturerSearchText(manufacturer);
    return searchTokens.every(token => searchable.includes(token));
}

function createListTableRowFromManufacturer(manufacturer) {
    const assignment = manufacturerAssignments.get(manufacturer.id) || assignManufacturerToTaxonomy(manufacturer);
    return {
        id: manufacturer.id,
        name: manufacturer.name || 'Unnamed company',
        sector: manufacturer.industry || 'Manufacturing',
        category: getMapCategoryLabel(assignment, manufacturer),
        subcategory: getMapSubcategoryLabel(assignment),
        location: formatLocation(manufacturer.location),
        source: manufacturer.source || 'Directory',
        website: manufacturer.website || '',
        description: manufacturer.description || ''
    };
}

function createListTableRowFromMfgRecord(record) {
    return {
        id: record.id,
        name: record.name || 'Unnamed company',
        sector: record.industry || 'Manufacturing',
        category: record.categoryLabel || 'Other',
        subcategory: record.subcategoryLabel || 'Other',
        location: record.location || formatLocation(record.manufacturer?.location),
        source: 'MFG Companies',
        website: '',
        description: ''
    };
}

function renderListTableRow(row) {
    const linkMarkup = row.website
        ? `<a href="${escapeAttribute(row.website)}" target="_blank" rel="noopener">${escapeHtml(formatWebsiteLabel(row.website))}</a>`
        : '<span class="manufacturer-link-muted">n/a</span>';

    return `
        <tr>
            <td>
                <strong>${escapeHtml(row.name)}</strong>
                ${row.description ? `<span>${escapeHtml(row.description)}</span>` : ''}
            </td>
            <td>
                <strong>${escapeHtml(row.category || row.sector || 'Other')}</strong>
                <span>${escapeHtml(row.subcategory || row.sector || 'Manufacturing')}</span>
            </td>
            <td>${escapeHtml(row.location || 'Location unavailable')}</td>
            <td>${linkMarkup}</td>
        </tr>
    `;
}

function attachListTableEventListeners() {
    const showMoreButton = directoryGrid.querySelector('.list-table-more');
    if (!showMoreButton) {
        return;
    }

    showMoreButton.addEventListener('click', () => {
        listTableVisibleLimit += LIST_TABLE_BATCH_SIZE;
        renderListTable();
    });
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
        const matchesIndustry = matchesTaxonomyFilter(manufacturer, selectedIndustry);
        const matchesSearch = matchesSearchQuery(manufacturer, searchQuery);

        return matchesState && matchesIndustry && matchesSearch;
    });

    if (currentView === 'tree') {
        listTableVisibleLimit = LIST_TABLE_BATCH_SIZE;
        renderManufacturers(filteredManufacturers);
    }

    if (currentView === 'graph') {
        renderGraph(filteredManufacturers);
    }

    if (currentView === 'graph') {
        renderMapSearchResults();
    } else {
        clearMapSearchResults();
    }
}

function clearFilters() {
    stateFilter.value = '';
    industryFilter.value = '';
    if (mapSearchInput) {
        mapSearchInput.value = '';
    }
    activeMapCategory = null;
    activeMapSubcategory = null;
    activeMapState = null;
    closeMapDetailPanel();
    clearMapSearchResults();
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

    const company = await hydrateManufacturerDetails(manufacturer);
    renderSearchCompanyDetail(company);
}

async function hydrateManufacturerDetails(manufacturer) {
    let company = manufacturer;
    if (manufacturer.source === 'MFG Companies import' && !manufacturer.detailsLoaded) {
        const details = await fetchCompanyDetails(manufacturer.id);
        if (details) {
            Object.assign(manufacturer, details, { detailsLoaded: true });
            company = manufacturer;
        }
    }

    if (company?.id && !manufacturerAssignments.has(company.id)) {
        manufacturerAssignments.set(company.id, assignManufacturerToTaxonomy(company));
    }

    return company;
}

async function showMapCompanyDetail(manufacturer) {
    if (!manufacturer) {
        return;
    }

    const company = await hydrateManufacturerDetails(manufacturer);
    clearMapSearchResults();
    showMapDetailPanel(company);
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

async function initializeReshoringSignals() {
    if (!signalsRail) {
        return;
    }

    try {
        const response = await fetch('/api/signals', { cache: 'no-store' });
        if (!response.ok) {
            throw new Error(`Signals request failed: ${response.status}`);
        }
        const payload = await response.json();
        renderReshoringSignals(Array.isArray(payload.signals) ? payload.signals : []);
    } catch (error) {
        console.warn('Unable to load reshoring signals.', error);
        renderReshoringSignals(getFallbackSignals());
    }
}

function renderReshoringSignals(signals) {
    if (!signalsRail) {
        return;
    }

    const list = signalsRail.querySelector('.signals-list');
    if (!list) {
        return;
    }

    signalsRail.hidden = false;

    if (!signals.length) {
        list.innerHTML = '<p class="signals-empty">No fresh signals yet.</p>';
        return;
    }

    list.innerHTML = signals.slice(0, 8).map(signal => `
        <a class="signal-item" href="${escapeAttribute(signal.url || '#')}" target="_blank" rel="noopener">
            <span class="signal-tag">${escapeHtml(signal.tag || 'Signal')}</span>
            <strong>${escapeHtml(signal.title || 'Untitled signal')}</strong>
            <span>${escapeHtml([signal.source, formatSignalDate(signal.date)].filter(Boolean).join(' | '))}</span>
        </a>
    `).join('');
}

function formatSignalDate(value) {
    if (!value) {
        return '';
    }

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '';
    }

    return date.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric'
    });
}

function getFallbackSignals() {
    return [
        {
            title: 'CBP forced labor enforcement actions',
            source: 'CBP',
            tag: 'Import enforcement',
            url: 'https://www.cbp.gov/trade/forced-labor'
        },
        {
            title: 'Federal Register trade and duty notices',
            source: 'Federal Register',
            tag: 'Duty / rulemaking',
            url: 'https://www.federalregister.gov/'
        },
        {
            title: 'Manufacturing.gov federal announcements',
            source: 'Manufacturing.gov',
            tag: 'Reshoring',
            url: 'https://www.manufacturing.gov/federal-announcements'
        }
    ];
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
                activeMapSubcategory = null;
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
            closeContributionModal();
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

    if (suggestBtn) {
        suggestBtn.addEventListener('click', openContributionModal);
    }
    if (contributeBtn) {
        contributeBtn.addEventListener('click', openContributionModal);
    }
    if (contributeModal) {
        contributeModal.querySelectorAll('[data-contribute-close]').forEach((element) => {
            element.addEventListener('click', closeContributionModal);
        });
    }
    if (contributeForm) {
        contributeForm.addEventListener('submit', submitContribution);
    }
}

function populateContributionOptions() {
    if (contributeState && contributeState.options.length <= 1) {
        allUSStates.forEach((state) => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            contributeState.appendChild(option);
        });
    }

    if (contributeIndustry && contributeIndustry.options.length <= 1) {
        getUniqueIndustries().forEach((industry) => {
            const option = document.createElement('option');
            option.value = industry;
            option.textContent = industry;
            contributeIndustry.appendChild(option);
        });
    }
}

function openContributionModal() {
    if (!contributeModal) {
        window.open('https://github.com/bihanmahadewa/americansupplychain', '_blank');
        return;
    }

    contributeModal.hidden = false;
    document.body.classList.add('has-contribute-modal');
    setContributionStatus('');

    const firstInput = contributeModal.querySelector('input[name="name"]');
    if (firstInput) {
        window.setTimeout(() => firstInput.focus(), 0);
    }
}

function closeContributionModal() {
    if (!contributeModal || contributeModal.hidden) {
        return;
    }

    contributeModal.hidden = true;
    document.body.classList.remove('has-contribute-modal');
}

async function submitContribution(event) {
    event.preventDefault();
    if (!contributeForm || !contributeSubmit) {
        return;
    }

    const payload = Object.fromEntries(new FormData(contributeForm).entries());
    setContributionStatus('Submitting contribution...', 'is-pending');
    contributeSubmit.disabled = true;

    try {
        const response = await fetch('/api/contribute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const result = await parseContributionResponse(response);

        if (!response.ok) {
            throw new Error(result.error || 'Contribution failed.');
        }

        setContributionStatus(result.pullRequestUrl
            ? `Contribution submitted: ${result.pullRequestUrl}`
            : 'Contribution submitted.', 'is-success');
        contributeForm.reset();
        if (result.pullRequestUrl) {
            window.open(result.pullRequestUrl, '_blank', 'noopener');
        }
    } catch (error) {
        setContributionStatus(error.message || 'Could not open a pull request.', 'is-error');
    } finally {
        contributeSubmit.disabled = false;
    }
}

async function parseContributionResponse(response) {
    const text = await response.text();
    if (!text) {
        return {};
    }

    try {
        return JSON.parse(text);
    } catch (error) {
        return {
            error: response.ok
                ? 'Contribution response was not valid JSON.'
                : `Contribution endpoint returned ${response.status}. Redeploy with api/contribute.js if this is Vercel.`
        };
    }
}

function setContributionStatus(message, className = '') {
    if (!contributeStatus) {
        return;
    }

    contributeStatus.textContent = message;
    contributeStatus.className = `contribute-status ${className}`.trim();
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
    document.body.classList.toggle('is-list-view', view === 'tree');

    if (view === 'tree') {
        listTableVisibleLimit = LIST_TABLE_BATCH_SIZE;
        treeViewBtn.classList.add('active');
        graphViewBtn.classList.remove('active');
        renderManufacturers(filteredManufacturers);
        directoryGrid.style.display = 'block';
        graphContainer.style.display = 'block';
        if (scrollStory) {
            scrollStory.style.display = 'none';
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
        const pin = buildManufacturerMapPin(manufacturer);
        if (!pin) {
            return;
        }
        const stateLabel = pin.stateLabel;
        if (activeMapState && stateLabel !== activeMapState) {
            return;
        }

        pins.push(pin);
    });

    return pins;
}

function buildManufacturerMapPin(manufacturer) {
    const assignment = manufacturerAssignments.get(manufacturer.id);
    const categoryLabel = getMapCategoryLabel(assignment, manufacturer);
    const stateLabel = manufacturer.location?.state || 'Unknown state';
    const coordinates = getDisplayManufacturerCoordinates(manufacturer);

    if (!coordinates) {
        return null;
    }

    return {
        manufacturer,
        coordinates,
        markerColor: getCategoryColor(assignment, manufacturer),
        categoryLabel,
        subcategoryLabel: getMapSubcategoryLabel(assignment),
        stateLabel,
        location: formatLocation(manufacturer.location)
    };
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
            firstManufacturer: null,
            isAggregate: true,
            drillLevel
        };

        bucket.coordinateTotals[0] += pin.coordinates[0];
        bucket.coordinateTotals[1] += pin.coordinates[1];
        bucket.count += 1;
        bucket.firstManufacturer = bucket.firstManufacturer || pin.manufacturer;
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
    if (activeMapState || stateFilter?.value) {
        return 'state';
    }
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

function updateMapModeHint(mappableCount, renderedCount, matchCount = filteredManufacturers.length, pins = currentMapPins) {
    if (!resultsCount) {
        return;
    }

    const visibleCount = getVisibleMapPinCount(pins);
    resultsCount.textContent = visibleCount.toLocaleString();
}

function getVisibleMapPinCount(pins) {
    if (!Array.isArray(pins) || !pins.length) {
        return 0;
    }

    if (!activeMapCategory) {
        return pins.length;
    }

    return pins.filter(isMapPinHighlighted).length;
}

function getActiveMapHighlightLabel() {
    if (!activeMapCategory) {
        return '';
    }

    return ` | ${[activeMapCategory, activeMapSubcategory].filter(Boolean).join(' / ')} highlighted`;
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
    const useFullMfgMapPins = mfgMapPinRecords.length > 0;
    const baseManufacturersForMap = useFullMfgMapPins
        ? manufacturersToGraph.filter(manufacturer => manufacturer.source !== 'MFG Companies import')
        : manufacturersToGraph;
    const mfgMapPins = useFullMfgMapPins ? buildFilteredMfgMapPins() : [];
    const mapMatchCount = baseManufacturersForMap.length + mfgMapPins.length;
    generateMapLegend(baseManufacturersForMap, mfgMapPins);

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

    const pins = [
        ...buildMapPins(baseManufacturersForMap),
        ...mfgMapPins
    ];
    markerLayer.clearLayers();
    currentMapPins = pins;
    markPinWebglDataDirty();
    updateStateClusterStyles();

    if (shouldRenderIndividualMapPins(pins)) {
        redrawPinCanvasLayer();
        updateMapModeHint(pins.length, pins.length, mapMatchCount, pins);
        return;
    }

    currentMapPins = [];
    markPinWebglDataDirty();
    redrawPinCanvasLayer();
    const aggregateCount = renderAggregateMapMarkers(pins);
    updateMapModeHint(pins.length, aggregateCount, mapMatchCount, pins);
}

function buildFilteredMfgMapPins() {
    const pins = [];
    const selectedState = stateFilter?.value || '';
    const selectedIndustry = industryFilter?.value || '';
    const searchQuery = normalizeSearchText(mapSearchInput?.value || '');
    const searchTokens = getSearchTokens(searchQuery);

    mfgMapPinRecords.forEach((record) => {
        if (activeMapState && record.state !== activeMapState) {
            return;
        }
        if (selectedState && record.state !== selectedState) {
            return;
        }
        if (selectedIndustry && !matchesTaxonomyFilter(record.manufacturer, selectedIndustry, record)) {
            return;
        }
        if (searchTokens.length && !searchTokens.every(token => record.searchText.includes(token))) {
            return;
        }

        const coordinates = getMfgMapPinDisplayCoordinates(record);
        if (!coordinates) {
            return;
        }

        pins.push({
            manufacturer: record.manufacturer,
            coordinates,
            markerColor: record.markerColor,
            categoryLabel: record.categoryLabel,
            subcategoryLabel: record.subcategoryLabel,
            stateLabel: record.state || 'Unknown state',
            location: record.location
        });
    });

    return pins;
}

function getMfgMapPinDisplayCoordinates(record) {
    if (!record?.baseCoordinates) {
        return null;
    }

    if (record.hasPreciseCity || !record.stateKey) {
        return record.baseCoordinates;
    }

    return scatterCoordinatesWithinState(record.baseCoordinates, record.id || record.name, record.stateKey);
}

function drillIntoMapCluster(pin) {
    return;
}

function shouldRenderIndividualMapPins(pins) {
    return pins.length <= DETAIL_PIN_RENDER_LIMIT;
}

function renderAggregateMapMarkers(pins) {
    if (!markerLayer || !pins.length) {
        return 0;
    }

    const aggregatePins = buildAggregateMapPins(pins);
    aggregatePins.forEach((pin) => {
        const marker = L.marker(pin.coordinates, {
            icon: createClusterMarkerIcon(pin),
            interactive: true,
            keyboard: false,
            riseOnHover: true
        });
        marker.bindTooltip(() => getMapTooltipMarkup(pin), {
            direction: 'top',
            opacity: 0.96,
            sticky: true
        });
        marker.on('click', () => handleAggregateMapMarkerClick(pin));
        marker.addTo(markerLayer);
    });

    return aggregatePins.length;
}

async function handleAggregateMapMarkerClick(pin) {
    if (!pin) {
        return;
    }

    if (pin.count === 1 && pin.firstManufacturer) {
        await showMapCompanyDetail(pin.firstManufacturer);
        return;
    }

    if (pin.drillLevel === 'national' && pin.stateLabel && stateFilter) {
        const option = Array.from(stateFilter.options).find((item) => item.value === pin.stateLabel);
        if (option) {
            stateFilter.value = pin.stateLabel;
            activeMapState = null;
            closeMapDetailPanel();
            clearMapSearchResults();
            filterManufacturers();
            return;
        }
    }

    showClusterDetailPanel(pin);
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

function ensurePinCanvasLayer() {
    if (pinCanvasLayer || !usMap || typeof L === 'undefined') {
        return;
    }

    pinCanvasLayer = L.canvasLayer()
        .delegate({
            onDrawLayer: drawPinCanvasLayer,
            onClickLayer: handlePinCanvasClick,
            onMouseMoveLayer: handlePinCanvasMouseMove,
            onMouseOutLayer: handlePinCanvasMouseOut
        })
        .addTo(usMap);
}

function redrawPinCanvasLayer() {
    ensurePinCanvasLayer();
    if (pinCanvasLayer) {
        pinCanvasLayer.needRedraw();
    }
}

function markPinWebglDataDirty() {
    if (pinWebglState) {
        pinWebglState.needsDataUpload = true;
    }
}

function drawPinCanvasLayer(info) {
    const canvas = info.canvas;
    if (!canvas || !usMap) {
        return;
    }

    if (!USE_WEBGL_PIN_LAYER) {
        drawPinsWithCanvas2d(canvas);
        return;
    }

    const state = getPinWebglState(canvas);
    if (state?.gl) {
        drawPinsWithWebgl(state, canvas);
        return;
    }

    drawPinsWithCanvas2d(canvas);
}

function getPinWebglState(canvas) {
    if (pinWebglState?.canvas === canvas) {
        return pinWebglState;
    }

    const gl = canvas.getContext('webgl', {
        alpha: true,
        antialias: false,
        depth: false,
        stencil: false,
        preserveDrawingBuffer: false
    }) || canvas.getContext('experimental-webgl');

    if (!gl) {
        pinWebglState = { canvas, gl: null, needsDataUpload: true };
        return pinWebglState;
    }

    const vertexShader = compilePinShader(gl, gl.VERTEX_SHADER, `
        attribute vec2 a_lngLat;
        attribute vec3 a_color;
        attribute float a_category;

        uniform vec2 u_pixelOrigin;
        uniform vec2 u_canvasSize;
        uniform float u_zoom;
        uniform float u_pointSize;
        uniform float u_activeCategory;

        varying vec4 v_color;

        const float PI = 3.141592653589793;

        void main() {
            float clampedLat = clamp(a_lngLat.y, -85.05112878, 85.05112878);
            float sinLat = sin(clampedLat * PI / 180.0);
            float worldSize = 256.0 * pow(2.0, u_zoom);
            float x = ((a_lngLat.x + 180.0) / 360.0) * worldSize;
            float y = (0.5 - log((1.0 + sinLat) / (1.0 - sinLat)) / (4.0 * PI)) * worldSize;
            vec2 containerPoint = vec2(x, y) - u_pixelOrigin;
            vec2 clipPoint = vec2(
                (containerPoint.x / u_canvasSize.x) * 2.0 - 1.0,
                1.0 - (containerPoint.y / u_canvasSize.y) * 2.0
            );
            bool highlighted = u_activeCategory < -0.5 || abs(a_category - u_activeCategory) < 0.5;
            vec3 color = highlighted ? a_color : vec3(0.278, 0.341, 0.412);
            float alpha = highlighted ? 0.9 : 0.1;

            gl_Position = vec4(clipPoint, 0.0, 1.0);
            gl_PointSize = highlighted ? u_pointSize : max(1.0, u_pointSize * 0.65);
            v_color = vec4(color, alpha);
        }
    `);
    const fragmentShader = compilePinShader(gl, gl.FRAGMENT_SHADER, `
        precision mediump float;
        varying vec4 v_color;

        void main() {
            vec2 pointCoord = gl_PointCoord - vec2(0.5);
            if (dot(pointCoord, pointCoord) > 0.25) {
                discard;
            }
            gl_FragColor = v_color;
        }
    `);
    const program = linkPinProgram(gl, vertexShader, fragmentShader);
    if (!program) {
        pinWebglState = { canvas, gl: null, needsDataUpload: true };
        return pinWebglState;
    }

    pinWebglState = {
        canvas,
        gl,
        program,
        count: 0,
        needsDataUpload: true,
        buffers: {
            lngLat: gl.createBuffer(),
            color: gl.createBuffer(),
            category: gl.createBuffer()
        },
        attributes: {
            lngLat: gl.getAttribLocation(program, 'a_lngLat'),
            color: gl.getAttribLocation(program, 'a_color'),
            category: gl.getAttribLocation(program, 'a_category')
        },
        uniforms: {
            pixelOrigin: gl.getUniformLocation(program, 'u_pixelOrigin'),
            canvasSize: gl.getUniformLocation(program, 'u_canvasSize'),
            zoom: gl.getUniformLocation(program, 'u_zoom'),
            pointSize: gl.getUniformLocation(program, 'u_pointSize'),
            activeCategory: gl.getUniformLocation(program, 'u_activeCategory')
        }
    };

    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    return pinWebglState;
}

function compilePinShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.warn('Unable to compile WebGL pin shader.', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}

function linkPinProgram(gl, vertexShader, fragmentShader) {
    if (!vertexShader || !fragmentShader) {
        return null;
    }

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.warn('Unable to link WebGL pin program.', gl.getProgramInfoLog(program));
        return null;
    }
    return program;
}

function drawPinsWithWebgl(state, canvas) {
    const gl = state.gl;
    if (!gl || !state.program || !usMap) {
        drawPinsWithCanvas2d(canvas);
        return;
    }

    if (state.needsDataUpload) {
        uploadPinWebglData(state);
    }

    const useLargePins = currentMapPins.length < LARGE_PIN_COUNT_THRESHOLD;
    const pointSize = useLargePins
        ? (usMap.getZoom() >= 7 ? 4.2 : usMap.getZoom() >= 5.5 ? 3.2 : 2.35)
        : (usMap.getZoom() >= 7 ? 3.4 : usMap.getZoom() >= 5.5 ? 2.6 : 1.75);
    const pixelOrigin = usMap.getPixelOrigin();

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(state.program);

    bindPinAttribute(gl, state.buffers.lngLat, state.attributes.lngLat, 2);
    bindPinAttribute(gl, state.buffers.color, state.attributes.color, 3);
    bindPinAttribute(gl, state.buffers.category, state.attributes.category, 1);

    gl.uniform2f(state.uniforms.pixelOrigin, pixelOrigin.x, pixelOrigin.y);
    gl.uniform2f(state.uniforms.canvasSize, canvas.width, canvas.height);
    gl.uniform1f(state.uniforms.zoom, usMap.getZoom());
    gl.uniform1f(state.uniforms.pointSize, pointSize);
    gl.uniform1f(state.uniforms.activeCategory, getActiveMapCategoryIndex());
    gl.drawArrays(gl.POINTS, 0, state.count);
}

function uploadPinWebglData(state) {
    const gl = state.gl;
    const count = currentMapPins.length;
    const lngLatData = new Float32Array(count * 2);
    const colorData = new Float32Array(count * 3);
    const categoryData = new Float32Array(count);

    currentMapPins.forEach((pin, index) => {
        lngLatData[index * 2] = pin.coordinates[1];
        lngLatData[index * 2 + 1] = pin.coordinates[0];

        const color = hexToRgbUnit(pin.markerColor);
        colorData[index * 3] = color[0];
        colorData[index * 3 + 1] = color[1];
        colorData[index * 3 + 2] = color[2];

        categoryData[index] = getMapCategoryIndex(pin.categoryLabel);
    });

    gl.bindBuffer(gl.ARRAY_BUFFER, state.buffers.lngLat);
    gl.bufferData(gl.ARRAY_BUFFER, lngLatData, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, state.buffers.color);
    gl.bufferData(gl.ARRAY_BUFFER, colorData, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, state.buffers.category);
    gl.bufferData(gl.ARRAY_BUFFER, categoryData, gl.STATIC_DRAW);

    state.count = count;
    state.needsDataUpload = false;
}

function bindPinAttribute(gl, buffer, attribute, size) {
    if (attribute < 0) {
        return;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(attribute);
    gl.vertexAttribPointer(attribute, size, gl.FLOAT, false, 0, 0);
}

function getActiveMapCategoryIndex() {
    return activeMapCategory ? getMapCategoryIndex(activeMapCategory) : -1;
}

function getMapCategoryIndex(categoryLabel) {
    return mapCategoryIndexByLabel.get(categoryLabel) ?? mapCategoryIndexByLabel.get('Other') ?? -1;
}

function hexToRgbUnit(hexColor) {
    const normalized = String(hexColor || '').replace('#', '');
    if (!/^[0-9a-f]{6}$/i.test(normalized)) {
        return [0.58, 0.64, 0.72];
    }

    const numeric = Number.parseInt(normalized, 16);
    return [
        ((numeric >> 16) & 255) / 255,
        ((numeric >> 8) & 255) / 255,
        (numeric & 255) / 255
    ];
}

function drawPinsWithCanvas2d(canvas) {
    const ctx = canvas.getContext('2d');
    if (!ctx || !usMap) {
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const zoom = usMap.getZoom();
    const useLargePins = currentMapPins.length < LARGE_PIN_COUNT_THRESHOLD;
    const activeSize = useLargePins
        ? (zoom >= 7 ? 4.2 : zoom >= 5.5 ? 3.2 : 2.35)
        : (zoom >= 7 ? 3 : zoom >= 5.5 ? 2.2 : 1.45);
    const mutedSize = useLargePins
        ? Math.max(1.6, activeSize * 0.62)
        : Math.max(1.4, activeSize * 0.65);
    resetPinHitGrid();

    const drawPin = (pin, point, isHighlighted) => {
        const size = isHighlighted ? activeSize : mutedSize;
        ctx.globalAlpha = isHighlighted ? 0.92 : 0.06;
        ctx.fillStyle = isHighlighted ? pin.markerColor : '#64748b';
        ctx.beginPath();
        ctx.arc(point.x, point.y, size / 2, 0, Math.PI * 2);
        ctx.fill();
        if (isHighlighted) {
            addPinToHitGrid(pin, point.x, point.y);
        }
    };

    const visiblePins = [];
    currentMapPins.forEach((pin) => {
        const point = usMap.latLngToContainerPoint(pin.coordinates);
        if (point.x < -2 || point.y < -2 || point.x > canvas.width + 2 || point.y > canvas.height + 2) {
            return;
        }

        visiblePins.push({ pin, point });
    });

    visiblePins.forEach(({ pin, point }) => {
        const isHighlighted = isMapPinHighlighted(pin);
        if (!activeMapCategory && !isHighlighted) {
            drawPin(pin, point, false);
        }
    });

    visiblePins.forEach(({ pin, point }) => {
        const isHighlighted = isMapPinHighlighted(pin);
        if (isHighlighted) {
            drawPin(pin, point, true);
        }
    });

    ctx.globalAlpha = 1;
}

function resetPinHitGrid() {
    pinHitGrid = {
        cellSize: PIN_HIT_GRID_CELL_SIZE,
        cells: new Map()
    };
}

function addPinToHitGrid(pin, x, y) {
    if (!pinHitGrid) {
        return;
    }

    const cellX = Math.floor(x / pinHitGrid.cellSize);
    const cellY = Math.floor(y / pinHitGrid.cellSize);
    const key = `${cellX}|${cellY}`;
    const bucket = pinHitGrid.cells.get(key) || [];
    bucket.push({ pin, x, y });
    pinHitGrid.cells.set(key, bucket);
}

function isMapPinHighlighted(pin) {
    if (!activeMapCategory) {
        return true;
    }

    if (pin.categoryLabel !== activeMapCategory) {
        return false;
    }

    return !activeMapSubcategory || pin.subcategoryLabel === activeMapSubcategory;
}

async function handlePinCanvasClick(event) {
    if (!usMap) {
        return;
    }

    const containerPoint = usMap.mouseEventToContainerPoint(event);
    const hit = findNearestCanvasPin(containerPoint);
    if (hit) {
        L.DomEvent.stop(event);
        await showMapCompanyDetail(hit.manufacturer);
        return;
    }

    L.DomEvent.stop(event);
}

function handlePinCanvasMouseMove(event) {
    if (!usMap || !event) {
        return;
    }

    const now = window.performance?.now?.() || Date.now();
    if (handlePinCanvasMouseMove.lastRun && now - handlePinCanvasMouseMove.lastRun < CANVAS_PIN_HOVER_THROTTLE_MS) {
        return;
    }
    handlePinCanvasMouseMove.lastRun = now;

    const containerPoint = usMap.mouseEventToContainerPoint(event);
    const hit = findNearestCanvasPin(containerPoint);
    const canvas = event.currentTarget;

    if (!hit) {
        hideMapPinTooltip();
        if (canvas?.style) {
            canvas.style.cursor = '';
        }
        return;
    }

    if (canvas?.style) {
        canvas.style.cursor = 'pointer';
    }
    showMapPinTooltip(event, getMapTooltipMarkup(hit));
}

function handlePinCanvasMouseOut() {
    hideMapPinTooltip();
}

function findNearestCanvasPin(containerPoint) {
    if (pinHitGrid?.cells?.size) {
        return findNearestCanvasPinInGrid(containerPoint);
    }

    if (currentMapPins.length > 25000) {
        return null;
    }

    return findNearestCanvasPinByScan(containerPoint);
}

function findNearestCanvasPinInGrid(containerPoint) {
    let nearestPin = null;
    let nearestDistance = Infinity;
    const maxDistance = usMap.getZoom() >= 7 ? 7 : 5;
    const maxDistanceSquared = maxDistance * maxDistance;
    const cellSize = pinHitGrid.cellSize;
    const centerX = Math.floor(containerPoint.x / cellSize);
    const centerY = Math.floor(containerPoint.y / cellSize);
    const searchRadius = Math.ceil(maxDistance / cellSize) + 1;

    for (let x = centerX - searchRadius; x <= centerX + searchRadius; x += 1) {
        for (let y = centerY - searchRadius; y <= centerY + searchRadius; y += 1) {
            const bucket = pinHitGrid.cells.get(`${x}|${y}`);
            if (!bucket) {
                continue;
            }

            bucket.forEach((entry) => {
                const dx = entry.x - containerPoint.x;
                const dy = entry.y - containerPoint.y;
                const distance = dx * dx + dy * dy;
                if (distance <= maxDistanceSquared && distance < nearestDistance) {
                    nearestDistance = distance;
                    nearestPin = entry.pin;
                }
            });
        }
    }

    return nearestPin;
}

function findNearestCanvasPinByScan(containerPoint) {
    let nearestPin = null;
    let nearestDistance = Infinity;
    const maxDistance = usMap.getZoom() >= 7 ? 7 : 5;
    const maxDistanceSquared = maxDistance * maxDistance;

    currentMapPins.forEach((pin) => {
        if (!isMapPinHighlighted(pin)) {
            return;
        }

        const point = usMap.latLngToContainerPoint(pin.coordinates);
        const dx = point.x - containerPoint.x;
        const dy = point.y - containerPoint.y;
        const distance = dx * dx + dy * dy;
        if (distance <= maxDistanceSquared && distance < nearestDistance) {
            nearestDistance = distance;
            nearestPin = pin;
        }
    });

    return nearestPin;
}

function zoomToNearestState(latLng) {
    return;
}

function createLeafletCanvasLayerClass() {
    if (typeof L === 'undefined' || L.canvasLayer) {
        return;
    }

    L.CanvasLayer = L.Layer.extend({
        initialize() {
            this._delegate = null;
        },
        delegate(delegate) {
            this._delegate = delegate;
            return this;
        },
        onAdd(map) {
            this._map = map;
            this._canvas = L.DomUtil.create('canvas', 'leaflet-canvas-layer');
            this._canvas.style.position = 'absolute';
            this._canvas.style.pointerEvents = 'auto';
            this._canvas.style.zIndex = '650';
            const size = this._map.getSize();
            this._canvas.width = size.x;
            this._canvas.height = size.y;
            map.getPanes().markerPane.appendChild(this._canvas);
            map.on('resize viewreset zoomend', this.needRedraw, this);
            L.DomEvent.on(this._canvas, 'click', this._handleClick, this);
            L.DomEvent.on(this._canvas, 'mousemove', this._handleMouseMove, this);
            L.DomEvent.on(this._canvas, 'mouseout', this._handleMouseOut, this);
            this.needRedraw();
        },
        onRemove(map) {
            map.off('resize viewreset zoomend', this.needRedraw, this);
            L.DomEvent.off(this._canvas, 'click', this._handleClick, this);
            L.DomEvent.off(this._canvas, 'mousemove', this._handleMouseMove, this);
            L.DomEvent.off(this._canvas, 'mouseout', this._handleMouseOut, this);
            L.DomUtil.remove(this._canvas);
            this._canvas = null;
        },
        _handleClick(event) {
            if (this._delegate?.onClickLayer) {
                this._delegate.onClickLayer(event);
            }
        },
        _handleMouseMove(event) {
            if (this._delegate?.onMouseMoveLayer) {
                this._delegate.onMouseMoveLayer(event);
            }
        },
        _handleMouseOut(event) {
            if (this._delegate?.onMouseOutLayer) {
                this._delegate.onMouseOutLayer(event);
            }
        },
        needRedraw() {
            if (!this._map || !this._canvas) {
                return;
            }

            const size = this._map.getSize();
            const topLeft = this._map.containerPointToLayerPoint([0, 0]);
            L.DomUtil.setPosition(this._canvas, topLeft);
            this._canvas.width = size.x;
            this._canvas.height = size.y;

            if (this._delegate?.onDrawLayer) {
                this._delegate.onDrawLayer({
                    canvas: this._canvas,
                    bounds: this._map.getBounds(),
                    size,
                    zoom: this._map.getZoom()
                });
            }
        }
    });

    L.canvasLayer = () => new L.CanvasLayer();
}

function updateStateClusterStyles() {
    currentStateClusterStyles = new Map();
    refreshVectorBaseMapStyles();
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

function refreshVectorBaseMapStyles() {
    if (!vectorBaseLayer) {
        return;
    }

    vectorBaseLayer.setStyle((feature) => getStateFeatureStyle(feature));
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

    createLeafletCanvasLayerClass();
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
        dragging: false,
        keyboard: false,
        touchZoom: false,
        inertia: false,
        tap: false,
        preferCanvas: true
    });
    usMap.dragging.disable();
    usMap.touchZoom.disable();
    usMap.doubleClickZoom.disable();
    usMap.scrollWheelZoom.disable();
    usMap.boxZoom.disable();
    usMap.keyboard.disable();

    stateSvgRenderer = L.svg({ padding: 0.2 });
    referenceLayer = L.layerGroup().addTo(usMap);
    addReferenceMapChrome();
    addVectorBaseMap();

    usMap.fitBounds(lower48Bounds, {
        padding: [18, 18],
        maxZoom: 5
    });

    markerLayer = L.layerGroup().addTo(usMap);
    usMap.on('resize viewreset zoomend', () => {
        if (currentView === 'graph') {
            redrawPinCanvasLayer();
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
        stateFeatureBounds = buildStateFeatureBounds(states);
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
        if (currentView === 'graph') {
            renderGraph(filteredManufacturers);
        }
    } catch (error) {
        console.warn('Unable to load vector base map.', error);
    }
}

function buildStateFeatureBounds(states) {
    const boundsByState = new Map();

    states.features.forEach((feature) => {
        const stateKey = getStateFeatureKey(feature);
        const points = [];
        collectFeatureCoordinates(feature.geometry?.coordinates, points);
        if (!stateKey || !points.length) {
            return;
        }

        const polygons = getFeaturePolygons(feature.geometry);
        const lats = points.map((point) => point[1]);
        const lngs = points.map((point) => point[0]);
        const stateShape = {
            minLat: Math.min(...lats),
            maxLat: Math.max(...lats),
            minLng: Math.min(...lngs),
            maxLng: Math.max(...lngs),
            polygons
        };
        boundsByState.set(stateKey, stateShape);
    });

    return boundsByState;
}

function getFeaturePolygons(geometry) {
    if (!geometry?.coordinates) {
        return [];
    }

    if (geometry.type === 'Polygon') {
        return [geometry.coordinates];
    }

    if (geometry.type === 'MultiPolygon') {
        return geometry.coordinates;
    }

    return [];
}

function buildStateScatterPool(stateKey, stateShape) {
    const targetSize = getStateScatterPoolSize(stateKey);
    const scatterPoints = [];
    const maxAttempts = targetSize * 18;

    for (let attempt = 0; attempt < maxAttempts && scatterPoints.length < targetSize; attempt += 1) {
        const candidate = createStateScatterCandidate(stateKey, stateShape, attempt);
        if (isPointInStateShape(candidate[1], candidate[0], stateShape.polygons)) {
            scatterPoints.push(candidate);
        }
    }

    return scatterPoints;
}

function getStateScatterPoolSize(stateKey) {
    if (['california', 'texas', 'florida', 'new york', 'illinois', 'ohio', 'pennsylvania'].includes(stateKey)) {
        return 3200;
    }

    if (['rhode island', 'delaware', 'connecticut', 'new jersey', 'massachusetts'].includes(stateKey)) {
        return 900;
    }

    return 1800;
}

function createStateScatterCandidate(stateKey, stateShape, attempt) {
    const random = createSeededRandom(hashString(`${stateKey}|scatter|${attempt}`));
    const xSeed = random();
    const ySeed = random();
    const edgeSeed = Math.floor(random() * 4);
    const inset = 0.045;
    const bandDepth = 0.38;
    const xRatio = inset + xSeed * (1 - inset * 2);
    const yRatio = inset + ySeed * (1 - inset * 2);

    if (edgeSeed === 0) {
        return [
            interpolate(stateShape.minLat, stateShape.maxLat, inset + ySeed * bandDepth),
            interpolate(stateShape.minLng, stateShape.maxLng, xRatio)
        ];
    }

    if (edgeSeed === 1) {
        return [
            interpolate(stateShape.minLat, stateShape.maxLat, yRatio),
            interpolate(stateShape.minLng, stateShape.maxLng, 1 - inset - xSeed * bandDepth)
        ];
    }

    if (edgeSeed === 2) {
        return [
            interpolate(stateShape.minLat, stateShape.maxLat, 1 - inset - ySeed * bandDepth),
            interpolate(stateShape.minLng, stateShape.maxLng, xRatio)
        ];
    }

    return [
        interpolate(stateShape.minLat, stateShape.maxLat, yRatio),
        interpolate(stateShape.minLng, stateShape.maxLng, inset + xSeed * bandDepth)
    ];
}

function isPointInStateShape(lng, lat, polygons) {
    return polygons.some((polygon) => {
        const [outerRing, ...holes] = polygon;
        return isPointInRing(lng, lat, outerRing) && !holes.some((ring) => isPointInRing(lng, lat, ring));
    });
}

function createSeededRandom(seed) {
    let value = seed >>> 0;
    return () => {
        value += 0x6D2B79F5;
        let result = value;
        result = Math.imul(result ^ (result >>> 15), result | 1);
        result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
        return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
    };
}

function isPointInRing(lng, lat, ring) {
    if (!Array.isArray(ring) || ring.length < 3) {
        return false;
    }

    let inside = false;
    for (let current = 0, previous = ring.length - 1; current < ring.length; previous = current, current += 1) {
        const currentLng = ring[current][0];
        const currentLat = ring[current][1];
        const previousLng = ring[previous][0];
        const previousLat = ring[previous][1];
        const crossesLatitude = currentLat > lat !== previousLat > lat;
        if (!crossesLatitude) {
            continue;
        }

        const intersectionLng = ((previousLng - currentLng) * (lat - currentLat)) / (previousLat - currentLat) + currentLng;
        if (lng < intersectionLng) {
            inside = !inside;
        }
    }

    return inside;
}

function collectFeatureCoordinates(value, points) {
    if (!Array.isArray(value)) {
        return;
    }

    if (typeof value[0] === 'number' && typeof value[1] === 'number') {
        points.push(value);
        return;
    }

    value.forEach((entry) => collectFeatureCoordinates(entry, points));
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
    const stateName = stateFipsNames[String(feature?.id || '').padStart(2, '0')] || 'State';

    return `
        <strong>${escapeHtml(stateName)}</strong>
        <span>Use filters or search to narrow companies</span>
    `;
}

function drillIntoStateFeature(feature) {
    return;
}

function getStateFeatureStyle(feature) {
    return {
        color: '#9aa7b6',
        weight: 1.15,
        opacity: 0.9,
        fillColor: '#fbfcfe',
        fillOpacity: 0.18
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
            : 3.4;
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

    const tooltip = ensureMapPinTooltip();
    if (!tooltip) {
        return;
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

function ensureMapPinTooltip() {
    if (!networkGraphEl) {
        return null;
    }

    let tooltip = networkGraphEl.querySelector('.map-pin-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'map-pin-tooltip';
        tooltip.hidden = true;
        networkGraphEl.appendChild(tooltip);
    }

    return tooltip;
}

function showMapPinTooltip(event, markup) {
    const tooltip = ensureMapPinTooltip();
    if (!tooltip) {
        return;
    }

    tooltip.innerHTML = markup;
    tooltip.hidden = false;
    positionMapTooltip(event, tooltip);
}

function hideMapPinTooltip() {
    const tooltip = networkGraphEl?.querySelector('.map-pin-tooltip');
    if (tooltip) {
        tooltip.hidden = true;
    }
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

function getDisplayManufacturerCoordinates(manufacturer) {
    const coordinates = getManufacturerCoordinates(manufacturer);
    if (!coordinates) {
        return null;
    }

    const rawState = normalizeGeographyToken(manufacturer.location?.state);
    const stateKey = resolveStateKey(rawState);
    const rawCity = normalizeGeographyToken(getPrimaryCityCandidate(manufacturer.location?.city));
    const hasPreciseCity = Boolean(rawCity && stateKey && cityCoordinates[`${rawCity}|${stateKey}`]);
    const hasExactGeo = Number.isFinite(Number(manufacturer.geo?.lat)) && Number.isFinite(Number(manufacturer.geo?.lon));

    if (hasPreciseCity || hasExactGeo || !stateKey) {
        return coordinates;
    }

    return scatterCoordinatesWithinState(coordinates, manufacturer.id || manufacturer.name, stateKey);
}

function scatterCoordinatesWithinState([lat, lng], seedValue, stateKey) {
    const hash = hashString(`${seedValue}|${stateKey}`);
    const bounds = stateFeatureBounds.get(stateKey);
    if (bounds && !bounds.scatterPoints) {
        bounds.scatterPoints = buildStateScatterPool(stateKey, bounds);
    }

    if (bounds?.scatterPoints?.length) {
        return bounds.scatterPoints[hash % bounds.scatterPoints.length];
    }

    return [lat, lng];
}

function interpolate(min, max, ratio) {
    return min + (max - min) * ratio;
}

function getStateScatterRadius(stateKey) {
    if (['rhode island', 'delaware', 'connecticut', 'new jersey', 'massachusetts'].includes(stateKey)) {
        return 0.35;
    }
    if (['california', 'texas', 'montana', 'nevada', 'arizona', 'new mexico', 'alaska'].includes(stateKey)) {
        return 2.3;
    }
    return 1.15;
}

function getLongitudeScatterScale(lat) {
    const cosine = Math.cos((lat * Math.PI) / 180);
    return cosine > 0.2 ? 1 / cosine : 1;
}

function hashString(value) {
    return String(value || '').split('').reduce((hash, character) => (
        (hash * 31 + character.charCodeAt(0)) >>> 0
    ), 2166136261);
}

function toTitleCase(value) {
    return String(value || '')
        .split(' ')
        .filter(Boolean)
        .map((token) => `${token.charAt(0).toUpperCase()}${token.slice(1)}`)
        .join(' ');
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

function getMapSubcategoryLabel(assignment) {
    return assignment?.subcategory || 'Other';
}

function getMapCategoryLabel(assignment, manufacturer) {
    return getMainCategoryLabel(assignment);
}

function getCategoryColor(assignment, manufacturer) {
    const categoryLabel = getMapCategoryLabel(assignment, manufacturer);
    return mapSectionColors[categoryLabel] || getIndustryColor(categoryLabel);
}

function generateMapLegend(manufacturersToGraph, mapPins = []) {
    const mapLegend = document.getElementById('mapLegend');
    if (!mapLegend) return;

    const categoryColors = new Map();
    const subcategoryCounts = new Map();
    manufacturersToGraph.forEach(manufacturer => {
        const assignment = manufacturerAssignments.get(manufacturer.id);
        const categoryLabel = getMapCategoryLabel(assignment, manufacturer);
        const subcategoryLabel = getMapSubcategoryLabel(assignment);
        const color = getCategoryColor(assignment, manufacturer);
        categoryColors.set(categoryLabel, color);
        addMapSubcategoryCount(subcategoryCounts, categoryLabel, subcategoryLabel);
    });
    mapPins.forEach(pin => {
        categoryColors.set(pin.categoryLabel, pin.markerColor);
        addMapSubcategoryCount(subcategoryCounts, pin.categoryLabel, pin.subcategoryLabel);
    });

    const sortedCategories = Array.from(categoryColors.entries()).sort(compareMapCategoryEntries);
    if (sortedCategories.length === 0) {
        mapLegend.innerHTML = '';
        return;
    }

    mapLegend.innerHTML = `
        <h3>Pin Colors</h3>
        <p class="legend-caption">Click a category to highlight matching pins.</p>
        <button class="legend-reset${activeMapCategory ? '' : ' is-active'}" type="button" data-category="">
            Show all pins
        </button>
        <div class="legend-items">
            ${sortedCategories.map(([category, color]) => `
                ${renderMapLegendCategory(category, color, subcategoryCounts.get(category))}
            `).join('')}
        </div>
    `;

    mapLegend.querySelectorAll('[data-category]').forEach(element => {
        element.addEventListener('click', () => {
            const selectedCategory = element.getAttribute('data-category') || null;
            const isSameCategory = selectedCategory === activeMapCategory;
            activeMapCategory = isSameCategory ? null : selectedCategory;
            activeMapSubcategory = null;
            activeMapState = null;
            renderGraph(filteredManufacturers);
            redrawPinCanvasLayer();
        });
    });

    mapLegend.querySelectorAll('[data-subcategory]').forEach(element => {
        element.addEventListener('click', () => {
            activeMapSubcategory = element.getAttribute('data-subcategory') || null;
            activeMapState = null;
            renderGraph(filteredManufacturers);
            redrawPinCanvasLayer();
        });
    });
}

function renderMapLegendCategory(category, color, subcategoryCountsForCategory) {
    const isActive = activeMapCategory === category;
    const subcategories = isActive
        ? getOrderedMapSubcategories(category, subcategoryCountsForCategory)
        : [];

    return `
        <div class="legend-category-group">
            <button
                class="legend-item${isActive ? ' is-active' : ''}"
                type="button"
                data-category="${escapeAttribute(category)}"
                style="--legend-color: ${escapeAttribute(color)};"
            >
                <div class="legend-color" style="background-color: ${color};"></div>
                <span>${escapeHtml(category)}</span>
            </button>
            ${isActive && subcategories.length ? renderMapLegendSubcategories(category, color, subcategories) : ''}
        </div>
    `;
}

function renderMapLegendSubcategories(category, color, subcategories) {
    return `
        <div class="legend-subcategory-panel" style="--legend-color: ${escapeAttribute(color || '#111827')};">
            <div class="legend-subcategory-list">
                ${subcategories.map(({ name, count }) => `
                    <button
                        class="legend-subcategory${activeMapSubcategory === name ? ' is-active' : ''}"
                        type="button"
                        data-subcategory="${escapeAttribute(name)}"
                    >
                        <span>${escapeHtml(name)}</span>
                        <span>${count.toLocaleString()}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function addMapSubcategoryCount(countsByCategory, categoryLabel, subcategoryLabel) {
    if (!categoryLabel || !subcategoryLabel) {
        return;
    }

    const counts = countsByCategory.get(categoryLabel) || new Map();
    counts.set(subcategoryLabel, (counts.get(subcategoryLabel) || 0) + 1);
    countsByCategory.set(categoryLabel, counts);
}

function getOrderedMapSubcategories(categoryLabel, subcategoryCounts = new Map()) {
    const taxonomySubcategories = tierTaxonomy
        .flatMap(tier => tier.sections)
        .find(section => section.name === categoryLabel)
        ?.subcategories
        ?.map(subcategory => subcategory.name) || [];

    const ordered = taxonomySubcategories
        .filter(name => subcategoryCounts.has(name))
        .map(name => ({ name, count: subcategoryCounts.get(name) || 0 }));

    Array.from(subcategoryCounts.entries())
        .filter(([name]) => !taxonomySubcategories.includes(name))
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([name, count]) => ordered.push({ name, count }));

    return ordered;
}

function compareMapCategoryEntries([leftCategory], [rightCategory]) {
    const leftIndex = getMapCategorySortIndex(leftCategory);
    const rightIndex = getMapCategorySortIndex(rightCategory);
    if (leftIndex !== rightIndex) {
        return leftIndex - rightIndex;
    }

    return leftCategory.localeCompare(rightCategory);
}

function getMapCategorySortIndex(category) {
    const index = mapCategoryOrder.indexOf(category);
    return index === -1 ? Number.MAX_SAFE_INTEGER : index;
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
        activeMapSubcategory,
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
            activeMapSubcategory = null;
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
