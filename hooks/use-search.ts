'use client';

import { useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import { type ColumnDef, searchValue } from '@/lib/table';

export function useSearch<T extends object>(
  data: T[],
  columns?: ColumnDef<T>[],
  keys?: (keyof T)[],
) {
  const [searchTerm, setSearchTerm] = useState('');
  const [fuzzy, setFuzzy] = useState(false);

  const fuseKeys = useMemo(() => {
    if (keys) return keys.map(String);
    if (columns?.length) return columns.map((c) => String(c.key));
    if (data.length > 0) return Object.keys(data[0]);
    return [];
  }, [keys, columns, data]);

  const fuse = useMemo(() => {
    if (!fuzzy || !fuseKeys.length) return null;
    return new Fuse(data, {
      keys: fuseKeys,
      includeMatches: true,
      threshold: 0.4,
      ignoreLocation: true,
      minMatchCharLength: 1,
    });
  }, [data, fuseKeys, fuzzy]);

  const { filteredData, rangesMap } = useMemo(() => {
    const term = searchTerm.trim();
    if (!term) return { filteredData: data, rangesMap: null };

    if (fuzzy && fuse) {
      const results = fuse.search(term);
      const map = new WeakMap<object, Map<string, [number, number][]>>();
      for (const result of results) {
        const keyMap = new Map<string, [number, number][]>();
        for (const match of result.matches ?? []) {
          if (match.key && match.indices) {
            keyMap.set(match.key, match.indices as [number, number][]);
          }
        }
        map.set(result.item as object, keyMap);
      }
      return { filteredData: results.map((r) => r.item), rangesMap: map };
    }

    const termLower = term.toLowerCase();
    const filtered = data.filter((item) => {
      const searchKeys = keys ?? columns?.map((c) => c.key) ?? (Object.keys(item) as (keyof T)[]);
      return searchKeys.some((key) => {
        const type = columns?.find((c) => c.key === key)?.type ?? 'string';
        return searchValue(item[key], type).toLowerCase().includes(termLower);
      });
    });
    return { filteredData: filtered, rangesMap: null };
  }, [data, columns, keys, searchTerm, fuzzy, fuse]);

  function getRanges(item: T, key: keyof T): [number, number][] | undefined {
    return rangesMap?.get(item as object)?.get(String(key));
  }

  return { searchTerm, setSearchTerm, fuzzy, setFuzzy, filteredData, getRanges };
}
