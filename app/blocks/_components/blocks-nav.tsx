'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const layoutItems = [
  { href: '/blocks', label: 'Overview', exact: true },
  { href: '/blocks/page-header', label: 'Page Header' },
  { href: '/blocks/page-main', label: 'Page Main' },
  { href: '/blocks/main-section', label: 'Main Section' },
  { href: '/blocks/main-content', label: 'Main Content' },
  { href: '/blocks/form-page', label: 'Form Page' },
];

const componentItems = [
  { href: '/blocks/react-hook-form', label: 'React Hook Form' },
];

function NavLink({
  href,
  label,
  exact,
  pathname,
}: {
  href: string;
  label: string;
  exact?: boolean;
  pathname: string;
}) {
  const active = exact ? pathname === href : pathname.startsWith(href);
  return (
    <Link
      href={href}
      className={cn(
        'rounded-md px-3 py-1.5 text-sm transition-colors',
        active
          ? 'bg-muted text-foreground font-medium'
          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
      )}
    >
      {label}
    </Link>
  );
}

export function BlocksNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-4">
      <div className="flex flex-col gap-0.5">
        <p className="text-muted-foreground mb-2 px-3 text-[11px] font-semibold tracking-wider uppercase">
          Layout
        </p>
        {layoutItems.map((item) => (
          <NavLink key={item.href} {...item} pathname={pathname} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-muted-foreground mb-2 px-3 text-[11px] font-semibold tracking-wider uppercase">
          Components
        </p>
        {componentItems.map((item) => (
          <NavLink key={item.href} {...item} pathname={pathname} />
        ))}
      </div>
    </nav>
  );
}
