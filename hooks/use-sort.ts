'use client';

import { useMemo, useState } from 'react';
import { type ColumnDef, type SortConfig, sortData } from '@/lib/table';

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
