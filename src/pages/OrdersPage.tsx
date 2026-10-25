import { useState } from "react"
import { PageHeader } from "@/components/common/PageHeader"
import { type OrderFilter, OrderStatusTabs } from "@/components/orders/OrderStatusTabs"
import { OrdersTable } from "@/components/orders/OrdersTable"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useOrders } from "@/hooks/queries"

export function OrdersPage() {
  const { data: orders = [] } = useOrders()
  const [filter, setFilter] = useState<OrderFilter>("All")

  return (
    <>
      <PageHeader
        title="Orders"
        description="Track fulfilment from checkout to doorstep."
        actions={<Button variant="outline">Export orders</Button>}
      />
      <Card className="gap-0 py-0">
        <OrderStatusTabs orders={orders} value={filter} onChange={setFilter} />
        <OrdersTable orders={orders.filter((o) => filter === "All" || o.status === filter)} />
      </Card>
    </>
  )
}
