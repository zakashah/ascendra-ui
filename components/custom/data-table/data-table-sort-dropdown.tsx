'use client';

import { DropDownChevron } from '@/components/custom/common-ui/drop-down-chevron';
import { Button } from '@/components/custom/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/custom/ui/dropdown-menu';
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { useDataTableContext } from '@/hooks/use-data-table';
import { cn } from '@/lib/utils';
import { LuArrowDown, LuArrowUp, LuArrowUpDown } from 'react-icons/lu';

interface DataTableSortDropdownProps {
  icon?: boolean;
}

export function DataTableSortDropdown({
  icon = false,
}: DataTableSortDropdownProps) {
  const { columns, sortConfig, handleSort, clearSort } = useDataTableContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="group">
        <Button
          variant="secondary"
          size={icon ? 'icon' : 'default'}
          className={icon ? undefined : 'w-8 px-0 sm:w-auto sm:px-3'}
        >
          {icon ? (
            <LuArrowUpDown />
          ) : (
            <>
              <LuArrowUpDown className="sm:hidden" />
              <span className="hidden font-normal sm:inline">Sort by:</span>
              <span className={cn('hidden font-medium sm:inline')}>
                {sortConfig
                  ? (columns.find((c) => c.key === sortConfig.key)?.label ??
                    String(sortConfig.key))
                  : 'None'}
              </span>
              <DropDownChevron className="hidden sm:block" />
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={8}
        align="start"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <DropdownMenuItem
          className={cn(!sortConfig && 'font-medium')}
          onClick={clearSort}
        >
          None
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {columns
          .filter((col) => col.sortable !== false)
          .map((col) => (
            <DropdownMenuItem
              key={String(col.key)}
              className={cn(sortConfig?.key === col.key && 'font-medium')}
              onClick={() => handleSort(col.key)}
            >
              {col.label}
              {sortConfig?.key === col.key &&
                (sortConfig.direction === 'asc' ? (
                  <LuArrowUp className="ml-auto size-3 shrink-0" />
                ) : (
                  <LuArrowDown className="ml-auto size-3 shrink-0" />
                ))}
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
