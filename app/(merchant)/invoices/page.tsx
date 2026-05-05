'use client';

import { useState } from 'react';

import { RowActionButton } from '@/components/custom/common-ui/row-action-button';
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';
import { DataTableBarContent } from '@/components/custom/layout/data-table-bar-content';
import { MainContent } from '@/components/custom/layout/main-content';
import { PageContent } from '@/components/custom/layout/page-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderAction } from '@/components/custom/layout/page-header-action';
import { PageHeaderGroup } from '@/components/custom/layout/page-header-group';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageSubtitle } from '@/components/custom/layout/page-subtitle';
import { PageTitle } from '@/components/custom/layout/page-title';
import { PageWrapper } from '@/components/custom/layout/page-wrapper';
import { TableBar } from '@/components/custom/layout/table-bar';
import { Button } from '@/components/custom/ui/button';
import { Checkbox } from '@/components/custom/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/custom/ui/dropdown-menu';
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/custom/ui/empty';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/custom/ui/input-group';
import {
  EmptyBody,
  Table,
  TableBody,
  TableCell,
  TableFoot,
  TableHead,
  TableHeader,
  TableHeaderRow,
  TableRow,
  TableWrapper,
} from '@/components/custom/ui/table';
import { formatAmount } from '@/lib/format';
import {
  LuChevronDown,
  LuDownload,
  LuEye,
  LuFilter,
  LuLock,
  LuPlus,
  LuPrinter,
  LuReceipt,
  LuSearch,
  LuSettings,
} from 'react-icons/lu';
import { RiDraggable } from 'react-icons/ri';
import { RxCrossCircled } from 'react-icons/rx';

type Status = 'paid' | 'pending' | 'overdue';

interface Invoice {
  id: string;
  invoiceNumber: string;
  parentName: string;
  studentName: string;
  amount: number;
  date: string;
  dueDate: string;
  status: Status;
}

const MOCK_INVOICES: Invoice[] = [
  {
    id: '1',
    invoiceNumber: 'INV-2026-001',
    parentName: 'Ahmed Raza',
    studentName: 'Ali Raza',
    amount: 15000,
    date: 'Oct 01, 2026',
    dueDate: 'Oct 15, 2026',
    status: 'paid',
  },
  {
    id: '2',
    invoiceNumber: 'INV-2026-002',
    parentName: 'Fatima Khan',
    studentName: 'Ayesha Khan',
    amount: 22000,
    date: 'Oct 01, 2026',
    dueDate: 'Oct 15, 2026',
    status: 'pending',
  },
  {
    id: '3',
    invoiceNumber: 'INV-2026-003',
    parentName: 'Usman Tariq',
    studentName: 'Bilal Tariq',
    amount: 15000,
    date: 'Sep 01, 2026',
    dueDate: 'Sep 15, 2026',
    status: 'overdue',
  },
  {
    id: '4',
    invoiceNumber: 'INV-2026-004',
    parentName: 'Usman Tariq',
    studentName: 'Zainab Tariq',
    amount: 12000,
    date: 'Sep 01, 2026',
    dueDate: 'Sep 15, 2026',
    status: 'overdue',
  },
  {
    id: '5',
    invoiceNumber: 'INV-2026-005',
    parentName: 'Sara Malik',
    studentName: 'Hassan Malik',
    amount: 18000,
    date: 'Oct 05, 2026',
    dueDate: 'Oct 20, 2026',
    status: 'paid',
  },
  {
    id: '6',
    invoiceNumber: 'INV-2026-006',
    parentName: 'Kamran Sheikh',
    studentName: 'Omar Sheikh',
    amount: 25000,
    date: 'Oct 05, 2026',
    dueDate: 'Oct 20, 2026',
    status: 'pending',
  },
];

const STATUS_OPTIONS: { label: string; value: Status }[] = [
  { label: 'Paid', value: 'paid' },
  { label: 'Pending', value: 'pending' },
  { label: 'Overdue', value: 'overdue' },
];

const STATUS_BADGE: Record<
  Status,
  { variant: 'green' | 'secondary' | 'orange' | 'red'; label: string }
> = {
  paid: { variant: 'green', label: 'Paid' },
  pending: { variant: 'orange', label: 'Pending' },
  overdue: { variant: 'red', label: 'Overdue' },
};

type ColumnKey = 'parent' | 'student' | 'amount' | 'date' | 'status';

const TOGGLEABLE_COLUMNS: { key: ColumnKey; label: string }[] = [
  { key: 'parent', label: 'Parent' },
  { key: 'student', label: 'Student' },
  { key: 'amount', label: 'Amount' },
  { key: 'date', label: 'Date' },
  { key: 'status', label: 'Status' },
];

export default function InvoicesPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<Status | null>(null);
  const [columns, setColumns] = useState<Record<ColumnKey, boolean>>({
    parent: true,
    student: true,
    amount: true,
    date: true,
    status: true,
  });

  const toggleColumn = (key: ColumnKey) => {
    setColumns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filtered = MOCK_INVOICES.filter((inv) => {
    const matchSearch =
      search === '' ||
      inv.invoiceNumber.toLowerCase().includes(search.toLowerCase()) ||
      inv.parentName.toLowerCase().includes(search.toLowerCase()) ||
      inv.studentName.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === null || inv.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const hasActiveFilters = statusFilter !== null;

  return (
    <>
      <PageHeader>
        <PageHeaderGroup>
          <PageTitle>Invoices</PageTitle>
          <PageSubtitle>
            Manage, download, and print your invoices.
          </PageSubtitle>
        </PageHeaderGroup>
        <PageHeaderAction>
          <Button>
            <LuPlus /> Create invoice
          </Button>
        </PageHeaderAction>
      </PageHeader>
      <PageMain>
        <PageWrapper>
          <PageContent>
            <MainContent>
              <TableBar>
                <DataTableBarContent>
                  <InputGroup className="max-w-xs">
                    <InputGroupInput
                      placeholder="Search by ID or parent name..."
                      className="w-65"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <InputGroupAddon>
                      <LuSearch className="text-foreground size-3.5" />
                    </InputGroupAddon>
                  </InputGroup>
                  {/* Columns toggle */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild className="group">
                      <Button variant="secondary">
                        <LuSettings />
                        <span>Columns</span>
                        <LuChevronDown className="text-muted-foreground font-bold transition-transform duration-300 group-data-[state=open]:rotate-180" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-54 px-0 py-1"
                      sideOffset={8}
                      align="start"
                      onCloseAutoFocus={(e) => e.preventDefault()}
                    >
                      <div className="text-muted-foreground px-3 py-1 text-xs">
                        Active columns
                      </div>
                      <div className="flex items-center justify-between overflow-hidden px-3 py-1">
                        <div className="flex items-center gap-2">
                          <Checkbox disabled checked />
                          <div className="mt-1">Invoice ID</div>
                        </div>
                        <LuLock className="text-muted-foreground size-2.5 stroke-3" />
                      </div>
                      {TOGGLEABLE_COLUMNS.map(({ key, label }) => (
                        <div
                          key={key}
                          className="flex items-center justify-between overflow-hidden px-3 py-1"
                        >
                          <div className="flex items-center gap-2">
                            <Checkbox
                              checked={columns[key]}
                              onCheckedChange={() => toggleColumn(key)}
                            />
                            <div className="mt-1">{label}</div>
                          </div>
                          <RiDraggable className="text-muted-foreground -mr-0.5 cursor-pointer" />
                        </div>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  {/* Filter */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild className="group">
                      <Button variant="secondary" size="icon">
                        <LuFilter />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      sideOffset={8}
                      className="w-44"
                      align="start"
                      onCloseAutoFocus={(e) => e.preventDefault()}
                    >
                      {STATUS_OPTIONS.map(({ label, value }) => (
                        <DropdownMenuItem
                          key={value}
                          onSelect={() => setStatusFilter(value)}
                        >
                          {label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </DataTableBarContent>
              </TableBar>

              {/* Active filter pills */}
              {hasActiveFilters && (
                <div className="-mb-2 flex flex-wrap items-center gap-2">
                  {statusFilter && (
                    <div className="bg-muted flex items-center rounded-full border border-dashed border-gray-700/30 py-0.75 text-xs">
                      <button
                        type="button"
                        className="flex cursor-pointer items-center gap-1 px-1.5"
                        onClick={() => setStatusFilter(null)}
                      >
                        <RxCrossCircled />
                        Status
                      </button>
                      <div className="flex items-center gap-1 border-l px-1.5">
                        {STATUS_BADGE[statusFilter].label}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button
                              type="button"
                              className="flex cursor-pointer items-center"
                            >
                              <LuChevronDown className="text-muted-foreground" />
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            sideOffset={8}
                            className="w-44"
                            onCloseAutoFocus={(e) => e.preventDefault()}
                          >
                            {STATUS_OPTIONS.map(({ label, value }) => (
                              <DropdownMenuItem
                                key={value}
                                onSelect={() => setStatusFilter(value)}
                              >
                                {label}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  )}
                  <button
                    type="button"
                    className="text-muted-foreground cursor-pointer text-xs"
                    onClick={() => setStatusFilter(null)}
                  >
                    Clear filters
                  </button>
                </div>
              )}

              <TableWrapper>
                <Table scrollable>
                  <TableHeader>
                    <TableHeaderRow>
                      <TableHead>Invoice ID</TableHead>
                      {columns.parent && <TableHead>Parent</TableHead>}
                      {columns.student && <TableHead>Student</TableHead>}
                      {columns.amount && <TableHead>Amount</TableHead>}
                      {columns.date && <TableHead>Due Date</TableHead>}
                      {columns.status && <TableHead>Status</TableHead>}
                      <TableHead></TableHead>
                    </TableHeaderRow>
                  </TableHeader>
                  <TableBody>
                    {filtered.map((inv) => (
                      <TableRow key={inv.id} className="group/row">
                        <TableCell>
                          <div className="text-foreground font-medium">
                            {inv.invoiceNumber}
                          </div>
                          <div className="text-muted-foreground mt-0.5 text-xs">
                            {inv.date}
                          </div>
                        </TableCell>
                        {columns.parent && (
                          <TableCell className="text-foreground">
                            {inv.parentName}
                          </TableCell>
                        )}
                        {columns.student && (
                          <TableCell className="text-muted-foreground">
                            {inv.studentName}
                          </TableCell>
                        )}
                        {columns.amount && (
                          <TableCell className="font-medium">
                            {formatAmount(inv.amount)}
                          </TableCell>
                        )}
                        {columns.date && (
                          <TableCell className="text-muted-foreground">
                            {inv.dueDate}
                          </TableCell>
                        )}
                        {columns.status && (
                          <TableCell>
                            <SimpleBadge
                              variant={STATUS_BADGE[inv.status].variant}
                              className="font-normal"
                            >
                              {STATUS_BADGE[inv.status].label}
                            </SimpleBadge>
                          </TableCell>
                        )}
                        <TableCell className="w-8">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <RowActionButton />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                              sideOffset={8}
                              align="end"
                              className="w-full"
                              onCloseAutoFocus={(e) => e.preventDefault()}
                            >
                              <DropdownMenuItem>
                                <LuEye />
                                View details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <LuDownload />
                                Download PDF
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <LuPrinter />
                                Print invoice
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {filtered.length === 0 && (
                  <EmptyBody>
                    <Empty>
                      <EmptyHeader>
                        <EmptyMedia variant="icon">
                          <LuReceipt strokeWidth={2.5} />
                        </EmptyMedia>
                        <EmptyTitle>No invoices found</EmptyTitle>
                        <EmptyDescription>
                          {search || statusFilter
                            ? 'Try adjusting your search or filters.'
                            : 'Get started by creating your first invoice.'}
                        </EmptyDescription>
                      </EmptyHeader>
                    </Empty>
                  </EmptyBody>
                )}
                <TableFoot />
              </TableWrapper>
            </MainContent>
          </PageContent>
        </PageWrapper>
      </PageMain>
    </>
  );
}
