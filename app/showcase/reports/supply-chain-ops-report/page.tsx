import { ReportComingSoon } from "@/components/reports/report-coming-soon";
import { reportsConfig } from "@/lib/reports-config";

export default function Page() {
  const report = reportsConfig.find((r) => r.slug === "supply-chain-ops-report")!;
  return <ReportComingSoon report={report} />;
}
