'use client';

import * as React from 'react';
import { useDataTableContext } from '@/hooks/use-data-table';
import { cn } from '@/lib/utils';
import { DataTableSortIcon } from './data-table-sort-icon';

interface DataTableHeadProps {
  column: string;
  children?: React.ReactNode;
  className?: string;
}

export function DataTableHead({ column, children, className }: DataTableHeadProps) {
  const { isColSortable, handleSort, columns } = useDataTableContext();
  const sortable = isColSortable(column);
  const label = children ?? columns.find((c) => String(c.key) === column)?.label;

  return (
    <th
      data-slot="table-head"
      className={cn(
        'py-3 pr-5 pl-5 first:pl-6',
        sortable && 'group/sort cursor-pointer select-none',
        className
      )}
      onClick={sortable ? () => handleSort(column) : undefined}
    >
      <div className="flex items-center gap-1.5">
        {label}
        <DataTableSortIcon column={column} />
      </div>
    </th>
  );
}
