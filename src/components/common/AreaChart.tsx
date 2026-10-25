import { buildChart, H, W } from "@/lib/chart"

export function AreaChart({ points, xLabels, height = 240 }: { points: number[]; xLabels: string[]; height?: number }) {
  const c = buildChart(points)
  return (
    <div className="flex gap-3" style={{ height }}>
      <div className="flex flex-col justify-between pb-5.5 text-xs text-muted-foreground">
        {c.ticks.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="block w-full flex-1 border-b border-input">
          <path d={c.area} className="fill-primary/10" />
          <path d={c.line} fill="none" className="stroke-primary" strokeWidth={2.5} vectorEffect="non-scaling-stroke" />
        </svg>
        <div className="flex justify-between text-xs text-muted-foreground">
          {xLabels.map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
