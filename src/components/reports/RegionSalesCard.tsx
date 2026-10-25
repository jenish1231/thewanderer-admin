import { ProgressBar } from "@/components/common/ProgressBar"
import { Card, CardTitle } from "@/components/ui/card"
import { useAnalytics } from "@/hooks/queries"

export function RegionSalesCard() {
  const { data } = useAnalytics()
  const regions = data?.regions ?? []
  const max = Math.max(0, ...regions.map((r) => r.pct))
  return (
    <Card className="gap-4.5 p-6">
      <CardTitle>Sales by region</CardTitle>
      {regions.map((r) => (
        <div key={r.name} className="grid grid-cols-[120px_1fr_48px] items-center gap-3 text-sm">
          <span>{r.name}</span>
          <ProgressBar value={(r.pct / max) * 100} />
          <span className="text-right font-bold">{r.pct}%</span>
        </div>
      ))}
    </Card>
  )
}
