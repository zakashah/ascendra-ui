'use client';

import { useQueryContext } from '@/hooks/use-query-context';
import { cn } from '@/lib/utils';

export function DataTableBar({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  const { activeQuery, lastResult } = useQueryContext();
  const showParamPanel = !!activeQuery.params?.length && lastResult === null;
  return (
    <div
      data-slot="data-table-bar"
      className={cn(
        'flex w-full flex-col items-start justify-between gap-4 px-0.5 sm:flex-row sm:items-center',
        showParamPanel && 'hidden',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
