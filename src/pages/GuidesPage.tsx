import { useState } from "react"
import { FilterChips } from "@/components/common/FilterChips"
import { PageHeader } from "@/components/common/PageHeader"
import { GuideGrid } from "@/components/guides/GuideGrid"
import { Button } from "@/components/ui/button"
import { useGuides } from "@/hooks/queries"

export function GuidesPage() {
  const { data: guides = [] } = useGuides()
  const [region, setRegion] = useState("All")
  const regions = [...new Set(guides.map((g) => g.region))]

  return (
    <>
      <PageHeader
        title="Guides"
        description={`${guides.length} travel guides across ${regions.length} regions.`}
        actions={
          <>
            <Button variant="outline">Import</Button>
            <Button>New guide</Button>
          </>
        }
      />
      <FilterChips chips={["All", ...regions].map((value) => ({ value }))} value={region} onChange={setRegion} />
      <GuideGrid guides={guides.filter((g) => region === "All" || g.region === region)} />
    </>
  )
}
