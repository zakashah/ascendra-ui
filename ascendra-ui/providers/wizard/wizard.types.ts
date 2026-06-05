export type WizardStep = {
  label: string;
  description?: string;
  onNext?: () => Promise<boolean>;
};

export type WizardContextValue = {
  steps: WizardStep[];
  currentStep: number;
  goToStep: (i: number) => void;
  handleNext: () => Promise<void>;
  handlePrevious: () => void;
  isSubmitting: boolean;
};

export type WizardProviderProps = {
  steps: WizardStep[];
  onSubmit: () => Promise<boolean>;
  children: React.ReactNode;
};
