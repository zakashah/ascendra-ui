---
description: Scaffold a new library component through all 9 mandatory touchpoints
---

You are scaffolding a new component for the Ascendra UI library. Follow every step in order — do not skip any.

**Step 1 — Analyze and propose spec**

Read the user's message and any selected code, TODO, or other context they've provided. From that, derive a proposed spec using your knowledge of the codebase conventions:

- **slug** — kebab-case, derived from the component name (e.g. `status-dot`)
- **name** — PascalCase display name (e.g. `StatusDot`)
- **category directory** — pick the best fit: `common-ui` (visual primitives), `ui` (shadcn-derived interactive), `layout` (page structure), `nav` (navigation), `card` (card containers), `data-table` (data grid pieces), `date` (date/time controls), `tabs` (tab variants), `side-bar` (sidebar), `forms` (form helpers), `util` (utility display), `stepper` (progress), `reports` (report display), `header` (header variants)
- **nav category** — pick the best fit: `Feedback & Status` (badges, dots, alerts, progress), `Forms & Inputs` (interactive controls), `Date & Time` (date/time controls), `Navigation` (nav links/bars), `Overlays` (dialogs, sheets, dropdowns, tooltips), `Charts` (chart primitives), `Tables & Data` (tables, empty state), `Layout` (page-level layout, cards), `Tabs`, `Sidebar`, `Utilities` (toggles, avatars, pagination)
- **variants** — infer from the description or defaults for the component type; if none are obvious, propose a sensible starting set
- **sub-components** — infer from the description (e.g. a Card likely needs `CardHeader`, `CardContent`); default to none if not clear

Present the full proposed spec in a single confirmation block, for example:

```
Proposed spec:
  slug:           status-dot
  name:           StatusDot
  category:       common-ui
  nav category:   Feedback & Status
  variants:       default, success, warning, error
  sub-components: StatusDotLabel
```

Ask: "Does this look right? Confirm or correct anything — then I'll proceed."

Do not proceed to Step 2 until the user confirms.

**Step 2 — Create the component file**

Create `ascendra-ui/components/{category}/{slug}.tsx`:
- `cva()` + `VariantProps` from `class-variance-authority`
- `cn` from `@/ascendra-ui/shadcn`
- `data-slot="{slug}"` on the root element of every component
- Spread `...props` and accept `className` on every component and sub-component
- No comments explaining what the code does

**Step 3 — Add barrel export**

Add to `ascendra-ui/index.ts` in alphabetical order within the appropriate category block:
`export * from './components/{category}/{slug}';`

**Step 4 — Add registry entry in `lib/registry.ts`**

Include: `slug`, `name`, description specific enough to answer "when to use this vs alternatives", `importPath: '@/ascendra-ui'`, `importNames` listing every named export, `props` with type/default/description for every prop. Sub-component props use format `"propName (SubComponentName)"`.

**Step 5 — Add nav-config entry in `lib/nav-config.ts`**

`{ name: '{Display Name}', slug: '{nav-category-slug}/{slug}' }` in the correct category.

**Step 6 — Add sidebar item in `app/showcase/layout.tsx`**

Inside the matching `<SideBarMenu>` block:
`<SideBarMenuItem path="/showcase/{nav-category-slug}/{slug}">{Display Name}</SideBarMenuItem>`

**Step 7 — Register in `lib/doc-components.ts`**

Import `{ComponentName}DocContent` from `@/components/previews/{slug}-preview` and add `'{slug}': {ComponentName}DocContent` to the map.

**Step 8 — Create preview file `components/previews/{slug}-preview.tsx`**

- Export name: `{ComponentName}DocContent`
- Hero: most compelling real-world use case
- Examples section: all variants
- 2–4 contextual real-world scenarios
- `<PropsTable meta={registry['{slug}']} />` as the last element
- `code={...}` strings must exactly match the rendered JSX

**Step 9 — Regenerate docs**

Run `npm run docs:generate`.

Confirm all 9 steps are complete before reporting done.
