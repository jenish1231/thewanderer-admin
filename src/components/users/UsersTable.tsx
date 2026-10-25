import { DataTable } from "@/components/common/DataTable"
import { StatusBadge } from "@/components/common/StatusBadge"
import { UserCell } from "@/components/users/UserCell"
import type { Account } from "@/lib/types"

const STATUS_LABEL = { verified: "Verified", unverified: "Unverified" } as const
const joined = new Intl.DateTimeFormat(undefined, { dateStyle: "medium" })

export function UsersTable({ users }: { users: Account[] }) {
  return (
    <div className="overflow-x-auto">
      <DataTable
        rows={users}
        rowKey={(u) => u.id}
        minWidth={560}
        columns={[
          { header: "User", cell: (u) => <UserCell user={u} tone={users.indexOf(u)} /> },
          { header: "Status", cell: (u) => <StatusBadge status={STATUS_LABEL[u.status]} /> },
          { header: "Joined", cell: (u) => joined.format(new Date(u.created_at)), className: "text-muted-foreground" },
        ]}
      />
    </div>
  )
}
