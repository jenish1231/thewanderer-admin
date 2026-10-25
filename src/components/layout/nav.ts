import {
  BarChart3,
  BookMarked,
  Backpack,
  LayoutDashboard,
  PenLine,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Users,
  type LucideIcon,
} from "lucide-react"

export interface NavLinkItem {
  to: string
  label: string
  icon: LucideIcon
  children?: NavLinkItem[]
}

export const MAIN_NAV: NavLinkItem[] = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  {
    to: "/users",
    label: "Users",
    icon: Users,
    children: [
      { to: "/users/creators", label: "Creators", icon: PenLine },
      { to: "/users/travelers", label: "Travelers", icon: Backpack },
      { to: "/users/admins", label: "Admins", icon: ShieldCheck },
    ],
  },
  { to: "/guides", label: "Guides", icon: BookMarked },
  { to: "/orders", label: "Orders", icon: ShoppingBag },
  { to: "/reports", label: "Reports", icon: BarChart3 },
]

export const ADMIN_NAV: NavLinkItem[] = [{ to: "/settings", label: "Settings", icon: Settings }]
