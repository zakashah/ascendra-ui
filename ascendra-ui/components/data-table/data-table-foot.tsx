'use client';

import { TableFoot } from '@/ascendra-ui/components/ui/table';
import { useDataTableContext } from '@/ascendra-ui/providers/data-table-context';

export function DataTableFoot() {
  const { pagination } = useDataTableContext();
  return <TableFoot pagination={pagination} />;
}
