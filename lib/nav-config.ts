import { NavCategory } from './types';

export const navConfig: NavCategory[] = [
  {
    title: 'Getting Started',
    items: [
      { name: 'Overview', slug: '' },
      { name: 'Design Tokens', slug: 'design-tokens' },
    ],
  },
  {
    title: 'Sample Dialogs',
    items: [
      { name: 'Dialog Gallery', slug: 'dialogs' },
    ],
  },
  {
    title: 'Sample Sheets',
    items: [
      { name: 'Sheet Gallery', slug: 'sheets' },
    ],
  },
  {
    title: 'Sample Drawers',
    items: [
      { name: 'Drawer Gallery', slug: 'drawers' },
    ],
  },
  {
    title: 'Sample Dashboards',
    items: [
      { name: 'Dashboard Gallery',   slug: 'dashboards' },
      { name: 'SaaS Revenue',        slug: 'dashboards/saas-revenue' },
      { name: 'E-commerce Ops',      slug: 'dashboards/ecommerce-ops' },
      { name: 'Marketing',           slug: 'dashboards/marketing' },
      { name: 'Financial P&L',       slug: 'dashboards/financial-pnl' },
      { name: 'Trading Portfolio',   slug: 'dashboards/trading-portfolio' },
      { name: 'Healthcare',          slug: 'dashboards/healthcare' },
      { name: 'HR & People',         slug: 'dashboards/hr-people' },
      { name: 'DevOps',              slug: 'dashboards/devops' },
      { name: 'Supply Chain',        slug: 'dashboards/supply-chain' },
      { name: 'Real Estate',         slug: 'dashboards/real-estate' },
    ],
  },
  {
    title: 'Sample Forms',
    items: [
      { name: 'Forms Gallery', slug: 'forms' },
      { name: 'Contact & Inquiry', slug: 'forms/contact-inquiry' },
      { name: 'User Profile Settings', slug: 'forms/user-profile' },
      { name: 'Support Ticket', slug: 'forms/support-ticket' },
      { name: 'Appointment Booking', slug: 'forms/appointment-booking' },
      { name: 'Job Application', slug: 'forms/job-application' },
      { name: 'Financial Transaction', slug: 'forms/financial-transaction' },
      { name: 'Create Product', slug: 'forms/create-product' },
      { name: 'Project Kickoff', slug: 'forms/project-kickoff' },
      { name: 'Search & Filter Panel', slug: 'forms/search-filter' },
      { name: 'Employee Onboarding', slug: 'forms/employee-onboarding' },
    ],
  },
  {
    title: 'Feedback & Status',
    items: [
      { name: 'Simple Badge', slug: 'simple-badge' },
      { name: 'Bubble Badge', slug: 'bubble-badge' },
      { name: 'Status Dot', slug: 'status-dot' },
      { name: 'Simple Alert', slug: 'simple-alert' },
      { name: 'Pro Badge', slug: 'pro-badge' },
      { name: 'Unsaved Changes Bar', slug: 'unsaved-changes-bar' },
    ],
  },
  {
    title: 'Forms & Inputs',
    items: [
      { name: 'Button', slug: 'button' },
      { name: 'Input', slug: 'input' },
      { name: 'Input Group', slug: 'input-group' },
      { name: 'Checkbox', slug: 'checkbox' },
      { name: 'Radio Group', slug: 'radio-group' },
      { name: 'Switch', slug: 'switch' },
      { name: 'Select', slug: 'select' },
      { name: 'Field', slug: 'field' },
      { name: 'Combobox', slug: 'combobox' },
      { name: 'Table Lookup', slug: 'table-lookup' },
    ],
  },
  {
    title: 'Date & Time',
    items: [
      { name: 'Calendar', slug: 'calendar' },
      { name: 'Date Picker', slug: 'date-picker' },
      { name: 'Date Range Picker', slug: 'date-range-picker' },
    ],
  },
  {
    title: 'Navigation',
    items: [
      { name: 'Anchor', slug: 'anchor' },
      { name: 'Nav', slug: 'nav' },
      { name: 'Nav Link', slug: 'nav-link' },
      { name: 'Header', slug: 'header' },
    ],
  },
  {
    title: 'Overlays',
    items: [
      { name: 'Dialog', slug: 'dialog' },
      { name: 'Sheet', slug: 'sheet' },
      { name: 'Dropdown Menu', slug: 'dropdown-menu' },
    ],
  },
  {
    title: 'Charts',
    items: [
      { name: 'Chart Gallery', slug: 'charts' },
      { name: 'Line Charts', slug: 'charts/line' },
      { name: 'Area Charts', slug: 'charts/area' },
      { name: 'Bar Charts', slug: 'charts/bar' },
      { name: 'Pie & Donut', slug: 'charts/pie' },
      { name: 'Radial & Gauge', slug: 'charts/radial' },
      { name: 'Radar Charts', slug: 'charts/radar' },
      { name: 'Scatter & Bubble', slug: 'charts/scatter' },
      { name: 'Composed Charts', slug: 'charts/composed' },
      { name: 'Treemap', slug: 'charts/treemap' },
      { name: 'Histogram', slug: 'charts/histogram' },
      { name: 'Candlestick', slug: 'charts/candlestick' },
    ],
  },
  {
    title: 'Tables & Data',
    items: [
      { name: 'Table', slug: 'table' },
      { name: 'Empty State', slug: 'empty' },
      { name: 'Data Table', slug: 'data-table' },
      { name: 'Data Table Lab', slug: 'data-table-lab' },
    ],
  },
  {
    title: 'Layout',
    items: [
      { name: 'Layout Guide', slug: 'layout-guide' },
      { name: 'Main Section', slug: 'main-section' },
      { name: 'Page Header', slug: 'page-header' },
      { name: 'Page Bar', slug: 'page-bar' },
      { name: 'Aside Content', slug: 'aside-content' },
      { name: 'Item', slug: 'item' },
    ],
  },
  {
    title: 'Tabs',
    items: [{ name: 'Tabs', slug: 'tabs' }],
  },
  {
    title: 'Sidebar',
    items: [{ name: 'Sidebar Menu', slug: 'sidebar-menu' }],
  },
  {
    title: 'Utilities',
    items: [
      { name: 'Copy Text', slug: 'copy-text' },
      { name: 'Name Avatar', slug: 'name-avatar' },
      { name: 'Theme Toggle', slug: 'theme-toggle' },
      { name: 'Pagination Button', slug: 'pagination-button' },
      { name: 'Row Action Button', slug: 'row-action-button' },
      { name: 'Scroll To Top', slug: 'scroll-to-top' },
    ],
  },
];
