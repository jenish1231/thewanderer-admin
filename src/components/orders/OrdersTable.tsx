import { DataTable } from "@/components/common/DataTable"
import { StatusBadge } from "@/components/common/StatusBadge"
import { money } from "@/lib/format"
import type { Order } from "@/lib/types"

export function OrdersTable({ orders }: { orders: Order[] }) {
  return (
    <div className="overflow-x-auto">
      <DataTable
        minWidth={820}
        rows={orders}
        rowKey={(o) => o.id}
        columns={[
          { header: "Order", cell: (o) => o.id, className: "font-bold" },
          {
            header: "Customer",
            cell: (o) => (
              <div className="flex flex-col gap-0.5">
                <span>{o.customer}</span>
                <span className="text-[13px] text-muted-foreground">{o.city}</span>
              </div>
            ),
          },
          { header: "Date", cell: (o) => o.date, className: "text-muted-foreground" },
          { header: "Items", cell: (o) => o.items },
          { header: "Payment", cell: (o) => o.payment, className: "text-muted-foreground" },
          { header: "Total", cell: (o) => money(o.total), className: "text-right font-bold" },
          { header: "Status", cell: (o) => <StatusBadge status={o.status} /> },
        ]}
      />
    </div>
  )
}
