'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export function useSelection<T>(
  pagedData: T[],
  getRowId: ((row: T) => string) | undefined,
) {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());

  // Read pagedData and getRowId via refs so selectAll stays stable.
  const pagedDataRef = useRef(pagedData);
  useEffect(() => { pagedDataRef.current = pagedData; }, [pagedData]);

  const getRowIdRef = useRef(getRowId);
  useEffect(() => { getRowIdRef.current = getRowId; }, [getRowId]);

  const toggleRow = useCallback((id: string) => {
    setSelectedRows((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const selectAll = useCallback(() => {
    const fn = getRowIdRef.current;
    if (!fn) return;
    setSelectedRows(new Set(pagedDataRef.current.map(fn)));
  }, []);

  const clearSelection = useCallback(() => setSelectedRows(new Set()), []);

  const isRowSelected = useCallback(
    (id: string) => selectedRows.has(id),
    [selectedRows],
  );

  const isAllSelected = useMemo(() => {
    if (!getRowId || pagedData.length === 0) return false;
    return pagedData.every((row) => selectedRows.has(getRowId(row)));
  }, [pagedData, selectedRows, getRowId]);

  const isIndeterminate = useMemo(
    () => !isAllSelected && pagedData.some((row) => !!getRowId && selectedRows.has(getRowId(row))),
    [pagedData, selectedRows, getRowId, isAllSelected],
  );

  const selectionEnabled = getRowId !== undefined;

  return {
    selectedRows,
    toggleRow,
    selectAll,
    clearSelection,
    isRowSelected,
    isAllSelected,
    isIndeterminate,
    selectionEnabled,
  };
}
