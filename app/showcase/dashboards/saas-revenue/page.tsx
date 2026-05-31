import { DashboardComingSoon } from "@/components/dashboards/dashboard-coming-soon";
import { dashboardsConfig } from "@/lib/dashboards-config";

export default function SaasRevenuePage() {
  const dashboard = dashboardsConfig.find((d) => d.slug === "saas-revenue")!;
  return <DashboardComingSoon dashboard={dashboard} />;
}
