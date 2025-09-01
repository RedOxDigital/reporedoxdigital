# 02 - Design System - Visual Standards

## Color Governance & Visual Consistency

### COLOR GOVERNANCE
- **NO hard-coded colors** anywhere in codebase
- **ALL colors must use Tailwind theme tokens** from tailwind.config.js
- **Token Structure**: Color tokens MUST be defined using a numeric shade ramp (e.g., 'brand: { 50: '#...', 100: '#...', ..., 900: '#...'}') to provide a full spectrum for UI design
- **Design Profile**: A 'design.json' file is generated at build time to provide a machine-readable version of the design tokens. This file MUST be used for automated design variation workflows

### TYPOGRAPHY STANDARDS
- **Base font size**: minimum 16px
- **Line height**: 1.5-1.6 for readability
- **Heading hierarchy**: H1, H2, H3 (strict enforcement)
- **Maximum line length**: 65-75 characters

### SPACING & LAYOUT
- **Container Pattern**: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
- **Spacing Scale**: Use the 4-point grid system (multiples of 4px)
- **Section Spacing**: `py-16 lg:py-24`

### ICON PROTOCOL
- **EXCLUSIVE use**: Lucide React icons only
- **NO custom SVGs** or external icon libraries
- **Accessibility**: Always include `aria-hidden="true"` for decorative icons

### DARK MODE CONSIDERATIONS
If dark mode is required:
- All color tokens must include dark variants
- Implement proper color scheme detection
- Ensure accessibility compliance in both modes
- Test contrast ratios in both light and dark themes