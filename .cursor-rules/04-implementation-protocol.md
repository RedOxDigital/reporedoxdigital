# 04 - Implementation Protocol - Mandatory Workflow

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