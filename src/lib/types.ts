export type UserType = "Creator" | "Traveler" | "Admin"
export type GuideStatus = "Draft" | "In Review" | "Rejected" | "Published" | "Unlisted"

export interface Guide {
  name: string
  region: string
  sku: string
  creator: string
  price: number
  status: GuideStatus
  sold: number
}

export interface Purchase {
  id: string
  buyer: string
  guide: string
  amount: number
  date: string
}

export type AuditTargetType = "Guide" | "Account"
export type AuditAction =
  | "submitted"
  | "approved"
  | "rejected"
  | "unlisted"
  | "force_unlisted"
  | "resubmitted"
  | "suspended"
  | "unsuspended"

export interface AuditEvent {
  id: string
  actor: string
  action: AuditAction
  targetType: AuditTargetType
  targetId: string
  reason: string | null
  timestamp: string
}

export interface Kpi {
  label: string
  value: string
  delta: string
}

export interface Share {
  name: string
  pct: number
}

export type Range = "7D" | "30D" | "90D"

export interface RevenueSeries {
  points: number[]
  caption: string
  xLabels: string[]
}

export interface AdminUser {
  id: string
  name: string
  email: string
  role: "superadmin"
}

export type AccountStatus = "verified" | "unverified"

/** One account in an /admin/users/* list. */
export interface Account {
  id: string
  name: string
  email: string
  status: AccountStatus
  created_at: string
}

export interface Page<T> {
  items: T[]
  total: number
}
