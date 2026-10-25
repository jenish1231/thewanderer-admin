import { useState } from "react"
import { AreaChart } from "@/components/common/AreaChart"
import { buildChart } from "@/lib/chart"
import { RangeToggle } from "@/components/reports/RangeToggle"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { useRevenue } from "@/hooks/queries"
import type { Range } from "@/lib/types"

export function RevenueTrendsCard() {
  const [range, setRange] = useState<Range>("30D")
  const { data } = useRevenue(range)
  return (
    <Card className="col-span-2 min-w-0 gap-5 p-6 max-[720px]:col-span-1">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <CardTitle>Revenue trends</CardTitle>
          {data && (
            <CardDescription>
              {data.caption} · {buildChart(data.points).total}
            </CardDescription>
          )}
        </div>
        <RangeToggle value={range} onChange={setRange} />
      </div>
      {data && <AreaChart points={data.points} xLabels={data.xLabels} height={260} />}
    </Card>
  )
}
