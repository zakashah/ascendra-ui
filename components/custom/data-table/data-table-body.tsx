'use client';

import * as React from 'react';
import { TableBody } from '@/components/custom/ui/table';
import { useDataTableContext } from '@/hooks/use-data-table';

interface DataTableBodyProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: (item: any) => React.ReactNode;
}

export function DataTableBody({ children }: DataTableBodyProps) {
  const { pagedData, isLoading } = useDataTableContext();

  if (isLoading || pagedData.length === 0) return null;

  return <TableBody>{pagedData.map((item) => children(item))}</TableBody>;
}
