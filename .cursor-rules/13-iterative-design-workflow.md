# 13 - Iterative Design Workflow - Post-Build Refinement

This file governs all UI changes after the initial build

## Generating Design Variations
This workflow is used to explore different UI styles without altering the foundational code.

### Targeted Persona Variations
- **Goal**: To generate a UI tailored to a specific user persona (e.g., 'chef', 'student')
- **Process**: Reference the base index.html file and apply the relevant persona rule file (e.g., @<path-to-persona-rule.md>)

### Rapid Style Iterations
- **Goal**: To quickly explore multiple random style variations while preserving the HTML structure
- **Process**: Reference an existing HTML file (e.g., index.html) and apply the "infinite design rule". This will generate multiple options in a variations/ folder.

## Precise UI Edits with Stage Wise
For granular and safe UI adjustments, the Stage Wise extension MUST be used.

### Setup
Initialize the tool using the command palette ('Command + Shift + P') and selecting the 'Stage Wise' option.

### Workflow
- **DO NOT** use vague instructions like "change the button"
- **DO** select the specific element(s) directly in the Stage Wise UI to send their exact location and context to Cursor
- Provide a clear, direct instruction for the change (e.g., "add a consistent hover animation to this button using the existing Tailwind color tokens")