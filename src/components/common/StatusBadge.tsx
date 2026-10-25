import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const TONE = {
  ok: "bg-success-soft text-success",
  info: "bg-info-soft text-info",
  warn: "bg-warning-soft text-warning",
  bad: "bg-danger-soft text-danger",
}

const STATUS_TONE: Record<string, keyof typeof TONE> = {
  Active: "ok", Verified: "ok", Delivered: "ok", Ready: "ok", Published: "ok",
  "In review": "info", Shipped: "info", Processing: "info",
  Draft: "warn", Pending: "warn", Unverified: "warn", Invited: "warn", Scheduled: "warn",
  Cancelled: "bad", Suspended: "bad", Failed: "bad",
}

export function StatusBadge({ status, className }: { status: string; className?: string }) {
  return <Badge className={cn("h-auto px-2.5 py-1 font-bold", TONE[STATUS_TONE[status] ?? "info"], className)}>{status}</Badge>
}
