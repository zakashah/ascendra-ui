'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface DataTableCellProps extends Omit<React.ComponentProps<'td'>, 'column'> {
  column: string;
}

export function DataTableCell({ column: _, className, children, ...props }: DataTableCellProps) {
  return (
    <td
      data-slot="table-cell"
      className={cn('px-5 py-4 first:pl-6 last:pr-6', className)}
      {...props}
    >
      {children}
    </td>
  );
}
