import { cn } from '@/lib/utils';

/* use class "flex-nowrap" if no line wrape is required */
export function PageHeader({
  className,
  children,
  ...props
}: React.ComponentProps<'header'>) {
  return (
    <header
      data-slot="page-header"
      className={cn(
        'flex flex-wrap items-center justify-between gap-5 pb-6 sm:flex-nowrap',
        className
      )}
      {...props}
    >
      {children}
    </header>
  );
}
