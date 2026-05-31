import { DashboardComingSoon } from "@/components/dashboards/dashboard-coming-soon";
import { dashboardsConfig } from "@/lib/dashboards-config";

export default function SupplyChainPage() {
  const dashboard = dashboardsConfig.find((d) => d.slug === "supply-chain")!;
  return <DashboardComingSoon dashboard={dashboard} />;
}
