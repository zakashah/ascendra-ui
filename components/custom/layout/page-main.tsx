import { cn } from '@/lib/utils';

export function PageMain({
  className,
  children,
  ...props
}: React.ComponentProps<'main'>) {
  return (
    <main
      data-slot="page-main"
      className={cn('flex flex-col', className)}
      {...props}
    >
      {children}
    </main>
  );
}
