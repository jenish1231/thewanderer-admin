import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Order, OrderStatus } from "@/lib/types"

export type OrderFilter = "All" | OrderStatus
const FILTERS: OrderFilter[] = ["All", "Pending", "Processing", "Shipped", "Delivered", "Cancelled"]

export function OrderStatusTabs({ orders, value, onChange }: { orders: Order[]; value: OrderFilter; onChange: (f: OrderFilter) => void }) {
  return (
    <Tabs value={value} onValueChange={(v) => onChange(v as OrderFilter)}>
      <TabsList variant="line" className="w-full justify-start group-data-horizontal/tabs:h-13 gap-1 overflow-x-auto rounded-none border-b px-4 py-0">
        {FILTERS.map((f) => (
          <TabsTrigger key={f} value={f} className="h-full flex-none px-3 text-foreground">
            {f}
            <span className="rounded-full bg-muted px-1.5 py-px text-xs font-normal">
              {f === "All" ? orders.length : orders.filter((o) => o.status === f).length}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
