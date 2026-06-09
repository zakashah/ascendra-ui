---
description: Scaffold a DataTable with the correct provider based on data source
---

Read `docs/showcase-reference.md` → DataTable System (all subsections: Provider Choice, Column Definitions, both Templates, QueryFn Contract, QueryDef, Key Gotchas) before generating.

Ask:
1. Entity name (e.g. Invoice, Employee, Order)
2. Columns: name and data type for each
3. Data source: server (API) or static/already-loaded?
4. If server: API endpoint path (e.g. `/api/invoices`)
5. Table ID for persistence (e.g. `invoices-table`)

Generate for **server**:
- `DataTableWithQueryProvider` + `QueryBar` + `QueryParamPanel`
- `QueryFn<T>` using `apiClient` from `@/ascendra-ui/lib/api/client.ts`
- `QueryDef` with at least one default named query
- `ColumnDef<T>[]` — use `getValue()` not `row.original` in cell functions (key gotcha)
- `tableId` prop on the provider

Generate for **static**:
- `DataTableProvider` with `data` prop and `tableId`
- `ColumnDef<T>[]`

All imports from `@/ascendra-ui`.
