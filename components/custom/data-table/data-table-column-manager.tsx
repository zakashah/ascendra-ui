'use client';

import { useRef, useState } from 'react';
import { DropDownChevron } from '@/components/custom/common-ui/drop-down-chevron';
import { Button } from '@/components/custom/ui/button';
import { Checkbox } from '@/components/custom/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/custom/ui/dropdown-menu';
import { useDataTableContext } from '@/hooks/use-data-table';
import { LuLock, LuSettings } from 'react-icons/lu';
import { RiDraggable } from 'react-icons/ri';

interface DataTableColumnManagerProps {
  icon?: boolean;
}

export function DataTableColumnManager({ icon = false }: DataTableColumnManagerProps) {
  const { columns, toggleColumnActive, reorderColumns } = useDataTableContext();
  const dragKeyRef = useRef<string | null>(null);
  const [dragOverKey, setDragOverKey] = useState<string | null>(null);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild className="group">
        <Button
          variant="secondary"
          size={icon ? 'icon' : 'default'}
          className={icon ? undefined : 'w-8 px-0 sm:w-auto sm:px-3'}
        >
          <LuSettings />
          {!icon && <span className="hidden sm:inline">Columns</span>}
          {!icon && <DropDownChevron className="hidden sm:block" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-54 px-0 py-1"
        sideOffset={8}
        align="start"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <div className="text-muted-foreground px-3 py-1 text-xs">Manage columns</div>
        {columns.map((col) => {
          const canDrag = !col.freeze && col.active !== false;
          const canDropHere = !col.freeze;
          const isDropTarget = canDropHere && dragOverKey === String(col.key);
          return (
            <div
              key={String(col.key)}
              draggable={canDrag}
              onDragStart={(e) => {
                dragKeyRef.current = String(col.key);
                e.dataTransfer.effectAllowed = 'move';
              }}
              onDragOver={(e) => {
                if (!canDropHere || !dragKeyRef.current) return;
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                setDragOverKey(String(col.key));
              }}
              onDrop={(e) => {
                e.preventDefault();
                if (dragKeyRef.current && canDropHere) {
                  reorderColumns(dragKeyRef.current, String(col.key));
                }
                setDragOverKey(null);
              }}
              onDragEnd={() => {
                dragKeyRef.current = null;
                setDragOverKey(null);
              }}
              className={`animate-in fade-in flex items-center justify-between overflow-hidden px-3 py-1 duration-150 ${isDropTarget ? 'border-primary border-t-2' : ''}`}
            >
              <div className="flex items-center gap-2">
                <Checkbox
                  disabled={col.freeze}
                  checked={col.active !== false}
                  onCheckedChange={() => toggleColumnActive(String(col.key))}
                />
                <div className="mt-1">{col.label}</div>
              </div>
              {col.active !== false && col.freeze ? (
                <LuLock className="text-muted-foreground size-2.5 stroke-3" />
              ) : col.active !== false ? (
                <RiDraggable className="text-muted-foreground -mr-0.5 cursor-grab active:cursor-grabbing" />
              ) : null}
            </div>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
