import { cn } from '@/ascendra-ui/shadcn/lib/utils';

export function MainSectionHeader({
  className,
  children,
  ...props
}: React.ComponentProps<'header'>) {
  return (
    <header data-slot="main-section-header" className={cn('px-6 py-4', className)} {...props}>
      {children}
    </header>
  );
}
