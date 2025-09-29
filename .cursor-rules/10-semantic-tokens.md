# 10 - Semantic Tokens

**TAGS**: `#design` `#architecture` `#quality` `#2025`

## 2025 SEMANTIC DESIGN SYSTEM MANDATE

**CRITICAL RULE**: All styling MUST use semantic design tokens from the centralized design system. Direct color classes are BANNED, but creative color experimentation within the system is ENCOURAGED.

**RELATED RULES**: 
- **[Rule 07](07-modern-cards.md)** - Modern Cards
- **[Rule 11](11-component-limits.md)** - Component Limits
- **[Rule 13](13-build-verification.md)** - Build Verification
- **[Rule 14](14-rule-navigation.md)** - Rule Navigation

## BANNED PATTERNS - ZERO TOLERANCE

❌ **Direct Color Classes** - NEVER use:
- `text-white`, `text-black`, `text-gray-500`
- `bg-white`, `bg-black`, `bg-gray-100`
- `border-gray-200`, `border-white`
- Any hardcoded color values in components

❌ **Inline Style Overrides** - NEVER use:
- `style={{ color: '#fff' }}`
- `style={{ backgroundColor: 'black' }}`
- Any inline color definitions

❌ **Ad-hoc Color Definitions** - NEVER use:
- Custom color classes in components
- Hardcoded hex/rgb values
- Color variables defined outside design system

## 2025 ENHANCED SEMANTIC TOKENS

✅ **MANDATORY SEMANTIC USAGE WITH CREATIVE FREEDOM**:

### Enhanced Color Token System
```css
/* index.css - 2025 Enhanced Design System */
:root {
  /* Primary Brand Colors */
  --primary: 220 14% 96%;           /* Light primary */
  --primary-foreground: 220 9% 46%; /* Dark text on primary */
  --primary-variant: 220 14% 90%;   /* Lighter primary */
  --primary-dark: 220 14% 85%;      /* Darker primary */
  --primary-light: 220 14% 98%;     /* Lighter primary */
  
  /* Secondary Colors */
  --secondary: 220 9% 46%;          /* Dark secondary */
  --secondary-foreground: 220 14% 96%; /* Light text on secondary */
  --secondary-variant: 220 9% 60%;  /* Lighter secondary */
  --secondary-dark: 220 9% 35%;     /* Darker secondary */
  --secondary-light: 220 9% 70%;    /* Lighter secondary */
  
  /* Background System */
  --background: 0 0% 100%;          /* Pure white */
  --foreground: 220 9% 46%;         /* Dark text */
  --muted: 220 14% 96%;             /* Light muted */
  --muted-foreground: 220 9% 46%;   /* Dark text on muted */
  
  /* Surface System */
  --card: 0 0% 100%;                /* Card background */
  --card-foreground: 220 9% 46%;    /* Card text */
  --popover: 0 0% 100%;             /* Popover background */
  --popover-foreground: 220 9% 46%; /* Popover text */
  
  /* Border System */
  --border: 220 13% 91%;            /* Default borders */
  --input: 220 13% 91%;             /* Input borders */
  --ring: 220 14% 96%;              /* Focus rings */
  
  /* Status Colors */
  --destructive: 0 84% 60%;         /* Error/danger */
  --destructive-foreground: 0 0% 98%; /* Text on destructive */
  --success: 142 76% 36%;           /* Success state */
  --success-foreground: 0 0% 98%;   /* Text on success */
  --warning: 38 92% 50%;            /* Warning state */
  --warning-foreground: 0 0% 98%;   /* Text on warning */
  
  /* Accent System */
  --accent: 220 14% 96%;            /* Accent background */
  --accent-foreground: 220 9% 46%;  /* Accent text */
  
  /* 2025 CREATIVE COLOR SYSTEM */
  --creative-primary: 220 14% 96%;   /* Creative primary */
  --creative-secondary: 220 9% 46%;  /* Creative secondary */
  --creative-accent: 158 36% 16%;    /* Creative accent */
  --creative-highlight: 61 90% 128%; /* Creative highlight */
  
  /* Dynamic Color System */
  --dynamic-primary: hsl(var(--primary));
  --dynamic-secondary: hsl(var(--secondary));
  --dynamic-accent: hsl(var(--creative-accent));
  --dynamic-highlight: hsl(var(--creative-highlight));
  
  /* 2025 ENHANCED GRADIENT SYSTEM */
  --gradient-primary: linear-gradient(135deg, 
    hsl(var(--primary)) 0%, 
    hsl(var(--primary-variant)) 100%);
  --gradient-secondary: linear-gradient(135deg, 
    hsl(var(--secondary)) 0%, 
    hsl(var(--secondary-variant)) 100%);
  --gradient-hero: linear-gradient(135deg, 
    hsl(var(--primary)) 0%, 
    hsl(var(--secondary)) 100%);
  --gradient-creative: linear-gradient(135deg, 
    hsl(var(--creative-primary)) 0%, 
    hsl(var(--creative-secondary)) 50%,
    hsl(var(--creative-accent)) 100%);
  --gradient-artistic: linear-gradient(45deg, 
    hsl(var(--primary)) 0%, 
    hsl(var(--creative-accent)) 25%,
    hsl(var(--secondary)) 50%,
    hsl(var(--creative-highlight)) 75%,
    hsl(var(--primary)) 100%);
  
  /* 2025 CREATIVE GRADIENT VARIATIONS */
  --gradient-radial: radial-gradient(circle, 
    hsl(var(--primary)) 0%, 
    hsl(var(--secondary)) 100%);
  --gradient-conic: conic-gradient(from 0deg, 
    hsl(var(--primary)), 
    hsl(var(--creative-accent)), 
    hsl(var(--secondary)), 
    hsl(var(--creative-highlight)), 
    hsl(var(--primary)));
  --gradient-mesh: linear-gradient(135deg, 
    hsl(var(--primary) / 0.8) 0%, 
    hsl(var(--creative-accent) / 0.6) 25%,
    hsl(var(--secondary) / 0.8) 50%,
    hsl(var(--creative-highlight) / 0.6) 75%,
    hsl(var(--primary) / 0.8) 100%);
  
  /* Enhanced Shadow System */
  --shadow-sm: 0 1px 2px 0 hsl(var(--foreground) / 0.05);
  --shadow: 0 1px 3px 0 hsl(var(--foreground) / 0.1), 0 1px 2px -1px hsl(var(--foreground) / 0.1);
  --shadow-md: 0 4px 6px -1px hsl(var(--foreground) / 0.1), 0 2px 4px -2px hsl(var(--foreground) / 0.1);
  --shadow-lg: 0 10px 15px -3px hsl(var(--foreground) / 0.1), 0 4px 6px -4px hsl(var(--foreground) / 0.1);
  --shadow-xl: 0 20px 25px -5px hsl(var(--foreground) / 0.1), 0 8px 10px -6px hsl(var(--foreground) / 0.1);
  --shadow-2xl: 0 25px 50px -12px hsl(var(--foreground) / 0.25);
  
  /* 2025 CREATIVE SHADOW SYSTEM */
  --shadow-creative: 0 20px 40px hsl(var(--creative-accent) / 0.1);
  --shadow-artistic: 0 15px 35px hsl(var(--creative-highlight) / 0.15);
  --shadow-floating: 0 30px 60px hsl(var(--foreground) / 0.1);
  --shadow-glow: 0 0 20px hsl(var(--creative-accent) / 0.3);
  
  /* Enhanced Animation System */
  --transition-fast: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-bounce: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --transition-elastic: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  /* 2025 CREATIVE ANIMATION SYSTEM */
  --transition-creative: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --transition-artistic: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  --transition-morph: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 2025 CREATIVE COLOR EXPERIMENTATION

✅ **APPROVED CREATIVE APPROACHES**:

#### Dynamic Color Combinations
```css
/* Creative Color Pairings */
.creative-primary-combo {
    background: hsl(var(--creative-primary));
    color: hsl(var(--creative-secondary));
    border: 2px solid hsl(var(--creative-accent));
}

.creative-secondary-combo {
    background: hsl(var(--creative-secondary));
    color: hsl(var(--creative-primary));
    border: 2px solid hsl(var(--creative-highlight));
}

.creative-accent-combo {
    background: hsl(var(--creative-accent));
    color: hsl(var(--creative-primary));
    border: 2px solid hsl(var(--creative-secondary));
}
```

#### Artistic Color Overlays
```css
/* Creative Color Overlays */
.artistic-overlay {
    background: hsl(var(--creative-primary) / 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid hsl(var(--creative-accent) / 0.3);
}

.creative-mesh-overlay {
    background: var(--gradient-mesh);
    backdrop-filter: blur(15px) saturate(150%);
}

.dynamic-color-overlay {
    background: linear-gradient(135deg, 
        hsl(var(--creative-primary) / 0.6) 0%, 
        hsl(var(--creative-accent) / 0.4) 100%);
}
```

#### Experimental Color Psychology
```css
/* Mood-Based Color Systems */
.energetic-mood {
    background: var(--gradient-artistic);
    color: hsl(var(--creative-primary));
    animation: color-pulse 2s ease-in-out infinite;
}

.calm-mood {
    background: var(--gradient-primary);
    color: hsl(var(--creative-secondary));
    transition: var(--transition-creative);
}

.creative-mood {
    background: var(--gradient-creative);
    color: hsl(var(--creative-highlight));
    border: 2px solid hsl(var(--creative-accent) / 0.5);
}

@keyframes color-pulse {
    0%, 100% { filter: hue-rotate(0deg); }
    50% { filter: hue-rotate(180deg); }
}
```

### Component Usage Examples
```tsx
// ✅ CORRECT - Using semantic tokens
<div className="bg-primary text-primary-foreground border-border">
  <h1 className="text-foreground">Creative Title</h1>
  <p className="text-muted-foreground">Creative description</p>
</div>

// ✅ CORRECT - Creative color experimentation
<div className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
  <div className="bg-creative-primary/80 backdrop-blur-sm border-creative-accent/30">
    Creative content with artistic overlay
  </div>
</div>

// ✅ CORRECT - Dynamic color combinations
<div className="bg-creative-primary text-creative-secondary border-creative-accent">
  <div className="bg-gradient-artistic text-creative-highlight">
    Artistic gradient background
  </div>
</div>

// ❌ WRONG - Direct color usage
<div className="bg-white text-black border-gray-200">
  <h1 className="text-gray-800">Title</h1>
</div>

// ❌ WRONG - Inline styles
<div style={{ backgroundColor: '#fff', color: '#000' }}>
  Content
</div>
```

### 2025 CREATIVE FREEDOM GUIDELINES

#### Encouraged Creative Approaches
✅ **Dynamic Color Combinations** - Experimental color pairings within the system
✅ **Artistic Color Overlays** - Creative color treatments on images and backgrounds
✅ **Experimental Color Psychology** - Colors that create specific moods and emotions
✅ **Creative Gradient Systems** - Complex, multi-stop gradients for artistic effect
✅ **Dynamic Color Animations** - Colors that change based on interaction or context
✅ **Artistic Color Blending** - Creative use of color mixing and transparency

#### Quality Standards
- **Design System Consistency**: All colors must use semantic tokens
- **Accessibility Compliance**: Maintain proper contrast ratios
- **Performance Optimization**: Use CSS custom properties for efficiency
- **Creative Expression**: Encourage artistic color experimentation
- **Professional Quality**: Maintain visual coherence and brand consistency

### Implementation Guidance
- **Start with Semantics**: Always use semantic tokens as the foundation
- **Experiment Creatively**: Use approved creative approaches for artistic expression
- **Maintain Accessibility**: Ensure all color combinations meet contrast requirements
- **Test Across Devices**: Verify color treatments work on all screen types
- **Document Creative Choices**: Explain artistic color decisions in code comments

## The 2025 Creative Truth
**Cutting-edge color design emerges from:**
- Semantic token foundation with creative experimentation
- Artistic color combinations and psychological effects
- Dynamic gradient systems and creative overlays
- Professional quality with innovative color approaches
- Accessibility compliance with artistic expression

**NOT from:**
- Hardcoded color values
- Generic color combinations
- Inaccessible color choices
- Template-like color usage
- Conservative color approaches

**Remember**: 2025 is about creative color expression within a professional, accessible framework! 🎨