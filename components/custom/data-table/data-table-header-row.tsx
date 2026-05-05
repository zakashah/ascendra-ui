'use client';

import * as React from 'react';
import { useDataTableContext } from '@/hooks/use-data-table';
import { cn } from '@/lib/utils';
import { filterChildrenByColumn } from './data-table-filter-by-column';

export function DataTableHeaderRow({ className, children, ...props }: React.ComponentProps<'tr'>) {
  const { columns } = useDataTableContext();

  return (
    <tr
      data-slot="table-header-row"
      className={cn('text-secondary-foreground text-left text-xs', className)}
      {...props}
    >
      {filterChildrenByColumn(columns, children)}
    </tr>
  );
}
