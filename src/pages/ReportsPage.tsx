import { CardRow } from "@/components/common/CardRow"
import { KpiGrid } from "@/components/common/KpiCard"
import { PageHeader } from "@/components/common/PageHeader"
import { AcquisitionCard } from "@/components/reports/AcquisitionCard"
import { RecentReportsTable } from "@/components/reports/RecentReportsTable"
import { RegionSalesCard } from "@/components/reports/RegionSalesCard"
import { ReportFilters } from "@/components/reports/ReportFilters"
import { RevenueTrendsCard } from "@/components/reports/RevenueTrendsCard"
import { TopGuidesCard } from "@/components/reports/TopGuidesCard"
import { Button } from "@/components/ui/button"
import { useAnalytics } from "@/hooks/queries"

export function ReportsPage() {
  const { data } = useAnalytics()
  return (
    <>
      <PageHeader
        title="Reports & analytics"
        description="Generate insights and export business data."
        actions={
          <>
            <Button variant="outline">Schedule export</Button>
            <Button>New report</Button>
          </>
        }
      />
      <ReportFilters />
      {data && <KpiGrid kpis={data.kpis} period="vs last period" />}
      <CardRow>
        <RevenueTrendsCard />
        <TopGuidesCard />
      </CardRow>
      <CardRow>
        <AcquisitionCard />
        <RegionSalesCard />
      </CardRow>
      <RecentReportsTable />
    </>
  )
}
