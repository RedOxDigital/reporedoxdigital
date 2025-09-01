# 16 - Development Environment Standards

## Required tooling and setup verification

### MANDATORY TOOLING
- **Node.js**: v18+ required
- **Package Manager**: npm (no yarn or pnpm)
- **Code Quality**: ESLint + Prettier configured
- **Git**: Proper commit message formatting

### ENVIRONMENT VERIFICATION
Before starting development:
- [ ] Node.js version compatible
- [ ] All dependencies installed via `npm install`
- [ ] ESLint passes without errors
- [ ] Prettier formatting applied
- [ ] Git repository initialized

### DEVELOPMENT COMMANDS
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run lint` - Run ESLint
- `npm run format` - Format with Prettier
- `npm run build:analyze` - Analyze bundle size