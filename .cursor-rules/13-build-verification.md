# 13 - Build Verification

## BUILD VERIFICATION & STANDARDS MANDATE

**CRITICAL RULE**: All code MUST pass strict quality gates including build verification, responsive design, accessibility, and performance standards before deployment.

**RELATED RULES**:
- **[Rule 32](32-design-token-architecture.md)** - Design Token Architecture
- **[Rule 33](33-component-architecture-standards.md)** - Component Architecture
- **[Rule 34](34-development-workflow-standards.md)** - Development Workflow
- **[Rule 36](36-master-rule-index.md)** - Master Rule Index

## BUILD VERIFICATION - NON-NEGOTIABLE

### Zero Build Errors Policy
- **NO build errors** allowed in any environment
- **NO TypeScript errors** in production builds
- **NO linting errors** in critical code paths
- **NO console errors** in browser console
- **NO network errors** for critical resources

### Build Verification Checklist
```bash
# ✅ REQUIRED - Build verification commands
npm run build          # Must complete without errors
npm run type-check     # Must pass TypeScript validation
npm run lint           # Must pass linting rules
npm run test           # Must pass all tests
npm run test:e2e       # Must pass end-to-end tests
```

### Build Error Prevention
```tsx
// ✅ CORRECT - Type-safe component
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'destructive';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant, 
  size, 
  children, 
  onClick, 
  disabled = false 
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};

// ❌ WRONG - Type errors and missing props
const Button = ({ variant, children }) => {
  return (
    <button className={`btn-${variant}`}>
      {children}
    </button>
  );
};
```

## RESPONSIVE DESIGN ENFORCEMENT

### Mobile-First Requirements
- **Mobile-first approach** - Design for mobile, enhance for desktop
- **Touch-friendly targets** - Minimum 44px for interactive elements
- **Responsive breakpoints** - Test on all standard screen sizes
- **Fluid typography** - Scalable text across devices
- **Flexible layouts** - Adapt to different screen orientations

### Responsive Design Standards
```tsx
// ✅ REQUIRED - Mobile-first responsive component
const ResponsiveCard = ({ title, content, image }) => {
  return (
    <div className="
      w-full
      p-4 sm:p-6 lg:p-8
      bg-card text-card-foreground
      rounded-lg sm:rounded-xl lg:rounded-2xl
      shadow-sm sm:shadow-md lg:shadow-lg
    ">
      {/* Mobile: Stack vertically */}
      <div className="
        flex flex-col space-y-4
        sm:flex-row sm:space-y-0 sm:space-x-6
        lg:space-x-8
      ">
        <div className="
          w-full sm:w-1/3 lg:w-2/5
          min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]
        ">
          <img 
            src={image} 
            alt={title}
            className="
              w-full h-full object-cover
              rounded-md sm:rounded-lg lg:rounded-xl
            "
          />
        </div>
        
        <div className="
          w-full sm:w-2/3 lg:w-3/5
          flex flex-col justify-center
        ">
          <h3 className="
            text-xl sm:text-2xl lg:text-3xl
            font-bold text-foreground
            mb-2 sm:mb-3 lg:mb-4
          ">
            {title}
          </h3>
          
          <p className="
            text-sm sm:text-base lg:text-lg
            text-muted-foreground
            leading-relaxed
          ">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};
```

### Touch Target Standards
```tsx
// ✅ REQUIRED - Touch-friendly interactive elements
const TouchFriendlyButton = ({ children, onClick }) => {
  return (
    <button
      className="
        min-h-[44px] min-w-[44px]
        px-4 py-2
        bg-primary text-primary-foreground
        rounded-lg
        touch-manipulation
        active:scale-95
        transition-transform
      "
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

// ✅ REQUIRED - Touch-friendly form inputs
const TouchFriendlyInput = ({ label, ...props }) => {
  return (
    <div className="space-y-2">
      <label className="
        block text-sm font-medium text-foreground
        min-h-[44px] flex items-center
      ">
        {label}
      </label>
      <input
        className="
          w-full min-h-[44px]
          px-4 py-3
          border border-input rounded-lg
          bg-background text-foreground
          focus:ring-2 focus:ring-ring
          touch-manipulation
        "
        {...props}
      />
    </div>
  );
};
```

## ACCESSIBILITY ENFORCEMENT

### WCAG 2.1 AA Compliance
- **Color contrast** - Minimum 4.5:1 ratio for normal text
- **Keyboard navigation** - All interactive elements accessible via keyboard
- **Screen reader support** - Proper ARIA labels and semantic HTML
- **Focus management** - Visible focus indicators
- **Alternative text** - Descriptive alt text for all images

### Accessibility Implementation
```tsx
// ✅ REQUIRED - Accessible component
const AccessibleCard = ({ title, content, image, onAction }) => {
  return (
    <article 
      className="
        bg-card text-card-foreground
        rounded-lg shadow-md
        focus-within:ring-2 focus-within:ring-ring
        focus-within:outline-none
      "
      role="article"
      aria-labelledby={`card-title-${title}`}
    >
      <div className="p-6">
        <img
          src={image}
          alt={`Illustration for ${title}`}
          className="w-full h-48 object-cover rounded-md mb-4"
          loading="lazy"
        />
        
        <h3 
          id={`card-title-${title}`}
          className="
            text-xl font-bold text-foreground
            mb-3
          "
        >
          {title}
        </h3>
        
        <p className="
          text-muted-foreground
          mb-4
          leading-relaxed
        ">
          {content}
        </p>
        
        <button
          onClick={onAction}
          className="
            bg-primary text-primary-foreground
            px-4 py-2 rounded-md
            hover:bg-primary-variant
            focus:ring-2 focus:ring-ring focus:outline-none
            transition-colors
          "
          aria-describedby={`card-description-${title}`}
        >
          Learn More
        </button>
        
        <div 
          id={`card-description-${title}`}
          className="sr-only"
        >
          Learn more about {title}
        </div>
      </div>
    </article>
  );
};
```

### Keyboard Navigation
```tsx
// ✅ REQUIRED - Keyboard accessible navigation
const AccessibleNavigation = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleKeyDown = useCallback((event) => {
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        setActiveIndex(prev => (prev + 1) % items.length);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        setActiveIndex(prev => (prev - 1 + items.length) % items.length);
        break;
      case 'Home':
        event.preventDefault();
        setActiveIndex(0);
        break;
      case 'End':
        event.preventDefault();
        setActiveIndex(items.length - 1);
        break;
    }
  }, [items.length]);

  return (
    <nav 
      role="navigation"
      aria-label="Main navigation"
      onKeyDown={handleKeyDown}
    >
      <ul className="flex space-x-4">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={item.href}
              className={`
                px-4 py-2 rounded-md
                transition-colors
                focus:ring-2 focus:ring-ring focus:outline-none
                ${index === activeIndex 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-foreground hover:bg-accent'
                }
              `}
              aria-current={index === activeIndex ? 'page' : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
```

## PERFORMANCE STANDARDS

### Core Web Vitals Compliance
- **Largest Contentful Paint (LCP)** - Under 2.5 seconds
- **First Input Delay (FID)** - Under 100 milliseconds
- **Cumulative Layout Shift (CLS)** - Under 0.1
- **First Contentful Paint (FCP)** - Under 1.8 seconds
- **Time to Interactive (TTI)** - Under 3.8 seconds

### Performance Optimization
```tsx
// ✅ REQUIRED - Performance optimized component
const OptimizedImageGallery = ({ images }) => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  
  const handleImageLoad = useCallback((imageId) => {
    setLoadedImages(prev => new Set([...prev, imageId]));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image) => (
        <div key={image.id} className="relative">
          {!loadedImages.has(image.id) && (
            <div className="
              absolute inset-0
              bg-muted animate-pulse
              rounded-lg
            " />
          )}
          <img
            src={image.src}
            alt={image.alt}
            className={`
              w-full h-64 object-cover rounded-lg
              transition-opacity duration-300
              ${loadedImages.has(image.id) ? 'opacity-100' : 'opacity-0'}
            `}
            loading="lazy"
            onLoad={() => handleImageLoad(image.id)}
          />
        </div>
      ))}
    </div>
  );
};
```

### Code Splitting & Lazy Loading
```tsx
// ✅ REQUIRED - Lazy loading for performance
const LazyComponent = React.lazy(() => import('./HeavyComponent'));

const App = () => {
  return (
    <div>
      <Suspense fallback={
        <div className="
          flex items-center justify-center
          min-h-[200px]
          bg-muted rounded-lg
        ">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      }>
        <LazyComponent />
      </Suspense>
    </div>
  );
};
```

## SECURITY STANDARDS

### Input Sanitization
```tsx
// ✅ REQUIRED - Secure input handling
const SecureForm = () => {
  const [input, setInput] = useState('');
  
  const sanitizeInput = useCallback((value) => {
    // Remove potentially dangerous characters
    return value
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '');
  }, []);

  const handleInputChange = useCallback((event) => {
    const sanitizedValue = sanitizeInput(event.target.value);
    setInput(sanitizedValue);
  }, [sanitizeInput]);

  return (
    <form>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
        placeholder="Enter text safely"
      />
    </form>
  );
};
```

## TESTING REQUIREMENTS

### Test Coverage Standards
- **Unit tests** - 80% minimum coverage for components
- **Integration tests** - All user workflows covered
- **Accessibility tests** - All components tested for a11y
- **Visual regression tests** - UI consistency verified
- **Performance tests** - Core Web Vitals monitored

### Testing Implementation
```tsx
// ✅ REQUIRED - Comprehensive component tests
describe('Button Component', () => {
  it('renders with correct accessibility attributes', () => {
    render(<Button variant="primary">Click me</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveClass('min-h-[44px]');
  });

  it('handles keyboard navigation', () => {
    render(<Button variant="primary">Click me</Button>);
    
    const button = screen.getByRole('button');
    button.focus();
    expect(button).toHaveFocus();
    
    fireEvent.keyDown(button, { key: 'Enter' });
    // Test keyboard interaction
  });

  it('meets color contrast requirements', () => {
    render(<Button variant="primary">Click me</Button>);
    
    const button = screen.getByRole('button');
    const styles = getComputedStyle(button);
    
    // Test color contrast ratio
    expect(getContrastRatio(styles.color, styles.backgroundColor))
      .toBeGreaterThan(4.5);
  });
});
```

## ENFORCEMENT CHECKLIST

### Pre-Development:
- [ ] Plan responsive design approach
- [ ] Identify accessibility requirements
- [ ] Plan performance optimization strategy
- [ ] Design security measures
- [ ] Plan testing approach

### During Development:
- [ ] Implement mobile-first responsive design
- [ ] Add accessibility attributes and ARIA labels
- [ ] Optimize for Core Web Vitals
- [ ] Implement input sanitization
- [ ] Write comprehensive tests

### Pre-Deployment:
- [ ] Verify build passes without errors
- [ ] Test responsive design on all devices
- [ ] Validate accessibility with screen readers
- [ ] Measure performance metrics
- [ ] Run security audit
- [ ] Execute full test suite

## VIOLATION CONSEQUENCES

**IMMEDIATE ACTION REQUIRED** for violations:
1. **Fix build errors** before any deployment
2. **Implement responsive design** for all components
3. **Add accessibility features** for all interactive elements
4. **Optimize performance** to meet Core Web Vitals
5. **Implement security measures** for all user inputs
6. **Write missing tests** for all critical functionality

**ZERO TOLERANCE** for:
- Build errors in production
- Non-responsive components
- Inaccessible interactive elements
- Poor performance metrics
- Unvalidated user inputs
- Untested critical functionality

This quality gates system ensures production-ready applications that meet modern web standards for performance, accessibility, security, and user experience while maintaining the creative variety and professional standards established in the existing design system.
