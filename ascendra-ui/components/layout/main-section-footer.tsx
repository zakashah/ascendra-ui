"use client";

import { cn } from "@/ascendra-ui/shadcn/lib/utils";
import { useMainSectionContext } from "@/ascendra-ui/components/layout/main-section";
import { useWizardContextSafe } from "@/ascendra-ui/providers/wizard/wizard.hook";

type MainSectionFooterProps = React.ComponentProps<"footer">;

export function MainSectionFooter({
  className,
  children,
  ...props
}: MainSectionFooterProps) {
  const { step } = useMainSectionContext();
  const wizard = useWizardContextSafe();

  if (step !== undefined && wizard !== null && wizard.currentStep !== step) {
    return null;
  }

  return (
    <footer
      data-slot="main-section-footer"
      className={cn(
        "text-muted-foreground flex items-start px-5 pt-4 pb-3 text-xs transition-colors duration-300",
        "border-border border-t",
        "group-[:has(>[data-section-body][data-collapsed='false'])]:border-t-0",
        "group-[:has(>[data-table-container])]:border-t-0",
        className,
      )}
      {...props}
    >
      {children}
    </footer>
  );
}
