import { CoverPlaceholder } from "@/components/common/CoverPlaceholder"
import { Card, CardTitle } from "@/components/ui/card"
import { useGuides } from "@/hooks/queries"
import { money } from "@/lib/format"

export function BestSellersCard() {
  const { data = [] } = useGuides()
  const top = [...data].sort((a, b) => b.sold - a.sold).slice(0, 5)
  return (
    <Card className="gap-3.5 p-6">
      <CardTitle>Best sellers</CardTitle>
      {top.map((g) => (
        <div key={g.sku} className="flex items-center gap-3 py-1.5">
          <CoverPlaceholder className="size-11 shrink-0 rounded-corner border" />
          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            <div className="truncate text-sm font-bold">{g.name}</div>
            <div className="text-[13px] text-muted-foreground">{g.sold} sold</div>
          </div>
          <div className="text-sm font-bold">{money(g.price)}</div>
        </div>
      ))}
    </Card>
  )
}
