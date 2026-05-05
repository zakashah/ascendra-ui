import { ReactNode } from 'react';
import { BlocksNav } from './_components/blocks-nav';

export default function BlocksLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
          <span className="text-sm font-semibold">Layout Blocks</span>
          <span className="text-xs text-muted-foreground">Developer Reference</span>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 flex gap-12 py-10">
        <aside className="w-44 shrink-0 pt-1">
          <BlocksNav />
        </aside>
        <div className="flex-1 min-w-0">
          {children}
        </div>
      </div>
    </div>
  );
}
