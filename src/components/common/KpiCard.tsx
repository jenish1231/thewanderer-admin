import { Card } from "@/components/ui/card"
import type { Kpi } from "@/lib/types"
import { cn } from "@/lib/utils"

export function KpiCard({ kpi, period = "vs last month" }: { kpi: Kpi; period?: string }) {
  const down = kpi.delta.startsWith("−")
  return (
    <Card className="gap-2.5 p-5.5">
      <div className="text-sm text-muted-foreground">{kpi.label}</div>
      <div className="text-3xl font-black tracking-tight">{kpi.value}</div>
      <div className="flex items-center gap-2 text-[13px]">
        <span className={cn("font-bold", down ? "text-destructive" : "text-green-600")}>{kpi.delta}</span>
        <span className="text-muted-foreground">{period}</span>
      </div>
    </Card>
  )
}

export function KpiGrid({ kpis, period }: { kpis: Kpi[]; period?: string }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
      {kpis.map((k) => (
        <KpiCard key={k.label} kpi={k} period={period} />
      ))}
    </div>
  )
}
