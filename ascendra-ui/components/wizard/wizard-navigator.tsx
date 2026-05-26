"use client";

import { Button } from "@/ascendra-ui/components/ui/button";
import { useWizardContext } from "@/ascendra-ui/providers/wizard/wizard.hook";

export function WizardNavigator() {
  const { steps, currentStep, handlePrevious, handleNext, isSubmitting } =
    useWizardContext();
  const isLastStep = currentStep === steps.length - 1;

  return (
    <div className="flex items-center justify-between pt-2">
      <Button
        type="button"
        variant="ghost"
        onClick={handlePrevious}
        disabled={currentStep === 0}
      >
        Previous
      </Button>
      <Button
        type="button"
        onClick={handleNext}
        disabled={isSubmitting}
      >
        {isLastStep ? (isSubmitting ? "Submitting…" : "Submit") : "Next"}
      </Button>
    </div>
  );
}
