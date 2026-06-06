import { ReportComingSoon } from "@/components/reports/report-coming-soon";
import { reportsConfig } from "@/lib/reports-config";

export default function Page() {
  const report = reportsConfig.find((r) => r.slug === "esg-sustainability-report")!;
  return <ReportComingSoon report={report} />;
}
