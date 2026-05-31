"use client";

import { cn } from "@/ascendra-ui/shadcn/lib/utils";
import { useCardContext } from "@/ascendra-ui/components/card/card";
import { useWizardContextSafe } from "@/ascendra-ui/providers/wizard/wizard.hook";

type CardHeaderTitleProps = React.ComponentProps<"label">;

export function CardHeaderTitle({
  className,
  children,
  ...props
}: CardHeaderTitleProps) {
  const { step } = useCardContext();
  const wizard = useWizardContextSafe();
  const isCompleted =
    step !== undefined && wizard !== null && step < wizard.currentStep;

  if (isCompleted) {
    return (
      <button
        type="button"
        data-slot="card-header-title"
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
      data-slot="card-header-title"
      className={cn("text-base font-medium", className)}
      {...props}
    >
      {children}
    </label>
  );
}
