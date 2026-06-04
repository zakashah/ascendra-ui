import { cn } from '@/ascendra-ui/shadcn/lib/utils';

export function DashboardContent({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dashboard-content"
      className={cn('flex flex-col gap-4', className)}
      {...props}
    >
      {children}
    </div>
  );
}
