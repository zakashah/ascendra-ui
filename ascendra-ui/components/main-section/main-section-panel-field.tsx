import { cn } from "@/ascendra-ui/shadcn/lib/utils";

export function MainSectionPanelField({
  collapsed,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & { collapsed?: boolean }) {
  return (
    <div
      data-slot="main-section-panel-field"
      data-collapsed={collapsed ? "true" : "false"}
      inert={collapsed}
      className={cn(
        "grid transition-all duration-300",
        collapsed ? "grid-rows-[0fr]" : "grid-rows-[1fr]",
        className,
      )}
      {...props}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}
