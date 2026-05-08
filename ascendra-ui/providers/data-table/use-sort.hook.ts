'use client';

import { useMemo, useState } from 'react';
import type { ColumnDef, ColumnType, SortConfig } from './data-table.types';

function sortValue(val: unknown, type: ColumnType): string | number {
  if (type === 'date') return new Date(val as string).getTime();
  if (type === 'number') return val as number;
  return String(val);
}

function sortData<T>(
  data: T[],
  config: SortConfig<T> | null,
  columns: ColumnDef<T>[],
): T[] {
  if (!config) return data;
  const colType = columns.find((c) => c.key === config.key)?.type ?? 'string';
  return [...data].sort((a, b) => {
    const aVal = sortValue(a[config.key], colType);
    const bVal = sortValue(b[config.key], colType);
    if (aVal < bVal) return config.direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return config.direction === 'asc' ? 1 : -1;
    return 0;
  });
}

export function useSort<T>(data: T[], columns: ColumnDef<T>[]) {
  const [sortConfig, setSortConfig] = useState<SortConfig<T> | null>(null);

  function handleSort(key: keyof T) {
    const col = columns.find((c) => c.key === key);
    if (col?.sortable === false) return;
    setSortConfig((prev) => {
      if (prev?.key !== key) return { key, direction: 'asc' };
      if (prev.direction === 'asc') return { key, direction: 'desc' };
      return { key, direction: 'asc' };
    });
  }

  const sortedData = useMemo(
    () => sortData(data, sortConfig, columns),
    [data, sortConfig, columns],
  );

  function clearSort() {
    setSortConfig(null);
  }

  return { sortConfig, handleSort, clearSort, sortedData };
}
