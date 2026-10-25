import { createBrowserRouter } from "react-router"
import { RequireAuth } from "@/components/auth/RequireAuth"
import { SignInForm } from "@/components/auth/SignInForm"
import { TwoFactorForm } from "@/components/auth/TwoFactorForm"
import { AppLayout } from "@/components/layout/AppLayout"
import { AuthLayout } from "@/components/layout/AuthLayout"
import { DashboardPage } from "@/pages/DashboardPage"
import { GuidesPage } from "@/pages/GuidesPage"
import { OrdersPage } from "@/pages/OrdersPage"
import { ReportsPage } from "@/pages/ReportsPage"
import { SettingsPage } from "@/pages/SettingsPage"
import { UsersPage } from "@/pages/UsersPage"

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/signin", element: <SignInForm /> },
      { path: "/two-factor", element: <TwoFactorForm /> },
    ],
  },
  {
    element: <RequireAuth />,
    children: [
      {
        element: <AppLayout />,
        children: [
      { path: "/", element: <DashboardPage /> },
      { path: "/users/creators", element: <UsersPage key="creators" type="Creator" /> },
      { path: "/users/travelers", element: <UsersPage key="travelers" type="Traveler" /> },
      { path: "/users/admins", element: <UsersPage key="admins" type="Admin" /> },
      { path: "/guides", element: <GuidesPage /> },
      { path: "/orders", element: <OrdersPage /> },
      { path: "/reports", element: <ReportsPage /> },
      { path: "/settings", element: <SettingsPage /> },
        ],
      },
    ],
  },
])
