import { useState } from "react"
import { useSearchParams } from "react-router"
import { PageHeader } from "@/components/common/PageHeader"
import { Pagination } from "@/components/common/Pagination"
import { InviteAdminSheet } from "@/components/users/InviteAdminSheet"
import { UsersTable } from "@/components/users/UsersTable"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { USERS_PAGE_SIZE, useUsers } from "@/hooks/queries"
import { apiErrorMessage } from "@/lib/api"
import type { UserType } from "@/lib/types"

const COPY: Record<UserType, { title: string; sub: string; cta?: string; empty: string }> = {
  Creator: { title: "Creators", sub: "People who write and publish guides on thewanderer.", empty: "No creators yet." },
  Traveler: { title: "Travelers", sub: "Travelers who browse, buy and review guides.", cta: "Add traveler", empty: "No travelers yet." },
  Admin: { title: "Admins", sub: "Staff with full access to the admin panel.", cta: "Invite admin", empty: "No admins yet." },
}

export function UsersPage({ type }: { type: UserType }) {
  const [params, setParams] = useSearchParams()
  const page = Math.max(1, Number(params.get("page")) || 1)
  const { data, isPending, isError, error } = useUsers(type, page)
  const [inviteOpen, setInviteOpen] = useState(false)
  const copy = COPY[type]

  const goTo = (next: number) =>
    setParams((p) => {
      if (next > 1) p.set("page", String(next))
      else p.delete("page")
      return p
    })

  return (
    <>
      <PageHeader
        title={copy.title}
        description={copy.sub}
        actions={copy.cta && <Button onClick={() => setInviteOpen(true)}>{copy.cta}</Button>}
      />
      {type === "Admin" && <InviteAdminSheet open={inviteOpen} onOpenChange={setInviteOpen} />}
      <Card className="gap-0 py-0">
        {isPending ? (
          <p className="px-6 py-10 text-center text-sm text-muted-foreground">Loading…</p>
        ) : isError ? (
          <p role="alert" className="px-6 py-10 text-center text-sm text-destructive">
            {apiErrorMessage(error)}
          </p>
        ) : data.items.length === 0 ? (
          <p className="px-6 py-10 text-center text-sm text-muted-foreground">{copy.empty}</p>
        ) : (
          <>
            <UsersTable users={data.items} />
            <Pagination page={page} pageSize={USERS_PAGE_SIZE} total={data.total} onPage={goTo} />
          </>
        )}
      </Card>
    </>
  )
}
