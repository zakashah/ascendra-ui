"use client";

import { cn } from "@/ascendra-ui/shadcn/lib/utils";
import { useMainSectionContext } from "@/ascendra-ui/components/layout/main-section";
import { useWizardContextSafe } from "@/ascendra-ui/providers/wizard/wizard.hook";

type MainSectionHeaderSubtitleProps = React.ComponentProps<"p">;

export function MainSectionHeaderSubtitle({
  className,
  children,
  ...props
}: MainSectionHeaderSubtitleProps) {
  const { step } = useMainSectionContext();
  const wizard = useWizardContextSafe();

  if (step !== undefined && wizard !== null && wizard.currentStep !== step) {
    return null;
  }

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
