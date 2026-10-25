import { UserAvatar } from "@/components/common/UserAvatar"
import type { User } from "@/lib/types"

export function UserCell({ user, tone }: { user: User; tone: number }) {
  return (
    <div className="flex items-center gap-3">
      <UserAvatar name={user.name} tone={tone} />
      <div className="flex flex-col gap-0.5">
        <span className="font-bold">{user.name}</span>
        <span className="text-[13px] text-muted-foreground">{user.email}</span>
      </div>
    </div>
  )
}
