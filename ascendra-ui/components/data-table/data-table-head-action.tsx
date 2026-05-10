"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ascendra-ui/components/ui/dropdown-menu";
import { RowActionButton } from "@/ascendra-ui/components/common-ui/row-action-button";
import { DataTableActionContext } from "./data-table-action-context";
import { LuDownload, LuRefreshCw, LuSettings2, LuTrash2 } from "react-icons/lu";

export type HeadActionVariant = "ghost" | "visible";
export type HeadActionItemVariant = "default" | "destructive";

// ─── Container ────────────────────────────────────────────────────────────────

interface DataTableHeadActionProps {
  children?: React.ReactNode;
  /** Controls trigger button visibility. 'ghost' hides until hover; 'visible' always shows. */
  variant?: HeadActionVariant;
  /** Called with the action id when a menu item is selected. */
  onAction?: (actionId: string) => void;
}

export function DataTableHeadAction({
  children,
  variant = "ghost",
  onAction,
}: DataTableHeadActionProps) {
  return (
    <DataTableActionContext.Provider value={{ onAction }}>
      <th data-slot="table-head" className="py-3 pr-6 pl-5 w-12">
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <RowActionButton opaque={variant === "visible"} />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              sideOffset={8}
              className="w-56"
              align="end"
              onCloseAutoFocus={(e) => e.preventDefault()}
            >
              {children}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </th>
    </DataTableActionContext.Provider>
  );
}

/** Marker consumed by orderChildrenByColumn to place this column last. */
DataTableHeadAction.isLastColumn = true as const;

// ─── Item ─────────────────────────────────────────────────────────────────────

export interface DataTableHeadActionItemProps {
  /** Passed to onAction when selected. */
  id: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  variant?: HeadActionItemVariant;
  disabled?: boolean;
}

export function DataTableHeadActionItem({
  id,
  icon,
  children,
  variant,
  disabled,
}: DataTableHeadActionItemProps) {
  const { onAction } = React.useContext(DataTableActionContext);
  return (
    <DropdownMenuItem
      variant={variant === "destructive" ? "destructive" : "default"}
      disabled={disabled}
      onSelect={() => onAction?.(id)}
    >
      {icon}
      {children}
    </DropdownMenuItem>
  );
}

// ─── Standard presets ─────────────────────────────────────────────────────────

export function DataTableExportHeadAction(
  props: Partial<DataTableHeadActionItemProps>,
) {
  return (
    <DataTableHeadActionItem id="export" icon={<LuDownload />} {...props}>
      {props.children ?? "Export"}
    </DataTableHeadActionItem>
  );
}

export function DataTableRefreshHeadAction(
  props: Partial<DataTableHeadActionItemProps>,
) {
  return (
    <DataTableHeadActionItem id="refresh" icon={<LuRefreshCw />} {...props}>
      {props.children ?? "Refresh"}
    </DataTableHeadActionItem>
  );
}

export function DataTableManageColumnsHeadAction(
  props: Partial<DataTableHeadActionItemProps>,
) {
  return (
    <DataTableHeadActionItem
      id="manage-columns"
      icon={<LuSettings2 />}
      {...props}
    >
      {props.children ?? "Manage columns"}
    </DataTableHeadActionItem>
  );
}

export function DataTableBulkDeleteHeadAction(
  props: Partial<DataTableHeadActionItemProps>,
) {
  return (
    <DataTableHeadActionItem
      id="bulk-delete"
      icon={<LuTrash2 />}
      variant="destructive"
      {...props}
    >
      {props.children ?? "Delete all"}
    </DataTableHeadActionItem>
  );
}
