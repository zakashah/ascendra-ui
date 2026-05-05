'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navConfig } from '@/lib/showcase/nav-config';
import { cn } from '@/lib/utils';

export function ShowcaseNav() {
  const pathname = usePathname();

  const isActive = (slug: string) => {
    if (slug === '') return pathname === '/showcase';
    return pathname === `/showcase/${slug}`;
  };

  return (
    <aside className="sticky top-0 hidden h-screen w-56 shrink-0 flex-col overflow-y-auto border-r bg-background pb-10 lg:flex">
      {/* Logo / Title */}
      <div className="flex h-14 shrink-0 items-center border-b px-5">
        <Link
          href="/showcase"
          className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
        >
          Component Showcase
        </Link>
      </div>

      {/* Nav categories */}
      <nav className="flex-1 px-3 pt-6">
        {navConfig.map((category) => (
          <div key={category.title} className="mb-5">
            <p className="mb-1 px-2 text-[0.6875rem] font-semibold uppercase tracking-wider text-muted-foreground/70">
              {category.title}
            </p>
            <ul className="space-y-0.5">
              {category.items.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={item.slug === '' ? '/showcase' : `/showcase/${item.slug}`}
                    className={cn(
                      'flex h-7 items-center rounded-md px-2 text-sm transition-colors',
                      isActive(item.slug)
                        ? 'bg-primary/8 font-medium text-primary'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
