import { Outlet } from "react-router"
import { Sidebar } from "@/components/layout/Sidebar"
import { Topbar } from "@/components/layout/Topbar"

export function AppLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        <main className="flex w-full max-w-360 flex-1 flex-col gap-6 p-8">
          <Outlet />
        </main>
        <footer className="flex flex-wrap justify-between gap-2 border-t px-8 py-5 text-[13px] text-muted-foreground">
          <span>© 2026 thewanderer admin</span>
          <span>v1.0</span>
        </footer>
      </div>
    </div>
  )
}
