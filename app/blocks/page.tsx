import Link from 'next/link';

const categories = [
  {
    href: '/blocks/page-header',
    title: 'Page Header',
    description:
      'Simple title, grouped title + subtitle, and header with CTA action.',
    blocks: ['Header Simple', 'Header Grouped', 'Header With Actions'],
  },
  {
    href: '/blocks/page-main',
    title: 'Page Main',
    description:
      'Settings layout (no tabs), tabbed layout, and list layout with PageBar.',
    blocks: ['Main No Tabs', 'Main With Tabs', 'Main With Bar'],
  },
  {
    href: '/blocks/main-section',
    title: 'Main Section',
    description:
      'Settings section with panel and items, footer variant, and danger zone.',
    blocks: ['Section Basic', 'Section With Footer', 'Section Danger'],
  },
  {
    href: '/blocks/main-content',
    title: 'Main Content',
    description: 'Full-width single column and two-column layout with aside.',
    blocks: ['Content Full Width', 'Content With Aside'],
  },
  {
    href: '/blocks/form-page',
    title: 'Form Page',
    description: 'Full-width single column and two-column layout with aside.',
    blocks: ['Content Full Width', 'Content With Aside'],
  },
];

export default function BlocksIndexPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-xl font-semibold">Layout Blocks</h1>
        <p className="text-muted-foreground mt-1.5 max-w-xl text-sm">
          Composition patterns for page layout components. Each category shows
          how specific components are meant to be used together — with a live
          preview and copyable imports.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {categories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="group border-border bg-background hover:border-foreground/20 hover:bg-muted/30 flex flex-col gap-3 rounded-xl border p-5 transition-colors"
          >
            <div>
              <div className="text-sm font-medium">{cat.title}</div>
              <p className="text-muted-foreground mt-0.5 text-xs">
                {cat.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.blocks.map((b) => (
                <span
                  key={b}
                  className="bg-muted text-muted-foreground rounded-md px-2 py-0.5 text-xs"
                >
                  {b}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
