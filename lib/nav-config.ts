import { NavCategory } from './types';

export const navConfig: NavCategory[] = [
  {
    title: 'Getting Started',
    items: [{ name: 'Overview', slug: '' }],
  },
  {
    title: 'Feedback & Status',
    items: [
      { name: 'Simple Badge', slug: 'simple-badge' },
      { name: 'Bubble Badge', slug: 'bubble-badge' },
      { name: 'Status Dot', slug: 'status-dot' },
      { name: 'Simple Alert', slug: 'simple-alert' },
      { name: 'Pro Badge', slug: 'pro-badge' },
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
    ],
  },
  {
    title: 'Navigation',
    items: [
      { name: 'Anchor', slug: 'anchor' },
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
    title: 'Tables & Data',
    items: [
      { name: 'Table', slug: 'table' },
      { name: 'Empty State', slug: 'empty' },
    ],
  },
  {
    title: 'Layout',
    items: [
      { name: 'Main Section', slug: 'main-section' },
      { name: 'Page Header', slug: 'page-header' },
      { name: 'Page Bar', slug: 'page-bar' },
      { name: 'Aside Content', slug: 'aside-content' },
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
    ],
  },
];
