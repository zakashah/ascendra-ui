import { ShowcaseNav } from '@/components/showcase-nav';

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background flex min-h-screen">
      <ShowcaseNav />
      <main className="flex-1 overflow-y-auto pt-10 lg:pt-0">{children}</main>
    </div>
  );
}
