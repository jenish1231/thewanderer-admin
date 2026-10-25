import type { ReactNode } from "react"

// Responsive row: one wide card (span 2) + one narrow card, collapsing on small screens.
export function CardRow({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-4">{children}</div>
}
