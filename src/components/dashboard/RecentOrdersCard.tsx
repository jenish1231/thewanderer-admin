import { Link } from "react-router"
import { DataTable } from "@/components/common/DataTable"
import { StatusBadge } from "@/components/common/StatusBadge"
import { Card, CardTitle } from "@/components/ui/card"
import { useOrders } from "@/hooks/queries"
import { money } from "@/lib/format"

export function RecentOrdersCard() {
  const { data = [] } = useOrders()
  return (
    <Card className="col-span-2 min-w-0 gap-4 p-6 max-[720px]:col-span-1">
      <div className="flex items-center justify-between">
        <CardTitle>Recent orders</CardTitle>
        <Link to="/orders" className="text-sm font-bold text-primary hover:text-foreground hover:underline">
          View all
        </Link>
      </div>
      <DataTable
        dense
        minWidth={560}
        rows={data.slice(0, 5)}
        rowKey={(o) => o.id}
        columns={[
          { header: "Order", cell: (o) => o.id, className: "font-bold" },
          { header: "Customer", cell: (o) => o.customer },
          { header: "Date", cell: (o) => o.date, className: "text-muted-foreground" },
          { header: "Total", cell: (o) => money(o.total), className: "text-right font-bold" },
          { header: "Status", cell: (o) => <StatusBadge status={o.status} /> },
        ]}
      />
    </Card>
  )
}
