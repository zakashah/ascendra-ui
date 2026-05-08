import type { FilterChip } from './use-filter.hook';
import type { PaginationState } from './use-pagination.hook';
import type { ColumnDef, SortConfig } from '@/ascendra-ui/lib/table';

export interface DataTableContextValue {
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

export interface DataTableProviderProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  isLoading?: boolean;
  children: React.ReactNode;
}
