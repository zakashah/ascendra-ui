'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function SideBarMenu({
  basePath,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & { basePath: string }) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const hasActive = pathname.startsWith(basePath);

    if (hasActive) {
      menu.setAttribute('data-open', 'true');
      menu.setAttribute('data-locked', 'true');
    } else {
      menu.removeAttribute('data-locked');
      // IMPORTANT: do NOT collapse automatically
      // leave data-open untouched for multi-open behavior
    }

    const syncInert = () => {
      const isOpen = menu.getAttribute('data-open') === 'true';
      const items = menu.querySelectorAll<HTMLElement>('[data-active]');

      items.forEach((item) => {
        if (isOpen) {
          item.removeAttribute('inert');
        } else {
          item.setAttribute('inert', '');
        }
      });
    };

    syncInert();

    const observer = new MutationObserver(syncInert);
    observer.observe(menu, {
      attributes: true,
      attributeFilter: ['data-open'],
    });

    return () => observer.disconnect();
  }, [pathname, basePath]);

  return (
    <div
      data-slot="side-bar-menu"
      ref={menuRef}
      data-open="false"
      className={cn('group flex flex-col p-0.5', className)}
      {...props}
    >
      {children}
    </div>
  );
}
