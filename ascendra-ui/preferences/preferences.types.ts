export type ColumnPreferences = {
  order: string[];
  visibility: Record<string, boolean>;
};

export type QueryStatePreferences = {
  lastConfirmedQueryId?: string;
  /** Serialized QueryParamValues keyed by queryId. Use serializeParamValues/deserializeParamValues. */
  lastRunParams?: Record<string, Record<string, unknown>>;
};

export type TablePreferences = {
  columns?: ColumnPreferences;
  queryState?: QueryStatePreferences;
  // future: savedQueries?: SavedQuery[];
};

export type UserPreferences = {
  tables: Record<string, TablePreferences>;
  // future: global?: GlobalPreferences;
};
