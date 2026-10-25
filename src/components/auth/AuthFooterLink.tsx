import type { ReactNode } from "react"
import { Link } from "react-router"

export function AuthFooterLink({ prompt, to, children }: { prompt?: string; to: string; children: ReactNode }) {
  return (
    <div className="text-center text-sm text-muted-foreground">
      {prompt}{" "}
      <Link to={to} className="text-primary hover:text-foreground hover:underline">
        {children}
      </Link>
    </div>
  )
}
