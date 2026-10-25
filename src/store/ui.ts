import { create } from "zustand"
import { persist } from "zustand/middleware"

interface UiState {
  compactSidebar: boolean
  usersNavOpen: boolean
  toggleSidebar: () => void
  toggleUsersNav: () => void
}

export const useUiStore = create<UiState>()(
  persist(
    (set) => ({
      compactSidebar: false,
      usersNavOpen: true,
      toggleSidebar: () => set((s) => ({ compactSidebar: !s.compactSidebar })),
      toggleUsersNav: () => set((s) => ({ usersNavOpen: !s.usersNavOpen })),
    }),
    { name: "thewanderer-admin-ui" },
  ),
)
