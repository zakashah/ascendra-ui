import { ComponentMeta } from './types';

export const registry: Record<string, ComponentMeta> = {
  'simple-badge': {
    slug: 'simple-badge',
    name: 'Simple Badge',
    description: 'Small inline status badge for labeling content with semantic color variants.',
    importPath: '@/components/custom/common-ui/simple-badge',
    importNames: ['SimpleBadge'],
    props: [
      { name: 'variant', type: "'default' | 'secondary' | 'orange' | 'green' | 'blue' | 'red' | 'amber'", default: "'default'", description: 'Color variant of the badge.' },
      { name: 'asChild', type: 'boolean', default: 'false', description: 'Render as a child element using Radix Slot.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes.' },
    ],
  },

  'bubble-badge': {
    slug: 'bubble-badge',
    name: 'Bubble Badge',
    description: 'Gradient pill badges with inset highlight, available in multiple sizes and colors.',
    importPath: '@/components/custom/common-ui/bubble-badge',
    importNames: ['BubbleBadge'],
    props: [
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'sm'", description: 'Size of the badge.' },
      { name: 'color', type: "'gray' | 'blue' | 'green' | 'red' | 'amber' | 'orange' | 'violet'", default: "'gray'", description: 'Color variant.' },
    ],
  },

  'status-dot': {
    slug: 'status-dot',
    name: 'Status Dot',
    description: 'Tiny status indicator dot with a halo shadow ring, available in semantic colors.',
    importPath: '@/components/custom/common-ui/status-dot',
    importNames: ['StatusDot'],
    props: [
      { name: 'variant', type: "'orange' | 'emerald' | 'sky' | 'violet' | 'rose' | 'amber' | 'red' | 'primary' | 'gray'", default: "'gray'", description: 'Color variant.' },
    ],
  },

  'simple-alert': {
    slug: 'simple-alert',
    name: 'Simple Alert',
    description: 'Compact alert notification box with semantic severity variants and an optional icon.',
    importPath: '@/components/custom/common-ui/simple-alert',
    importNames: ['SimpleAlert', 'AlertIcon'],
    props: [
      { name: 'variant', type: "'default' | 'secondary' | 'destructive' | 'success' | 'warning'", default: "'default'", description: 'Alert severity variant.' },
      { name: 'icon', type: 'React.ComponentType<{ className?: string; strokeWidth?: number }>', description: 'Icon component to display (defaults to InfoIcon).' },
    ],
  },

  'pro-badge': {
    slug: 'pro-badge',
    name: 'Pro Badge',
    description: 'Premium feature indicator with a blue-purple gradient treatment.',
    importPath: '@/components/custom/common-ui/pro-badge',
    importNames: ['ProBadge'],
    props: [],
  },

  'button': {
    slug: 'button',
    name: 'Button',
    description: 'Primary CTA button with a 4-layer shadow and gloss system, available in multiple variants and sizes.',
    importPath: '@/components/custom/ui/button',
    importNames: ['Button'],
    props: [
      { name: 'variant', type: "'primary' | 'secondary' | 'destructive' | 'ghost' | 'link'", default: "'primary'", description: 'Visual style of the button.' },
      { name: 'size', type: "'xs' | 'sm' | 'default' | 'lg' | 'icon'", default: "'default'", description: 'Size of the button.' },
      { name: 'asChild', type: 'boolean', default: 'false', description: 'Render as a child element using Radix Slot.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the button.' },
    ],
  },

  'input': {
    slug: 'input',
    name: 'Input',
    description: 'Text input with smart focus: shadow ring for pointer interactions, outline for keyboard navigation.',
    importPath: '@/components/custom/ui/input',
    importNames: ['Input'],
    props: [
      { name: 'full', type: 'boolean', default: 'false', description: 'Expands input to full container width.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the input.' },
      { name: 'placeholder', type: 'string', description: 'Placeholder text.' },
    ],
  },

  'input-group': {
    slug: 'input-group',
    name: 'Input Group',
    description: 'Composite input system with prefix/suffix text, icon addons, and button addons.',
    importPath: '@/components/custom/ui/input-group',
    importNames: ['InputGroup', 'InputGroupAddon', 'InputGroupButton', 'InputGroupText', 'InputGroupInput', 'InputGroupTextarea'],
    props: [
      { name: 'align', type: "'inline-start' | 'inline-end' | 'block-start' | 'block-end'", description: 'Position of the addon relative to the input (on InputGroupAddon).' },
    ],
  },

  'checkbox': {
    slug: 'checkbox',
    name: 'Checkbox',
    description: 'Custom checkbox with gradient overlay and shadow ring on the checked state.',
    importPath: '@/components/custom/ui/checkbox',
    importNames: ['Checkbox'],
    props: [
      { name: 'checked', type: 'boolean | "indeterminate"', description: 'Controlled checked state.' },
      { name: 'defaultChecked', type: 'boolean', description: 'Uncontrolled default checked state.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the checkbox.' },
      { name: 'onCheckedChange', type: '(checked: boolean) => void', description: 'Callback fired when the state changes.' },
    ],
  },

  'radio-group': {
    slug: 'radio-group',
    name: 'Radio Group',
    description: 'Custom radio group with glow and gloss effects on the selected item.',
    importPath: '@/components/custom/ui/radio-group',
    importNames: ['RadioGroup', 'RadioGroupItem'],
    props: [
      { name: 'value', type: 'string', description: 'Controlled selected value.' },
      { name: 'defaultValue', type: 'string', description: 'Uncontrolled default selected value.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the entire group.' },
      { name: 'onValueChange', type: '(value: string) => void', description: 'Callback fired when selection changes.' },
      { name: 'wrapperClassName', type: 'string', description: 'Additional classes for the item wrapper (on RadioGroupItem).' },
    ],
  },

  'switch': {
    slug: 'switch',
    name: 'Switch',
    description: 'Toggle switch with a gradient overlay on the active track.',
    importPath: '@/components/custom/ui/switch',
    importNames: ['Switch'],
    props: [
      { name: 'checked', type: 'boolean', description: 'Controlled checked state.' },
      { name: 'defaultChecked', type: 'boolean', description: 'Uncontrolled default checked state.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the switch.' },
      { name: 'onCheckedChange', type: '(checked: boolean) => void', description: 'Callback fired when toggled.' },
    ],
  },

  'select': {
    slug: 'select',
    name: 'Select',
    description: 'Custom select dropdown with scroll buttons and size variants.',
    importPath: '@/components/custom/ui/select',
    importNames: ['Select', 'SelectTrigger', 'SelectContent', 'SelectItem', 'SelectGroup', 'SelectLabel', 'SelectValue', 'SelectSeparator'],
    props: [
      { name: 'size', type: "'sm' | 'default'", default: "'default'", description: 'Size of the trigger (on SelectTrigger).' },
      { name: 'position', type: "'popper' | 'item-aligned'", default: "'popper'", description: 'Positioning strategy of the dropdown (on SelectContent).' },
    ],
  },

  'anchor': {
    slug: 'anchor',
    name: 'Anchor',
    description: 'Styled link component with semantic color variants and keyboard focus states.',
    importPath: '@/components/custom/common-ui/anchor',
    importNames: ['Anchor'],
    props: [
      { name: 'variant', type: "'primary' | 'blue' | 'muted'", default: "'primary'", description: 'Color variant.' },
      { name: 'href', type: 'string', description: 'Link destination URL.' },
    ],
  },

  'nav-link': {
    slug: 'nav-link',
    name: 'Nav Link',
    description: 'Navigation link with an active underline indicator driven by the current pathname.',
    importPath: '@/components/custom/nav/nav-link',
    importNames: ['NavLink', 'NavLinkBadge'],
    props: [
      { name: 'href', type: 'string', description: 'Link destination URL.' },
      { name: 'exact', type: 'boolean', default: 'false', description: 'Only active when the path matches exactly.' },
    ],
  },

  'header': {
    slug: 'header',
    name: 'Header',
    description: 'Top navigation header with breadcrumb links, slash separators, chevrons, and action slots.',
    importPath: '@/components/custom/header/header',
    importNames: ['Header', 'HeaderLink', 'HeaderSlash', 'HeaderChevron', 'HeaderActions', 'HeaderLinks'],
    props: [],
  },

  'dialog': {
    slug: 'dialog',
    name: 'Dialog',
    description: 'Modal dialog with header, body, and footer slots. Centered overlay with max-w-sm default.',
    importPath: '@/components/custom/ui/dialog',
    importNames: ['Dialog', 'DialogTrigger', 'DialogContent', 'DialogHeader', 'DialogTitle', 'DialogDescription', 'DialogBody', 'DialogFooter', 'DialogClose'],
    props: [
      { name: 'showCloseButton', type: 'boolean', default: 'false', description: 'Show the × close button in the top-right corner (on DialogContent).' },
      { name: 'footer', type: 'ReactNode', description: 'Footer content slot (on DialogContent).' },
    ],
  },

  'sheet': {
    slug: 'sheet',
    name: 'Sheet',
    description: 'Slide-out drawer panel that opens from any edge of the screen.',
    importPath: '@/components/custom/ui/sheet',
    importNames: ['Sheet', 'SheetTrigger', 'SheetContent', 'SheetHeader', 'SheetTitle', 'SheetDescription', 'SheetBody', 'SheetFooter', 'SheetClose'],
    props: [
      { name: 'side', type: "'top' | 'right' | 'bottom' | 'left'", default: "'right'", description: 'Edge the sheet slides in from (on SheetContent).' },
      { name: 'showCloseButton', type: 'boolean', default: 'true', description: 'Show the × close button (on SheetContent).' },
    ],
  },

  'dropdown-menu': {
    slug: 'dropdown-menu',
    name: 'Dropdown Menu',
    description: 'Full-featured dropdown with items, separators, checkboxes, radio groups, and sub-menus.',
    importPath: '@/components/custom/ui/dropdown-menu',
    importNames: ['DropdownMenu', 'DropdownMenuTrigger', 'DropdownMenuContent', 'DropdownMenuItem', 'DropdownMenuSeparator', 'DropdownMenuLabel', 'DropdownMenuCheckboxItem', 'DropdownMenuRadioItem', 'DropdownMenuSub', 'DropdownMenuSubTrigger', 'DropdownMenuSubContent', 'DropdownMenuShortcut'],
    props: [
      { name: 'variant', type: "'default' | 'destructive'", default: "'default'", description: 'Color variant for DropdownMenuItem.' },
      { name: 'inset', type: 'boolean', description: 'Add left padding to align items without icons (on DropdownMenuItem).' },
    ],
  },

  'table': {
    slug: 'table',
    name: 'Table',
    description: 'Data table with header, body, footer, scrollable container, and empty state support.',
    importPath: '@/components/custom/ui/table',
    importNames: ['Table', 'TableWrapper', 'TableHeader', 'TableHeaderRow', 'TableBody', 'TableRow', 'TableHead', 'TableCell', 'TableFooter', 'TableFoot', 'EmptyBody'],
    props: [
      { name: 'scrollable', type: 'boolean', description: 'Enable scroll on the TableWrapper.' },
      { name: 'vertical', type: 'boolean', description: 'Enable vertical scroll.' },
      { name: 'horizontal', type: 'boolean', description: 'Enable horizontal scroll.' },
      { name: 'height', type: 'number', description: 'Fixed height in px for scrollable tables.' },
    ],
  },

  'empty': {
    slug: 'empty',
    name: 'Empty State',
    description: 'Placeholder for empty content areas with optional icon media and call-to-action.',
    importPath: '@/components/custom/ui/empty',
    importNames: ['Empty', 'EmptyHeader', 'EmptyTitle', 'EmptyDescription', 'EmptyContent', 'EmptyMedia'],
    props: [
      { name: 'variant', type: "'default' | 'icon'", default: "'default'", description: 'Media display style (on EmptyMedia).' },
    ],
  },

  'main-section': {
    slug: 'main-section',
    name: 'Main Section',
    description: 'Settings-page section with header, footer, and collapsible panel support. Includes a danger variant.',
    importPath: '@/components/custom/layout/main-section',
    importNames: ['MainSection', 'MainSectionHeader', 'MainSectionFooter', 'MainSectionPanel', 'MainSectionPanelItem', 'MainSectionPanelItemGroup'],
    props: [
      { name: 'danger', type: 'boolean', default: 'false', description: 'Applies red danger styling (on MainSection).' },
      { name: 'collapsed', type: 'boolean', description: 'Controls the panel collapsed state (on MainSectionPanel).' },
      { name: 'dimmed', type: 'boolean', description: 'Dims the panel item content (on MainSectionPanelItem).' },
    ],
  },

  'page-header': {
    slug: 'page-header',
    name: 'Page Header',
    description: 'Page-level header with title, subtitle, and an action slot. Composes PageHeaderGroup, PageTitle, PageSubtitle, and PageHeaderAction.',
    importPath: '@/components/custom/layout/page-header',
    importNames: ['PageHeader', 'PageHeaderGroup', 'PageTitle', 'PageSubtitle', 'PageHeaderAction'],
    props: [],
  },

  'page-bar': {
    slug: 'page-bar',
    name: 'Page Bar',
    description: 'Horizontal toolbar for search, filters, and primary actions above page content.',
    importPath: '@/components/custom/layout/page-bar',
    importNames: ['PageBar', 'PageBarContent', 'PageBarAction'],
    props: [],
  },

  'aside-content': {
    slug: 'aside-content',
    name: 'Aside Content',
    description: 'Aside panel with optional dimmed state and gradient mask for overflow content on mobile.',
    importPath: '@/components/custom/layout/aside-content',
    importNames: ['AsideContent'],
    props: [
      { name: 'dimmed', type: 'boolean', default: 'false', description: 'Applies a dim overlay on the aside.' },
    ],
  },

  'tabs': {
    slug: 'tabs',
    name: 'Tabs',
    description: 'Tabbed navigation with dirty-state dot indicator and disabled tab support.',
    importPath: '@/components/custom/tabs/tabs',
    importNames: ['Tabs', 'TabList', 'TabTrigger', 'TabContent'],
    props: [
      { name: 'defaultValue', type: 'string', description: 'Initially active tab value (uncontrolled).' },
      { name: 'value', type: 'string', description: 'Controlled active tab value.' },
      { name: 'onValueChange', type: '(value: string) => void', description: 'Callback when the active tab changes.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable a tab trigger (on TabTrigger).' },
      { name: 'dirty', type: 'boolean', default: 'false', description: 'Show unsaved-changes dot on a tab trigger (on TabTrigger).' },
    ],
  },

  'sidebar-menu': {
    slug: 'sidebar-menu',
    name: 'Sidebar Menu',
    description: 'Expandable sidebar navigation with grouped menu sets, icon headers, and active link detection.',
    importPath: '@/components/custom/side-bar/side-bar-menu',
    importNames: ['SideBarMenu', 'SideBarMenuHeader', 'SideBarMenuContent', 'SideBarMenuItem', 'SideBarMenuItemGroup', 'SideBarMenuSet', 'SideBarMenuSetTitle'],
    props: [
      { name: 'basePath', type: 'string', description: 'Base path used for active link detection (on SideBarMenu).' },
      { name: 'icon', type: 'IconType', description: 'Icon for the menu header (on SideBarMenuHeader).' },
      { name: 'path', type: 'string', description: 'Link path for the menu item (on SideBarMenuItem).' },
      { name: 'alternate', type: "'default' | 'stand-alone'", default: "'default'", description: 'Layout variant for the menu item.' },
    ],
  },

  'copy-text': {
    slug: 'copy-text',
    name: 'Copy Text',
    description: 'Inline copy-to-clipboard trigger with icon feedback and an optional tooltip confirmation.',
    importPath: '@/components/custom/util/copy-text',
    importNames: ['CopyText'],
    props: [
      { name: 'value', type: 'string', description: 'Text to copy to the clipboard.' },
      { name: 'opaque', type: 'boolean', default: 'false', description: 'Show the copy icon without hover (always visible).' },
      { name: 'timeout', type: 'number', default: '1200', description: 'Duration in ms before resetting the copied state.' },
      { name: 'showTooltip', type: 'boolean', default: 'false', description: 'Show a "Copied" tooltip confirmation on click.' },
      { name: 'onClick', type: '(e: MouseEvent) => void | Promise<string>', description: 'Custom click handler; return a string to override what gets copied.' },
    ],
  },

  'name-avatar': {
    slug: 'name-avatar',
    name: 'Name Avatar',
    description: 'Auto-generated avatar from name initials with a deterministic background color derived from the name.',
    importPath: '@/components/custom/common-ui/name-avatar',
    importNames: ['NameAvatar'],
    props: [
      { name: 'name', type: 'string', description: 'Full name to generate initials from.' },
      { name: 'size', type: 'number', default: '28', description: 'Avatar size in pixels.' },
      { name: 'href', type: 'string', description: 'Optional URL — wraps avatar in a link.' },
    ],
  },

  'theme-toggle': {
    slug: 'theme-toggle',
    name: 'Theme Toggle',
    description: 'Dark/light mode toggle button powered by next-themes.',
    importPath: '@/components/custom/util/theme-toggle',
    importNames: ['ThemeToggle'],
    props: [],
  },

  'pagination-button': {
    slug: 'pagination-button',
    name: 'Pagination Button',
    description: 'Small bordered navigation button for pagination controls.',
    importPath: '@/components/custom/common-ui/pagination-button',
    importNames: ['PaginationButton'],
    props: [],
  },

  'row-action-button': {
    slug: 'row-action-button',
    name: 'Row Action Button',
    description: 'Icon button for table row actions — hidden by default, visible on row hover.',
    importPath: '@/components/custom/common-ui/row-action-button',
    importNames: ['RowActionButton'],
    props: [
      { name: 'opaque', type: 'boolean', default: 'false', description: 'Show the button without row hover (always visible).' },
    ],
  },
};
