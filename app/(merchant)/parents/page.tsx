'use client';

import { useState } from 'react';

import { Button } from '@/components/custom/ui/button';
import { CreateParentSheet } from './create-parent-sheet';
import { MainContent } from '@/components/custom/layout/main-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderAction } from '@/components/custom/layout/page-header-action';
import { PageHeaderGroup } from '@/components/custom/layout/page-header-group';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageSubtitle } from '@/components/custom/layout/page-subtitle';
import { PageTitle } from '@/components/custom/layout/page-title';
import { RowActionButton } from '@/components/custom/common-ui/row-action-button';
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';
import { NameAvatar } from '@/components/custom/common-ui/name-avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/custom/ui/dropdown-menu';
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
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
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/custom/ui/empty';
import { Checkbox } from '@/components/custom/ui/checkbox';
import {
  LuChevronDown,
  LuEye,
  LuFilter,
  LuLock,
  LuPencil,
  LuPlus,
  LuSearch,
  LuSettings,
  LuTrash2,
  LuUsers,
} from 'react-icons/lu';
import { RiDraggable } from 'react-icons/ri';
import { RxCrossCircled } from 'react-icons/rx';
import { DataTableBarContent } from '@/components/custom/layout/data-table-bar-content';
import { TableBar } from '@/components/custom/layout/table-bar';

type Status = 'active' | 'inactive' | 'suspended';

interface Parent {
  id: string;
  name: string;
  phone: string;
  email: string;
  students: number;
  unpaidInvoices: number;
  status: Status;
}

const MOCK_PARENTS: Parent[] = [
  {
    id: '1',
    name: 'Ahmed Raza',
    phone: '+92 300 1234567',
    email: 'ahmed.raza@email.com',
    students: 2,
    unpaidInvoices: 1,
    status: 'active',
  },
  {
    id: '2',
    name: 'Fatima Khan',
    phone: '+92 321 9876543',
    email: 'fatima.khan@email.com',
    students: 1,
    unpaidInvoices: 0,
    status: 'active',
  },
  {
    id: '3',
    name: 'Usman Tariq',
    phone: '+92 333 4561234',
    email: 'usman.tariq@email.com',
    students: 3,
    unpaidInvoices: 3,
    status: 'active',
  },
  {
    id: '4',
    name: 'Sara Malik',
    phone: '+92 345 7891011',
    email: 'sara.malik@email.com',
    students: 1,
    unpaidInvoices: 2,
    status: 'inactive',
  },
  {
    id: '5',
    name: 'Bilal Hussain',
    phone: '+92 311 2223344',
    email: 'bilal.hussain@email.com',
    students: 2,
    unpaidInvoices: 0,
    status: 'active',
  },
  {
    id: '6',
    name: 'Nadia Iqbal',
    phone: '+92 302 5556677',
    email: 'nadia.iqbal@email.com',
    students: 1,
    unpaidInvoices: 4,
    status: 'suspended',
  },
  {
    id: '7',
    name: 'Kamran Sheikh',
    phone: '+92 315 8889900',
    email: 'kamran.sheikh@email.com',
    students: 2,
    unpaidInvoices: 0,
    status: 'active',
  },
];

const STATUS_OPTIONS: { label: string; value: Status }[] = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
  { label: 'Suspended', value: 'suspended' },
];

const STATUS_BADGE: Record<
  Status,
  { variant: 'green' | 'secondary' | 'orange'; label: string }
> = {
  active: { variant: 'green', label: 'Active' },
  inactive: { variant: 'secondary', label: 'Inactive' },
  suspended: { variant: 'orange', label: 'Suspended' },
};

type ColumnKey = 'phone' | 'students' | 'outstanding' | 'status';

const TOGGLEABLE_COLUMNS: { key: ColumnKey; label: string }[] = [
  { key: 'phone', label: 'Phone' },
  { key: 'students', label: 'Students' },
  { key: 'outstanding', label: 'Outstanding' },
  { key: 'status', label: 'Status' },
];

export default function ParentsPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<Status | null>(null);
  const [columns, setColumns] = useState<Record<ColumnKey, boolean>>({
    phone: true,
    students: true,
    outstanding: true,
    status: true,
  });

  const toggleColumn = (key: ColumnKey) => {
    setColumns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filtered = MOCK_PARENTS.filter((p) => {
    const matchSearch =
      search === '' ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.phone.includes(search);
    const matchStatus = statusFilter === null || p.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const hasActiveFilters = statusFilter !== null;

  return (
    <>
      <PageHeader>
        <PageHeaderGroup>
          <PageTitle>Parents</PageTitle>
          <PageSubtitle>Manage your parents and students.</PageSubtitle>
        </PageHeaderGroup>
        <PageHeaderAction>
          <CreateParentSheet>
            <Button>
              <LuPlus /> Add parent
            </Button>
          </CreateParentSheet>
        </PageHeaderAction>
      </PageHeader>
      <PageMain>
        <MainContent>
          <TableBar>
            <DataTableBarContent>
              <InputGroup className="max-w-xs">
                <InputGroupInput
                  placeholder="Search by name or phone..."
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
                      <div className="mt-1">Name</div>
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
                  <TableHead>Name</TableHead>
                  {columns.phone && <TableHead>Phone</TableHead>}
                  {columns.students && <TableHead>Students</TableHead>}
                  {columns.outstanding && <TableHead>Outstanding</TableHead>}
                  {columns.status && <TableHead>Status</TableHead>}
                  <TableHead></TableHead>
                </TableHeaderRow>
              </TableHeader>
              <TableBody>
                {filtered.map((parent) => (
                  <TableRow key={parent.id} className="group/row">
                    <TableCell>
                      <div className="flex items-center gap-2.5">
                        <NameAvatar href="#" name={parent.name} />
                        <div>
                          <div className="font-medium">{parent.name}</div>
                          <div className="text-muted-foreground text-xs">
                            {parent.email}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    {columns.phone && (
                      <TableCell className="text-muted-foreground">
                        {parent.phone}
                      </TableCell>
                    )}
                    {columns.students && (
                      <TableCell>
                        <span className="text-muted-foreground text-sm">
                          {parent.students}{' '}
                          {parent.students === 1 ? 'student' : 'students'}
                        </span>
                      </TableCell>
                    )}
                    {columns.outstanding && (
                      <TableCell>
                        {parent.unpaidInvoices > 0 ? (
                          <SimpleBadge variant="orange" className="font-normal">
                            {parent.unpaidInvoices} unpaid
                          </SimpleBadge>
                        ) : (
                          <span className="text-muted-foreground text-sm">
                            —
                          </span>
                        )}
                      </TableCell>
                    )}
                    {columns.status && (
                      <TableCell>
                        <SimpleBadge
                          variant={STATUS_BADGE[parent.status].variant}
                          className="font-normal"
                        >
                          {STATUS_BADGE[parent.status].label}
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
                          onCloseAutoFocus={(e) => e.preventDefault()}
                        >
                          <DropdownMenuItem>
                            <LuEye />
                            View details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <LuPencil />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive focus:text-destructive">
                            <LuTrash2 />
                            Delete
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
                      <LuUsers strokeWidth={2.5} />
                    </EmptyMedia>
                    <EmptyTitle>No parents found</EmptyTitle>
                    <EmptyDescription>
                      {search || statusFilter
                        ? 'Try adjusting your search or filters.'
                        : 'Get started by adding your first parent.'}
                    </EmptyDescription>
                  </EmptyHeader>
                </Empty>
              </EmptyBody>
            )}
            <TableFoot />
          </TableWrapper>
        </MainContent>
      </PageMain>
    </>
  );
}
