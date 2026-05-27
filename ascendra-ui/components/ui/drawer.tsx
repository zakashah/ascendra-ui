'use client';

import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '@/ascendra-ui/shadcn/lib/utils';

/* ── Root ─────────────────────────────────────────────────────────────────── */

function Drawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
}

/* ── Trigger / Portal / Close ─────────────────────────────────────────────── */

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal {...props} />;
}

function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

/* ── Handle ───────────────────────────────────────────────────────────────── */

function DrawerHandle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Handle>) {
  return (
    <DrawerPrimitive.Handle
      data-slot="drawer-handle"
      className={cn(
        'mx-auto mt-3 mb-1 h-1.5 w-10 shrink-0 rounded-full bg-muted-foreground/25',
        className
      )}
      {...props}
    />
  );
}

/* ── Overlay ──────────────────────────────────────────────────────────────── */

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn('fixed inset-0 z-200 bg-black/40', className)}
      {...props}
    />
  );
}

/* ── Content ──────────────────────────────────────────────────────────────── */

function DrawerContent({
  className,
  children,
  side = 'bottom',
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content> & {
  side?: 'top' | 'right' | 'bottom' | 'left';
}) {
  const showHandle = side === 'bottom' || side === 'top';

  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          'fixed z-1000 flex flex-col bg-background outline-none',
          side === 'bottom' && [
            'inset-x-0 bottom-0 mt-24 max-h-[92%] rounded-t-2xl border-t border-border',
          ],
          side === 'top' && [
            'inset-x-0 top-0 max-h-[92%] rounded-b-2xl border-b border-border',
          ],
          side === 'right' && [
            'inset-y-0 right-0 h-full w-full max-w-md border-l border-border',
          ],
          side === 'left' && [
            'inset-y-0 left-0 h-full w-full max-w-md border-r border-border',
          ],
          'shadow-[0_-8px_40px_-8px_rgba(0,0,0,0.12),0_-2px_12px_-4px_rgba(0,0,0,0.08)] dark:shadow-[0_-8px_40px_-8px_rgba(0,0,0,0.4),0_-2px_12px_-4px_rgba(0,0,0,0.3)]',
          className
        )}
        {...props}
      >
        {showHandle && side === 'bottom' && <DrawerHandle />}
        {children}
        {showHandle && side === 'top' && <DrawerHandle className="mt-2 mb-3" />}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}

/* ── Header / Title / Description ─────────────────────────────────────────── */

function DrawerHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-header"
      className={cn('flex flex-col gap-1 px-6 pt-3 pb-4', className)}
      {...props}
    />
  );
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn('text-sm font-medium text-foreground', className)}
      {...props}
    />
  );
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn('text-xs text-muted-foreground', className)}
      {...props}
    />
  );
}

/* ── Body ─────────────────────────────────────────────────────────────────── */

function DrawerBody({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-body"
      className={cn('flex-1 overflow-y-auto px-6', className)}
      {...props}
    />
  );
}

/* ── Footer ───────────────────────────────────────────────────────────────── */

function DrawerFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn(
        'border-border flex items-center justify-end gap-3 border-t px-6 py-4',
        className
      )}
      {...props}
    />
  );
}

export {
  Drawer,
  DrawerTrigger,
  DrawerPortal,
  DrawerClose,
  DrawerHandle,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerBody,
  DrawerFooter,
};
