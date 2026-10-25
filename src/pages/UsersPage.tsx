import { useState } from "react"
import { PageHeader } from "@/components/common/PageHeader"
import { Pagination } from "@/components/common/Pagination"
import { InviteAdminSheet } from "@/components/users/InviteAdminSheet"
import { UsersTable } from "@/components/users/UsersTable"
import { type UserFilter, UsersToolbar } from "@/components/users/UsersToolbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useUsers } from "@/hooks/queries"
import type { UserType } from "@/lib/types"

const COPY = {
  Creator: { title: "Creators", sub: "People who write and publish guides on thewanderer.", cta: "Invite creator", total: "86 creators" },
  Traveler: { title: "Travelers", sub: "Travelers who browse, buy and review guides.", cta: "Add traveler", total: "1,198 travelers" },
  Admin: { title: "Admins", sub: "Staff with full access to the admin panel.", cta: "Invite admin", total: "3 admins" },
}

export function UsersPage({ type }: { type: UserType }) {
  const { data: pool = [] } = useUsers(type)
  const [filter, setFilter] = useState<UserFilter>("All")
  const [query, setQuery] = useState("")
  const [inviteOpen, setInviteOpen] = useState(false)
  const copy = COPY[type]
  const q = query.toLowerCase()
  const users = pool.filter(
    (u) => (filter === "All" || u.status === filter) && (!q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)),
  )

  return (
    <>
      <PageHeader title={copy.title} description={copy.sub} actions={<Button onClick={() => setInviteOpen(true)}>{copy.cta}</Button>} />
      {type === "Admin" && <InviteAdminSheet open={inviteOpen} onOpenChange={setInviteOpen} />}
      <Card className="gap-0 py-0">
        <UsersToolbar pool={pool} filter={filter} onFilter={setFilter} query={query} onQuery={setQuery} />
        <UsersTable users={users} />
        <Pagination summary={`Showing ${users.length} of ${copy.total}`} />
      </Card>
    </>
  )
}
