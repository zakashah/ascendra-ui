import Link from 'next/link';
import { navConfig } from '@/lib/showcase/nav-config';

const categoryIcons: Record<string, string> = {
  'Feedback & Status': '🔴',
  'Forms & Inputs': '📋',
  'Navigation': '🧭',
  'Overlays': '🪟',
  'Tables & Data': '📊',
  'Layout': '⬛',
  'Tabs': '📑',
  'Sidebar': '☰',
  'Utilities': '🔧',
};

export default function ShowcasePage() {
  const categories = navConfig.filter((c) => c.title !== 'Getting Started');

  return (
    <div className="mx-auto max-w-3xl px-8 py-12">
      {/* Hero */}
      <div className="mb-12">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted/60 px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Ascendra Pay Design System
        </div>
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">
          Component Showcase
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          A reference for all custom components in{' '}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
            components/custom/
          </code>
          . Each entry includes a live preview, copyable code, import path, and props table.
        </p>
      </div>

      {/* Stats row */}
      <div className="mb-12 flex gap-6 border-y py-6">
        {[
          { value: '30', label: 'Components' },
          { value: '9', label: 'Categories' },
          { value: '100%', label: 'TypeScript' },
        ].map(({ value, label }) => (
          <div key={label}>
            <p className="text-2xl font-semibold text-foreground">{value}</p>
            <p className="text-xs text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>

      {/* Category grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {categories.map((category) => (
          <Link
            key={category.title}
            href={`/showcase/${category.items[0].slug}`}
            className="group flex flex-col gap-3 rounded-lg border bg-background p-5 transition-all hover:border-primary/30 hover:shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-lg">{categoryIcons[category.title] ?? '📦'}</span>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </span>
              </div>
              <span className="rounded-full bg-muted px-2 py-0.5 text-[0.6875rem] font-medium text-muted-foreground">
                {category.items.length}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {category.items.map((item) => (
                <span
                  key={item.slug}
                  className="rounded bg-muted px-1.5 py-0.5 text-[0.6875rem] text-muted-foreground"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {/* Footer note */}
      <p className="mt-12 text-xs text-muted-foreground">
        All components live in{' '}
        <code className="rounded bg-muted px-1 font-mono">components/custom/</code> and are built
        on Radix UI + Tailwind CSS v4.
      </p>
    </div>
  );
}
