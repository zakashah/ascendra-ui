import { DashboardComingSoon } from "@/components/dashboards/dashboard-coming-soon";
import { dashboardsConfig } from "@/lib/dashboards-config";

export default function FinancialPnlPage() {
  const dashboard = dashboardsConfig.find((d) => d.slug === "financial-pnl")!;
  return <DashboardComingSoon dashboard={dashboard} />;
}
