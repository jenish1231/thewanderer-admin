import { DataTable } from "@/components/common/DataTable"
import { StatusBadge } from "@/components/common/StatusBadge"
import { Button } from "@/components/ui/button"
import { Card, CardTitle } from "@/components/ui/card"
import { useReports } from "@/hooks/queries"

export function RecentReportsTable() {
  const { data = [], refetch } = useReports()
  return (
    <Card className="gap-0 py-0">
      <div className="flex items-center justify-between border-b px-6 py-4.5">
        <CardTitle>Recent reports</CardTitle>
        <Button variant="outline" size="sm" className="font-bold" onClick={() => refetch()}>
          Refresh
        </Button>
      </div>
      <div className="overflow-x-auto">
        <DataTable
          rows={data}
          rowKey={(r) => r.name}
          columns={[
            { header: "Report name", cell: (r) => r.name, className: "font-bold" },
            { header: "Type", cell: (r) => r.type },
            { header: "Date range", cell: (r) => r.range, className: "text-muted-foreground" },
            { header: "Generated", cell: (r) => r.generated, className: "text-muted-foreground" },
            { header: "Status", cell: (r) => <StatusBadge status={r.status} /> },
            {
              header: "Actions",
              className: "text-right",
              cell: (r) => (
                <Button variant="outline" size="sm">
                  {r.action}
                </Button>
              ),
            },
          ]}
        />
      </div>
    </Card>
  )
}
