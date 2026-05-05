import { cn } from '@/lib/utils';

export function MainSectionPanelItemGroup({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div data-slot="main-section-panel-item-group" className={cn('flex flex-col space-y-2', className)} {...props}>
      {children}
    </div>
  );
}
