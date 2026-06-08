---
description: Scaffold a new library component through all 9 mandatory touchpoints
---

You are scaffolding a new component for the Ascendra UI library. Follow every step in order — do not skip any.

**Step 1 — Gather requirements**

Ask the user:
1. Component slug (kebab-case, e.g. `status-dot`)
2. Component display name (PascalCase, e.g. `StatusDot`)
3. Category directory: `common-ui`, `ui`, `layout`, `nav`, `card`, `data-table`, `date`, `tabs`, `side-bar`, `forms`, `util`, `stepper`, `reports`, `header`
4. Nav category: `Feedback & Status`, `Forms & Inputs`, `Date & Time`, `Navigation`, `Overlays`, `Charts`, `Tables & Data`, `Layout`, `Tabs`, `Sidebar`, `Utilities`
5. Variants needed (list them)
6. Sub-components needed (e.g. `StatusDotLabel`) — yes/no and names

Do not proceed until you have all answers.

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
