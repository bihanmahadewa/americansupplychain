// DOM Elements
const searchInput = document.getElementById('searchInput');
const stateFilter = document.getElementById('stateFilter');
const industryFilter = document.getElementById('industryFilter');
const clearFiltersBtn = document.getElementById('clearFilters');
const directoryGrid = document.getElementById('directoryGrid');
const resultsCount = document.getElementById('resultsCount');
const suggestBtn = document.getElementById('suggestBtn');

// State
let filteredManufacturers = [...manufacturers];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateFilters();
    renderManufacturers(manufacturers);
    attachEventListeners();
});

// Populate filter dropdowns
function populateFilters() {
    const states = getUniqueStates();
    const industries = getUniqueIndustries();

    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateFilter.appendChild(option);
    });

    industries.forEach(industry => {
        const option = document.createElement('option');
        option.value = industry;
        option.textContent = industry;
        industryFilter.appendChild(option);
    });
}

// Render manufacturer cards
function renderManufacturers(manufacturersToRender) {
    directoryGrid.innerHTML = '';

    if (manufacturersToRender.length === 0) {
        directoryGrid.innerHTML = '<div class="no-results">No manufacturers found. Try adjusting your filters.</div>';
        resultsCount.textContent = '0 manufacturers found';
        return;
    }

    manufacturersToRender.forEach(manufacturer => {
        const card = createManufacturerCard(manufacturer);
        directoryGrid.appendChild(card);
    });

    resultsCount.textContent = `${manufacturersToRender.length} manufacturer${manufacturersToRender.length !== 1 ? 's' : ''} found`;
}

// Create manufacturer card
function createManufacturerCard(manufacturer) {
    const card = document.createElement('div');
    card.className = 'manufacturer-card';

    card.innerHTML = `
        <div class="card-header">
            <h3>${manufacturer.name}</h3>
            <span class="industry-badge">${manufacturer.industry}</span>
        </div>

        <div class="card-body">
            <p class="description">${manufacturer.description}</p>

            <div class="products">
                <strong>Products:</strong>
                <div class="product-tags">
                    ${manufacturer.products.map(p => `<span class="tag">${p}</span>`).join('')}
                </div>
            </div>

            <div class="location">
                <strong>Location:</strong> ${manufacturer.location.city}, ${manufacturer.location.state}
            </div>

            <div class="contact-info">
                ${manufacturer.website ? `<a href="${manufacturer.website}" target="_blank" rel="noopener" class="contact-link">Website</a>` : ''}
                ${manufacturer.twitter ? `<a href="${manufacturer.twitterUrl}" target="_blank" rel="noopener" class="contact-link twitter">X ${manufacturer.twitter}</a>` : ''}
                ${manufacturer.email ? `<a href="mailto:${manufacturer.email}" class="contact-link">Email</a>` : ''}
                ${manufacturer.phone ? `<a href="tel:${manufacturer.phone}" class="contact-link">${manufacturer.phone}</a>` : ''}
            </div>

            ${manufacturer.founded ? `<div class="meta">Founded: ${manufacturer.founded} • Employees: ${manufacturer.employees}</div>` : ''}
        </div>
    `;

    return card;
}

// Filter manufacturers
function filterManufacturers() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedState = stateFilter.value;
    const selectedIndustry = industryFilter.value;

    filteredManufacturers = manufacturers.filter(manufacturer => {
        const matchesSearch = searchTerm === '' ||
            manufacturer.name.toLowerCase().includes(searchTerm) ||
            manufacturer.description.toLowerCase().includes(searchTerm) ||
            manufacturer.products.some(p => p.toLowerCase().includes(searchTerm)) ||
            manufacturer.location.city.toLowerCase().includes(searchTerm) ||
            manufacturer.location.state.toLowerCase().includes(searchTerm);

        const matchesState = selectedState === '' || manufacturer.location.state === selectedState;
        const matchesIndustry = selectedIndustry === '' || manufacturer.industry === selectedIndustry;

        return matchesSearch && matchesState && matchesIndustry;
    });

    renderManufacturers(filteredManufacturers);
}

// Clear all filters
function clearFilters() {
    searchInput.value = '';
    stateFilter.value = '';
    industryFilter.value = '';
    filterManufacturers();
}

// Event listeners
function attachEventListeners() {
    searchInput.addEventListener('input', filterManufacturers);
    stateFilter.addEventListener('change', filterManufacturers);
    industryFilter.addEventListener('change', filterManufacturers);
    clearFiltersBtn.addEventListener('click', clearFilters);

    suggestBtn.addEventListener('click', () => {
        const email = 'suggestions@americansupplychain.com'; // Change this to your email
        const subject = 'Suggest a Manufacturer';
        const body = 'Manufacturer Name:\nX.com Profile:\nWebsite:\nProducts:\nLocation:\n\nAdditional Info:';
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
}
