import { cn } from "@/ascendra-ui/shadcn";

export function ReportHeaderField({
  label,
  stack = false,
  className,
  children,
}: {
  label: string;
  stack?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  if (stack) {
    return (
      <div className={cn("flex flex-col gap-0.5", className)}>
        <span className="text-[0.6875rem] text-muted-foreground">{label}</span>
        <span className="font-medium text-foreground">{children}</span>
      </div>
    );
  }

  return (
    <span className={cn("text-muted-foreground", className)}>
      <span className="font-medium text-foreground">{label}:</span>{" "}
      {children}
    </span>
  );
}
