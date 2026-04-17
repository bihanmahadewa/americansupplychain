// DOM Elements
const searchInput = document.getElementById('searchInput');
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

const tierTaxonomy = [
    {
        tier: 'S',
        label: 'Mine to metal',
        sections: [
            {
                name: 'Extraction',
                subcategories: [
                    { name: 'Mining / ore extraction', industryMatches: [], keywordMatches: ['ore extraction', 'mining'] },
                    { name: 'Lithium / cobalt / nickel mining', industryMatches: [], keywordMatches: ['lithium', 'cobalt', 'nickel'] },
                    { name: 'Rare earth mining + separation', industryMatches: [], keywordMatches: ['rare earth', 'separation'] }
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
                    { name: 'Semiconductor grade silicon refining', industryMatches: [], keywordMatches: ['semiconductor grade silicon', 'silicon refining'] },
                    { name: 'Uranium enrichment', industryMatches: [], keywordMatches: ['uranium enrichment'] }
                ]
            },
            {
                name: 'Tooling',
                subcategories: [
                    {
                        name: 'Tool and die making',
                        industryMatches: ['Manufacturing Equipment'],
                        keywordMatches: ['tool and die', 'machine tools', 'tooling']
                    },
                    { name: 'Forging', industryMatches: [], keywordMatches: ['forging'] }
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
                    { name: 'Alloy development', industryMatches: [], keywordMatches: ['alloy'] },
                    {
                        name: 'Polymer compounding',
                        industryMatches: ['3D Printing Materials'],
                        keywordMatches: ['polymer', 'resins', 'materials']
                    },
                    {
                        name: 'Carbon fiber / composites precursor',
                        industryMatches: ['3D Printing Materials'],
                        keywordMatches: ['carbon fiber', 'composite materials', 'composites precursor', 'composites']
                    },
                    { name: 'Ceramic matrix composites', industryMatches: [], keywordMatches: ['ceramic matrix composite'] },
                    { name: 'Cathode / anode materials', industryMatches: [], keywordMatches: ['cathode', 'anode'] }
                ]
            },
            {
                name: 'Critical Fabrication',
                subcategories: [
                    { name: 'Semiconductor fab', industryMatches: [], keywordMatches: ['semiconductor fab', 'chip fab', 'semiconductor'] },
                    { name: 'Battery cell manufacturing', industryMatches: [], keywordMatches: ['battery cell'] },
                    { name: 'Photolithography / EUV', industryMatches: [], keywordMatches: ['photolithography', 'euv'] },
                    { name: 'Nuclear fuel fabrication', industryMatches: [], keywordMatches: ['nuclear fuel'] }
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
                        industryMatches: ['Metal Manufacturing', 'Steel Manufacturing'],
                        keywordMatches: ['foundry', 'casting', 'metal fabrication']
                    },
                    {
                        name: 'CNC machining',
                        industryMatches: ['Precision Manufacturing', 'Manufacturing'],
                        keywordMatches: ['cnc', 'machining', 'machine shop', 'custom parts']
                    },
                    { name: 'Injection molding', industryMatches: [], keywordMatches: ['injection molding'] },
                    { name: 'Stamping / deep draw', industryMatches: [], keywordMatches: ['stamping', 'deep draw'] },
                    {
                        name: 'Powder metallurgy',
                        industryMatches: ['Metal 3D Printing', 'Additive Manufacturing'],
                        keywordMatches: ['powder metallurgy', 'binder jetting', 'metal 3d printing']
                    }
                ]
            },
            {
                name: 'Energy Systems',
                subcategories: [
                    { name: 'Electrolysis / green hydrogen', industryMatches: [], keywordMatches: ['electrolysis', 'green hydrogen'] },
                    { name: 'Solar cell manufacturing', industryMatches: [], keywordMatches: ['solar cell'] },
                    { name: 'Turbine manufacturing', industryMatches: [], keywordMatches: ['turbine'] }
                ]
            },
            {
                name: 'Treatment',
                subcategories: [
                    { name: 'Heat treatment', industryMatches: [], keywordMatches: ['heat treatment'] },
                    { name: 'Surface finishing / plating', industryMatches: [], keywordMatches: ['surface finishing', 'plating'] }
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
                    { name: 'SMT / chip packaging', industryMatches: ['Electronics'], keywordMatches: ['smt', 'chip packaging'] },
                    { name: 'Power electronics', industryMatches: ['Electronics'], keywordMatches: ['power electronics'] },
                    { name: 'Wire harness / electrical integration', industryMatches: [], keywordMatches: ['wire harness', 'electrical integration'] },
                    { name: 'Battery pack assembly', industryMatches: [], keywordMatches: ['battery pack assembly', 'battery pack'] }
                ]
            },
            {
                name: 'Joining + Assembly',
                subcategories: [
                    { name: 'Welding / brazing', industryMatches: [], keywordMatches: ['welding', 'brazing'] }
                ]
            },
            {
                name: 'Bio',
                subcategories: [
                    { name: 'Bioreactors / fermentation', industryMatches: [], keywordMatches: ['bioreactor', 'fermentation'] },
                    { name: 'Pharmaceutical manufacturing', industryMatches: [], keywordMatches: ['pharmaceutical', 'peptides'] }
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
                    { name: 'Robotics assembly', industryMatches: [], keywordMatches: ['robotics assembly', 'robotics'] }
                ]
            },
            {
                name: 'Quality + Validation',
                subcategories: [
                    { name: 'CMM / metrology', industryMatches: [], keywordMatches: ['metrology', 'cmm'] },
                    { name: 'Non-destructive testing', industryMatches: [], keywordMatches: ['non-destructive testing', 'ndt'] },
                    { name: 'PPAP / process validation', industryMatches: [], keywordMatches: ['ppap', 'process validation'] },
                    { name: 'Cleanroom qualification', industryMatches: [], keywordMatches: ['cleanroom qualification', 'cleanroom'] }
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
                    { name: 'Grid-scale energy storage', industryMatches: [], keywordMatches: ['grid-scale energy storage'] },
                    { name: 'Freight / shipping', industryMatches: [], keywordMatches: ['freight', 'shipping'] },
                    { name: 'Warehousing / cold chain', industryMatches: [], keywordMatches: ['warehousing', 'cold chain'] },
                    { name: 'Packaging / kitting', industryMatches: [], keywordMatches: ['packaging', 'kitting'] }
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
                        industryMatches: ['Manufacturing Automation'],
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
    },
    {
        tier: 'F',
        label: 'Software wrapper layer',
        sections: [
            {
                name: 'The software layer (derogatory)',
                subcategories: [
                    {
                        name: 'Procurement platform',
                        industryMatches: ['Manufacturing Marketplace'],
                        keywordMatches: ['procurement', 'marketplace']
                    },
                    {
                        name: '"Supply chain visibility"',
                        industryMatches: ['Industrial Supply'],
                        keywordMatches: ['supply chain visibility', 'industrial supply']
                    },
                    {
                        name: '"Digital twin" (derogatory)',
                        industryMatches: ['Manufacturing Technology'],
                        keywordMatches: ['digital twin']
                    },
                    {
                        name: '"Industry 4.0 platform"',
                        industryMatches: ['Manufacturing Software'],
                        keywordMatches: ['industry 4.0', 'manufacturing software']
                    },
                    {
                        name: '"AI-powered" quality inspection',
                        industryMatches: [],
                        keywordMatches: ['quality assurance', 'quality control', 'ai-enabled manufacturing']
                    },
                    { name: 'Blockchain for supply chain', industryMatches: [], keywordMatches: ['blockchain'] },
                    { name: 'Carbon credit marketplace', industryMatches: [], keywordMatches: ['carbon credit'] }
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
let network = null;

document.addEventListener('DOMContentLoaded', () => {
    populateFilters();
    renderManufacturers(manufacturers);
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

    return taxonomyIndex.find(entry => {
        const matchesIndustry = entry.industryMatches.includes(manufacturer.industry);
        const matchesKeyword = entry.keywordMatches.some(keyword => haystack.includes(keyword.toLowerCase()));
        return matchesIndustry || matchesKeyword;
    }) || null;
}

function populateFilters() {
    getUniqueStates().filter(Boolean).forEach(state => {
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
    const boardMarkup = boardData.sections.map(renderSectionMarkup).join('');
    const unmappedMarkup = renderUnmappedMarkup(boardData.unmappedManufacturers);
    const noMatchesMarkup = noMatches
        ? '<div class="no-results">No companies match the current filters. The empty directory stays visible so the gaps remain obvious.</div>'
        : '';

    return `${noMatchesMarkup}${boardMarkup}${unmappedMarkup}`;
}

function renderSectionMarkup(section) {
    return `
        <section class="section-board">
            <div class="section-board-header">
                <h2>${escapeHtml(section.name)}</h2>
                <span class="section-board-total">${section.count} companies</span>
            </div>
            <div class="subcategory-grid">
                ${section.subcategories.map(subcategory => renderSubcategoryMarkup(subcategory)).join('')}
            </div>
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

    const isExpanded = expandedSubcategories.has(subcategory.key);

    return `
        <details class="subcategory-card has-data" data-subcategory-key="${escapeHtml(subcategory.key)}" ${isExpanded ? 'open' : ''}>
            <summary class="subcategory-summary">
                <span class="subcategory-name">${escapeHtml(subcategory.name)}</span>
                <span class="subcategory-badge">${subcategory.manufacturers.length}</span>
            </summary>
            <div class="subcategory-content">
                <ul class="manufacturer-list">
                    ${subcategory.manufacturers.map(renderManufacturerMarkup).join('')}
                </ul>
            </div>
        </details>
    `;
}

function renderManufacturerMarkup(manufacturer) {
    const location = formatLocation(manufacturer.location);
    const links = [
        manufacturer.website ? `<a href="${escapeAttribute(manufacturer.website)}" target="_blank" rel="noopener">site</a>` : '',
        manufacturer.twitter && manufacturer.twitterUrl
            ? `<a href="${escapeAttribute(manufacturer.twitterUrl)}" target="_blank" rel="noopener">${escapeHtml(manufacturer.twitter)}</a>`
            : '',
        manufacturer.email ? `<a href="mailto:${escapeAttribute(manufacturer.email)}">email</a>` : ''
    ].filter(Boolean).join(' | ');

    return `
        <li class="manufacturer-item">
            <div class="manufacturer-line">
                ${manufacturer.website
                    ? `<a class="manufacturer-name" href="${escapeAttribute(manufacturer.website)}" target="_blank" rel="noopener">${escapeHtml(manufacturer.name)}</a>`
                    : `<span class="manufacturer-name">${escapeHtml(manufacturer.name)}</span>`}
                <span class="manufacturer-meta">${escapeHtml([
                    location,
                    manufacturer.industry,
                    manufacturer.employees ? `${manufacturer.employees} employees` : '',
                    manufacturer.founded ? `founded ${manufacturer.founded}` : ''
                ].filter(Boolean).join(' | '))}</span>
            </div>
            <p class="manufacturer-description">${escapeHtml(manufacturer.description)}</p>
            <p class="manufacturer-products"><strong>Products:</strong> ${escapeHtml(manufacturer.products.join(', '))}</p>
            ${links ? `<p class="manufacturer-links">${links}</p>` : ''}
        </li>
    `;
}

function renderUnmappedMarkup(unmappedManufacturers) {
    if (unmappedManufacturers.length === 0) {
        return '';
    }

    return `
        <section class="unmapped-board">
            <div class="unmapped-header">
                <h2>Unmapped Leads</h2>
                <p>These companies are in the directory but do not cleanly land in the current category map yet.</p>
                <span class="section-board-total">${unmappedManufacturers.length} needs classification</span>
            </div>
            <ul class="manufacturer-list">
                ${unmappedManufacturers.map(renderManufacturerMarkup).join('')}
            </ul>
        </section>
    `;
}

function updateResultsSummary(boardData, visibleCount) {
    const emptySubcategories = boardData.totalSubcategories - boardData.populatedSubcategories;
    const hiddenCount = manufacturers.length - visibleCount;
    const summaryParts = [
        `${visibleCount} of ${manufacturers.length} manufacturers shown`,
        `${boardData.populatedSubcategories}/${boardData.totalSubcategories} subcategories populated`,
        `${emptySubcategories} sourcing gaps visible`
    ];

    if (hiddenCount > 0) {
        summaryParts.push(`${hiddenCount} filtered out`);
    }

    if (boardData.unmappedManufacturers.length > 0) {
        summaryParts.push(`${boardData.unmappedManufacturers.length} unmapped leads`);
    }

    resultsCount.textContent = summaryParts.join('  |  ');
}

function attachBoardEventListeners() {
    directoryGrid.querySelectorAll('details.has-data').forEach(detail => {
        detail.addEventListener('toggle', () => {
            const key = detail.getAttribute('data-subcategory-key');

            if (detail.open) {
                expandedSubcategories.add(key);
            } else {
                expandedSubcategories.delete(key);
            }
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
    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedState = stateFilter.value;
    const selectedIndustry = industryFilter.value;

    filteredManufacturers = manufacturers.filter(manufacturer => {
        const assignment = manufacturerAssignments.get(manufacturer.id);
        const location = formatLocation(manufacturer.location);
        const searchableFields = [
            manufacturer.name,
            manufacturer.description,
            manufacturer.industry,
            manufacturer.products.join(' '),
            location,
            assignment ? assignment.section : '',
            assignment ? assignment.subcategory : ''
        ].join(' ').toLowerCase();

        const matchesSearch = searchTerm === '' || searchableFields.includes(searchTerm);
        const matchesState = selectedState === '' || manufacturer.location.state === selectedState;
        const matchesIndustry = selectedIndustry === '' || manufacturer.industry === selectedIndustry;

        return matchesSearch && matchesState && matchesIndustry;
    });

    renderManufacturers(filteredManufacturers);

    if (currentView === 'graph') {
        renderGraph(filteredManufacturers);
    }
}

function clearFilters() {
    searchInput.value = '';
    stateFilter.value = '';
    industryFilter.value = '';
    filterManufacturers();
}

function attachEventListeners() {
    searchInput.addEventListener('input', filterManufacturers);
    stateFilter.addEventListener('change', filterManufacturers);
    industryFilter.addEventListener('change', filterManufacturers);
    clearFiltersBtn.addEventListener('click', clearFilters);

    treeViewBtn.addEventListener('click', () => switchView('tree'));
    graphViewBtn.addEventListener('click', () => switchView('graph'));

    suggestBtn.addEventListener('click', () => {
        window.open('https://x.com/messages/compose?recipient_id=bihanmahadewa', '_blank');
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

function createGraphData(manufacturersToGraph) {
    const nodes = [];
    const edges = [];
    const sectionNodes = new Set();
    const subcategoryNodes = new Set();

    manufacturersToGraph.forEach(manufacturer => {
        const assignment = manufacturerAssignments.get(manufacturer.id);
        const location = formatLocation(manufacturer.location);

        if (assignment) {
            const sectionNodeId = `section:${assignment.section}`;
            const subcategoryNodeId = `subcategory:${assignment.key}`;

            if (!sectionNodes.has(sectionNodeId)) {
                sectionNodes.add(sectionNodeId);
                nodes.push({
                    id: sectionNodeId,
                    label: assignment.section,
                    shape: 'box',
                    level: 0,
                    color: {
                        background: '#111111',
                        border: '#111111',
                        highlight: {
                            background: '#111111',
                            border: '#111111'
                        }
                    },
                    font: {
                        color: '#ffffff',
                        size: 17,
                        face: 'Arial, sans-serif',
                        bold: true
                    },
                    margin: 12
                });
            }

            if (!subcategoryNodes.has(subcategoryNodeId)) {
                subcategoryNodes.add(subcategoryNodeId);
                nodes.push({
                    id: subcategoryNodeId,
                    label: assignment.subcategory,
                    shape: 'box',
                    level: 1,
                    color: {
                        background: '#ffffff',
                        border: '#111111',
                        highlight: {
                            background: '#ffffff',
                            border: '#111111'
                        }
                    },
                    font: {
                        color: '#1b1b1b',
                        size: 12,
                        face: 'Arial, sans-serif'
                    },
                    margin: 10
                });

                edges.push({
                    from: sectionNodeId,
                    to: subcategoryNodeId,
                    color: {
                        color: '#c8c8c8',
                        opacity: 1
                    },
                    width: 1
                });
            }

            nodes.push({
                id: manufacturer.id,
                label: manufacturer.name,
                shape: 'dot',
                size: 11,
                level: 2,
                title: [
                    manufacturer.name,
                    `${assignment.section} / ${assignment.subcategory}`,
                    manufacturer.industry,
                    location,
                    manufacturer.description
                ].filter(Boolean).join('\n'),
                color: {
                    background: '#111111',
                    border: '#111111',
                    highlight: {
                        background: '#111111',
                        border: '#111111'
                    }
                },
                font: {
                    color: '#1b1b1b',
                    size: 11,
                    face: 'Arial, sans-serif'
                },
                manufacturer
            });

            edges.push({
                from: subcategoryNodeId,
                to: manufacturer.id,
                color: {
                    color: '#d6d6d6',
                    opacity: 1
                },
                width: 1
            });

            return;
        }

        const unmappedNodeId = 'section:Unmapped Leads';
        if (!sectionNodes.has(unmappedNodeId)) {
            sectionNodes.add(unmappedNodeId);
            nodes.push({
                id: unmappedNodeId,
                label: 'Unmapped Leads',
                shape: 'box',
                level: 0,
                color: {
                    background: '#555555',
                    border: '#555555',
                    highlight: {
                        background: '#555555',
                        border: '#555555'
                    }
                },
                font: {
                    color: '#ffffff',
                    size: 17,
                    face: 'Arial, sans-serif',
                    bold: true
                },
                margin: 12
            });
        }

        nodes.push({
            id: manufacturer.id,
            label: manufacturer.name,
            shape: 'dot',
            size: 11,
            level: 1,
            title: [
                manufacturer.name,
                'Unmapped lead',
                manufacturer.industry,
                location,
                manufacturer.description
            ].filter(Boolean).join('\n'),
            color: {
                background: '#444444',
                border: '#444444',
                highlight: {
                    background: '#444444',
                    border: '#444444'
                }
            },
            font: {
                color: '#1b1b1b',
                size: 11,
                face: 'Arial, sans-serif'
            },
            manufacturer
        });

        edges.push({
            from: unmappedNodeId,
            to: manufacturer.id,
            color: {
                color: '#d0d0d0',
                opacity: 1
            },
            width: 1
        });
    });

    return { nodes, edges };
}

function renderGraph(manufacturersToGraph) {
    const { nodes, edges } = createGraphData(manufacturersToGraph);

    if (network) {
        network.destroy();
    }

    network = new vis.Network(networkGraphEl, {
        nodes: new vis.DataSet(nodes),
        edges: new vis.DataSet(edges)
    }, {
        nodes: {
            margin: 10,
            borderWidth: 1.25,
            widthConstraint: {
                maximum: 220
            }
        },
        edges: {
            smooth: {
                enabled: false
            },
            arrows: {
                to: {
                    enabled: false
                }
            }
        },
        layout: {
            hierarchical: {
                enabled: true,
                direction: 'LR',
                sortMethod: 'directed',
                nodeSpacing: 145,
                levelSeparation: 190,
                treeSpacing: 180,
                blockShifting: true,
                edgeMinimization: true,
                parentCentralization: true
            }
        },
        physics: {
            enabled: false
        },
        interaction: {
            hover: true,
            tooltipDelay: 120,
            dragNodes: false,
            dragView: true,
            zoomView: true
        }
    });

    network.on('click', params => {
        if (params.nodes.length === 0) {
            return;
        }

        const node = nodes.find(candidate => candidate.id === params.nodes[0]);
        if (node && node.manufacturer) {
            showManufacturerModal(node.manufacturer);
        }
    });
}

function showManufacturerModal(manufacturer) {
    const assignment = manufacturerAssignments.get(manufacturer.id);
    const location = formatLocation(manufacturer.location);

    alert([
        manufacturer.name,
        assignment ? `${assignment.section} / ${assignment.subcategory}` : 'Unmapped lead',
        manufacturer.industry,
        location,
        '',
        manufacturer.description,
        '',
        `Products: ${manufacturer.products.join(', ')}`
    ].filter(Boolean).join('\n'));
}
