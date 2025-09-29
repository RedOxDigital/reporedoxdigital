# Client Website Shell

A clean, reusable shell for building client websites with modern React, Tailwind CSS, and comprehensive design system rules.

## What's Included

### ✅ **Complete Design System**
- 36+ comprehensive design rules in `.cursor-rules/`
- Advanced card design system
- Visual boldness and variant differentiation enforcement
- Google UX and Apple UI compliance
- Zero-tolerance quality gates

### ✅ **Modern Tech Stack**
- React 19 with Vite
- Tailwind CSS v4
- Framer Motion for animations
- React Helmet for SEO
- Lucide React for icons

### ✅ **Clean Architecture**
- Reusable component structure
- SEO-optimized foundation
- Performance-optimized build
- Development workflow standards

## Getting Started

### 1. **Setup New Client Project**
```bash
# Copy template files to active config
cp colour-template.md colour.md
cp design-template.json design.json

# Install dependencies
npm install

# Start development server
npm run dev
```

### 2. **Customize for Client**
- Edit `colour.md` with client's color palette
- Update `design.json` with brand colors and fonts
- Modify SEO components with client information
- Update `package.json` name and description

### 3. **Build Variants**
- Use the VariantPreview page to test new designs
- Follow the design system rules for quality assurance
- Create variants that are structurally different from each other

## File Structure

```
/src/
├── components/
│   ├── layout/          # Navbar, Footer (clean templates)
│   ├── seo/            # Meta, Schema (client-ready)
│   └── ui/             # Reusable UI components
├── pages/
│   └── VariantPreview.jsx  # For testing new variants
└── templates/          # Template files for new clients
    ├── brand-template.json
    ├── content-template.json
    └── seo-template.json
```

## Design System Rules

The `.cursor-rules/` folder contains 36+ comprehensive design rules including:

- **Creative Design Philosophy** - Modern 2025 design principles
- **Visual Boldness System** - Ensuring design variety and impact
- **Card Design System** - Advanced card patterns and interactions
- **Variant Differentiation** - Zero-tolerance for duplicate sections
- **Quality Gates** - Comprehensive quality assurance protocols

## Development Workflow

1. **Start with VariantPreview** - Test new designs in isolation
2. **Follow Design Rules** - All rules are enforced for quality
3. **Build Structurally Different Variants** - Each variant must be unique
4. **Test Responsiveness** - Mobile-first approach required
5. **Validate SEO** - All variants must be SEO-optimized

## Quality Standards

- **Google UX Compliance** - Follows Google's design principles
- **Apple UI Standards** - Implements Apple's interaction patterns
- **Accessibility** - WCAG 2.1 AA compliance
- **Performance** - Optimized for Core Web Vitals
- **SEO Ready** - Structured data and meta optimization

## Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## Next Steps

1. Copy this shell for each new client
2. Customize colors, fonts, and content
3. Build unique variants following the design system
4. Deploy with confidence knowing quality is enforced

---

**Built with modern web technologies and comprehensive design system rules for professional results.**
