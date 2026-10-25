import { useNavigate } from "react-router"
import { AuthFooterLink } from "@/components/auth/AuthFooterLink"
import { AuthHeading } from "@/components/auth/AuthHeading"
import { FormField } from "@/components/common/FormField"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function RegisterForm() {
  const navigate = useNavigate()
  return (
    <form
      className="flex flex-col gap-7"
      onSubmit={(e) => {
        e.preventDefault()
        navigate("/")
      }}
    >
      <AuthHeading title="Create account" description="Set up access for your team." />
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3">
          <FormField label="First name" htmlFor="first-name">
            <Input id="first-name" required className="h-12" placeholder="Asha" />
          </FormField>
          <FormField label="Last name" htmlFor="last-name">
            <Input id="last-name" required className="h-12" placeholder="Gurung" />
          </FormField>
        </div>
        <FormField label="Work email" htmlFor="work-email">
          <Input id="work-email" type="email" required className="h-12" placeholder="you@thewanderer.co" />
        </FormField>
        <FormField label="Password" htmlFor="new-password">
          <Input id="new-password" type="password" required minLength={12} className="h-12" placeholder="At least 12 characters" />
        </FormField>
        <Label className="items-start leading-snug font-normal text-muted-foreground">
          <Checkbox required className="mt-0.5" />
          I agree to the terms of service and privacy policy.
        </Label>
      </div>
      <Button type="submit" size="lg">
        Create account
      </Button>
      <AuthFooterLink prompt="Already have an account?" to="/signin">
        Sign in
      </AuthFooterLink>
    </form>
  )
}
