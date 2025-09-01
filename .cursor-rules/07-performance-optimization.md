# 07 - Performance Optimization - User Time Respect

## Loading States & Core Web Vitals

### PERFORMANCE REQUIREMENTS
- Page load time < 3 seconds
- Interactive elements respond < 100ms

### IMAGE OPTIMIZATION (MANDATORY)
- **REQUIRED**: All images must have lazy loading by default (`loading="lazy"`)
- **EXCEPTION**: Above-the-fold hero images must be loaded eagerly (`loading="eager" fetchpriority="high"`)

### CORE WEB VITALS
- **Largest Contentful Paint (LCP)** < 2.5s
- **First Input Delay (FID)** < 100ms
- **Cumulative Layout Shift (CLS)** < 0.1

### BUNDLE SIZE ANALYSIS (MANDATORY)
- Before any production deployment, the final build MUST be analyzed with a bundle analyzer tool (e.g., vite-bundle-analyzer)
- Any dependency contributing excessively to the bundle size requires justification