# 03 - WCAG Compliance

**TAGS**: `#quality` `#accessibility` `#legal`

## Legal Requirement - Non-Negotiable

### WCAG AA MANDATORY REQUIREMENTS
- Semantic HTML structure required (`<section>`, `<article>`, `<nav>`)
- Keyboard navigation support for all features
- Screen reader compatibility
- High contrast ratios (4.5:1 minimum)
- Alt text for all meaningful images
- ARIA labels for complex or non-semantic interactive elements

### IMPLEMENTATION CHECKLIST
- [ ] Semantic HTML is used
- [ ] Descriptive alt text is provided for all images
- [ ] Visible focus indicators are present for keyboard navigation
- [ ] ARIA labels are used where semantic meaning isn't clear
- [ ] Color contrast ratios are verified
- [ ] All interactive elements are reachable and usable with a keyboard

### CODE PATTERNS

#### Image with proper alt text
```jsx
<img
  src="/images/example.jpg"
  alt="Specific description of image content and context"
  loading="lazy"
/>
```

#### Button with ARIA label for an icon-only button
```jsx
<button aria-label="Close dialog">
  <X className="w-6 h-6" aria-hidden="true" />
</button>
```

## 6.5 CONTRAST ENFORCEMENT

### AUTOMATIC CONTRAST CORRECTION
When implementing any section:
- Identify background darkness: Image, gradient, or color
- Apply appropriate text color:
  - Dark background → `text-white`
  - Light background → `text-primary-900`
- Verify overlay opacity ensures proper contrast
- Test on multiple devices and lighting conditions

### RED FLAGS FOR CONTRAST
❌ `text-primary-900` on dark images or colored backgrounds
❌ `text-white` on light backgrounds
❌ Insufficient overlay opacity (less than 60% for dark overlays)
❌ Colored text that doesn't meet 4.5:1 contrast ratio

### CONTRAST TESTING PROTOCOL
Before submitting any implementation:
- Screenshot the section on desktop and mobile
- Test readability in bright lighting
- Use browser dev tools to verify contrast ratios
- Ensure all text passes WCAG AA standards (4.5:1 minimum)