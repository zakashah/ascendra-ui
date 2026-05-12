"use client";

import { useState } from "react";
import { ComponentPreview } from "../component-preview";
import { SectionHeader } from "../section-header";
import { PropsTable } from "../props-table";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
  ComboboxCollection,
  ComboboxSeparator,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
} from "@/ascendra-ui/components/ui/combobox";
import { registry } from "@/lib/registry";

const meta = registry["combobox"];

const frameworks = [
  "Next.js",
  "Remix",
  "Astro",
  "SvelteKit",
  "Nuxt",
  "Angular",
];

const groupedItems = [
  { label: "Frontend", items: ["React", "Vue", "Svelte", "Angular"] },
  { label: "Backend", items: ["Node.js", "Deno", "Bun", "Go"] },
];

export function ComboboxDocContent() {
  const [single, setSingle] = useState<string | null>(null);
  const [multi, setMulti] = useState<string[]>([]);

  return (
    <div className="space-y-10">
      {/* Hero preview */}
      <ComponentPreview
        code={`import { Combobox, ComboboxInput, ComboboxContent, ComboboxList, ComboboxItem, ComboboxEmpty } from "@/ascendra-ui/components/ui/combobox";

const [value, setValue] = useState<string | null>(null);

<Combobox value={value} onValueChange={(v) => setValue(v as string)}>
  <ComboboxInput placeholder="Search framework..." />
  <ComboboxContent>
    <ComboboxList>
      <ComboboxItem value="Next.js">Next.js</ComboboxItem>
      <ComboboxItem value="Remix">Remix</ComboboxItem>
      <ComboboxItem value="Astro">Astro</ComboboxItem>
      <ComboboxEmpty>No results found.</ComboboxEmpty>
    </ComboboxList>
  </ComboboxContent>
</Combobox>`}
      >
        <Combobox items={frameworks} value={single} onValueChange={(v) => setSingle(v as string)}>
          <ComboboxInput placeholder="Search framework..." />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No results found.</ComboboxEmpty>
              <ComboboxCollection>
                {(f: string) => (
                  <ComboboxItem key={f} value={f}>
                    {f}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </ComponentPreview>

      {/* Examples */}
      <div className="space-y-8">
        <SectionHeader>Examples</SectionHeader>

        {/* With clear button */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            With clear button
          </h3>
          <p className="text-xs text-muted-foreground">
            Set{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              showClear
            </code>{" "}
            on{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              ComboboxInput
            </code>{" "}
            to show the × button when a value is selected.
          </p>
          <ComponentPreview
            code={`<Combobox>
  <ComboboxInput placeholder="Pick one..." showClear />
  ...
</Combobox>`}
          >
            <Combobox items={frameworks}>
              <ComboboxInput placeholder="Pick one..." showClear />
              <ComboboxContent>
                <ComboboxList>
                  <ComboboxEmpty>No results found.</ComboboxEmpty>
                  <ComboboxCollection>
                    {(f: string) => (
                      <ComboboxItem key={f} value={f}>
                        {f}
                      </ComboboxItem>
                    )}
                  </ComboboxCollection>
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </ComponentPreview>
        </div>

        {/* Grouped options */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            Grouped options
          </h3>
          <p className="text-xs text-muted-foreground">
            Use{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              ComboboxGroup
            </code>{" "}
            +{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              ComboboxLabel
            </code>{" "}
            and{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              ComboboxSeparator
            </code>{" "}
            to organise long lists.
          </p>
          <ComponentPreview
            code={`<ComboboxList>
  <ComboboxGroup>
    <ComboboxLabel>Frontend</ComboboxLabel>
    <ComboboxItem value="React">React</ComboboxItem>
    <ComboboxItem value="Vue">Vue</ComboboxItem>
  </ComboboxGroup>
  <ComboboxSeparator />
  <ComboboxGroup>
    <ComboboxLabel>Backend</ComboboxLabel>
    <ComboboxItem value="Node.js">Node.js</ComboboxItem>
  </ComboboxGroup>
</ComboboxList>`}
          >
            <Combobox items={groupedItems}>
              <ComboboxInput placeholder="Search..." />
              <ComboboxContent>
                <ComboboxList>
                  <ComboboxEmpty>No results found.</ComboboxEmpty>
                  <ComboboxCollection>
                    {(group: { label: string; items: string[] }, i: number) => (
                      <ComboboxGroup key={group.label} items={group.items}>
                        {i > 0 && <ComboboxSeparator />}
                        <ComboboxLabel>{group.label}</ComboboxLabel>
                        <ComboboxCollection>
                          {(item: string) => (
                            <ComboboxItem key={item} value={item}>
                              {item}
                            </ComboboxItem>
                          )}
                        </ComboboxCollection>
                      </ComboboxGroup>
                    )}
                  </ComboboxCollection>
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </ComponentPreview>
        </div>

        {/* Multi-select chips */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            Multi-select with chips
          </h3>
          <p className="text-xs text-muted-foreground">
            Use{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              ComboboxChips
            </code>{" "}
            +{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              ComboboxChipsInput
            </code>{" "}
            for multi-select with tag chips.
          </p>
          <ComponentPreview
            align="start"
            code={`const [values, setValues] = useState<string[]>([]);

<Combobox multiple value={values} onValueChange={(v) => setValues(v as string[])}>
  <ComboboxChips>
    {values.map((v) => (
      <ComboboxChip key={v} value={v}>{v}</ComboboxChip>
    ))}
    <ComboboxChipsInput placeholder="Add framework..." />
  </ComboboxChips>
  <ComboboxContent>
    <ComboboxList>
      {frameworks.map((f) => (
        <ComboboxItem key={f} value={f}>{f}</ComboboxItem>
      ))}
      <ComboboxEmpty>No results found.</ComboboxEmpty>
    </ComboboxList>
  </ComboboxContent>
</Combobox>`}
          >
            <div className="w-72">
              <Combobox
                items={frameworks}
                multiple
                value={multi}
                onValueChange={(v) => setMulti(v as string[])}
              >
                <ComboboxChips>
                  {multi.map((v) => (
                    <ComboboxChip key={v}>
                      {v}
                    </ComboboxChip>
                  ))}
                  <ComboboxChipsInput placeholder="Add framework..." />
                </ComboboxChips>
                <ComboboxContent>
                  <ComboboxList>
                    <ComboboxEmpty>No results found.</ComboboxEmpty>
                    <ComboboxCollection>
                      {(f: string) => (
                        <ComboboxItem key={f} value={f}>
                          {f}
                        </ComboboxItem>
                      )}
                    </ComboboxCollection>
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </div>
          </ComponentPreview>
        </div>

        {/* Disabled */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Disabled</h3>
          <ComponentPreview
            code={`<Combobox>
  <ComboboxInput placeholder="Disabled" disabled />
  ...
</Combobox>`}
          >
            <Combobox items={frameworks}>
              <ComboboxInput placeholder="Disabled" disabled />
              <ComboboxContent>
                <ComboboxList>
                  <ComboboxCollection>
                    {(f: string) => (
                      <ComboboxItem key={f} value={f}>
                        {f}
                      </ComboboxItem>
                    )}
                  </ComboboxCollection>
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </ComponentPreview>
        </div>

        {/* Invalid */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Invalid state</h3>
          <p className="text-xs text-muted-foreground">
            Pass{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              aria-invalid={"{true}"}
            </code>{" "}
            on{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              ComboboxInput
            </code>{" "}
            to apply a destructive outline.
          </p>
          <ComponentPreview
            code={`<Combobox>
  <ComboboxInput placeholder="Pick one..." aria-invalid={true} />
  ...
</Combobox>`}
          >
            <Combobox items={frameworks}>
              <ComboboxInput placeholder="Pick one..." aria-invalid={true} />
              <ComboboxContent>
                <ComboboxList>
                  <ComboboxEmpty>No results found.</ComboboxEmpty>
                  <ComboboxCollection>
                    {(f: string) => (
                      <ComboboxItem key={f} value={f}>
                        {f}
                      </ComboboxItem>
                    )}
                  </ComboboxCollection>
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </ComponentPreview>
        </div>
      </div>

      {/* Props */}
      <div className="space-y-4">
        <SectionHeader>Props</SectionHeader>
        <PropsTable props={meta.props ?? []} />
      </div>
    </div>
  );
}
