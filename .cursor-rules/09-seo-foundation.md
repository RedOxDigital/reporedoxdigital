# 09 - SEO Foundation - Technical Requirements

## Meta Tags, Structured Data, Performance

### META TAG REQUIREMENTS
- Every page MUST have a unique and descriptive `<title>` tag
- Every page MUST have a compelling `<meta name="description">`
- Every page MUST have a `<link rel="canonical">` pointing to its definitive URL
- Tags for Open Graph (for social sharing) are REQUIRED

### ROBOTS.TXT REQUIREMENTS
- The robots.txt file MUST allow all major search and AI crawlers
- The file MUST include a link to the sitemap.xml file

### SITEMAP REQUIREMENTS
- A sitemap.xml file MUST be automatically generated at build time (e.g., via vite-plugin-sitemap)