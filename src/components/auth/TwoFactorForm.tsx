import { Link, useNavigate } from "react-router"
import { AuthHeading } from "@/components/auth/AuthHeading"
import { Button } from "@/components/ui/button"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"

export function TwoFactorForm() {
  const navigate = useNavigate()
  return (
    <form
      className="flex flex-col gap-7"
      onSubmit={(e) => {
        e.preventDefault()
        navigate("/")
      }}
    >
      <AuthHeading title="Two-step verification" description="Enter the 6-digit code from your authenticator app." />
      <InputOTP maxLength={6} containerClassName="w-full" aria-label="Verification code">
        <InputOTPGroup className="w-full">
          {Array.from({ length: 6 }, (_, i) => (
            <InputOTPSlot key={i} index={i} />
          ))}
        </InputOTPGroup>
      </InputOTP>
      <Button type="submit" size="lg">
        Verify and continue
      </Button>
      <div className="flex justify-between text-sm">
        <Link to="/signin" className="text-primary hover:text-foreground hover:underline">
          Back to sign in
        </Link>
        {/* ponytail: static countdown until resend is wired to the API */}
        <span className="text-muted-foreground">Resend code in 0:42</span>
      </div>
    </form>
  )
}
