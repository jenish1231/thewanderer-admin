# thewanderer-admin

React 19 + Vite admin panel for thewanderer. Talks to `thewanderer-api` (FastAPI, :8000).

## Dev

```bash
npm run dev      # :5173
npm run build    # tsc + vite build
npm run lint     # oxlint
```

API base URL configured in `src/lib/api.ts`. Proxy not set up — CORS handled by the API.

## Stack

- **React 19** + **TypeScript 6** + **Vite 8**
- **React Router 8** — file-based routes defined in `src/router.tsx`
- **TanStack Query 5** — all server state; query/mutation factories in `src/hooks/queries.ts`
- **Zustand 5** — UI state in `src/store/ui.ts`; auth token + signed-in admin in `src/store/auth.ts` (both persisted)
- **Tailwind CSS 4** + **shadcn** component conventions
- **Radix UI** (unified `radix-ui` package) for headless primitives
- **oxlint** for linting (no ESLint)

## Project structure

```
src/
  components/
    auth/        # SignInForm, RequireAuth guard, 2FA mock (no register / forgot-password: ADR 0004)
    common/      # Shared primitives: FormField, PageHeader, Pagination, StatusBadge, …
    dashboard/   # Dashboard-specific cards
    guides/      # Guide grid + card
    layout/      # AppLayout, Sidebar, Topbar, nav.ts
    orders/      # Orders table + status tabs
    reports/     # Reports cards and filters
    settings/    # Settings section forms
    ui/          # Low-level UI: Button, Input, Sheet, Card, … (shadcn-style)
    users/       # UsersTable, UsersToolbar, InviteAdminSheet
  hooks/         # TanStack Query wrappers
  lib/           # api.ts, types.ts, utils.ts, format.ts, chart.ts
  mocks/         # Mock data (replace queryFns with real API calls)
  pages/         # Route-level page components
  store/         # Zustand stores
  router.tsx     # All routes
```

## Key conventions

- **Reusable sidebar panel**: `src/components/ui/sheet.tsx` — built on Radix `Dialog`. Use `Sheet` + `SheetContent` + `SheetHeader/Body/Footer` for any slide-over.
- **Form fields**: `src/components/common/FormField.tsx` — wraps Label + optional hint/error. Use this, not raw `<label>`.
- **Mock data**: all query functions in `hooks/queries.ts` resolve mock data from `mocks/data.ts`. Replace `resolve(mock.X)` with `api.get(...)` when the API is ready.
- **Nav**: add sidebar entries in `src/components/layout/nav.ts`. Groups (collapsible) use `SidebarGroup`; leaves use `SidebarLink`.
- **Routes**: add in `src/router.tsx` under the `AppLayout` child array.
- **Types**: shared domain types live in `src/lib/types.ts`.

## Auth

Superadmins only, via `thewanderer-api`'s `/admin/auth/*` (ADR 0007). No registration and no self-service password reset: accounts and resets come from `make seed-superadmin` / `make reset-superadmin-password` in the API.

- `useSignIn` / `useSignOut` / `useMe` in `src/hooks/queries.ts`; token + user in `src/store/auth.ts`.
- `src/lib/api.ts` attaches `Authorization: Bearer <token>` to every request; any 401 signs out.
- `RequireAuth` (route element wrapping `AppLayout`) redirects to `/signin` when there's no token, and re-checks a persisted token with `/admin/auth/me` on load. New app routes go under `AppLayout`, so they're guarded automatically.
- Sessions last 1 day; the API enforces it.
- `apiErrorMessage(error)` turns the API's `{"error": "..."}` body into display text.
