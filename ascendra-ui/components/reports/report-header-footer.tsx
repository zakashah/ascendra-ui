import { cn } from "@/ascendra-ui/shadcn";

export function ReportHeaderFooter({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="report-header-footer"
      className={cn("mt-5 flex flex-wrap gap-4 border-t pt-4 text-xs", className)}
      {...props}
    >
      {children}
    </div>
  );
}
