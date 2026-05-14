export type ColumnPreferences = {
  order: string[];
  visibility: Record<string, boolean>;
};

export type TablePreferences = {
  columns?: ColumnPreferences;
  // future: savedQueries?: SavedQuery[];
};

export type UserPreferences = {
  tables: Record<string, TablePreferences>;
  // future: global?: GlobalPreferences;
};
