import { Link } from "react-router"
import { CardRow } from "@/components/common/CardRow"
import { KpiGrid } from "@/components/common/KpiCard"
import { PageHeader } from "@/components/common/PageHeader"
import { BestSellersCard } from "@/components/dashboard/BestSellersCard"
import { RecentOrdersCard } from "@/components/dashboard/RecentOrdersCard"
import { RevenueCard } from "@/components/dashboard/RevenueCard"
import { TrafficSourcesCard } from "@/components/dashboard/TrafficSourcesCard"
import { Button } from "@/components/ui/button"
import { useDashboard } from "@/hooks/queries"

export function DashboardPage() {
  const { data } = useDashboard()
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Good morning, Asha. Here's how the store is doing this month."
        actions={
          <>
            <Button variant="outline">Export</Button>
            <Button asChild>
              <Link to="/guides">New guide</Link>
            </Button>
          </>
        }
      />
      {data && <KpiGrid kpis={data.kpis} />}
      <CardRow>
        <RevenueCard />
        <TrafficSourcesCard />
      </CardRow>
      <CardRow>
        <RecentOrdersCard />
        <BestSellersCard />
      </CardRow>
    </>
  )
}
