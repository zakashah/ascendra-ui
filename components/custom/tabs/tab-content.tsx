'use client';

import { cn } from '@/lib/utils';
import { useTabs } from '@/providers/tabs-context';

export function TabContent({
  value,
  children,
  className,
  ...props
}: React.ComponentProps<'div'> & { value: string }) {
  const { active } = useTabs();

  if (active !== value) return null;

  return (
    <div
      data-slot="tab-content"
      className={cn(
        'mt-8 flex flex-col gap-6 [[data-slot=page-bar]+&]:mt-0',
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-start gap-8 lg:flex-row">
        {children}
      </div>
    </div>
  );
}
