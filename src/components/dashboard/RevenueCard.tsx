import { AreaChart } from "@/components/common/AreaChart"
import { buildChart } from "@/lib/chart"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRevenue } from "@/hooks/queries"

export function RevenueCard() {
  const { data } = useRevenue("30D")
  if (!data) return null
  return (
    <Card className="col-span-2 min-w-0 gap-5 p-6 max-[720px]:col-span-1">
      <CardHeader className="px-0">
        <CardTitle>Revenue</CardTitle>
        <CardDescription>
          {data.caption} · {buildChart(data.points).total}
        </CardDescription>
      </CardHeader>
      <AreaChart points={data.points} xLabels={data.xLabels} />
    </Card>
  )
}
