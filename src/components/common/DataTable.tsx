import type { ReactNode } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"

export interface Column<T> {
  header: string
  cell: (row: T) => ReactNode
  className?: string
}

// Thin wrapper so every admin table shares the design's header + row styling.
export function DataTable<T>({
  columns,
  rows,
  rowKey,
  minWidth = 760,
  dense,
}: {
  columns: Column<T>[]
  rows: T[]
  rowKey: (row: T) => string
  minWidth?: number
  dense?: boolean
}) {
  const edge = dense ? "first:pl-2 last:pr-2" : "first:pl-6 last:pr-6"
  return (
    <Table style={{ minWidth }}>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          {columns.map((c) => (
            <TableHead
              key={c.header}
              className={cn("h-auto px-2 py-3 text-xs font-bold tracking-wider text-muted-foreground uppercase", edge, c.className)}
            >
              {c.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((r) => (
          <TableRow key={rowKey(r)} className="hover:bg-background">
            {columns.map((c) => (
              <TableCell key={c.header} className={cn("px-2 py-3.5", edge, c.className)}>
                {c.cell(r)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
