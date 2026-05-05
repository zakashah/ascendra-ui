'use client';

import { createContext, useContext, useState } from 'react';
import { type FilterChip, useFilter } from './use-filter';
import { type PaginationState, usePagination } from './use-pagination';
import { useSearch } from './use-search';
import { useSort } from './use-sort';
import { type ColumnDef, type SortConfig } from '@/lib/table';

// Internal context value — uses `unknown` to avoid requiring generics on createContext
interface DataTableContextValue {
  columns: ColumnDef<unknown>[];
  toggleColumnActive: (key: string) => void;
  reorderColumns: (fromKey: string, toKey: string) => void;
  isLoading: boolean;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  fuzzy: boolean;
  setFuzzy: (v: boolean) => void;
  getRanges: (item: unknown, key: PropertyKey) => [number, number][] | undefined;
  filters: FilterChip[];
  filterableColumns: ColumnDef<unknown>[];
  addFilter: (key: string) => void;
  setFilterValue: (key: string, value: string) => void;
  removeFilter: (key: string) => void;
  clearFilters: () => void;
  getOptionsFor: (key: string) => string[];
  sortConfig: SortConfig<unknown> | null;
  handleSort: (key: PropertyKey) => void;
  clearSort: () => void;
  isColSortable: (key: string) => boolean;
  pagedData: unknown[];
  totalFiltered: number;
  pagination: PaginationState;
}

// Public typed interface — cast to this via useDataTable<T>()
export interface DataTableState<T extends object> {
  columns: ColumnDef<T>[];
  toggleColumnActive: (key: string) => void;
  reorderColumns: (fromKey: string, toKey: string) => void;
  isLoading: boolean;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  fuzzy: boolean;
  setFuzzy: (v: boolean) => void;
  getRanges: (item: T, key: keyof T) => [number, number][] | undefined;
  filters: FilterChip[];
  filterableColumns: ColumnDef<T>[];
  addFilter: (key: string) => void;
  setFilterValue: (key: string, value: string) => void;
  removeFilter: (key: string) => void;
  clearFilters: () => void;
  getOptionsFor: (key: string) => string[];
  sortConfig: SortConfig<T> | null;
  handleSort: (key: keyof T) => void;
  clearSort: () => void;
  isColSortable: (key: string) => boolean;
  pagedData: T[];
  totalFiltered: number;
  pagination: PaginationState;
}

const DataTableContext = createContext<DataTableContextValue | null>(null);

interface DataTableProviderProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  isLoading?: boolean;
  children: React.ReactNode;
}

export function DataTableProvider<T extends object>({
  data,
  columns: initialColumns,
  isLoading = false,
  children,
}: DataTableProviderProps<T>) {
  const [columns, setColumns] = useState<ColumnDef<T>[]>(() => initialColumns);
  function toggleColumnActive(key: string) {
    setColumns((prev) =>
      prev.map((col) =>
        String(col.key) === key ? { ...col, active: col.active === false ? true : false } : col
      )
    );
  }

  function reorderColumns(fromKey: string, toKey: string) {
    setColumns((prev) => {
      const result = [...prev];
      const fromIdx = result.findIndex((c) => String(c.key) === fromKey);
      const toIdx = result.findIndex((c) => String(c.key) === toKey);
      if (fromIdx === -1 || toIdx === -1 || fromIdx === toIdx) return prev;
      const [moved] = result.splice(fromIdx, 1);
      result.splice(toIdx, 0, moved);
      return result;
    });
  }

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

  const filterableColumns = columns.filter((col) => col.filter === true);

  const { sortConfig, handleSort, clearSort, sortedData } = useSort(filteredData, columns);

  const { paginatedData: pagedData, ...pagination } = usePagination(sortedData);

  function isColSortable(key: string) {
    return columns.find((c) => String(c.key) === key)?.sortable !== false;
  }

  return (
    <DataTableContext.Provider
      value={{
        columns: columns as unknown as ColumnDef<unknown>[],
        toggleColumnActive,
        reorderColumns,
        isLoading,
        searchTerm,
        setSearchTerm,
        fuzzy,
        setFuzzy,
        getRanges: getRanges as unknown as DataTableContextValue['getRanges'],
        filters,
        filterableColumns: filterableColumns as unknown as ColumnDef<unknown>[],
        addFilter,
        setFilterValue,
        removeFilter,
        clearFilters,
        getOptionsFor,
        sortConfig: sortConfig as unknown as SortConfig<unknown> | null,
        handleSort: handleSort as unknown as DataTableContextValue['handleSort'],
        clearSort,
        isColSortable,
        pagedData: pagedData as unknown[],
        totalFiltered: sortedData.length,
        pagination,
      }}
    >
      {children}
    </DataTableContext.Provider>
  );
}

// For generic data-table components (DataFilterBar, SortIcon) that don't need T
export function useDataTableContext(): DataTableContextValue {
  const ctx = useContext(DataTableContext);
  if (!ctx) throw new Error('useDataTableContext must be used within DataTableProvider');
  return ctx;
}

// For page-level consumers that know T (e.g. useDataTable<Invoice>())
export function useDataTable<T extends object>(): DataTableState<T> {
  return useDataTableContext() as unknown as DataTableState<T>;
}
