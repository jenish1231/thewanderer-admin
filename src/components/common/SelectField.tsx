import { FormField } from "@/components/common/FormField"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SelectField({ id, label, options, className }: { id: string; label: string; options: string[]; className?: string }) {
  return (
    <FormField label={label} htmlFor={id} className={className}>
      <Select defaultValue={options[0]}>
        <SelectTrigger id={id} className="w-full bg-card">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((o) => (
            <SelectItem key={o} value={o}>
              {o}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormField>
  )
}
