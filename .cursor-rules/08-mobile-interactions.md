# 08 - Mobile Interactions - Touch-First Design

## Scroll Effects & Touch Targets

### TOUCH TARGET REQUIREMENTS
- Minimum 44px by 44px for all interactive elements
- Adequate spacing between touch elements to prevent accidental taps
- Mobile-optimized navigation patterns (e.g., clear hamburger menu, bottom navigation)

### SCROLL-BASED EFFECTS
- Scroll-triggered animations should be subtle and performant
- Use Intersection Observer for efficiency
- **CRITICAL**: Effects must apply on mobile by default. Do not use responsive prefixes like 'md:' to restrict scroll effects to larger screens unless explicitly required.