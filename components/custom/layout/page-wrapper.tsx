import { cn } from '@/lib/utils';

export function PageWrapper({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div data-slot="page-wrapper" className={cn('', className)} {...props}>
      <div className="border-border border-b" />
      {children}
    </div>
  );
}
