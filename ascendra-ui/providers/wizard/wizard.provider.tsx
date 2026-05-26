"use client";

import { createContext, useState } from "react";
import type { WizardContextValue, WizardProviderProps } from "./wizard.types";

export const WizardContext = createContext<WizardContextValue | null>(null);

export function WizardProvider({ steps, onSubmit, children }: WizardProviderProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const lastStep = steps.length - 1;

  function goToStep(i: number) {
    if (i >= 0 && i < steps.length) setCurrentStep(i);
  }

  function handlePrevious() {
    setCurrentStep((s) => Math.max(0, s - 1));
  }

  async function handleNext() {
    if (currentStep === lastStep) {
      setIsSubmitting(true);
      await onSubmit();
      setIsSubmitting(false);
      return;
    }

    const validator = steps[currentStep].onNext;
    if (validator) {
      const ok = await validator();
      if (!ok) return;
    }

    setCurrentStep((s) => s + 1);
  }

  return (
    <WizardContext.Provider
      value={{ steps, currentStep, goToStep, handleNext, handlePrevious, isSubmitting }}
    >
      {children}
    </WizardContext.Provider>
  );
}
