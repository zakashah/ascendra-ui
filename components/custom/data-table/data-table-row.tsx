'use client';

import * as React from 'react';
import { useDataTableContext } from '@/hooks/use-data-table';
import { cn } from '@/lib/utils';
import { filterChildrenByColumn } from './data-table-filter-by-column';

export function DataTableRow({ className, children, ...props }: React.ComponentProps<'tr'>) {
  const { columns } = useDataTableContext();

  return (
    <tr
      data-slot="table-row"
      className={cn(
        'group/row transition-colors [clip-path:inset(0_4px)] first:[clip-path:inset(0_4px_0_4px_round_8px_8px_0_0)] last:[clip-path:inset(0_4px_0_4px_round_0_0_8px_8px)] first:last:[clip-path:inset(0_4px_round_8px)] hover:bg-gray-700/4',
        className
      )}
      {...props}
    >
      {filterChildrenByColumn(columns, children)}
    </tr>
  );
}
