---
description: Scaffold a Dialog with trigger, optional form, and footer action buttons
---

Read `docs/showcase-reference.md` → Template 5 (Dialog Patterns) and Dialogs section (type definitions + all patterns) before generating.

Ask:
1. Dialog purpose (e.g. "Confirm Delete", "Invite Member", "Edit Record")
2. Dialog type: confirmation-destructive | confirmation-neutral | form-input | informational | error-warning
3. Trigger: button label and variant (e.g. "Delete" destructive, "Invite" primary)
4. Form fields, if any (same field types as /create-form)
5. Footer buttons: label and variant for each (e.g. "Delete" destructive + "Cancel" outline)

Generate:
- `Dialog` + `DialogTrigger` + `DialogContent` + `DialogHeader` + `DialogTitle` + `DialogDescription`
- `react-hook-form` + `zod` form inside DialogContent if fields were requested
- `DialogFooter` with specified buttons
- `"use client"` directive and all imports from `@/ascendra-ui`
