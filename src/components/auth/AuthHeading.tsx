export function AuthHeading({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-[32px] font-black tracking-tight">{title}</h1>
      <p className="text-base font-light text-pretty text-muted-foreground">{description}</p>
    </div>
  )
}
