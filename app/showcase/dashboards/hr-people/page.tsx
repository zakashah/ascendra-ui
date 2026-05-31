import { DashboardComingSoon } from "@/components/dashboards/dashboard-coming-soon";
import { dashboardsConfig } from "@/lib/dashboards-config";

export default function HrPeoplePage() {
  const dashboard = dashboardsConfig.find((d) => d.slug === "hr-people")!;
  return <DashboardComingSoon dashboard={dashboard} />;
}
