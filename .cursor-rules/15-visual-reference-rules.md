# 15 - Visual Reference Rules - Section Coding System

## Easy Variant Mixing & Section Identification

### 15.1 SECTION CODING SYSTEM
Every section must have a clear identification code:
```html
<!-- Section Code: HERO-A1 -->
<section class="hero-section" data-section-code="HERO-A1">
  <h1>Hero Variant A1 Content</h1>
</section>

<!-- Section Code: PAS-C -->
<section class="pas-section" data-section-code="PAS-C">
  <h2>Problem-Agitation-Solution from Variant C</h2>
</section>
```

### 15.2 ENHANCED SECTION CODE REFERENCE SYSTEM

#### Hero Variations by Type:
- **HERO-A1** - Background image + overlay text
- **HERO-A2** - Video background + floating content
- **HERO-A3** - Gradient background + bold typography
- **HERO-A4** - Color block background + striking visuals
- **HERO-B1** - Image left, content right split
- **HERO-B2** - Content left, image right split
- **HERO-B3** - Stacked mobile, side-by-side desktop
- **HERO-B4** - Asymmetrical split layout
- **HERO-C1** - Central content card + background elements
- **HERO-C2** - Multiple floating image cards + text
- **HERO-C3** - Grid of 3-4 images + headline
- **HERO-C4** - Single accent image + white space
- **HERO-D1** - Pure typography + minimal accent
- **HERO-D2** - Small hero image + maximum white space
- **HERO-D3** - Icon/logo focus + clean headline
- **HERO-D4** - Subtle pattern + text emphasis

#### Core Component Variations:
- **PAS-A** - Data/Stat Driven
- **PAS-B** - Story/Testimonial Driven
- **PAS-C** - Comparison Driven
- **PAS-D** - Direct & Bold
- **PROC-A** - Numbered List/Timeline
- **PROC-B** - Grid Layout
- **PROC-C** - Circular/Infographic
- **PROC-D** - Interactive Tabs
- **ABOUT-A** - Founder/Story Focus
- **ABOUT-B** - Team Grid
- **ABOUT-C** - Mission & Values
- **ABOUT-D** - Split Layout
- **FEAT-A** - Icon Grid
- **FEAT-B** - Alternating Image/Text
- **FEAT-C** - Detailed Cards
- **FEAT-D** - Tabbed Showcase

### 15.3 ENHANCED MIX-AND-MATCH COMMANDS
```bash
# Example variant mixing with specific hero types:
@workflows/section-mixer.md HERO-C3 PAS-A FEAT-B ABOUT-D

# Generate variants with diverse heroes:
@workflows/create-variants.md --hero-variety A1,B2,C3,D1,B4
```

### 15.4 CLIENT VARIANT MIXING PROTOCOL
1. **Step 1**: Identify Desired Sections using the enhanced section codes
2. **Step 2**: Use Section Codes to assemble the desired page structure
3. **Step 3**: Generate Custom Variant using the @workflows/section-mixer.md command
4. **Step 4**: Review and Refine the generated combination

### 15.5 VISUAL SECTION REFERENCE TABLE
| Section | Variant Approach |
|---------|------------------|
| Hero | HERO-A, HERO-B, HERO-C, HERO-D |
| PAS | PAS-A, PAS-B, PAS-C, PAS-D |
| Process | PROC-A, PROC-B, PROC-C, PROC-D |
| About Us | ABOUT-A, ABOUT-B, ABOUT-C, ABOUT-D |
| Features | FEAT-A, FEAT-B, FEAT-C, FEAT-D |
| Trust | TRUST-1, TRUST-2, TRUST-3, TRUST-4, TRUST-5 |
| CTA | CTA-1, CTA-2, CTA-3, CTA-4, CTA-5 |