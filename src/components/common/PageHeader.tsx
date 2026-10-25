import type { ReactNode } from "react"

export function PageHeader({ title, description, actions }: { title: string; description?: string; actions?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div className="flex flex-[1_1_320px] flex-col gap-1.5">
        <h1 className="text-[32px] font-black tracking-tight">{title}</h1>
        {description && <p className="text-base font-light text-muted-foreground">{description}</p>}
      </div>
      {actions && <div className="flex gap-2.5">{actions}</div>}
    </div>
  )
}
