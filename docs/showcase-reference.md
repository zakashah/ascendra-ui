<!-- ascendra-ui-version: 1.0.0 -->
<!-- ascendra-ui-commit: 629be3819ca4960e78aefbd6612d0272f9698511 -->
# Ascendra UI — Showcase Reference

> Auto-generated on 2026-06-07 · ascendra-ui v1.0.0
> Run `npm run docs:generate` after any config or showcase change.
> For the component API reference (props, imports, types) see `docs/ui-reference.md`.

---

## Purpose of This Document

This document is the **design guide and AI training reference** for Ascendra UI.
It answers questions like:

- _What visual patterns does this library use?_
- _Which component should I reach for in a given situation?_
- _How are pages and layouts composed?_
- _What real-world scenarios does the showcase demonstrate?_
- _How should I instruct an AI model to build a new feature using this library?_

For the technical API (props, import paths, TypeScript types) see `docs/ui-reference.md`.

---

## Library at a Glance

| Stat | Count |
|---|---|
| Primitive components | 51 |
| Composite form patterns | 10 |
| Dialog patterns | 12 |
| Sheet patterns | 10 |
| Drawer patterns | 8 |
| Dashboard demos | 10 |
| Report demos | 10 |
| Showcase pages total | 94 |

---

## Design Philosophy

Ascendra UI is a **premium admin panel component library** built for internal tools, SaaS products, and data-rich applications. It is not a general-purpose UI kit — it is optimized for complex multi-section pages, large forms, data tables, and analytical dashboards.

### Core Principles

**1. Depth over flatness**  
Components use a layered shadow and gloss system rather than flat borders. Buttons have a 4-layer shadow. Inputs show a shadow ring on pointer focus and a keyboard-only outline for accessibility. Cards and panels have subtle elevation.

**2. Semantic color tokens, not raw palette values**  
Never use `text-red-500` directly. Instead use semantic tokens: `text-negative` (error), `text-positive` (success), `text-warning` (warning), `text-info` (informational), `text-muted-foreground` (de-emphasized). The library exposes `--brand`, `--positive`, `--negative`, `--warning`, `--info`, `--dimmed` as CSS custom properties that automatically adapt to dark mode.

**3. Smart focus distinction**  
Pointer-device focus shows a shadow ring (visible but not intrusive). Keyboard focus shows a high-contrast outline ring. This is baked into Input, Button, Checkbox, etc. — do not override focus styles.

**4. Layout through composition, not config**  
Page layout is assembled from discrete components (`PageLayout > Header + Nav + MainContainer > SideBar + ContentArea`) rather than a single mega-config prop. This makes each layer independently replaceable.

**5. Forms always use the Field system**  
Never place a label adjacent to an input with ad-hoc spacing. Always use `Field > FieldLabel + Input` (or your control). This ensures consistent label alignment, error display (`FieldError`), and accessible `htmlFor` wiring.

**6. Cards for settings, not content cards**  
The `Card` component is a settings-style card (header + collapsible panel + items), not a generic content card. Use it for forms, settings pages, and structured data. For generic content containers use `PageContent` / `MainContent`.

**7. Dark mode first**  
Every token has a light and dark variant defined in `globals.css`. Dark mode is enabled via the `dark` class on `<html>` (managed by `ThemeProvider` from `next-themes`). Never hardcode light-only colors.

---

## Layout System

### Application Shell

The outer shell is assembled in `app/(app)/layout.tsx`. The hierarchy is:

```
PageLayout
├── SideBarOverlay        ← mobile overlay backdrop
├── Header                ← top navigation bar
│   ├── HeaderLinks       ← breadcrumb / project name area
│   │   └── HeaderLink    ← individual breadcrumb segment
│   └── HeaderActions     ← right-side: ThemeToggle, NameAvatar, etc.
├── Nav                   ← sticky secondary nav strip (tab-style links)
│   └── NavLink           ← active-underline link
└── MainContainer         ← flex row: sidebar + content
    ├── SideBarToggle     ← hamburger button (mobile)
    ├── SideBar
    │   └── SideBarMain
    │       └── SideBarMenu (basePath="/section")
    │           ├── SideBarMenuHeader (icon={LuIcon})
    │           └── SideBarMenuContent
    │               ├── SideBarMenuItem (path="/section/page")
    │               └── SideBarMenuItemGroup → SideBarMenuItem[]
    └── ContentArea       ← main scrollable content column
```

### Page Content Structure

Inside `ContentArea`, every page follows this wrapper hierarchy:

```
PageHeader                ← sticky top bar with title + action slot
├── PageHeaderGroup       ← title/subtitle group
│   ├── PageTitle
│   └── PageSubtitle
└── PageHeaderAction      ← right slot (buttons, badges)

PageMain                  ← scrollable main region below header
└── PageWrapper           ← horizontal padding + max-width
    └── PageContent       ← vertical spacing between sections
        └── MainContent   ← the content itself (grid, list, etc.)
```

Optional secondary navigation between `PageHeader` and `PageMain`:
```
Nav > NavLink[]           ← tab-style section switcher
```

### Layout Variants

| Variant | When to use | Structure |
|---|---|---|
| **Single column** | Simple forms, settings | `MainContent > Card[]` |
| **Two column** | Form + aside | `PageContent > grid cols-3` where main is `col-span-2` and `AsideContent` is `col-span-1` |
| **Full width table** | Data-heavy pages | `MainContent` without `max-w` constraint, `TableWrapper` fills width |
| **Dashboard grid** | Analytics | `MainContent > grid` with mixed `col-span` values for KPI tiles, charts, tables |

### When to Use AsideContent

`AsideContent` is a sidebar-within-a-page for supplementary info (related records, quick stats, help text). Use it when content logically divides into main + context panel. The `dimmed` prop overlays it when a form is in a loading/saving state.

---

## Component Selection Guide

### Feedback & Status

| Need | Component | Notes |
|---|---|---|
| Label a record status | `SimpleBadge` | semantic variants: default, green, red, amber, blue, violet, orange |
| Label with gradient style | `BubbleBadge` | sizes sm/md/lg; use sparingly, higher visual weight |
| Online / offline indicator | `StatusDot` | tiny halo dot; pairs with `SimpleBadge` in table cells |
| Inline alert message | `SimpleAlert` | use inside forms for guidance; never use toast for form validation |
| Transient notification | `toast()` + `<Toaster />` | mount Toaster in root layout; call `toast.success()`, `toast.error()` etc. |
| Premium feature marker | `ProBadge` | blue-purple gradient; place next to feature names in settings |
| Loading placeholder | `Skeleton` + presets | use `SkeletonTable`, `SkeletonStat`, `SkeletonCard` for structured loading states |
| Progress indicator | `ProgressBar` | indeterminate for unknown duration; sized/colored variants |
| Multi-step flow | `Stepper` | shows current step with completed/active/pending states |
| Dirty form warning | `UnsavedChangesBar` | fixed-bottom bar; appears when `isDirty` is true |

### Form Inputs

| Need | Component | Notes |
|---|---|---|
| Text input | `Input` | always wrap in `Field` for label + errors |
| Prefix / suffix / button addon | `InputGroup` | e.g. URL prefix, currency suffix, search button |
| Short list select | `Select` | ≤ 20 options; use `SelectTrigger` + `SelectContent` + `SelectItem` |
| Searchable select, multi-select | `Combobox` | built-in search; multi mode shows chips |
| Large dataset lookup | `TableLookup` | tabular popup with async search; single or multi mode |
| Toggle boolean | `Switch` | for settings and preferences |
| Agree / multi-select | `Checkbox` | individual item; use `FieldSet > FieldGroup` for a group |
| Single pick from small set | `RadioGroup` + `RadioGroupItem` | ≤ 6 options; wrap in `FieldSet` |
| Date | `DatePicker` | single date selection |
| Date range | `DateRangePicker` | shows 2-month calendar |
| Rich content | `RichTextEditor` | Tiptap-based; bold, italic, lists, links |
| File | `FileUpload` | dropzone / button / inline variants; managed upload states |
| Color | `ColorPicker` | HSL sliders + hex input + presets grid |

### Always use Field wrappers

```tsx
// Correct
<Field orientation="horizontal">
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <FieldContent>
    <Input id="email" {...register('email')} />
    <FieldError errors={errors.email ? [errors.email] : []} />
  </FieldContent>
</Field>

// Wrong — raw label + input
<label>Email</label>
<input ... />
```

### Navigation

| Need | Component | Notes |
|---|---|---|
| External / internal text link | `Anchor` | variants: primary (brand color), blue, muted |
| Tab-style page links | `NavLink` | active underline driven by pathname |
| Horizontal link strip | `Nav > NavLink[]` | sticky strip; used for sub-section navigation |
| Breadcrumb header | `Header > HeaderLinks > HeaderLink` | use slash separators via `HeaderSlash` |
| App sidebar nav | `SideBarMenu` system | see layout guide above |
| Global search / commands | `CommandPalette` + `useCommandPalette` | ⌘K registered automatically |

### Overlays

| Need | Component | Notes |
|---|---|---|
| Confirm an action | `Dialog` | centered modal; use for short confirmations and form inputs |
| Destroy / irreversible action | `Dialog` with `variant="destructive"` on the confirm button | |
| Detail / preview panel | `Sheet` side="right" | slides in from right; use for record detail, preview |
| Settings panel | `Sheet` side="right" | wider than dialog; use when form has many fields |
| Mobile action menu | `Drawer` | slides up from bottom; use for mobile-first action flows |
| Contextual menu | `DropdownMenu` | right-click or button trigger; supports sub-menus, checkboxes |
| Hover help | `Tooltip` | short label only; for longer help use `FieldDescription` |

**Rule:** Use Dialog for ≤ 4 fields and destructive confirmations. Use Sheet for ≥ 5 fields or complex forms. Use Drawer for mobile-first interactions.

### Data Display

| Need | Component | Notes |
|---|---|---|
| Simple data list | `Table` system | no search/sort/filter; use inside dashboards |
| Full-featured data grid | `DataTable` system | search, filter, sort, column manager, pagination |
| Empty list state | `Empty` | with `EmptyMedia` icon variant and `EmptyContent` CTA |
| Clickable list items | `Item` system | media + title + description + actions slots |
| KPI tile | `Card` with `CardPanel > CardPanelItem` | use in dashboard grids |
| Analytics charts | Recharts via `CardPanel` | Line, Area, Bar, Pie, Radial, etc. |
| Interactive stars | `Rating` | `onChange` makes it interactive; omit for read-only |

### Utilities

| Need | Component | Notes |
|---|---|---|
| Copy to clipboard | `CopyText` | wrap any element; `showTooltip` for confirmation |
| User avatar | `NameAvatar` | deterministic color from name; optional `href` |
| Theme switcher | `ThemeToggle` | places in `HeaderActions` |
| Page navigation | `PaginationButton` | prev/next bordered buttons |
| Table row action | `RowActionButton` | hidden by default; visible on row hover |
| Route scroll reset | `ScrollToTop` | place once in root layout; no props needed |
| Collapsible calendar | `Calendar` | single, multiple, or range mode |
| Tabbed layout | `Tabs > TabList > TabTrigger` | `dirty` prop shows unsaved-changes dot |

---

## Primitive Components by Category

### Feedback & Status

**Components:** Simple Badge · Bubble Badge · Status Dot · Simple Alert · Toast · Pro Badge · Unsaved Changes Bar · Progress & Stepper · Skeleton · Rating

**Showcase pages:**

- [`/showcase/feedback/simple-badge`](/showcase/feedback/simple-badge) — **Simple Badge**: Small inline status badge for labeling content with semantic color variants.
- [`/showcase/feedback/bubble-badge`](/showcase/feedback/bubble-badge) — **Bubble Badge**: Gradient pill badges with inset highlight, available in multiple sizes and colors.
- [`/showcase/feedback/status-dot`](/showcase/feedback/status-dot) — **Status Dot**: Tiny status indicator dot with a halo shadow ring, available in semantic colors.
- [`/showcase/feedback/simple-alert`](/showcase/feedback/simple-alert) — **Simple Alert**: Compact alert notification box with semantic severity variants and an optional icon.
- [`/showcase/feedback/toasts`](/showcase/feedback/toasts) — **Toast**: Lightweight, accessible toast notifications powered by Sonner. Mount <Toaster /> once in the root layout and call toast() from anywhere.
- [`/showcase/feedback/pro-badge`](/showcase/feedback/pro-badge) — **Pro Badge**: Premium feature indicator with a blue-purple gradient treatment.
- [`/showcase/feedback/unsaved-changes-bar`](/showcase/feedback/unsaved-changes-bar) — **Unsaved Changes Bar**: Fixed bottom bar that surfaces when a form has unsaved changes, with save/reset actions and status states.
- [`/showcase/feedback/progress`](/showcase/feedback/progress) — **Progress & Stepper**: ProgressBar wraps Radix Progress with size and color variants plus an indeterminate animation. Stepper is a fully custom horizontal step indicator with four statuses.
- [`/showcase/feedback/skeleton`](/showcase/feedback/skeleton) — **Skeleton**: Animated loading placeholder. Includes preset compositions for text blocks, user rows, stat tiles, cards, and table rows — built on shadcn skeleton.
- [`/showcase/feedback/rating`](/showcase/feedback/rating) — **Rating**: Star rating display and input with half-star precision, multiple sizes, and semantic color variants.

### Forms & Inputs

**Components:** Button · Input · Input Group · Checkbox · Radio Group · Switch · Select · Field · Combobox · Table Lookup · File Upload · Rich Text Editor · Color Picker

**Showcase pages:**

- [`/showcase/inputs/button`](/showcase/inputs/button) — **Button**: Primary CTA button with a 4-layer shadow and gloss system, available in multiple variants and sizes.
- [`/showcase/inputs/input`](/showcase/inputs/input) — **Input**: Text input with smart focus: shadow ring for pointer interactions, outline for keyboard navigation.
- [`/showcase/inputs/input-group`](/showcase/inputs/input-group) — **Input Group**: Composite input system with prefix/suffix text, icon addons, and button addons.
- [`/showcase/inputs/checkbox`](/showcase/inputs/checkbox) — **Checkbox**: Custom checkbox with gradient overlay and shadow ring on the checked state.
- [`/showcase/inputs/radio-group`](/showcase/inputs/radio-group) — **Radio Group**: Custom radio group with glow and gloss effects on the selected item.
- [`/showcase/inputs/switch`](/showcase/inputs/switch) — **Switch**: Toggle switch with a gradient overlay on the active track.
- [`/showcase/inputs/select`](/showcase/inputs/select) — **Select**: Custom select dropdown with scroll buttons and size variants.
- [`/showcase/inputs/field`](/showcase/inputs/field) — **Field**: Compound form field wrapper with label, description, error display, and orientation variants.
- [`/showcase/inputs/combobox`](/showcase/inputs/combobox) — **Combobox**: Searchable dropdown with single and multi-select (chips) modes, built on Base UI.
- [`/showcase/inputs/table-lookup`](/showcase/inputs/table-lookup) — **Table Lookup**: Table-based lookup field for large datasets — supports single and multi-select with chips, async search, and configurable multi-column display.
- [`/showcase/inputs/file-upload`](/showcase/inputs/file-upload) — **File Upload**: Fully custom file upload with three variants (dropzone, button, inline) and five controlled states (idle, dragover, uploading, success, error). Includes drag-and-drop, type validation, size limits, and a progress bar.
- [`/showcase/inputs/rich-text-editor`](/showcase/inputs/rich-text-editor) — **Rich Text Editor**: Tiptap-based rich text editor with a 6-action toolbar (bold, italic, strike, bullet list, numbered list, link). Controlled value/onChange API compatible with react-hook-form. Matches input ring and shadow tokens.
- [`/showcase/inputs/color-picker`](/showcase/inputs/color-picker) — **Color Picker**: Fully custom color picker using Radix DropdownMenu as the floating shell — the same token-aligned popover as all other dropdowns. Supports HSL sliders, hex input, and a configurable preset grid.

### Date & Time

**Components:** Calendar · Date Picker · Date Range Picker

**Showcase pages:**

- [`/showcase/date/calendar`](/showcase/date/calendar) — **Calendar**: Full-featured calendar built on react-day-picker. Supports single, multiple, and range selection with optional month/year dropdowns.
- [`/showcase/date/date-picker`](/showcase/date/date-picker) — **Date Picker**: Popover-based single date picker with a trigger button and an embedded Calendar.
- [`/showcase/date/date-range-picker`](/showcase/date/date-range-picker) — **Date Range Picker**: Popover-based date range picker with configurable month count and an embedded range Calendar.

### Navigation

**Components:** Anchor · Nav · Nav Link · Header

**Showcase pages:**

- [`/showcase/nav/anchor`](/showcase/nav/anchor) — **Anchor**: Styled link component with semantic color variants and keyboard focus states.
- [`/showcase/nav/nav`](/showcase/nav/nav) — **Nav**: Sticky horizontal navigation bar with muted background and horizontally scrollable content area.
- [`/showcase/nav/nav-link`](/showcase/nav/nav-link) — **Nav Link**: Navigation link with an active underline indicator driven by the current pathname.
- [`/showcase/nav/header`](/showcase/nav/header) — **Header**: Top navigation header with breadcrumb links, slash separators, chevrons, and action slots.

### Overlays

**Components:** Dialog · Sheet · Dropdown Menu · Tooltip · Command Palette

**Showcase pages:**

- [`/showcase/overlay/dialog`](/showcase/overlay/dialog) — **Dialog**: Modal dialog with header, body, and footer slots. Centered overlay with max-w-sm default.
- [`/showcase/overlay/sheet`](/showcase/overlay/sheet) — **Sheet**: Slide-out drawer panel that opens from any edge of the screen.
- [`/showcase/overlay/dropdown-menu`](/showcase/overlay/dropdown-menu) — **Dropdown Menu**: Full-featured dropdown with items, separators, checkboxes, radio groups, and sub-menus.
- [`/showcase/overlay/tooltips`](/showcase/overlay/tooltips) — **Tooltip**: Floating label that appears on hover or focus. Wraps Radix UI Tooltip with TooltipProvider, all four placements, and rich content support.
- [`/showcase/overlay/command-palette`](/showcase/overlay/command-palette) — **Command Palette**: Keyboard-first command palette dialog built on shadcn Command + Dialog. Groups commands with icons and shortcuts. Registers ⌘K/Ctrl+K via useCommandPalette hook.

### Tables & Data

**Components:** Table · Empty State · Data Table

**Showcase pages:**

- [`/showcase/data-table/table`](/showcase/data-table/table) — **Table**: Data table with header, body, footer, scrollable container, and optional accent border and gradient background.
- [`/showcase/data-table/empty`](/showcase/data-table/empty) — **Empty State**: Placeholder for empty content areas with optional icon media and call-to-action.
- [`/showcase/data-table`](/showcase/data-table) — **Data Table**: Feature-rich data table with built-in search, filtering, sorting, column management, and pagination — composed via DataTableProvider and QueryProvider.

### Layout

**Components:** Card · Page Header · Page Bar · Aside Content · Item

**Showcase pages:**

- [`/showcase/layout/card`](/showcase/layout/card) — **Card**: Settings-style card with header, collapsible panel, panel items, field, crown badge, and footer. Supports accent border and gradient background on the panel.
- [`/showcase/layout/page-header`](/showcase/layout/page-header) — **Page Header**: Page-level header with title, subtitle, and an action slot. Composes PageHeaderGroup, PageTitle, PageSubtitle, and PageHeaderAction.
- [`/showcase/layout/page-bar`](/showcase/layout/page-bar) — **Page Bar**: Horizontal toolbar for search, filters, and primary actions above page content.
- [`/showcase/layout/aside-content`](/showcase/layout/aside-content) — **Aside Content**: Aside panel with optional dimmed state and gradient mask for overflow content on mobile.
- [`/showcase/layout/item`](/showcase/layout/item) — **Item**: Flexible list item with media, title, description, actions, header, and footer slots. Supports outline and muted variants.

### Tabs

**Components:** Tabs

**Showcase pages:**

- [`/showcase/tabs`](/showcase/tabs) — **Tabs**: Tabbed navigation with dirty-state dot indicator and disabled tab support.

### Sidebar

**Components:** Sidebar Menu

**Showcase pages:**

- [`/showcase/sidebar-menu`](/showcase/sidebar-menu) — **Sidebar Menu**: Expandable sidebar navigation with grouped menu sets, icon headers, and active link detection.

### Utilities

**Components:** Copy Text · Name Avatar · Theme Toggle · Pagination Button · Row Action Button · Scroll To Top

**Showcase pages:**

- [`/showcase/util/copy-text`](/showcase/util/copy-text) — **Copy Text**: Inline copy-to-clipboard trigger with icon feedback and an optional tooltip confirmation.
- [`/showcase/util/name-avatar`](/showcase/util/name-avatar) — **Name Avatar**: Auto-generated avatar from name initials with a deterministic background color derived from the name.
- [`/showcase/util/theme-toggle`](/showcase/util/theme-toggle) — **Theme Toggle**: Dark/light mode toggle button powered by next-themes.
- [`/showcase/util/pagination-button`](/showcase/util/pagination-button) — **Pagination Button**: Small bordered navigation button for pagination controls.
- [`/showcase/util/row-action-button`](/showcase/util/row-action-button) — **Row Action Button**: Icon button for table row actions — hidden by default, visible on row hover.
- [`/showcase/util/scroll-to-top`](/showcase/util/scroll-to-top) — **Scroll To Top**: Behavior-only component that scrolls the window to the top on every route change and disables browser scroll restoration.


---

## Composite Patterns

> Composite patterns are full-page or full-panel implementations that combine multiple
> primitives into a realistic domain scenario. Study these to understand how components
> are assembled together in production-quality code.

### Forms

10 form patterns covering: General / Marketing, SaaS / Product, IT / SaaS, Healthcare / Services, HR / Recruitment, Finance / Banking, E-Commerce, Project Management, Universal Utility, HR / Enterprise.

#### Form Component Palette

The following primitives appear across all form patterns: Input, Select, Field, Button, UnsavedChangesBar, Switch, Combobox, FieldGroup, RadioGroup, Checkbox, SimpleAlert, DatePicker, SimpleBadge, InputGroup, DateRangePicker, TableLookup.

#### Form Complexity Guide

| Complexity | Characteristics | Examples |
|---|---|---|
| Simple | Single section, vertical layout, ≤ 6 fields | Contact & Inquiry, Search & Filter Panel |
| Medium | 2–3 sections or conditional logic, 7–15 fields | User Profile Settings, Support Ticket, Appointment Booking, Job Application, Financial Transaction |
| Complex | Multi-section, multi-step, ≥ 15 fields, file uploads, rich text | Create Product Listing, Project Kickoff, Employee Onboarding Stepper |

#### All Form Patterns

| Name | Route | Domain | Complexity | Layout | Edit Mode |
|---|---|---|---|---|---|
| **Contact & Inquiry** | [`/showcase/forms/contact-inquiry`](/showcase/forms/contact-inquiry) | General / Marketing | Simple | Single column, vertical | No |
| **User Profile Settings** | [`/showcase/forms/user-profile`](/showcase/forms/user-profile) | SaaS / Product | Medium | 2 sections, mixed vertical & horizontal fields | Yes |
| **Support Ticket** | [`/showcase/forms/support-ticket`](/showcase/forms/support-ticket) | IT / SaaS | Medium | Single column with conditional section reveal | No |
| **Appointment Booking** | [`/showcase/forms/appointment-booking`](/showcase/forms/appointment-booking) | Healthcare / Services | Medium | 3 sections, step-like visual flow | No |
| **Job Application** | [`/showcase/forms/job-application`](/showcase/forms/job-application) | HR / Recruitment | Medium | 3 sections, single column with 2-column grid rows | No |
| **Financial Transaction** | [`/showcase/forms/financial-transaction`](/showcase/forms/financial-transaction) | Finance / Banking | Medium | 2 sections, horizontal-label compact layout | No |
| **Create Product Listing** | [`/showcase/forms/create-product`](/showcase/forms/create-product) | E-Commerce | Complex | 3 sections, mixed 1-column and 2-column grid | Yes |
| **Project Kickoff** | [`/showcase/forms/project-kickoff`](/showcase/forms/project-kickoff) | Project Management | Complex | 3 sections, mixed 1-column and 2-column grids | No |
| **Search & Filter Panel** | [`/showcase/forms/search-filter`](/showcase/forms/search-filter) | Universal Utility | Simple | Compact sidebar panel, single column | No |
| **Employee Onboarding Stepper** | [`/showcase/forms/employee-onboarding`](/showcase/forms/employee-onboarding) | HR / Enterprise | Complex | 4-step stepper with step indicator and per-step sections | No |

#### Form Pattern Details

##### Contact & Inquiry

_Route:_ `/showcase/forms/contact-inquiry`  
_Domain:_ General / Marketing · _Complexity:_ Simple  
_Layout:_ Single column, vertical

A clean single-section contact form covering the most common lead-capture and general inquiry scenarios.

_Components used:_ Input, Select, Field, Button, UnsavedChangesBar

##### User Profile Settings

_Route:_ `/showcase/forms/user-profile`  
_Domain:_ SaaS / Product · _Complexity:_ Medium  
_Layout:_ 2 sections, mixed vertical & horizontal fields  
_Edit mode:_ Ships with a read-only view and an Edit toggle

Account settings split into Personal Info and Preferences sections — a staple pattern for any SaaS product.

_Components used:_ Input, Select, Switch, Combobox, Field, FieldGroup, UnsavedChangesBar

##### Support Ticket

_Route:_ `/showcase/forms/support-ticket`  
_Domain:_ IT / SaaS · _Complexity:_ Medium  
_Layout:_ Single column with conditional section reveal

Issue reporting form with priority radio, dynamic conditional fields revealed by a Switch, and an inline alert guiding the user.

_Components used:_ Input, Select, RadioGroup, Combobox, Checkbox, Switch, SimpleAlert, Field, UnsavedChangesBar

##### Appointment Booking

_Route:_ `/showcase/forms/appointment-booking`  
_Domain:_ Healthcare / Services · _Complexity:_ Medium  
_Layout:_ 3 sections, step-like visual flow

Three-stage booking flow: pick a service → choose a date & time slot → confirm patient details.

_Components used:_ RadioGroup, DatePicker, Combobox, Input, SimpleBadge, SimpleAlert, Field, FieldGroup, UnsavedChangesBar

##### Job Application

_Route:_ `/showcase/forms/job-application`  
_Domain:_ HR / Recruitment · _Complexity:_ Medium  
_Layout:_ 3 sections, single column with 2-column grid rows

Multi-section application form covering personal details, position preferences, and portfolio links — common in career portals.

_Components used:_ Input, InputGroup, Select, Combobox, DatePicker, Checkbox, Field, FieldGroup, UnsavedChangesBar

##### Financial Transaction

_Route:_ `/showcase/forms/financial-transaction`  
_Domain:_ Finance / Banking · _Complexity:_ Medium  
_Layout:_ 2 sections, horizontal-label compact layout

Compact transaction entry with account lookup, currency-prefixed amount, and a recurring schedule section — typical in accounting or banking UIs.

_Components used:_ Input, InputGroup, Select, RadioGroup, DatePicker, DateRangePicker, TableLookup, Field, FieldGroup, UnsavedChangesBar

##### Create Product Listing

_Route:_ `/showcase/forms/create-product`  
_Domain:_ E-Commerce · _Complexity:_ Complex  
_Layout:_ 3 sections, mixed 1-column and 2-column grid  
_Edit mode:_ Ships with a read-only view and an Edit toggle

Product creation form spanning basic info, pricing & inventory, and shipping — representative of e-commerce admin backends.

_Components used:_ Input, InputGroup, Select, Combobox, Switch, Checkbox, SimpleAlert, Field, FieldGroup, UnsavedChangesBar

##### Project Kickoff

_Route:_ `/showcase/forms/project-kickoff`  
_Domain:_ Project Management · _Complexity:_ Complex  
_Layout:_ 3 sections, mixed 1-column and 2-column grids

Project creation spanning basics, team composition, and timeline & budget — covering project management tool patterns.

_Components used:_ Input, InputGroup, Select, Combobox, Checkbox, DateRangePicker, Field, FieldGroup, SimpleAlert, UnsavedChangesBar

##### Search & Filter Panel

_Route:_ `/showcase/forms/search-filter`  
_Domain:_ Universal Utility · _Complexity:_ Simple  
_Layout:_ Compact sidebar panel, single column

Sidebar-style filter panel with date range, multi-select categories, status checkboxes, and a quick-search input — universal across list and report views.

_Components used:_ Input, DateRangePicker, Checkbox, Combobox, RadioGroup, Field, FieldGroup, Button

##### Employee Onboarding Stepper

_Route:_ `/showcase/forms/employee-onboarding`  
_Domain:_ HR / Enterprise · _Complexity:_ Complex  
_Layout:_ 4-step stepper with step indicator and per-step sections

Four-step stepper covering personal info, employment details, compensation, and IT access — the broadest coverage of the component library in one form.

_Components used:_ Input, InputGroup, Select, Combobox, RadioGroup, Checkbox, Switch, DatePicker, TableLookup, SimpleAlert, Field, FieldGroup, UnsavedChangesBar

---

### Dialogs

12 dialog patterns. All rendered on a single gallery page at `/showcase/dialogs`.

#### When to Use Dialog vs Sheet vs Drawer

- **Dialog** — short confirmations (≤ 4 fields), destructive actions, feature announcements
- **Sheet** — side panels for record detail, longer forms (≥ 5 fields), settings
- **Drawer** — bottom-up panels for mobile-first flows, action menus, quick inputs

#### Dialog Type Definitions

| Type | Intent | Typical buttons |
|---|---|---|
| Confirmation | Ask user to confirm a safe action | Cancel + Confirm |
| Destructive | Confirm an irreversible action | Cancel + Delete/Remove (red) |
| Input | Collect a small amount of data | Cancel + Save |
| Alert | Display important information | OK / Dismiss |
| Feature | Announce or explain a feature | Close or CTA |

#### All Dialog Patterns

| Name | Type | Components |
|---|---|---|
| **Archive Project** | Confirmation | Dialog, Button |
| **Transfer Ownership** | Confirmation | Dialog, Checkbox, Button |
| **Delete Record** | Destructive | Dialog, Button |
| **Delete Account** | Destructive | Dialog, Input, Field, Button |
| **Rename Item** | Input | Dialog, Input, Field, Button |
| **Add Note** | Input | Dialog, InputGroup, Field, Button |
| **Invite Member** | Input | Dialog, Input, Select, Field, Button |
| **Change Password** | Input | Dialog, Input, Field, Button |
| **Session Expired** | Alert | Dialog, Button |
| **Payment Failed** | Alert | Dialog, SimpleAlert, Button |
| **Feature Announcement** | Feature | Dialog, Button |
| **Upgrade Required** | Feature | Dialog, Checkbox, Button |

---

### Sheets

10 slide-out panel patterns for detail, preview, activity, and settings flows.
All rendered on a single gallery page at `/showcase/sheets`.

#### Sheet Type Definitions

| Type | Intent | Typical content |
|---|---|---|
| Detail | Full record detail view | Read-only fields, sections, related items |
| Preview | Quick-look without leaving context | Compact summary, key metrics |
| Activity | Timeline or audit log | Chronological events list |
| Settings | Configuration panel | Form fields, switches, selects |

#### All Sheet Patterns

| Name | Type | Domain | Components |
|---|---|---|---|
| **Employee Profile** | Detail | HR | Sheet, SimpleBadge, NameAvatar, Switch, Item |
| **Order Details** | Detail | E-commerce | Sheet, Item, SimpleBadge, Button |
| **Support Ticket** | Activity | SaaS | Sheet, Item, NameAvatar, StatusDot, SimpleBadge, Button |
| **Notification Preferences** | Settings | SaaS | Sheet, Switch, Button |
| **Customer Profile** | Preview | CRM | Sheet, NameAvatar, SimpleBadge, StatusDot, Item, Button |
| **Invoice Preview** | Preview | Finance | Sheet, Item, SimpleBadge, SimpleAlert, Button |
| **Project Overview** | Detail | Project Management | Sheet, NameAvatar, SimpleBadge, StatusDot, Item, Button |
| **Audit Log Entry** | Detail | System / Admin | Sheet, SimpleBadge, SimpleAlert, Button |
| **Product Details** | Preview | Catalog | Sheet, SimpleBadge, StatusDot, Button |
| **Account Settings** | Settings | Platform | Sheet, Switch, SimpleBadge, Button |

---

### Drawers

8 bottom-drawer patterns for mobile-first flows.
All rendered on a single gallery page at `/showcase/drawers`.

#### Drawer Type Definitions

| Type | Intent |
|---|---|
| Action | Quick action menu; list of actionable options |
| Panel | Richer content panel that slides up from bottom |
| Preview | Compact record preview for mobile |
| Input | Short form or data entry on mobile |

#### All Drawer Patterns

| Name | Type | Domain | Components |
|---|---|---|---|
| **Quick Actions** | Action | General | Drawer, Item, Button |
| **Smart Filter** | Panel | E-commerce | Drawer, Switch, Item, SimpleBadge, Button |
| **Share Sheet** | Action | General | Drawer, Button |
| **Event Preview** | Preview | Calendar | Drawer, NameAvatar, StatusDot, Button |
| **Media Attachment** | Preview | File Management | Drawer, Button |
| **Assign Task** | Input | Project Management | Drawer, Input, NameAvatar, Item, Button |
| **Notification Center** | Panel | SaaS | Drawer, BubbleBadge, StatusDot, Button |
| **Danger Zone** | Action | Settings | Drawer, Input, SimpleAlert, Button |

---

### Dashboards

10 full analytics dashboard pages. Each has KPI tiles, multiple chart types, and a data table.
Domains covered: SaaS / Startup, Retail / E-commerce, Marketing / Growth, Finance / CFO, Finance / Trading, Healthcare / Clinical, People Operations, Engineering / SRE, Operations / Logistics, Property Investment.

#### Chart Type Frequency

The most commonly used chart types across all dashboards:

- **bar** — used in 9 dashboards
- **composed** — used in 7 dashboards
- **pie** — used in 4 dashboards
- **area** — used in 4 dashboards
- **radial** — used in 4 dashboards
- **line** — used in 4 dashboards

#### Dashboard Layout Pattern

Every dashboard page follows a consistent structure:

```
PageHeader (title + date range badge)
PageMain > PageWrapper > PageContent
  Row 1: KPI tiles (grid of 4 — col-span-3 each on 12-col grid)
  Row 2+: Charts + Tables (mixed col-span via 12-column grid)
  Final row: Full-width Table (col-span-12)
```

KPI tiles always use `Card > CardPanel > CardPanelItem` with a metric value, label, and change indicator.

#### All Dashboard Patterns

| Name | Route | Domain | KPIs | Chart types |
|---|---|---|---|---|
| **SaaS Revenue & Growth** | [`/showcase/dashboards/saas-revenue`](/showcase/dashboards/saas-revenue) | SaaS / Startup | Monthly Recurring Revenue, Annual Run Rate, Churn Rate, Net Revenue Retention | composed, pie, area, radial, bar |
| **E-commerce Operations** | [`/showcase/dashboards/ecommerce-ops`](/showcase/dashboards/ecommerce-ops) | Retail / E-commerce | Gross Merchandise Value, Orders Placed, Avg. Order Value, Return Rate | line, bar, treemap, histogram |
| **Marketing Performance** | [`/showcase/dashboards/marketing`](/showcase/dashboards/marketing) | Marketing / Growth | Attributed Revenue, Blended ROAS, Customer Acq. Cost, Avg. CTR | bar, radar, area, pie, composed |
| **Financial P&L** | [`/showcase/dashboards/financial-pnl`](/showcase/dashboards/financial-pnl) | Finance / CFO | Total Revenue, EBITDA, Monthly Burn Rate, Cash Runway | composed, radial, area, bar |
| **Trading & Portfolio** | [`/showcase/dashboards/trading-portfolio`](/showcase/dashboards/trading-portfolio) | Finance / Trading | Portfolio Value, Day P&L, Beta, Sharpe Ratio | candlestick, histogram, scatter, composed |
| **Healthcare Analytics** | [`/showcase/dashboards/healthcare`](/showcase/dashboards/healthcare) | Healthcare / Clinical | Active Patients, Avg. Wait Time, Bed Occupancy, Recovery Rate | line, radial, bar, radar, histogram |
| **HR & People Analytics** | [`/showcase/dashboards/hr-people`](/showcase/dashboards/hr-people) | People Operations | Total Headcount, Attrition Rate, Avg. Time to Hire, eNPS Score | line, pie, bar, scatter |
| **DevOps Monitoring** | [`/showcase/dashboards/devops`](/showcase/dashboards/devops) | Engineering / SRE | Uptime (30d), P99 Latency, Error Rate, Deploy Frequency | area, line, bar, composed, radial |
| **Supply Chain** | [`/showcase/dashboards/supply-chain`](/showcase/dashboards/supply-chain) | Operations / Logistics | On-time Delivery, Inventory Fill Rate, Inventory Turns, Avg. Lead Time | composed, bar, treemap, radar |
| **Real Estate Portfolio** | [`/showcase/dashboards/real-estate`](/showcase/dashboards/real-estate) | Property Investment | Portfolio Value, Avg. Gross Yield, Occupancy Rate, Monthly Income | treemap, pie, composed, bar, scatter |

---

### Reports

10 document-style report pages.
Domains covered: Finance / Accounting, Corporate / C-Suite, Healthcare / Clinical, Project Management, Sales / CRM, Marketing / Growth, Operations / Logistics, Human Resources, IT / Security, Corporate / ESG.

#### Report vs Dashboard

| Dimension | Dashboard | Report |
|---|---|---|
| Purpose | Live operational monitoring | Periodic review, export-ready summary |
| Layout | Wide grid, dense data | Document-style, print-friendly |
| Charts | Multiple interactive charts | Supporting charts only |
| Tables | Scrollable DataTable | Simple Table with summary rows |
| Audience | Operations team | Executives, auditors, HR |

#### Report Type Definitions

| Type | Focus |
|---|---|
| Executive | High-level KPIs for leadership |
| Financial | Revenue, P&L, cost analysis |
| Operational | Process efficiency, throughput |
| Performance | Individual or team metrics |
| Clinical | Healthcare outcomes, patient data |
| Compliance | Audit trails, regulatory adherence |

#### All Report Patterns

| Name | Route | Domain | Type | Complexity |
|---|---|---|---|---|
| **Annual Financial Statement** | [`/showcase/reports/annual-financial-statement`](/showcase/reports/annual-financial-statement) | Finance / Accounting | Financial | Complex |
| **Executive Business Review** | [`/showcase/reports/executive-business-review`](/showcase/reports/executive-business-review) | Corporate / C-Suite | Executive | Simple |
| **Patient Health Summary** | [`/showcase/reports/patient-health-summary`](/showcase/reports/patient-health-summary) | Healthcare / Clinical | Clinical | Medium |
| **Project Status Report** | [`/showcase/reports/project-status-report`](/showcase/reports/project-status-report) | Project Management | Operational | Simple |
| **Sales Pipeline Report** | [`/showcase/reports/sales-pipeline-report`](/showcase/reports/sales-pipeline-report) | Sales / CRM | Performance | Medium |
| **Marketing Campaign Analysis** | [`/showcase/reports/marketing-campaign-analysis`](/showcase/reports/marketing-campaign-analysis) | Marketing / Growth | Performance | Medium |
| **Supply Chain Operations Report** | [`/showcase/reports/supply-chain-ops-report`](/showcase/reports/supply-chain-ops-report) | Operations / Logistics | Operational | Complex |
| **Employee Performance Review** | [`/showcase/reports/employee-performance-review`](/showcase/reports/employee-performance-review) | Human Resources | Performance | Simple |
| **Cybersecurity Incident Report** | [`/showcase/reports/security-incident-report`](/showcase/reports/security-incident-report) | IT / Security | Compliance | Medium |
| **ESG Sustainability Report** | [`/showcase/reports/esg-sustainability-report`](/showcase/reports/esg-sustainability-report) | Corporate / ESG | Compliance | Complex |

---

## Showcase Navigation Map

The showcase has 94 pages organized into 17 categories.
All routes are prefixed with `/showcase`.

| Category | Pages |
|---|---|
| **Getting Started** | [`/`](/showcase/), [`design-tokens`](/showcase/design-tokens), [`guidelines`](/showcase/guidelines), [`accessibility`](/showcase/accessibility) |
| **Sample Dialogs** | [`dialogs`](/showcase/dialogs) |
| **Sample Sheets** | [`sheets`](/showcase/sheets) |
| **Sample Drawers** | [`drawers`](/showcase/drawers) |
| **Sample Dashboards** | [`dashboards`](/showcase/dashboards), [`dashboards/saas-revenue`](/showcase/dashboards/saas-revenue), [`dashboards/ecommerce-ops`](/showcase/dashboards/ecommerce-ops), [`dashboards/marketing`](/showcase/dashboards/marketing), [`dashboards/financial-pnl`](/showcase/dashboards/financial-pnl), [`dashboards/trading-portfolio`](/showcase/dashboards/trading-portfolio), [`dashboards/healthcare`](/showcase/dashboards/healthcare), [`dashboards/hr-people`](/showcase/dashboards/hr-people), [`dashboards/devops`](/showcase/dashboards/devops), [`dashboards/supply-chain`](/showcase/dashboards/supply-chain), [`dashboards/real-estate`](/showcase/dashboards/real-estate) |
| **Sample Forms** | [`forms`](/showcase/forms), [`forms/contact-inquiry`](/showcase/forms/contact-inquiry), [`forms/user-profile`](/showcase/forms/user-profile), [`forms/support-ticket`](/showcase/forms/support-ticket), [`forms/appointment-booking`](/showcase/forms/appointment-booking), [`forms/job-application`](/showcase/forms/job-application), [`forms/financial-transaction`](/showcase/forms/financial-transaction), [`forms/create-product`](/showcase/forms/create-product), [`forms/project-kickoff`](/showcase/forms/project-kickoff), [`forms/search-filter`](/showcase/forms/search-filter), [`forms/employee-onboarding`](/showcase/forms/employee-onboarding) |
| **Feedback & Status** | [`feedback/simple-badge`](/showcase/feedback/simple-badge), [`feedback/bubble-badge`](/showcase/feedback/bubble-badge), [`feedback/status-dot`](/showcase/feedback/status-dot), [`feedback/simple-alert`](/showcase/feedback/simple-alert), [`feedback/toasts`](/showcase/feedback/toasts), [`feedback/pro-badge`](/showcase/feedback/pro-badge), [`feedback/unsaved-changes-bar`](/showcase/feedback/unsaved-changes-bar), [`feedback/progress`](/showcase/feedback/progress), [`feedback/skeleton`](/showcase/feedback/skeleton), [`feedback/rating`](/showcase/feedback/rating) |
| **Forms & Inputs** | [`inputs/button`](/showcase/inputs/button), [`inputs/input`](/showcase/inputs/input), [`inputs/input-group`](/showcase/inputs/input-group), [`inputs/checkbox`](/showcase/inputs/checkbox), [`inputs/radio-group`](/showcase/inputs/radio-group), [`inputs/switch`](/showcase/inputs/switch), [`inputs/select`](/showcase/inputs/select), [`inputs/field`](/showcase/inputs/field), [`inputs/combobox`](/showcase/inputs/combobox), [`inputs/table-lookup`](/showcase/inputs/table-lookup), [`inputs/file-upload`](/showcase/inputs/file-upload), [`inputs/rich-text-editor`](/showcase/inputs/rich-text-editor), [`inputs/color-picker`](/showcase/inputs/color-picker) |
| **Date & Time** | [`date/calendar`](/showcase/date/calendar), [`date/date-picker`](/showcase/date/date-picker), [`date/date-range-picker`](/showcase/date/date-range-picker) |
| **Navigation** | [`nav/anchor`](/showcase/nav/anchor), [`nav/nav`](/showcase/nav/nav), [`nav/nav-link`](/showcase/nav/nav-link), [`nav/header`](/showcase/nav/header) |
| **Overlays** | [`overlay/dialog`](/showcase/overlay/dialog), [`overlay/sheet`](/showcase/overlay/sheet), [`overlay/dropdown-menu`](/showcase/overlay/dropdown-menu), [`overlay/tooltips`](/showcase/overlay/tooltips), [`overlay/command-palette`](/showcase/overlay/command-palette) |
| **Charts** | [`charts`](/showcase/charts), [`charts/line`](/showcase/charts/line), [`charts/area`](/showcase/charts/area), [`charts/bar`](/showcase/charts/bar), [`charts/pie`](/showcase/charts/pie), [`charts/radial`](/showcase/charts/radial), [`charts/radar`](/showcase/charts/radar), [`charts/scatter`](/showcase/charts/scatter), [`charts/composed`](/showcase/charts/composed), [`charts/treemap`](/showcase/charts/treemap), [`charts/histogram`](/showcase/charts/histogram), [`charts/candlestick`](/showcase/charts/candlestick) |
| **Tables & Data** | [`data-table/table`](/showcase/data-table/table), [`data-table/empty`](/showcase/data-table/empty), [`data-table`](/showcase/data-table), [`data-table-lab`](/showcase/data-table-lab) |
| **Layout** | [`layout-guide`](/showcase/layout-guide), [`layout/card`](/showcase/layout/card), [`layout/page-header`](/showcase/layout/page-header), [`layout/page-bar`](/showcase/layout/page-bar), [`layout/aside-content`](/showcase/layout/aside-content), [`layout/item`](/showcase/layout/item) |
| **Tabs** | [`tabs`](/showcase/tabs) |
| **Sidebar** | [`sidebar-menu`](/showcase/sidebar-menu) |
| **Utilities** | [`util/copy-text`](/showcase/util/copy-text), [`util/name-avatar`](/showcase/util/name-avatar), [`util/theme-toggle`](/showcase/util/theme-toggle), [`util/pagination-button`](/showcase/util/pagination-button), [`util/row-action-button`](/showcase/util/row-action-button), [`util/scroll-to-top`](/showcase/util/scroll-to-top) |

---

## AI Developer Guide

> Use this section to write effective prompts for AI models working with this codebase.

### How to Ask an AI to Build a New Page

Include the following context in your prompt:

```
I am working in a Next.js project that uses Ascendra UI.
All components are imported from @/ascendra-ui (or @/ascendra-ui/shadcn for Tooltip).
See docs/ui-reference.md for full props and docs/showcase-reference.md for patterns.

Build [describe the page]. Requirements:
- Use the standard page shell: PageHeader + PageMain + PageWrapper + PageContent + MainContent
- Wrap all inputs in Field with FieldLabel and FieldError
- Use Card + CardPanel + CardPanelItem for settings sections
- Use SimpleBadge for status labels (not custom spans)
- Use UnsavedChangesBar for forms (isDirty, onSave, onReset)
- Follow the layout guide in docs/showcase-reference.md
```

### Common Mistakes to Avoid

| Wrong | Correct |
|---|---|
| Raw `<label>` + `<input>` | `Field > FieldLabel + Input` |
| `bg-red-500` for error color | `text-negative` / `bg-destructive` |
| Custom div for card | `Card > CardPanel > CardPanelItem` |
| `alert()` for confirmations | `Dialog` with Cancel + Confirm |
| Large form in Dialog | Move to `Sheet` (side panel) |
| Mobile menu in Dialog | Use `Drawer` (bottom sheet) |
| DataTable inside dashboard | Use `Table` system (simpler, no built-in state) |
| Inline toast for form errors | Use `FieldError` + `SimpleAlert` inside the form |
| Hardcoded dark mode colors | Use semantic tokens (`--foreground`, `--muted-foreground`) |

### Page Templates by Domain

**Settings page** → Study `User Profile Settings` form at `/showcase/forms/user-profile`  
**Data list with actions** → Study `DataTable` at `/showcase/data-table`  
**Confirmation flow** → Study Dialog patterns at `/showcase/dialogs`  
**Analytics overview** → Study any dashboard at `/showcase/dashboards/saas-revenue`  
**Document report** → Study report pages at `/showcase/reports/`  
**Mobile-first flow** → Study Drawer patterns at `/showcase/drawers`  

### Component Naming Conventions

- Components named `Page*` belong to the page shell (`PageHeader`, `PageMain`, `PageWrapper`, `PageContent`, `PageTitle`, `PageSubtitle`)
- Components named `SideBar*` belong to the sidebar system
- Components named `Card*` belong to the settings card system — not generic cards
- Components named `Field*` belong to the form field wrapper system
- Components named `DataTable*` belong to the advanced table with built-in state
- Components named `Table*` belong to the simple table without built-in state
- Compound component families share a prefix: `Sheet`, `SheetContent`, `SheetHeader`, `SheetTitle`, etc.

### Import Paths

```tsx
// All ascendra-ui components
import { Button, Input, Field, Card, ... } from '@/ascendra-ui'

// Tooltip only (from shadcn layer)
import { Tooltip, TooltipContent, TooltipTrigger } from '@/ascendra-ui/shadcn'
```

Never import from sub-paths like `@/ascendra-ui/components/button` — always use the barrel exports.

---

## Versioning

This reference was generated for **ascendra-ui v1.0.0**.
Commit: `629be3819ca4960e78aefbd6612d0272f9698511`

Run `npm run docs:generate` to regenerate after any change.
Run `npm run release` to cut a new version.
