import { FilterChips } from "@/components/common/FilterChips"
import { Input } from "@/components/ui/input"
import type { User, UserStatus } from "@/lib/types"

export type UserFilter = "All" | UserStatus
const FILTERS: UserFilter[] = ["All", "Active", "Invited", "Suspended"]

export function UsersToolbar({
  pool,
  filter,
  onFilter,
  query,
  onQuery,
}: {
  pool: User[]
  filter: UserFilter
  onFilter: (f: UserFilter) => void
  query: string
  onQuery: (q: string) => void
}) {
  const chips = FILTERS.map((f) => ({ value: f, count: f === "All" ? pool.length : pool.filter((u) => u.status === f).length }))
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b px-6 py-4.5">
      <FilterChips chips={chips} value={filter} onChange={onFilter} />
      <Input
        type="search"
        aria-label="Search users"
        placeholder="Search by name or email"
        value={query}
        onChange={(e) => onQuery(e.target.value)}
        className="h-9.5 w-65 max-w-full rounded-full text-sm"
      />
    </div>
  )
}
