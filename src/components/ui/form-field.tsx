import * as React from "react"
import { cn } from "cn"
import { Label } from "@/components/ui/label"

interface FormFieldProps {
  label: string
  htmlFor: string
  hint?: string
  error?: string
  className?: string
  children: React.ReactNode
}

export function FormField({ label, htmlFor, hint, error, className, children }: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {hint && !error && <p className="text-xs text-muted-foreground">{hint}</p>}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}
