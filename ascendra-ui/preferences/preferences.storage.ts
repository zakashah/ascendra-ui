import type { TablePreferences, UserPreferences } from './preferences.types';

const STORAGE_KEY = 'ascendra:user-preferences';

function read(): UserPreferences {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { tables: {} };
    return JSON.parse(raw) as UserPreferences;
  } catch {
    return { tables: {} };
  }
}

function write(prefs: UserPreferences): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // quota exceeded or non-browser environment — silently ignore
  }
}

export function readTablePreferences(tableId: string): TablePreferences | null {
  return read().tables[tableId] ?? null;
}

export function writeTablePreferences(tableId: string, patch: TablePreferences): void {
  const prefs = read();
  prefs.tables[tableId] = { ...prefs.tables[tableId], ...patch };
  write(prefs);
}
