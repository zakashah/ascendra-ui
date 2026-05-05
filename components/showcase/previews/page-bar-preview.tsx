'use client';

import { DataTableBarAction } from '@/components/custom/layout/data-table-bar-action';
import { DataTableBarContent } from '@/components/custom/layout/data-table-bar-content';
import { TableBar } from '@/components/custom/layout/table-bar';
import { Button } from '@/components/custom/ui/button';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/custom/ui/input-group';
import { registry } from '@/lib/showcase/registry';
import { LuPlus, LuSearch, LuSlidersHorizontal } from 'react-icons/lu';
import { ComponentPreview } from '../component-preview';
import { PropsTable } from '../props-table';
import { SectionHeader } from '../section-header';

const meta = registry['page-bar'];

export function PageBarDocContent() {
  return (
    <div className="space-y-10">
      <ComponentPreview
        align="start"
        code={`import { PageBar, PageBarContent, PageBarAction } from "@/components/custom/layout/page-bar";

<TableBar>
  <PageBarContent>
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <LuSearch className="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
    </InputGroup>
  </DataTableBarContent>
  <DataTableBarAction>
    <Button>
      <LuPlus />
      Add
    </Button>
  </DataTableBarAction>
</TableBar>`}
      >
        <div className="w-full">
          <TableBar>
            <DataTableBarContent>
              <div className="w-56">
                <InputGroup>
                  <InputGroupAddon align="inline-start">
                    <LuSearch className="size-4" />
                  </InputGroupAddon>
                  <InputGroupInput placeholder="Search..." />
                </InputGroup>
              </div>
            </DataTableBarContent>
            <DataTableBarAction>
              <Button>
                <LuPlus />
                Add
              </Button>
            </DataTableBarAction>
          </TableBar>
        </div>
      </ComponentPreview>

      <div className="space-y-8">
        <SectionHeader>Examples</SectionHeader>

        <div className="space-y-3">
          <h3 className="text-foreground text-sm font-medium">
            Search + Filter + Action
          </h3>
          <p className="text-muted-foreground text-xs">
            Full toolbar pattern: search on the left, filter and primary CTA on
            the right.
          </p>
          <ComponentPreview
            align="start"
            code={`<TableBar>
  <PageBarContent>
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <LuSearch className="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search parents..." />
    </InputGroup>
  </DataTableBarContent>
  <DataTableBarAction>
    <Button variant="secondary">
      <LuSlidersHorizontal />
      Filter
    </Button>
    <Button>
      <LuPlus />
      Add Parent
    </Button>
  </DataTableBarAction>
</TableBar>`}
          >
            <div className="w-full">
              <TableBar>
                <DataTableBarContent>
                  <div className="w-56">
                    <InputGroup>
                      <InputGroupAddon align="inline-start">
                        <LuSearch className="size-4" />
                      </InputGroupAddon>
                      <InputGroupInput placeholder="Search parents..." />
                    </InputGroup>
                  </div>
                </DataTableBarContent>
                <DataTableBarAction>
                  <Button variant="secondary">
                    <LuSlidersHorizontal />
                    Filter
                  </Button>
                  <Button>
                    <LuPlus />
                    Add Parent
                  </Button>
                </DataTableBarAction>
              </TableBar>
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
