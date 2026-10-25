import { Navigate, Outlet, useLocation } from "react-router"
import { useMe } from "@/hooks/queries"
import { useAuthStore } from "@/store/auth"

// A component guard rather than a route loader: it reacts when the api's 401 interceptor
// signs the admin out mid-session (token expired or revoked), not just on navigation.
export function RequireAuth() {
  const token = useAuthStore((s) => s.token)
  const location = useLocation()
  useMe() // validates a persisted token on load; a 401 signs out via the interceptor
  if (!token) return <Navigate to="/signin" replace state={{ from: location.pathname }} />
  return <Outlet />
}
