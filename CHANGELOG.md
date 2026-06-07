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
