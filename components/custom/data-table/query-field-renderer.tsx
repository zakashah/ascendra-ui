'use client';

import { useFormContext, Controller } from 'react-hook-form';
import type { DateRange } from 'react-day-picker';

import { LuTriangleAlert } from 'react-icons/lu';

import {
  Field,
  FieldLabel,
  FieldDescription,
} from '@/components/custom/ui/field';
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';
import { Input } from '@/components/custom/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/custom/ui/select';
import {
  Combobox,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
} from '@/components/custom/ui/combobox';

// Base UI's Chip uses a `value` prop at runtime but the TS type doesn't expose it
const ComboboxChipItem = ComboboxChip as React.ComponentType<
  React.ComponentProps<typeof ComboboxChip> & { value: string }
>;
import { DatePicker } from '@/components/custom/ui/date-picker';
import { DateRangePicker } from '@/components/custom/ui/date-range-picker';
import { Checkbox } from '@/components/custom/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/custom/ui/radio-group';
import type { FieldDef } from '@/lib/query';

interface QueryFieldRendererProps {
  field: FieldDef;
}

export function QueryFieldRenderer({ field }: QueryFieldRendererProps) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[field.name];
  const inputId = `qf-${field.name}`;
  const labelId = `qf-${field.name}-label`;

  return (
    <Field>
      {/* Label + optional subtitle — checkbox renders its own inline label */}
      {field.type !== 'checkbox' && (
        <div>
          <FieldLabel id={labelId} htmlFor={inputId}>
            {field.label}
          </FieldLabel>
          <p className="mt-0.5 text-xs">{field.info}</p>
        </div>
      )}

      {/* ── text ─────────────────────────────────────────────────────── */}
      {field.type === 'text' && (
        <Input
          id={inputId}
          full
          placeholder={field.placeholder}
          aria-invalid={!!error}
          {...register(field.name)}
        />
      )}

      {/* ── number ───────────────────────────────────────────────────── */}
      {field.type === 'number' && (
        <Input
          id={inputId}
          full
          type="number"
          placeholder={field.placeholder}
          aria-invalid={!!error}
          {...register(field.name, {
            setValueAs: (v: string) => (v === '' ? undefined : Number(v)),
          })}
        />
      )}

      {/* ── select ───────────────────────────────────────────────────── */}
      {field.type === 'select' && (
        <Controller
          name={field.name}
          control={control}
          render={({ field: f }) => (
            <Select
              value={f.value ?? ''}
              onValueChange={f.onChange}
              onOpenChange={(open) => {
                if (!open) f.onBlur();
              }}
            >
              <SelectTrigger
                id={inputId}
                className="w-full"
                aria-invalid={!!error || undefined}
              >
                <SelectValue
                  placeholder={field.placeholder ?? `Select ${field.label}`}
                />
              </SelectTrigger>
              <SelectContent>
                {field.options?.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      )}

      {/* ── multiselect ──────────────────────────────────────────────── */}
      {field.type === 'multiselect' && (
        <Controller
          name={field.name}
          control={control}
          render={({ field: f }) => {
            const selected: string[] = f.value ?? [];
            return (
              <Combobox multiple value={selected} onValueChange={f.onChange}>
                <ComboboxChips aria-invalid={!!error || undefined}>
                  {selected.map((val) => {
                    const opt = field.options?.find((o) => o.value === val);
                    return (
                      <ComboboxChipItem key={val} value={val}>
                        {opt?.label ?? val}
                      </ComboboxChipItem>
                    );
                  })}
                  <ComboboxChipsInput
                    placeholder={
                      selected.length
                        ? ''
                        : (field.placeholder ?? `Select ${field.label}…`)
                    }
                    onBlur={f.onBlur}
                  />
                </ComboboxChips>
                <ComboboxContent>
                  <ComboboxList>
                    {field.options?.map((opt) => (
                      <ComboboxItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </ComboboxItem>
                    ))}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            );
          }}
        />
      )}

      {/* ── date ─────────────────────────────────────────────────────── */}
      {field.type === 'date' && (
        <Controller
          name={field.name}
          control={control}
          render={({ field: f }) => (
            <DatePicker
              value={f.value as Date | undefined}
              onChange={f.onChange}
              onBlur={f.onBlur}
              placeholder={field.placeholder ?? 'Pick a date'}
              invalid={!!error}
            />
          )}
        />
      )}

      {/* ── daterange ────────────────────────────────────────────────── */}
      {field.type === 'daterange' && (
        <Controller
          name={field.name}
          control={control}
          render={({ field: f }) => (
            <DateRangePicker
              value={f.value as DateRange | undefined}
              onChange={f.onChange}
              onBlur={f.onBlur}
              placeholder={field.placeholder ?? 'Pick a date range'}
              invalid={!!error}
            />
          )}
        />
      )}

      {/* ── checkbox ─────────────────────────────────────────────────── */}
      {field.type === 'checkbox' && (
        <Controller
          name={field.name}
          control={control}
          render={({ field: f }) => (
            <Field orientation="horizontal">
              <Checkbox
                id={inputId}
                checked={f.value as boolean}
                onCheckedChange={f.onChange}
                onBlur={f.onBlur}
                aria-invalid={!!error}
              />
              <FieldLabel
                htmlFor={inputId}
                className="cursor-pointer font-normal"
              >
                {field.label}
              </FieldLabel>
            </Field>
          )}
        />
      )}

      {/* ── radio ────────────────────────────────────────────────────── */}
      {field.type === 'radio' && (
        <Controller
          name={field.name}
          control={control}
          render={({ field: f }) => (
            <RadioGroup
              value={f.value ?? ''}
              onValueChange={f.onChange}
              onBlurCapture={(e: React.FocusEvent) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node))
                  f.onBlur();
              }}
              aria-labelledby={labelId}
              className="grid-cols-2 gap-y-1.5"
            >
              {field.options?.map((opt) => (
                <Field
                  key={opt.value}
                  orientation="horizontal"
                  className="items-center"
                >
                  <RadioGroupItem
                    value={opt.value}
                    id={`${inputId}-${opt.value}`}
                  />
                  <FieldLabel
                    htmlFor={`${inputId}-${opt.value}`}
                    className="cursor-pointer font-normal"
                  >
                    {opt.label}
                  </FieldLabel>
                </Field>
              ))}
            </RadioGroup>
          )}
        />
      )}

      {(error || field.description || field.mandatory || field.optional) && (
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            {error ? (
              <p className="text-destructive flex items-start gap-1 text-xs font-normal">
                <LuTriangleAlert
                  className="mt-0.75 size-2.5 shrink-0"
                  aria-hidden
                />
                {(error as { message?: string }).message}
              </p>
            ) : field.description ? (
              <FieldDescription>{field.description}</FieldDescription>
            ) : null}
          </div>
          {(field.mandatory || field.optional) && (
            <SimpleBadge variant="secondary" size="tiny" className="mt-1">
              {field.mandatory ? 'Mandatory' : 'Optional'}
            </SimpleBadge>
          )}
        </div>
      )}
    </Field>
  );
}
