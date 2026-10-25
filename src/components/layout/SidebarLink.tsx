import { NavLink } from "react-router"
import type { NavLinkItem } from "@/components/layout/nav"
import { cn } from "@/lib/utils"
import { useUiStore } from "@/store/ui"

export function SidebarLink({ item, nested, muted }: { item: NavLinkItem; nested?: boolean; muted?: boolean }) {
  const compact = useUiStore((s) => s.compactSidebar)
  const Icon = item.icon
  return (
    <NavLink
      to={item.to}
      end
      title={item.label}
      className={({ isActive }) =>
        cn(
          "group flex items-center gap-3 rounded-corner px-3 text-[15px] hover:bg-muted",
          nested ? "h-9.5 text-sm" : "h-10.5",
          nested && !compact && "pl-11",
          muted && "h-9.5 text-sm text-muted-foreground",
          isActive && !muted && "bg-accent font-bold",
        )
      }
    >
      {({ isActive }) => (
        <>
          <Icon className={cn("size-4.5 shrink-0", isActive && !muted ? "text-primary" : "text-muted-foreground")} />
          {!compact && <span className="flex-1 whitespace-nowrap">{item.label}</span>}
        </>
      )}
    </NavLink>
  )
}
