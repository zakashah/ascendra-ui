import { cn } from "@/ascendra-ui/shadcn";

export function ReportDocumentWrapper({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="report-document-wrapper"
      className={cn("flex flex-col gap-10", className)}
      {...props}
    >
      {children}
    </div>
  );
}
