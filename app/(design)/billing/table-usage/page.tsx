'use client';

import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';
import { DataTable } from '@/components/custom/data-table/data-table';
import { DataTableBody } from '@/components/custom/data-table/data-table-body';
import { DataTableCell } from '@/components/custom/data-table/data-table-cell';
import { DataTableColumnManager } from '@/components/custom/data-table/data-table-column-manager';
import { DataTableEmptyBody } from '@/components/custom/data-table/data-table-empty-body';
import { DataTableFilterBar } from '@/components/custom/data-table/data-table-filter-bar';
import { DataTableFilterDropdown } from '@/components/custom/data-table/data-table-filter-dropdown';
import { DataTableFoot } from '@/components/custom/data-table/data-table-foot';
import { DataTableHead } from '@/components/custom/data-table/data-table-head';
import { DataTableHeader } from '@/components/custom/data-table/data-table-header';
import { DataTableHeaderRow } from '@/components/custom/data-table/data-table-header-row';
import { DataTableHighlight } from '@/components/custom/data-table/data-table-highlight';
import { DataTableLoadingBody } from '@/components/custom/data-table/data-table-loading-body';
import { DataTableRow } from '@/components/custom/data-table/data-table-row';
import { DataTableSearchInput } from '@/components/custom/data-table/data-table-search-input';
import { DataTableSortDropdown } from '@/components/custom/data-table/data-table-sort-dropdown';
import { DataTableWrapper } from '@/components/custom/data-table/data-table-wrapper';
import { QueryBar } from '@/components/custom/data-table/query-bar';
import { QueryParamPanel } from '@/components/custom/data-table/query-param-panel';
import { DataTableBar } from '@/components/custom/layout/data-table-bar';
import { DataTableBarAction } from '@/components/custom/layout/data-table-bar-action';
import { DataTableBarContent } from '@/components/custom/layout/data-table-bar-content';
import { MainContent } from '@/components/custom/layout/main-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderGroup } from '@/components/custom/layout/page-header-group';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageSubtitle } from '@/components/custom/layout/page-subtitle';
import { PageTitle } from '@/components/custom/layout/page-title';
import { TabContent } from '@/components/custom/tabs/tab-content';
import { TabList } from '@/components/custom/tabs/tab-list';
import { TabTrigger } from '@/components/custom/tabs/tab-trigger';
import { Tabs } from '@/components/custom/tabs/tabs';
import { Button } from '@/components/custom/ui/button';
import { DataTableProvider } from '@/hooks/use-data-table';
import { useInvoiceList } from '@/hooks/use-invoices';
import { QueryProvider } from '@/hooks/use-query-context';
import { formatAmount, formatDate } from '@/lib/format';
import { type ColumnDef } from '@/lib/table';
import { type Invoice, type InvoiceStatus } from '@/types/invoice';

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

const INVOICE_COLUMNS: ColumnDef<Invoice>[] = [
  { key: 'invoiceNumber', label: 'Invoice #', freeze: true },
  { key: 'clientName', label: 'Client', filter: true, freeze: true },
  { key: 'amount', label: 'Amount', type: 'number' },
  { key: 'dueDate', label: 'Due Date', type: 'date' },
  {
    key: 'status',
    label: 'Status',
    sortable: false,
    filter: true,
    displayValue: (raw) => statusLabel[raw as InvoiceStatus] ?? raw,
  },
  { key: 'issuedAt', label: 'Issued', type: 'date', active: false },
];

export default function TableUsagePage() {
  const { data, isLoading } = useInvoiceList();

  return (
    <>
      <PageHeader>
        <PageHeaderGroup>
          <PageTitle>Table usage</PageTitle>
          <PageSubtitle>To explain the complete table usage plan</PageSubtitle>
        </PageHeaderGroup>
      </PageHeader>
      <PageMain>
        <Tabs defaultValue="table-usage">
          <TabList>
            <TabTrigger value="table-usage">Table usage</TabTrigger>
            <TabTrigger value="tab">Tab</TabTrigger>
          </TabList>
          <TabContent value="table-usage">
            <MainContent>
              <QueryProvider>
                <DataTableProvider
                  data={data?.data ?? []}
                  columns={INVOICE_COLUMNS}
                  isLoading={isLoading}
                >
                  <QueryBar />
                  <QueryParamPanel />
                  <DataTableBar>
                    <DataTableBarContent>
                      <DataTableSearchInput />
                      <DataTableColumnManager />
                      <DataTableSortDropdown />
                      <DataTableFilterDropdown />
                    </DataTableBarContent>
                    <DataTableBarAction>
                      <Button>+ Add item</Button>
                    </DataTableBarAction>
                  </DataTableBar>
                  <DataTableFilterBar />
                  <DataTableWrapper>
                    <DataTable scrollable height={400}>
                      <DataTableHeader>
                        <DataTableHeaderRow>
                          <DataTableHead column="invoiceNumber">
                            Invoice #
                          </DataTableHead>
                          <DataTableHead column="clientName">
                            Client
                          </DataTableHead>
                          <DataTableHead column="status" />
                          <DataTableHead column="amount" />
                          <DataTableHead column="dueDate" />
                          <DataTableHead column="issuedAt" />
                        </DataTableHeaderRow>
                      </DataTableHeader>
                      <DataTableBody>
                        {(row: Invoice) => (
                          <DataTableRow key={row.id}>
                            <DataTableCell column="invoiceNumber">
                              <div>
                                <DataTableHighlight
                                  text={row.invoiceNumber}
                                  item={row}
                                  itemKey="invoiceNumber"
                                />
                                <div className="text-muted-foreground text-xs">
                                  <DataTableHighlight
                                    text={row.title}
                                    item={row}
                                    itemKey="title"
                                  />
                                </div>
                              </div>
                            </DataTableCell>
                            <DataTableCell column="clientName">
                              <DataTableHighlight
                                text={row.clientName}
                                item={row}
                                itemKey="clientName"
                              />
                            </DataTableCell>
                            <DataTableCell column="status">
                              <SimpleBadge
                                variant={statusBadgeVariant[row.status]}
                              >
                                {statusLabel[row.status]}
                              </SimpleBadge>
                            </DataTableCell>
                            <DataTableCell column="amount">
                              <DataTableHighlight
                                text={formatAmount(row.amount)}
                                item={row}
                                itemKey="amount"
                              />
                            </DataTableCell>
                            <DataTableCell column="dueDate">
                              <DataTableHighlight
                                text={formatDate(row.dueDate)}
                                item={row}
                                itemKey="dueDate"
                              />
                            </DataTableCell>
                            <DataTableCell column="issuedAt">
                              <DataTableHighlight
                                text={formatDate(row.issuedAt)}
                                item={row}
                                itemKey="issuedAt"
                              />
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
            </MainContent>
          </TabContent>
          <TabContent value="tab">
            <MainContent>another tab</MainContent>
          </TabContent>
        </Tabs>
      </PageMain>
    </>
  );
}
