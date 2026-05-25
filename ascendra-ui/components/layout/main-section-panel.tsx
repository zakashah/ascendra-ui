"use client";

import { cn } from "@/ascendra-ui/shadcn/lib/utils";
import { useMainSectionContext } from "@/ascendra-ui/components/layout/main-section";

export function MainSectionPanel({
  collapsed,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & { collapsed?: boolean }) {
  const { collapseable, collapsed: contextCollapsed } = useMainSectionContext();
  const isCollapsed = collapsed ?? (collapseable ? contextCollapsed : false);

  return (
    <div
      data-slot="main-section-panel"
      data-section-body
      data-collapsed={isCollapsed ? "true" : "false"}
      inert={isCollapsed}
      className={cn(
        "grid transition-all duration-300",
        isCollapsed ? "grid-rows-[0fr]" : "grid-rows-[1fr]",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "-m-2 overflow-hidden mask-[linear-gradient(to_bottom,black,black_calc(100%-8px),transparent)] p-2 transition-all duration-300",
          isCollapsed ? "m-0 p-0" : "",
        )}
      >
        <div
          className={cn(
            "bg-background mx-1 rounded-lg ring-1 ring-(--color-umbra)/4 dark:ring-black/20",
            "shadow-[0_1px_2px_0_rgba(25,28,33,0.06),0_0_2px_0_rgba(0,0,0,0.08)]",
            "dark:shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.01),0_1px_3px_0_rgba(0,0,0,0.4),0_0_3px_0_rgba(0,0,0,0.2)]",
          )}
        >
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
