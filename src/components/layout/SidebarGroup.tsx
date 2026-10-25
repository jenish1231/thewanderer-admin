import { ChevronDown, ChevronUp } from "lucide-react"
import { useLocation } from "react-router"
import { SidebarLink } from "@/components/layout/SidebarLink"
import type { NavLinkItem } from "@/components/layout/nav"
import { cn } from "@/lib/utils"
import { useUiStore } from "@/store/ui"

export function SidebarGroup({ item }: { item: NavLinkItem }) {
  const { pathname } = useLocation()
  const { compactSidebar: compact, usersNavOpen: open, toggleUsersNav } = useUiStore()
  const active = pathname.startsWith(item.to)
  const Icon = item.icon
  return (
    <div className="flex flex-col gap-0.5">
      <button
        type="button"
        title={item.label}
        aria-expanded={open}
        onClick={toggleUsersNav}
        className={cn("flex h-10.5 cursor-pointer items-center gap-3 rounded-corner px-3 text-left text-[15px] hover:bg-muted", active && "font-bold")}
      >
        <Icon className={cn("size-4.5 shrink-0", active ? "text-primary" : "text-muted-foreground")} />
        {!compact && (
          <>
            <span className="flex-1 whitespace-nowrap">{item.label}</span>
            {open ? <ChevronUp className="size-3 text-muted-foreground" /> : <ChevronDown className="size-3 text-muted-foreground" />}
          </>
        )}
      </button>
      {open && item.children?.map((c) => <SidebarLink key={c.to} item={c} nested />)}
    </div>
  )
}
