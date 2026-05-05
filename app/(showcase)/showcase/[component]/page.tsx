import { notFound } from 'next/navigation';
import { registry } from '@/lib/showcase/registry';
import { navConfig } from '@/lib/showcase/nav-config';
import { ButtonDocContent } from '@/components/showcase/previews/button-preview';
import { SimpleBadgeDocContent } from '@/components/showcase/previews/simple-badge-preview';
import { BubbleBadgeDocContent } from '@/components/showcase/previews/bubble-badge-preview';
import { StatusDotDocContent } from '@/components/showcase/previews/status-dot-preview';
import { SimpleAlertDocContent } from '@/components/showcase/previews/simple-alert-preview';
import { ProBadgeDocContent } from '@/components/showcase/previews/pro-badge-preview';
import { InputDocContent } from '@/components/showcase/previews/input-preview';
import { InputGroupDocContent } from '@/components/showcase/previews/input-group-preview';
import { CheckboxDocContent } from '@/components/showcase/previews/checkbox-preview';
import { RadioGroupDocContent } from '@/components/showcase/previews/radio-group-preview';
import { SwitchDocContent } from '@/components/showcase/previews/switch-preview';
import { SelectDocContent } from '@/components/showcase/previews/select-preview';
import { AnchorDocContent } from '@/components/showcase/previews/anchor-preview';
import { NavLinkDocContent } from '@/components/showcase/previews/nav-link-preview';
import { HeaderDocContent } from '@/components/showcase/previews/header-preview';
import { DialogDocContent } from '@/components/showcase/previews/dialog-preview';
import { SheetDocContent } from '@/components/showcase/previews/sheet-preview';
import { DropdownMenuDocContent } from '@/components/showcase/previews/dropdown-menu-preview';
import { TableDocContent } from '@/components/showcase/previews/table-preview';
import { EmptyDocContent } from '@/components/showcase/previews/empty-preview';
import { MainSectionDocContent } from '@/components/showcase/previews/main-section-preview';
import { PageHeaderDocContent } from '@/components/showcase/previews/page-header-preview';
import { PageBarDocContent } from '@/components/showcase/previews/page-bar-preview';
import { AsideContentDocContent } from '@/components/showcase/previews/aside-content-preview';
import { TabsDocContent } from '@/components/showcase/previews/tabs-preview';
import { SidebarMenuDocContent } from '@/components/showcase/previews/sidebar-menu-preview';
import { CopyTextDocContent } from '@/components/showcase/previews/copy-text-preview';
import { NameAvatarDocContent } from '@/components/showcase/previews/name-avatar-preview';
import { ThemeToggleDocContent } from '@/components/showcase/previews/theme-toggle-preview';
import { PaginationButtonDocContent } from '@/components/showcase/previews/pagination-button-preview';
import { RowActionButtonDocContent } from '@/components/showcase/previews/row-action-button-preview';

type DocComponent = React.ComponentType;

const docComponents: Partial<Record<string, DocComponent>> = {
  button: ButtonDocContent,
  'simple-badge': SimpleBadgeDocContent,
  'bubble-badge': BubbleBadgeDocContent,
  'status-dot': StatusDotDocContent,
  'simple-alert': SimpleAlertDocContent,
  'pro-badge': ProBadgeDocContent,
  input: InputDocContent,
  'input-group': InputGroupDocContent,
  checkbox: CheckboxDocContent,
  'radio-group': RadioGroupDocContent,
  switch: SwitchDocContent,
  select: SelectDocContent,
  anchor: AnchorDocContent,
  'nav-link': NavLinkDocContent,
  header: HeaderDocContent,
  dialog: DialogDocContent,
  sheet: SheetDocContent,
  'dropdown-menu': DropdownMenuDocContent,
  table: TableDocContent,
  empty: EmptyDocContent,
  'main-section': MainSectionDocContent,
  'page-header': PageHeaderDocContent,
  'page-bar': PageBarDocContent,
  'aside-content': AsideContentDocContent,
  tabs: TabsDocContent,
  'sidebar-menu': SidebarMenuDocContent,
  'copy-text': CopyTextDocContent,
  'name-avatar': NameAvatarDocContent,
  'theme-toggle': ThemeToggleDocContent,
  'pagination-button': PaginationButtonDocContent,
  'row-action-button': RowActionButtonDocContent,
};

export async function generateStaticParams() {
  return navConfig
    .flatMap((c) => c.items)
    .filter((item) => item.slug !== '')
    .map((item) => ({ component: item.slug }));
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ component: string }>;
}) {
  const { component } = await params;
  const meta = registry[component];

  if (!meta) notFound();

  const DocContent = docComponents[component];

  return (
    <div className="mx-auto max-w-3xl px-8 py-12">
      {/* Component heading */}
      <div className="mb-8">
        <h1 className="text-foreground mb-1.5 text-2xl font-semibold tracking-tight">
          {meta.name}
        </h1>
        <p className="text-muted-foreground text-sm">{meta.description}</p>
      </div>

      {/* Doc content or coming-soon placeholder */}
      {DocContent ? (
        <DocContent />
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed py-16 text-center">
          <p className="text-foreground text-sm font-medium">
            Documentation coming soon
          </p>
          <p className="text-muted-foreground text-xs">
            Import from{' '}
            <code className="bg-muted rounded px-1.5 py-0.5 font-mono">
              {meta.importPath}
            </code>
          </p>
          <p className="text-muted-foreground/60 font-mono text-xs">
            {`import { ${meta.importNames.join(', ')} } from "${meta.importPath}"`}
          </p>
        </div>
      )}
    </div>
  );
}
