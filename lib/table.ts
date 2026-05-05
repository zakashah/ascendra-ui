export type ColumnType = 'string' | 'number' | 'date';
export type SortDirection = 'asc' | 'desc';

export interface ColumnDef<T> {
  key: keyof T;
  label: string;
  type?: ColumnType;
  sortable?: boolean;
  /** Column is always visible; checkbox is disabled. Implies active. */
  freeze?: boolean;
  /** Column position cannot be changed; shows lock icon instead of drag handle. */
  locked?: boolean;
  /** Whether the column is currently visible. Defaults to true. */
  active?: boolean;
  /** Whether the column appears in the filter picker. Defaults to false. */
  filter?: boolean;
  /** Converts a raw data string value to its display label in filter chips/options. */
  displayValue?: (raw: string) => string;
}

export interface SortConfig<T> {
  key: keyof T;
  direction: SortDirection;
}

// --- Inference utilities (optional — useful for static/mock data) ---

const DATE_SUFFIX_RE = /(Date|At|On|Time)$/;

export function camelToTitle(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}

export function inferColumnType(key: string, val: unknown): ColumnType {
  if (val instanceof Date) return 'date';
  if (typeof val === 'number') return 'number';
  if (DATE_SUFFIX_RE.test(key)) return 'date';
  return 'string';
}

export function defineColumns<T extends object>(
  sample: T,
  keys: (keyof T)[],
  overrides?: { [K in keyof T]?: Partial<ColumnDef<T>> },
): ColumnDef<T>[] {
  return keys.map((key) => ({
    key,
    label: camelToTitle(String(key)),
    type: inferColumnType(String(key), sample[key]),
    ...overrides?.[key],
  }));
}

// --- Search normalization ---

export function searchValue(val: unknown, type: ColumnType): string {
  if (type === 'date') {
    return new Date(val as string).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }
  if (type === 'number') return (val as number).toLocaleString();
  return String(val ?? '');
}

// --- Sort ---

function sortValue(val: unknown, type: ColumnType): string | number {
  if (type === 'date') return new Date(val as string).getTime();
  if (type === 'number') return val as number;
  return String(val);
}

export function sortData<T>(
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
