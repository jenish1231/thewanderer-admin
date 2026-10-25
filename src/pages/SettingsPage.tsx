import { PageHeader } from "@/components/common/PageHeader"
import { NotificationPreferences } from "@/components/settings/NotificationPreferences"
import { ProfileForm } from "@/components/settings/ProfileForm"
import { SecuritySettings } from "@/components/settings/SecuritySettings"
import { StoreForm } from "@/components/settings/StoreForm"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const TABS = [
  { id: "profile", label: "Profile", panel: <ProfileForm /> },
  { id: "store", label: "Store", panel: <StoreForm /> },
  { id: "notifications", label: "Notifications", panel: <NotificationPreferences /> },
  { id: "security", label: "Security", panel: <SecuritySettings /> },
]

export function SettingsPage() {
  return (
    <>
      <PageHeader title="Settings" description="Manage your profile, store and notification preferences." />
      <Tabs defaultValue="profile" className="gap-6">
        <TabsList variant="line" className="w-full justify-start group-data-horizontal/tabs:h-12 gap-1 overflow-x-auto rounded-none border-b p-0">
          {TABS.map((t) => (
            <TabsTrigger key={t.id} value={t.id} className="h-full flex-none px-3.5 text-[15px] text-foreground">
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {TABS.map((t) => (
          <TabsContent key={t.id} value={t.id}>
            {t.panel}
          </TabsContent>
        ))}
      </Tabs>
    </>
  )
}
