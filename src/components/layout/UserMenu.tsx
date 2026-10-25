import { useNavigate } from "react-router"
import { UserAvatar } from "@/components/common/UserAvatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useSignOut } from "@/hooks/queries"
import { useAuthStore } from "@/store/auth"

export function UserMenu() {
  const navigate = useNavigate()
  const name = useAuthStore((s) => s.user?.name) ?? ""
  const signOut = useSignOut()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex h-10 cursor-pointer items-center gap-2.5 pr-1.5 pl-1 outline-none">
        <UserAvatar name={name} />
        <span className="text-sm font-bold whitespace-nowrap">{name}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-50 p-1.5">
        <DropdownMenuItem className="h-9.5 px-3" onSelect={() => navigate("/settings")}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="h-9.5 px-3" onSelect={() => navigate("/settings")}>
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="h-9.5 px-3" disabled={signOut.isPending} onSelect={() => signOut.mutate()}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
