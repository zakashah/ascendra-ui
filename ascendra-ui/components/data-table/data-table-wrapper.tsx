'use client';

import * as React from 'react';
import { cn } from '@/ascendra-ui/shadcn/lib/utils';
import { useOptionalQueryContext } from '@/ascendra-ui/providers/data-table-query/data-table-query.provider';

export function DataTableWrapper({ className, ...props }: React.ComponentProps<'div'>) {
  const queryCtx = useOptionalQueryContext();
  const showParamPanel = !!queryCtx?.activeQuery.params?.length && queryCtx.confirmedParams === null;

  return (
    <div
      className="grid transition-[grid-template-rows] duration-300 ease-in-out"
      style={{ gridTemplateRows: showParamPanel ? '0fr' : '1fr' }}
    >
      <div className="min-h-0 overflow-hidden">
        <div
          data-slot="table-container"
          data-table-container
          className={cn('bg-muted flex flex-col rounded-xl py-1', className)}
          {...props}
        />
      </div>
    </div>
  );
}
