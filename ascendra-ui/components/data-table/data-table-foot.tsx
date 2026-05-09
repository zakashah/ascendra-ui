'use client';

import { TableFoot } from '@/ascendra-ui/components/ui/table';
import { useDataTableData } from '@/ascendra-ui/providers/data-table/data-table.provider';

export function DataTableFoot() {
  const { pagination } = useDataTableData();
  return <TableFoot pagination={pagination} />;
}
