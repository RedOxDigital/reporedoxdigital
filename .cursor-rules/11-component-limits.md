# 11 - Component Limits

**TAGS**: `#architecture` `#components` `#quality`

## COMPONENT SIZE & FOCUS MANDATE

**CRITICAL RULE**: All components MUST follow strict size limits and single responsibility principles for maintainability and performance.

**RELATED RULES**:
- **[Rule 30](30-lovable-inspired-architecture.md)** - Lovable-Inspired Architecture
- **[Rule 31](31-development-workflow-standards.md)** - Development Workflow
- **[Rule 32](32-design-token-architecture.md)** - Design Token Architecture
- **[Rule 34](34-development-workflow-standards.md)** - Development Workflow Standards
- **[Rule 35](35-quality-gates-enforcement.md)** - Quality Gates
- **[Rule 36](36-master-rule-index.md)** - Master Rule Index

## SIZE LIMITATIONS - NON-NEGOTIABLE

### Maximum Component Size
- **50 lines maximum** per component file
- **30 lines maximum** for simple UI components
- **100 lines maximum** for complex layout components (with approval)
- **Break down** larger components into smaller, focused pieces

### Line Count Enforcement
```tsx
// ✅ CORRECT - Under 50 lines
const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center">
      <div className="container mx-auto px-4">
        <HeroContent />
        <HeroActions />
      </div>
    </section>
  );
};

// ❌ WRONG - Over 50 lines, needs breakdown
const HeroSection = () => {
  // 60+ lines of complex logic and JSX
  // This violates the size limit
};
```

## SINGLE RESPONSIBILITY PRINCIPLE

### Component Purpose Clarity
Each component MUST have ONE clear purpose:

✅ **APPROVED SINGLE PURPOSES:**
- **Display data** - Show information only
- **Handle user input** - Form controls and interactions
- **Layout structure** - Container and positioning
- **Visual presentation** - Styling and animations
- **State management** - Data handling and updates

❌ **BANNED MULTI-PURPOSE:**
- Components that both display AND handle complex logic
- Components that manage multiple unrelated states
- Components that handle both UI and business logic
- Components that serve multiple layout purposes

### Atomic Design Hierarchy
```
Atoms (10-20 lines)
├── Button, Input, Label, Icon
├── Single-purpose UI elements
└── No business logic

Molecules (20-40 lines)
├── SearchBox, FormField, Card
├── Combinations of atoms
└── Simple interaction logic

Organisms (40-50 lines)
├── Header, Footer, ProductList
├── Complex UI sections
└── Limited business logic

Templates (50-100 lines)
├── Page layouts and structures
├── Component composition
└── Layout-specific logic

Pages (100+ lines allowed)
├── Full page implementations
├── Data fetching and state
└── Template composition
```

## FILE ORGANIZATION STANDARDS

### Component File Structure
```
/components/
├── ui/                    # Reusable UI components (atoms/molecules)
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Card.tsx
│   └── Modal.tsx
├── layout/                # Layout components (organisms)
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Sidebar.tsx
│   └── Container.tsx
├── features/              # Feature-specific components
│   ├── auth/
│   ├── dashboard/
│   └── profile/
└── forms/                 # Form-related components
    ├── LoginForm.tsx
    ├── ContactForm.tsx
    └── SearchForm.tsx
```

### Naming Conventions
- **PascalCase** for component files: `HeroSection.tsx`
- **Descriptive names** that indicate purpose: `ProductCard.tsx`
- **Feature prefixes** for related components: `AuthLoginForm.tsx`
- **Variant suffixes** for variations: `ButtonPrimary.tsx`

## COMPONENT BREAKDOWN STRATEGIES

### When to Break Down Components

**Break down when:**
- Component exceeds 50 lines
- Multiple responsibilities detected
- Complex conditional rendering
- Repeated JSX patterns
- Multiple state variables
- Complex prop interfaces

### Breakdown Patterns

#### 1. Extract Sub-Components
```tsx
// ❌ BEFORE - Monolithic component
const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="price">{product.price}</div>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <div className="reviews">
        {product.reviews.map(review => (
          <div key={review.id}>
            <span>{review.rating}</span>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ AFTER - Broken down components
const ProductCard = ({ product }) => (
  <div className="card">
    <ProductImage image={product.image} />
    <ProductInfo name={product.name} description={product.description} />
    <ProductPrice price={product.price} />
    <ProductActions onAddToCart={handleAddToCart} />
    <ProductReviews reviews={product.reviews} />
  </div>
);

const ProductImage = ({ image }) => (
  <img src={image} className="product-image" />
);

const ProductInfo = ({ name, description }) => (
  <div className="product-info">
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
);
```

#### 2. Extract Custom Hooks
```tsx
// ❌ BEFORE - Component with complex logic
const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({});
  
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await api.getUsers(filters);
        setUsers(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [filters]);
  
  // Component JSX...
};

// ✅ AFTER - Extracted custom hook
const useUsers = (filters) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await api.getUsers(filters);
        setUsers(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [filters]);
  
  return { users, loading, error };
};

const UserDashboard = () => {
  const [filters, setFilters] = useState({});
  const { users, loading, error } = useUsers(filters);
  
  // Simplified component JSX...
};
```

#### 3. Extract Utility Functions
```tsx
// ❌ BEFORE - Component with complex calculations
const PriceCalculator = ({ items, discounts, taxRate }) => {
  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };
  
  const calculateDiscount = () => {
    const subtotal = calculateSubtotal();
    return discounts.reduce((sum, discount) => {
      if (discount.type === 'percentage') {
        return sum + (subtotal * discount.value / 100);
      }
      return sum + discount.value;
    }, 0);
  };
  
  const calculateTax = () => {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount();
    return (subtotal - discount) * taxRate;
  };
  
  // Component JSX...
};

// ✅ AFTER - Extracted utilities
const calculateSubtotal = (items) => 
  items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

const calculateDiscount = (subtotal, discounts) =>
  discounts.reduce((sum, discount) => {
    if (discount.type === 'percentage') {
      return sum + (subtotal * discount.value / 100);
    }
    return sum + discount.value;
  }, 0);

const calculateTax = (subtotal, discount, taxRate) =>
  (subtotal - discount) * taxRate;

const PriceCalculator = ({ items, discounts, taxRate }) => {
  const subtotal = calculateSubtotal(items);
  const discount = calculateDiscount(subtotal, discounts);
  const tax = calculateTax(subtotal, discount, taxRate);
  
  // Simplified component JSX...
};
```

## PERFORMANCE OPTIMIZATION

### Component Optimization Rules
- **React.memo** for expensive components
- **useMemo** for expensive calculations
- **useCallback** for event handlers passed to children
- **Lazy loading** for large components
- **Code splitting** for feature components

### Optimization Examples
```tsx
// ✅ Optimized component
const ExpensiveComponent = React.memo(({ data, onUpdate }) => {
  const processedData = useMemo(() => 
    data.map(item => ({
      ...item,
      processed: complexCalculation(item)
    })), [data]
  );
  
  const handleUpdate = useCallback((id) => {
    onUpdate(id);
  }, [onUpdate]);
  
  return (
    <div>
      {processedData.map(item => (
        <Item key={item.id} data={item} onUpdate={handleUpdate} />
      ))}
    </div>
  );
});
```

## TESTING REQUIREMENTS

### Component Testing Standards
- **Unit tests** for all components under 30 lines
- **Integration tests** for components with interactions
- **Accessibility tests** for all UI components
- **Visual regression tests** for design components

### Testing Examples
```tsx
// Component unit test
describe('Button', () => {
  it('renders with correct variant classes', () => {
    render(<Button variant="primary">Click me</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-primary');
  });
  
  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## ENFORCEMENT CHECKLIST

### Before Creating Components:
- [ ] Define single, clear purpose
- [ ] Estimate line count (target under 50)
- [ ] Plan component breakdown if needed
- [ ] Identify reusable sub-components
- [ ] Plan prop interface design

### During Development:
- [ ] Monitor line count continuously
- [ ] Extract sub-components when needed
- [ ] Use custom hooks for complex logic
- [ ] Apply performance optimizations
- [ ] Follow naming conventions

### Quality Assurance:
- [ ] Component under size limit
- [ ] Single responsibility maintained
- [ ] Proper file organization
- [ ] Performance optimizations applied
- [ ] Tests written and passing

## VIOLATION CONSEQUENCES

**IMMEDIATE ACTION REQUIRED** for violations:
1. **Identify** oversized or multi-purpose components
2. **Break down** into smaller, focused components
3. **Extract** custom hooks and utilities
4. **Reorganize** file structure if needed
5. **Test** all extracted components

**ZERO TOLERANCE** for:
- Components over 50 lines without approval
- Multi-purpose components
- Poor file organization
- Missing performance optimizations
- Untested critical components

This component architecture system ensures maintainable, scalable, and performant React applications while maintaining the creative variety and professional standards established in the existing design system.
