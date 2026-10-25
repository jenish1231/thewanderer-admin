import type { ReactNode } from "react"
import { useUiStore } from "@/store/ui"

export function SidebarSection({ title, first, children }: { title: string; first?: boolean; children: ReactNode }) {
  const compact = useUiStore((s) => s.compactSidebar)
  return (
    <>
      {!compact && (
        <div className={`px-3 pb-2 text-[11px] font-bold tracking-[0.08em] text-muted-foreground uppercase ${first ? "pt-2" : "pt-5"}`}>
          {title}
        </div>
      )}
      {children}
    </>
  )
}
