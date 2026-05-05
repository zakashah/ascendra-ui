import { ShowcaseNav } from '@/components/showcase/showcase-nav';

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background flex min-h-screen">
      <ShowcaseNav />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
