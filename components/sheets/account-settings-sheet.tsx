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
import { SimpleBadge } from "@/ascendra-ui/components/common-ui/simple-badge";

type Settings = {
  publicProfile: boolean;
  dataSharing: boolean;
  twoFactor: boolean;
  sessionAlerts: boolean;
  marketingEmails: boolean;
  productUpdates: boolean;
};

const defaultSettings: Settings = {
  publicProfile: true,
  dataSharing: false,
  twoFactor: true,
  sessionAlerts: true,
  marketingEmails: false,
  productUpdates: true,
};

function SettingRow({
  id,
  label,
  description,
  checked,
  onCheckedChange,
  badge,
}: {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  onCheckedChange: (v: boolean) => void;
  badge?: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-2">
          <label htmlFor={id} className="cursor-pointer text-sm font-medium text-foreground">
            {label}
          </label>
          {badge}
        </div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <Switch id={id} checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  );
}

export default function AccountSettingsSheet() {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const set = (key: keyof Settings) => (v: boolean) =>
    setSettings((s) => ({ ...s, [key]: v }));

  return (
    <Sheet onOpenChange={() => setSettings(defaultSettings)}>
      <SheetTrigger asChild>
        <Button variant="secondary">Account Settings</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Account Settings</SheetTitle>
          <SheetDescription>
            Manage your privacy, security, and notification preferences.
          </SheetDescription>
        </SheetHeader>
        <SheetBody className="py-5">
          <div className="flex flex-col gap-6">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Privacy
              </p>
              <div className="flex flex-col gap-4">
                <SettingRow
                  id="public-profile"
                  label="Public profile"
                  description="Allow others to find and view your profile."
                  checked={settings.publicProfile}
                  onCheckedChange={set("publicProfile")}
                />
                <SettingRow
                  id="data-sharing"
                  label="Usage data sharing"
                  description="Share anonymized product usage to help improve the platform."
                  checked={settings.dataSharing}
                  onCheckedChange={set("dataSharing")}
                />
              </div>
            </div>
            <div className="border-t border-border" />
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Security
              </p>
              <div className="flex flex-col gap-4">
                <SettingRow
                  id="two-factor"
                  label="Two-factor authentication"
                  description="Require a verification code on every new sign-in."
                  checked={settings.twoFactor}
                  onCheckedChange={set("twoFactor")}
                  badge={<SimpleBadge variant="green">Recommended</SimpleBadge>}
                />
                <SettingRow
                  id="session-alerts"
                  label="Session alerts"
                  description="Get notified when a new device signs into your account."
                  checked={settings.sessionAlerts}
                  onCheckedChange={set("sessionAlerts")}
                />
              </div>
            </div>
            <div className="border-t border-border" />
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Notifications
              </p>
              <div className="flex flex-col gap-4">
                <SettingRow
                  id="marketing-emails"
                  label="Marketing emails"
                  description="Receive tips, case studies, and platform news."
                  checked={settings.marketingEmails}
                  onCheckedChange={set("marketingEmails")}
                />
                <SettingRow
                  id="product-updates"
                  label="Product updates"
                  description="Release notes and new feature announcements."
                  checked={settings.productUpdates}
                  onCheckedChange={set("productUpdates")}
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
            <Button>Save Changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
