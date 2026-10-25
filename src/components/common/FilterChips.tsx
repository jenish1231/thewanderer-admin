import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

interface Chip<T extends string> {
  value: T
  count?: number
}

export function FilterChips<T extends string>({ chips, value, onChange }: { chips: Chip<T>[]; value: T; onChange: (v: T) => void }) {
  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(v) => v && onChange(v as T)}
      className="flex-wrap gap-1.5"
      spacing={1}
    >
      {chips.map((c) => (
        <ToggleGroupItem
          key={c.value}
          value={c.value}
          className="h-8.5 rounded-full border border-input bg-card px-3.5 text-[13px] font-bold data-[state=on]:border-ink data-[state=on]:bg-ink data-[state=on]:text-white"
        >
          {c.value}
          {c.count !== undefined && <span className="font-normal">{c.count}</span>}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
