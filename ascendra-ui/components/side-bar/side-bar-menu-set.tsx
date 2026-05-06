import { cn } from '@/ascendra-ui/shadcn/lib/utils';

export function SideBarMenuSet({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div data-slot="side-bar-menu-set" className={cn('not-first:mt-8', className)} {...props}>
      {children}
    </div>
  );
}
