"use client";

import { useContext } from "react";
import { WizardContext } from "./wizard.provider";
import type { WizardContextValue } from "./wizard.types";

export function useWizardContext(): WizardContextValue {
  const ctx = useContext(WizardContext);
  if (!ctx) throw new Error("useWizardContext must be used inside WizardProvider");
  return ctx;
}

export function useWizardContextSafe(): WizardContextValue | null {
  return useContext(WizardContext);
}
