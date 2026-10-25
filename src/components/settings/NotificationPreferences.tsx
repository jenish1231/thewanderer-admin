import { SettingsCard } from "@/components/settings/SettingsCard"
import { Switch } from "@/components/ui/switch"

const PREFS = [
  { id: "orders", label: "New orders", desc: "Email me when a customer places an order.", on: true },
  { id: "stock", label: "Low stock alerts", desc: "Notify when a product drops below 15 units.", on: true },
  { id: "reviews", label: "Product reviews", desc: "Get notified about new customer reviews.", on: true },
  { id: "digest", label: "Weekly digest", desc: "A Monday summary of sales and traffic.", on: false },
  { id: "marketing", label: "Product updates", desc: "News about new admin features.", on: false },
]

export function NotificationPreferences() {
  return (
    <SettingsCard className="gap-0 p-0">
      {PREFS.map((p) => (
        <label key={p.id} htmlFor={`pref-${p.id}`} className="flex cursor-pointer items-center justify-between gap-4 border-b px-7 py-5 last:border-b-0">
          <div className="flex flex-col gap-0.5">
            <div className="text-[15px] font-bold">{p.label}</div>
            <div className="text-sm text-muted-foreground">{p.desc}</div>
          </div>
          <Switch id={`pref-${p.id}`} defaultChecked={p.on} className="h-7 w-12 [&_[data-slot=switch-thumb]]:size-5.5" />
        </label>
      ))}
    </SettingsCard>
  )
}
