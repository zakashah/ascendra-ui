import { DashboardComingSoon } from "@/components/dashboards/dashboard-coming-soon";
import { dashboardsConfig } from "@/lib/dashboards-config";

export default function RealEstatePage() {
  const dashboard = dashboardsConfig.find((d) => d.slug === "real-estate")!;
  return <DashboardComingSoon dashboard={dashboard} />;
}
