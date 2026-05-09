# Data Table System — Architectural Review

## Concept verdict

The system is architecturally sound. Data tables are one of the highest-ROI abstractions in enterprise UIs. The provider pattern — query state and table state as separate, independently usable layers — is the correct model. The investment is justified.

---

## Issues (ordered by priority)

### 1. `filterChildrenByColumn` fragility — Critical ❌

Inspecting React element props at runtime (`element.props.column`) to decide whether to render a `DataTableCell` is fragile. It fails silently if a consumer wraps a cell in `React.memo()`, a custom component, a context provider, or a fragment. The cell vanishes with no error.

**Fix:** Remove `filterChildrenByColumn` entirely. Have each `DataTableCell` consume the context and return `null` if its column key is not active. Components self-exclude based on context — idiomatic React.

- **Effort:** Medium
- **Risk of not fixing:** Silent bugs as library usage grows — consumers who wrap cells will see cells disappear, very hard to trace.
- **Status:** [x] Done — split into `orderChildrenByColumn` (ordering only) + `DataTableCell`/`DataTableHead` self-exclude via context. Old `data-table-filter-by-column.ts` deleted.

---

### 2. Context value instability — High ⚠️

`DataTableProvider` constructs its context value inline. Every state change (keystroke, page turn, filter) creates a new object identity, forcing all 20+ consumers to re-render even when their slice of state didn't change.

**Fix (now):** Wrap the value in `useMemo` with a correct dep array.
**Fix (later):** Split into smaller contexts (search, filter, sort, pagination) so consumers subscribe only to what they need.

- **Effort:** Low (useMemo) → High (context split)
- **Risk of not fixing:** Jank and unnecessary render cycles, harder to diagnose after widespread adoption.
- **Status:** [x] Done — 5 split contexts (column, search, filter, sort, data) each with `useMemo`. All hook functions wrapped in `useCallback`. `usePagination` now returns a memoized `pagination` object. All 15 components updated to specific hooks. Merged `useDataTableContext` / `useDataTable<T>` kept for backward compat.

---

### 3. `as unknown as` type casts — Medium ⚠️

The dual-type pattern (`DataTableContextValue` internally, `DataTableState<T>` via `useDataTable<T>()`) is correct in intent but uses `as unknown as` casts inside the provider. These suppress type errors silently — if the two types diverge, TypeScript won't catch it.

**Fix:** Centralise all casts inside `useDataTable<T>()`. Tighten `DataTableContextValue` so it structurally matches `DataTableState<T>` minus generics.

- **Effort:** Small (types only)
- **Risk of not fixing:** Silent type regression in future refactors.
- **Status:** [ ] Pending

---

### 4. Combo wrapper missing `data` / `isLoading` — Medium ⚠️

`DataTableWithQueryProvider` doesn't forward the `data` and `isLoading` override props that `DataTableProvider` accepts. Blocks optimistic updates, SSR-prefetched data, and fixture-based testing.

**Fix:** Add `data?: T[]` and `isLoading?: boolean` to `DataTableWithQueryProviderProps` and forward them to `DataTableProvider`.

- **Effort:** Trivial
- **Risk of not fixing:** Consuming projects work around it by abandoning the combo wrapper.
- **Status:** [ ] Pending

---

### 5. Zod schema rebuilt on every render — Medium ⚠️

`QueryParamPanel` builds a Zod schema by iterating `params` on every render. `params` comes from a static `QueryDef` and never changes between renders — this is unnecessary repeated work.

**Fix:** `useMemo` keyed on `params`.

- **Effort:** Trivial (one line)
- **Risk of not fixing:** Wasted computation on every keystroke in the filter panel.
- **Status:** [ ] Pending

---

### 6. `getOptionsFor` not memoized — Medium ⚠️

Faceted filter option computation scans the dataset and excludes already-active filter values on every call. Runs multiple times per render.

**Fix:** Memoize the result map inside `useFilter`, keyed on `filteredData` identity and `filters` identity.

- **Effort:** Small (inside the hook)
- **Risk of not fixing:** Performance degradation on larger datasets — exactly the use case faceted filtering is designed for.
- **Status:** [ ] Pending

---

### 7. No API designed for multi-column sort — Low 📋

`sortConfig: { key, direction } | null` is a single-column model baked into the type, hook, context, and `DataTableHead`. Adding multi-column sort later requires a breaking change across all of those — and across all consuming projects.

**Fix:** Change `sortConfig` to `SortConfig<T>[]`. Implementation stays single-column (one entry max). The API is now future-ready at zero runtime cost.

- **Effort:** Types-only change now; implementation later is additive
- **Risk of not fixing:** Breaking change across all consumers when the requirement arrives.
- **Status:** [ ] Pending (types only)

---

### 8. Row selection has no planned API surface — Low 📋

Adding bulk operations (select all, select row, bulk actions) later means adding to the context type and rethinking `DataTableRow` — a breaking change once there are many consuming projects.

**Fix:** Design the API surface now (even if unimplemented): `selectedRows`, `toggleRow`, `selectAll`, `clearSelection` in context.

- **Effort:** Design spike
- **Risk of not fixing:** Consuming projects build a parallel system or fork.
- **Status:** [ ] Design only

---

### 9. Fuse.js index recreated on every data change — Low 📋

The Fuse index is rebuilt whenever `data` changes. Fine for query-driven tables (data only changes on refetch). Becomes expensive if the table is ever used with streaming or polling data.

**Fix:** Only relevant when real-time data is introduced. No action now.

- **Effort:** Low (when needed)
- **Risk of not fixing:** Not a problem until real-time data is a use case.
- **Status:** [ ] Deferred

---

## Progress tracker

| # | Issue | Priority | Effort | Status |
|---|-------|----------|--------|--------|
| 1 | `filterChildrenByColumn` fragility | Critical | Medium | ✅ Done |
| 2 | Context value instability | High | Low–High | ✅ Done |
| 3 | `as unknown as` type casts | Medium | Small | ⬜ Pending |
| 4 | Combo wrapper missing props | Medium | Trivial | ⬜ Pending |
| 5 | Zod schema on every render | Medium | Trivial | ⬜ Pending |
| 6 | `getOptionsFor` not memoized | Medium | Small | ⬜ Pending |
| 7 | Multi-column sort API | Low | Types only | ⬜ Pending |
| 8 | Row selection API | Low | Design | ⬜ Pending |
| 9 | Fuse index recreation | Low | Low | ⬜ Deferred |
