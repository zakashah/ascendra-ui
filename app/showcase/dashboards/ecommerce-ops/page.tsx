import { DashboardComingSoon } from "@/components/dashboards/dashboard-coming-soon";
import { dashboardsConfig } from "@/lib/dashboards-config";

export default function EcommerceOpsPage() {
  const dashboard = dashboardsConfig.find((d) => d.slug === "ecommerce-ops")!;
  return <DashboardComingSoon dashboard={dashboard} />;
}
