import { CoverPlaceholder } from "@/components/common/CoverPlaceholder"
import { ProgressBar } from "@/components/common/ProgressBar"
import { StatusBadge } from "@/components/common/StatusBadge"
import { Card } from "@/components/ui/card"
import { money } from "@/lib/format"
import type { Guide } from "@/lib/types"

export function GuideCard({ guide, maxSold }: { guide: Guide; maxSold: number }) {
  return (
    <Card className="gap-0 py-0">
      <CoverPlaceholder className="aspect-4/3 border-b" label="guide cover" />
      <div className="flex flex-col gap-3 px-4.5 pt-4 pb-4.5">
        <div className="flex items-start justify-between gap-2">
          <div className="flex min-w-0 flex-col gap-0.5">
            <div className="text-[15px] font-bold">{guide.name}</div>
            <div className="text-[13px] text-muted-foreground">by {guide.creator}</div>
          </div>
          <div className="text-[17px] font-black">{money(guide.price)}</div>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-[13px]">
            <span className="text-muted-foreground">
              {guide.region} · {guide.sold} sold
            </span>
            <StatusBadge status={guide.status} className="px-2 py-0.5 text-[11px]" />
          </div>
          <ProgressBar value={maxSold ? (guide.sold / maxSold) * 100 : 0} className="h-1.5" barClassName="rounded-none" />
        </div>
      </div>
    </Card>
  )
}
