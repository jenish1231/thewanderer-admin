import { BrandMark, BrandName } from "@/components/common/BrandMark"
import { SidebarGroup } from "@/components/layout/SidebarGroup"
import { SidebarLink } from "@/components/layout/SidebarLink"
import { SidebarSection } from "@/components/layout/SidebarSection"
import { ADMIN_NAV, MAIN_NAV } from "@/components/layout/nav"
import { cn } from "@/lib/utils"
import { useUiStore } from "@/store/ui"

export function Sidebar() {
  const compact = useUiStore((s) => s.compactSidebar)
  return (
    <aside
      className={cn(
        "sticky top-0 flex h-screen shrink-0 flex-col overflow-y-auto border-r bg-card transition-[width]",
        compact ? "w-18" : "w-64",
      )}
    >
      <div className="flex h-18 items-center gap-2.5 border-b px-5">
        <BrandMark />
        {!compact && <BrandName className="text-[17px]" />}
      </div>
      <nav className="flex flex-col gap-0.5 px-3 py-4">
        <SidebarSection title="Main" first>
          {MAIN_NAV.map((item) => (item.children ? <SidebarGroup key={item.to} item={item} /> : <SidebarLink key={item.to} item={item} />))}
        </SidebarSection>
        <SidebarSection title="Admin">
          {ADMIN_NAV.map((item) => (
            <SidebarLink key={item.to} item={item} />
          ))}
        </SidebarSection>
      </nav>
    </aside>
  )
}
