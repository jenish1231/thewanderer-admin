import { ProgressBar } from "@/components/common/ProgressBar"
import { Card, CardTitle } from "@/components/ui/card"
import { useGuides } from "@/hooks/queries"
import { money } from "@/lib/format"

export function TopGuidesCard() {
  const { data = [] } = useGuides()
  const top = data
    .map((g) => ({ name: g.name, revenue: g.price * g.sold }))
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 5)
  return (
    <Card className="gap-4.5 p-6">
      <CardTitle>Top guides</CardTitle>
      {top.map((g) => (
        <div key={g.name} className="flex flex-col gap-1.5">
          <div className="flex justify-between gap-2 text-sm">
            <span>{g.name}</span>
            <span className="font-bold">{money(g.revenue)}</span>
          </div>
          <ProgressBar value={(g.revenue / top[0].revenue) * 100} />
        </div>
      ))}
    </Card>
  )
}
