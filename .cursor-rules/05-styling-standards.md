# 05 - Styling Standards - Tailwind Patterns

## Responsive Design & Animation Hierarchy

### RESPONSIVE DESIGN RULES
- **Mobile First**: Start with mobile styles, then use responsive prefixes ('sm:', 'md:', 'lg:') for larger screens
- **Breakpoint Strategy**: sm: (640px+), md: (768px+), lg: (1024px+)
- **Grid Systems**: Use responsive grid classes like 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
- **Touch Targets**: All interactive elements MUST have a minimum size of 44px by 44px

### ANIMATION HIERARCHY (UPDATED)
1. **Tailwind CSS** (first choice for simple transitions and hover effects)
2. **JS/React State** (second choice for conditional rendering or simple state-driven animations)
3. **Framer Motion** (allowed for scroll-triggered animations and complex interactions that significantly improve UX)

### COMPONENT PATTERNS

#### Section Wrapper
```jsx
<section className="py-16 lg:py-24" id="section-name">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </div>
</section>
```

#### Button Patterns
```jsx
// Primary Button
<button className="bg-brand hover:bg-brand/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 min-h-[44px]">
  Button Text
</button>

// Secondary Button
<button className="border-2 border-brand text-brand hover:bg-brand hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 min-h-[44px]">
  Button Text
</button>
```