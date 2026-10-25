import { queryOptions, useMutation, useQuery } from "@tanstack/react-query"
import { api } from "@/lib/api"
import { queryClient } from "@/lib/queryClient"
import * as mock from "@/mocks/data"
import type { AdminUser, Range, UserType } from "@/lib/types"
import { useAuthStore } from "@/store/auth"

// ponytail: queryFns resolve mock data until the admin API exists; replace with `api.get(...)` from @/lib/api.
const resolve = <T,>(data: T) => () => Promise.resolve(data)

export const usersQuery = (type: UserType) =>
  queryOptions({ queryKey: ["users", type], queryFn: resolve(mock.USERS.filter((u) => u.type === type)) })
export const guidesQuery = queryOptions({ queryKey: ["guides"], queryFn: resolve(mock.GUIDES) })
export const ordersQuery = queryOptions({ queryKey: ["orders"], queryFn: resolve(mock.ORDERS) })
export const reportsQuery = queryOptions({ queryKey: ["reports"], queryFn: resolve(mock.REPORTS) })
export const revenueQuery = (range: Range) =>
  queryOptions({ queryKey: ["revenue", range], queryFn: resolve(mock.REVENUE[range]) })
export const notificationsQuery = queryOptions({ queryKey: ["notifications"], queryFn: resolve(mock.NOTIFICATIONS) })
export const dashboardQuery = queryOptions({
  queryKey: ["dashboard"],
  queryFn: resolve({ kpis: mock.DASHBOARD_KPIS, sources: mock.TRAFFIC_SOURCES }),
})
export const analyticsQuery = queryOptions({
  queryKey: ["analytics"],
  queryFn: resolve({ kpis: mock.REPORT_KPIS, regions: mock.REGIONS, acquisition: mock.ACQUISITION }),
})

export const useUsers = (type: UserType) => useQuery(usersQuery(type))
export const useGuides = () => useQuery(guidesQuery)
export const useOrders = () => useQuery(ordersQuery)
export const useReports = () => useQuery(reportsQuery)
export const useRevenue = (range: Range) => useQuery(revenueQuery(range))
export const useNotifications = () => useQuery(notificationsQuery)
export const useDashboard = () => useQuery(dashboardQuery)
export const useAnalytics = () => useQuery(analyticsQuery)

// --- admin auth (/admin/auth/*) ---

export const meQuery = queryOptions({
  queryKey: ["me"],
  queryFn: () => api.get<{ user: AdminUser }>("/admin/auth/me").then((r) => r.data.user),
  retry: false,
})
export const useMe = () => useQuery(meQuery)

export const useSignIn = () =>
  useMutation({
    mutationFn: (body: { email: string; password: string }) =>
      api.post<{ accessToken: string; user: AdminUser }>("/admin/auth/login", body).then((r) => r.data),
    onSuccess: ({ accessToken, user }) => useAuthStore.getState().signIn(accessToken, user),
  })

export const useSignOut = () =>
  useMutation({
    mutationFn: () => api.post("/admin/auth/logout"),
    // Sign out locally even if the request fails: the token is dropped either way.
    onSettled: () => {
      useAuthStore.getState().signOut()
      queryClient.clear()
    },
  })
