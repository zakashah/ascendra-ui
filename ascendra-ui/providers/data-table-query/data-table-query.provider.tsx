'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import type { QueryContextValue, DataTableQueryProviderProps, QueryParamValues, QueryResult } from './data-table-query.types';

const QueryContext = createContext<QueryContextValue | null>(null);

export function DataTableQueryProvider<T = unknown>({ queries, queryFunctions, fieldOptions = {}, children }: DataTableQueryProviderProps<T>) {
  const [activeId, setActiveId] = useState(queries[0].id);
  const [pendingQueryId, setPendingQueryId] = useState<string | null>(null);
  const [confirmedParamsState, setConfirmedParamsState] = useState<QueryParamValues | null>(null);
  const [currentBatch, setCurrentBatch] = useState(1);

  const displayId = pendingQueryId ?? activeId;
  const activeQuery = queries.find((q) => q.id === displayId) ?? queries[0];
  const confirmedQuery = queries.find((q) => q.id === activeId) ?? queries[0];

  const setActiveQueryId = useCallback((id: string) => {
    const query = queries.find((q) => q.id === id);
    setCurrentBatch(1);
    setConfirmedParamsState(null);

    if (query?.group === 'filter') {
      // Filters are not confirmed until Run Query completes
      setPendingQueryId(id);
    } else {
      setActiveId(id);
      setPendingQueryId(null);
    }
  }, [queries]);

  const confirmPending = useCallback(() => {
    if (pendingQueryId) {
      setActiveId(pendingQueryId);
      setPendingQueryId(null);
    }
  }, [pendingQueryId]);

  const setConfirmedParams = useCallback((values: QueryParamValues) => {
    setConfirmedParamsState(values);
    setCurrentBatch(1);
  }, []);

  const queryFn = queryFunctions[activeId];
  const enabled = confirmedQuery.group !== 'filter' || confirmedParamsState !== null;

  const { data, isLoading, isError, error, refetch } = useQuery<QueryResult<T>, Error>({
    queryKey: ['data-table', activeId, confirmedParamsState, currentBatch],
    queryFn: () => queryFn(confirmedParamsState ?? {}, currentBatch),
    enabled: !!queryFn && enabled,
    staleTime: confirmedQuery.queryOptions?.staleTime,
    retry: confirmedQuery.queryOptions?.retry,
    gcTime: confirmedQuery.queryOptions?.gcTime,
    refetchOnWindowFocus: confirmedQuery.queryOptions?.refetchOnWindowFocus,
  });

  const totalBatches = data?.totalBatches ?? null;

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
        queries,
        activeQuery,
        confirmedQueryId: activeId,
        pendingQueryId,
        setActiveQueryId,
        confirmPending,
        isLoading,
        isError,
        error: error ?? null,
        refetch,
        data: (data?.data ?? []) as unknown[],
        confirmedParams: confirmedParamsState,
        setConfirmedParams,
        currentBatch,
        totalBatches,
        goNextBatch,
        goPrevBatch,
        fieldOptions,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
}

export function useQueryContext(): QueryContextValue {
  const ctx = useContext(QueryContext);
  if (!ctx) throw new Error('useQueryContext must be used within DataTableQueryProvider');
  return ctx;
}

export function useOptionalQueryContext(): QueryContextValue | null {
  return useContext(QueryContext);
}
