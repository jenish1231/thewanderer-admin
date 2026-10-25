import { FormField } from "@/components/common/FormField"
import { SelectField } from "@/components/common/SelectField"
import { FieldGrid, SettingsCard } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function StoreForm() {
  return (
    <SettingsCard>
      <FieldGrid>
        <FormField label="Store name" htmlFor="store-name">
          <Input id="store-name" defaultValue="thewanderer" />
        </FormField>
        <FormField label="Support email" htmlFor="support-email">
          <Input id="support-email" type="email" defaultValue="help@thewanderer.co" />
        </FormField>
        <SelectField id="currency" label="Currency" options={["USD — US dollar", "EUR — Euro", "NPR — Nepalese rupee"]} />
        <SelectField id="weight" label="Weight unit" options={["Kilograms", "Pounds"]} />
      </FieldGrid>
      <FormField label="Warehouse address" htmlFor="address">
        <Textarea id="address" rows={2} defaultValue="Thamel Marg 14, Kathmandu 44600, Nepal" />
      </FormField>
      <div className="flex justify-end">
        <Button>Save store</Button>
      </div>
    </SettingsCard>
  )
}
