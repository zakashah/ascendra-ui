<!-- ascendra-ui-version: 1.0.3 -->
<!-- ascendra-ui-commit: edc0ba280401f411b29f11323d6492b6c8af050f -->
# Ascendra UI — UI Reference

> Auto-generated on 2026-06-07 · ascendra-ui v1.0.3
> Run `npm run docs:generate` after any registry or config change.

---

## Overview

**Primitive components:** 51  
**Composite forms:** 10  
**Dialogs:** 12  
**Sheets:** 10  
**Drawers:** 8  
**Dashboards:** 10  
**Reports:** 10

### Primitive components by category

| Category | Components |
|---|---|
| Feedback & Status | Rating, Simple Badge, Bubble Badge, Status Dot, Simple Alert, Pro Badge, Unsaved Changes Bar, Progress & Stepper, Skeleton, Toast |
| Forms & Inputs | Button, Input, Input Group, Checkbox, Radio Group, Switch, Select, Field, Table Lookup, Combobox, File Upload, Rich Text Editor, Color Picker |
| Navigation | Anchor, Nav Link, Header, Nav |
| Overlays | Dialog, Sheet, Dropdown Menu, Tooltip, Command Palette |
| Tables & Data | Table, Empty State, Data Table |
| Layout | Card, Page Header, Page Bar, Aside Content, Item |
| Tabs | Tabs |
| Sidebar | Sidebar Menu |
| Utilities | Copy Text, Name Avatar, Theme Toggle, Pagination Button, Row Action Button, Scroll To Top |
| Date & Time | Calendar, Date Picker, Date Range Picker |

---

## Part 1 — Primitive Components

> These are the individual building blocks. Import from `@/ascendra-ui` (or `@/ascendra-ui/shadcn` where noted).
> The **Used in** section shows which composite patterns reference each component — use it to find real-world examples.

### Feedback & Status

#### Simple Badge

Small inline status badge for labeling content with semantic color variants.

- **Import:** `import { SimpleBadge } from "@/ascendra-ui"`
- **Showcase:** [/showcase/feedback/simple-badge](/showcase/feedback/simple-badge)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'default' \| 'secondary' \| 'orange' \| 'green' \| 'blue' \| 'red' \| 'amber' \| 'violet' \| 'warning' \| 'positive' \| 'info'` | `'default'` | Color variant of the badge. |
| `asChild` | `boolean` | `false` | Render as a child element using Radix Slot. |
| `className` | `string` | — | Additional CSS classes. |

**Used in**

- _Forms:_ [Appointment Booking](/showcase/forms/appointment-booking)
- _Sheets:_ [Employee Profile](/showcase/sheets), [Order Details](/showcase/sheets), [Support Ticket](/showcase/sheets), [Customer Profile](/showcase/sheets), [Invoice Preview](/showcase/sheets), [Project Overview](/showcase/sheets), [Audit Log Entry](/showcase/sheets), [Product Details](/showcase/sheets), [Account Settings](/showcase/sheets)
- _Drawers:_ [Smart Filter](/showcase/drawers)

---

#### Bubble Badge

Gradient pill badges with inset highlight, available in multiple sizes and colors.

- **Import:** `import { BubbleBadge } from "@/ascendra-ui"`
- **Showcase:** [/showcase/feedback/bubble-badge](/showcase/feedback/bubble-badge)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'sm' \| 'md' \| 'lg'` | `'sm'` | Size of the badge. |
| `color` | `'gray' \| 'blue' \| 'green' \| 'red' \| 'amber' \| 'orange' \| 'violet' \| 'warning' \| 'positive' \| 'info'` | `'gray'` | Color variant. |

**Used in**

- _Drawers:_ [Notification Center](/showcase/drawers)

---

#### Status Dot

Tiny status indicator dot with a halo shadow ring, available in semantic colors.

- **Import:** `import { StatusDot } from "@/ascendra-ui"`
- **Showcase:** [/showcase/feedback/status-dot](/showcase/feedback/status-dot)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'orange' \| 'emerald' \| 'sky' \| 'violet' \| 'rose' \| 'amber' \| 'red' \| 'primary' \| 'gray' \| 'warning' \| 'positive' \| 'info'` | `'gray'` | Color variant. |

**Used in**

- _Sheets:_ [Support Ticket](/showcase/sheets), [Customer Profile](/showcase/sheets), [Project Overview](/showcase/sheets), [Product Details](/showcase/sheets)
- _Drawers:_ [Event Preview](/showcase/drawers), [Notification Center](/showcase/drawers)

---

#### Simple Alert

Compact alert notification box with semantic severity variants and an optional icon.

- **Import:** `import { SimpleAlert, AlertIcon } from "@/ascendra-ui"`
- **Showcase:** [/showcase/feedback/simple-alert](/showcase/feedback/simple-alert)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'default' \| 'secondary' \| 'destructive' \| 'success' \| 'warning' \| 'amber' \| 'primary'` | `'default'` | Alert severity variant. |
| `icon` | `React.ComponentType<{ className?: string; strokeWidth?: number }>` | — | Icon component to display (defaults to InfoIcon). |

**Used in**

- _Forms:_ [Support Ticket](/showcase/forms/support-ticket), [Appointment Booking](/showcase/forms/appointment-booking), [Create Product Listing](/showcase/forms/create-product), [Project Kickoff](/showcase/forms/project-kickoff), [Employee Onboarding Stepper](/showcase/forms/employee-onboarding)
- _Dialogs:_ [Payment Failed](/showcase/dialogs)
- _Sheets:_ [Invoice Preview](/showcase/sheets), [Audit Log Entry](/showcase/sheets)
- _Drawers:_ [Danger Zone](/showcase/drawers)

---

#### Toast

Lightweight, accessible toast notifications powered by Sonner. Mount <Toaster /> once in the root layout and call toast() from anywhere.

- **Import:** `import { toast, Toaster } from "@/ascendra-ui"`
- **Showcase:** [/showcase/feedback/toasts](/showcase/feedback/toasts)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `description` | `string` | — | Optional supporting text shown below the title. |
| `action` | `{ label: string; onClick: () => void }` | — | Inline action button shown inside the toast. |
| `duration` | `number` | `4000` | Auto-dismiss delay in milliseconds. Pass Infinity to persist. |
| `id` | `string \| number` | — | Unique ID for updating or dismissing a specific toast. |

---

#### Pro Badge

Premium feature indicator with a blue-purple gradient treatment.

- **Import:** `import { ProBadge } from "@/ascendra-ui"`
- **Showcase:** [/showcase/feedback/pro-badge](/showcase/feedback/pro-badge)

**Props**

_No custom props — accepts standard HTML attributes._

---

#### Unsaved Changes Bar

Fixed bottom bar that surfaces when a form has unsaved changes, with save/reset actions and status states.

- **Import:** `import { UnsavedChangesBar } from "@/ascendra-ui"`
- **Showcase:** [/showcase/feedback/unsaved-changes-bar](/showcase/feedback/unsaved-changes-bar)

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

**Used in**

- _Forms:_ [Contact & Inquiry](/showcase/forms/contact-inquiry), [User Profile Settings](/showcase/forms/user-profile), [Support Ticket](/showcase/forms/support-ticket), [Appointment Booking](/showcase/forms/appointment-booking), [Job Application](/showcase/forms/job-application), [Financial Transaction](/showcase/forms/financial-transaction), [Create Product Listing](/showcase/forms/create-product), [Project Kickoff](/showcase/forms/project-kickoff), [Employee Onboarding Stepper](/showcase/forms/employee-onboarding)

---

#### Progress & Stepper

ProgressBar wraps Radix Progress with size and color variants plus an indeterminate animation. Stepper is a fully custom horizontal step indicator with four statuses.

- **Import:** `import { ProgressBar, Stepper } from "@/ascendra-ui"`
- **Showcase:** [/showcase/feedback/progress](/showcase/feedback/progress)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | — | ProgressBar — progress value 0–100. Omit for indeterminate. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | ProgressBar — bar height. |
| `color` | `'default' \| 'success' \| 'warning' \| 'destructive' \| 'info'` | `'default'` | ProgressBar — fill color. |
| `indeterminate` | `boolean` | `false` | ProgressBar — looping animation when progress is unknown. |
| `steps` | `StepperItem[]` | — | Stepper — array of step objects with label, optional description, and optional status. |
| `currentStep` | `number` | — | Stepper — active step index. Drives completed/active/pending status automatically. |

---

#### Skeleton

Animated loading placeholder. Includes preset compositions for text blocks, user rows, stat tiles, cards, and table rows — built on shadcn skeleton.

- **Import:** `import { Skeleton, SkeletonText, SkeletonUser, SkeletonCard, SkeletonTableRow, SkeletonTable, SkeletonStat } from "@/ascendra-ui"`
- **Showcase:** [/showcase/feedback/skeleton](/showcase/feedback/skeleton)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `className` | `string` | — | Skeleton — additional CSS classes to set size and shape. |
| `lines` | `number` | `3` | SkeletonText — number of text lines. |
| `rows` | `number` | `5` | SkeletonTable — number of data rows. |

---

#### Rating

Star rating display and input with half-star precision, multiple sizes, and semantic color variants.

- **Import:** `import { Rating } from "@/ascendra-ui"`
- **Showcase:** [/showcase/feedback/rating](/showcase/feedback/rating)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `rating` | `number` | — | Current rating value (0–max). |
| `max` | `number` | `5` | Total number of stars. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Star size. |
| `color` | `'default' \| 'amber' \| 'orange' \| 'red' \| 'green' \| 'blue' \| 'violet'` | `'default'` | Fill color of active stars. |
| `precision` | `'full' \| 'half'` | `'half'` | Whether to render half-star fills for fractional ratings. |
| `showValue` | `boolean` | `false` | Show numeric value label next to the stars. |
| `onChange` | `(value: number) => void` | — | When provided, enables click-to-rate interaction. |
| `readOnly` | `boolean` | `false` | Disables interaction even when onChange is present. |

---

### Forms & Inputs

#### Button

Primary CTA button with a 4-layer shadow and gloss system, available in multiple variants and sizes.

- **Import:** `import { Button } from "@/ascendra-ui"`
- **Showcase:** [/showcase/inputs/button](/showcase/inputs/button)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'destructive' \| 'ghost' \| 'link'` | `'primary'` | Visual style of the button. |
| `size` | `'xs' \| 'sm' \| 'default' \| 'lg' \| 'icon'` | `'default'` | Size of the button. |
| `asChild` | `boolean` | `false` | Render as a child element using Radix Slot. |
| `disabled` | `boolean` | `false` | Disables the button. |

**Used in**

- _Forms:_ [Contact & Inquiry](/showcase/forms/contact-inquiry), [Search & Filter Panel](/showcase/forms/search-filter)
- _Dialogs:_ [Archive Project](/showcase/dialogs), [Transfer Ownership](/showcase/dialogs), [Delete Record](/showcase/dialogs), [Delete Account](/showcase/dialogs), [Rename Item](/showcase/dialogs), [Add Note](/showcase/dialogs), [Invite Member](/showcase/dialogs), [Change Password](/showcase/dialogs), [Session Expired](/showcase/dialogs), [Payment Failed](/showcase/dialogs), [Feature Announcement](/showcase/dialogs), [Upgrade Required](/showcase/dialogs)
- _Sheets:_ [Order Details](/showcase/sheets), [Support Ticket](/showcase/sheets), [Notification Preferences](/showcase/sheets), [Customer Profile](/showcase/sheets), [Invoice Preview](/showcase/sheets), [Project Overview](/showcase/sheets), [Audit Log Entry](/showcase/sheets), [Product Details](/showcase/sheets), [Account Settings](/showcase/sheets)
- _Drawers:_ [Quick Actions](/showcase/drawers), [Smart Filter](/showcase/drawers), [Share Sheet](/showcase/drawers), [Event Preview](/showcase/drawers), [Media Attachment](/showcase/drawers), [Assign Task](/showcase/drawers), [Notification Center](/showcase/drawers), [Danger Zone](/showcase/drawers)

---

#### Input

Text input with smart focus: shadow ring for pointer interactions, outline for keyboard navigation.

- **Import:** `import { Input } from "@/ascendra-ui"`
- **Showcase:** [/showcase/inputs/input](/showcase/inputs/input)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `full` | `boolean` | `false` | Expands input to full container width. |
| `disabled` | `boolean` | `false` | Disables the input. |
| `placeholder` | `string` | — | Placeholder text. |

**Used in**

- _Forms:_ [Contact & Inquiry](/showcase/forms/contact-inquiry), [User Profile Settings](/showcase/forms/user-profile), [Support Ticket](/showcase/forms/support-ticket), [Appointment Booking](/showcase/forms/appointment-booking), [Job Application](/showcase/forms/job-application), [Financial Transaction](/showcase/forms/financial-transaction), [Create Product Listing](/showcase/forms/create-product), [Project Kickoff](/showcase/forms/project-kickoff), [Search & Filter Panel](/showcase/forms/search-filter), [Employee Onboarding Stepper](/showcase/forms/employee-onboarding)
- _Dialogs:_ [Delete Account](/showcase/dialogs), [Rename Item](/showcase/dialogs), [Invite Member](/showcase/dialogs), [Change Password](/showcase/dialogs)
- _Drawers:_ [Assign Task](/showcase/drawers), [Danger Zone](/showcase/drawers)

---

#### Input Group

Composite input system with prefix/suffix text, icon addons, and button addons.

- **Import:** `import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupInput, InputGroupTextarea } from "@/ascendra-ui"`
- **Showcase:** [/showcase/inputs/input-group](/showcase/inputs/input-group)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `align` | `'inline-start' \| 'inline-end' \| 'block-start' \| 'block-end'` | — | Position of the addon relative to the input (on InputGroupAddon). |

**Used in**

- _Forms:_ [Job Application](/showcase/forms/job-application), [Financial Transaction](/showcase/forms/financial-transaction), [Create Product Listing](/showcase/forms/create-product), [Project Kickoff](/showcase/forms/project-kickoff), [Employee Onboarding Stepper](/showcase/forms/employee-onboarding)
- _Dialogs:_ [Add Note](/showcase/dialogs)

---

#### Checkbox

Custom checkbox with gradient overlay and shadow ring on the checked state.

- **Import:** `import { Checkbox } from "@/ascendra-ui"`
- **Showcase:** [/showcase/inputs/checkbox](/showcase/inputs/checkbox)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean \| "indeterminate"` | — | Controlled checked state. |
| `defaultChecked` | `boolean` | — | Uncontrolled default checked state. |
| `disabled` | `boolean` | `false` | Disables the checkbox. |
| `onCheckedChange` | `(checked: boolean) => void` | — | Callback fired when the state changes. |

**Used in**

- _Forms:_ [Support Ticket](/showcase/forms/support-ticket), [Job Application](/showcase/forms/job-application), [Create Product Listing](/showcase/forms/create-product), [Project Kickoff](/showcase/forms/project-kickoff), [Search & Filter Panel](/showcase/forms/search-filter), [Employee Onboarding Stepper](/showcase/forms/employee-onboarding)
- _Dialogs:_ [Transfer Ownership](/showcase/dialogs), [Upgrade Required](/showcase/dialogs)

---

#### Radio Group

Custom radio group with glow and gloss effects on the selected item.

- **Import:** `import { RadioGroup, RadioGroupItem } from "@/ascendra-ui"`
- **Showcase:** [/showcase/inputs/radio-group](/showcase/inputs/radio-group)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Controlled selected value. |
| `defaultValue` | `string` | — | Uncontrolled default selected value. |
| `disabled` | `boolean` | `false` | Disables the entire group. |
| `onValueChange` | `(value: string) => void` | — | Callback fired when selection changes. |
| `wrapperClassName` | `string` | — | Additional classes for the item wrapper (on RadioGroupItem). |

**Used in**

- _Forms:_ [Support Ticket](/showcase/forms/support-ticket), [Appointment Booking](/showcase/forms/appointment-booking), [Financial Transaction](/showcase/forms/financial-transaction), [Search & Filter Panel](/showcase/forms/search-filter), [Employee Onboarding Stepper](/showcase/forms/employee-onboarding)

---

#### Switch

Toggle switch with a gradient overlay on the active track.

- **Import:** `import { Switch } from "@/ascendra-ui"`
- **Showcase:** [/showcase/inputs/switch](/showcase/inputs/switch)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean` | — | Controlled checked state. |
| `defaultChecked` | `boolean` | — | Uncontrolled default checked state. |
| `disabled` | `boolean` | `false` | Disables the switch. |
| `onCheckedChange` | `(checked: boolean) => void` | — | Callback fired when toggled. |

**Used in**

- _Forms:_ [User Profile Settings](/showcase/forms/user-profile), [Support Ticket](/showcase/forms/support-ticket), [Create Product Listing](/showcase/forms/create-product), [Employee Onboarding Stepper](/showcase/forms/employee-onboarding)
- _Sheets:_ [Employee Profile](/showcase/sheets), [Notification Preferences](/showcase/sheets), [Account Settings](/showcase/sheets)
- _Drawers:_ [Smart Filter](/showcase/drawers)

---

#### Select

Custom select dropdown with scroll buttons and size variants.

- **Import:** `import { Select, SelectTrigger, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectValue, SelectSeparator } from "@/ascendra-ui"`
- **Showcase:** [/showcase/inputs/select](/showcase/inputs/select)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'sm' \| 'default'` | `'default'` | Size of the trigger (on SelectTrigger). |
| `position` | `'popper' \| 'item-aligned'` | `'popper'` | Positioning strategy of the dropdown (on SelectContent). |

**Used in**

- _Forms:_ [Contact & Inquiry](/showcase/forms/contact-inquiry), [User Profile Settings](/showcase/forms/user-profile), [Support Ticket](/showcase/forms/support-ticket), [Job Application](/showcase/forms/job-application), [Financial Transaction](/showcase/forms/financial-transaction), [Create Product Listing](/showcase/forms/create-product), [Project Kickoff](/showcase/forms/project-kickoff), [Employee Onboarding Stepper](/showcase/forms/employee-onboarding)
- _Dialogs:_ [Invite Member](/showcase/dialogs)

---

#### Field

Compound form field wrapper with label, description, error display, and orientation variants.

- **Import:** `import { Field, FieldSet, FieldLegend, FieldGroup, FieldContent, FieldLabel, FieldTitle, FieldDescription, FieldSeparator, FieldError } from "@/ascendra-ui"`
- **Showcase:** [/showcase/inputs/field](/showcase/inputs/field)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `orientation` | `'vertical' \| 'horizontal' \| 'responsive'` | `'vertical'` | Layout direction of the label and control (on Field). |
| `variant` | `'legend' \| 'label'` | `'legend'` | Typography style for FieldLegend. |
| `errors` | `Array<{ message?: string }>` | — | Array of error objects — deduplicates and displays messages (on FieldError). |

**Used in**

- _Forms:_ [Contact & Inquiry](/showcase/forms/contact-inquiry), [User Profile Settings](/showcase/forms/user-profile), [Support Ticket](/showcase/forms/support-ticket), [Appointment Booking](/showcase/forms/appointment-booking), [Job Application](/showcase/forms/job-application), [Financial Transaction](/showcase/forms/financial-transaction), [Create Product Listing](/showcase/forms/create-product), [Project Kickoff](/showcase/forms/project-kickoff), [Search & Filter Panel](/showcase/forms/search-filter), [Employee Onboarding Stepper](/showcase/forms/employee-onboarding)
- _Dialogs:_ [Delete Account](/showcase/dialogs), [Rename Item](/showcase/dialogs), [Add Note](/showcase/dialogs), [Invite Member](/showcase/dialogs), [Change Password](/showcase/dialogs)

---

#### Combobox

Searchable dropdown with single and multi-select (chips) modes, built on Base UI.

- **Import:** `import { Combobox, ComboboxInput, ComboboxContent, ComboboxList, ComboboxItem, ComboboxGroup, ComboboxLabel, ComboboxEmpty, ComboboxSeparator, ComboboxChips, ComboboxChip, ComboboxChipsInput } from "@/ascendra-ui"`
- **Showcase:** [/showcase/inputs/combobox](/showcase/inputs/combobox)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `showTrigger` | `boolean` | `true` | Show the chevron toggle button (on ComboboxInput). |
| `showClear` | `boolean` | `false` | Show the × clear button (on ComboboxInput). |
| `showRemove` | `boolean` | `true` | Show the × remove button on each chip (on ComboboxChip). |
| `disabled` | `boolean` | `false` | Disables the input (on ComboboxInput). |

**Used in**

- _Forms:_ [User Profile Settings](/showcase/forms/user-profile), [Support Ticket](/showcase/forms/support-ticket), [Appointment Booking](/showcase/forms/appointment-booking), [Job Application](/showcase/forms/job-application), [Create Product Listing](/showcase/forms/create-product), [Project Kickoff](/showcase/forms/project-kickoff), [Search & Filter Panel](/showcase/forms/search-filter), [Employee Onboarding Stepper](/showcase/forms/employee-onboarding)

---

#### Table Lookup

Table-based lookup field for large datasets — supports single and multi-select with chips, async search, and configurable multi-column display.

- **Import:** `import { TableLookup } from "@/ascendra-ui"`
- **Showcase:** [/showcase/inputs/table-lookup](/showcase/inputs/table-lookup)

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

**Used in**

- _Forms:_ [Financial Transaction](/showcase/forms/financial-transaction), [Employee Onboarding Stepper](/showcase/forms/employee-onboarding)

---

#### File Upload

Fully custom file upload with three variants (dropzone, button, inline) and five controlled states (idle, dragover, uploading, success, error). Includes drag-and-drop, type validation, size limits, and a progress bar.

- **Import:** `import { FileUpload } from "@/ascendra-ui"`
- **Showcase:** [/showcase/inputs/file-upload](/showcase/inputs/file-upload)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'dropzone' \| 'button' \| 'inline'` | `'dropzone'` | Layout variant. |
| `accept` | `string` | — | Comma-separated accepted extensions or MIME types. |
| `maxSize` | `number` | — | Max file size in bytes — validated client-side. |
| `multiple` | `boolean` | `false` | Allow selecting multiple files. |
| `state` | `'idle' \| 'dragover' \| 'uploading' \| 'success' \| 'error'` | `'idle'` | Controlled state override. |
| `uploadProgress` | `number` | — | Progress 0–100 shown during uploading state. |
| `errorMessage` | `string` | — | Error text in error state. |
| `onFiles` | `(files: File[]) => void` | — | Called with validated files when selected. |
| `disabled` | `boolean` | `false` | Disables all interactions. |

---

#### Rich Text Editor

Tiptap-based rich text editor with a 6-action toolbar (bold, italic, strike, bullet list, numbered list, link). Controlled value/onChange API compatible with react-hook-form. Matches input ring and shadow tokens.

- **Import:** `import { RichTextEditor } from "@/ascendra-ui"`
- **Showcase:** [/showcase/inputs/rich-text-editor](/showcase/inputs/rich-text-editor)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Controlled HTML content. |
| `onChange` | `(html: string) => void` | — | Called with full HTML on every change. |
| `placeholder` | `string` | `'Write something…'` | Placeholder shown in the empty editor. |
| `readOnly` | `boolean` | `false` | Hides toolbar and disables editing. |
| `minHeight` | `number` | `120` | Min height of the editor area in px. |
| `className` | `string` | — | Additional CSS classes on the container. |

---

#### Color Picker

Fully custom color picker using Radix DropdownMenu as the floating shell — the same token-aligned popover as all other dropdowns. Supports HSL sliders, hex input, and a configurable preset grid.

- **Import:** `import { ColorPicker } from "@/ascendra-ui"`
- **Showcase:** [/showcase/inputs/color-picker](/showcase/inputs/color-picker)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | `'#2563eb'` | Controlled hex color value (6-digit). |
| `onChange` | `(hex: string) => void` | — | Called with the new hex when the color changes. |
| `presets` | `string[]` | — | Array of hex preset swatches. Defaults to a 30-color system palette. |
| `presetsOnly` | `boolean` | `false` | Hide sliders and hex input — show only the preset grid. |
| `disabled` | `boolean` | `false` | Prevents opening the picker. |
| `className` | `string` | — | Additional CSS classes on the trigger button. |

---

### Date & Time

#### Calendar

Full-featured calendar built on react-day-picker. Supports single, multiple, and range selection with optional month/year dropdowns.

- **Import:** `import { Calendar } from "@/ascendra-ui"`
- **Showcase:** [/showcase/date/calendar](/showcase/date/calendar)

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

- **Import:** `import { DatePicker } from "@/ascendra-ui"`
- **Showcase:** [/showcase/date/date-picker](/showcase/date/date-picker)

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

**Used in**

- _Forms:_ [Appointment Booking](/showcase/forms/appointment-booking), [Job Application](/showcase/forms/job-application), [Financial Transaction](/showcase/forms/financial-transaction), [Employee Onboarding Stepper](/showcase/forms/employee-onboarding)

---

#### Date Range Picker

Popover-based date range picker with configurable month count and an embedded range Calendar.

- **Import:** `import { DateRangePicker } from "@/ascendra-ui"`
- **Showcase:** [/showcase/date/date-range-picker](/showcase/date/date-range-picker)

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

**Used in**

- _Forms:_ [Financial Transaction](/showcase/forms/financial-transaction), [Project Kickoff](/showcase/forms/project-kickoff), [Search & Filter Panel](/showcase/forms/search-filter)

---

### Navigation

#### Anchor

Styled link component with semantic color variants and keyboard focus states.

- **Import:** `import { Anchor } from "@/ascendra-ui"`
- **Showcase:** [/showcase/nav/anchor](/showcase/nav/anchor)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'primary' \| 'blue' \| 'muted'` | `'primary'` | Color variant. |
| `href` | `string` | — | Link destination URL. |

---

#### Nav

Sticky horizontal navigation bar with muted background and horizontally scrollable content area.

- **Import:** `import { Nav } from "@/ascendra-ui"`
- **Showcase:** [/showcase/nav/nav](/showcase/nav/nav)

**Props**

_No custom props — accepts standard HTML attributes._

---

#### Nav Link

Navigation link with an active underline indicator driven by the current pathname.

- **Import:** `import { NavLink, NavLinkBadge } from "@/ascendra-ui"`
- **Showcase:** [/showcase/nav/nav-link](/showcase/nav/nav-link)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `href` | `string` | — | Link destination URL. |
| `exact` | `boolean` | `false` | Only active when the path matches exactly. |

---

#### Header

Top navigation header with breadcrumb links, slash separators, chevrons, and action slots.

- **Import:** `import { Header, HeaderLink, HeaderSlash, HeaderChevron, HeaderActions, HeaderLinks } from "@/ascendra-ui"`
- **Showcase:** [/showcase/nav/header](/showcase/nav/header)

**Props**

_No custom props — accepts standard HTML attributes._

---

### Overlays

#### Dialog

Modal dialog with header, body, and footer slots. Centered overlay with max-w-sm default.

- **Import:** `import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogBody, DialogFooter, DialogClose } from "@/ascendra-ui"`
- **Showcase:** [/showcase/overlay/dialog](/showcase/overlay/dialog)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `showCloseButton` | `boolean` | `false` | Show the × close button in the top-right corner (on DialogContent). |
| `footer` | `ReactNode` | — | Footer content slot (on DialogContent). |

**Used in**

- _Dialogs:_ [Archive Project](/showcase/dialogs), [Transfer Ownership](/showcase/dialogs), [Delete Record](/showcase/dialogs), [Delete Account](/showcase/dialogs), [Rename Item](/showcase/dialogs), [Add Note](/showcase/dialogs), [Invite Member](/showcase/dialogs), [Change Password](/showcase/dialogs), [Session Expired](/showcase/dialogs), [Payment Failed](/showcase/dialogs), [Feature Announcement](/showcase/dialogs), [Upgrade Required](/showcase/dialogs)

---

#### Sheet

Slide-out drawer panel that opens from any edge of the screen.

- **Import:** `import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetBody, SheetFooter, SheetClose } from "@/ascendra-ui"`
- **Showcase:** [/showcase/overlay/sheet](/showcase/overlay/sheet)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'` | Edge the sheet slides in from (on SheetContent). |
| `showCloseButton` | `boolean` | `true` | Show the × close button (on SheetContent). |

**Used in**

- _Sheets:_ [Employee Profile](/showcase/sheets), [Order Details](/showcase/sheets), [Support Ticket](/showcase/sheets), [Notification Preferences](/showcase/sheets), [Customer Profile](/showcase/sheets), [Invoice Preview](/showcase/sheets), [Project Overview](/showcase/sheets), [Audit Log Entry](/showcase/sheets), [Product Details](/showcase/sheets), [Account Settings](/showcase/sheets)

---

#### Dropdown Menu

Full-featured dropdown with items, separators, checkboxes, radio groups, and sub-menus.

- **Import:** `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, DropdownMenuShortcut } from "@/ascendra-ui"`
- **Showcase:** [/showcase/overlay/dropdown-menu](/showcase/overlay/dropdown-menu)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'default' \| 'destructive'` | `'default'` | Color variant for DropdownMenuItem. |
| `inset` | `boolean` | — | Add left padding to align items without icons (on DropdownMenuItem). |

---

#### Tooltip

Floating label that appears on hover or focus. Wraps Radix UI Tooltip with TooltipProvider, all four placements, and rich content support.

- **Import:** `import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/ascendra-ui/shadcn"`
- **Showcase:** [/showcase/overlay/tooltips](/showcase/overlay/tooltips)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` | Which side the tooltip appears on (on TooltipContent). |
| `sideOffset` | `number` | `4` | Distance in px between trigger and tooltip (on TooltipContent). |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | Alignment relative to the trigger (on TooltipContent). |
| `delayDuration` | `number` | `700` | Hover delay in ms before showing (on TooltipProvider). |

---

#### Command Palette

Keyboard-first command palette dialog built on shadcn Command + Dialog. Groups commands with icons and shortcuts. Registers ⌘K/Ctrl+K via useCommandPalette hook.

- **Import:** `import { CommandPalette, useCommandPalette } from "@/ascendra-ui"`
- **Showcase:** [/showcase/overlay/command-palette](/showcase/overlay/command-palette)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controlled open state. |
| `onOpenChange` | `(open: boolean) => void` | — | Called when open state changes. |
| `groups` | `CommandPaletteGroup[]` | — | Array of grouped command items. |
| `placeholder` | `string` | `'Search commands…'` | Search input placeholder. |
| `emptyMessage` | `string` | `'No results found.'` | Message shown when no items match. |

---

### Tables & Data

#### Table

Data table with header, body, footer, scrollable container, and optional accent border and gradient background.

- **Import:** `import { Table, TableWrapper, TableHeader, TableHeaderRow, TableBody, TableRow, TableHead, TableCell, TableFooter, TableFoot, EmptyBody } from "@/ascendra-ui"`
- **Showcase:** [/showcase/data-table/table](/showcase/data-table/table)

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

- **Import:** `import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia } from "@/ascendra-ui"`
- **Showcase:** [/showcase/data-table/empty](/showcase/data-table/empty)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'default' \| 'icon'` | `'default'` | Media display style (on EmptyMedia). |

---

#### Data Table

Feature-rich data table with built-in search, filtering, sorting, column management, and pagination — composed via DataTableProvider and QueryProvider.

- **Import:** `import { DataTable, DataTableHeader, DataTableHeaderRow, DataTableHead, DataTableBody, DataTableRow, DataTableCell, DataTableHighlight, DataTableWrapper, DataTableFoot, DataTableLoadingBody, DataTableEmptyBody, DataTableSearchInput, DataTableColumnManager, DataTableSortDropdown, DataTableFilterDropdown, DataTableFilterBar } from "@/ascendra-ui"`
- **Showcase:** [/showcase/data-table](/showcase/data-table)

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

- **Import:** `import { Card, CardHeader, CardHeaderTitle, CardHeaderSubtitle, CardPanel, CardFooter, CardFooterIcon, CardPanelItem, CardPanelItemGroup, CardPanelItemCrown, CardPanelField } from "@/ascendra-ui"`
- **Showcase:** [/showcase/layout/card](/showcase/layout/card)

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

- **Import:** `import { PageHeader, PageHeaderGroup, PageTitle, PageSubtitle, PageHeaderAction } from "@/ascendra-ui"`
- **Showcase:** [/showcase/layout/page-header](/showcase/layout/page-header)

**Props**

_No custom props — accepts standard HTML attributes._

---

#### Page Bar

Horizontal toolbar for search, filters, and primary actions above page content.

- **Import:** `import { PageBar, PageBarContent, PageBarAction } from "@/ascendra-ui"`
- **Showcase:** [/showcase/layout/page-bar](/showcase/layout/page-bar)

**Props**

_No custom props — accepts standard HTML attributes._

---

#### Aside Content

Aside panel with optional dimmed state and gradient mask for overflow content on mobile.

- **Import:** `import { AsideContent } from "@/ascendra-ui"`
- **Showcase:** [/showcase/layout/aside-content](/showcase/layout/aside-content)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `dimmed` | `boolean` | `false` | Applies a dim overlay on the aside. |

---

#### Item

Flexible list item with media, title, description, actions, header, and footer slots. Supports outline and muted variants.

- **Import:** `import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions, ItemGroup, ItemSeparator, ItemHeader, ItemFooter } from "@/ascendra-ui"`
- **Showcase:** [/showcase/layout/item](/showcase/layout/item)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'default' \| 'outline' \| 'muted'` | `'default'` | Border and background style of the item (on Item). |
| `size` | `'default' \| 'sm' \| 'xs'` | `'default'` | Padding and gap size (on Item). |
| `asChild` | `boolean` | `false` | Render as a child element using Radix Slot (on Item). |
| `variant` | `'default' \| 'icon' \| 'image'` | `'default'` | Media display type (on ItemMedia). |

**Used in**

- _Sheets:_ [Employee Profile](/showcase/sheets), [Order Details](/showcase/sheets), [Support Ticket](/showcase/sheets), [Customer Profile](/showcase/sheets), [Invoice Preview](/showcase/sheets), [Project Overview](/showcase/sheets)
- _Drawers:_ [Quick Actions](/showcase/drawers), [Smart Filter](/showcase/drawers), [Assign Task](/showcase/drawers)

---

### Tabs

#### Tabs

Tabbed navigation with dirty-state dot indicator and disabled tab support.

- **Import:** `import { Tabs, TabList, TabTrigger, TabContent } from "@/ascendra-ui"`
- **Showcase:** [/showcase/tabs](/showcase/tabs)

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

- **Import:** `import { SideBarMenu, SideBarMenuHeader, SideBarMenuContent, SideBarMenuItem, SideBarMenuItemGroup, SideBarMenuSet, SideBarMenuSetTitle } from "@/ascendra-ui"`
- **Showcase:** [/showcase/sidebar-menu](/showcase/sidebar-menu)

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

- **Import:** `import { CopyText } from "@/ascendra-ui"`
- **Showcase:** [/showcase/util/copy-text](/showcase/util/copy-text)

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

- **Import:** `import { NameAvatar } from "@/ascendra-ui"`
- **Showcase:** [/showcase/util/name-avatar](/showcase/util/name-avatar)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | `string` | — | Full name to generate initials from. |
| `size` | `number` | `28` | Avatar size in pixels. |
| `href` | `string` | — | Optional URL — wraps avatar in a link. |

**Used in**

- _Sheets:_ [Employee Profile](/showcase/sheets), [Support Ticket](/showcase/sheets), [Customer Profile](/showcase/sheets), [Project Overview](/showcase/sheets)
- _Drawers:_ [Event Preview](/showcase/drawers), [Assign Task](/showcase/drawers)

---

#### Theme Toggle

Dark/light mode toggle button powered by next-themes.

- **Import:** `import { ThemeToggle } from "@/ascendra-ui"`
- **Showcase:** [/showcase/util/theme-toggle](/showcase/util/theme-toggle)

**Props**

_No custom props — accepts standard HTML attributes._

---

#### Pagination Button

Small bordered navigation button for pagination controls.

- **Import:** `import { PaginationButton } from "@/ascendra-ui"`
- **Showcase:** [/showcase/util/pagination-button](/showcase/util/pagination-button)

**Props**

_No custom props — accepts standard HTML attributes._

---

#### Row Action Button

Icon button for table row actions — hidden by default, visible on row hover.

- **Import:** `import { RowActionButton } from "@/ascendra-ui"`
- **Showcase:** [/showcase/util/row-action-button](/showcase/util/row-action-button)

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `opaque` | `boolean` | `false` | Show the button without row hover (always visible). |

---

#### Scroll To Top

Behavior-only component that scrolls the window to the top on every route change and disables browser scroll restoration.

- **Import:** `import { ScrollToTop } from "@/ascendra-ui"`
- **Showcase:** [/showcase/util/scroll-to-top](/showcase/util/scroll-to-top)

**Props**

_No custom props — accepts standard HTML attributes._

---

## Part 2 — Composite Patterns

> Full-page patterns built from the primitives above. Each showcases a realistic domain scenario.
> Use the **Components used** lists to understand how primitives are composed together.

### Forms

10 form patterns covering SaaS, HR, e-commerce, finance, and general scenarios.

| Name | Domain | Complexity | Layout |
|---|---|---|---|
| [Contact & Inquiry](/showcase/forms/contact-inquiry) | General / Marketing | Simple | Single column, vertical |
| [User Profile Settings](/showcase/forms/user-profile) | SaaS / Product | Medium | 2 sections, mixed vertical & horizontal fields |
| [Support Ticket](/showcase/forms/support-ticket) | IT / SaaS | Medium | Single column with conditional section reveal |
| [Appointment Booking](/showcase/forms/appointment-booking) | Healthcare / Services | Medium | 3 sections, step-like visual flow |
| [Job Application](/showcase/forms/job-application) | HR / Recruitment | Medium | 3 sections, single column with 2-column grid rows |
| [Financial Transaction](/showcase/forms/financial-transaction) | Finance / Banking | Medium | 2 sections, horizontal-label compact layout |
| [Create Product Listing](/showcase/forms/create-product) | E-Commerce | Complex | 3 sections, mixed 1-column and 2-column grid |
| [Project Kickoff](/showcase/forms/project-kickoff) | Project Management | Complex | 3 sections, mixed 1-column and 2-column grids |
| [Search & Filter Panel](/showcase/forms/search-filter) | Universal Utility | Simple | Compact sidebar panel, single column |
| [Employee Onboarding Stepper](/showcase/forms/employee-onboarding) | HR / Enterprise | Complex | 4-step stepper with step indicator and per-step sections |

#### Contact & Inquiry

A clean single-section contact form covering the most common lead-capture and general inquiry scenarios.

- **Slug:** `contact-inquiry`
- **Showcase:** [/showcase/forms/contact-inquiry](/showcase/forms/contact-inquiry)
- **Domain:** General / Marketing
- **Complexity:** Simple
- **Layout:** Single column, vertical
- **Edit mode:** No
- **Components used:** Input, Select, Field, Button, UnsavedChangesBar

---

#### User Profile Settings

Account settings split into Personal Info and Preferences sections — a staple pattern for any SaaS product.

- **Slug:** `user-profile`
- **Showcase:** [/showcase/forms/user-profile](/showcase/forms/user-profile)
- **Domain:** SaaS / Product
- **Complexity:** Medium
- **Layout:** 2 sections, mixed vertical & horizontal fields
- **Edit mode:** Yes — ships with a read-only view and an Edit toggle
- **Components used:** Input, Select, Switch, Combobox, Field, FieldGroup, UnsavedChangesBar

---

#### Support Ticket

Issue reporting form with priority radio, dynamic conditional fields revealed by a Switch, and an inline alert guiding the user.

- **Slug:** `support-ticket`
- **Showcase:** [/showcase/forms/support-ticket](/showcase/forms/support-ticket)
- **Domain:** IT / SaaS
- **Complexity:** Medium
- **Layout:** Single column with conditional section reveal
- **Edit mode:** No
- **Components used:** Input, Select, RadioGroup, Combobox, Checkbox, Switch, SimpleAlert, Field, UnsavedChangesBar

---

#### Appointment Booking

Three-stage booking flow: pick a service → choose a date & time slot → confirm patient details.

- **Slug:** `appointment-booking`
- **Showcase:** [/showcase/forms/appointment-booking](/showcase/forms/appointment-booking)
- **Domain:** Healthcare / Services
- **Complexity:** Medium
- **Layout:** 3 sections, step-like visual flow
- **Edit mode:** No
- **Components used:** RadioGroup, DatePicker, Combobox, Input, SimpleBadge, SimpleAlert, Field, FieldGroup, UnsavedChangesBar

---

#### Job Application

Multi-section application form covering personal details, position preferences, and portfolio links — common in career portals.

- **Slug:** `job-application`
- **Showcase:** [/showcase/forms/job-application](/showcase/forms/job-application)
- **Domain:** HR / Recruitment
- **Complexity:** Medium
- **Layout:** 3 sections, single column with 2-column grid rows
- **Edit mode:** No
- **Components used:** Input, InputGroup, Select, Combobox, DatePicker, Checkbox, Field, FieldGroup, UnsavedChangesBar

---

#### Financial Transaction

Compact transaction entry with account lookup, currency-prefixed amount, and a recurring schedule section — typical in accounting or banking UIs.

- **Slug:** `financial-transaction`
- **Showcase:** [/showcase/forms/financial-transaction](/showcase/forms/financial-transaction)
- **Domain:** Finance / Banking
- **Complexity:** Medium
- **Layout:** 2 sections, horizontal-label compact layout
- **Edit mode:** No
- **Components used:** Input, InputGroup, Select, RadioGroup, DatePicker, DateRangePicker, TableLookup, Field, FieldGroup, UnsavedChangesBar

---

#### Create Product Listing

Product creation form spanning basic info, pricing & inventory, and shipping — representative of e-commerce admin backends.

- **Slug:** `create-product`
- **Showcase:** [/showcase/forms/create-product](/showcase/forms/create-product)
- **Domain:** E-Commerce
- **Complexity:** Complex
- **Layout:** 3 sections, mixed 1-column and 2-column grid
- **Edit mode:** Yes — ships with a read-only view and an Edit toggle
- **Components used:** Input, InputGroup, Select, Combobox, Switch, Checkbox, SimpleAlert, Field, FieldGroup, UnsavedChangesBar

---

#### Project Kickoff

Project creation spanning basics, team composition, and timeline & budget — covering project management tool patterns.

- **Slug:** `project-kickoff`
- **Showcase:** [/showcase/forms/project-kickoff](/showcase/forms/project-kickoff)
- **Domain:** Project Management
- **Complexity:** Complex
- **Layout:** 3 sections, mixed 1-column and 2-column grids
- **Edit mode:** No
- **Components used:** Input, InputGroup, Select, Combobox, Checkbox, DateRangePicker, Field, FieldGroup, SimpleAlert, UnsavedChangesBar

---

#### Search & Filter Panel

Sidebar-style filter panel with date range, multi-select categories, status checkboxes, and a quick-search input — universal across list and report views.

- **Slug:** `search-filter`
- **Showcase:** [/showcase/forms/search-filter](/showcase/forms/search-filter)
- **Domain:** Universal Utility
- **Complexity:** Simple
- **Layout:** Compact sidebar panel, single column
- **Edit mode:** No
- **Components used:** Input, DateRangePicker, Checkbox, Combobox, RadioGroup, Field, FieldGroup, Button

---

#### Employee Onboarding Stepper

Four-step stepper covering personal info, employment details, compensation, and IT access — the broadest coverage of the component library in one form.

- **Slug:** `employee-onboarding`
- **Showcase:** [/showcase/forms/employee-onboarding](/showcase/forms/employee-onboarding)
- **Domain:** HR / Enterprise
- **Complexity:** Complex
- **Layout:** 4-step stepper with step indicator and per-step sections
- **Edit mode:** No
- **Components used:** Input, InputGroup, Select, Combobox, RadioGroup, Checkbox, Switch, DatePicker, TableLookup, SimpleAlert, Field, FieldGroup, UnsavedChangesBar

---

### Dialogs

12 dialog patterns grouped by intent type. All are rendered on the shared [Dialog Gallery](/showcase/dialogs) page.

| Name | Type | Components |
|---|---|---|
| Archive Project | Confirmation | Dialog, Button |
| Transfer Ownership | Confirmation | Dialog, Checkbox, Button |
| Delete Record | Destructive | Dialog, Button |
| Delete Account | Destructive | Dialog, Input, Field, Button |
| Rename Item | Input | Dialog, Input, Field, Button |
| Add Note | Input | Dialog, InputGroup, Field, Button |
| Invite Member | Input | Dialog, Input, Select, Field, Button |
| Change Password | Input | Dialog, Input, Field, Button |
| Session Expired | Alert | Dialog, Button |
| Payment Failed | Alert | Dialog, SimpleAlert, Button |
| Feature Announcement | Feature | Dialog, Button |
| Upgrade Required | Feature | Dialog, Checkbox, Button |

**Confirmation dialogs**

##### Archive Project

Confirms archiving a project with a bullet list of consequences before the user commits.

- **Slug:** `archive-project`
- **Components:** Dialog, Button

##### Transfer Ownership

High-stakes confirmation gated by a checkbox acknowledgement that must be checked before the CTA enables.

- **Slug:** `transfer-ownership`
- **Components:** Dialog, Checkbox, Button

**Destructive dialogs**

##### Delete Record

Standard single-record delete with a brief consequence note and a destructive CTA.

- **Slug:** `delete-record`
- **Components:** Dialog, Button

##### Delete Account

Maximum-stakes delete gated by a typed confirmation — the user must type DELETE before the button unlocks.

- **Slug:** `delete-account`
- **Components:** Dialog, Input, Field, Button

**Input dialogs**

##### Rename Item

Single-field rename with the current name pre-filled — the simplest possible input dialog.

- **Slug:** `rename-item`
- **Components:** Dialog, Input, Field, Button

##### Add Note

Textarea capture for a short note or comment visible to all team members.

- **Slug:** `add-note`
- **Components:** Dialog, InputGroup, Field, Button

##### Invite Member

Email input with a role selector — covers the common invite-to-team pattern.

- **Slug:** `invite-member`
- **Components:** Dialog, Input, Select, Field, Button

##### Change Password

Three-field password update covering current, new, and confirmation — the account security staple.

- **Slug:** `change-password`
- **Components:** Dialog, Input, Field, Button

**Alert dialogs**

##### Session Expired

Header-only layout with no body — demonstrates the minimal header + footer structure.

- **Slug:** `session-expired`
- **Components:** Dialog, Button

##### Payment Failed

Billing error alert with two actionable next steps in the footer.

- **Slug:** `payment-failed`
- **Components:** Dialog, SimpleAlert, Button

**Feature dialogs**

##### Feature Announcement

What's New style modal with a feature highlight list and a primary explore CTA.

- **Slug:** `feature-announcement`
- **Components:** Dialog, Button

##### Upgrade Required

Premium feature gate with a "don't show again" checkbox — the upsell dialog pattern.

- **Slug:** `upgrade-required`
- **Components:** Dialog, Checkbox, Button

---

### Sheets

10 slide-out panel patterns for Detail, Preview, Activity, and Settings use-cases. All rendered on the [Sheet Gallery](/showcase/sheets) page.

| Name | Type | Domain | Components |
|---|---|---|---|
| Employee Profile | Detail | HR | Sheet, SimpleBadge, NameAvatar, Switch, Item |
| Order Details | Detail | E-commerce | Sheet, Item, SimpleBadge, Button |
| Support Ticket | Activity | SaaS | Sheet, Item, NameAvatar, StatusDot, SimpleBadge, Button |
| Notification Preferences | Settings | SaaS | Sheet, Switch, Button |
| Customer Profile | Preview | CRM | Sheet, NameAvatar, SimpleBadge, StatusDot, Item, Button |
| Invoice Preview | Preview | Finance | Sheet, Item, SimpleBadge, SimpleAlert, Button |
| Project Overview | Detail | Project Management | Sheet, NameAvatar, SimpleBadge, StatusDot, Item, Button |
| Audit Log Entry | Detail | System / Admin | Sheet, SimpleBadge, SimpleAlert, Button |
| Product Details | Preview | Catalog | Sheet, SimpleBadge, StatusDot, Button |
| Account Settings | Settings | Platform | Sheet, Switch, SimpleBadge, Button |

#### Employee Profile

Full HR record with tabbed layout — employment details, contact info, bio, and work history. Includes an active/inactive status toggle.

- **Slug:** `employee-profile`
- **Type:** Detail
- **Domain:** HR
- **Components:** Sheet, SimpleBadge, NameAvatar, Switch, Item

#### Order Details

E-commerce order breakdown — order meta, line items with quantities and prices, shipping address, and a running total with tax.

- **Slug:** `order-details`
- **Type:** Detail
- **Domain:** E-commerce
- **Components:** Sheet, Item, SimpleBadge, Button

#### Support Ticket

Ticket detail with parallel meta fields followed by a chronological activity timeline — comments, status changes, and actor avatars.

- **Slug:** `support-ticket`
- **Type:** Activity
- **Domain:** SaaS
- **Components:** Sheet, Item, NameAvatar, StatusDot, SimpleBadge, Button

#### Notification Preferences

Grouped switch rows across Email, Push, and In-App channels — each with a label and supporting description.

- **Slug:** `notification-preferences`
- **Type:** Settings
- **Domain:** SaaS
- **Components:** Sheet, Switch, Button

#### Customer Profile

CRM snapshot — avatar + name hero, parallel contact and account fields (plan, ARR, seats, status), and a recent activity list.

- **Slug:** `customer-profile`
- **Type:** Preview
- **Domain:** CRM
- **Components:** Sheet, NameAvatar, SimpleBadge, StatusDot, Item, Button

#### Invoice Preview

Finance document at a glance — bill-to details, parallel invoice meta, line items, subtotal/tax/total summary, and an overdue alert.

- **Slug:** `invoice-preview`
- **Type:** Preview
- **Domain:** Finance
- **Components:** Sheet, Item, SimpleBadge, SimpleAlert, Button

#### Project Overview

PM record with tabbed layout — Overview shows key project meta and a milestone list with status dots; Members tab lists the team.

- **Slug:** `project-overview`
- **Type:** Detail
- **Domain:** Project Management
- **Components:** Sheet, NameAvatar, SimpleBadge, StatusDot, Item, Button

#### Audit Log Entry

System event detail — actor, resource, method, and timestamp in parallel key-value layout, a compliance alert, and a monospace payload block.

- **Slug:** `audit-log-entry`
- **Type:** Detail
- **Domain:** System / Admin
- **Components:** Sheet, SimpleBadge, SimpleAlert, Button

#### Product Details

Catalog item snapshot — image placeholder, parallel spec grid (category, price, stock, weight, battery life), vendor info, and tags.

- **Slug:** `product-details`
- **Type:** Preview
- **Domain:** Catalog
- **Components:** Sheet, SimpleBadge, StatusDot, Button

#### Account Settings

Privacy, security, and notification controls in grouped switch rows — includes a "Recommended" badge on the two-factor authentication toggle.

- **Slug:** `account-settings`
- **Type:** Settings
- **Domain:** Platform
- **Components:** Sheet, Switch, SimpleBadge, Button

---

### Drawers

8 bottom-drawer patterns for mobile-first Action, Panel, Preview, and Input flows. All rendered on the [Drawer Gallery](/showcase/drawers) page.

| Name | Type | Domain | Components |
|---|---|---|---|
| Quick Actions | Action | General | Drawer, Item, Button |
| Smart Filter | Panel | E-commerce | Drawer, Switch, Item, SimpleBadge, Button |
| Share Sheet | Action | General | Drawer, Button |
| Event Preview | Preview | Calendar | Drawer, NameAvatar, StatusDot, Button |
| Media Attachment | Preview | File Management | Drawer, Button |
| Assign Task | Input | Project Management | Drawer, Input, NameAvatar, Item, Button |
| Notification Center | Panel | SaaS | Drawer, BubbleBadge, StatusDot, Button |
| Danger Zone | Action | Settings | Drawer, Input, SimpleAlert, Button |

#### Quick Actions

Touch-friendly action sheet with five entity operations — Rename, Duplicate, Share, Archive, and Delete — each as a full-width tappable row.

- **Slug:** `quick-actions`
- **Type:** Action
- **Domain:** General
- **Components:** Drawer, Item, Button

#### Smart Filter

Two snap points: partially open (40%) shows active filter summary with chips; fully open shows the complete filter form with switches and a category list.

- **Slug:** `smart-filter`
- **Type:** Panel
- **Domain:** E-commerce
- **Components:** Drawer, Switch, Item, SimpleBadge, Button

#### Share Sheet

Icon grid of share destinations — Copy Link, Email, Slack, Export PDF, Export CSV, and Open in Browser. Copy Link shows an inline "Copied!" confirmation.

- **Slug:** `share-sheet`
- **Type:** Action
- **Domain:** General
- **Components:** Drawer, Button

#### Event Preview

Two snap points: peeked (35%) shows event title, time, and location; expanded (85%) reveals the full description, attendee list, and action button.

- **Slug:** `event-preview`
- **Type:** Preview
- **Domain:** Calendar
- **Components:** Drawer, NameAvatar, StatusDot, Button

#### Media Attachment

File detail panel — image placeholder, then a parallel key-value grid covering filename, type, size, dimensions, uploader, and date added.

- **Slug:** `media-attachment`
- **Type:** Preview
- **Domain:** File Management
- **Components:** Drawer, Button

#### Assign Task

Search input followed by a scrollable team member list. Selection is highlighted with a checkmark. Confirm button stays disabled until a member is chosen.

- **Slug:** `assign-task`
- **Type:** Input
- **Domain:** Project Management
- **Components:** Drawer, Input, NameAvatar, Item, Button

#### Notification Center

Right-side panel listing recent notifications with unread dots. "Mark all read" clears the indicators. Demonstrates the drawer opening from the right edge.

- **Slug:** `notification-center`
- **Type:** Panel
- **Domain:** SaaS
- **Components:** Drawer, BubbleBadge, StatusDot, Button

#### Danger Zone

Mobile-optimized destructive confirmation — consequences list, typed verification input. Delete button unlocks only after the user types "DELETE".

- **Slug:** `danger-zone`
- **Type:** Action
- **Domain:** Settings
- **Components:** Drawer, Input, SimpleAlert, Button

---

### Dashboards

10 full analytics dashboards, each with KPI tiles, multiple chart types, and a data table. Each has its own showcase page.

| Name | Domain | Chart types | KPIs |
|---|---|---|---|
| [SaaS Revenue & Growth](/showcase/dashboards/saas-revenue) | SaaS / Startup | composed, pie, area, radial, bar | Monthly Recurring Revenue, Annual Run Rate, Churn Rate, Net Revenue Retention |
| [E-commerce Operations](/showcase/dashboards/ecommerce-ops) | Retail / E-commerce | line, bar, treemap, histogram | Gross Merchandise Value, Orders Placed, Avg. Order Value, Return Rate |
| [Marketing Performance](/showcase/dashboards/marketing) | Marketing / Growth | bar, radar, area, pie, composed | Attributed Revenue, Blended ROAS, Customer Acq. Cost, Avg. CTR |
| [Financial P&L](/showcase/dashboards/financial-pnl) | Finance / CFO | composed, radial, area, bar | Total Revenue, EBITDA, Monthly Burn Rate, Cash Runway |
| [Trading & Portfolio](/showcase/dashboards/trading-portfolio) | Finance / Trading | candlestick, histogram, scatter, composed | Portfolio Value, Day P&L, Beta, Sharpe Ratio |
| [Healthcare Analytics](/showcase/dashboards/healthcare) | Healthcare / Clinical | line, radial, bar, radar, histogram | Active Patients, Avg. Wait Time, Bed Occupancy, Recovery Rate |
| [HR & People Analytics](/showcase/dashboards/hr-people) | People Operations | line, pie, bar, scatter | Total Headcount, Attrition Rate, Avg. Time to Hire, eNPS Score |
| [DevOps Monitoring](/showcase/dashboards/devops) | Engineering / SRE | area, line, bar, composed, radial | Uptime (30d), P99 Latency, Error Rate, Deploy Frequency |
| [Supply Chain](/showcase/dashboards/supply-chain) | Operations / Logistics | composed, bar, treemap, radar | On-time Delivery, Inventory Fill Rate, Inventory Turns, Avg. Lead Time |
| [Real Estate Portfolio](/showcase/dashboards/real-estate) | Property Investment | treemap, pie, composed, bar, scatter | Portfolio Value, Avg. Gross Yield, Occupancy Rate, Monthly Income |

#### SaaS Revenue & Growth

Monthly recurring revenue, plan-tier breakdown, churn, and net revenue retention — the core metrics for a SaaS growth review.

- **Slug:** `saas-revenue`
- **Showcase:** [/showcase/dashboards/saas-revenue](/showcase/dashboards/saas-revenue)
- **Domain:** SaaS / Startup
- **KPIs:** Monthly Recurring Revenue, Annual Run Rate, Churn Rate, Net Revenue Retention
- **Chart types:** composed, pie, area, radial, bar

**Layout** (12-column grid)

- Row 1: `chart[8]` MRR & Growth Rate  ·  `chart[4]` Plan Mix
- Row 2: `chart[8]` Revenue by Tier  ·  `chart[4]` NRR Gauge
- Row 3: `table[7]` Top Accounts  ·  `chart[5]` Churn by Cohort

---

#### E-commerce Operations

Order volume, GMV, category performance, and return rates — the ops view for a mid-size online retailer.

- **Slug:** `ecommerce-ops`
- **Showcase:** [/showcase/dashboards/ecommerce-ops](/showcase/dashboards/ecommerce-ops)
- **Domain:** Retail / E-commerce
- **KPIs:** Gross Merchandise Value, Orders Placed, Avg. Order Value, Return Rate
- **Chart types:** line, bar, treemap, histogram

**Layout** (12-column grid)

- Row 1: `chart[12]` Daily Orders
- Row 2: `chart[6]` Orders by Category  ·  `chart[6]` GMV by Category
- Row 3: `chart[5]` Order Value Distribution  ·  `table[7]` Top Products

---

#### Marketing Performance

Channel ROAS, traffic mix, and spend efficiency — the CMO view for a performance-marketing team running multi-channel campaigns.

- **Slug:** `marketing`
- **Showcase:** [/showcase/dashboards/marketing](/showcase/dashboards/marketing)
- **Domain:** Marketing / Growth
- **KPIs:** Attributed Revenue, Blended ROAS, Customer Acq. Cost, Avg. CTR
- **Chart types:** bar, radar, area, pie, composed

**Layout** (12-column grid)

- Row 1: `chart[5]` Channel ROAS  ·  `chart[7]` Channel Scorecard
- Row 2: `chart[8]` Traffic by Source  ·  `chart[4]` Spend Allocation
- Row 3: `chart[8]` Spend vs Revenue  ·  `chart[4]` Status Summary
- Row 4: `table[12]` Active Campaigns

---

#### Financial P&L

Revenue, cost breakdown, EBITDA margin trajectory, and budget attainment — the board-ready financial view for a growth-stage company.

- **Slug:** `financial-pnl`
- **Showcase:** [/showcase/dashboards/financial-pnl](/showcase/dashboards/financial-pnl)
- **Domain:** Finance / CFO
- **KPIs:** Total Revenue, EBITDA, Monthly Burn Rate, Cash Runway
- **Chart types:** composed, radial, area, bar

**Layout** (12-column grid)

- Row 1: `chart[7]` Costs & EBITDA Margin  ·  `chart[5]` Budget Attainment
- Row 2: `chart[12]` Revenue vs Expenses
- Row 3: `chart[6]` Cash Flow Waterfall  ·  `table[6]` P&L Summary

---

#### Trading & Portfolio

Price action, volume, return distribution, and risk/return positioning — a complete view for an equity portfolio manager.

- **Slug:** `trading-portfolio`
- **Showcase:** [/showcase/dashboards/trading-portfolio](/showcase/dashboards/trading-portfolio)
- **Domain:** Finance / Trading
- **KPIs:** Portfolio Value, Day P&L, Beta, Sharpe Ratio
- **Chart types:** candlestick, histogram, scatter, composed

**Layout** (12-column grid)

- Row 1: `chart[12]` Price Action _(xl)_
- Row 2: `chart[4]` Return Distribution  ·  `chart[4]` Risk vs Return  ·  `chart[4]` Price + Volume
- Row 3: `table[12]` Positions

---

#### Healthcare Analytics

Patient flow, bed occupancy, department performance, and outcome rates — the clinical director's operational view of a hospital.

- **Slug:** `healthcare`
- **Showcase:** [/showcase/dashboards/healthcare](/showcase/dashboards/healthcare)
- **Domain:** Healthcare / Clinical
- **KPIs:** Active Patients, Avg. Wait Time, Bed Occupancy, Recovery Rate
- **Chart types:** line, radial, bar, radar, histogram

**Layout** (12-column grid)

- Row 1: `chart[8]` Admissions Trend  ·  `chart[4]` Bed Occupancy
- Row 2: `chart[6]` Conditions by Department  ·  `chart[6]` Department Scorecard
- Row 3: `chart[5]` Patient Age Distribution  ·  `table[7]` Recent Cases

---

#### HR & People Analytics

Headcount movement, attrition drivers, salary distribution, and performance spread — the CHRO's workforce view.

- **Slug:** `hr-people`
- **Showcase:** [/showcase/dashboards/hr-people](/showcase/dashboards/hr-people)
- **Domain:** People Operations
- **KPIs:** Total Headcount, Attrition Rate, Avg. Time to Hire, eNPS Score
- **Chart types:** line, pie, bar, scatter

**Layout** (12-column grid)

- Row 1: `chart[7]` Hiring vs Attrition  ·  `chart[5]` Seniority Mix
- Row 2: `chart[12]` Headcount by Department
- Row 3: `chart[6]` Tenure vs Performance  ·  `table[6]` Recent Hires

---

#### DevOps Monitoring

Latency, throughput, error rates by service, and deployment frequency — the reliability dashboard for an engineering team.

- **Slug:** `devops`
- **Showcase:** [/showcase/dashboards/devops](/showcase/dashboards/devops)
- **Domain:** Engineering / SRE
- **KPIs:** Uptime (30d), P99 Latency, Error Rate, Deploy Frequency
- **Chart types:** area, line, bar, composed, radial

**Layout** (12-column grid)

- Row 1: `chart[12]` Request Volume
- Row 2: `chart[6]` P99 Latency  ·  `chart[6]` Errors by Service
- Row 3: `chart[8]` Error Rate & Throughput  ·  `chart[4]` SLA Uptime

---

#### Supply Chain

Inventory flow, supplier concentration, regional shipments, and delivery performance — the operations director's supply view.

- **Slug:** `supply-chain`
- **Showcase:** [/showcase/dashboards/supply-chain](/showcase/dashboards/supply-chain)
- **Domain:** Operations / Logistics
- **KPIs:** On-time Delivery, Inventory Fill Rate, Inventory Turns, Avg. Lead Time
- **Chart types:** composed, bar, treemap, radar

**Layout** (12-column grid)

- Row 1: `chart[7]` Inventory Flow  ·  `chart[5]` Shipments by Region
- Row 2: `chart[12]` Supplier Spend Share
- Row 3: `chart[5]` Supplier Scorecard  ·  `table[7]` Open Orders

---

#### Real Estate Portfolio

Portfolio valuation, yield analysis, occupancy, and individual property performance — the asset manager's property view.

- **Slug:** `real-estate`
- **Showcase:** [/showcase/dashboards/real-estate](/showcase/dashboards/real-estate)
- **Domain:** Property Investment
- **KPIs:** Portfolio Value, Avg. Gross Yield, Occupancy Rate, Monthly Income
- **Chart types:** treemap, pie, composed, bar, scatter

**Layout** (12-column grid)

- Row 1: `chart[7]` Portfolio by Type  ·  `chart[5]` Geographic Allocation
- Row 2: `chart[8]` Rental Income & Yield  ·  `chart[4]` Properties by Value
- Row 3: `chart[5]` Price vs Area  ·  `table[7]` Properties

---

### Reports

10 document-style reports covering finance, HR, clinical, operational, performance, and compliance domains. Each has its own showcase page.

| Name | Domain | Type | Complexity | Layout |
|---|---|---|---|---|
| [Annual Financial Statement](/showcase/reports/annual-financial-statement) | Finance / Accounting | Financial | Complex | Document |
| [Executive Business Review](/showcase/reports/executive-business-review) | Corporate / C-Suite | Executive | Simple | Wide |
| [Patient Health Summary](/showcase/reports/patient-health-summary) | Healthcare / Clinical | Clinical | Medium | Document |
| [Project Status Report](/showcase/reports/project-status-report) | Project Management | Operational | Simple | Mixed |
| [Sales Pipeline Report](/showcase/reports/sales-pipeline-report) | Sales / CRM | Performance | Medium | Wide |
| [Marketing Campaign Analysis](/showcase/reports/marketing-campaign-analysis) | Marketing / Growth | Performance | Medium | Wide |
| [Supply Chain Operations Report](/showcase/reports/supply-chain-ops-report) | Operations / Logistics | Operational | Complex | Wide |
| [Employee Performance Review](/showcase/reports/employee-performance-review) | Human Resources | Performance | Simple | Document |
| [Cybersecurity Incident Report](/showcase/reports/security-incident-report) | IT / Security | Compliance | Medium | Document |
| [ESG Sustainability Report](/showcase/reports/esg-sustainability-report) | Corporate / ESG | Compliance | Complex | Mixed |

#### Annual Financial Statement

Year-end financial statement for a mid-size company — income statement, balance sheet, and cash flow summary in a formal document layout with section dividers, accounting-style tables, and prior-year comparisons.

- **Slug:** `annual-financial-statement`
- **Showcase:** [/showcase/reports/annual-financial-statement](/showcase/reports/annual-financial-statement)
- **Domain:** Finance / Accounting
- **Report type:** Financial
- **Complexity:** Complex
- **Layout:** Document
- **Key metrics:** Total Revenue, Net Income, Total Assets, Operating Cash Flow
- **Elements:** Accounting tables, Variance columns, Branded header, Document footer, Bar chart, Section dividers

---

#### Executive Business Review

CEO-level quarterly business review with large headline KPIs, a revenue trend chart, division performance summary table, and a written executive highlights section — designed for board presentation.

- **Slug:** `executive-business-review`
- **Showcase:** [/showcase/reports/executive-business-review](/showcase/reports/executive-business-review)
- **Domain:** Corporate / C-Suite
- **Report type:** Executive
- **Complexity:** Simple
- **Layout:** Wide
- **Key metrics:** Total Revenue, Gross Profit, EBITDA, Cash Position
- **Elements:** Large KPI tiles, Bar chart, Summary table, Highlights text, Branded header, Board footer

---

#### Patient Health Summary

Clinical visit summary for a patient portal or physician handoff. Shows vital signs, active medications, recent lab results with reference ranges, and structured visit notes — no charts, entirely tables and text.

- **Slug:** `patient-health-summary`
- **Showcase:** [/showcase/reports/patient-health-summary](/showcase/reports/patient-health-summary)
- **Domain:** Healthcare / Clinical
- **Report type:** Clinical
- **Complexity:** Medium
- **Layout:** Document
- **Key metrics:** Age, BMI, Blood Pressure, Last Visit Date
- **Elements:** Patient info strip, Vital signs grid, Medications table, Lab results w/ status, Clinical notes, No charts

---

#### Project Status Report

Weekly project health report with a RAG traffic-light banner, milestone timeline, budget vs. actual chart, and a risk register — giving a PM and stakeholders a single-page view of delivery status.

- **Slug:** `project-status-report`
- **Showcase:** [/showcase/reports/project-status-report](/showcase/reports/project-status-report)
- **Domain:** Project Management
- **Report type:** Operational
- **Complexity:** Simple
- **Layout:** Mixed
- **Key metrics:** % Complete, Days to Deadline, Budget Consumed, Open Risks
- **Elements:** RAG status banner, Milestone timeline, Paired bar chart, Risk register table, Progress indicators

---

#### Sales Pipeline Report

Monthly sales performance report with pipeline stage funnel, rep quota attainment rankings with inline progress bars, bookings vs. target chart, and deal size distribution.

- **Slug:** `sales-pipeline-report`
- **Showcase:** [/showcase/reports/sales-pipeline-report](/showcase/reports/sales-pipeline-report)
- **Domain:** Sales / CRM
- **Report type:** Performance
- **Complexity:** Medium
- **Layout:** Wide
- **Key metrics:** Pipeline Value, Deals Won, Avg. Deal Size, Win Rate
- **Elements:** Funnel visualization, Rep ranking table, Inline progress bars, Composed chart, Bar chart

---

#### Marketing Campaign Analysis

Post-campaign report for a multi-channel digital marketing campaign — channel ROAS comparison, conversion funnel with drop-off annotations, audience breakdown donut, and campaign ROI summary table.

- **Slug:** `marketing-campaign-analysis`
- **Showcase:** [/showcase/reports/marketing-campaign-analysis](/showcase/reports/marketing-campaign-analysis)
- **Domain:** Marketing / Growth
- **Report type:** Performance
- **Complexity:** Medium
- **Layout:** Wide
- **Key metrics:** Total Impressions, Conversions, Blended ROAS, Cost per Conversion
- **Elements:** Grouped bar chart, Conversion funnel, Donut chart, ROI summary table, Drop-off annotations

---

#### Supply Chain Operations Report

Monthly supply chain report with inventory level trends by category, supplier performance scorecard (color-coded by threshold), regional shipment breakdown, and a critical open orders table.

- **Slug:** `supply-chain-ops-report`
- **Showcase:** [/showcase/reports/supply-chain-ops-report](/showcase/reports/supply-chain-ops-report)
- **Domain:** Operations / Logistics
- **Report type:** Operational
- **Complexity:** Complex
- **Layout:** Wide
- **Key metrics:** On-time Delivery, Inventory Value, Stockout Events, Avg. Lead Time
- **Elements:** Multi-series area chart, Supplier scorecard, Colored table cells, Horizontal bar chart, Critical orders table

---

#### Employee Performance Review

Annual employee review document with a prominent overall rating, competency radar chart, goal achievement table with status badges, peer feedback text blocks, a development plan, and a sign-off section.

- **Slug:** `employee-performance-review`
- **Showcase:** [/showcase/reports/employee-performance-review](/showcase/reports/employee-performance-review)
- **Domain:** Human Resources
- **Report type:** Performance
- **Complexity:** Simple
- **Layout:** Document
- **Key metrics:** Overall Rating, Goals Achieved, 360° Score, Tenure
- **Elements:** Radar chart, Rating display, Goal table, Feedback text blocks, Development plan, Sign-off area

---

#### Cybersecurity Incident Report

Formal post-incident report documenting a security event — TLP classification banner, severity badge, incident timeline, affected systems table, impact assessment, and remediation action tracker.

- **Slug:** `security-incident-report`
- **Showcase:** [/showcase/reports/security-incident-report](/showcase/reports/security-incident-report)
- **Domain:** IT / Security
- **Report type:** Compliance
- **Complexity:** Medium
- **Layout:** Document
- **Key metrics:** Severity Level, Systems Affected, Records at Risk, Time to Containment
- **Elements:** TLP classification, Severity badge, Vertical timeline, Affected systems table, Remediation tracker, Bar chart

---

#### ESG Sustainability Report

Annual ESG progress report with three color-themed sections (Environmental, Social, Governance), emissions trend, energy mix donut, diversity charts, board composition, ESG score gauge, and an industry benchmark radar.

- **Slug:** `esg-sustainability-report`
- **Showcase:** [/showcase/reports/esg-sustainability-report](/showcase/reports/esg-sustainability-report)
- **Domain:** Corporate / ESG
- **Report type:** Compliance
- **Complexity:** Complex
- **Layout:** Mixed
- **Key metrics:** Carbon Emissions, Renewable Energy %, Workforce Diversity, Board Independence
- **Elements:** 3-section color themes, Progress bars to targets, Area chart, Donut chart, Radar chart, SDG alignment grid

---
