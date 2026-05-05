'use client';

import { createContext, useContext, useState, useCallback, useRef } from 'react';
import type { QueryDef, QueryParamValues } from '@/lib/query';
import { PRESET_QUERIES } from '@/lib/query';

interface QueryContextValue {
  activeQuery: QueryDef;
  confirmedQueryId: string;
  pendingQueryId: string | null;
  setActiveQueryId: (id: string) => void;
  confirmPending: () => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  lastResult: QueryParamValues | null;
  setLastResult: (values: QueryParamValues) => void;
  currentBatch: number;
  totalBatches: number | null;
  setTotalBatches: (n: number) => void;
  goNextBatch: () => void;
  goPrevBatch: () => void;
}

const QueryContext = createContext<QueryContextValue | null>(null);

interface QueryProviderProps {
  queries?: QueryDef[];
  children: React.ReactNode;
}

export function QueryProvider({ queries = PRESET_QUERIES, children }: QueryProviderProps) {
  const [activeId, setActiveId] = useState(queries[0].id);
  const [pendingQueryId, setPendingQueryId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lastResult, setLastResultState] = useState<QueryParamValues | null>(null);
  const [currentBatch, setCurrentBatch] = useState(1);
  const [totalBatches, setTotalBatchesState] = useState<number | null>(null);
  const loadingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const displayId = pendingQueryId ?? activeId;
  const activeQuery = queries.find((q) => q.id === displayId) ?? queries[0];

  const setActiveQueryId = useCallback((id: string) => {
    const query = queries.find((q) => q.id === id);
    setCurrentBatch(1);
    setTotalBatchesState(null);
    setLastResultState(null);

    if (query?.group === 'filter') {
      // Filters are not confirmed until Run Query completes
      setPendingQueryId(id);
    } else {
      setActiveId(id);
      setPendingQueryId(null);
      if (loadingTimer.current) clearTimeout(loadingTimer.current);
      setIsLoading(true);
      loadingTimer.current = setTimeout(() => setIsLoading(false), 1200);
    }
  }, [queries]);

  const confirmPending = useCallback(() => {
    if (pendingQueryId) {
      setActiveId(pendingQueryId);
      setPendingQueryId(null);
    }
  }, [pendingQueryId]);

  const setLastResult = useCallback((values: QueryParamValues) => {
    setLastResultState(values);
    setCurrentBatch(1);
  }, []);

  const setTotalBatches = useCallback((n: number) => {
    setTotalBatchesState(n);
  }, []);

  const goNextBatch = useCallback(() => {
    setCurrentBatch((prev) =>
      totalBatches !== null ? Math.min(totalBatches, prev + 1) : prev + 1
    );
  }, [totalBatches]);

  const goPrevBatch = useCallback(() => {
    setCurrentBatch((prev) => Math.max(1, prev - 1));
  }, []);

  return (
    <QueryContext.Provider
      value={{
        activeQuery,
        confirmedQueryId: activeId,
        pendingQueryId,
        setActiveQueryId,
        confirmPending,
        isLoading,
        setIsLoading,
        lastResult,
        setLastResult,
        currentBatch,
        totalBatches,
        setTotalBatches,
        goNextBatch,
        goPrevBatch,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
}

export function useQueryContext(): QueryContextValue {
  const ctx = useContext(QueryContext);
  if (!ctx) throw new Error('useQueryContext must be used within QueryProvider');
  return ctx;
}
