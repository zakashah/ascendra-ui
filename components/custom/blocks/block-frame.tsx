'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Check, Copy } from 'lucide-react';

interface BlockFrameProps {
  title: string;
  description: string;
  code: string;
  codeHtml: string;
  children: React.ReactNode;
}

export function BlockFrame({ title, description, code, codeHtml, children }: BlockFrameProps) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col rounded-xl border border-border overflow-hidden">
      <div className="flex items-start justify-between gap-4 bg-muted/40 px-5 py-3.5 border-b border-border">
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-medium">{title}</span>
          <span className="text-xs text-muted-foreground">{description}</span>
        </div>
        <div className="flex items-center gap-0.5 rounded-md bg-muted p-0.5 shrink-0">
          <button
            onClick={() => setTab('preview')}
            className={cn(
              'text-xs px-2.5 py-1 rounded-[0.3rem] transition-all',
              tab === 'preview'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            Preview
          </button>
          <button
            onClick={() => setTab('code')}
            className={cn(
              'text-xs px-2.5 py-1 rounded-[0.3rem] transition-all',
              tab === 'code'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            Code
          </button>
        </div>
      </div>

      {tab === 'preview' ? (
        <div className="bg-background p-6 min-h-20">{children}</div>
      ) : (
        <div className="relative">
          <div
            className="text-sm [&>pre]:p-5 [&>pre]:m-0 [&>pre]:overflow-auto [&>pre]:text-[0.8rem] [&>pre]:leading-6 max-h-[520px] overflow-auto"
            dangerouslySetInnerHTML={{ __html: codeHtml }}
          />
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
          >
            {copied ? (
              <>
                <Check className="size-3" />
                Copied
              </>
            ) : (
              <>
                <Copy className="size-3" />
                Copy
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
