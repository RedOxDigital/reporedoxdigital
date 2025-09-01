# 10 - Schema & Structured Data - AI Search Optimization

## JSON-LD Implementation for Rich Snippets & AI Citations

### MANDATORY SCHEMA TYPES
Every component must implement relevant schema where applicable.

#### Business/Organization Schema (Required on all pages)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Business Name",
  "url": "https://www.example.com",
  "telephone": "+1-555-555-5555",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "12345"
  }
}
```

#### FAQ Schema (CRITICAL for AI)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the first question?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This is the answer to the first question."
      }
    }
  ]
}
```

#### Breadcrumb Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://example.com"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Current Page",
    "item": "https://example.com/current-page"
  }]
}
```

#### Article Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Title of the Article",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "datePublished": "2025-08-29"
}
```

### SCHEMA CHECKLIST
- [ ] Organization schema on every page
- [ ] Service schema on service pages
- [ ] FAQ schema where Q&A content exists
- [ ] BreadcrumbList for navigation
- [ ] Article schema for blog content