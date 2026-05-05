'use client';

import { useState } from 'react';
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  useComboboxAnchor,
} from '@/components/custom/ui/combobox';
import {
  InputGroupAddon,
  InputGroupText,
} from '@/components/custom/ui/input-group';
import { BuildingIcon, SearchIcon, UserIcon } from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────────────────────────── */

type Fruit = { value: string; label: string };
type User = { value: string; label: string; role: string };
type Org = { value: string; label: string; type: string };

const fruits: Fruit[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig' },
  { value: 'grape', label: 'Grape' },
];

// Base UI Group shape requires { value, items }
const groupedItems = [
  {
    value: 'fruits',
    label: 'Fruits',
    items: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'cherry', label: 'Cherry' },
    ],
  },
  {
    value: 'vegetables',
    label: 'Vegetables',
    items: [
      { value: 'carrot', label: 'Carrot' },
      { value: 'broccoli', label: 'Broccoli' },
      { value: 'spinach', label: 'Spinach' },
    ],
  },
];

type GroupedItem = (typeof groupedItems)[number];
type FoodItem = GroupedItem['items'][number];

const users: User[] = [
  { value: 'alice', label: 'Alice Johnson', role: 'Admin' },
  { value: 'bob', label: 'Bob Smith', role: 'Editor' },
  { value: 'charlie', label: 'Charlie Lee', role: 'Viewer' },
  { value: 'diana', label: 'Diana Park', role: 'Editor' },
];

const orgs: Org[] = [
  { value: 'acme', label: 'Acme Corp', type: 'Company' },
  { value: 'globex', label: 'Globex', type: 'Company' },
  { value: 'initech', label: 'Initech', type: 'Startup' },
];

/* ─── Helper components ─────────────────────────────────────────────────────── */

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-sm font-medium">{title}</p>
        {description && (
          <p className="text-muted-foreground mt-0.5 text-xs">{description}</p>
        )}
      </div>
      <div className="flex flex-wrap items-start gap-4">{children}</div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */

export default function ComboboxShowcase() {
  const [basic, setBasic] = useState<string | null>(null);
  const [multi, setMulti] = useState<string[]>([]);
  const [chips, setChips] = useState<string[]>([]);
  const chipsAnchor = useComboboxAnchor();
  const [withClear, setWithClear] = useState<string | null>(null);
  const [grouped2, setGrouped2] = useState<string | null>(null);
  const [customItem, setCustomItem] = useState<string | null>(null);
  const [orgItem, setOrgItem] = useState<string | null>(null);
  const [invalidVal, setInvalidVal] = useState<string | null>(null);
  const [invalidChips, setInvalidChips] = useState<string[]>([]);
  const invalidChipsAnchor = useComboboxAnchor();
  const [inputGroup, setInputGroup] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-3xl space-y-12 p-8">
      <div>
        <h1 className="text-lg font-semibold">Combobox</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Searchable select built on Base UI. Supports single, multiple, chips,
          groups, validation states, and Input Group composition.
        </p>
      </div>

      {/* ── Basic ─────────────────────────────────────────────────────────── */}
      <Section title="Basic" description="Single value, filterable.">
        <Combobox value={basic} onValueChange={setBasic} items={fruits}>
          <ComboboxInput placeholder="Select a fruit…" className="w-52" />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No results.</ComboboxEmpty>
              <ComboboxCollection>
                {(item: Fruit) => (
                  <ComboboxItem key={item.value} value={item.value}>
                    {item.label}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Section>

      {/* ── Multiple ──────────────────────────────────────────────────────── */}
      <Section
        title="Multiple"
        description="Multi-select with checkmarks. Selected value shown in input."
      >
        <Combobox
          value={multi}
          onValueChange={setMulti}
          multiple
          items={fruits}
        >
          <ComboboxInput placeholder="Select fruits…" className="w-52" />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No results.</ComboboxEmpty>
              <ComboboxCollection>
                {(item: Fruit) => (
                  <ComboboxItem key={item.value} value={item.value}>
                    {item.label}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Section>

      {/* ── ComboboxChips ─────────────────────────────────────────────────── */}
      <Section
        title="ComboboxChips"
        description="Multi-select with removable chip tags inline in the input."
      >
        <Combobox
          value={chips}
          onValueChange={setChips}
          multiple
          items={fruits}
        >
          <ComboboxChips ref={chipsAnchor} className="w-80">
            {chips.map((v) => (
              <ComboboxChip key={v}>
                {fruits.find((f) => f.value === v)?.label ?? v}
              </ComboboxChip>
            ))}
            <ComboboxChipsInput placeholder="Add fruit…" />
          </ComboboxChips>
          <ComboboxContent anchor={chipsAnchor}>
            <ComboboxList>
              <ComboboxEmpty>No results.</ComboboxEmpty>
              <ComboboxCollection>
                {(item: Fruit) => (
                  <ComboboxItem key={item.value} value={item.value}>
                    {item.label}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Section>

      {/* ── showClear ─────────────────────────────────────────────────────── */}
      <Section
        title="showClear"
        description="Clear button appears when a value is selected."
      >
        <Combobox value={withClear} onValueChange={setWithClear} items={fruits}>
          <ComboboxInput
            placeholder="Select a fruit…"
            showClear
            className="w-52"
          />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No results.</ComboboxEmpty>
              <ComboboxCollection>
                {(item: Fruit) => (
                  <ComboboxItem key={item.value} value={item.value}>
                    {item.label}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Section>

      {/* ── ComboboxGroup + ComboboxSeparator ────────────────────────────── */}
      <Section
        title="ComboboxGroup + ComboboxSeparator"
        description="Options organised under labelled groups with a visual separator."
      >
        <Combobox
          value={grouped2}
          onValueChange={setGrouped2}
          items={groupedItems}
        >
          <ComboboxInput placeholder="Select a food…" className="w-52" />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No results.</ComboboxEmpty>
              <ComboboxCollection>
                {(group: GroupedItem, groupIndex: number) => (
                  <ComboboxGroup key={group.value}>
                    <ComboboxLabel>{group.label}</ComboboxLabel>
                    {group.items.map((item: FoodItem) => (
                      <ComboboxItem key={item.value} value={item.value}>
                        {item.label}
                      </ComboboxItem>
                    ))}
                    {groupIndex < groupedItems.length - 1 && (
                      <ComboboxSeparator />
                    )}
                  </ComboboxGroup>
                )}
              </ComboboxCollection>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Section>

      {/* ── ComboboxItem with icon ────────────────────────────────────────── */}
      <Section
        title="ComboboxItem"
        description="Items with leading icons and secondary text."
      >
        {/* Users */}
        <Combobox
          value={customItem}
          onValueChange={setCustomItem}
          items={users}
        >
          <ComboboxInput placeholder="Assign to…" className="w-56" />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No users found.</ComboboxEmpty>
              <ComboboxCollection>
                {(u: User) => (
                  <ComboboxItem key={u.value} value={u.value}>
                    <span className="flex items-center gap-2">
                      <UserIcon className="text-muted-foreground size-3.5" />
                      <span>{u.label}</span>
                      <span className="text-muted-foreground ml-auto text-xs">
                        {u.role}
                      </span>
                    </span>
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>

        {/* Orgs */}
        <Combobox value={orgItem} onValueChange={setOrgItem} items={orgs}>
          <ComboboxInput placeholder="Select organisation…" className="w-56" />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No organisations.</ComboboxEmpty>
              <ComboboxCollection>
                {(o: Org) => (
                  <ComboboxItem key={o.value} value={o.value}>
                    <span className="flex items-center gap-2">
                      <BuildingIcon className="text-muted-foreground size-3.5" />
                      <span>{o.label}</span>
                      <span className="text-muted-foreground ml-auto text-xs">
                        {o.type}
                      </span>
                    </span>
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Section>

      {/* ── aria-invalid ──────────────────────────────────────────────────── */}
      <Section
        title="aria-invalid"
        description="Error state on ComboboxInput and ComboboxChips."
      >
        <Combobox
          value={invalidVal}
          onValueChange={setInvalidVal}
          items={fruits}
        >
          <ComboboxInput
            placeholder="Select a fruit…"
            className="w-52"
            aria-invalid
          />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No results.</ComboboxEmpty>
              <ComboboxCollection>
                {(item: Fruit) => (
                  <ComboboxItem key={item.value} value={item.value}>
                    {item.label}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>

        <Combobox
          value={invalidChips}
          onValueChange={setInvalidChips}
          multiple
          items={fruits}
        >
          <ComboboxChips ref={invalidChipsAnchor} className="w-72" aria-invalid>
            {invalidChips.map((v) => (
              <ComboboxChip key={v}>
                {fruits.find((f) => f.value === v)?.label ?? v}
              </ComboboxChip>
            ))}
            <ComboboxChipsInput placeholder="Add fruit…" />
          </ComboboxChips>
          <ComboboxContent anchor={invalidChipsAnchor}>
            <ComboboxList>
              <ComboboxEmpty>No results.</ComboboxEmpty>
              <ComboboxCollection>
                {(item: Fruit) => (
                  <ComboboxItem key={item.value} value={item.value}>
                    {item.label}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Section>

      {/* ── Disabled ──────────────────────────────────────────────────────── */}
      <Section title="Disabled" description="Fully non-interactive.">
        <Combobox disabled items={fruits}>
          <ComboboxInput
          value={'hello'}
            placeholder="Select a fruit…"
            className="w-52"
            disabled
          />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxCollection>
                {(item: Fruit) => (
                  <ComboboxItem key={item.value} value={item.value}>
                    {item.label}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Section>

      {/* ── Input Group ───────────────────────────────────────────────────── */}
      <Section
        title="Input Group"
        description="ComboboxInput composed with a leading InputGroupAddon icon."
      >
        <Combobox
          value={inputGroup}
          onValueChange={setInputGroup}
          items={fruits}
        >
          <ComboboxInput placeholder="Search fruits…" className="w-64">
            <InputGroupAddon align="inline-start">
              <InputGroupText>
                <SearchIcon className="text-muted-foreground size-4" />
              </InputGroupText>
            </InputGroupAddon>
          </ComboboxInput>
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No results.</ComboboxEmpty>
              <ComboboxCollection>
                {(item: Fruit) => (
                  <ComboboxItem key={item.value} value={item.value}>
                    {item.label}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Section>
    </div>
  );
}
