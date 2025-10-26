# New Components Usage Guide

## Quick Reference for New SEO & Performance Components

---

## 1. Testimonials Component

**File**: `src/components/sections/Testimonials.jsx`

**Usage**:
```jsx
import Testimonials from '../components/sections/Testimonials'

<Testimonials />
```

**Features**:
- Displays 3 customer testimonials
- Includes Review schema for rich snippets
- Shows ratings, business info, and dates
- Fully responsive design
- Built-in fallback for missing images

**To customize**: Edit the `testimonials` array inside the component

---

## 2. Breadcrumbs Component

**File**: `src/components/ui/Breadcrumbs.jsx`

**Usage**:
```jsx
import Breadcrumbs from '../components/ui/Breadcrumbs'

<Breadcrumbs items={[
  { name: 'Home', url: 'https://redoxdigital.com.au/' },
  { name: 'Services', url: 'https://redoxdigital.com.au/#services' },
  { name: 'Current Page', url: 'https://redoxdigital.com.au/current' }
]} />
```

**Features**:
- BreadcrumbList schema included
- Accessible navigation
- Mobile responsive
- Last item shows as current page

---

## 3. Google Map Section

**File**: `src/components/sections/GoogleMapSection.jsx`

**Usage**:
```jsx
import GoogleMapSection from '../components/sections/GoogleMapSection'

<GoogleMapSection />
```

**Features**:
- Embedded Google Map
- Contact information display
- Business hours
- Service area description
- Click-to-call phone numbers
- Mailto links

**To customize**: Edit the contact details and map embed URL directly in the component

---

## 4. Resources/Blog Section

**File**: `src/components/sections/ResourcesSection.jsx`

**Usage**:
```jsx
import ResourcesSection from '../components/sections/ResourcesSection'

<ResourcesSection />
```

**Features**:
- Blog post cards with metadata
- Category filtering (UI only - needs JS)
- Article structure ready for SEO
- CTA section
- Graceful image fallback

**To customize**: Edit the `resources` and `categories` arrays

---

## 5. Schema Components

### HowTo Schema
**File**: `src/components/seo/HowToSchema.jsx`
```jsx
import HowToSchema from '../components/seo/HowToSchema'

<HowToSchema />
```

### Offer Schema
**File**: `src/components/seo/OfferSchema.jsx`
```jsx
import OfferSchema from '../components/seo/OfferSchema'

<OfferSchema />
```

### Service Schema
**File**: `src/components/seo/ServiceSchema.jsx`
```jsx
import ServiceSchema from '../components/seo/ServiceSchema'

<ServiceSchema />
```

**Note**: All schemas are automatically rendered as JSON-LD in page head

---

## 6. CSS Modules

### Hero Styles
**File**: `src/styles/Hero.module.css`
```jsx
import styles from '../styles/Hero.module.css'

<div className={styles.heroContainer}>
  <h1 className={styles.heroHeadline}>Title</h1>
</div>
```

### Services Styles
**File**: `src/styles/Services.module.css`
```jsx
import styles from '../styles/Services.module.css'

<section className={styles.servicesSection}>
  ...
</section>
```

---

## Code Splitting Best Practices

### Current Implementation:
```javascript
// Critical above-fold components (eager load)
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import ProblemAgitationSolution from '../components/sections/ProblemAgitationSolution'

// Heavy below-fold components (lazy load)
const MythBusting = lazy(() => import('../components/sections/MythBusting'))
const HowItWorks = lazy(() => import('../components/sections/HowItWorks'))
// ... etc
```

### Using Lazy Components:
```jsx
<Suspense fallback={<LoadingSpinner />}>
  <MythBusting onCtaClick={openPanel} />
</Suspense>
```

---

## Image Optimization Best Practices

### Hero/LCP Images:
```jsx
<img 
  src="/path/to/image.webp"
  alt="Descriptive alt text"
  width="1920"
  height="1080"
  loading="eager"
  fetchpriority="high"
  decoding="async"
/>
```

### Regular Images:
```jsx
<img 
  src="/path/to/image.webp"
  alt="Descriptive alt text"
  width="800"
  height="600"
  loading="lazy"
  decoding="async"
/>
```

### With Fallback:
```jsx
<img 
  src="/path/to/image.webp"
  alt="Descriptive alt text"
  width="800"
  height="600"
  loading="lazy"
  decoding="async"
  onError={(e) => {
    e.target.style.display = 'none'
    // Or set fallback source
  }}
/>
```

---

## Schema Testing

**Google Rich Results Test**:
https://search.google.com/test/rich-results

**Schema Markup Validator**:
https://validator.schema.org/

Test the following URLs after deployment:
- HowTo Schema: Your homepage
- Offer Schema: Your homepage (#photography-services)
- Service Schema: Your homepage
- Review Schema: Your homepage (#testimonials)
- BreadcrumbList: Any page with breadcrumbs

---

## Performance Monitoring

### Tools to use:
1. **Lighthouse** (Chrome DevTools)
   - Performance score
   - SEO score
   - Accessibility score

2. **PageSpeed Insights**
   - Core Web Vitals
   - Field data
   - Lab data

3. **Search Console**
   - Core Web Vitals report
   - Coverage issues
   - Enhancement reports

### Key Metrics to Track:
- **LCP**: < 2.5s (Hero image)
- **FID**: < 100ms
- **CLS**: < 0.1 (image dimensions prevent this)
- **Time to Interactive**: Monitor with lazy loading
- **Total Bundle Size**: Should be reduced by ~60%

---

## Local SEO Checklist

✅ Google Map embedded
✅ Business hours displayed
✅ Phone number with tel: link
✅ Email with mailto: link
✅ Service area description
✅ Geo meta tags in Meta component
✅ LocalBusiness schema
✅ Breadcrumb navigation

### Next Steps for Local SEO:
1. Create Google Business Profile
2. Get listed in local directories
3. Encourage customer reviews
4. Add location-specific content
5. Build local backlinks

---

## Deployment Checklist

Before deploying:
1. ✅ Test all lazy-loaded components
2. ✅ Verify image paths are correct
3. ✅ Test breadcrumb links
4. ✅ Validate all schema markup
5. ✅ Check mobile responsiveness
6. ✅ Test Google Maps embed
7. ✅ Verify contact links work
8. ✅ Test forms and CTAs
9. ⏳ Run Lighthouse audit
10. ⏳ Test on staging environment

After deploying:
1. Submit sitemap to Google Search Console
2. Request indexing for main pages
3. Monitor Core Web Vitals
4. Check for any 404 errors
5. Verify structured data in Search Console
6. Test rich snippets appearance
7. Monitor organic traffic

---

## Troubleshooting

### Images not loading:
- Check file paths (must be in `/public/Images/`)
- Verify image names match exactly (case-sensitive)
- Check browser console for 404 errors

### Schemas not appearing:
- Use Google Rich Results Test
- Check for JSON syntax errors
- Verify schema is in `<head>` section
- Allow 1-2 weeks for Google to index

### Lazy loading issues:
- Check Suspense boundaries
- Verify import paths
- Check browser console for errors
- Test on different devices

### Performance issues:
- Run Lighthouse audit
- Check Network tab for large assets
- Verify lazy loading is working
- Check for unnecessary re-renders

---

## Support Resources

**React Documentation**:
- Code Splitting: https://react.dev/reference/react/lazy
- Suspense: https://react.dev/reference/react/Suspense

**Schema.org Documentation**:
- HowTo: https://schema.org/HowTo
- Offer: https://schema.org/Offer
- Service: https://schema.org/Service
- Review: https://schema.org/Review

**Web Vitals**:
- Core Web Vitals: https://web.dev/vitals/
- LCP: https://web.dev/lcp/
- CLS: https://web.dev/cls/

---

*Last Updated: October 26, 2025*

