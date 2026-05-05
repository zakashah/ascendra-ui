'use client';

import { MainContent } from '@/components/custom/layout/main-content';
import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
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
import { LuEye, LuTrash2 } from 'react-icons/lu';
import { Separator } from '@/components/ui/separator';
import { CopyText } from '@/components/custom/util/copy-text';
import { Button } from '@/components/custom/ui/button';

export default function JWTTemplatesPage() {
  return (
    <>
      <PageHeader>
        <PageTitle>JWT templates</PageTitle>
      </PageHeader>
      <PageMain>
        <PageWrapper>
          <PageContent>
            <MainContent>
              <MainSection className="pb-0">
                <MainSectionHeader>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-base font-medium">Templates</span>
                    <Button variant="ghost">+ Add new template</Button>
                  </div>
                </MainSectionHeader>
                <Separator />
                <TableWrapper>
                  <Table scrollable>
                    <TableHeader>
                      <TableHeaderRow>
                        <TableHead>Name</TableHead>
                        <TableHead>ID</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead></TableHead>
                      </TableHeaderRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          new_template
                        </TableCell>
                        <TableCell className="font-['Courier_New',monospace]">
                          <CopyText value="jtmp_39YESchKIrydOPq34krZhauo7IT" />
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          February 24, 2026
                        </TableCell>
                        <TableCell>
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
                                <LuEye /> View template
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem variant="destructive">
                                <LuTrash2 /> Delete template
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          template_name
                        </TableCell>
                        <TableCell className="font-['Courier_New',monospace]">
                          <CopyText value="jtmp_39YEKzxsTn32YH1I0TMqSwcUjiP" />
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          January 12, 2026
                        </TableCell>
                        <TableCell>
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
                                <LuEye /> View template
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem variant="destructive">
                                <LuTrash2 /> Delete template
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
