"use client";

import { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetBody,
  SheetFooter,
} from "@/ascendra-ui/components/ui/sheet";
import { Button } from "@/ascendra-ui/components/ui/button";
import { Switch } from "@/ascendra-ui/components/ui/switch";

type Prefs = {
  emailProduct: boolean;
  emailMarketing: boolean;
  emailSecurity: boolean;
  pushActivity: boolean;
  pushMentions: boolean;
  inappUpdates: boolean;
  inappAlerts: boolean;
};

const defaultPrefs: Prefs = {
  emailProduct: true,
  emailMarketing: false,
  emailSecurity: true,
  pushActivity: true,
  pushMentions: true,
  inappUpdates: true,
  inappAlerts: false,
};

function SwitchRow({
  id,
  label,
  description,
  checked,
  onCheckedChange,
}: {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  onCheckedChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-col gap-0.5">
        <label htmlFor={id} className="cursor-pointer text-sm font-medium text-foreground">
          {label}
        </label>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <Switch id={id} checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  );
}

export default function NotificationPreferencesSheet() {
  const [prefs, setPrefs] = useState<Prefs>(defaultPrefs);
  const set = (key: keyof Prefs) => (v: boolean) =>
    setPrefs((p) => ({ ...p, [key]: v }));

  return (
    <Sheet onOpenChange={() => setPrefs(defaultPrefs)}>
      <SheetTrigger asChild>
        <Button variant="secondary">Manage Notifications</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notification Preferences</SheetTitle>
          <SheetDescription>
            Choose how and when you receive notifications.
          </SheetDescription>
        </SheetHeader>
        <SheetBody className="py-5">
          <div className="flex flex-col gap-6">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Email
              </p>
              <div className="flex flex-col gap-4">
                <SwitchRow
                  id="email-product"
                  label="Product updates"
                  description="Release notes, new features, and improvements."
                  checked={prefs.emailProduct}
                  onCheckedChange={set("emailProduct")}
                />
                <SwitchRow
                  id="email-marketing"
                  label="Marketing & promotions"
                  description="Tips, case studies, and special offers."
                  checked={prefs.emailMarketing}
                  onCheckedChange={set("emailMarketing")}
                />
                <SwitchRow
                  id="email-security"
                  label="Security alerts"
                  description="Sign-ins from new devices and password changes."
                  checked={prefs.emailSecurity}
                  onCheckedChange={set("emailSecurity")}
                />
              </div>
            </div>
            <div className="border-t border-border" />
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Push
              </p>
              <div className="flex flex-col gap-4">
                <SwitchRow
                  id="push-activity"
                  label="Activity on your items"
                  description="Comments, reactions, and status changes."
                  checked={prefs.pushActivity}
                  onCheckedChange={set("pushActivity")}
                />
                <SwitchRow
                  id="push-mentions"
                  label="Direct mentions"
                  description="When someone mentions you by name."
                  checked={prefs.pushMentions}
                  onCheckedChange={set("pushMentions")}
                />
              </div>
            </div>
            <div className="border-t border-border" />
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                In-App
              </p>
              <div className="flex flex-col gap-4">
                <SwitchRow
                  id="inapp-updates"
                  label="System updates"
                  description="Maintenance windows and platform changes."
                  checked={prefs.inappUpdates}
                  onCheckedChange={set("inappUpdates")}
                />
                <SwitchRow
                  id="inapp-alerts"
                  label="Billing alerts"
                  description="Payment failures and subscription changes."
                  checked={prefs.inappAlerts}
                  onCheckedChange={set("inappAlerts")}
                />
              </div>
            </div>
          </div>
        </SheetBody>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="secondary">Cancel</Button>
          </SheetClose>
          <SheetClose asChild>
            <Button>Save Preferences</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
