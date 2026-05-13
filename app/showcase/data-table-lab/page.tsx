"use client";

import { type ColumnDef } from "@/ascendra-ui/providers/data-table/data-table.types";
import {
  PRESET_QUERIES,
  fetchMockInvoices,
  type Invoice,
  type InvoiceStatus,
} from "@/lib/mock/invoice-mock";
import {
  type QueryFunctionMap,
  type FieldOptionsMap,
} from "@/ascendra-ui/providers/data-table-query/data-table-query.types";
import { DataTableWithQueryProvider } from "@/ascendra-ui/providers/data-table-query/data-table-with-query.provider";

import { DataTable } from "@/ascendra-ui/components/data-table/data-table";
import { DataTableHeader } from "@/ascendra-ui/components/data-table/data-table-header";
import { DataTableHeaderRow } from "@/ascendra-ui/components/data-table/data-table-header-row";
import { DataTableHead } from "@/ascendra-ui/components/data-table/data-table-head";
import { DataTableBody } from "@/ascendra-ui/components/data-table/data-table-body";
import { DataTableRow } from "@/ascendra-ui/components/data-table/data-table-row";
import { DataTableCell } from "@/ascendra-ui/components/data-table/data-table-cell";
import { DataTableCheckboxHead } from "@/ascendra-ui/components/data-table/data-table-checkbox-head";
import { DataTableCheckboxCell } from "@/ascendra-ui/components/data-table/data-table-checkbox-cell";
import { DataTableHighlight } from "@/ascendra-ui/components/data-table/data-table-highlight";
import { DataTableFoot } from "@/ascendra-ui/components/data-table/data-table-foot";
import { DataTableEmptyBody } from "@/ascendra-ui/components/data-table/data-table-empty-body";
import { DataTableErrorBody } from "@/ascendra-ui/components/data-table/data-table-error-body";
import { DataTableLoadingBody } from "@/ascendra-ui/components/data-table/data-table-loading-body";
import { DataTableWrapper } from "@/ascendra-ui/components/data-table/data-table-wrapper";
import { DataTableBar } from "@/ascendra-ui/components/layout/data-table-bar";
import { DataTableBarContent } from "@/ascendra-ui/components/layout/data-table-bar-content";
import { DataTableBarAction } from "@/ascendra-ui/components/layout/data-table-bar-action";
import { DataTableSearchInput } from "@/ascendra-ui/components/data-table/data-table-search-input";
import { DataTableColumnManager } from "@/ascendra-ui/components/data-table/data-table-column-manager";
import { DataTableSortDropdown } from "@/ascendra-ui/components/data-table/data-table-sort-dropdown";
import { DataTableFilterDropdown } from "@/ascendra-ui/components/data-table/data-table-filter-dropdown";
import { DataTableFilterBar } from "@/ascendra-ui/components/data-table/data-table-filter-bar";
import { QueryBar } from "@/ascendra-ui/components/data-table/query-bar";
import { QueryParamPanel } from "@/ascendra-ui/components/data-table/query-param-panel";

import { PageHeader } from "@/ascendra-ui/components/layout/page-header";
import { PageHeaderGroup } from "@/ascendra-ui/components/layout/page-header-group";
import { PageTitle } from "@/ascendra-ui/components/layout/page-title";
import { PageSubtitle } from "@/ascendra-ui/components/layout/page-subtitle";
import { PageMain } from "@/ascendra-ui/components/layout/page-main";

import { SimpleBadge } from "@/ascendra-ui/components/common-ui/simple-badge";
import { Button } from "@/ascendra-ui/components/ui/button";

import { Tabs } from "@/ascendra-ui/components/tabs/tabs";
import { TabList } from "@/ascendra-ui/components/tabs/tab-list";
import { TabTrigger } from "@/ascendra-ui/components/tabs/tab-trigger";
import { TabContent } from "@/ascendra-ui/components/tabs/tab-content";
import { MainContent } from "@/ascendra-ui/components/layout/main-content";
import { formatAmount, formatDate } from "@/ascendra-ui/utils/common.util";
import { DataTableGuide } from "./_guide";
import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/ascendra-ui/components/ui/dropdown-menu";
import {
  DataTableHeadAction,
  DataTableBulkExportHeadAction,
  DataTableBulkDeleteHeadAction,
} from "@/ascendra-ui/components/data-table/data-table-head-action";
import {
  DataTableDeleteRowAction,
  DataTableDuplicateRowAction,
  DataTableEditRowAction,
  DataTableRowAction,
  DataTableRowActionItem,
  DataTableViewRowAction,
} from "@/ascendra-ui/components/data-table/data-table-row-action";
import { LuNotebookPen, LuTicketCheck, LuTrash2 } from "react-icons/lu";

const statusVariant: Record<InvoiceStatus, "green" | "amber" | "red"> = {
  Paid: "green",
  Pending: "amber",
  Overdue: "red",
  Cancelled: "red",
};

const INVOICE_COLUMNS: ColumnDef<Invoice>[] = [
  { key: "invoiceNumber", label: "Invoice #", freeze: true },
  { key: "clientName", label: "Client", freeze: true, filter: true },
  { key: "amount", label: "Amount", type: "number" },
  { key: "dueDate", label: "Due Date", type: "date" },
  {
    key: "status",
    label: "Status",
    sortable: false,
    filter: true,
  },
  { key: "issuedAt", label: "Issued", type: "date", active: false },
];

const INVOICE_QUERY_FUNCTIONS: QueryFunctionMap<Invoice> = Object.fromEntries(
  PRESET_QUERIES.map((q) => [
    q.id,
    async (params, batch) => {
      console.log("params are: ", params, "batch:", batch);
      const result = await fetchMockInvoices(q.id, batch);
      console.log("result is: ", result);
      return { data: result.data, totalBatches: result.meta.totalPages };
    },
  ]),
);

// Demonstrates dynamic fieldOptions — overrides static options in PRESET_QUERIES
const INVOICE_FIELD_OPTIONS: FieldOptionsMap = {
  // Static override: simulates options fetched from a server (adds "Draft" status)
  "by-status": {
    statuses: [
      { value: "Paid", label: "Paid" },
      { value: "Pending", label: "Pending" },
      { value: "Overdue", label: "Overdue" },
      { value: "Cancelled", label: "Cancelled" },
      { value: "Draft", label: "Draft" },
    ],
  },
  // Reactive resolver: paymentStatus options depend on the selected gradeLevel
  "by-client": {
    paymentStatus: (values) => {
      const base = [
        { value: "Paid", label: "Paid" },
        { value: "Pending", label: "Pending" },
        { value: "Overdue", label: "Overdue" },
      ];
      // Class 12 students have no Overdue invoices — remove it when that grade is selected
      if (values.gradeLevel === "class-12") {
        return base.filter((o) => o.value !== "Overdue");
      }
      return base;
    },
  },
};

export default function DataTableLabPage() {
  return (
    <div className="mx-auto max-w-5xl px-8 py-12">
      <PageHeader>
        <PageHeaderGroup>
          <PageTitle>Data Table Lab</PageTitle>
          <PageSubtitle>
            Fully-featured sandbox — switch queries, test filters, and verify
            behaviour during refactoring.
          </PageSubtitle>
        </PageHeaderGroup>
      </PageHeader>
      <PageMain>
        <Tabs defaultValue="table-usage">
          <TabList>
            <TabTrigger value="table-usage">Table usage</TabTrigger>
            <TabTrigger value="developer-guide">Developer guide</TabTrigger>
          </TabList>
          <TabContent value="table-usage">
            <MainContent>
              <DataTableWithQueryProvider
                queries={PRESET_QUERIES}
                queryFunctions={INVOICE_QUERY_FUNCTIONS}
                fieldOptions={INVOICE_FIELD_OPTIONS}
                columns={INVOICE_COLUMNS}
                getRowId={(row) => String(row.id)}
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
                    <Button>+ Add Invoice</Button>
                  </DataTableBarAction>
                </DataTableBar>
                <DataTableFilterBar />
                <DataTableWrapper>
                  <DataTable scrollable vertical horizontal height={200}>
                    <DataTableHeader>
                      <DataTableHeaderRow>
                        <DataTableCheckboxHead />
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
                        <DataTableHeadAction
                          variant="visible"
                          onAction={(id, selectedRowIds) =>
                            console.log("head action:", id, selectedRowIds)
                          }
                        >
                          <DataTableBulkExportHeadAction />
                          <DropdownMenuSeparator />
                          <DataTableBulkDeleteHeadAction />
                        </DataTableHeadAction>
                      </DataTableHeaderRow>
                    </DataTableHeader>
                    <DataTableBody>
                      {(row: Invoice) => (
                        <DataTableRow key={row.id}>
                          <DataTableCheckboxCell rowId={String(row.id)} />
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
                            <SimpleBadge variant={statusVariant[row.status]}>
                              {row.status}
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
                          <DataTableRowAction
                            variant="visible"
                            onAction={(id) =>
                              console.log("row action:", id, row.id)
                            }
                          >
                            <DropdownMenuLabel>
                              Default row actions
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DataTableViewRowAction />
                            <DataTableEditRowAction />
                            <DataTableDuplicateRowAction />
                            <DataTableDeleteRowAction />
                            <DropdownMenuSeparator />
                            <DataTableRowActionItem
                              id="set-default"
                              icon={<LuTicketCheck />}
                            >
                              Set as default role set
                            </DataTableRowActionItem>
                            <DataTableRowActionItem
                              id="edit"
                              icon={<LuNotebookPen />}
                            >
                              Edit role set
                            </DataTableRowActionItem>
                            <DropdownMenuSeparator />
                            <DataTableRowActionItem
                              id="delete"
                              icon={<LuTrash2 />}
                              variant="destructive"
                            >
                              Delete role set
                            </DataTableRowActionItem>
                          </DataTableRowAction>
                        </DataTableRow>
                      )}
                    </DataTableBody>
                  </DataTable>
                  <DataTableLoadingBody />
                  <DataTableErrorBody />
                  <DataTableEmptyBody />
                  <DataTableFoot />
                </DataTableWrapper>
              </DataTableWithQueryProvider>
            </MainContent>
          </TabContent>
          <TabContent value="developer-guide">
            <MainContent>
              <DataTableGuide />
            </MainContent>
          </TabContent>
        </Tabs>
      </PageMain>
    </div>
  );
}
