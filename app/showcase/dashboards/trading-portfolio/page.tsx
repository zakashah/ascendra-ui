import { DashboardComingSoon } from "@/components/dashboards/dashboard-coming-soon";
import { dashboardsConfig } from "@/lib/dashboards-config";

export default function TradingPortfolioPage() {
  const dashboard = dashboardsConfig.find((d) => d.slug === "trading-portfolio")!;
  return <DashboardComingSoon dashboard={dashboard} />;
}
