# American Supply Chain Directory

A searchable directory of American manufacturers. Connect people with products made in America.

## Files

- **index.html** - Styled version with modern UI
- **minimal.html** - Brutalist/minimal no-style version
- **data.js** - Manufacturer database
- **app.js** - JavaScript for styled version
- **styles.css** - CSS for styled version

## How to Use

1. Open `index.html` or `minimal.html` in a web browser
2. Search by name, product, or location
3. Filter by state or industry
4. Click links to visit websites or X profiles

## Adding Manufacturers

Edit `data.js` and add entries following this format:

```javascript
{
    id: 6,
    name: "Your Company Name",
    twitter: "@yourhandle",
    twitterUrl: "https://x.com/yourhandle",
    website: "https://yourwebsite.com",
    email: "contact@yourcompany.com",
    phone: "(555) 555-5555",
    location: {
        city: "City Name",
        state: "State Name",
        zip: "12345"
    },
    industry: "Industry Category",
    products: [
        "Product 1",
        "Product 2",
        "Product 3"
    ],
    description: "Brief description of what you manufacture.",
    founded: 2000,
    employees: "10-50"
}
```

## Finding Manufacturers on X.com

1. Search X.com for terms like:
   - "made in america manufacturer"
   - "american made products"
   - "#madeinamerica #manufacturing"
   - Industry-specific terms (textiles, steel, etc.)

2. Look for profiles that:
   - Mention manufacturing or production
   - Post about their products
   - Have location in US
   - Share factory photos/updates

3. Collect their:
   - X handle
   - Website (usually in bio)
   - Product information from posts
   - Location from bio/posts

## Deployment

### Option 1: Static Hosting
Upload files to any static host:
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

### Option 2: Local Development
Just open `index.html` in a browser. No server needed.

### Option 3: Simple Server
```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

## Future Enhancements

- Add manufacturer submission form
- Integrate X API to auto-fetch latest posts
- Add product images
- Map view of manufacturer locations
- Export to CSV
- Admin panel for managing listings

## Contributing

To suggest a manufacturer, provide:
- Company name
- X.com profile
- Website
- Products they make
- Location

## License

Open source - use freely for promoting American manufacturing.
