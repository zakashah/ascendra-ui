"use client";

const columns = [
  { key: "invoice", label: "Invoice #" },
  { key: "client", label: "Client" },
  { key: "project", label: "Project" },
  { key: "date", label: "Date" },
  { key: "amount", label: "Amount" },
  { key: "status", label: "Status" },
  { key: "due", label: "Due Date" },
  { key: "category", label: "Category" },
];

const rows = [
  {
    invoice: "INV-001",
    client: "Ahmed Khan",
    project: "Dashboard Redesign",
    date: "2024-01-15",
    amount: "$4,200",
    status: "Paid",
    due: "2024-02-15",
    category: "Design",
  },
  {
    invoice: "INV-002",
    client: "Sara Lee",
    project: "Mobile App",
    date: "2024-01-18",
    amount: "$8,500",
    status: "Pending",
    due: "2024-02-18",
    category: "Development",
  },
  {
    invoice: "INV-003",
    client: "James Wu",
    project: "API Integration",
    date: "2024-01-22",
    amount: "$2,100",
    status: "Paid",
    due: "2024-02-22",
    category: "Development",
  },
  {
    invoice: "INV-004",
    client: "Mia Santos",
    project: "Branding Kit",
    date: "2024-01-25",
    amount: "$3,750",
    status: "Overdue",
    due: "2024-01-30",
    category: "Design",
  },
  {
    invoice: "INV-005",
    client: "Leo Novak",
    project: "CMS Build",
    date: "2024-01-28",
    amount: "$6,000",
    status: "Paid",
    due: "2024-02-28",
    category: "Development",
  },
  {
    invoice: "INV-006",
    client: "Fiona Bell",
    project: "E-commerce Store",
    date: "2024-02-01",
    amount: "$11,200",
    status: "Pending",
    due: "2024-03-01",
    category: "Development",
  },
  {
    invoice: "INV-007",
    client: "Omar Rashid",
    project: "Analytics Setup",
    date: "2024-02-05",
    amount: "$1,800",
    status: "Paid",
    due: "2024-03-05",
    category: "Consulting",
  },
  {
    invoice: "INV-008",
    client: "Nina Park",
    project: "SEO Audit",
    date: "2024-02-08",
    amount: "$950",
    status: "Paid",
    due: "2024-03-08",
    category: "Consulting",
  },
  {
    invoice: "INV-009",
    client: "Carlos Diaz",
    project: "Logo Refresh",
    date: "2024-02-10",
    amount: "$1,400",
    status: "Pending",
    due: "2024-03-10",
    category: "Design",
  },
  {
    invoice: "INV-010",
    client: "Yuki Tanaka",
    project: "Cloud Migration",
    date: "2024-02-14",
    amount: "$14,000",
    status: "Overdue",
    due: "2024-02-20",
    category: "Infrastructure",
  },
];

export default function Table3Page() {
  return (
    <div className="p-20">
      <section className="group bg-muted flex flex-col rounded-xl py-1">
        <div className="-m-2 overflow-hidden mask-[linear-gradient(to_bottom,black,black_calc(100%-8px),transparent)] p-2 transition-all duration-300">
          {/*
            Shadow/ring/rounded are on this <div>, not on <tbody>.
            overflow-hidden clips row hover backgrounds to the rounded corners.
            This pattern works reliably on iOS Safari (no ::before on table
            elements, no clip-path on <tr>).
          */}
          <div className="p-4">title</div>
          <div className="mx-1 overflow-hidden rounded-lg bg-background ring-1 ring-(--color-umbra)/4 dark:ring-black/20 shadow-[0_1px_2px_0_rgba(25,28,33,0.06),0_0_2px_0_rgba(0,0,0,0.08)] dark:shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.01),0_1px_3px_0_rgba(0,0,0,0.4),0_0_3px_0_rgba(0,0,0,0.2)]">
            <div className="max-h-80 overflow-auto">
              <table className="w-full border-separate border-spacing-0">
                <thead>
                  <tr className="bg-muted text-secondary-foreground text-left text-xs">
                    {columns.map((col) => (
                      <th
                        key={col.key}
                        className="py-3 px-5 first:pl-6 last:pr-6 font-medium whitespace-nowrap border-b border-border"
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="[&>tr:not(:last-child)>td]:border-b [&>tr:not(:last-child)>td]:border-border">
                  {rows.map((row) => (
                    <tr
                      key={row.invoice}
                      className="transition-colors hover:bg-gray-700/4"
                    >
                      {columns.map((col) => (
                        <td
                          key={col.key}
                          className="px-5 py-4 first:pl-6 last:pr-6 whitespace-nowrap"
                        >
                          {row[col.key as keyof typeof row]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
