"use client";

export default function Table3Page() {
  return (
    <div className="p-20">
      <section className="group bg-muted flex flex-col rounded-xl py-1">
        <header data-slot="main-section-header">
          <div className="p-2">table column header</div>
        </header>
        <div className="-m-2 overflow-hidden mask-[linear-gradient(to_bottom,black,black_calc(100%-8px),transparent)] p-2 transition-all duration-300">
          <div className="bg-background mx-1 rounded-lg ring-1 ring-(--color-umbra)/4 dark:ring-black/20 shadow-[0_1px_2px_0_rgba(25,28,33,0.06),0_0_2px_0_rgba(0,0,0,0.08)] dark:shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.01),0_1px_3px_0_rgba(0,0,0,0.4),0_0_3px_0_rgba(0,0,0,0.2)]">
            <div className="p-2">table rows</div>
          </div>
        </div>
      </section>
    </div>
  );
}
