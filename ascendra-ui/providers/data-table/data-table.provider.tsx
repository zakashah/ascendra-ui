'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useFilter } from './use-filter.hook';
import { usePagination } from './use-pagination.hook';
import { useSearch } from './use-search.hook';
import { useSort } from './use-sort.hook';
import { useOptionalQueryContext } from '@/ascendra-ui/providers/data-table-query/data-table-query.provider';
import type {
  ColumnDef,
  SortConfig,
  DataTableContextValue,
  DataTableState,
  DataTableProviderProps,
  DataTableColumnContextValue,
  DataTableSearchContextValue,
  DataTableFilterContextValue,
  DataTableSortContextValue,
  DataTableDataContextValue,
} from './data-table.types';

// --- Contexts ---

const DataTableColumnContext = createContext<DataTableColumnContextValue | null>(null);
const DataTableSearchContext = createContext<DataTableSearchContextValue | null>(null);
const DataTableFilterContext = createContext<DataTableFilterContextValue | null>(null);
const DataTableSortContext = createContext<DataTableSortContextValue | null>(null);
const DataTableDataContext = createContext<DataTableDataContextValue | null>(null);

// --- Provider ---

export function DataTableProvider<T extends object>({
  data: dataProp,
  columns: initialColumns,
  isLoading: isLoadingProp,
  children,
}: DataTableProviderProps<T>) {
  const queryCtx = useOptionalQueryContext();
  const data = dataProp ?? (queryCtx?.data as T[] | undefined) ?? [];
  const isLoading = isLoadingProp ?? queryCtx?.isLoading ?? false;

  const [columns, setColumns] = useState<ColumnDef<T>[]>(() => initialColumns);

  const toggleColumnActive = useCallback((key: string) => {
    setColumns((prev) =>
      prev.map((col) =>
        String(col.key) === key ? { ...col, active: col.active === false ? true : false } : col
      )
    );
  }, []);

  const reorderColumns = useCallback((fromKey: string, toKey: string) => {
    setColumns((prev) => {
      const result = [...prev];
      const fromIdx = result.findIndex((c) => String(c.key) === fromKey);
      const toIdx = result.findIndex((c) => String(c.key) === toKey);
      if (fromIdx === -1 || toIdx === -1 || fromIdx === toIdx) return prev;
      const [moved] = result.splice(fromIdx, 1);
      result.splice(toIdx, 0, moved);
      return result;
    });
  }, []);

  const isColSortable = useCallback(
    (key: string) => columns.find((c) => String(c.key) === key)?.sortable !== false,
    [columns]
  );

  const filterableColumns = useMemo(
    () => columns.filter((col) => col.filter === true),
    [columns]
  );

  const {
    searchTerm,
    setSearchTerm,
    fuzzy,
    setFuzzy,
    getRanges,
    filteredData: searchedData,
  } = useSearch(data, columns);

  const {
    filters,
    addFilter,
    setFilterValue,
    removeFilter,
    clearFilters,
    getOptionsFor,
    filteredData,
  } = useFilter(searchedData);

  const { sortConfig, handleSort, clearSort, sortedData } = useSort(filteredData, columns);

  const { pagination, paginatedData: pagedData } = usePagination(sortedData);

  // --- Context values (each only changes when its own slice changes) ---

  const columnCtx = useMemo<DataTableColumnContextValue>(
    () => ({
      columns: columns as unknown as ColumnDef<unknown>[],
      filterableColumns: filterableColumns as unknown as ColumnDef<unknown>[],
      toggleColumnActive,
      reorderColumns,
      isColSortable,
    }),
    [columns, filterableColumns, toggleColumnActive, reorderColumns, isColSortable]
  );

  const searchCtx = useMemo<DataTableSearchContextValue>(
    () => ({
      searchTerm,
      setSearchTerm,
      fuzzy,
      setFuzzy,
      getRanges: getRanges as unknown as DataTableSearchContextValue['getRanges'],
    }),
    [searchTerm, setSearchTerm, fuzzy, setFuzzy, getRanges]
  );

  const filterCtx = useMemo<DataTableFilterContextValue>(
    () => ({ filters, addFilter, setFilterValue, removeFilter, clearFilters, getOptionsFor }),
    [filters, addFilter, setFilterValue, removeFilter, clearFilters, getOptionsFor]
  );

  const sortCtx = useMemo<DataTableSortContextValue>(
    () => ({
      sortConfig: sortConfig as unknown as SortConfig<unknown> | null,
      handleSort: handleSort as unknown as DataTableSortContextValue['handleSort'],
      clearSort,
    }),
    [sortConfig, handleSort, clearSort]
  );

  const dataCtx = useMemo<DataTableDataContextValue>(
    () => ({ pagedData: pagedData as unknown[], totalFiltered: sortedData.length, pagination, isLoading }),
    [pagedData, sortedData.length, pagination, isLoading]
  );

  return (
    <DataTableColumnContext.Provider value={columnCtx}>
      <DataTableSearchContext.Provider value={searchCtx}>
        <DataTableFilterContext.Provider value={filterCtx}>
          <DataTableSortContext.Provider value={sortCtx}>
            <DataTableDataContext.Provider value={dataCtx}>
              {children}
            </DataTableDataContext.Provider>
          </DataTableSortContext.Provider>
        </DataTableFilterContext.Provider>
      </DataTableSearchContext.Provider>
    </DataTableColumnContext.Provider>
  );
}

// --- Specific hooks (subscribe only to the slice you need) ---

export function useDataTableColumns(): DataTableColumnContextValue {
  const ctx = useContext(DataTableColumnContext);
  if (!ctx) throw new Error('useDataTableColumns must be used within DataTableProvider');
  return ctx;
}

export function useDataTableSearch(): DataTableSearchContextValue {
  const ctx = useContext(DataTableSearchContext);
  if (!ctx) throw new Error('useDataTableSearch must be used within DataTableProvider');
  return ctx;
}

export function useDataTableFilter(): DataTableFilterContextValue {
  const ctx = useContext(DataTableFilterContext);
  if (!ctx) throw new Error('useDataTableFilter must be used within DataTableProvider');
  return ctx;
}

export function useDataTableSort(): DataTableSortContextValue {
  const ctx = useContext(DataTableSortContext);
  if (!ctx) throw new Error('useDataTableSort must be used within DataTableProvider');
  return ctx;
}

export function useDataTableData(): DataTableDataContextValue {
  const ctx = useContext(DataTableDataContext);
  if (!ctx) throw new Error('useDataTableData must be used within DataTableProvider');
  return ctx;
}

// --- Merged hooks (backward compat — re-renders on any slice change) ---

export function useDataTableContext(): DataTableContextValue {
  const col = useContext(DataTableColumnContext);
  const search = useContext(DataTableSearchContext);
  const filter = useContext(DataTableFilterContext);
  const sort = useContext(DataTableSortContext);
  const data = useContext(DataTableDataContext);
  if (!col || !search || !filter || !sort || !data)
    throw new Error('useDataTableContext must be used within DataTableProvider');
  return { ...col, ...search, ...filter, ...sort, ...data };
}

// For page-level consumers that know T (e.g. useDataTable<Invoice>())
export function useDataTable<T extends object>(): DataTableState<T> {
  return useDataTableContext() as unknown as DataTableState<T>;
}
