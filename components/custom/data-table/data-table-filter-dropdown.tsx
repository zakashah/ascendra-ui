'use client';

import { Button } from '@/components/custom/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/custom/ui/dropdown-menu';
import { useDataTableContext } from '@/hooks/use-data-table';
import { LuFilter } from 'react-icons/lu';

export function DataTableFilterDropdown() {
  const { filterableColumns, filters, addFilter } = useDataTableContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="group">
        <Button variant="secondary" size="icon">
          <LuFilter />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={8}
        className="w-44"
        align="start"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        {filterableColumns.map((col) => {
          const active = filters.some((f) => f.key === String(col.key));
          return (
            <DropdownMenuItem
              key={String(col.key)}
              disabled={active}
              onClick={() => addFilter(String(col.key))}
            >
              {col.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
