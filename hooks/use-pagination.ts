'use client';

import { useMemo, useState } from 'react';

export interface PaginationState {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  startIndex: number;
  endIndex: number;
  setPageSize: (size: number) => void;
  goFirst: () => void;
  goPrev: () => void;
  goNext: () => void;
  goLast: () => void;
}

export function usePagination<T>(
  data: T[],
  defaultPageSize = 10,
): PaginationState & { paginatedData: T[] } {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSizeState] = useState(defaultPageSize);
  const [prevData, setPrevData] = useState(data);

  // React-recommended pattern for resetting state when a derived value changes:
  // calling setState during render triggers an immediate re-render and discards
  // the current one, avoiding the effect → setState cascade.
  // Track reference identity (not length) so same-count dataset swaps also reset.
  if (data !== prevData) {
    setPrevData(data);
    setCurrentPage(1);
  }

  const totalItems = data.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);

  const paginatedData = useMemo(
    () => data.slice(startIndex, endIndex),
    [data, startIndex, endIndex],
  );

  return {
    currentPage: safeCurrentPage,
    totalPages,
    totalItems,
    pageSize,
    startIndex,
    endIndex,
    paginatedData,
    setPageSize: (size: number) => {
      setPageSizeState(size);
      setCurrentPage(1);
    },
    goFirst: () => setCurrentPage(1),
    goPrev: () => setCurrentPage((p) => Math.max(1, p - 1)),
    goNext: () => setCurrentPage((p) => Math.min(totalPages, p + 1)),
    goLast: () => setCurrentPage(totalPages),
  };
}
