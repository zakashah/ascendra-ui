const rows = [
  { plan: "Free", seats: "–" },
  { plan: "nam", seats: "–" },
];

export default function Table2Page() {
  return (
    <div className="p-10">
      {/* Outer muted shell — same gray-50/dark:gray-1500 feel as table1 */}
      <div data-slot="table-card" className="bg-muted rounded-2xl p-1">
        {/*
          Card: overflow-hidden + border-radius replaces the ::before/-z-10
          trick. The browser clips the table corners for free, no z-index
          gymnastics needed — safe on iOS Safari.
        */}
        <div className="overflow-hidden rounded-xl bg-background ring-1 ring-black/[0.04] dark:ring-black/20 shadow-[0_1px_2px_0_rgba(25,28,33,0.06),0_0_2px_0_rgba(0,0,0,0.08)] dark:shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.01),0_1px_3px_0_rgba(0,0,0,0.4),0_0_3px_0_rgba(0,0,0,0.2)]">
          <div className="overflow-x-auto">
            <table
              data-slot="table"
              className="w-full border-separate border-spacing-0 whitespace-nowrap"
            >
              <thead
                data-slot="table-header"
                className="text-xs text-muted-foreground text-left"
              >
                <tr>
                  <th
                    data-slot="table-head"
                    className="h-10 px-5 first:pl-6 align-middle font-normal border-b border-border"
                  >
                    Plan
                  </th>
                  <th
                    data-slot="table-head"
                    className="h-10 px-5 last:pr-6 align-middle font-normal border-b border-border"
                  >
                    Seats
                  </th>
                </tr>
              </thead>
              <tbody
                data-slot="table-body"
                className="[&>tr:not(:last-child)>td]:border-b [&>tr:not(:last-child)>td]:border-border"
              >
                {rows.map(({ plan, seats }) => (
                  <tr
                    key={plan}
                    data-slot="table-row"
                    className="transition-colors hover:bg-gray-700/[0.04] dark:hover:bg-gray-700/[0.07]"
                  >
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 first:pl-6"
                    >
                      <div className="flex flex-col gap-1">
                        <span>{plan}</span>
                      </div>
                    </td>
                    <td
                      data-slot="table-cell"
                      className="px-5 py-4 last:pr-6 text-muted-foreground"
                    >
                      <span className="block">{seats}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
