import { cn } from '@/ascendra-ui/shadcn';

export function PageWrapper({
  className,
  children,
  hideDivider,
  ...props
}: React.ComponentProps<'div'> & { hideDivider?: boolean }) {
  return (
    <div data-slot="page-wrapper" className={cn('', className)} {...props}>
      {!hideDivider && <div className="border-border border-b" />}
      {children}
    </div>
  );
}
