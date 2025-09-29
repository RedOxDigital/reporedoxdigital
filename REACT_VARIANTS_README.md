# React Variant System

This system allows you to create and preview design variants as React components directly in Cursor, instead of standalone HTML files.

## How to Use

### 1. Start the Development Server
```bash
npm run dev
```

### 2. Access the Variant Preview
- Open your browser to `http://localhost:5173`
- Click the "Variants" button in the bottom-right corner (development mode only)
- Or navigate directly to the variants page

### 3. Switch Between Variants
- Use the dropdown selector at the top of the variant preview page
- Each variant shows a different design approach
- All variants are fully interactive and responsive

## Current Variants

### PAS (Problem-Agitation-Solution) Variants
- **PAS Variant 1**: Full background with overlay design
- **PAS Variant 2**: Split layout with strategic image placement  
- **PAS Variant 3**: Grid layout with multiple strategic images

### Hero Variants
- **Hero Variant 1**: Dramatic full background with glass morphism
- **Hero Variant 2**: Split layout with creative elements

## Creating New Variants

### 1. Create a New Component
Create a new file in `src/components/variants/`:
```jsx
// src/components/variants/YourNewVariant.jsx
import React from 'react'

const YourNewVariant = () => {
  return (
    <>
      {/* Custom Styles */}
      <style jsx>{`
        .your-custom-class {
          /* Your custom styles here */
        }
      `}</style>

      {/* Your component JSX */}
      <section className="py-24 px-4">
        {/* Your content */}
      </section>
    </>
  )
}

export default YourNewVariant
```

### 2. Add to Variant Preview
Update `src/pages/VariantPreview.jsx`:

```jsx
// Import your new variant
import YourNewVariant from '../components/variants/YourNewVariant'

// Add to the variants object
const variants = {
  // ... existing variants
  'your-new-variant': {
    name: 'Your New Variant Name',
    component: YourNewVariant,
    description: 'Description of your variant'
  }
}
```

## Benefits of React Variants

### ✅ Advantages
- **Live Preview**: See changes instantly in Cursor
- **Hot Reload**: Changes update automatically
- **Component Reuse**: Share components between variants
- **Type Safety**: Better development experience
- **State Management**: Can add interactive features
- **Props System**: Make variants configurable
- **Testing**: Can write unit tests for variants

### 🔄 vs HTML Variants
- **HTML Variants**: Standalone files, good for quick prototypes
- **React Variants**: Integrated system, better for development workflow

## File Structure

```
src/
├── components/
│   └── variants/
│       ├── PasVariant1.jsx
│       ├── PasVariant2.jsx
│       ├── PasVariant3.jsx
│       ├── HeroVariant1.jsx
│       └── HeroVariant2.jsx
├── pages/
│   ├── HomePage.jsx
│   └── VariantPreview.jsx
└── App.jsx
```

## Development Workflow

1. **Create Variant**: Build your React component
2. **Add to Preview**: Register it in the variant system
3. **Test & Iterate**: Use the preview system to test
4. **Refine**: Make adjustments and see changes instantly
5. **Export**: When ready, you can export to HTML or use directly

## Tips

- Use `<style jsx>` for component-specific styles
- Leverage existing components like `OptimizedImage`
- Follow the established design patterns
- Test on different screen sizes
- Use the floating animation classes for consistency

## Next Steps

- Add more variant types (FAQ, Product, etc.)
- Create variant templates for faster development
- Add variant comparison features
- Implement variant export functionality
