import { Button } from "@/components/ui/button"

// ponytail: static pager — wire page state once the API paginates.
export function Pagination({ summary }: { summary: string }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 text-sm text-muted-foreground">
      <span>{summary}</span>
      <div className="flex gap-1.5">
        <Button variant="outline" size="sm">Prev</Button>
        <Button variant="ink" size="sm" className="min-w-8">1</Button>
        <Button variant="outline" size="sm" className="min-w-8">2</Button>
        <Button variant="outline" size="sm" className="min-w-8">3</Button>
        <Button variant="outline" size="sm">Next</Button>
      </div>
    </div>
  )
}
