import { cn } from '@/ascendra-ui/shadcn/lib/utils';

export function ContentArea({
  className,
  children,
  ...props
}: React.ComponentProps<'section'>) {
  return (
    <section data-slot="content-area" className={cn('flex-1', className)} {...props}>
      {children}
    </section>
  );
}
