import { DashboardComingSoon } from "@/components/dashboards/dashboard-coming-soon";
import { dashboardsConfig } from "@/lib/dashboards-config";

export default function DevopsPage() {
  const dashboard = dashboardsConfig.find((d) => d.slug === "devops")!;
  return <DashboardComingSoon dashboard={dashboard} />;
}
