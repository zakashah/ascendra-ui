---
description: Regenerate docs and audit registry/nav/preview consistency
---

**Step 1 — Regenerate**

Run `npm run docs:generate`.

**Step 2 — Audit registry entries in `lib/registry.ts`**

For every entry, check:
- `importNames` lists every named export from the corresponding component file
- `description` is specific (not generic like "A component that does X")
- Every prop entry has a `description`

**Step 3 — Check nav/preview alignment**

For every slug in `lib/nav-config.ts`, confirm:
- A matching key exists in `lib/doc-components.ts`
- A matching preview file exists in `components/previews/{slug}-preview.tsx`

**Step 4 — Report**

List every gap found with the file and field to fix. If none, confirm docs are clean.
