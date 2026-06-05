"use client";

import { Stepper } from "@/ascendra-ui/components/ui/stepper";
import { useWizardContext } from "@/ascendra-ui/providers/wizard/wizard.hook";

export function WizardSteps() {
  const { steps, currentStep, goToStep } = useWizardContext();

  const stepperSteps = steps.map(({ label, description }) => ({
    label,
    description,
  }));

  return (
    <Stepper
      steps={stepperSteps}
      currentStep={currentStep}
      onStepClick={(i) => {
        if (i < currentStep) goToStep(i);
      }}
    />
  );
}
