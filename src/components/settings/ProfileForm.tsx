import { FormField } from "@/components/common/FormField"
import { SelectField } from "@/components/common/SelectField"
import { UserAvatar } from "@/components/common/UserAvatar"
import { FieldGrid, SettingsCard } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ProfileForm() {
  return (
    <SettingsCard>
      <div className="flex flex-wrap items-center gap-4.5">
        <UserAvatar name="Asha Gurung" className="size-18 text-[22px]" />
        <div className="flex flex-1 flex-col gap-1">
          <div className="text-lg font-bold">Asha Gurung</div>
          <div className="text-sm text-muted-foreground">Admin · Kathmandu</div>
        </div>
        <Button variant="outline" className="h-9.5">
          Change photo
        </Button>
      </div>
      <FieldGrid>
        <FormField label="Full name" htmlFor="full-name">
          <Input id="full-name" defaultValue="Asha Gurung" />
        </FormField>
        <FormField label="Email" htmlFor="profile-email">
          <Input id="profile-email" type="email" defaultValue="asha@thewanderer.co" />
        </FormField>
        <FormField label="Phone" htmlFor="phone">
          <Input id="phone" type="tel" defaultValue="+977 980 123 4567" />
        </FormField>
        <SelectField id="tz" label="Time zone" options={["Asia/Kathmandu (GMT+5:45)", "Europe/London (GMT+0)", "America/Denver (GMT−7)"]} />
      </FieldGrid>
      <FormField label="Bio" htmlFor="bio">
        <Textarea id="bio" rows={3} defaultValue="Runs ops and merchandising for thewanderer." />
      </FormField>
      <div className="flex justify-end gap-2.5">
        <Button variant="outline">Cancel</Button>
        <Button>Save changes</Button>
      </div>
    </SettingsCard>
  )
}
