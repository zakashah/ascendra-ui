import type { DateRange } from 'react-day-picker';

export type FieldType =
  | 'text'
  | 'number'
  | 'select'
  | 'multiselect'
  | 'date'
  | 'daterange'
  | 'checkbox'
  | 'radio';

export interface SelectOption {
  value: string;
  label: string;
}

export interface ColumnsConfig {
  sm?: number;
  md?: number;
  lg?: number;
}

export interface FieldDef {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  /** Subtitle shown below the label in text-xs (above the input) */
  info?: string;
  /** Helper text shown below the input */
  description?: string;
  /** Shows a red "Mandatory" badge next to the description */
  mandatory?: boolean;
  /** Shows a gray "Optional" badge next to the description */
  optional?: boolean;
  span?: 1 | 2 | 'full';
  options?: SelectOption[];
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
}

export interface SectionBreak {
  _type: 'section';
  title: string;
  /** When true, renders a floating pill label on the panel item border */
  showTitle?: boolean;
}

export type ParamItem = FieldDef | SectionBreak;

export function isFieldDef(item: ParamItem): item is FieldDef {
  return !('_type' in item);
}

export type QueryParamValues = Record<
  string,
  string | number | boolean | Date | DateRange | string[] | undefined
>;

export type QueryGroup = 'query' | 'user-query' | 'filter';

export interface QueryDef {
  id: string;
  title: string;
  description: string;
  group: QueryGroup;
  /** Rendered in MainSectionFooter when present */
  info?: string;
  /** Grid column count per breakpoint — defaults to sm:1, md:1, lg:1 */
  columns?: ColumnsConfig;
  params?: ParamItem[];
}

export const PRESET_QUERIES: QueryDef[] = [
  {
    id: 'all-active',
    group: 'query',
    title: 'All Active Invoices',
    description: 'Currently pending or overdue',
  },
  {
    id: 'last-3-months',
    group: 'query',
    title: 'Last 3 Months',
    description: 'Invoices from the past 90 days',
  },
  {
    id: 'user-high-value',
    group: 'user-query',
    title: 'High Value Invoices',
    description: 'Invoices above PKR 50,000',
  },
  {
    id: 'user-class-10',
    group: 'user-query',
    title: 'Class 10 Fees',
    description: 'All fee invoices for class 10 students',
  },
  // ── 1-column filters ─────────────────────────────────────────────────────
  {
    id: 'by-status',
    group: 'filter',
    title: 'Invoices by Status',
    description: 'Filter invoices by one or more statuses',
    params: [
      {
        name: 'statuses',
        label: 'Statuses',
        type: 'multiselect',
        required: true,
        mandatory: true,
        // no span → defaults to 'full'
        options: [
          { value: 'paid', label: 'Paid' },
          { value: 'pending', label: 'Pending' },
          { value: 'overdue', label: 'Overdue' },
          { value: 'cancelled', label: 'Cancelled' },
        ],
      },
    ],
  },
  {
    id: 'by-date-range',
    group: 'filter',
    title: 'Invoices by Date Range',
    description: 'Filter by custom issue date window',
    params: [
      {
        name: 'dateRange',
        label: 'Date Range',
        type: 'daterange',
        required: true,
        mandatory: true,
        // no span → defaults to 'full'
      },
    ],
  },

  // ── 2-column filter — tests sm:1 md:2 lg:2 + mixed spans ────────────────
  {
    id: 'by-client',
    group: 'filter',
    title: 'By Client & Student',
    description: 'Search by client name, student, grade level, and payment status',
    columns: { sm: 1, md: 2, lg: 2 },
    params: [
      {
        name: 'clientName',
        label: 'Client Name',
        type: 'text',
        placeholder: 'e.g. Ahmed Family',
        optional: true,
        span: 1,
        info: 'Partial match',
        description: 'Matches any part of the client display name',
      },
      {
        name: 'studentName',
        label: 'Student Name',
        type: 'text',
        placeholder: 'e.g. Hamza',
        optional: true,
        span: 1,
        info: 'Partial match',
      },
      { _type: 'section', title: 'Filters' },
      {
        name: 'gradeLevel',
        label: 'Grade Level',
        type: 'select',
        optional: true,
        span: 1,
        options: [
          { value: 'class-9', label: 'Class 9' },
          { value: 'class-10', label: 'Class 10' },
          { value: 'class-11', label: 'Class 11' },
          { value: 'class-12', label: 'Class 12' },
        ],
      },
      {
        name: 'paymentStatus',
        label: 'Payment Status',
        type: 'select',
        optional: true,
        span: 1,
        options: [
          { value: 'paid', label: 'Paid' },
          { value: 'pending', label: 'Pending' },
          { value: 'overdue', label: 'Overdue' },
        ],
      },
      {
        name: 'issueDateRange',
        label: 'Issue Date Range',
        type: 'daterange',
        optional: true,
        span: 'full',
        info: 'Optional date window',
        description: 'Narrow results to a specific issue date window',
      },
    ],
  },

  // ── 3-column filter — tests sm:1 md:2 lg:3 + span 1 / 2 / full ─────────
  {
    id: 'advanced-filter',
    group: 'filter',
    title: 'Advanced Invoice Filter',
    description: 'Comprehensive filter covering all parameter types',
    info: 'All active filters use AND logic — results must match every condition you set.',
    columns: { sm: 1, md: 2, lg: 3 },
    params: [
      // Row 1 (lg): [clientName][invoiceNumber][primaryStatus]
      {
        name: 'clientName',
        label: 'Client Name',
        type: 'text',
        placeholder: 'e.g. Ahmed Family',
        required: false,
        optional: true,
        span: 1,
        minLength: 2,
        maxLength: 50,
        info: 'Partial match',
        description: 'Matches any part of the client display name',
      },
      {
        name: 'invoiceNumber',
        label: 'Invoice Number',
        type: 'text',
        placeholder: 'INV-001',
        required: true,
        mandatory: true,
        span: 1,
        maxLength: 20,
        info: 'Exact reference match',
      },
      {
        name: 'primaryStatus',
        label: 'Invoice Status',
        type: 'select',
        required: true,
        mandatory: true,
        span: 1,
        info: '\u00A0',
        options: [
          { value: 'paid', label: 'Paid' },
          { value: 'pending', label: 'Pending' },
          { value: 'overdue', label: 'Overdue' },
          { value: 'cancelled', label: 'Cancelled' },
        ],
      },
      // Row 2 (lg): [minAmount][maxAmount][issuedFrom]
      {
        name: 'minAmount',
        label: 'Min Amount (PKR)',
        type: 'number',
        placeholder: '0',
        required: false,
        optional: true,
        span: 1,
        min: 0,
        max: 9999999,
        info: 'Inclusive lower bound',
      },
      {
        name: 'maxAmount',
        label: 'Max Amount (PKR)',
        type: 'number',
        placeholder: '500,000',
        required: true,
        mandatory: true,
        span: 1,
        min: 1,
        max: 9999999,
        info: 'Inclusive upper bound',
      },
      {
        name: 'issuedFrom',
        label: 'Issued From',
        type: 'date',
        required: true,
        mandatory: true,
        span: 1,
        info: 'Inclusive start date',
        description: 'Invoices issued on or after this date',
      },

      // Row 3 (lg): [feeCategories ×2][dueDateRange ×2 wraps to row 4]
      // {
      //   name: 'feeCategories',
      //   label: 'Fee Categories',
      //   type: 'multiselect',
      //   required: true,
      //   optional: true,
      //   span:  'full',
      //   info: 'Select all that apply',
      //   options: [
      //     { value: 'tuition', label: 'Tuition' },
      //     { value: 'transport', label: 'Transport' },
      //     { value: 'uniform', label: 'Uniform' },
      //     { value: 'exam', label: 'Exam Fee' },
      //     { value: 'activity', label: 'Activity Fee' },
      //   ],
      // },
      {
        name: 'dueDateRange',
        label: 'Due Date Range',
        type: 'daterange',
        required: true,
        optional: true,
        span: 'full',
        info: 'Optional date window',
        description: 'Optionally narrow results by due date window',
      },

      // ── Sort & Options section ────────────────────────────────────────────
      { _type: 'section', title: 'Sort & Options', showTitle: true },

      // Row 5 (lg): [sortOrder ×full]
      {
        name: 'sortOrder',
        label: 'Sort Order',
        type: 'radio',
        mandatory: true,
        required: true,
        span: 'full',
        options: [
          { value: 'newest', label: 'Newest First' },
          { value: 'oldest', label: 'Oldest First' },
          { value: 'highest', label: 'Highest Amount' },
          { value: 'lowest', label: 'Lowest Amount' },
        ],
      },

      // Row 6 (lg): [includeArchived ×full]
      {
        name: 'includeArchived',
        label: 'Include Archived',
        type: 'checkbox',
        span: 'full',
        description: 'Include archived invoices in results',
        mandatory: true,
        required: true
      },
    ],
  },
];
