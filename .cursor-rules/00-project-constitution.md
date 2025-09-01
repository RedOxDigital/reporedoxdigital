# 00 - Project Constitution - Core Governance

**CRITICAL: This file MUST be referenced before ANY development work**

## ARCHITECTURAL FOUNDATION

- **Stack**: Vite + React (JavaScript only) + Tailwind CSS v3
- **No TypeScript**: Pure JavaScript with JSDoc comments
- **Component Architecture**: Functional components with hooks in 'src/components/'
- **Asset Management**: Static assets in /public/images with absolute paths ('/images/...')
- **Code Quality**: The project root MUST contain fully configured .eslintrc.cjs and .prettierrc files. The package.json MUST include 'lint' and 'format' scripts.

## DEVELOPMENT CONSTRAINTS

- **No External Dependencies**: Unless explicitly approved
- **No CSS-in-JS**: Tailwind utilities only
- **No State Management Libraries**: React hooks and context only
- **No Build Tools Changes**: Vite configuration changes require approval

## PROHIBITED PRACTICES (ZERO TOLERANCE)

- Hard-coded colors or values
- Custom CSS outside Tailwind
- Inline styles (except for dynamic values)
- Non-Lucide icons
- Poor accessibility practices