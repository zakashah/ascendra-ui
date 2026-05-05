'use client';

import * as React from 'react';
import { Dialog as SheetPrimitive } from 'radix-ui';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

/* ── Overlay ──────────────────────────────────────────────────────────────── */

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        'data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0',
        /* 2. Transparent overlay: Changed bg-black/40 to bg-transparent and removed blur */
        'fixed inset-0 z-200 bg-transparent duration-150',
        className
      )}
      {...props}
    />
  );
}

/* ... Root, Trigger, Close remain the same ... */

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

/* ── Content ──────────────────────────────────────────────────────────────── */

function SheetContent({
  className,
  children,
  side = 'right',
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: 'top' | 'right' | 'bottom' | 'left';
  showCloseButton?: boolean;
}) {
  return (
    <SheetPrimitive.Portal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          /* Base positioning and shape */
          'fixed z-1000 flex flex-col overflow-hidden rounded-xl bg-white outline-none dark:bg-(--color-gray-1500)',
          /* Animation settings */
          'data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 duration-300 ease-in-out',

          /* Floating logic: Side-specific offsets and animations */
          side === 'right' && [
            'border-border top-3 right-3 bottom-3 w-full max-w-md border',
            'data-closed:slide-out-to-right data-open:slide-in-from-right',
          ],
          side === 'left' && [
            'border-border top-3 bottom-3 left-3 w-full max-w-md border',
            'data-closed:slide-out-to-left data-open:slide-in-from-left',
          ],
          side === 'top' && [
            'border-border top-3 right-3 left-3 h-auto border',
            'data-closed:slide-out-to-top data-open:slide-in-from-top',
          ],
          side === 'bottom' && [
            'border-border right-3 bottom-3 left-3 h-auto border',
            'data-closed:slide-out-to-bottom data-open:slide-in-from-bottom',
          ],
          'shadow-[0_32px_72px_-12px_rgba(25,28,33,0.2),0_16px_32px_-6px_theme(--color-black/0.2)] dark:shadow-[0_32px_72px_-12px_theme(--color-black/0.4),0_16px_32px_-6px_theme(--color-black/0.4)]',

          className
        )}
        {...props}
      >
        {children}

        {showCloseButton && (
          <SheetPrimitive.Close className="text-muted-foreground hover:bg-accent hover:text-foreground absolute top-4 right-4 rounded-md p-1 transition-colors">
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  );
}

/* ... Header, Title, Description, Body, Footer remain the same ... */

function SheetHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-header"
      className={cn(
        'flex flex-col gap-1 bg-gray-50 px-6 py-5 dark:bg-(--color-gray-1500)',
        className
      )}
      {...props}
    />
  );
}

function SheetSubHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-sub-header"
      className={cn('px-6', className)}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn('text-foreground text-sm font-medium', className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn('text-muted-foreground text-xs', className)}
      {...props}
    />
  );
}

function SheetBody({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-body"
      className={cn('flex-1 overflow-y-auto px-6', className)}
      {...props}
    />
  );
}

function SheetSubFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-sub-footer"
      className={cn('px-6', className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn(
        'border-border flex items-center justify-end gap-3 border-t px-6 py-4',
        className
      )}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetSubHeader,
  SheetTitle,
  SheetDescription,
  SheetBody,
  SheetFooter,
  SheetSubFooter,
};
