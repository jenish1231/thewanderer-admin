import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import type { Range } from "@/lib/types"

const RANGES: Range[] = ["7D", "30D", "90D"]

export function RangeToggle({ value, onChange }: { value: Range; onChange: (r: Range) => void }) {
  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(v) => v && onChange(v as Range)}
      spacing={0}
      className="rounded-full bg-muted p-0.75"
    >
      {RANGES.map((r) => (
        <ToggleGroupItem key={r} value={r} className="h-8 rounded-full! px-3.5 text-[13px] font-bold data-[state=on]:bg-card">
          {r}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
