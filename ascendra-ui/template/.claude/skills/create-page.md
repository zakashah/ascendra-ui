---
description: Create a new app route with the correct layout structure
---

Read `docs/showcase-reference.md` sections "Page Content Structure", "Layout Variants", and Templates 1–8 before generating.

Ask:
1. Route path (e.g. `invoices`, `clients/[id]`, `settings/billing`)
2. Page title
3. Server or client component? (client only when the page itself uses hooks, event handlers, or browser APIs — not just its children)
4. Layout: standard (full-width), settings/form (narrow centered), two-column (main + sidebar), tabs, or dashboard?

Generate `app/(app)/{route}/page.tsx` using `MainSection` + `PageHeader` from `@/ascendra-ui`. Apply the correct layout template from showcase-reference.md. Add `"use client"` only if client was requested.
