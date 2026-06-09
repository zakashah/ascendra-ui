---
description: Scaffold a custom component following CVA conventions and library patterns
---

Ask:
1. Component name in PascalCase (e.g. `StatusBadge`, `PriorityIndicator`)
2. Root HTML element (div | span | button | li | a)
3. Variant axes and values (e.g. `status: active | inactive | pending`)
4. Sub-components? List their names (e.g. `StatusBadgeLabel`, `StatusBadgeIcon`)
5. File path to create (e.g. `components/status-badge.tsx`)

Generate:
- `cva()` from `class-variance-authority` with all variants and `defaultVariants`
- `cn()` imported from `@/ascendra-ui/shadcn`
- `data-slot="{component-slug}"` on every element's root
- `...props` spread and `className` accepted on every component and sub-component
- `React.ComponentProps<'{element}'>` & `VariantProps<typeof {name}Variants>` as the props type
- Sub-components in the same file if requested
- Export every component

If this pattern seems reusable beyond the current page, add above the component:
`{/* TODO: ascendra-ui candidate — {ComponentName} — {why it's reusable} */}`
