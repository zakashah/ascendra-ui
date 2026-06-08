# Changelog

All notable changes to Ascendra UI are documented here.

Format: `## [version] — description`. Breaking changes are marked **Breaking**.

---

## How to upgrade a consumer project

Run from inside your consumer project directory:

```bash
npm run upgrade
```

Interactive — lists available versions, shows what changed, then upgrades. Or target a version directly:

```bash
npm run upgrade -- --version 1.2.0
```

**What happens:**
1. Clones the target release tag from the source repo to a temp directory
2. Replaces `ascendra-ui/` with the new component library
3. Updates managed app shell files (`app/layout.tsx`, `app/globals.css`, `app/(app)/layout.tsx`)
4. Updates `docs/` and `CHANGELOG.md`
5. Self-updates `scripts/upgrade.js`
6. Diffs dependency snapshots in `ascendra.json` — runs `npm install` for new/bumped packages, warns about removed ones
7. Updates `ascendra.json` (version, commit, deps)
8. Commits: `chore: upgrade ascendra-ui vX → vY`

> Your own files (`components/`, `hooks/`, `lib/`, your custom pages) are never touched.

> Review **Breaking** entries below before upgrading across major versions.

---

## [1.0.7] — Rename repository from ascendra-ui-showcase to ascendra-ui

### Changed
- Repository renamed from `ascendra-ui-showcase` to `ascendra-ui` on GitHub and locally.
- `package.json` and `package-lock.json` `name` field updated to `ascendra-ui`.
- `scripts/release.js` — name guard updated to match new package name.
- `create-project.js` — `--local` name guard, default GitHub clone URL, and log messages updated to `ascendra-ui`.
- `README.md` and `CHANGELOG.md` updated to reflect the new repository name throughout.

---

## [1.0.6] — Add ChartLegend, ChartTargetLegend, and report component showcases

### Added
- `ChartLegend`, `ChartLegendGroup` — colored swatch legend item and group wrapper for identifying chart series, segments, and categories. Supports 8 chart color tokens (`chart-1` through `chart-8`), round or square swatch shapes, and xs–lg sizes. Use `ChartLegendGroup` to wrap multiple items with left/center/right alignment.
- `ChartTargetLegend`, `ChartTargetLegendGroup` — thin horizontal bar (2px tall) legend item for identifying target or goal reference lines on a chart. Shares the same 8 color tokens as `ChartLegend`; bar width is md (16px) or lg (24px).
- Showcase preview pages at `/showcase/charts/chart-legend` and `/showcase/charts/chart-target-legend` with all variant examples and real-world dashboard legend patterns.
- Showcase preview pages for the report structural components at `/showcase/report-ui/report-header`, `/showcase/report-ui/report-document`, and `/showcase/report-ui/report-content` — documenting the 20+ composable report primitives (`ReportHeaderContent`, `ReportSectionHeader`, `ReportPdfExportButton`, etc.) already shipped in v1.0.0.

### Changed
- Dashboard pages (HR People, Marketing, Real Estate, Trading Portfolio) and report pages (ESG Sustainability, Annual Financial Statement, Executive Business Review, Marketing Campaign Analysis, Project Status, Sales Pipeline, Supply Chain Ops) now use `ChartLegend` and `ChartTargetLegend` in place of bespoke inline legend markup.

---

## [1.0.5] — Add ColorTile component

### Added
- `ColorTile`, `ColorTileTitle`, `ColorTileSubTitle` — new composable classification tile component with 16 solid-color variants. Accepts any children for maximum flexibility (no hard-coded `label`/`sublabel` props). Useful for SDG grids, priority indicators, phase strips, and risk severity tiles.
- Showcase preview page at `/showcase/feedback/color-tile` with six example sections: all variants, title-only, SDG alignment grid, project phase indicators, risk classification, ESG pillar tags, and custom children.

---

## [1.0.4] — Ship favicon to consumer projects

### Fixed
- `ascendra-ui/template/app/favicon.ico` — favicon was missing from the template; new projects created with `create-project.js` and existing projects upgraded with `npm run upgrade` now receive the favicon correctly.

---

## [1.0.3] — Improved upgrade prompt

### Changed
- `scripts/upgrade.js` — interactive upgrade now only shows versions newer than the current one; exits immediately with "already on latest" when no updates are available. The prompt pre-fills the latest version so pressing Enter accepts it without typing. Passing an older version via `--version` now errors instead of offering a downgrade.

---

## [1.0.2] — Fix ascendra-ui/ not committed in consumer projects

### Fixed
- `create-project.js` — removed `ascendra-ui/` from the generated consumer `.gitignore`. The folder is now committed to the consumer's git repo, which is required for CI/CD and production deployments. It remains hidden in the VSCode file explorer via `.vscode/settings.json` to prevent accidental edits, but is fully tracked in source control.
- `README.md` — corrected documentation to clarify that `ascendra-ui/` is committed to git (not gitignored), and updated the consumer project structure diagram accordingly.
- `create-project.js` — default source URL changed to SSH (`git@github.com:zakashah/ascendra-ui.git`) to avoid HTTPS credential prompts on private repos.

---

## [1.0.1] — Simplified project creation

### Changed
- `create-project.js` — source repo URL (`https://github.com/zakashah/ascendra-ui`) is now hardcoded as the default; consumers run `node create-project.js my-app` with no URL argument required. A custom URL can still be passed as a positional argument to override.
- `README.md` — updated create-project command examples and added `npm run project:init` to the developer local testing section.

---

## [1.0.0] — Initial release

### Component Library (`ascendra-ui/`)

**Layout**
- `PageLayout` — full-page wrapper with sidebar + content area
- `SideBar`, `SideBarMain`, `SideBarMenu`, `SideBarMenuHeader`, `SideBarMenuContent`, `SideBarMenuItem`, `SideBarOverlay`, `SideBarToggle` — collapsible sidebar with grouped navigation
- `Header`, `HeaderLinks`, `HeaderLink`, `HeaderActions` — top bar with navigation links and action slots
- `Nav`, `NavLink` — primary navigation with active-state tracking
- `ContentArea`, `MainContainer` — scrollable content regions
- `MainSection`, `PageHeader` — page-level layout primitives
- `MainContent`, `MainSidebar` — two-column page layout

**Forms**
- `Form`, `FormField`, `FormLabel`, `FormMessage`, `FormDescription` — react-hook-form integration with Zod validation
- `Input`, `Textarea`, `Select`, `Checkbox`, `Switch`, `RadioGroup`, `RadioGroupItem` — standard form controls
- `DatePicker`, `DateRangePicker` — calendar-backed date inputs
- `Combobox` — searchable dropdown with async support
- `FileUpload` — drag-and-drop file input with preview
- `PhoneInput` — international phone number field
- `RichTextEditor` — Tiptap-based rich text input (bold, italic, links, lists)
- `MultiSelect` — tag-style multi-value selector
- `ColorPicker` — HSL color selection with preview
- `Slider` — range slider
- `UnsavedChangesBar` — floating save/discard bar for form pages

**Data Display**
- `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableHead`, `TableCell`, `TableFooter` — semantic HTML table primitives
- `DataTable` — full-featured table with sorting, filtering, pagination, bulk actions, and column visibility
- `Badge`, `StatusBadge` — inline labeling with semantic color variants
- `Avatar`, `NameAvatar` — image and initials avatars
- `Stat`, `StatGroup` — KPI metric display cards
- `Timeline`, `TimelineItem` — vertical event history
- `Progress` — determinate progress bar
- `Skeleton` — loading placeholder

**Feedback & Overlay**
- `Dialog`, `DialogContent`, `DialogHeader`, `DialogTitle`, `DialogDescription`, `DialogFooter` — modal dialog
- `Sheet`, `SheetContent`, `SheetHeader`, `SheetTitle`, `SheetDescription`, `SheetFooter` — side-panel sheet
- `Drawer`, `DrawerContent`, `DrawerHeader`, `DrawerTitle`, `DrawerFooter` — bottom drawer
- `Alert`, `AlertTitle`, `AlertDescription` — inline alert banners
- `Toaster` — toast notification system (Sonner)
- `Tooltip`, `TooltipContent`, `TooltipProvider` — hover tooltips

**Navigation & Actions**
- `Button` — primary action button with size and variant props
- `IconButton` — icon-only button
- `DropdownMenu`, `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuItem`, `DropdownMenuSeparator` — contextual action menu
- `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` — tabbed content panels
- `Breadcrumb`, `BreadcrumbItem`, `BreadcrumbSeparator` — hierarchical navigation trail
- `Pagination` — page navigation for data lists
- `CommandMenu` — keyboard-driven command palette (⌘K)

**Dashboard & Charts**
- `Card`, `CardHeader`, `CardContent`, `CardFooter`, `CardPanel` — dashboard card containers
- `ChartContainer`, `ChartTooltip`, `ChartTooltipContent`, `ChartLegend` — Recharts wrapper with unified theming
- `AreaChart`, `BarChart`, `LineChart`, `PieChart`, `DonutChart`, `RadarChart`, `ScatterChart` — chart variants

**Utility**
- `ThemeToggle` — light/dark mode switcher
- `ThemeProvider` — next-themes integration
- `QueryProvider` — TanStack Query client wrapper
- `ScrollToTop` — auto-scroll on route change
- `Separator` — horizontal/vertical divider
- `Popover`, `PopoverContent` — anchored floating panel
- `HoverCard`, `HoverCardContent` — hover-triggered info card
- `Collapsible`, `CollapsibleTrigger`, `CollapsibleContent` — expand/collapse region
- `ScrollArea` — custom scrollbar container
- `EmptyState` — zero-results placeholder with icon and CTA

### Design System
- Tailwind v4 with CSS custom property tokens for all colors, radii, and spacing
- Semantic color system: `primary`, `secondary`, `destructive`, `muted`, `accent`, `border`, `ring`
- Full light/dark mode with `next-themes`
- Font: Geist (sans + mono)
- Print stylesheet included in `globals.css`

### Consumer Project Lifecycle
- `create-project.js` — standalone script to bootstrap a new consumer project from any tagged release; clones to tmp, sets up the project directory, runs `npm install`, and initializes git — consumer never sees showcase internals
- `ascendra-ui/template/scripts/upgrade.js` — shipped to consumer projects; upgrades component library, template app files, docs, and CHANGELOG from the source repo; diffs `ascendra.json` dependency snapshots and installs new/updated packages automatically; self-updating
- `ascendra-ui/template/scripts/changelog.js` — shipped to consumer projects; view latest release notes or upcoming changes
- `ascendra-ui/template/package.json` — consumer package template (scripts only: dev, build, start, lint, upgrade, changelog)
- `ascendra-ui/template/app/` — consumer app shell: root layout, `(app)/layout.tsx` with sidebar + header + theme toggle, getting-started page, sandbox page

### Showcase & Documentation
- 94 showcase pages covering all components, forms, dialogs, sheets, drawers, dashboards, and reports
- Component previews with live rendering, import chips, and props tables
- Sidebar search across all pages
- `docs/ui-reference.md` — 1900+ line component API reference, auto-generated; embeds version and commit markers
- `docs/showcase-reference.md` — design guide and AI developer reference, auto-generated
- `scripts/generate-ui-reference.ts` — generates `docs/ui-reference.md` from registry and config files
- `scripts/generate-showcase-reference.ts` — generates `docs/showcase-reference.md`
- `scripts/release.js` — internal release tool: version bump, CHANGELOG validation, doc generation + marker validation, git commit and tag; embeds dependency snapshot into `ascendra.json`
- `ascendra.json` — version lock file; stores version, commit hash, and managed dependency list for upgrade diffing
