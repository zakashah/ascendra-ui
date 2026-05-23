import { cn } from "@/ascendra-ui/shadcn/lib/utils";

export function MainSectionHeaderTitle({
  className,
  children,
  ...props
}: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="main-section-header-title"
      className={cn("text-base font-medium", className)}
      {...props}
    >
      {children}
    </label>
  );
}
