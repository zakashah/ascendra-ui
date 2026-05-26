"use client";

import { LuCheck } from "react-icons/lu";
import { cn } from "@/ascendra-ui/shadcn/lib/utils";
import { useWizardContext } from "@/ascendra-ui/providers/wizard/wizard.hook";

export function WizardSteps() {
  const { steps, currentStep, goToStep } = useWizardContext();

  return (
    <div
      data-slot="wizard-steps"
      className="mt-6 flex items-center gap-1 overflow-x-auto pb-2 no-scrollbar"
    >
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-1 shrink-0 p-1">
          <button
            type="button"
            onClick={() => i < currentStep && goToStep(i)}
            className={cn(
              "flex size-5 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors",
              i < currentStep
                ? "bg-primary text-primary-foreground cursor-pointer"
                : i === currentStep
                  ? "bg-primary text-primary-foreground ring-2 ring-primary/40 ring-offset-2 mr-1"
                  : "bg-muted text-muted-foreground cursor-default",
            )}
          >
            {i < currentStep ? <LuCheck className="size-3.5" /> : i + 1}
          </button>
          <span
            onClick={() => i < currentStep && goToStep(i)}
            className={cn(
              "text-sm whitespace-nowrap",
              i === currentStep
                ? "font-medium text-foreground"
                : i < currentStep
                  ? "text-muted-foreground cursor-pointer hover:text-foreground"
                  : "text-muted-foreground",
            )}
          >
            {step.label}
          </span>
          {i < steps.length - 1 && (
            <div className="mx-1 h-px w-6 shrink-0 bg-border" />
          )}
        </div>
      ))}
    </div>
  );
}
