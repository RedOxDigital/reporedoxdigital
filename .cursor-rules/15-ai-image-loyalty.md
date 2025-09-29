# 15 - AI Image Loyalty

**TAGS**: `#ai` `#images` `#fidelity` `#constraints`

## AI IMAGE FIDELITY MANDATE

**NON-NEGOTIABLE**: AI-generated images must be implemented with minimal transformation and maximum fidelity to the original generated content.

**RELATED RULES**:
- **[Rule 03](03-wcag-compliance.md)** - WCAG Compliance
- **[Rule 01](01-performance-accessibility.md)** - Performance & Accessibility
- **[Rule 06](06-image-integration.md)** - Image Integration (Updated)
- **[Rule 07](07-modern-cards.md)** - Modern Cards (Updated)
- **[Rule 08](08-creative-breakthrough.md)** - Creative Breakthrough (Updated)

## CRITICAL CONSTRAINTS

### 🎯 **Image Fidelity Requirements**
- **Preserve Original Composition**: Use images exactly as generated
- **Maintain Focal Points**: Keep important elements visible and unobscured
- **Respect Aspect Ratios**: Don't crop or resize in ways that alter intent
- **Honor Color Schemes**: Don't apply heavy filters or color corrections
- **Protect Visual Balance**: Don't add elements that disrupt original harmony

### 🚫 **Banned AI Divergence Behaviors**
❌ **Creative Cropping** - No "artistic" cropping of AI images
❌ **Heavy Overlays** - No overlays that obscure >30% of image content
❌ **Color Manipulation** - No heavy filters, tints, or color corrections
❌ **Shape Transformations** - No clip-paths, masks, or shape alterations
❌ **Layout Impositions** - No forced layouts that ignore image composition
❌ **Artistic Interpretations** - No subjective "improvements" to generated images

### ✅ **Approved AI Image Treatments**
✅ **Contrast Overlays** - Only for text readability (WCAG compliance)
✅ **Performance Optimization** - Compression, lazy loading, format conversion
✅ **Responsive Sizing** - Proportional scaling for different screen sizes
✅ **Loading States** - Skeleton screens while image loads
✅ **Error States** - Fallback content if image fails to load

## IMPLEMENTATION PROTOCOL

### **Step 1: Image Analysis**
Before implementing any AI-generated image:
- [ ] Identify key focal points and composition elements
- [ ] Determine optimal text placement areas
- [ ] Assess contrast areas for overlay requirements
- [ ] Plan responsive behavior without altering composition

### **Step 2: Minimal Transformation**
When implementing:
- [ ] Use image at original aspect ratio when possible
- [ ] Apply only essential overlays for text contrast
- [ ] Maintain original color balance and mood
- [ ] Preserve intended visual hierarchy

### **Step 3: Content Integration**
For text and interactive elements:
- [ ] Place content in areas that complement, not compete with, image
- [ ] Use overlays only where text would be unreadable
- [ ] Ensure interactive elements don't obscure important image content
- [ ] Test that all functionality works without altering image

## QUALITY GATES

### **Pre-Implementation Checklist**
- [ ] Image composition analysis completed
- [ ] Text placement strategy defined
- [ ] Overlay necessity confirmed
- [ ] Responsive behavior planned
- [ ] Performance optimization identified

### **Post-Implementation Validation**
- [ ] Original image intent preserved
- [ ] No important elements obscured
- [ ] Text remains readable on all devices
- [ ] Interactive states work properly
- [ ] Performance meets standards

## SUCCESS CRITERIA

**AI Image Implementation is Successful When:**
- Generated image looks exactly as intended by AI
- All important visual elements remain visible
- Text is readable without heavy-handed overlays
- User can appreciate the full AI-generated composition
- Technical requirements met without compromising visual fidelity

**Remember**: The AI already created the perfect image - your job is to present it faithfully, not improve upon it! 🎨🤖

## SCREENSHOT-TO-COMPONENT REPLICATION MANDATE

**Authoritative Spec**: Any provided screenshot is the authoritative specification for a website component and MUST be replicated exactly.

### Requirements
- **High-Fidelity Match**: Replicate layout, spacing, typography, color, and structure.
- **Behavioral Parity**: Implement hover/focus/active states; infer sensible defaults if not visible.
- **Responsive Intent**: Preserve the screenshot’s responsive intent (mobile/desktop variants).
- **No Reinterpretation**: Do not redesign, simplify, or “improve” the component.
- **Tokens Only**: Use semantic tokens (Rule 10); do not hardcode colors.
- **Contrast Safety**: Only add minimal overlays strictly for WCAG contrast.

### Deliverables
- A reusable, size-compliant component (Rule 11) matching the screenshot.
- Accessibility and performance verified (Rules 01, 03).
