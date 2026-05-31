import { DashboardComingSoon } from "@/components/dashboards/dashboard-coming-soon";
import { dashboardsConfig } from "@/lib/dashboards-config";

export default function HealthcarePage() {
  const dashboard = dashboardsConfig.find((d) => d.slug === "healthcare")!;
  return <DashboardComingSoon dashboard={dashboard} />;
}
