import { useSearchParams } from "react-router"
import { PageHeader } from "@/components/common/PageHeader"
import { Pagination } from "@/components/common/Pagination"
import { UsersTable } from "@/components/users/UsersTable"
import { Card } from "@/components/ui/card"
import { USERS_PAGE_SIZE, useUsers } from "@/hooks/queries"
import { apiErrorMessage } from "@/lib/api"
import type { UserType } from "@/lib/types"

// No create/invite actions: accounts come from signup, Superadmins from the CLI (ADR 0004).
const COPY: Record<UserType, { title: string; sub: string; empty: string }> = {
  Creator: { title: "Creators", sub: "People who write and publish guides on thewanderer.", empty: "No creators yet." },
  Traveler: { title: "Travelers", sub: "Travelers who browse, buy and review guides.", empty: "No travelers yet." },
  Admin: { title: "Admins", sub: "Staff with full access to the admin panel.", empty: "No admins yet." },
}

export function UsersPage({ type }: { type: UserType }) {
  const [params, setParams] = useSearchParams()
  const page = Math.max(1, Number(params.get("page")) || 1)
  const { data, isPending, isError, error } = useUsers(type, page)
  const copy = COPY[type]

  const goTo = (next: number) =>
    setParams((p) => {
      if (next > 1) p.set("page", String(next))
      else p.delete("page")
      return p
    })

  return (
    <>
      <PageHeader title={copy.title} description={copy.sub} />
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
