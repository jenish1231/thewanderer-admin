import { GuideCard } from "@/components/guides/GuideCard"
import type { Guide } from "@/lib/types"

export function GuideGrid({ guides }: { guides: Guide[] }) {
  const maxSold = Math.max(0, ...guides.map((g) => g.sold))
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
      {guides.map((g) => (
        <GuideCard key={g.sku} guide={g} maxSold={maxSold} />
      ))}
    </div>
  )
}
