import { ShareList } from "@/components/common/ShareList"
import { Card, CardTitle } from "@/components/ui/card"
import { useDashboard } from "@/hooks/queries"

export function TrafficSourcesCard() {
  const { data } = useDashboard()
  return (
    <Card className="gap-4.5 p-6">
      <CardTitle>Traffic sources</CardTitle>
      {data && <ShareList items={data.sources} highlightFirst />}
    </Card>
  )
}
