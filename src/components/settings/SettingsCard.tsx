import type { ReactNode } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function SettingsCard({ children, className }: { children: ReactNode; className?: string }) {
  return <Card className={cn("max-w-215 gap-6 p-7", className)}>{children}</Card>
}

export function FieldGrid({ children, min = 240 }: { children: ReactNode; min?: number }) {
  return (
    <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))` }}>
      {children}
    </div>
  )
}
