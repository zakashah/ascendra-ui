import { cn } from '@/lib/utils';

export function SideBar({
  className,
  children,
  ...props
}: React.ComponentProps<'aside'>) {
  return (
    <aside data-slot="side-bar"
      id="sidebar-root"
      className={cn(
        'bg-background fixed top-0 left-0 z-150 h-screen w-80 shrink-0 -translate-x-full transform gap-8 overflow-x-hidden overflow-y-auto p-6 transition-transform duration-300 group-data-[sidebar=open]:translate-x-0 lg:static lg:z-90 lg:block lg:h-auto lg:w-62 lg:translate-x-0 lg:overflow-y-hidden lg:p-0',
        className
      )}
      {...props}
    >
      {children}
    </aside>
  );
}
