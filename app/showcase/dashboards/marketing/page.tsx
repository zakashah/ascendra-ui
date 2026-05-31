import { DashboardComingSoon } from "@/components/dashboards/dashboard-coming-soon";
import { dashboardsConfig } from "@/lib/dashboards-config";

export default function MarketingPage() {
  const dashboard = dashboardsConfig.find((d) => d.slug === "marketing")!;
  return <DashboardComingSoon dashboard={dashboard} />;
}
