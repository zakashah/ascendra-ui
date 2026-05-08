import type { QueryDef, QueryParamValues } from '@/ascendra-ui/lib/query';

export interface QueryContextValue {
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

export interface DataTableQueryProviderProps {
  queries?: QueryDef[];
  children: React.ReactNode;
}
