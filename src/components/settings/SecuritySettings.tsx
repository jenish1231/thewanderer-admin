import { useNavigate } from "react-router"
import { FormField } from "@/components/common/FormField"
import { FieldGrid, SettingsCard } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function SecuritySettings() {
  const navigate = useNavigate()
  return (
    <div className="flex max-w-215 flex-col gap-4">
      <SettingsCard className="gap-4">
        <CardTitle>Change password</CardTitle>
        <FieldGrid min={220}>
          <FormField label="Current password" htmlFor="current-password">
            <Input id="current-password" type="password" autoComplete="current-password" />
          </FormField>
          <FormField label="New password" htmlFor="next-password">
            <Input id="next-password" type="password" autoComplete="new-password" />
          </FormField>
        </FieldGrid>
        <div className="flex justify-end">
          <Button>Update password</Button>
        </div>
      </SettingsCard>
      <SettingsCard className="flex-row flex-wrap items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <CardTitle>Two-step verification</CardTitle>
          <div className="text-sm text-muted-foreground">Enabled with an authenticator app since Mar 2026.</div>
        </div>
        <Button variant="outline" className="h-9.5" onClick={() => navigate("/two-factor")}>
          Manage
        </Button>
      </SettingsCard>
    </div>
  )
}
