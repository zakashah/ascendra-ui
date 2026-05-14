'use client';

import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { readTablePreferences, writeQueryRunPreferences, deserializeParamValues } from '@/ascendra-ui/preferences/preferences.storage';
import type { QueryContextValue, DataTableQueryProviderProps, QueryParamValues, QueryResult } from './data-table-query.types';

const QueryContext = createContext<QueryContextValue | null>(null);

export function DataTableQueryProvider<T = unknown>({ queries, queryFunctions, fieldOptions = {}, tableId, children }: DataTableQueryProviderProps<T>) {
  // Always start with queries[0] so server and client first-render match (avoids hydration mismatch).
  // The useEffect below replaces this with the stored last-run query after mount.
  const [activeId, setActiveId] = useState(queries[0].id);
  const [pendingQueryId, setPendingQueryId] = useState<string | null>(null);
  const [confirmedParamsState, setConfirmedParamsState] = useState<QueryParamValues | null>(null);
  const [currentBatch, setCurrentBatch] = useState(1);

  // True while the first-mount useEffect is reading localStorage.
  // Blocks query execution and query-specific UI so queries[0] never flickers in.
  const [isInitializing, setIsInitializing] = useState(!!tableId);

  // In-memory draft cache: keyed by queryId, stores typed-but-not-yet-confirmed param values.
  const draftCacheRef = useRef<Record<string, QueryParamValues>>({});

  // Read localStorage after mount. Running this in useEffect (not useState lazy init) ensures
  // server and client render the same initial HTML, avoiding hydration mismatches.
  useEffect(() => {
    if (!tableId) return; // isInitializing was already false; nothing to load

    const stored = readTablePreferences(tableId);
    const lastId = stored?.queryState?.lastConfirmedQueryId;

    if (lastId && queries.some((q) => q.id === lastId)) {
      const lastQuery = queries.find((q) => q.id === lastId);
      // For filter queries: also restore confirmed params so the query auto-runs
      if (lastQuery?.group === 'filter') {
        const raw = stored?.queryState?.lastRunParams?.[lastId];
        if (raw) setConfirmedParamsState(deserializeParamValues(raw));
      }
      setActiveId(lastId);
    }

    // All three state updates above are batched by React 18 into a single re-render
    setIsInitializing(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const displayId = pendingQueryId ?? activeId;
  const activeQuery = queries.find((q) => q.id === displayId) ?? queries[0];
  const confirmedQuery = queries.find((q) => q.id === activeId) ?? queries[0];

  const setActiveQueryId = useCallback((id: string) => {
    const query = queries.find((q) => q.id === id);
    setCurrentBatch(1);
    setConfirmedParamsState(null);

    if (query?.group === 'filter') {
      // Filters are not confirmed until Run Query is clicked
      setPendingQueryId(id);
    } else {
      setActiveId(id);
      setPendingQueryId(null);
      // Non-filter queries run immediately on selection — persist as last confirmed
      if (tableId) writeQueryRunPreferences(tableId, id, {});
    }
  }, [queries, tableId]);

  const confirmPending = useCallback(() => {
    if (pendingQueryId) {
      setActiveId(pendingQueryId);
      setPendingQueryId(null);
    }
  }, [pendingQueryId]);

  const setConfirmedParams = useCallback((values: QueryParamValues) => {
    // For filter queries, pendingQueryId is the actual filter being confirmed.
    // activeId still points to the previous non-filter query at this point (confirmPending
    // hasn't fired yet), so we must use pendingQueryId as the key.
    const confirmedId = pendingQueryId ?? activeId;
    setConfirmedParamsState(values);
    setCurrentBatch(1);
    if (tableId) writeQueryRunPreferences(tableId, confirmedId, values);
  }, [tableId, activeId, pendingQueryId]);

  const saveDraftValues = useCallback((queryId: string, values: QueryParamValues) => {
    draftCacheRef.current[queryId] = values;
  }, []);

  // Returns in-memory draft first; falls back to last-run params from localStorage.
  const getDraftValues = useCallback((queryId: string): QueryParamValues | null => {
    const draft = draftCacheRef.current[queryId];
    if (draft) return draft;
    if (!tableId) return null;
    const stored = readTablePreferences(tableId);
    const raw = stored?.queryState?.lastRunParams?.[queryId];
    return raw ? deserializeParamValues(raw) : null;
  }, [tableId]);

  const queryFn = queryFunctions[activeId];
  // Don't run any query while localStorage is being read — prevents the queries[0] fetch
  const enabled = !isInitializing && (confirmedQuery.group !== 'filter' || confirmedParamsState !== null);

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
        isInitializing,
        isLoading: isInitializing || isLoading,
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
        saveDraftValues,
        getDraftValues,
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
