import { cn } from '@/lib/utils';

export function MainSectionFooter({
  className,
  children,
  ...props
}: React.ComponentProps<'footer'>) {
  return (
    <footer
      data-slot="main-section-footer"
      className={cn(
        'text-muted-foreground flex items-start px-5 pt-4 pb-3 text-xs transition-colors duration-300',
        'border-border border-t',
        'group-[:has(>[data-section-body][data-collapsed="false"])]:border-t-0',
        'group-[:has(>[data-table-container])]:border-t-0',
        className
      )}
      {...props}
    >
      {children}
    </footer>
  );
}
