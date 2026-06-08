---
description: Scaffold a Sheet side-panel with detail view or form content
---

Read `docs/showcase-reference.md` → Template 6 (Sheet Pattern) and Sheets section before generating.

Ask:
1. Sheet purpose (e.g. "Employee Details", "Invoice Preview", "Account Settings")
2. Content: read-only detail view or editable form?
3. Fields or data to show/collect
4. Side: right (default) or left?
5. Trigger: button label and variant

Generate:
- `Sheet` + `SheetTrigger` + `SheetContent side="{side}"` + `SheetHeader` + `SheetTitle` + `SheetDescription`
- Detail view: labeled field rows using semantic HTML
- Form view: `react-hook-form` + `zod` fields
- `SheetFooter` with appropriate action buttons
- `"use client"` directive and all imports from `@/ascendra-ui`
