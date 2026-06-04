# Ascendra UI — Component Reference

> Auto-generated on 2026-06-04 from `lib/registry.ts`.  
> Run `npm run docs:generate` after any registry change to keep this file current.

---

## Overview

**Total components:** 42

| Category | Components |
|---|---|
| Feedback & Status | Simple Badge, Bubble Badge, Status Dot, Simple Alert, Pro Badge, Unsaved Changes Bar |
| Forms & Inputs | Button, Input, Input Group, Checkbox, Radio Group, Switch, Select, Field, Table Lookup, Combobox |
| Navigation | Anchor, Nav Link, Header, Nav |
| Overlays | Dialog, Sheet, Dropdown Menu |
| Tables & Data | Table, Empty State, Data Table |
| Layout | Card, Page Header, Page Bar, Aside Content, Item |
| Tabs | Tabs |
| Sidebar | Sidebar Menu |
| Utilities | Copy Text, Name Avatar, Theme Toggle, Pagination Button, Row Action Button, Scroll To Top |
| Date & Time | Calendar, Date Picker, Date Range Picker |

---

## Components

### Feedback & Status

#### Simple Badge

Small inline status badge for labeling content with semantic color variants.

- **Slug:** `simple-badge`
- **Import:** `import { SimpleBadge } from "@/ascendra-ui"`
- **Showcase:** `/showcase/simple-badge`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'default' \| 'secondary' \| 'orange' \| 'green' \| 'blue' \| 'red' \| 'amber'` | `'default'` | Color variant of the badge. |
| `asChild` | `boolean` | `false` | Render as a child element using Radix Slot. |
| `className` | `string` | — | Additional CSS classes. |

---

#### Bubble Badge

Gradient pill badges with inset highlight, available in multiple sizes and colors.

- **Slug:** `bubble-badge`
- **Import:** `import { BubbleBadge } from "@/ascendra-ui"`
- **Showcase:** `/showcase/bubble-badge`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'sm' \| 'md' \| 'lg'` | `'sm'` | Size of the badge. |
| `color` | `'gray' \| 'blue' \| 'green' \| 'red' \| 'amber' \| 'orange' \| 'violet'` | `'gray'` | Color variant. |

---

#### Status Dot

Tiny status indicator dot with a halo shadow ring, available in semantic colors.

- **Slug:** `status-dot`
- **Import:** `import { StatusDot } from "@/ascendra-ui"`
- **Showcase:** `/showcase/status-dot`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'orange' \| 'emerald' \| 'sky' \| 'violet' \| 'rose' \| 'amber' \| 'red' \| 'primary' \| 'gray'` | `'gray'` | Color variant. |

---

#### Simple Alert

Compact alert notification box with semantic severity variants and an optional icon.

- **Slug:** `simple-alert`
- **Import:** `import { SimpleAlert, AlertIcon } from "@/ascendra-ui"`
- **Showcase:** `/showcase/simple-alert`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'default' \| 'secondary' \| 'destructive' \| 'success' \| 'warning'` | `'default'` | Alert severity variant. |
| `icon` | `React.ComponentType<{ className?: string; strokeWidth?: number }>` | — | Icon component to display (defaults to InfoIcon). |

---

#### Pro Badge

Premium feature indicator with a blue-purple gradient treatment.

- **Slug:** `pro-badge`
- **Import:** `import { ProBadge } from "@/ascendra-ui"`
- **Showcase:** `/showcase/pro-badge`

**Props**

_No props — accepts standard HTML attributes._

---

#### Unsaved Changes Bar

Fixed bottom bar that surfaces when a form has unsaved changes, with save/reset actions and status states.

- **Slug:** `unsaved-changes-bar`
- **Import:** `import { UnsavedChangesBar } from "@/ascendra-ui"`
- **Showcase:** `/showcase/unsaved-changes-bar`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `isDirty` | `boolean` | — | Shows the bar when true. |
| `isSaving` | `boolean` | — | Shows a loading spinner and hides action buttons. |
| `isValid` | `boolean` | — | When false on Save click, triggers nudge animation and validation message. |
| `onSave` | `() => boolean \| Promise<boolean> \| void` | — | Called on Save; return true for success, false for error. |
| `onReset` | `() => void` | — | Called on Reset click. |
| `onInvalid` | `() => void` | — | Called when Save is clicked on an invalid form — use to trigger field-level errors. |
| `message` | `string` | `'Unsaved changes'` | Idle state message. |
| `saveLabel` | `string` | `'Save'` | Save button label. |
| `resetLabel` | `string` | `'Reset'` | Reset button label. |
| `className` | `string` | — | Extra classes on the outer wrapper — use to offset centering when a sidebar is present. |

---

### Forms & Inputs

#### Button

Primary CTA button with a 4-layer shadow and gloss system, available in multiple variants and sizes.

- **Slug:** `button`
- **Import:** `import { Button } from "@/ascendra-ui"`
- **Showcase:** `/showcase/button`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'destructive' \| 'ghost' \| 'link'` | `'primary'` | Visual style of the button. |
| `size` | `'xs' \| 'sm' \| 'default' \| 'lg' \| 'icon'` | `'default'` | Size of the button. |
| `asChild` | `boolean` | `false` | Render as a child element using Radix Slot. |
| `disabled` | `boolean` | `false` | Disables the button. |

---

#### Input

Text input with smart focus: shadow ring for pointer interactions, outline for keyboard navigation.

- **Slug:** `input`
- **Import:** `import { Input } from "@/ascendra-ui"`
- **Showcase:** `/showcase/input`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `full` | `boolean` | `false` | Expands input to full container width. |
| `disabled` | `boolean` | `false` | Disables the input. |
| `placeholder` | `string` | — | Placeholder text. |

---

#### Input Group

Composite input system with prefix/suffix text, icon addons, and button addons.

- **Slug:** `input-group`
- **Import:** `import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupInput, InputGroupTextarea } from "@/ascendra-ui"`
- **Showcase:** `/showcase/input-group`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `align` | `'inline-start' \| 'inline-end' \| 'block-start' \| 'block-end'` | — | Position of the addon relative to the input (on InputGroupAddon). |

---

#### Checkbox

Custom checkbox with gradient overlay and shadow ring on the checked state.

- **Slug:** `checkbox`
- **Import:** `import { Checkbox } from "@/ascendra-ui"`
- **Showcase:** `/showcase/checkbox`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean \| "indeterminate"` | — | Controlled checked state. |
| `defaultChecked` | `boolean` | — | Uncontrolled default checked state. |
| `disabled` | `boolean` | `false` | Disables the checkbox. |
| `onCheckedChange` | `(checked: boolean) => void` | — | Callback fired when the state changes. |

---

#### Radio Group

Custom radio group with glow and gloss effects on the selected item.

- **Slug:** `radio-group`
- **Import:** `import { RadioGroup, RadioGroupItem } from "@/ascendra-ui"`
- **Showcase:** `/showcase/radio-group`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Controlled selected value. |
| `defaultValue` | `string` | — | Uncontrolled default selected value. |
| `disabled` | `boolean` | `false` | Disables the entire group. |
| `onValueChange` | `(value: string) => void` | — | Callback fired when selection changes. |
| `wrapperClassName` | `string` | — | Additional classes for the item wrapper (on RadioGroupItem). |

---

#### Switch

Toggle switch with a gradient overlay on the active track.

- **Slug:** `switch`
- **Import:** `import { Switch } from "@/ascendra-ui"`
- **Showcase:** `/showcase/switch`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean` | — | Controlled checked state. |
| `defaultChecked` | `boolean` | — | Uncontrolled default checked state. |
| `disabled` | `boolean` | `false` | Disables the switch. |
| `onCheckedChange` | `(checked: boolean) => void` | — | Callback fired when toggled. |

---

#### Select

Custom select dropdown with scroll buttons and size variants.

- **Slug:** `select`
- **Import:** `import { Select, SelectTrigger, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectValue, SelectSeparator } from "@/ascendra-ui"`
- **Showcase:** `/showcase/select`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'sm' \| 'default'` | `'default'` | Size of the trigger (on SelectTrigger). |
| `position` | `'popper' \| 'item-aligned'` | `'popper'` | Positioning strategy of the dropdown (on SelectContent). |

---

#### Field

Compound form field wrapper with label, description, error display, and orientation variants.

- **Slug:** `field`
- **Import:** `import { Field, FieldSet, FieldLegend, FieldGroup, FieldContent, FieldLabel, FieldTitle, FieldDescription, FieldSeparator, FieldError } from "@/ascendra-ui"`
- **Showcase:** `/showcase/field`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `orientation` | `'vertical' \| 'horizontal' \| 'responsive'` | `'vertical'` | Layout direction of the label and control (on Field). |
| `variant` | `'legend' \| 'label'` | `'legend'` | Typography style for FieldLegend. |
| `errors` | `Array<{ message?: string }>` | — | Array of error objects — deduplicates and displays messages (on FieldError). |

---

#### Combobox

Searchable dropdown with single and multi-select (chips) modes, built on Base UI.

- **Slug:** `combobox`
- **Import:** `import { Combobox, ComboboxInput, ComboboxContent, ComboboxList, ComboboxItem, ComboboxGroup, ComboboxLabel, ComboboxEmpty, ComboboxSeparator, ComboboxChips, ComboboxChip, ComboboxChipsInput } from "@/ascendra-ui"`
- **Showcase:** `/showcase/combobox`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `showTrigger` | `boolean` | `true` | Show the chevron toggle button (on ComboboxInput). |
| `showClear` | `boolean` | `false` | Show the × clear button (on ComboboxInput). |
| `showRemove` | `boolean` | `true` | Show the × remove button on each chip (on ComboboxChip). |
| `disabled` | `boolean` | `false` | Disables the input (on ComboboxInput). |

---

#### Table Lookup

Table-based lookup field for large datasets — supports single and multi-select with chips, async search, and configurable multi-column display.

- **Slug:** `table-lookup`
- **Import:** `import { TableLookup } from "@/ascendra-ui"`
- **Showcase:** `/showcase/table-lookup`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `columns` | `TableLookupColumn<T>[]` | — | Column definitions — drives table headers and searchable field list. |
| `valueKey` | `keyof T & string` | — | Key used as the unique identifier for each record. |
| `labelKey` | `keyof T & string` | — | Key whose value is shown in chips and the single-mode trigger. |
| `mode` | `'single' \| 'multiple'` | `'single'` | Single replaces the selection on each pick; multiple accumulates chips. |
| `onSearch` | `(query: string, field?: string) => Promise<T[]> \| T[]` | — | Called to load or filter data. Receives the search string and optional field key. |
| `value` | `T \| T[] \| null` | — | Controlled selected value(s). |
| `onChange` | `(value: T \| T[] \| null) => void` | — | Called when the selection changes. |
| `placeholder` | `string` | — | Placeholder text shown when nothing is selected. |
| `disabled` | `boolean` | `false` | Disables the trigger and prevents the popup from opening. |
| `invalid` | `boolean` | `false` | Applies a destructive outline to the trigger to signal a validation error. |

---

### Date & Time

#### Calendar

Full-featured calendar built on react-day-picker. Supports single, multiple, and range selection with optional month/year dropdowns.

- **Slug:** `calendar`
- **Import:** `import { Calendar } from "@/ascendra-ui"`
- **Showcase:** `/showcase/calendar`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `mode` | `'single' \| 'multiple' \| 'range'` | — | Selection mode. |
| `selected` | `Date \| Date[] \| DateRange \| undefined` | — | Controlled selected value. |
| `onSelect` | `function` | — | Called when the selection changes. |
| `showOutsideDays` | `boolean` | `true` | Show days from adjacent months. |
| `captionLayout` | `'label' \| 'dropdown' \| 'dropdown-months' \| 'dropdown-years'` | — | Caption style. Defaults to 'dropdown' when startMonth/endMonth are set. |
| `startMonth` | `Date` | — | Earliest month available — also enables the dropdown caption. |
| `endMonth` | `Date` | — | Latest month available. |
| `numberOfMonths` | `number` | `1` | Number of months to display side-by-side. |

---

#### Date Picker

Popover-based single date picker with a trigger button and an embedded Calendar.

- **Slug:** `date-picker`
- **Import:** `import { DatePicker } from "@/ascendra-ui"`
- **Showcase:** `/showcase/date-picker`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `Date \| undefined` | — | Controlled selected date. |
| `onChange` | `(date: Date \| undefined) => void` | — | Called when the date changes. |
| `placeholder` | `string` | `'Pick a date'` | Trigger button placeholder text. |
| `disabled` | `boolean` | `false` | Disables the trigger button. |
| `invalid` | `boolean` | `false` | Applies destructive outline to the trigger. |
| `fromYear` | `number` | — | Enables year/month dropdown starting from this year. |
| `toYear` | `number` | — | Enables year/month dropdown ending at this year. |
| `captionLayout` | `CalendarProps['captionLayout']` | — | Caption style passed to the inner Calendar. |

---

#### Date Range Picker

Popover-based date range picker with configurable month count and an embedded range Calendar.

- **Slug:** `date-range-picker`
- **Import:** `import { DateRangePicker } from "@/ascendra-ui"`
- **Showcase:** `/showcase/date-range-picker`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `DateRange \| undefined` | — | Controlled selected range ({ from, to }). |
| `onChange` | `(range: DateRange \| undefined) => void` | — | Called when the range changes. |
| `placeholder` | `string` | `'Pick a date range'` | Trigger button placeholder text. |
| `numberOfMonths` | `number` | `2` | Number of calendar months shown in the popover. |
| `disabled` | `boolean` | `false` | Disables the trigger button. |
| `invalid` | `boolean` | `false` | Applies destructive outline to the trigger. |
| `fromYear` | `number` | — | Enables year/month dropdown starting from this year. |
| `toYear` | `number` | — | Enables year/month dropdown ending at this year. |

---

### Navigation

#### Anchor

Styled link component with semantic color variants and keyboard focus states.

- **Slug:** `anchor`
- **Import:** `import { Anchor } from "@/ascendra-ui"`
- **Showcase:** `/showcase/anchor`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'primary' \| 'blue' \| 'muted'` | `'primary'` | Color variant. |
| `href` | `string` | — | Link destination URL. |

---

#### Nav

Sticky horizontal navigation bar with muted background and horizontally scrollable content area.

- **Slug:** `nav`
- **Import:** `import { Nav } from "@/ascendra-ui"`
- **Showcase:** `/showcase/nav`

**Props**

_No props — accepts standard HTML attributes._

---

#### Nav Link

Navigation link with an active underline indicator driven by the current pathname.

- **Slug:** `nav-link`
- **Import:** `import { NavLink, NavLinkBadge } from "@/ascendra-ui"`
- **Showcase:** `/showcase/nav-link`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `href` | `string` | — | Link destination URL. |
| `exact` | `boolean` | `false` | Only active when the path matches exactly. |

---

#### Header

Top navigation header with breadcrumb links, slash separators, chevrons, and action slots.

- **Slug:** `header`
- **Import:** `import { Header, HeaderLink, HeaderSlash, HeaderChevron, HeaderActions, HeaderLinks } from "@/ascendra-ui"`
- **Showcase:** `/showcase/header`

**Props**

_No props — accepts standard HTML attributes._

---

### Overlays

#### Dialog

Modal dialog with header, body, and footer slots. Centered overlay with max-w-sm default.

- **Slug:** `dialog`
- **Import:** `import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogBody, DialogFooter, DialogClose } from "@/ascendra-ui"`
- **Showcase:** `/showcase/dialog`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `showCloseButton` | `boolean` | `false` | Show the × close button in the top-right corner (on DialogContent). |
| `footer` | `ReactNode` | — | Footer content slot (on DialogContent). |

---

#### Sheet

Slide-out drawer panel that opens from any edge of the screen.

- **Slug:** `sheet`
- **Import:** `import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetBody, SheetFooter, SheetClose } from "@/ascendra-ui"`
- **Showcase:** `/showcase/sheet`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'` | Edge the sheet slides in from (on SheetContent). |
| `showCloseButton` | `boolean` | `true` | Show the × close button (on SheetContent). |

---

#### Dropdown Menu

Full-featured dropdown with items, separators, checkboxes, radio groups, and sub-menus.

- **Slug:** `dropdown-menu`
- **Import:** `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, DropdownMenuShortcut } from "@/ascendra-ui"`
- **Showcase:** `/showcase/dropdown-menu`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'default' \| 'destructive'` | `'default'` | Color variant for DropdownMenuItem. |
| `inset` | `boolean` | — | Add left padding to align items without icons (on DropdownMenuItem). |

---

### Tables & Data

#### Table

Data table with header, body, footer, scrollable container, and optional accent border and gradient background.

- **Slug:** `table`
- **Import:** `import { Table, TableWrapper, TableHeader, TableHeaderRow, TableBody, TableRow, TableHead, TableCell, TableFooter, TableFoot, EmptyBody } from "@/ascendra-ui"`
- **Showcase:** `/showcase/table`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `scrollable` | `boolean` | `false` | Enables scroll on the table container. |
| `vertical` | `boolean` | `false` | Enables vertical (y-axis) scroll. |
| `horizontal` | `boolean` | `true` | Enables horizontal (x-axis) scroll. |
| `height` | `number` | — | Max height in px when vertical scroll is enabled. |
| `minHeight` | `number` | — | Minimum height in px for the table container. |
| `border (TableWrapper)` | `BorderConfig` | — | Optional accent border on the outer wrapper. |
| `border (TableBody)` | `BorderConfig` | — | Optional accent border on the ::before panel element. |
| `bg (TableBody)` | `BgConfig` | — | Optional gradient background on the ::before panel. Removes solid bg when set. |
| `border.side` | `'t' \| 'l' \| 'r' \| 'b'` | `'t'` | Side the border appears on. |
| `border.stroke` | `1 \| 2 \| 3` | `3` | Border thickness in px. |
| `border.color` | `'blue' \| 'amber' \| 'purple' \| 'red' \| 'teal' \| 'orange' \| 'indigo' \| 'slate'` | `'orange'` | Accent color at 60% opacity. |
| `bg.style` | `'linear' \| 'radial' \| 'conic'` | `'linear'` | CSS gradient type. |
| `bg.side` | `'t' \| 'l' \| 'r' \| 'b'` | `'b'` | Gradient direction (linear only). |
| `bg.color` | `'blue' \| 'amber' \| 'purple' \| 'red' \| 'teal' \| 'orange' \| 'indigo' \| 'slate'` | `'orange'` | Start color at 7% opacity. |
| `bg.to` | `'transparent' \| 'white' \| 'black' \| AccentColor` | `'transparent'` | End stop color. Accent colors resolve to 500/60. |

---

#### Empty State

Placeholder for empty content areas with optional icon media and call-to-action.

- **Slug:** `empty`
- **Import:** `import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia } from "@/ascendra-ui"`
- **Showcase:** `/showcase/empty`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'default' \| 'icon'` | `'default'` | Media display style (on EmptyMedia). |

---

#### Data Table

Feature-rich data table with built-in search, filtering, sorting, column management, and pagination — composed via DataTableProvider and QueryProvider.

- **Slug:** `data-table`
- **Import:** `import { DataTable, DataTableHeader, DataTableHeaderRow, DataTableHead, DataTableBody, DataTableRow, DataTableCell, DataTableHighlight, DataTableWrapper, DataTableFoot, DataTableLoadingBody, DataTableEmptyBody, DataTableSearchInput, DataTableColumnManager, DataTableSortDropdown, DataTableFilterDropdown, DataTableFilterBar } from "@/ascendra-ui"`
- **Showcase:** `/showcase/data-table`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `key` | `keyof T` | — | Data property key for this column. |
| `label` | `string` | — | Column header label. |
| `type` | `'string' \| 'number' \| 'date'` | `'string'` | Data type — drives sort order and search formatting. |
| `sortable` | `boolean` | `true` | Set to false to remove the sort icon and click handler. |
| `freeze` | `boolean` | `false` | Always visible; cannot be hidden via the column manager. |
| `locked` | `boolean` | `false` | Column position cannot be changed by reordering. |
| `active` | `boolean` | `true` | Whether the column is visible by default. |
| `filter` | `boolean` | `false` | Whether the column appears in the filter picker. |
| `displayValue` | `(raw: string) => string` | — | Converts raw data values to labels in filter chips and options. |

---

### Layout

#### Card

Settings-style card with header, collapsible panel, panel items, field, crown badge, and footer. Supports accent border and gradient background on the panel.

- **Slug:** `card`
- **Import:** `import { Card, CardHeader, CardHeaderTitle, CardHeaderSubtitle, CardPanel, CardFooter, CardFooterIcon, CardPanelItem, CardPanelItemGroup, CardPanelItemCrown, CardPanelField } from "@/ascendra-ui"`
- **Showcase:** `/showcase/card`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `danger` | `boolean` | `false` | Applies red danger styling (on Card). |
| `collapseable` | `'expanded' \| 'collapsed'` | — | Enables collapse with toggle in CardHeader. |
| `hasError` | `boolean` | `false` | Shows a destructive outline ring when collapsed (on Card). |
| `border` | `BorderConfig` | — | Optional accent border on Card or CardPanel. |
| `bg` | `BgConfig` | — | Optional gradient background on CardPanel. |
| `collapsed` | `boolean` | — | Collapses the item/field to zero height (on CardPanelItem / CardPanelField). |
| `variant` | `'default' \| 'secondary' \| 'destructive' \| 'success' \| 'warning'` | `'default'` | Crown badge color (on CardPanelItemCrown). |
| `nudge` | `boolean` | `false` | Attention-pulse animation (on CardPanelItemCrown). |
| `nudgeVariant` | `'default' \| 'secondary' \| 'destructive' \| 'success' \| 'warning'` | `'warning'` | Nudge color override (on CardPanelItemCrown). |

---

#### Page Header

Page-level header with title, subtitle, and an action slot. Composes PageHeaderGroup, PageTitle, PageSubtitle, and PageHeaderAction.

- **Slug:** `page-header`
- **Import:** `import { PageHeader, PageHeaderGroup, PageTitle, PageSubtitle, PageHeaderAction } from "@/ascendra-ui"`
- **Showcase:** `/showcase/page-header`

**Props**

_No props — accepts standard HTML attributes._

---

#### Page Bar

Horizontal toolbar for search, filters, and primary actions above page content.

- **Slug:** `page-bar`
- **Import:** `import { PageBar, PageBarContent, PageBarAction } from "@/ascendra-ui"`
- **Showcase:** `/showcase/page-bar`

**Props**

_No props — accepts standard HTML attributes._

---

#### Aside Content

Aside panel with optional dimmed state and gradient mask for overflow content on mobile.

- **Slug:** `aside-content`
- **Import:** `import { AsideContent } from "@/ascendra-ui"`
- **Showcase:** `/showcase/aside-content`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `dimmed` | `boolean` | `false` | Applies a dim overlay on the aside. |

---

#### Item

Flexible list item with media, title, description, actions, header, and footer slots. Supports outline and muted variants.

- **Slug:** `item`
- **Import:** `import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions, ItemGroup, ItemSeparator, ItemHeader, ItemFooter } from "@/ascendra-ui"`
- **Showcase:** `/showcase/item`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'default' \| 'outline' \| 'muted'` | `'default'` | Border and background style of the item (on Item). |
| `size` | `'default' \| 'sm' \| 'xs'` | `'default'` | Padding and gap size (on Item). |
| `asChild` | `boolean` | `false` | Render as a child element using Radix Slot (on Item). |
| `variant` | `'default' \| 'icon' \| 'image'` | `'default'` | Media display type (on ItemMedia). |

---

### Tabs

#### Tabs

Tabbed navigation with dirty-state dot indicator and disabled tab support.

- **Slug:** `tabs`
- **Import:** `import { Tabs, TabList, TabTrigger, TabContent } from "@/ascendra-ui"`
- **Showcase:** `/showcase/tabs`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `defaultValue` | `string` | — | Initially active tab value (uncontrolled). |
| `value` | `string` | — | Controlled active tab value. |
| `onValueChange` | `(value: string) => void` | — | Callback when the active tab changes. |
| `disabled` | `boolean` | `false` | Disable a tab trigger (on TabTrigger). |
| `dirty` | `boolean` | `false` | Show unsaved-changes dot on a tab trigger (on TabTrigger). |

---

### Sidebar

#### Sidebar Menu

Expandable sidebar navigation with grouped menu sets, icon headers, and active link detection.

- **Slug:** `sidebar-menu`
- **Import:** `import { SideBarMenu, SideBarMenuHeader, SideBarMenuContent, SideBarMenuItem, SideBarMenuItemGroup, SideBarMenuSet, SideBarMenuSetTitle } from "@/ascendra-ui"`
- **Showcase:** `/showcase/sidebar-menu`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `basePath` | `string` | — | Base path used for active link detection (on SideBarMenu). |
| `icon` | `IconType` | — | Icon for the menu header (on SideBarMenuHeader). |
| `path` | `string` | — | Link path for the menu item (on SideBarMenuItem). |
| `alternate` | `'default' \| 'stand-alone'` | `'default'` | Layout variant for the menu item. |

---

### Utilities

#### Copy Text

Inline copy-to-clipboard trigger with icon feedback and an optional tooltip confirmation.

- **Slug:** `copy-text`
- **Import:** `import { CopyText } from "@/ascendra-ui"`
- **Showcase:** `/showcase/copy-text`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Text to copy to the clipboard. |
| `opaque` | `boolean` | `false` | Show the copy icon without hover (always visible). |
| `timeout` | `number` | `1200` | Duration in ms before resetting the copied state. |
| `showTooltip` | `boolean` | `false` | Show a "Copied" tooltip confirmation on click. |
| `onClick` | `(e: MouseEvent) => void \| Promise<string>` | — | Custom click handler; return a string to override what gets copied. |

---

#### Name Avatar

Auto-generated avatar from name initials with a deterministic background color derived from the name.

- **Slug:** `name-avatar`
- **Import:** `import { NameAvatar } from "@/ascendra-ui"`
- **Showcase:** `/showcase/name-avatar`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | `string` | — | Full name to generate initials from. |
| `size` | `number` | `28` | Avatar size in pixels. |
| `href` | `string` | — | Optional URL — wraps avatar in a link. |

---

#### Theme Toggle

Dark/light mode toggle button powered by next-themes.

- **Slug:** `theme-toggle`
- **Import:** `import { ThemeToggle } from "@/ascendra-ui"`
- **Showcase:** `/showcase/theme-toggle`

**Props**

_No props — accepts standard HTML attributes._

---

#### Pagination Button

Small bordered navigation button for pagination controls.

- **Slug:** `pagination-button`
- **Import:** `import { PaginationButton } from "@/ascendra-ui"`
- **Showcase:** `/showcase/pagination-button`

**Props**

_No props — accepts standard HTML attributes._

---

#### Row Action Button

Icon button for table row actions — hidden by default, visible on row hover.

- **Slug:** `row-action-button`
- **Import:** `import { RowActionButton } from "@/ascendra-ui"`
- **Showcase:** `/showcase/row-action-button`

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `opaque` | `boolean` | `false` | Show the button without row hover (always visible). |

---

#### Scroll To Top

Behavior-only component that scrolls the window to the top on every route change and disables browser scroll restoration.

- **Slug:** `scroll-to-top`
- **Import:** `import { ScrollToTop } from "@/ascendra-ui"`
- **Showcase:** `/showcase/scroll-to-top`

**Props**

_No props — accepts standard HTML attributes._

---
