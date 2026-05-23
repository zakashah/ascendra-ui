import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { cn } from "@/ascendra-ui/shadcn/lib/utils";

export function BackLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-muted-foreground hover:text-foreground flex w-fit items-center gap-1.5 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm",
        className
      )}
    >
      <LuArrowLeft className="size-3.5" />
      {children}
    </Link>
  );
}
