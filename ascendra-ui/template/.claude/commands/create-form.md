---
description: Scaffold a complete form with zod schema, react-hook-form, and all field components
---

Read `docs/showcase-reference.md` → Forms section and `docs/ui-reference.md` form component entries before generating.

Ask:
1. Form name/purpose (e.g. "Create Invoice", "Employee Onboarding")
2. Fields — for each: name, type (text | email | phone | number | textarea | rich-text | select | multi-select | checkbox | switch | radio | date | date-range | file | color | slider), label, required?
3. UnsavedChangesBar needed? (yes for settings pages; no for dialogs/sheets)
4. API endpoint to submit to (or "pattern only" to skip the submit handler)

Generate:
- Zod schema with appropriate validators for each field type
- `useForm` with `zodResolver` from `@hookform/resolvers/zod`
- `<Form>` wrapping `<FormField>` components — use the correct ascendra-ui form primitive for every field; never raw `<input>` or `<textarea>`
- Submit handler calling `apiClient` from `@/ascendra-ui/lib/api/client.ts` if an endpoint was provided
- `UnsavedChangesBar` if requested
- `"use client"` directive and all imports from `@/ascendra-ui`
