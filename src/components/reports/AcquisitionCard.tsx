import { Card, CardTitle } from "@/components/ui/card"
import { useAnalytics } from "@/hooks/queries"

const SCALE = 320 // max stacked value; bars are % of this

function Legend() {
  return (
    <div className="flex gap-3.5 text-[13px] text-muted-foreground">
      <span className="flex items-center gap-1.5">
        <span className="size-2.5 bg-chart-1" />
        Organic
      </span>
      <span className="flex items-center gap-1.5">
        <span className="size-2.5 bg-chart-2" />
        Paid
      </span>
    </div>
  )
}

export function AcquisitionCard() {
  const { data } = useAnalytics()
  const weeks = data?.acquisition ?? []
  return (
    <Card className="gap-4.5 p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <CardTitle>Customer acquisition</CardTitle>
        <Legend />
      </div>
      <div className="flex h-50 items-end gap-2.5 border-b border-input">
        {weeks.map((w) => (
          <div key={w.week} title={`${w.week}: ${w.organic} organic, ${w.paid} paid`} className="flex h-full flex-1 flex-col justify-end gap-0.5">
            <div className="rounded-tr-sm bg-chart-2" style={{ height: `${(w.paid / SCALE) * 100}%` }} />
            <div className="bg-chart-1" style={{ height: `${(w.organic / SCALE) * 100}%` }} />
          </div>
        ))}
      </div>
      <div className="flex gap-2.5 text-xs text-muted-foreground">
        {weeks.map((w) => (
          <span key={w.week} className="flex-1 text-center">
            {w.week}
          </span>
        ))}
      </div>
    </Card>
  )
}
