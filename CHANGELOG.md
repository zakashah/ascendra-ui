# Changelog

All notable changes to Ascendra UI are documented here.

Format: `## [version or date] — description`. Breaking changes are marked **Breaking**.

---

## [2026-06-05] — StatusDot & BubbleBadge semantic tokens, chart neon palette, new components, structural fixes

### Changed
- `StatusDot`: variants `warning`, `info`, `positive` now map to semantic CSS tokens (`--warning`, `--info`, `--positive`) instead of raw Tailwind colors (`bg-orange-500`, `bg-sky-500`, `bg-emerald-500`). Components now respect theme overrides.
- `BubbleBadge`: same migration — `warning`, `info`, `positive` variants switched to semantic tokens.
- `SimpleBadge`: updated variant styles to align with semantic token system.
- `SimpleAlert`: updated variant styles to align with semantic token system.
- Chart colors (dark mode): neon-boosted palette applied to all 8 chart variables for better contrast on dark backgrounds.
- All 10 dashboard pages: migrated inline page headers to `BackLink` + `PageHeader` + `PageHeaderGroup` components. Consistent layout across all dashboards.

### Added
- `Toast` — Sonner-based toast notification system with showcase page.
- `ascendra-ui/index.ts` — export barrel; all public components now importable from `@/ascendra-ui`.
- Multiple missing components added in iteration 2 (see `docs/components-reference.md` for full list).

### Fixed
- `globals.css`: removed `bisque` named color constant; replaced with explicit `oklch()` value.

---

## [2026-05-31] — Project review baseline

### Documented
- Full codebase audit completed. See `docs/project-review.md` for findings.
- Key structural issues identified: export barrel missing, raw Tailwind colors in status components, dashboard pages bypassing layout system.

---

## Upcoming (planned)

### UI Gaps

### Documentation
- Typography scale tokens — `globals.css` has partial Clerk-sourced type vars (`--text-2xs--line-height` etc.) but no semantic scale tokens (`--text-label`, `--text-body`, `--text-heading`). Design Tokens page only shows font families, not the full scale.
- Shadcn boundary document — no written policy on which shadcn components are replaced by Ascendra equivalents, which are used as-is, and how to handle upstream shadcn updates.

---

## How to update this file

When you change a public API (prop rename, variant rename, removed export, visual behaviour change):

1. Add an entry under `## [date] — short description`.
2. Mark prop/variant renames as **Breaking** if consumer code will break.
3. Note the component name and exactly what changed (old → new).
4. Commit this file in the same commit as the change.
