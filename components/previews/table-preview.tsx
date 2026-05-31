"use client";

import { ComponentPreview } from "../component-preview";
import { SectionHeader } from "../section-header";
import { PropsTable } from "../props-table";
import {
  Table,
  TableWrapper,
  TableHeader,
  TableHeaderRow,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  EmptyBody,
} from "@/ascendra-ui/components/ui/table";
import { SimpleBadge } from "@/ascendra-ui/components/common-ui/simple-badge";

// ─── Shared sample rows ──────────────────────────────────────────────────────

function SampleRows() {
  return (
    <>
      <TableRow>
        <TableCell>Ahmed Khan</TableCell>
        <TableCell>INV-001</TableCell>
        <TableCell>PKR 12,000</TableCell>
        <TableCell>
          <SimpleBadge variant="green">Paid</SimpleBadge>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Sara Ali</TableCell>
        <TableCell>INV-002</TableCell>
        <TableCell>PKR 8,500</TableCell>
        <TableCell>
          <SimpleBadge variant="amber">Pending</SimpleBadge>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Usman Raza</TableCell>
        <TableCell>INV-003</TableCell>
        <TableCell>PKR 15,000</TableCell>
        <TableCell>
          <SimpleBadge variant="red">Overdue</SimpleBadge>
        </TableCell>
      </TableRow>
    </>
  );
}

function SampleHeaders() {
  return (
    <TableHeaderRow>
      <TableHead>Client</TableHead>
      <TableHead>Invoice</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead>Status</TableHead>
    </TableHeaderRow>
  );
}

// ─── Doc Content ────────────────────────────────────────────────────────────

export function TableDocContent() {
  return (
    <div className="space-y-10">

      {/* ── Hero ── */}
      <ComponentPreview
        align="start"
        code={`import {
  Table, TableWrapper, TableHeader, TableHeaderRow,
  TableBody, TableRow, TableHead, TableCell,
} from "@/ascendra-ui/components/ui/table";

<TableWrapper>
  <Table>
    <TableHeader>
      <TableHeaderRow>
        <TableHead>Client</TableHead>
        <TableHead>Invoice</TableHead>
        <TableHead>Amount</TableHead>
        <TableHead>Status</TableHead>
      </TableHeaderRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Ahmed Khan</TableCell>
        <TableCell>INV-001</TableCell>
        <TableCell>PKR 12,000</TableCell>
        <TableCell><SimpleBadge variant="green">Paid</SimpleBadge></TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableWrapper>`}
      >
        <div className="w-full">
          <TableWrapper>
            <Table>
              <TableHeader>
                <SampleHeaders />
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Ahmed Khan</TableCell>
                  <TableCell>INV-001</TableCell>
                  <TableCell>PKR 12,000</TableCell>
                  <TableCell>
                    <SimpleBadge variant="green">Paid</SimpleBadge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableWrapper>
        </div>
      </ComponentPreview>

      {/* ── Examples ── */}
      <div className="space-y-8">
        <SectionHeader>Examples</SectionHeader>

        {/* Multi-Row */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Multi-Row</h3>
          <p className="text-xs text-muted-foreground">
            Row separators are applied automatically; the last row has no border.
          </p>
          <ComponentPreview
            align="start"
            code={`<TableWrapper>
  <Table>
    <TableHeader>
      <TableHeaderRow>
        <TableHead>Client</TableHead>
        <TableHead>Invoice</TableHead>
        <TableHead>Amount</TableHead>
        <TableHead>Status</TableHead>
      </TableHeaderRow>
    </TableHeader>
    <TableBody>
      <TableRow>...</TableRow>
      <TableRow>...</TableRow>
      <TableRow>...</TableRow>
    </TableBody>
  </Table>
</TableWrapper>`}
          >
            <div className="w-full">
              <TableWrapper>
                <Table>
                  <TableHeader>
                    <SampleHeaders />
                  </TableHeader>
                  <TableBody>
                    <SampleRows />
                  </TableBody>
                </Table>
              </TableWrapper>
            </div>
          </ComponentPreview>
        </div>

        {/* Empty State */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Empty State</h3>
          <p className="text-xs text-muted-foreground">
            Replace <code className="rounded bg-muted px-1 font-mono text-xs">TableBody</code> with{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">EmptyBody</code> when there is no data.
          </p>
          <ComponentPreview
            align="start"
            code={`<TableWrapper>
  <Table>
    <TableHeader>
      <TableHeaderRow>...</TableHeaderRow>
    </TableHeader>
  </Table>
  <EmptyBody>
    <div className="px-6 py-12 text-center text-sm text-muted-foreground">
      No records found.
    </div>
  </EmptyBody>
</TableWrapper>`}
          >
            <div className="w-full">
              <TableWrapper>
                <Table>
                  <TableHeader>
                    <SampleHeaders />
                  </TableHeader>
                </Table>
                <EmptyBody>
                  <div className="px-6 py-12 text-center text-sm text-muted-foreground">
                    No records found.
                  </div>
                </EmptyBody>
              </TableWrapper>
            </div>
          </ComponentPreview>
        </div>

        {/* ── TableWrapper — Border ── */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            TableWrapper — Border
          </h3>
          <p className="text-xs text-muted-foreground">
            Pass a{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">border</code>{" "}
            object to add an accent border to the outer wrapper. Configure{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">side</code>,{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">stroke</code>, and{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">color</code>.
          </p>

          {/* top / orange — default */}
          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              Top border · orange · stroke 3 (defaults)
            </p>
            <ComponentPreview
              align="start"
              code={`<TableWrapper border={{ side: "t", stroke: 3, color: "orange" }}>
  ...
</TableWrapper>`}
            >
              <div className="w-full">
                <TableWrapper border={{ side: "t", stroke: 3, color: "orange" }}>
                  <Table>
                    <TableHeader>
                      <SampleHeaders />
                    </TableHeader>
                    <TableBody>
                      <SampleRows />
                    </TableBody>
                  </Table>
                </TableWrapper>
              </div>
            </ComponentPreview>
          </div>

          {/* left / blue / stroke 2 */}
          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              Left border · blue · stroke 2
            </p>
            <ComponentPreview
              align="start"
              code={`<TableWrapper border={{ side: "l", stroke: 2, color: "blue" }}>
  ...
</TableWrapper>`}
            >
              <div className="w-full">
                <TableWrapper border={{ side: "l", stroke: 2, color: "blue" }}>
                  <Table>
                    <TableHeader>
                      <SampleHeaders />
                    </TableHeader>
                    <TableBody>
                      <SampleRows />
                    </TableBody>
                  </Table>
                </TableWrapper>
              </div>
            </ComponentPreview>
          </div>

          {/* bottom / teal / stroke 1 */}
          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              Bottom border · teal · stroke 1
            </p>
            <ComponentPreview
              align="start"
              code={`<TableWrapper border={{ side: "b", stroke: 1, color: "teal" }}>
  ...
</TableWrapper>`}
            >
              <div className="w-full">
                <TableWrapper border={{ side: "b", stroke: 1, color: "teal" }}>
                  <Table>
                    <TableHeader>
                      <SampleHeaders />
                    </TableHeader>
                    <TableBody>
                      <SampleRows />
                    </TableBody>
                  </Table>
                </TableWrapper>
              </div>
            </ComponentPreview>
          </div>

          {/* Color palette grid */}
          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              All 8 accent colors (top border, stroke 3)
            </p>
            <ComponentPreview
              align="start"
              code={`// All available color values:
<TableWrapper border={{ color: "orange" }}>...</TableWrapper>
<TableWrapper border={{ color: "blue" }}>...</TableWrapper>
<TableWrapper border={{ color: "amber" }}>...</TableWrapper>
<TableWrapper border={{ color: "teal" }}>...</TableWrapper>
<TableWrapper border={{ color: "indigo" }}>...</TableWrapper>
<TableWrapper border={{ color: "purple" }}>...</TableWrapper>
<TableWrapper border={{ color: "red" }}>...</TableWrapper>
<TableWrapper border={{ color: "slate" }}>...</TableWrapper>`}
            >
              <div className="grid w-full grid-cols-2 gap-3">
                {(["orange", "blue", "amber", "teal", "indigo", "purple", "red", "slate"] as const).map(
                  (color) => (
                    <div key={color} className="space-y-1">
                      <p className="text-xs text-muted-foreground capitalize">{color}</p>
                      <TableWrapper border={{ color }}>
                        <Table>
                          <TableHeader>
                            <TableHeaderRow>
                              <TableHead>Client</TableHead>
                              <TableHead>Status</TableHead>
                            </TableHeaderRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>Ahmed Khan</TableCell>
                              <TableCell>
                                <SimpleBadge variant="green">Paid</SimpleBadge>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Sara Ali</TableCell>
                              <TableCell>
                                <SimpleBadge variant="amber">Pending</SimpleBadge>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableWrapper>
                    </div>
                  )
                )}
              </div>
            </ComponentPreview>
          </div>
        </div>

        {/* ── TableBody — Border ── */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            TableBody — Border
          </h3>
          <p className="text-xs text-muted-foreground">
            The <code className="rounded bg-muted px-1 font-mono text-xs">border</code> prop on{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">TableBody</code> applies to the{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">::before</code> pseudo-element that
            forms the card background, giving the body panel its own accent edge.
          </p>

          {/* left / indigo */}
          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              Left border · indigo · stroke 3
            </p>
            <ComponentPreview
              align="start"
              code={`<TableWrapper>
  <Table>
    <TableHeader>...</TableHeader>
    <TableBody border={{ side: "l", stroke: 3, color: "indigo" }}>
      ...
    </TableBody>
  </Table>
</TableWrapper>`}
            >
              <div className="w-full">
                <TableWrapper>
                  <Table>
                    <TableHeader>
                      <SampleHeaders />
                    </TableHeader>
                    <TableBody border={{ side: "l", stroke: 3, color: "indigo" }}>
                      <SampleRows />
                    </TableBody>
                  </Table>
                </TableWrapper>
              </div>
            </ComponentPreview>
          </div>

          {/* top / amber / stroke 2 */}
          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              Top border · amber · stroke 2
            </p>
            <ComponentPreview
              align="start"
              code={`<TableBody border={{ side: "t", stroke: 2, color: "amber" }}>
  ...
</TableBody>`}
            >
              <div className="w-full">
                <TableWrapper>
                  <Table>
                    <TableHeader>
                      <SampleHeaders />
                    </TableHeader>
                    <TableBody border={{ side: "t", stroke: 2, color: "amber" }}>
                      <SampleRows />
                    </TableBody>
                  </Table>
                </TableWrapper>
              </div>
            </ComponentPreview>
          </div>

          {/* right / red */}
          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              Right border · red · stroke 1
            </p>
            <ComponentPreview
              align="start"
              code={`<TableBody border={{ side: "r", stroke: 1, color: "red" }}>
  ...
</TableBody>`}
            >
              <div className="w-full">
                <TableWrapper>
                  <Table>
                    <TableHeader>
                      <SampleHeaders />
                    </TableHeader>
                    <TableBody border={{ side: "r", stroke: 1, color: "red" }}>
                      <SampleRows />
                    </TableBody>
                  </Table>
                </TableWrapper>
              </div>
            </ComponentPreview>
          </div>
        </div>

        {/* ── TableBody — Background ── */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            TableBody — Background Gradient
          </h3>
          <p className="text-xs text-muted-foreground">
            The <code className="rounded bg-muted px-1 font-mono text-xs">bg</code> prop paints a gradient
            onto the <code className="rounded bg-muted px-1 font-mono text-xs">::before</code> panel. Configure{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">style</code> (gradient type),{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">side</code> (direction),{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">color</code>, and{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">to</code> (end stop).
          </p>

          {/* linear to-b orange (defaults) */}
          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              Linear · bottom · orange → transparent (defaults)
            </p>
            <ComponentPreview
              align="start"
              code={`<TableBody bg={{ style: "linear", side: "b", color: "orange", to: "transparent" }}>
  ...
</TableBody>`}
            >
              <div className="w-full">
                <TableWrapper>
                  <Table>
                    <TableHeader>
                      <SampleHeaders />
                    </TableHeader>
                    <TableBody bg={{ style: "linear", side: "b", color: "orange", to: "transparent" }}>
                      <SampleRows />
                    </TableBody>
                  </Table>
                </TableWrapper>
              </div>
            </ComponentPreview>
          </div>

          {/* linear to-t / blue */}
          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              Linear · top · blue → transparent
            </p>
            <ComponentPreview
              align="start"
              code={`<TableBody bg={{ side: "t", color: "blue" }}>
  ...
</TableBody>`}
            >
              <div className="w-full">
                <TableWrapper>
                  <Table>
                    <TableHeader>
                      <SampleHeaders />
                    </TableHeader>
                    <TableBody bg={{ side: "t", color: "blue" }}>
                      <SampleRows />
                    </TableBody>
                  </Table>
                </TableWrapper>
              </div>
            </ComponentPreview>
          </div>

          {/* radial / purple */}
          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              Radial · purple → transparent
            </p>
            <ComponentPreview
              align="start"
              code={`<TableBody bg={{ style: "radial", color: "purple" }}>
  ...
</TableBody>`}
            >
              <div className="w-full">
                <TableWrapper>
                  <Table>
                    <TableHeader>
                      <SampleHeaders />
                    </TableHeader>
                    <TableBody bg={{ style: "radial", color: "purple" }}>
                      <SampleRows />
                    </TableBody>
                  </Table>
                </TableWrapper>
              </div>
            </ComponentPreview>
          </div>

          {/* Color palette grid */}
          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              All 8 accent colors (linear, side b, to transparent)
            </p>
            <ComponentPreview
              align="start"
              code={`<TableBody bg={{ color: "orange" }}>...</TableBody>
<TableBody bg={{ color: "blue" }}>...</TableBody>
<TableBody bg={{ color: "amber" }}>...</TableBody>
<TableBody bg={{ color: "teal" }}>...</TableBody>
<TableBody bg={{ color: "indigo" }}>...</TableBody>
<TableBody bg={{ color: "purple" }}>...</TableBody>
<TableBody bg={{ color: "red" }}>...</TableBody>
<TableBody bg={{ color: "slate" }}>...</TableBody>`}
            >
              <div className="grid w-full grid-cols-2 gap-3">
                {(["orange", "blue", "amber", "teal", "indigo", "purple", "red", "slate"] as const).map(
                  (color) => (
                    <div key={color} className="space-y-1">
                      <p className="text-xs text-muted-foreground capitalize">{color}</p>
                      <TableWrapper>
                        <Table>
                          <TableHeader>
                            <TableHeaderRow>
                              <TableHead>Client</TableHead>
                              <TableHead>Status</TableHead>
                            </TableHeaderRow>
                          </TableHeader>
                          <TableBody bg={{ color }}>
                            <TableRow>
                              <TableCell>Ahmed Khan</TableCell>
                              <TableCell>
                                <SimpleBadge variant="green">Paid</SimpleBadge>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Sara Ali</TableCell>
                              <TableCell>
                                <SimpleBadge variant="amber">Pending</SimpleBadge>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableWrapper>
                    </div>
                  )
                )}
              </div>
            </ComponentPreview>
          </div>
        </div>

        {/* ── Border + Background Combined ── */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            Combined — Border &amp; Background
          </h3>
          <p className="text-xs text-muted-foreground">
            <code className="rounded bg-muted px-1 font-mono text-xs">border</code> and{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">bg</code> can be used together on the
            same <code className="rounded bg-muted px-1 font-mono text-xs">TableBody</code>.
          </p>

          {/* left teal border + teal bg */}
          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              Left border · teal + teal gradient
            </p>
            <ComponentPreview
              align="start"
              code={`<TableBody
  border={{ side: "l", stroke: 3, color: "teal" }}
  bg={{ color: "teal" }}
>
  ...
</TableBody>`}
            >
              <div className="w-full">
                <TableWrapper>
                  <Table>
                    <TableHeader>
                      <SampleHeaders />
                    </TableHeader>
                    <TableBody
                      border={{ side: "l", stroke: 3, color: "teal" }}
                      bg={{ color: "teal" }}
                    >
                      <SampleRows />
                    </TableBody>
                  </Table>
                </TableWrapper>
              </div>
            </ComponentPreview>
          </div>

          {/* TableWrapper border + TableBody bg */}
          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              TableWrapper top border · orange + TableBody orange gradient
            </p>
            <ComponentPreview
              align="start"
              code={`<TableWrapper border={{ side: "t", color: "orange" }}>
  <Table>
    <TableHeader>...</TableHeader>
    <TableBody bg={{ color: "orange", side: "t" }}>
      ...
    </TableBody>
  </Table>
</TableWrapper>`}
            >
              <div className="w-full">
                <TableWrapper border={{ side: "t", color: "orange" }}>
                  <Table>
                    <TableHeader>
                      <SampleHeaders />
                    </TableHeader>
                    <TableBody bg={{ color: "orange", side: "t" }}>
                      <SampleRows />
                    </TableBody>
                  </Table>
                </TableWrapper>
              </div>
            </ComponentPreview>
          </div>

          {/* indigo left border + indigo bg on TableBody */}
          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              Left border · indigo + radial indigo gradient
            </p>
            <ComponentPreview
              align="start"
              code={`<TableBody
  border={{ side: "l", stroke: 2, color: "indigo" }}
  bg={{ style: "radial", color: "indigo" }}
>
  ...
</TableBody>`}
            >
              <div className="w-full">
                <TableWrapper>
                  <Table>
                    <TableHeader>
                      <SampleHeaders />
                    </TableHeader>
                    <TableBody
                      border={{ side: "l", stroke: 2, color: "indigo" }}
                      bg={{ style: "radial", color: "indigo" }}
                    >
                      <SampleRows />
                    </TableBody>
                  </Table>
                </TableWrapper>
              </div>
            </ComponentPreview>
          </div>
        </div>
      </div>

      {/* ── Props ── */}
      <div className="space-y-8">
        <SectionHeader>Props</SectionHeader>

        {/* Table */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Table</h3>
          <PropsTable
            props={[
              { name: "scrollable", type: "boolean", default: "false", description: "Enables scroll on the table container." },
              { name: "vertical", type: "boolean", default: "false", description: "Enables vertical (y-axis) scroll." },
              { name: "horizontal", type: "boolean", default: "true", description: "Enables horizontal (x-axis) scroll." },
              { name: "height", type: "number", description: "Max height in px when vertical scroll is enabled." },
              { name: "minHeight", type: "number", description: "Minimum height in px for the table container." },
            ]}
          />
        </div>

        {/* TableWrapper */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">TableWrapper</h3>
          <PropsTable
            props={[
              { name: "border", type: "BorderConfig", description: "Optional accent border on the outer wrapper. Omit to render without a border." },
            ]}
          />
        </div>

        {/* TableBody */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">TableBody</h3>
          <PropsTable
            props={[
              { name: "border", type: "BorderConfig", description: "Optional accent border applied to the ::before panel element." },
              { name: "bg", type: "BgConfig", description: "Optional gradient background on the ::before panel element. Removes the solid bg-background when set." },
            ]}
          />
        </div>

        {/* BorderConfig */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">BorderConfig</h3>
          <PropsTable
            props={[
              { name: "side", type: "'t' | 'l' | 'r' | 'b'", default: "'t'", description: "Which side the border appears on. t = top, l = left, r = right, b = bottom." },
              { name: "stroke", type: "1 | 2 | 3", default: "3", description: "Border thickness. 1 = 1px, 2 = 2px, 3 = 3px." },
              { name: "color", type: "'blue' | 'amber' | 'purple' | 'red' | 'teal' | 'orange' | 'indigo' | 'slate'", default: "'orange'", description: "Accent color of the border at 60% opacity." },
            ]}
          />
        </div>

        {/* BgConfig */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">BgConfig</h3>
          <PropsTable
            props={[
              { name: "style", type: "'linear' | 'radial' | 'conic'", default: "'linear'", description: "CSS gradient type." },
              { name: "side", type: "'t' | 'l' | 'r' | 'b'", default: "'b'", description: "Gradient direction (only meaningful for linear). t = top, b = bottom, l = left, r = right." },
              { name: "color", type: "'blue' | 'amber' | 'purple' | 'red' | 'teal' | 'orange' | 'indigo' | 'slate'", default: "'orange'", description: "Start color of the gradient at 7% opacity." },
              { name: "to", type: "'transparent' | 'white' | 'black' | 'blue' | 'amber' | 'purple' | 'red' | 'teal' | 'orange' | 'indigo' | 'slate'", default: "'transparent'", description: "End stop color. Accent colors resolve to 500/60 opacity." },
            ]}
          />
        </div>
      </div>

    </div>
  );
}
