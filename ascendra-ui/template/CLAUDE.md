# CLAUDE.md

> **Managed file** — updated automatically by `npm run upgrade`. For project-specific Claude instructions, create `.claude/instructions.md`; Claude Code reads both.

---

## What This Project Is

This project is built on **Ascendra UI** — a full-stack Next.js design system. The `ascendra-ui/` folder is the component library. It is **managed**: never edit files inside it — `npm run upgrade` overwrites them entirely.

Check `ascendra.json` for the current library version and the source repository URL.

---

## Reference Docs — Read These First

**Before writing any UI code**, check whether the library already has what you need:

1. **`docs/ui-reference.md`** — Complete component API: every importable component, its props, import path, and showcase URL. Read this before building any UI element.
2. **`docs/showcase-reference.md`** — Page templates, design patterns, DataTable system, form patterns, chart usage, and import conventions. Read this before building any page.

Both files are auto-updated by `npm run upgrade`.

**If a needed pattern is absent from the library**, implement it minimally with Tailwind and mark it:

```tsx
{/* TODO: ascendra-ui candidate — StatusTimeline — sequence of status events with icons; reusable across all record detail views */}
<div className="flex flex-col gap-3">
  {events.map((e) => (
    <div key={e.id} className="flex items-start gap-3 text-sm">
      <span className="mt-0.5 size-2 shrink-0 rounded-full bg-current" />
      <div>
        <p className="font-medium">{e.label}</p>
        <p className="text-muted-foreground">{e.date}</p>
      </div>
    </div>
  ))}
</div>
```

Run `grep -r "ascendra-ui candidate" .` to collect all flagged gaps at any time.

---

## Tech Stack

Everything below is pre-installed and pre-configured. **Do not add packages** without first checking whether an existing tool covers the need.

| Tool | Notes |
|---|---|
| **Next.js App Router** | `"use client"` directive, `<Link>` for routing, server components by default |
| **TypeScript** | All files must be `.ts` or `.tsx` — no `.js` exceptions |
| **Tailwind CSS** | Design tokens in `app/globals.css` — always use tokens, never hardcoded values |
| **CVA (`class-variance-authority`)** | Use for any variant-driven component |
| **react-hook-form** | `useForm`, `Controller`, `FormProvider` — standard for all forms |
| **zod + @hookform/resolvers/zod** | Schema validation; `zodResolver` passed to `useForm` |
| **@tanstack/react-query** | `QueryProvider` is in root layout; use `useQuery` / `useMutation` for data fetching |
| **axios** | Pre-configured HTTP client at `@/ascendra-ui/lib/api/client.ts` — auth token injected automatically |
| **recharts** | Chart primitives (`AreaChart`, `BarChart`, etc.) — always via `ChartContainer` from `@/ascendra-ui/shadcn` |
| **next-themes** | `ThemeProvider` in root layout; all design tokens auto-adapt to dark/light |
| **next-auth** | Session management; `getSession()` is used inside the axios client interceptor |
| **react-icons/lu** | Lucide icons — always this package, never `lucide-react` directly or heroicons |
| **sonner** | Toasts — `<Toaster />` already in root layout; call `toast()` to trigger |
| **jspdf + html-to-image** | PDF generation and DOM-to-image capture — already installed; no need to add a PDF library |
| **fuse.js** | Client-side fuzzy search — already installed |
| **tiptap** | Rich text editor (`@tiptap/react`, starter-kit, extensions) — already installed |
| **date-fns** | Date formatting and arithmetic — already installed; use before reaching for moment/dayjs |

---

## Project Structure

```
app/
  layout.tsx              ← managed — root HTML shell + all providers (do not edit)
  globals.css             ← managed — design tokens and base styles (do not edit)
  (app)/
    layout.tsx            ← managed — app shell: sidebar + header layout (do not edit)
    page.tsx              ← managed — getting started page (do not edit)
    sandbox/page.tsx      ← development sandbox, safe to edit freely
    {your-routes}/        ← your application pages go here
components/               ← your custom components
hooks/                    ← your custom hooks
lib/                      ← config files, constants, utilities
providers/                ← custom React context providers
utils/                    ← pure stateless utility functions
docs/                     ← managed — do not edit by hand
  ui-reference.md         ← component API reference (auto-updated on upgrade)
  showcase-reference.md   ← page patterns and templates (auto-updated on upgrade)
ascendra-ui/              ← managed — do not edit (overwritten on upgrade)
ascendra.json             ← version manifest — do not edit by hand
```

---

## Import Rules

```ts
// Library components — always from @/ascendra-ui
import { Button, Badge, DataTable, PageLayout } from "@/ascendra-ui";

// shadcn exceptions — these come from @/ascendra-ui/shadcn, not @/ascendra-ui
import { Drawer, DrawerContent, DrawerHeader } from "@/ascendra-ui/shadcn";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ascendra-ui/shadcn";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/ascendra-ui/shadcn";

// Chart primitives — always from recharts directly
import { AreaChart, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

// Icons — always react-icons/lu (Lucide), never lucide-react or heroicons
import { LuSearch, LuPlus, LuChevronDown } from "react-icons/lu";

// Path aliases — always use these, never relative paths
import { MyComponent } from "@/components/my-component"; // ✓
import { MyComponent } from "../../components/my-component"; // ✗
```

---

## Page Building

**Server vs client:** Server components by default. Add `"use client"` only when the component uses hooks, event handlers, browser APIs, or local state.

**New routes:** Create `app/(app)/{route}/page.tsx`. The `(app)` route group applies the app shell layout (sidebar + header) automatically — no extra wiring needed.

**Provider tree:** `QueryProvider`, `ThemeProvider`, and `TooltipProvider` are already in `app/layout.tsx`. Do not re-wrap pages in these providers.

**HTTP / data fetching:** Use the pre-configured `apiClient` from `@/ascendra-ui/lib/api/client.ts` for all API calls. It injects the next-auth Bearer token automatically. Pair it with `useQuery` / `useMutation` from `@tanstack/react-query`.

**Forms:** All forms use `react-hook-form` + `zod`. See `docs/showcase-reference.md` → Form Templates for complete copy-paste patterns.

**DataTable:** Two providers — choose based on data source:
- `DataTableWithQueryProvider` — data comes from the server via named queries; includes `QueryBar`, `QueryParamPanel`, React Query fetching, and saved-query persistence. Use this for any table that hits an API.
- `DataTableProvider` — you supply data directly as a prop; handles sorting, filtering, pagination client-side only. Use for static or already-loaded data sets.

See `docs/showcase-reference.md` → DataTable System for full wiring documentation.

**Charts:** Wrap all charts in `<ChartContainer config={chartConfig}>` from `@/ascendra-ui/shadcn`. See `docs/showcase-reference.md` → Chart Patterns.

---

## Available Skills

Type these in Claude Code to scaffold common patterns. Each skill reads the docs first and asks targeted questions before generating complete, working code.

| Skill | Generates |
|---|---|
| `/create-page` | New route in `app/(app)/` with correct layout variant |
| `/create-form` | Full form: zod schema + react-hook-form + all field components |
| `/create-table` | DataTable with the right provider (server or static) |
| `/create-dashboard` | Dashboard page with stats, charts, and optional table |
| `/create-report` | Report structure with sections and PDF export |
| `/create-chart` | Standalone chart with ChartContainer and chartConfig |
| `/create-dialog` | Modal dialog with optional form and footer actions |
| `/create-sheet` | Side-panel sheet with detail view or form |
| `/create-component` | CVA component following library conventions |

---

## Custom Component Conventions

When building components in `components/`, follow the same conventions as the library:

- **CVA for variants** — any component with visual variants must use `cva()` from `class-variance-authority`
- **`data-slot`** — add `data-slot="component-name"` on the root element of every component
- **Spread props** — always accept and spread `...props` and `className` on every component
- **Composable API** — prefer sub-components over `label` / `title` props

```tsx
"use client";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/ascendra-ui/shadcn";

const statusBadgeVariants = cva("inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium", {
  variants: {
    status: {
      active: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
      inactive: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
    },
  },
  defaultVariants: { status: "active" },
});

export function StatusBadge({
  className,
  status,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof statusBadgeVariants>) {
  return (
    <span
      data-slot="status-badge"
      className={cn(statusBadgeVariants({ status }), className)}
      {...props}
    />
  );
}
```

---

## Code Conventions

- **TypeScript only** — no `.js` files in `components/`, `hooks/`, `lib/`, `providers/`, `utils/`
- **No comments explaining what code does** — write self-documenting code; add a comment only when the WHY is non-obvious
- **No defensive error handling** — don't add try/catch or fallbacks for scenarios that can't happen
- **Validate at boundaries only** — user input and external API responses; trust internal code and framework guarantees

---

## Dos and Don'ts

### Do
- Check `docs/ui-reference.md` before building any UI element
- Check `docs/showcase-reference.md` before building any page
- Use `apiClient` from `@/ascendra-ui/lib/api/client.ts` for all HTTP calls
- Use `useQuery` / `useMutation` from `@tanstack/react-query` for client-side data
- Import all icons from `react-icons/lu`
- Mark any custom pattern that could be reusable with `{/* TODO: ascendra-ui candidate — ... */}`

### Don't
- Edit any file inside `ascendra-ui/` — overwritten on upgrade
- Edit `docs/ui-reference.md` or `docs/showcase-reference.md` — auto-generated
- Edit `app/layout.tsx`, `app/globals.css`, or `app/(app)/layout.tsx` — managed files
- Re-wrap pages in `QueryProvider`, `ThemeProvider`, or `TooltipProvider` — already in root layout
- Use relative imports (`../../`) — always use path aliases (`@/`)
- Import from `lucide-react` directly — use `react-icons/lu`
- Add npm packages without checking whether an existing tool covers the need
