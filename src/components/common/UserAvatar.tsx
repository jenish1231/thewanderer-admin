import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { initials } from "@/lib/format"
import { cn } from "@/lib/utils"

const TONES = ["bg-ink text-white", "bg-accent text-foreground", "bg-muted text-foreground"]

export function UserAvatar({ name, tone = 0, className }: { name: string; tone?: number; className?: string }) {
  return (
    <Avatar className={cn("size-9", className)}>
      <AvatarFallback className={cn("text-xs font-bold", TONES[tone % TONES.length])}>{initials(name)}</AvatarFallback>
    </Avatar>
  )
}
