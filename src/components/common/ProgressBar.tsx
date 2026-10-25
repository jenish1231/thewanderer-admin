import { cn } from "@/lib/utils"

export function ProgressBar({ value, className, barClassName }: { value: number; className?: string; barClassName?: string }) {
  return (
    <div className={cn("h-2 overflow-hidden rounded-full bg-muted", className)}>
      <div className={cn("h-full rounded-full bg-primary", barClassName)} style={{ width: `${value}%` }} />
    </div>
  )
}
