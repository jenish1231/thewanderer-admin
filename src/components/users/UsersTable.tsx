import { DataTable } from "@/components/common/DataTable"
import { StatusBadge } from "@/components/common/StatusBadge"
import { UserCell } from "@/components/users/UserCell"
import { Button } from "@/components/ui/button"
import type { User } from "@/lib/types"

export function UsersTable({ users }: { users: User[] }) {
  return (
    <div className="overflow-x-auto">
      <DataTable
        rows={users}
        rowKey={(u) => u.email}
        columns={[
          { header: "User", cell: (u) => <UserCell user={u} tone={users.indexOf(u)} /> },
          { header: "Tier", cell: (u) => u.tier },
          { header: "Location", cell: (u) => u.location, className: "text-muted-foreground" },
          { header: "Last active", cell: (u) => u.lastActive, className: "text-muted-foreground" },
          { header: "Status", cell: (u) => <StatusBadge status={u.status} /> },
          {
            header: "Actions",
            className: "text-right",
            cell: () => (
              <div className="inline-flex gap-1.5">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  Remove
                </Button>
              </div>
            ),
          },
        ]}
      />
    </div>
  )
}
