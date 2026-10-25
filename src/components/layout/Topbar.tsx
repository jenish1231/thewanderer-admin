import { PanelLeft } from "lucide-react"
import { NotificationsMenu } from "@/components/layout/NotificationsMenu"
import { UserMenu } from "@/components/layout/UserMenu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useUiStore } from "@/store/ui"

export function Topbar() {
  const toggleSidebar = useUiStore((s) => s.toggleSidebar)
  return (
    <header className="sticky top-0 z-20 flex h-18 items-center gap-4 border-b bg-card px-7">
      <Button variant="ghost" size="icon" aria-label="Toggle sidebar" onClick={toggleSidebar}>
        <PanelLeft />
      </Button>
      <Input
        type="search"
        placeholder="Search orders, products, customers"
        className="h-10 max-w-105 min-w-0 flex-1 rounded-full border-border bg-background px-4 text-sm"
      />
      <div className="flex-1" />
      <NotificationsMenu />
      <UserMenu />
    </header>
  )
}
