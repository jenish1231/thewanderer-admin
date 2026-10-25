import { Link, useNavigate } from "react-router"
import { AuthFooterLink } from "@/components/auth/AuthFooterLink"
import { AuthHeading } from "@/components/auth/AuthHeading"
import { FormField } from "@/components/common/FormField"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SignInForm() {
  const navigate = useNavigate()
  return (
    <form
      className="flex flex-col gap-7"
      onSubmit={(e) => {
        e.preventDefault()
        navigate("/two-factor")
      }}
    >
      <AuthHeading title="Sign in" description="Welcome back. Enter your details to continue." />
      <div className="flex flex-col gap-4">
        <FormField label="Email" htmlFor="email">
          <Input id="email" type="email" required autoComplete="email" className="h-12" placeholder="you@thewanderer.co" />
        </FormField>
        <FormField label="Password" htmlFor="password">
          <Input id="password" type="password" required autoComplete="current-password" className="h-12" />
        </FormField>
        <div className="flex items-center justify-between text-sm">
          <Label className="font-normal text-muted-foreground">
            <Checkbox defaultChecked />
            Remember me
          </Label>
          <Link to="/forgot-password" className="text-primary hover:text-foreground hover:underline">
            Forgot password?
          </Link>
        </div>
      </div>
      <Button type="submit" size="lg">
        Sign in
      </Button>
      <AuthFooterLink prompt="New to thewanderer?" to="/register">
        Create an account
      </AuthFooterLink>
    </form>
  )
}
