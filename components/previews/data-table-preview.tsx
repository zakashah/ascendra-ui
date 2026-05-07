'use client';

import { ComponentPreview } from '../component-preview';
import { SectionHeader } from '../section-header';
import { PropsTable } from '../props-table';
import { registry } from '@/lib/registry';
import { type ColumnDef } from '@/ascendra-ui/lib/table';
import { DataTableProvider } from '@/ascendra-ui/providers/data-table-context';
import { QueryProvider } from '@/ascendra-ui/hooks/use-query-context';
import { DataTable } from '@/ascendra-ui/components/data-table/data-table';
import { DataTableHeader } from '@/ascendra-ui/components/data-table/data-table-header';
import { DataTableHeaderRow } from '@/ascendra-ui/components/data-table/data-table-header-row';
import { DataTableHead } from '@/ascendra-ui/components/data-table/data-table-head';
import { DataTableBody } from '@/ascendra-ui/components/data-table/data-table-body';
import { DataTableRow } from '@/ascendra-ui/components/data-table/data-table-row';
import { DataTableCell } from '@/ascendra-ui/components/data-table/data-table-cell';
import { DataTableHighlight } from '@/ascendra-ui/components/data-table/data-table-highlight';
import { DataTableFoot } from '@/ascendra-ui/components/data-table/data-table-foot';
import { DataTableEmptyBody } from '@/ascendra-ui/components/data-table/data-table-empty-body';
import { DataTableLoadingBody } from '@/ascendra-ui/components/data-table/data-table-loading-body';
import { DataTableWrapper } from '@/ascendra-ui/components/data-table/data-table-wrapper';
import { DataTableBar } from '@/ascendra-ui/components/layout/data-table-bar';
import { DataTableBarContent } from '@/ascendra-ui/components/layout/data-table-bar-content';
import { DataTableBarAction } from '@/ascendra-ui/components/layout/data-table-bar-action';
import { DataTableSearchInput } from '@/ascendra-ui/components/data-table/data-table-search-input';
import { DataTableColumnManager } from '@/ascendra-ui/components/data-table/data-table-column-manager';
import { DataTableSortDropdown } from '@/ascendra-ui/components/data-table/data-table-sort-dropdown';
import { DataTableFilterDropdown } from '@/ascendra-ui/components/data-table/data-table-filter-dropdown';
import { DataTableFilterBar } from '@/ascendra-ui/components/data-table/data-table-filter-bar';
import { SimpleBadge } from '@/ascendra-ui/components/common-ui/simple-badge';
import { Button } from '@/ascendra-ui/components/ui/button';

// ─── Entity & mock data ───────────────────────────────────────────────────────

type InvoiceStatus = 'paid' | 'pending' | 'overdue' | 'cancelled';

interface Invoice {
  id: string;
  invoiceNumber: string;
  clientName: string;
  amount: number;
  dueDate: string;
  status: InvoiceStatus;
  issuedAt: string;
}

const statusBadgeVariant: Record<InvoiceStatus, 'green' | 'amber' | 'red'> = {
  paid: 'green',
  pending: 'amber',
  overdue: 'red',
  cancelled: 'red',
};

const statusLabel: Record<InvoiceStatus, string> = {
  paid: 'Paid',
  pending: 'Pending',
  overdue: 'Overdue',
  cancelled: 'Cancelled',
};

const MOCK_INVOICES: Invoice[] = [
  { id: '1', invoiceNumber: 'INV-001', clientName: 'Ahmed Khan',    amount: 12000, dueDate: '2024-02-15', status: 'paid',      issuedAt: '2024-01-15' },
  { id: '2', invoiceNumber: 'INV-002', clientName: 'Sara Ali',      amount: 8500,  dueDate: '2024-02-20', status: 'pending',   issuedAt: '2024-01-20' },
  { id: '3', invoiceNumber: 'INV-003', clientName: 'Usman Raza',    amount: 15000, dueDate: '2024-01-30', status: 'overdue',   issuedAt: '2024-01-01' },
  { id: '4', invoiceNumber: 'INV-004', clientName: 'Fatima Malik',  amount: 9200,  dueDate: '2024-02-28', status: 'paid',      issuedAt: '2024-01-28' },
  { id: '5', invoiceNumber: 'INV-005', clientName: 'Bilal Sheikh',  amount: 22000, dueDate: '2024-02-10', status: 'cancelled', issuedAt: '2024-01-10' },
  { id: '6', invoiceNumber: 'INV-006', clientName: 'Ayesha Noor',   amount: 5500,  dueDate: '2024-03-01', status: 'pending',   issuedAt: '2024-02-01' },
  { id: '7', invoiceNumber: 'INV-007', clientName: 'Hassan Tariq',  amount: 18500, dueDate: '2024-01-25', status: 'overdue',   issuedAt: '2023-12-25' },
  { id: '8', invoiceNumber: 'INV-008', clientName: 'Zara Qureshi',  amount: 11000, dueDate: '2024-03-15', status: 'paid',      issuedAt: '2024-02-15' },
];

// ─── Column definitions ───────────────────────────────────────────────────────

const INVOICE_COLUMNS: ColumnDef<Invoice>[] = [
  { key: 'invoiceNumber', label: 'Invoice #', freeze: true },
  { key: 'clientName',    label: 'Client',    freeze: true, filter: true },
  { key: 'amount',        label: 'Amount',    type: 'number' },
  { key: 'dueDate',       label: 'Due Date',  type: 'date' },
  {
    key: 'status',
    label: 'Status',
    sortable: false,
    filter: true,
    displayValue: (raw) => statusLabel[raw as InvoiceStatus] ?? raw,
  },
  { key: 'issuedAt', label: 'Issued', type: 'date', active: false },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatAmount(n: number) {
  return `PKR ${n.toLocaleString()}`;
}

function formatDate(s: string) {
  return new Date(s).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

// ─── Reusable live table ──────────────────────────────────────────────────────

function InvoiceDataTable({
  isLoading = false,
  data = MOCK_INVOICES,
}: {
  isLoading?: boolean;
  data?: Invoice[];
}) {
  return (
    <QueryProvider>
      <DataTableProvider data={data} columns={INVOICE_COLUMNS} isLoading={isLoading}>
        <DataTableBar>
          <DataTableBarContent>
            <DataTableSearchInput />
            <DataTableColumnManager />
            <DataTableSortDropdown />
            <DataTableFilterDropdown />
          </DataTableBarContent>
          <DataTableBarAction>
            <Button size="sm">+ Add Invoice</Button>
          </DataTableBarAction>
        </DataTableBar>
        <DataTableFilterBar />
        <DataTableWrapper>
          <DataTable scrollable horizontal height={340}>
            <DataTableHeader>
              <DataTableHeaderRow>
                <DataTableHead column="invoiceNumber" />
                <DataTableHead column="clientName" />
                <DataTableHead column="amount" />
                <DataTableHead column="dueDate" />
                <DataTableHead column="status" />
                <DataTableHead column="issuedAt" />
              </DataTableHeaderRow>
            </DataTableHeader>
            <DataTableBody>
              {(row: Invoice) => (
                <DataTableRow key={row.id}>
                  <DataTableCell column="invoiceNumber">
                    <DataTableHighlight text={row.invoiceNumber} item={row} itemKey="invoiceNumber" />
                  </DataTableCell>
                  <DataTableCell column="clientName">
                    <DataTableHighlight text={row.clientName} item={row} itemKey="clientName" />
                  </DataTableCell>
                  <DataTableCell column="amount">
                    <DataTableHighlight text={formatAmount(row.amount)} item={row} itemKey="amount" />
                  </DataTableCell>
                  <DataTableCell column="dueDate">
                    <DataTableHighlight text={formatDate(row.dueDate)} item={row} itemKey="dueDate" />
                  </DataTableCell>
                  <DataTableCell column="status">
                    <SimpleBadge variant={statusBadgeVariant[row.status]}>
                      {statusLabel[row.status]}
                    </SimpleBadge>
                  </DataTableCell>
                  <DataTableCell column="issuedAt">
                    <DataTableHighlight text={formatDate(row.issuedAt)} item={row} itemKey="issuedAt" />
                  </DataTableCell>
                </DataTableRow>
              )}
            </DataTableBody>
          </DataTable>
          <DataTableLoadingBody />
          <DataTableEmptyBody />
          <DataTableFoot />
        </DataTableWrapper>
      </DataTableProvider>
    </QueryProvider>
  );
}

// ─── Doc content ──────────────────────────────────────────────────────────────

const meta = registry['data-table'];

export function DataTableDocContent() {
  return (
    <div className="space-y-10">

      {/* ── Hero ── */}
      <ComponentPreview
        align="start"
        minHeight={460}
        code={`import { ColumnDef } from '@/ascendra-ui/lib/table';
import { DataTableProvider } from '@/ascendra-ui/providers/data-table-context';
import { QueryProvider } from '@/ascendra-ui/hooks/use-query-context';
import { DataTable } from '@/ascendra-ui/components/data-table/data-table';
import { DataTableHeader } from '@/ascendra-ui/components/data-table/data-table-header';
import { DataTableHeaderRow } from '@/ascendra-ui/components/data-table/data-table-header-row';
import { DataTableHead } from '@/ascendra-ui/components/data-table/data-table-head';
import { DataTableBody } from '@/ascendra-ui/components/data-table/data-table-body';
import { DataTableRow } from '@/ascendra-ui/components/data-table/data-table-row';
import { DataTableCell } from '@/ascendra-ui/components/data-table/data-table-cell';
import { DataTableHighlight } from '@/ascendra-ui/components/data-table/data-table-highlight';
import { DataTableFoot } from '@/ascendra-ui/components/data-table/data-table-foot';
import { DataTableEmptyBody } from '@/ascendra-ui/components/data-table/data-table-empty-body';
import { DataTableLoadingBody } from '@/ascendra-ui/components/data-table/data-table-loading-body';
import { DataTableWrapper } from '@/ascendra-ui/components/data-table/data-table-wrapper';
import { DataTableBar } from '@/ascendra-ui/components/layout/data-table-bar';
import { DataTableBarContent } from '@/ascendra-ui/components/layout/data-table-bar-content';
import { DataTableBarAction } from '@/ascendra-ui/components/layout/data-table-bar-action';
import { DataTableSearchInput } from '@/ascendra-ui/components/data-table/data-table-search-input';
import { DataTableColumnManager } from '@/ascendra-ui/components/data-table/data-table-column-manager';
import { DataTableSortDropdown } from '@/ascendra-ui/components/data-table/data-table-sort-dropdown';
import { DataTableFilterDropdown } from '@/ascendra-ui/components/data-table/data-table-filter-dropdown';
import { DataTableFilterBar } from '@/ascendra-ui/components/data-table/data-table-filter-bar';

// 1. Define columns
const INVOICE_COLUMNS: ColumnDef<Invoice>[] = [
  { key: 'invoiceNumber', label: 'Invoice #', freeze: true },
  { key: 'clientName',    label: 'Client',    freeze: true, filter: true },
  { key: 'amount',        label: 'Amount',    type: 'number' },
  { key: 'dueDate',       label: 'Due Date',  type: 'date' },
  {
    key: 'status',
    label: 'Status',
    sortable: false,
    filter: true,
    displayValue: (raw) => statusLabel[raw as InvoiceStatus] ?? raw,
  },
  { key: 'issuedAt', label: 'Issued', type: 'date', active: false },
];

// 2. Wrap with providers and compose the table
<QueryProvider>
  <DataTableProvider data={invoices} columns={INVOICE_COLUMNS} isLoading={isLoading}>

    {/* Toolbar */}
    <DataTableBar>
      <DataTableBarContent>
        <DataTableSearchInput />
        <DataTableColumnManager />
        <DataTableSortDropdown />
        <DataTableFilterDropdown />
      </DataTableBarContent>
      <DataTableBarAction>
        <Button size="sm">+ Add Invoice</Button>
      </DataTableBarAction>
    </DataTableBar>

    {/* Active filter chips */}
    <DataTableFilterBar />

    {/* Table */}
    <DataTableWrapper>
      <DataTable scrollable horizontal height={340}>
        <DataTableHeader>
          <DataTableHeaderRow>
            <DataTableHead column="invoiceNumber" />
            <DataTableHead column="clientName" />
            <DataTableHead column="amount" />
            <DataTableHead column="dueDate" />
            <DataTableHead column="status" />
            <DataTableHead column="issuedAt" />
          </DataTableHeaderRow>
        </DataTableHeader>
        <DataTableBody>
          {(row: Invoice) => (
            <DataTableRow key={row.id}>
              <DataTableCell column="invoiceNumber">
                <DataTableHighlight text={row.invoiceNumber} item={row} itemKey="invoiceNumber" />
              </DataTableCell>
              <DataTableCell column="clientName">
                <DataTableHighlight text={row.clientName} item={row} itemKey="clientName" />
              </DataTableCell>
              <DataTableCell column="amount">
                <DataTableHighlight text={formatAmount(row.amount)} item={row} itemKey="amount" />
              </DataTableCell>
              <DataTableCell column="dueDate">
                <DataTableHighlight text={formatDate(row.dueDate)} item={row} itemKey="dueDate" />
              </DataTableCell>
              <DataTableCell column="status">
                <SimpleBadge variant={statusBadgeVariant[row.status]}>
                  {statusLabel[row.status]}
                </SimpleBadge>
              </DataTableCell>
              <DataTableCell column="issuedAt">
                <DataTableHighlight text={formatDate(row.issuedAt)} item={row} itemKey="issuedAt" />
              </DataTableCell>
            </DataTableRow>
          )}
        </DataTableBody>
      </DataTable>
      <DataTableLoadingBody />
      <DataTableEmptyBody />
      <DataTableFoot />
    </DataTableWrapper>

  </DataTableProvider>
</QueryProvider>`}
      >
        <div className="w-full space-y-3">
          <InvoiceDataTable />
        </div>
      </ComponentPreview>

      {/* ── Examples ── */}
      <div className="space-y-8">
        <SectionHeader>Examples</SectionHeader>

        {/* Loading state */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Loading State</h3>
          <p className="text-xs text-muted-foreground">
            Pass <code className="rounded bg-muted px-1 font-mono text-xs">isLoading</code> to{' '}
            <code className="rounded bg-muted px-1 font-mono text-xs">DataTableProvider</code>.{' '}
            <code className="rounded bg-muted px-1 font-mono text-xs">DataTableLoadingBody</code> renders
            automatically; <code className="rounded bg-muted px-1 font-mono text-xs">DataTableBody</code> hides itself.
          </p>
          <ComponentPreview
            align="start"
            minHeight={200}
            code={`<DataTableProvider data={[]} columns={INVOICE_COLUMNS} isLoading={true}>
  <DataTableWrapper>
    <DataTable scrollable horizontal>
      <DataTableHeader>
        <DataTableHeaderRow>
          <DataTableHead column="invoiceNumber" />
          <DataTableHead column="clientName" />
          <DataTableHead column="status" />
        </DataTableHeaderRow>
      </DataTableHeader>
      <DataTableBody>{(row) => <DataTableRow key={row.id}>...</DataTableRow>}</DataTableBody>
    </DataTable>
    <DataTableLoadingBody />
    <DataTableEmptyBody />
    <DataTableFoot />
  </DataTableWrapper>
</DataTableProvider>`}
          >
            <div className="w-full">
              <QueryProvider>
                <DataTableProvider data={[]} columns={INVOICE_COLUMNS} isLoading={true}>
                  <DataTableWrapper>
                    <DataTable scrollable horizontal>
                      <DataTableHeader>
                        <DataTableHeaderRow>
                          <DataTableHead column="invoiceNumber" />
                          <DataTableHead column="clientName" />
                          <DataTableHead column="status" />
                        </DataTableHeaderRow>
                      </DataTableHeader>
                      <DataTableBody>
                        {() => null}
                      </DataTableBody>
                    </DataTable>
                    <DataTableLoadingBody />
                    <DataTableEmptyBody />
                    <DataTableFoot />
                  </DataTableWrapper>
                </DataTableProvider>
              </QueryProvider>
            </div>
          </ComponentPreview>
        </div>

        {/* Empty state */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Empty State</h3>
          <p className="text-xs text-muted-foreground">
            When <code className="rounded bg-muted px-1 font-mono text-xs">data</code> is empty and not loading,{' '}
            <code className="rounded bg-muted px-1 font-mono text-xs">DataTableEmptyBody</code> renders
            automatically. Customize the message with{' '}
            <code className="rounded bg-muted px-1 font-mono text-xs">title</code> and{' '}
            <code className="rounded bg-muted px-1 font-mono text-xs">description</code> props.
          </p>
          <ComponentPreview
            align="start"
            minHeight={200}
            code={`<DataTableProvider data={[]} columns={INVOICE_COLUMNS} isLoading={false}>
  <DataTableWrapper>
    <DataTable scrollable horizontal>
      <DataTableHeader>
        <DataTableHeaderRow>
          <DataTableHead column="invoiceNumber" />
          <DataTableHead column="clientName" />
          <DataTableHead column="status" />
        </DataTableHeaderRow>
      </DataTableHeader>
      <DataTableBody>{(row) => <DataTableRow key={row.id}>...</DataTableRow>}</DataTableBody>
    </DataTable>
    <DataTableLoadingBody />
    <DataTableEmptyBody
      title="No invoices found"
      description="Add a new invoice to get started."
    />
    <DataTableFoot />
  </DataTableWrapper>
</DataTableProvider>`}
          >
            <div className="w-full">
              <QueryProvider>
                <DataTableProvider data={[]} columns={INVOICE_COLUMNS} isLoading={false}>
                  <DataTableWrapper>
                    <DataTable scrollable horizontal>
                      <DataTableHeader>
                        <DataTableHeaderRow>
                          <DataTableHead column="invoiceNumber" />
                          <DataTableHead column="clientName" />
                          <DataTableHead column="status" />
                        </DataTableHeaderRow>
                      </DataTableHeader>
                      <DataTableBody>
                        {() => null}
                      </DataTableBody>
                    </DataTable>
                    <DataTableLoadingBody />
                    <DataTableEmptyBody
                      title="No invoices found"
                      description="Add a new invoice to get started."
                    />
                    <DataTableFoot />
                  </DataTableWrapper>
                </DataTableProvider>
              </QueryProvider>
            </div>
          </ComponentPreview>
        </div>

        {/* Column definition options */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Column Definition</h3>
          <p className="text-xs text-muted-foreground">
            <code className="rounded bg-muted px-1 font-mono text-xs">ColumnDef&lt;T&gt;</code> controls
            visibility, sorting, filtering, and display for each column. Define once; the providers and
            all toolbar components derive their behaviour from it.
          </p>
          <ComponentPreview
            align="start"
            minHeight={100}
            code={`import { ColumnDef } from '@/ascendra-ui/lib/table';

const INVOICE_COLUMNS: ColumnDef<Invoice>[] = [
  // freeze: always visible; cannot be hidden via the column manager
  { key: 'invoiceNumber', label: 'Invoice #', freeze: true },

  // filter: true → appears in the filter picker dropdown
  { key: 'clientName', label: 'Client', freeze: true, filter: true },

  // type: 'number' | 'date' — drives sort order and search formatting
  { key: 'amount',  label: 'Amount',   type: 'number' },
  { key: 'dueDate', label: 'Due Date', type: 'date' },

  // sortable: false — removes sort icon and click handler for this column
  // displayValue: maps raw data values to human-readable filter chip labels
  {
    key: 'status',
    label: 'Status',
    sortable: false,
    filter: true,
    displayValue: (raw) => statusLabel[raw as InvoiceStatus] ?? raw,
  },

  // active: false — column is hidden by default but toggleable via column manager
  { key: 'issuedAt', label: 'Issued', type: 'date', active: false },
];`}
          >
            <div className="w-full rounded-lg border bg-muted/30 px-5 py-4">
              <p className="text-xs text-muted-foreground">
                View the <span className="font-medium text-foreground">Code</span> tab to see the full{' '}
                <code className="rounded bg-muted px-1 font-mono">ColumnDef&lt;T&gt;[]</code> configuration.
              </p>
            </div>
          </ComponentPreview>
        </div>

        {/* Toolbar composition */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Toolbar Composition</h3>
          <p className="text-xs text-muted-foreground">
            <code className="rounded bg-muted px-1 font-mono text-xs">DataTableBar</code> is a flex row
            split into{' '}
            <code className="rounded bg-muted px-1 font-mono text-xs">DataTableBarContent</code> (left
            tools) and{' '}
            <code className="rounded bg-muted px-1 font-mono text-xs">DataTableBarAction</code> (right
            actions). Each tool inside reads state from{' '}
            <code className="rounded bg-muted px-1 font-mono text-xs">DataTableProvider</code> — include
            only what you need.
          </p>
          <ComponentPreview
            align="start"
            code={`<DataTableBar>
  <DataTableBarContent>
    {/* Text + fuzzy search */}
    <DataTableSearchInput />

    {/* Show/hide & reorder columns */}
    <DataTableColumnManager />

    {/* Sort by any sortable column */}
    <DataTableSortDropdown />

    {/* Filter by columns with filter: true */}
    <DataTableFilterDropdown />
  </DataTableBarContent>

  {/* Primary page action — sits on the right */}
  <DataTableBarAction>
    <Button size="sm">+ Add Invoice</Button>
  </DataTableBarAction>
</DataTableBar>

{/* Renders active filter chips below the bar */}
<DataTableFilterBar />`}
          >
            <div className="w-full space-y-3">
              <QueryProvider>
                <DataTableProvider data={MOCK_INVOICES} columns={INVOICE_COLUMNS}>
                  <DataTableBar>
                    <DataTableBarContent>
                      <DataTableSearchInput />
                      <DataTableColumnManager />
                      <DataTableSortDropdown />
                      <DataTableFilterDropdown />
                    </DataTableBarContent>
                    <DataTableBarAction>
                      <Button size="sm">+ Add Invoice</Button>
                    </DataTableBarAction>
                  </DataTableBar>
                  <DataTableFilterBar />
                </DataTableProvider>
              </QueryProvider>
            </div>
          </ComponentPreview>
        </div>

        {/* DataTableHighlight */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Search Highlighting</h3>
          <p className="text-xs text-muted-foreground">
            Wrap any cell text with{' '}
            <code className="rounded bg-muted px-1 font-mono text-xs">DataTableHighlight</code> to
            automatically highlight matched search terms. Pass the raw string value, the row object,
            and the column key — the component reads the active search term from context.
          </p>
          <ComponentPreview
            align="start"
            code={`<DataTableCell column="clientName">
  {/* Highlights any portion of clientName that matches the search term */}
  <DataTableHighlight
    text={row.clientName}
    item={row}
    itemKey="clientName"
  />
</DataTableCell>

{/* For cells with a custom display value (e.g. formatted currency),
    pass the formatted string as text but keep itemKey pointing to the
    original data key so the highlight ranges align correctly. */}
<DataTableCell column="amount">
  <DataTableHighlight
    text={formatAmount(row.amount)}
    item={row}
    itemKey="amount"
  />
</DataTableCell>`}
          >
            <div className="w-full rounded-lg border bg-muted/30 px-5 py-4">
              <p className="text-xs text-muted-foreground">
                Type in the search box in the hero example above to see highlighting in action.
              </p>
            </div>
          </ComponentPreview>
        </div>
      </div>

      {/* ── Props ── */}
      <div className="space-y-4">
        <SectionHeader>ColumnDef&lt;T&gt; Props</SectionHeader>
        <PropsTable props={meta.props ?? []} />
      </div>
    </div>
  );
}
