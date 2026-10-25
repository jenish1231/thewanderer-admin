import { useState } from "react"
import { AuthFooterLink } from "@/components/auth/AuthFooterLink"
import { AuthHeading } from "@/components/auth/AuthHeading"
import { FormField } from "@/components/common/FormField"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ForgotPasswordForm() {
  const [sent, setSent] = useState(false)
  return (
    <form
      className="flex flex-col gap-7"
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      <AuthHeading title="Forgot password" description="Enter the email tied to your account and we'll send a reset link." />
      <FormField label="Email" htmlFor="reset-email">
        <Input id="reset-email" type="email" required className="h-12" placeholder="you@thewanderer.co" />
      </FormField>
      {sent && (
        <div role="status" className="rounded-corner bg-accent px-4 py-3.5 text-sm leading-snug">
          Reset link sent. Check your inbox — it expires in 30 minutes.
        </div>
      )}
      <Button type="submit" size="lg">
        Send reset link
      </Button>
      <AuthFooterLink to="/signin">Back to sign in</AuthFooterLink>
    </form>
  )
}
