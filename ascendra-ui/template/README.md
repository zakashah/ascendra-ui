# {project-name}

A Next.js application built on Ascendra UI — a full-stack design system with 50+ production-ready components.

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | Ascendra UI (`ascendra-ui/`) |
| Forms | react-hook-form + Zod |
| Data fetching | TanStack Query v5 |
| Charts | Recharts |
| HTTP client | Axios (pre-configured with auth interceptor) |
| Auth | next-auth |
| Theme | next-themes (light / dark) |
| Icons | react-icons/lu (Lucide) |

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Project structure

```
app/
  layout.tsx              ← managed — root HTML shell + all providers
  globals.css             ← managed — design tokens and base styles
  (app)/
    layout.tsx            ← managed — app shell: sidebar + header
    page.tsx              ← getting-started page
    sandbox/page.tsx      ← blank component playground
    {your-routes}/        ← your application pages
components/               ← your custom components
hooks/                    ← your custom hooks
lib/                      ← config, constants, utilities
providers/                ← custom React context providers
utils/                    ← pure stateless utility functions
docs/
  ui-reference.md         ← component API reference (auto-updated on upgrade)
  showcase-reference.md   ← page patterns and design guide (auto-updated on upgrade)
ascendra-ui/              ← managed — do not edit (overwritten on upgrade)
.ascendra-ui/
  ascendra.json           ← version manifest — do not edit by hand
  CHANGELOG.md            ← ascendra-ui release history
```

> `ascendra-ui/` is hidden from the VSCode file explorer but is committed to git — your CI/CD and deployments need it.

---

## Available commands

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `npm run upgrade` | Upgrade ascendra-ui to a newer version |
| `npm run changelog` | View ascendra-ui release notes |

---

## Building UI

Before writing any UI code, check the reference docs:

- **`docs/ui-reference.md`** — every importable component, props, and import paths
- **`docs/showcase-reference.md`** — page templates, DataTable system, form patterns, chart usage

Import components from `@/ascendra-ui`:

```ts
import { Button, Badge, DataTable, PageLayout } from "@/ascendra-ui";
```

Use Claude Code's scaffolding commands to generate pages, forms, tables, and charts:

```
/create-page       /create-form       /create-table
/create-dashboard  /create-report     /create-chart
/create-dialog     /create-sheet      /create-component
```

---

## Upgrading

```bash
npm run upgrade
```

This replaces the component library, updates managed shell files, syncs dependencies, and commits the upgrade automatically. Your own files (`components/`, `hooks/`, `lib/`, etc.) are never touched.
