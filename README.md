# Rezanto Marketing Site

This is the standalone marketing website for Rezanto, designed to be hosted on GitHub Pages at `www.rezanto.com`.

## Files

- `index.html` - Main landing page
- `styles.css` - All styling (extracted from React component)
- `script.js` - JavaScript functionality
- `README.md` - This file

## Features

- Fully responsive design
- Smooth scrolling navigation
- Mobile-friendly layout
- All CTAs point to `app.rezanto.com/login`
- Contact information uses `info@rezanto.com`
- Clean, professional design matching your branding

## Deployment

### GitHub Pages Setup

1. Create a new repository called `rezanto-marketing` or similar
2. Upload these files to the repository
3. Enable GitHub Pages in repository settings
4. Point `www.rezanto.com` to the GitHub Pages URL

### Custom Domain Setup

1. Add a `CNAME` file with content: `www.rezanto.com`
2. Configure your DNS:
   - Add CNAME record: `www` → `yourusername.github.io`
   - Add A records for apex domain (optional):
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

## Customization

- Update Google Analytics tracking ID in `index.html` if needed
- Modify contact email or add contact forms
- Add more sections or update content as needed
- Update pricing or features as your product evolves

## Links to App

All "Get Started", "Login", and demo buttons point to:
- `https://app.rezanto.com/login`
- `https://app.rezanto.com/login?demo=true` (for demo)

## Content Updates

This is a static site, so updates require:
1. Editing the HTML/CSS files
2. Committing changes to the repository
3. GitHub Pages will automatically deploy updates

The marketing site is completely separate from your main application, allowing independent updates and faster loading.