import { Navigate, useLocation } from "react-router"
import { AuthHeading } from "@/components/auth/AuthHeading"
import { FormField } from "@/components/common/FormField"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSignIn } from "@/hooks/queries"
import { apiErrorMessage } from "@/lib/api"
import { useAuthStore } from "@/store/auth"

// Superadmins only: no registration and no self-service password reset (ADR 0004).
export function SignInForm() {
  const token = useAuthStore((s) => s.token)
  const from = (useLocation().state as { from?: string } | null)?.from ?? "/"
  const signIn = useSignIn()
  if (token) return <Navigate to={from} replace />
  return (
    <form
      className="flex flex-col gap-7"
      onSubmit={(e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        signIn.mutate({ email: String(form.get("email")), password: String(form.get("password")) })
      }}
    >
      <AuthHeading title="Sign in" description="Welcome back. Enter your details to continue." />
      <div className="flex flex-col gap-4">
        <FormField label="Email" htmlFor="email">
          <Input id="email" name="email" type="email" required autoComplete="email" className="h-12" placeholder="you@thewanderer.co" />
        </FormField>
        <FormField
          label="Password"
          htmlFor="password"
          error={signIn.isError ? apiErrorMessage(signIn.error) : undefined}
        >
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="h-12"
            aria-invalid={signIn.isError || undefined}
          />
        </FormField>
      </div>
      <Button type="submit" size="lg" disabled={signIn.isPending}>
        {signIn.isPending ? "Signing in…" : "Sign in"}
      </Button>
      <p className="text-center text-sm text-muted-foreground">
        Locked out? Ask a platform operator to reset your password.
      </p>
    </form>
  )
}
