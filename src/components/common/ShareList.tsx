import { ProgressBar } from "@/components/common/ProgressBar"
import type { Share } from "@/lib/types"

// Bars are scaled relative to the largest share, as in the design.
export function ShareList({ items, highlightFirst }: { items: Share[]; highlightFirst?: boolean }) {
  const max = Math.max(...items.map((i) => i.pct))
  return items.map((s, i) => (
    <div key={s.name} className="flex flex-col gap-1.5">
      <div className="flex justify-between text-sm">
        <span>{s.name}</span>
        <span className="font-bold">{s.pct}%</span>
      </div>
      <ProgressBar value={(s.pct / max) * 100} barClassName={highlightFirst && i > 0 ? "bg-chart-2" : undefined} />
    </div>
  ))
}
