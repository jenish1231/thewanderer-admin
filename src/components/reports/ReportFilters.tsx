import { SelectField } from "@/components/common/SelectField"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ReportFilters() {
  return (
    <Card className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] items-end gap-4 px-6 py-5">
      <SelectField id="range" label="Date range" options={["Last 30 days", "Last 7 days", "Last 90 days", "Last year", "Custom range"]} />
      <SelectField
        id="type"
        label="Report type"
        options={["Business overview", "Sales analytics", "Inventory report", "Customer insights", "Financial summary"]}
      />
      <SelectField id="format" label="Format" options={["PDF report", "Excel spreadsheet", "CSV data", "JSON data"]} />
      <Button variant="ink">Apply filters</Button>
    </Card>
  )
}
