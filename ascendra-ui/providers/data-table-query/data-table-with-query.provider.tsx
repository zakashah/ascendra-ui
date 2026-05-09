'use client';

import { DataTableQueryProvider } from '@/ascendra-ui/providers/data-table-query/data-table-query.provider';
import { DataTableProvider } from '@/ascendra-ui/providers/data-table/data-table.provider';
import type { QueryDef, QueryFunctionMap, FieldOptionsMap } from '@/ascendra-ui/providers/data-table-query/data-table-query.types';
import type { ColumnDef } from '@/ascendra-ui/providers/data-table/data-table.types';

export interface DataTableWithQueryProviderProps<T extends object> {
  queries: QueryDef[];
  queryFunctions: QueryFunctionMap<T>;
  fieldOptions?: FieldOptionsMap;
  columns: ColumnDef<T>[];
  children: React.ReactNode;
}

export function DataTableWithQueryProvider<T extends object>({
  queries,
  queryFunctions,
  fieldOptions,
  columns,
  children,
}: DataTableWithQueryProviderProps<T>) {
  return (
    <DataTableQueryProvider
      queries={queries}
      queryFunctions={queryFunctions}
      fieldOptions={fieldOptions}
    >
      <DataTableProvider columns={columns}>
        {children}
      </DataTableProvider>
    </DataTableQueryProvider>
  );
}
