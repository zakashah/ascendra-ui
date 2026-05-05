'use client';

import { MainContent } from '@/components/custom/layout/main-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { TabContent } from '@/components/custom/tabs/tab-content';
import { TabList } from '@/components/custom/tabs/tab-list';
import { TabTrigger } from '@/components/custom/tabs/tab-trigger';
import { Tabs } from '@/components/custom/tabs/tabs';

import { RowActionButton } from '@/components/custom/common-ui/row-action-button';
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';
import { DataTableBarAction } from '@/components/custom/layout/data-table-bar-action';
import { DataTableBarContent } from '@/components/custom/layout/data-table-bar-content';
import { TableBar } from '@/components/custom/layout/table-bar';
import { Button } from '@/components/custom/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/custom/ui/dropdown-menu';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/custom/ui/input-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/custom/ui/select';
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
import { CopyText } from '@/components/custom/util/copy-text';
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import {
  LuNotebookPen,
  LuSearch,
  LuTicketCheck,
  LuTrash2,
} from 'react-icons/lu';

export default function RolesPage() {
  return (
    <>
      <PageHeader>
        <PageTitle>Roles & Permissions</PageTitle>
      </PageHeader>
      <PageMain>
        <Tabs defaultValue="role-sets">
          <TabList>
            <TabTrigger value="role-sets">Role sets</TabTrigger>
            <TabTrigger value="all-roles">All roles</TabTrigger>
          </TabList>
          <TabContent value="role-sets">
            <MainContent>
              <TableBar className="-mb-2">
                <DataTableBarContent>
                  <InputGroup className="max-w-xs">
                    <InputGroupInput placeholder="Search..." className="w-65" />
                    <InputGroupAddon>
                      <LuSearch className="text-foreground size-3.5" />
                    </InputGroupAddon>
                  </InputGroup>
                  {/* <div>Sort by select</div> */}
                  <Select>
                    <SelectTrigger>
                      <span className="font-normal">sort by: </span>
                      <SelectValue placeholder="Name" />
                    </SelectTrigger>
                    <SelectContent side="bottom">
                      {['Name', 'Key', 'Created'].map((item, i) => (
                        <SelectItem key={i} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </DataTableBarContent>
                <DataTableBarAction>
                  <div className="text-[11px]">3/10 used</div>
                  <Button>+ Create role set</Button>
                </DataTableBarAction>
              </TableBar>
              <TableWrapper>
                <Table scrollable>
                  <TableHeader>
                    <TableHeaderRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Key</TableHead>
                      <TableHead>Roles</TableHead>
                      <TableHead></TableHead>
                    </TableHeaderRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div>
                          <div className="font-medium">name</div>
                          <div className="text-muted-foreground text-xs">
                            description
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-['Courier_New',monospace]">
                        <CopyText value="role_set:name" />
                      </TableCell>
                      <TableCell>
                        <SimpleBadge variant="secondary" className="mr-2">
                          Admin
                        </SimpleBadge>
                        <SimpleBadge variant="secondary">Member</SimpleBadge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild className="group">
                            <RowActionButton />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            sideOffset={8}
                            className="w-64"
                            align="end"
                            onCloseAutoFocus={(e) => e.preventDefault()}
                          >
                            <DropdownMenuItem>
                              <LuTicketCheck /> Set as default role set
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <LuNotebookPen />
                              Edit role set
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem variant="destructive">
                              <LuTrash2 /> Delete role set
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <div className="font-medium">
                            Default role set
                            <SimpleBadge variant="secondary" className="ml-2">
                              Default role set
                            </SimpleBadge>
                          </div>
                          <div className="text-muted-foreground text-xs">
                            Default role set accross the instance
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-['Courier_New',monospace]">
                        <CopyText value="role_set:default" showTooltip />
                      </TableCell>
                      <TableCell>
                        <SimpleBadge variant="secondary" className="mr-2">
                          Admin
                        </SimpleBadge>
                        <SimpleBadge variant="secondary" className="mr-2">
                          Member
                        </SimpleBadge>
                        <SimpleBadge variant="secondary">name</SimpleBadge>
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
                              <LuTicketCheck /> Set as default role set
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <LuNotebookPen />
                              Edit role set
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem variant="destructive">
                              <LuTrash2 /> Delete role set
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableWrapper>
            </MainContent>
          </TabContent>
          <TabContent value="all-roles">
            <MainContent>
              <TableBar className="-mb-2">
                <DataTableBarContent>
                  <InputGroup className="max-w-xs">
                    <InputGroupInput placeholder="Search..." className="w-65" />
                    <InputGroupAddon>
                      <LuSearch className="text-foreground size-3.5" />
                    </InputGroupAddon>
                  </InputGroup>
                  {/* <div>Sort by select</div> */}
                  <Select>
                    <SelectTrigger>
                      <span className="font-normal">sort by: </span>
                      <SelectValue placeholder="Name" />
                    </SelectTrigger>
                    <SelectContent side="bottom">
                      {['Name', 'Key', 'Created'].map((item, i) => (
                        <SelectItem key={i} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </DataTableBarContent>
                <DataTableBarAction>
                  <div className="text-[11px]">3/10 used</div>
                  <Button>+ Add role</Button>
                </DataTableBarAction>
              </TableBar>
              <TableWrapper>
                <Table scrollable>
                  <TableHeader>
                    <TableHeaderRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Key</TableHead>
                      <TableHead>Roles</TableHead>
                      <TableHead></TableHead>
                    </TableHeaderRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div>
                          <div className="font-medium">Admin</div>
                          <div className="text-muted-foreground text-xs">
                            Role with elevated permissions in the organization.
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-['Courier_New',monospace]">
                        <CopyText value="org:admin" showTooltip />
                      </TableCell>
                      <TableCell>
                        <SimpleBadge variant="secondary" className="mr-2">
                          Mange Organization
                        </SimpleBadge>
                        <SimpleBadge variant="secondary" className="mr-2">
                          Delete Organization
                        </SimpleBadge>
                        <span className="text-muted-foreground text-xs text-nowrap">
                          6+ more
                        </span>
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
                              <LuTicketCheck /> Set as default role set
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <LuNotebookPen />
                              Edit role set
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem variant="destructive">
                              <LuTrash2 /> Delete role set
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <div className="font-medium">Member</div>
                          <div className="text-muted-foreground text-xs">
                            Role with non-privileged permissions in the
                            organization.
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-['Courier_New',monospace]">
                        <CopyText value="org:member" />
                      </TableCell>
                      <TableCell>
                        <SimpleBadge variant="secondary" className="mr-2">
                          Read members
                        </SimpleBadge>
                        <SimpleBadge variant="secondary" className="mr-2">
                          Read billing
                        </SimpleBadge>
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
                              <LuTicketCheck /> Set as default role set
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <LuNotebookPen />
                              Edit role set
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem variant="destructive">
                              <LuTrash2 /> Delete role set
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <div className="font-medium">name</div>
                          <div className="text-muted-foreground text-xs">
                            description or role
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-['Courier_New',monospace]">
                        <CopyText value="org:name" />
                      </TableCell>
                      <TableCell>
                        <SimpleBadge variant="secondary" className="mr-2">
                          name_1
                        </SimpleBadge>
                        <SimpleBadge variant="secondary">name</SimpleBadge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild className="group">
                            <RowActionButton />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            sideOffset={8}
                            className="w-64"
                            align="end"
                            onCloseAutoFocus={(e) => e.preventDefault()}
                          >
                            <DropdownMenuItem>
                              <LuTicketCheck /> Set as default role set
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <LuNotebookPen />
                              Edit role set
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem variant="destructive">
                              <LuTrash2 /> Delete role set
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableWrapper>
            </MainContent>
          </TabContent>
        </Tabs>
      </PageMain>
    </>
  );
}
