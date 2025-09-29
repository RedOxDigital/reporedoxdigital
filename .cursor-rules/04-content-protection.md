# 04 - Content Protection

**TAGS**: `#workflow` `#content` `#protection`

## CRITICAL: Never Overwrite Client-Approved Content

### 14.1 COPY PROTECTION PRIORITY
- **CRITICAL**: Copy and text content is the MOST valuable client asset
- **Requirement**: Never overwrite any text, copy, headlines, or content without explicit permission
- **Implementation**: Check for copy protection markers before generating ANY text
- **Action**: If copy protection found, STOP and ask user for permission

### 14.2 COPY PROTECTION MARKERS
Before generating any text, check for these markers:
```html
<!-- COPY_PROTECTION: true -->
<!-- CLIENT_EDITED_COPY: true -->
<!-- TEXT_PROTECTED: true -->
<!-- DO_NOT_OVERWRITE_TEXT: true -->
<!-- CLIENT_APPROVED_COPY: true -->
<!-- MANUAL_COPY_EDITS: hero, testimonials, pricing -->
```

### 14.3 TEXT MODIFICATION DETECTION
- **Requirement**: If ANY text content was modified in last 24 hours, assume client edits
- **Implementation**: Check for text changes, not just file modifications
- **Action**: Warn user and require explicit confirmation before changing any text

### 14.4 COPY SECTION PROTECTION
Protected copy sections include:
- Headlines and subheadlines
- Body copy and descriptions
- Testimonials and quotes
- Pricing information
- Call-to-action text
- Meta descriptions and titles
- Button text and labels
- FAQ content
- Product descriptions
- Company information

### 14.5 SAFE COPY GENERATION PROTOCOL
Only generate copy for:
- [ ] New files (no existing content)
- [ ] Files without copy protection markers
- [ ] Unprotected sections only
- [ ] After explicit user permission

### 14.6 COPY OVERRIDE REQUIREMENTS
To override copy protection, user must:
- Explicitly state "I want to overwrite the protected copy"
- Specify which sections can be overwritten
- Confirm they understand existing copy will be lost
- Provide backup confirmation

### 14.7 COPY BACKUP PROTOCOL
Before ANY copy changes:
- [ ] Create timestamped backup of original text
- [ ] Document what copy existed before changes
- [ ] Note which sections were protected
- [ ] Save client's original language and tone

### 14.8 COPY QUALITY ASSURANCE
Before generating new copy, verify:
- [ ] No existing copy protection markers
- [ ] File doesn't contain client-approved text
- [ ] User has explicitly requested copy generation
- [ ] Backup of existing copy has been created
- [ ] Target sections are not marked as protected

### 14.9 COPY RECOVERY PROTOCOL
If copy needs to be restored:
```bash
# Restore original copy from backup
cp backup/timestamp_original_copy.html target_file.html

# Remove copy protection markers if safe
sed -i '/COPY_PROTECTION:/d' target_file.html
```

### 14.10 COPY PROTECTION CHECKLIST
Before generating ANY text content:
- [ ] File Check: No copy protection markers present
- [ ] Content Check: No client-edited text exists
- [ ] Permission Check: User has explicitly requested copy generation
- [ ] Backup Check: Original copy has been backed up
- [ ] Section Check: Target sections are not protected
- [ ] Confirmation Check: User understands existing copy will be replaced

### 14.11 COPY EMERGENCY OVERRIDE
Only if user explicitly requests:
```
# User must type exactly:
"I CONFIRM OVERWRITE PROTECTED COPY"

# Then specify sections:
"Overwrite sections: [list specific sections]"

#Then confirm understanding:
"I understand existing copy will be lost"
```

### 14.12 COPY PROTECTION EXAMPLES

#### NEVER DO THIS:
- Generate new headlines without checking for existing ones
- Replace testimonials without backup
- Overwrite pricing information
- Change CTA text without permission

#### ALWAYS DO THIS:
- Check for copy protection markers first
- Create backup of existing text
- Only generate for unprotected sections
- Ask permission before overwriting any text

**CRITICAL REMINDER**: Copy and text content represents hours of client work, brand voice development, and conversion optimization. The value of manual copy edits FAR exceeds the efficiency of automated generation. Always protect client copy unless explicitly instructed otherwise.