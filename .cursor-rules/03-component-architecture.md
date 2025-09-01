# 03 - Component Architecture - React Patterns

## Standardized Component Structure & Patterns

### COMPONENT STRUCTURE (MANDATORY)
- **Order**: State declarations first, then effects, then event handlers, and the return statement last
- **Documentation**: All components must include JSDoc comments explaining their purpose and props

### PROP HANDLING PATTERNS (CLARIFIED)
- **Simple Components**: Direct prop usage acceptable for readability
- **Complex Components**: Object destructuring preferred for maintainability
- **Default Values**: Provide default values for all non-required props
- **Spread Props**: Spread remaining props (`...props`) onto the primary element for flexibility

### INTEGRATING THIRD-PARTY COMPONENTS
When adding a pre-built component (e.g., from Aceternity UI), you MUST:
- Provide Cursor with the full, raw component code
- Verify that all prerequisites (e.g., Framer Motion) are already installed or add them
- Explicitly state the exact file and location where the component should be rendered