"use client";

import { cn } from "@/ascendra-ui/shadcn/lib/utils";
import { useMainSectionContext } from "@/ascendra-ui/components/main-section/main-section";
import { useWizardContextSafe } from "@/ascendra-ui/providers/wizard/wizard.hook";

type MainSectionHeaderTitleProps = React.ComponentProps<"label">;

export function MainSectionHeaderTitle({
  className,
  children,
  ...props
}: MainSectionHeaderTitleProps) {
  const { step } = useMainSectionContext();
  const wizard = useWizardContextSafe();
  const isCompleted =
    step !== undefined && wizard !== null && step < wizard.currentStep;

  if (isCompleted) {
    return (
      <button
        type="button"
        data-slot="main-section-header-title"
        onClick={() => wizard.goToStep(step)}
        className={cn(
          "text-base font-medium cursor-pointer hover:opacity-70 transition-opacity text-left",
          className,
        )}
      >
        {children}
      </button>
    );
  }

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
