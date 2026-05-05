'use client';

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/custom/ui/empty';
import { EmptyBody } from '@/components/custom/ui/table';
import { useDataTableContext } from '@/hooks/use-data-table';
import { LuLoader } from 'react-icons/lu';

export function DataTableLoadingBody() {
  const { isLoading } = useDataTableContext();

  if (!isLoading) return null;

  return (
    <EmptyBody>
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <LuLoader className="animate-spin" strokeWidth={2} />
          </EmptyMedia>
          <EmptyTitle>Loading ...</EmptyTitle>
          <EmptyDescription>Please wait while data is being fetched.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    </EmptyBody>
  );
}
