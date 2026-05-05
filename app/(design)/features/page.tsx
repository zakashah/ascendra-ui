'use client';

import { MainContent } from '@/components/custom/layout/main-content';
import { MainSection } from '@/components/custom/layout/main-section';
import { PageContent } from '@/components/custom/layout/page-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { PageWrapper } from '@/components/custom/layout/page-wrapper';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableHeaderRow,
  TableRow,
  TableWrapper,
} from '@/components/custom/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/custom/ui/dropdown-menu';
import { RowActionButton } from '@/components/custom/common-ui/row-action-button';
import { LuSearch, LuSettings, LuTrash2 } from 'react-icons/lu';
import { Button } from '@/components/custom/ui/button';
import { PageHeaderGroup } from '@/components/custom/layout/page-header-group';
import { PageSubtitle } from '@/components/custom/layout/page-subtitle';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/custom/ui/input-group';
import { TableBar } from '@/components/custom/layout/table-bar';
import { DataTableBarContent } from '@/components/custom/layout/data-table-bar-content';
import { DataTableBarAction } from '@/components/custom/layout/data-table-bar-action';

export default function FeaturesPage() {
  return (
    <>
      <PageHeader>
        <PageHeaderGroup>
          <PageTitle>Features</PageTitle>
          <PageSubtitle>
            Grant access to your privileged content and data using features.
          </PageSubtitle>
        </PageHeaderGroup>
      </PageHeader>
      <PageMain>
        <PageWrapper>
          <PageContent>
            <MainContent>
              <TableBar className="-mb-2">
                <DataTableBarContent>
                  <InputGroup className="max-w-xs">
                    <InputGroupInput placeholder="Search..." className="w-65" />
                    <InputGroupAddon>
                      <LuSearch className="text-foreground size-3.5" />
                    </InputGroupAddon>
                  </InputGroup>
                </DataTableBarContent>
                <DataTableBarAction>
                  <Button>+ Add feature</Button>
                </DataTableBarAction>
              </TableBar>
              <MainSection className="pb-0">
                <TableWrapper>
                  <Table scrollable>
                    <TableHeader>
                      <TableHeaderRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Key</TableHead>
                        <TableHead className="w-0"></TableHead>
                      </TableHeaderRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">burhan</TableCell>
                        <TableCell className="font-['Courier_New',monospace]">
                          burhan
                        </TableCell>
                        <TableCell className="w-0">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <RowActionButton />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                              sideOffset={8}
                              className="w-64"
                              align="end"
                              onCloseAutoFocus={(e) => e.preventDefault()}
                            >
                              <DropdownMenuItem>
                                <LuSettings /> Edit feature
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem variant="destructive">
                                <LuTrash2 /> Delete feature
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          feature name
                        </TableCell>
                        <TableCell className="font-['Courier_New',monospace]">
                          feature_name
                        </TableCell>
                        <TableCell className="w-0">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <RowActionButton />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                              sideOffset={8}
                              className="w-64"
                              align="end"
                              onCloseAutoFocus={(e) => e.preventDefault()}
                            >
                              <DropdownMenuItem>
                                <LuSettings /> Edit feature
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem variant="destructive">
                                <LuTrash2 /> Delete feature
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableWrapper>
              </MainSection>
            </MainContent>
          </PageContent>
        </PageWrapper>
      </PageMain>
    </>
  );
}
