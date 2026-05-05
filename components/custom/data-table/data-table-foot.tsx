'use client';

import { TableFoot } from '@/components/custom/ui/table';
import { useDataTableContext } from '@/hooks/use-data-table';

export function DataTableFoot() {
  const { pagination } = useDataTableContext();
  return <TableFoot pagination={pagination} />;
}
