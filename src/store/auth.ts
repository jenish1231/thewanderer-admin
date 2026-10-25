import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { AdminUser } from "@/lib/types"

interface AuthState {
  token: string | null
  user: AdminUser | null
  signIn: (token: string, user: AdminUser) => void
  signOut: () => void
}

// ponytail: bearer token in localStorage (the API's auth is a bearer JWT, not a cookie).
// The server caps it at 1 day and revokes it on logout; an XSS could still read it.
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      signIn: (token, user) => set({ token, user }),
      signOut: () => set({ token: null, user: null }),
    }),
    { name: "thewanderer-admin-auth" },
  ),
)
