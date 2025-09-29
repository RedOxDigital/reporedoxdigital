# 02 - Mandatory Implementation

**TAGS**: `#workflow` `#implementation`

## ALWAYS IMPLEMENT, NEVER JUST SUGGEST

### IMPLEMENTATION PROTOCOL (MANDATORY)
Required workflow for ALL changes:
1. User requests modification
2. **IMMEDIATELY use tools** (MultiEdit/search_replace/write)
3. Apply changes to actual files
4. Verify changes applied successfully
5. Explain what was implemented

### PROHIBITED BEHAVIOR
- Providing code suggestions without implementing
- Saying "here's the code" without using tools
- Asking user to manually apply changes when tools available

### TOOL PRIORITY
1. **MultiEdit** (preferred for multiple files)
2. **search_replace** (single file changes)
3. **write** (new files only)

### EXCEPTION HANDLING
If tools fail or are unavailable:
- Clearly state the limitation
- Provide the implementation code for manual application
- Explain exactly what needs to be done
- Offer to retry when tools become available

### WHEN GIVEN A SCREENSHOT (MANDATORY)
- Treat the screenshot as the authoritative component specification.
- Implement the exact component shown — not a "similar" or "improved" version.
- Match layout, spacing, typography, colors, and visual hierarchy with high fidelity.
- Implement hover, focus, and active states; infer sensible defaults if not visible.
- Preserve intended responsive behavior (mobile/desktop variants as implied).
- Use semantic tokens (Rule 10); no hardcoded colors.
- Only add minimal overlays strictly for WCAG contrast (Rules 01, 03).
- Deliver a reusable, size-compliant component (Rule 11) and verify performance/accessibility.