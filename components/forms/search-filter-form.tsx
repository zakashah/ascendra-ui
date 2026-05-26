"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import type { DateRange } from "react-day-picker";

import { MainSection } from "@/ascendra-ui/components/layout/main-section";
import { MainSectionFooter } from "@/ascendra-ui/components/layout/main-section-footer";
import { MainSectionHeader } from "@/ascendra-ui/components/layout/main-section-header";
import { MainSectionHeaderSubtitle } from "@/ascendra-ui/components/layout/main-section-header-subtitle";
import { MainSectionHeaderTitle } from "@/ascendra-ui/components/layout/main-section-header-title";
import { MainSectionPanel } from "@/ascendra-ui/components/layout/main-section-panel";
import { MainSectionPanelItem } from "@/ascendra-ui/components/layout/main-section-panel-item";
import { PageHeader } from "@/ascendra-ui/components/layout/page-header";
import { PageHeaderGroup } from "@/ascendra-ui/components/layout/page-header-group";
import { PageMain } from "@/ascendra-ui/components/layout/page-main";
import { PageSubtitle } from "@/ascendra-ui/components/layout/page-subtitle";
import { PageTitle } from "@/ascendra-ui/components/layout/page-title";
import { PageContent } from "@/ascendra-ui/components/layout/page-content";
import { PageWrapper } from "@/ascendra-ui/components/layout/page-wrapper";
import { MainContent } from "@/ascendra-ui/components/layout/main-content";

import { SimpleAlert } from "@/ascendra-ui/components/common-ui/simple-alert";
import { BackLink } from "@/ascendra-ui/components/forms/back-link";
import { DateRangePicker } from "@/ascendra-ui/components/date/date-range-picker";
import { Button } from "@/ascendra-ui/components/ui/button";
import { Checkbox } from "@/ascendra-ui/components/ui/checkbox";
import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/ascendra-ui/components/ui/combobox";
import {
  Field,
  FieldHint,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/ascendra-ui/components/ui/field";
import { Input } from "@/ascendra-ui/components/ui/input";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/ascendra-ui/components/ui/radio-group";

// ─── Types ─────────────────────────────────────────────────────────────────────

interface FilterValues {
  keyword: string;
  dateRange: DateRange | undefined;
  categories: string;
  statusActive: boolean;
  statusPending: boolean;
  statusInactive: boolean;
  statusArchived: boolean;
  sortBy: string;
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  "Analytics",
  "Design",
  "Development",
  "Finance",
  "HR",
  "Marketing",
  "Operations",
  "Sales",
];

const SORT_OPTIONS = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "alphabetical", label: "Alphabetical A–Z" },
  { value: "relevant", label: "Most relevant" },
];

const STATUS_FILTERS = [
  { name: "statusActive" as const, label: "Active" },
  { name: "statusPending" as const, label: "Pending" },
  { name: "statusInactive" as const, label: "Inactive" },
  { name: "statusArchived" as const, label: "Archived" },
];

// ─── Form ──────────────────────────────────────────────────────────────────────

export default function SearchFilterForm() {
  const [resultCount, setResultCount] = useState<number | null>(null);

  const { control, handleSubmit, reset } = useForm<FilterValues>({
    defaultValues: {
      keyword: "",
      dateRange: undefined,
      categories: "",
      statusActive: true,
      statusPending: true,
      statusInactive: false,
      statusArchived: false,
      sortBy: "newest",
    },
  });

  function onApply(data: FilterValues) {
    const count = 21;
    setResultCount(count);
  }

  function handleReset() {
    reset();
    setResultCount(null);
  }

  return (
    <div className="app-container mt-8 pb-24 lg:mt-10 lg:pb-28">
      <div className="mx-auto flex w-full max-w-3xl flex-col">
        <BackLink href="/showcase/forms">Forms Gallery</BackLink>

        <PageHeader>
          <PageHeaderGroup>
            <PageTitle>Search &amp; Filter</PageTitle>
            <PageSubtitle>
              Narrow down results using the filters below.
            </PageSubtitle>
          </PageHeaderGroup>
        </PageHeader>

        <PageMain>
          <PageWrapper>
            <PageContent>
              <MainContent>
                <MainSection>
                  <MainSectionHeader>
                    <MainSectionHeaderTitle>Filters</MainSectionHeaderTitle>
                    <MainSectionHeaderSubtitle>
                      Combine filters to find exactly what you&apos;re looking
                      for.
                    </MainSectionHeaderSubtitle>
                  </MainSectionHeader>

                  <MainSectionPanel>
                    {/* Panel Item 1 — Keyword */}
                    <MainSectionPanelItem>
                      <Field>
                        <FieldLabel htmlFor="keyword">Search</FieldLabel>
                        <Controller
                          name="keyword"
                          control={control}
                          render={({ field: f }) => (
                            <Input
                              id="keyword"
                              full
                              placeholder="Search by name, ID, or keyword…"
                              value={f.value}
                              onChange={f.onChange}
                              onBlur={f.onBlur}
                            />
                          )}
                        />
                        <FieldHint />
                      </Field>
                    </MainSectionPanelItem>

                    {/* Panel Item 2 — Date range */}
                    <MainSectionPanelItem>
                      <Field>
                        <FieldLabel htmlFor="date-range">Date Range</FieldLabel>
                        <Controller
                          name="dateRange"
                          control={control}
                          render={({ field: f }) => (
                            <DateRangePicker
                              id="date-range"
                              value={f.value}
                              onChange={f.onChange}
                              onBlur={f.onBlur}
                              placeholder="Select date range…"
                            />
                          )}
                        />
                        <FieldHint />
                      </Field>
                    </MainSectionPanelItem>

                    {/* Panel Item 3 — Categories */}
                    <MainSectionPanelItem>
                      <Field>
                        <FieldLabel htmlFor="categories">Categories</FieldLabel>
                        <Controller
                          name="categories"
                          control={control}
                          render={({ field: f }) => (
                            <Combobox
                              items={CATEGORIES}
                              value={f.value}
                              onValueChange={(v) => f.onChange(v)}
                            >
                              <ComboboxInput
                                id="categories"
                                placeholder="All categories"
                                onBlur={f.onBlur}
                                className="w-full"
                              />
                              <ComboboxContent>
                                <ComboboxList>
                                  <ComboboxEmpty>
                                    No results found.
                                  </ComboboxEmpty>
                                  <ComboboxCollection>
                                    {(c: string) => (
                                      <ComboboxItem key={c} value={c}>
                                        {c}
                                      </ComboboxItem>
                                    )}
                                  </ComboboxCollection>
                                </ComboboxList>
                              </ComboboxContent>
                            </Combobox>
                          )}
                        />
                        <FieldHint />
                      </Field>
                    </MainSectionPanelItem>

                    {/* Panel Item 4 — Status checkboxes */}
                    <MainSectionPanelItem>
                      <FieldSet>
                        <FieldLegend variant="label">Status</FieldLegend>
                        {STATUS_FILTERS.map(({ name, label }) => (
                          <Controller
                            key={name}
                            name={name}
                            control={control}
                            render={({ field: f }) => (
                              <Field
                                orientation="horizontal"
                                className="items-baseline"
                              >
                                <Checkbox
                                  id={`status-${name}`}
                                  checked={f.value}
                                  onCheckedChange={f.onChange}
                                  onBlur={f.onBlur}
                                />
                                <FieldLabel
                                  htmlFor={`status-${name}`}
                                  className="cursor-pointer font-normal"
                                >
                                  {label}
                                </FieldLabel>
                              </Field>
                            )}
                          />
                        ))}
                      </FieldSet>
                    </MainSectionPanelItem>

                    {/* Panel Item 5 — Sort by */}
                    <MainSectionPanelItem>
                      <FieldSet>
                        <FieldLegend variant="label">Sort By</FieldLegend>
                        <Controller
                          name="sortBy"
                          control={control}
                          render={({ field: f }) => (
                            <RadioGroup
                              value={f.value}
                              onValueChange={f.onChange}
                              onBlurCapture={(e: React.FocusEvent) => {
                                if (
                                  !e.currentTarget.contains(
                                    e.relatedTarget as Node,
                                  )
                                )
                                  f.onBlur();
                              }}
                              className="flex flex-col"
                            >
                              {SORT_OPTIONS.map((opt) => (
                                <Field
                                  key={opt.value}
                                  orientation="horizontal"
                                  className="items-baseline"
                                >
                                  <RadioGroupItem
                                    value={opt.value}
                                    id={`sort-${opt.value}`}
                                  />
                                  <FieldLabel
                                    htmlFor={`sort-${opt.value}`}
                                    className="cursor-pointer font-normal"
                                  >
                                    {opt.label}
                                  </FieldLabel>
                                </Field>
                              ))}
                            </RadioGroup>
                          )}
                        />
                        <FieldHint />
                      </FieldSet>
                    </MainSectionPanelItem>
                  </MainSectionPanel>

                  <MainSectionFooter className="justify-end gap-2">
                    <Button variant="ghost" type="button" onClick={handleReset}>
                      Reset
                    </Button>
                    <Button type="button" onClick={handleSubmit(onApply)}>
                      Apply filters
                    </Button>
                  </MainSectionFooter>
                </MainSection>

                {resultCount !== null && (
                  <SimpleAlert variant="secondary">
                    Showing <strong>{resultCount} results</strong> for your
                    filters.
                  </SimpleAlert>
                )}
              </MainContent>
            </PageContent>
          </PageWrapper>
        </PageMain>
      </div>
    </div>
  );
}
