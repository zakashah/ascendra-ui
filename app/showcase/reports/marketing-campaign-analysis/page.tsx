import { ReportComingSoon } from "@/components/reports/report-coming-soon";
import { reportsConfig } from "@/lib/reports-config";

export default function Page() {
  const report = reportsConfig.find((r) => r.slug === "marketing-campaign-analysis")!;
  return <ReportComingSoon report={report} />;
}
