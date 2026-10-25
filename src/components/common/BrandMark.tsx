import { cn } from "@/lib/utils"

export function BrandMark({ className }: { className?: string }) {
  return <div className={cn("size-7 shrink-0 rounded-corner bg-primary", className)} />
}

export function BrandName({ className, mutedClassName }: { className?: string; mutedClassName?: string }) {
  return (
    <div className={cn("font-black tracking-tight whitespace-nowrap", className)}>
      thewanderer<span className={cn("font-light text-muted-foreground", mutedClassName)}> admin</span>
    </div>
  )
}
