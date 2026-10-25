import {
  BarChart3,
  BookMarked,
  Backpack,
  KeyRound,
  LayoutDashboard,
  LogIn,
  PenLine,
  Settings,
  ShieldCheck,
  ShoppingBag,
  UserPlus,
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

// ponytail: design exposes the auth screens in the sidebar for previewing; drop once real auth exists.
export const AUTH_NAV: NavLinkItem[] = [
  { to: "/signin", label: "Sign in", icon: LogIn },
  { to: "/register", label: "Create account", icon: UserPlus },
  { to: "/forgot-password", label: "Forgot password", icon: KeyRound },
  { to: "/two-factor", label: "Two-step verification", icon: ShieldCheck },
]
