'use client';

import { ComponentPreview } from '../component-preview';
import { SectionHeader } from '../section-header';
import { PropsTable } from '../props-table';
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
} from '@/components/custom/ui/table';
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';
import { registry } from '@/lib/showcase/registry';

const meta = registry['table'];

export function TableDocContent() {
  return (
    <div className="space-y-10">

      <ComponentPreview
        align="start"
        code={`import {
  Table, TableWrapper, TableHeader, TableHeaderRow, TableBody,
  TableRow, TableHead, TableCell, TableFooter, TableFoot, EmptyBody,
} from "@/components/custom/ui/table";

<TableWrapper>
  <Table>
    <TableHeader>
      <TableHeaderRow>
        <TableHead>Name</TableHead>
        <TableHead>Amount</TableHead>
        <TableHead>Status</TableHead>
      </TableHeaderRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Ahmed Khan</TableCell>
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
                <TableHeaderRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableHeaderRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Ahmed Khan</TableCell>
                  <TableCell>PKR 12,000</TableCell>
                  <TableCell><SimpleBadge variant="green">Paid</SimpleBadge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableWrapper>
        </div>
      </ComponentPreview>

      <div className="space-y-8">
        <SectionHeader>Examples</SectionHeader>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Multi-Row Table</h3>
          <p className="text-xs text-muted-foreground">Each row is separated by a bottom border; the last row has no border.</p>
          <ComponentPreview
            align="start"
            code={`<TableWrapper>
  <Table>
    <TableHeader>
      <TableHeaderRow>
        <TableHead>Parent</TableHead>
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
      <TableRow>
        <TableCell>Sara Ali</TableCell>
        <TableCell>INV-002</TableCell>
        <TableCell>PKR 8,500</TableCell>
        <TableCell><SimpleBadge variant="blue">Pending</SimpleBadge></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Usman Raza</TableCell>
        <TableCell>INV-003</TableCell>
        <TableCell>PKR 15,000</TableCell>
        <TableCell><SimpleBadge variant="amber">Overdue</SimpleBadge></TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableWrapper>`}
          >
            <div className="w-full">
              <TableWrapper>
                <Table>
                  <TableHeader>
                    <TableHeaderRow>
                      <TableHead>Parent</TableHead>
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
                    <TableRow>
                      <TableCell>Sara Ali</TableCell>
                      <TableCell>INV-002</TableCell>
                      <TableCell>PKR 8,500</TableCell>
                      <TableCell><SimpleBadge variant="blue">Pending</SimpleBadge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Usman Raza</TableCell>
                      <TableCell>INV-003</TableCell>
                      <TableCell>PKR 15,000</TableCell>
                      <TableCell><SimpleBadge variant="amber">Overdue</SimpleBadge></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableWrapper>
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Empty State</h3>
          <p className="text-xs text-muted-foreground">Use <code className="rounded bg-muted px-1 font-mono text-xs">EmptyBody</code> in place of <code className="rounded bg-muted px-1 font-mono text-xs">TableBody</code> when there is no data.</p>
          <ComponentPreview
            align="start"
            code={`<TableWrapper>
  <Table>
    <TableHeader>
      <TableHeaderRow>
        <TableHead>Parent</TableHead>
        <TableHead>Status</TableHead>
      </TableHeaderRow>
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
                    <TableHeaderRow>
                      <TableHead>Parent</TableHead>
                      <TableHead>Status</TableHead>
                    </TableHeaderRow>
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
      </div>

      <div className="space-y-4">
        <SectionHeader>Props</SectionHeader>
        <PropsTable props={meta.props ?? []} />
      </div>
    </div>
  );
}
