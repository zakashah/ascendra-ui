'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { GlobeIcon, InfoIcon, PhoneIcon } from 'lucide-react';
import { LuChevronDown, LuDownload, LuFileText, LuUserX } from 'react-icons/lu';

import { Button } from '@/components/custom/ui/button';
import { Checkbox } from '@/components/custom/ui/checkbox';
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/custom/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/custom/ui/dropdown-menu';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from '@/components/custom/ui/field';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/custom/ui/input-group';
import { Input } from '@/components/custom/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/custom/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/custom/ui/select';
import { Switch } from '@/components/custom/ui/switch';
import { UnsavedChangesBar } from '@/components/custom/common-ui/unsaved-changes-bar';
import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionFooter } from '@/components/custom/layout/main-section-footer';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
import { MainSectionPanel } from '@/components/custom/layout/main-section-panel';
import { MainSectionPanelItem } from '@/components/custom/layout/main-section-panel-item';
import { DatePicker } from '@/components/custom/ui/date-picker';
import { DateRangePicker } from '@/components/custom/ui/date-range-picker';
import { sleep } from '@/lib/utils';

// ── Schema ──────────────────────────────────────────────────────────────────

const THEMES = ['light', 'dark', 'system'] as const;
const VISIBILITY = ['public', 'team', 'private'] as const;

const schema = z.object({
  // Personal Info
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters'),
  email: z.string().email('Enter a valid email address'),
  phone: z
    .string()
    .optional()
    .refine((v) => !v || /^\+?[\d\s\-()\u200B]{7,20}$/.test(v), {
      message: 'Enter a valid phone number',
    }),
  website: z
    .string()
    .optional()
    .refine((v) => !v || /^https?:\/\/.+\..+/.test(v), {
      message: 'URL must start with http:// or https://',
    }),
  bio: z.string().max(160, 'Bio cannot exceed 160 characters').optional(),
  dateOfBirth: z.date().optional(),

  // Account Preferences
  timezone: z.string().min(1, 'Please select a timezone'),
  language: z.string().min(1, 'Please select a language'),
  theme: z.enum(THEMES),
  emailNotifications: z.boolean(),
  reportRange: z.object({ from: z.date(), to: z.date().optional() }).optional(),

  // Notifications
  notifyMarketing: z.boolean(),
  notifySecurity: z.boolean(),
  notifyProductUpdates: z.boolean(),
  notifyWeeklyDigest: z.boolean(),

  // Visibility
  visibility: z.enum(VISIBILITY),
});

type FormData = z.infer<typeof schema>;

const defaultValues: FormData = {
  fullName: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  phone: '+92 300 1234567',
  website: 'https://alexjohnson.dev',
  bio: 'Product designer and developer based in Karachi.',
  dateOfBirth: new Date('1990-05-15'),
  timezone: 'Asia/Karachi',
  language: 'en',
  theme: 'system',
  emailNotifications: true,
  reportRange: {
    from: new Date('2025-01-01'),
    to: new Date('2025-12-31'),
  },
  notifyMarketing: false,
  notifySecurity: true,
  notifyProductUpdates: true,
  notifyWeeklyDigest: false,
  visibility: 'team',
};

// ── Page ────────────────────────────────────────────────────────────────────

export default function ReactHookFormPage() {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    trigger,
    formState: { errors, isDirty, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onTouched',
  });

  const bio = watch('bio');

  function onSubmit(data: FormData) {
    console.log('Profile saved:', data);
    reset(data);
  }

  const submitForm = handleSubmit(onSubmit);

  return (
    <>
      <div className="flex flex-col gap-8">
        {/* Intro */}
        <div>
          <h1 className="text-lg font-semibold">React Hook Form</h1>
          <p className="text-muted-foreground mt-1 max-w-lg text-sm">
            Production-grade form with React Hook Form + Zod. Demonstrates all
            custom form components, full validation, default values, multiple
            data types, and unsaved-changes tracking.
          </p>
        </div>

        {/* Settings header with DropdownMenu action */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-base font-semibold">Profile Settings</h2>
            <p className="text-muted-foreground mt-0.5 text-sm">
              Manage your account details and preferences
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="group">
              <Button variant="secondary">
                Actions
                <LuChevronDown className="text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              sideOffset={8}
              align="end"
              className="w-52"
              onCloseAutoFocus={(e) => e.preventDefault()}
            >
              <DropdownMenuItem>
                <LuFileText /> Export as CSV
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LuDownload /> Export as JSON
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <LuUserX /> Deactivate Account
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
          noValidate
        >
          {/* ── Section 1: Personal Information ──────────────────────────── */}
          <MainSection>
            <MainSectionHeader>
              <div className="text-base font-medium">Personal Information</div>
              <p className="text-muted-foreground mt-0.5 text-xs">
                Your public profile information visible to others.
              </p>
            </MainSectionHeader>
            <MainSectionPanel>
              {/* Full Name */}
              <MainSectionPanelItem>
                <Field>
                  <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
                  <Input
                    id="fullName"
                    placeholder="Enter your full name"
                    aria-invalid={!!errors.fullName}
                    {...register('fullName')}
                  />
                  <FieldError errors={[errors.fullName]} />
                </Field>
              </MainSectionPanelItem>

              {/* Email */}
              <MainSectionPanelItem>
                <Field>
                  <FieldLabel htmlFor="email">Email Address</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    {...register('email')}
                  />
                  <FieldError errors={[errors.email]} />
                </Field>
              </MainSectionPanelItem>

              {/* Phone — InputGroup with icon prefix */}
              <MainSectionPanelItem>
                <Field>
                  <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                  <InputGroup>
                    <InputGroupAddon align="inline-start">
                      <InputGroupText>
                        <PhoneIcon className="size-4" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <InputGroupInput
                      id="phone"
                      type="tel"
                      placeholder="+92 300 1234567"
                      aria-invalid={!!errors.phone}
                      {...register('phone')}
                    />
                  </InputGroup>
                  <FieldDescription>
                    Optional. Include country code for international numbers.
                  </FieldDescription>
                  <FieldError errors={[errors.phone]} />
                </Field>
              </MainSectionPanelItem>

              {/* Website — InputGroup with icon prefix */}
              <MainSectionPanelItem>
                <Field>
                  <FieldLabel htmlFor="website">Website</FieldLabel>
                  <InputGroup>
                    <InputGroupAddon align="inline-start">
                      <InputGroupText>
                        <GlobeIcon className="size-4" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <InputGroupInput
                      id="website"
                      type="url"
                      placeholder="https://yoursite.com"
                      aria-invalid={!!errors.website}
                      {...register('website')}
                    />
                  </InputGroup>
                  <FieldError errors={[errors.website]} />
                </Field>
              </MainSectionPanelItem>

              {/* Bio — InputGroup with textarea + character count */}
              <MainSectionPanelItem>
                <Field>
                  <FieldLabel htmlFor="bio">Bio</FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      id="bio"
                      rows={3}
                      placeholder="Tell us a little about yourself…"
                      aria-invalid={!!errors.bio}
                      {...register('bio')}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText>{bio?.length ?? 0} / 160</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldDescription>
                    Maximum 160 characters. Shown on your public profile.
                  </FieldDescription>
                  <FieldError errors={[errors.bio]} />
                </Field>
              </MainSectionPanelItem>

              {/* Date of Birth — single DatePicker */}
              <MainSectionPanelItem>
                <Field>
                  <FieldLabel>Date of Birth</FieldLabel>
                  <Controller
                    name="dateOfBirth"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Select your date of birth"
                        fromYear={1940}
                        toYear={new Date().getFullYear() - 13}
                      />
                    )}
                  />
                  <FieldDescription>
                    Used to verify your age. Not shown publicly.
                  </FieldDescription>
                  <FieldError errors={[errors.dateOfBirth]} />
                </Field>
              </MainSectionPanelItem>
            </MainSectionPanel>
          </MainSection>

          {/* ── Section 2: Account Preferences ──────────────────────────── */}
          <MainSection>
            <MainSectionHeader>
              <div className="text-base font-medium">Account Preferences</div>
              <p className="text-muted-foreground mt-0.5 text-xs">
                Configure your regional, display, and communication preferences.
              </p>
            </MainSectionHeader>
            <MainSectionPanel>
              {/* Timezone — Select */}
              <MainSectionPanelItem>
                <Field>
                  <FieldLabel>Timezone</FieldLabel>
                  <Controller
                    name="timezone"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent className="max-h-72">
                          <SelectItem value="Asia/Karachi">
                            Asia/Karachi (PKT +05:00)
                          </SelectItem>
                          <SelectItem value="Asia/Dubai">
                            Asia/Dubai (GST +04:00)
                          </SelectItem>
                          <SelectItem value="Europe/London">
                            Europe/London (GMT +00:00)
                          </SelectItem>
                          <SelectItem value="America/New_York">
                            America/New York (EST −05:00)
                          </SelectItem>
                          <SelectItem value="America/Los_Angeles">
                            America/Los Angeles (PST −08:00)
                          </SelectItem>
                          <SelectItem value="Asia/Tokyo">
                            Asia/Tokyo (JST +09:00)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  <FieldError errors={[errors.timezone]} />
                </Field>
              </MainSectionPanelItem>

              {/* Language — Select */}
              <MainSectionPanelItem>
                <Field>
                  <FieldLabel>Language</FieldLabel>
                  <Controller
                    name="language"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="ur">Urdu</SelectItem>
                          <SelectItem value="ar">Arabic</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  <FieldError errors={[errors.language]} />
                </Field>
              </MainSectionPanelItem>

              {/* Theme — RadioGroup (inline 3-column) */}
              <MainSectionPanelItem>
                <FieldSet>
                  <FieldLegend variant="label">Theme Preference</FieldLegend>
                  <Controller
                    name="theme"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                        className="grid-cols-3"
                      >
                        {THEMES.map((opt) => (
                          <Field
                            key={opt}
                            orientation="horizontal"
                            className="items-baseline"
                          >
                            <RadioGroupItem value={opt} id={`theme-${opt}`} />
                            <FieldLabel
                              htmlFor={`theme-${opt}`}
                              className="cursor-pointer capitalize"
                            >
                              {opt}
                            </FieldLabel>
                          </Field>
                        ))}
                      </RadioGroup>
                    )}
                  />
                  <FieldError errors={[errors.theme]} />
                </FieldSet>
              </MainSectionPanelItem>

              {/* Profile Visibility — RadioGroup with descriptions */}
              <MainSectionPanelItem>
                <FieldSet>
                  <FieldLegend variant="label">Profile Visibility</FieldLegend>
                  <Controller
                    name="visibility"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <Field orientation="horizontal">
                          <RadioGroupItem value="public" id="vis-public" />
                          <FieldContent>
                            <FieldTitle>Public</FieldTitle>
                            <FieldDescription>
                              Visible to everyone, including search engines.
                            </FieldDescription>
                          </FieldContent>
                        </Field>
                        <Field orientation="horizontal">
                          <RadioGroupItem value="team" id="vis-team" />
                          <FieldContent>
                            <FieldTitle>Team only</FieldTitle>
                            <FieldDescription>
                              Visible only to members of your organisation.
                            </FieldDescription>
                          </FieldContent>
                        </Field>
                        <Field orientation="horizontal">
                          <RadioGroupItem value="private" id="vis-private" />
                          <FieldContent>
                            <FieldTitle>Private</FieldTitle>
                            <FieldDescription>
                              Visible only to you.
                            </FieldDescription>
                          </FieldContent>
                        </Field>
                      </RadioGroup>
                    )}
                  />
                  <FieldError errors={[errors.visibility]} />
                </FieldSet>
              </MainSectionPanelItem>

              {/* Email Notifications — Switch */}
              <MainSectionPanelItem>
                <Controller
                  name="emailNotifications"
                  control={control}
                  render={({ field }) => (
                    <Field orientation="horizontal">
                      <Switch
                        id="emailNotifications"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <FieldContent>
                        <FieldTitle>Email notifications</FieldTitle>
                        <FieldDescription>
                          Receive email notifications for account activity and
                          updates.
                        </FieldDescription>
                      </FieldContent>
                    </Field>
                  )}
                />
              </MainSectionPanelItem>

              {/* Report Period — DateRangePicker */}
              <MainSectionPanelItem>
                <Field>
                  <FieldLabel>Report Period</FieldLabel>
                  <Controller
                    name="reportRange"
                    control={control}
                    render={({ field }) => (
                      <DateRangePicker
                        value={
                          field.value as { from: Date; to?: Date } | undefined
                        }
                        onChange={field.onChange}
                        placeholder="Select report period"
                        numberOfMonths={2}
                        fromYear={2000}
                        toYear={new Date().getFullYear() + 1}
                      />
                    )}
                  />
                  <FieldDescription>
                    Date range for your activity reports and exports.
                  </FieldDescription>
                </Field>
              </MainSectionPanelItem>
            </MainSectionPanel>
            <MainSectionFooter>
              <InfoIcon
                className="mt-0.5 mr-2 size-3 shrink-0"
                strokeWidth={2.5}
              />
              Language changes take effect after your next sign-in.
            </MainSectionFooter>
          </MainSection>

          {/* ── Section 3: Notification Preferences ──────────────────────── */}
          <MainSection>
            <MainSectionHeader>
              <div className="text-base font-medium">
                Notification Preferences
              </div>
              <p className="text-muted-foreground mt-0.5 text-xs">
                Choose which types of email notifications you want to receive.
              </p>
            </MainSectionHeader>
            <MainSectionPanel>
              <MainSectionPanelItem>
                <FieldGroup>
                  <Controller
                    name="notifyMarketing"
                    control={control}
                    render={({ field }) => (
                      <Field orientation="horizontal">
                        <Checkbox
                          id="notifyMarketing"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <FieldContent>
                          <FieldTitle>Marketing emails</FieldTitle>
                          <FieldDescription>
                            News, promotions, and product announcements from
                            Ascendra.
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                    )}
                  />
                  <Controller
                    name="notifySecurity"
                    control={control}
                    render={({ field }) => (
                      <Field orientation="horizontal">
                        <Checkbox
                          id="notifySecurity"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <FieldContent>
                          <FieldTitle>Security alerts</FieldTitle>
                          <FieldDescription>
                            Sign-in attempts, password changes, and suspicious
                            account activity.
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                    )}
                  />
                  <Controller
                    name="notifyProductUpdates"
                    control={control}
                    render={({ field }) => (
                      <Field orientation="horizontal">
                        <Checkbox
                          id="notifyProductUpdates"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <FieldContent>
                          <FieldTitle>Product updates</FieldTitle>
                          <FieldDescription>
                            New features, improvements, and release notes.
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                    )}
                  />
                  <Controller
                    name="notifyWeeklyDigest"
                    control={control}
                    render={({ field }) => (
                      <Field orientation="horizontal">
                        <Checkbox
                          id="notifyWeeklyDigest"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <FieldContent>
                          <FieldTitle>Weekly digest</FieldTitle>
                          <FieldDescription>
                            A weekly summary of your account activity and
                            insights.
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                    )}
                  />
                </FieldGroup>
              </MainSectionPanelItem>
            </MainSectionPanel>
          </MainSection>
        </form>

        {/* ── Danger Zone (outside form, no RHF binding needed) ─────────── */}
        <MainSection danger>
          <MainSectionHeader>
            <div className="text-base font-medium">Danger Zone</div>
            <p className="text-muted-foreground mt-0.5 text-xs">
              Irreversible actions that permanently affect your account.
            </p>
          </MainSectionHeader>
          <MainSectionPanel>
            <MainSectionPanelItem>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">Delete account</div>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    Permanently delete your account and all associated data.
                    This action cannot be undone.
                  </p>
                </div>
                <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
                  <DialogTrigger asChild>
                    <Button variant="destructive" size="sm">
                      Delete Account
                    </Button>
                  </DialogTrigger>
                  <DialogContent
                    actions={
                      <DialogActions>
                        <DialogClose asChild>
                          <Button variant="secondary">Cancel</Button>
                        </DialogClose>
                        <Button
                          variant="destructive"
                          onClick={() => {
                            console.log('Account deleted');
                            setDeleteOpen(false);
                          }}
                        >
                          Delete Account
                        </Button>
                      </DialogActions>
                    }
                  >
                    <DialogHeader>
                      <DialogTitle>Delete account?</DialogTitle>
                      <DialogDescription>
                        This will permanently delete your account and remove all
                        associated data including invoices, clients, and
                        settings.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogBody>
                      <p className="text-muted-foreground text-sm">
                        This action{' '}
                        <span className="text-foreground font-medium">
                          cannot be undone
                        </span>
                        . Please make sure you have exported any data you need
                        before proceeding.
                      </p>
                    </DialogBody>
                  </DialogContent>
                </Dialog>
              </div>
            </MainSectionPanelItem>
          </MainSectionPanel>
        </MainSection>
      </div>

      {/* Floating unsaved changes indicator */}
      <UnsavedChangesBar
        isDirty={isDirty}
        onReset={() => reset()}
        onSave={async () => {
          submitForm();
          await sleep(6000);
          return false;
        }}
        onInvalid={() => { void trigger(); }}
        isSaving={saving}
        isValid={isValid}
      />
    </>
  );
}
