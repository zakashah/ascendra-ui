import { cn } from "@/ascendra-ui/shadcn/lib/utils";

export function MainSectionHeaderSubtitle({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="main-section-header-subtitle"
      className={cn("text-muted-foreground mt-0.5 text-xs", className)}
      {...props}
    >
      {children}
    </p>
  );
}
