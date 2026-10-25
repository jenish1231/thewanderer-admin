import { cn } from "@/lib/utils"

export function CoverPlaceholder({ className, label }: { className?: string; label?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-[repeating-linear-gradient(45deg,var(--muted)_0_8px,var(--background)_8px_16px)]",
        className,
      )}
    >
      {label && <span className="font-mono text-xs text-muted-foreground">{label}</span>}
    </div>
  )
}
