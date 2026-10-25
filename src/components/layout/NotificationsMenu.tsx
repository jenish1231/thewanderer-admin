import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useNotifications } from "@/hooks/queries"

export function NotificationsMenu() {
  const { data = [] } = useNotifications()
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="h-10 gap-2 px-3.5 font-normal">
          Alerts
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs font-bold text-primary-foreground">
            {data.length}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-75 gap-0 overflow-hidden p-0 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
        <div className="border-b px-4 py-3.5 text-sm font-bold">Notifications</div>
        {data.map((n) => (
          <div key={n.text} className="flex flex-col gap-0.5 border-b px-4 py-3">
            <div className="text-sm">{n.text}</div>
            <div className="text-xs text-muted-foreground">{n.ago}</div>
          </div>
        ))}
        <a href="#" className="px-4 py-3 text-sm text-primary hover:underline">
          View all notifications
        </a>
      </PopoverContent>
    </Popover>
  )
}
