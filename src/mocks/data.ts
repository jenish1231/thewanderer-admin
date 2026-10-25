import type { Guide, Kpi, Order, Range, Report, RevenueSeries, Share } from "@/lib/types"

export const GUIDES: Guide[] = (
  [
    ["Annapurna Circuit in 14 Days", "Asia", "GD-0451", "Asha Gurung", 24, "Published", 612],
    ["Patagonia W Trek Field Guide", "South America", "GD-0388", "Mateo Silva", 19, "Published", 488],
    ["Kyoto Back Streets", "Asia", "GD-0402", "Kenji Watanabe", 12, "Published", 540],
    ["Dolomites Hut-to-Hut", "Europe", "GD-0417", "Elena Petrova", 22, "Published", 355],
    ["Sahara by Rail and Road", "Africa", "GD-0433", "Amara Diallo", 16, "In review", 0],
    ["Iceland Ring Road Notes", "Europe", "GD-0376", "Liam Okafor", 18, "Published", 402],
    ["Lisbon on Foot", "Europe", "GD-0461", "Mateo Silva", 9, "Draft", 0],
    ["Seoul After Dark", "Asia", "GD-0470", "Hana Kim", 11, "Published", 233],
  ] as const
).map(([name, region, sku, creator, price, status, sold]) => ({ name, region, sku, creator, price, status, sold }))

export const ORDERS: Order[] = (
  [
    ["#TW-10482", "Hana Kim", "Seoul", "Oct 24, 2026", 3, 427.0, "Card", "Processing"],
    ["#TW-10481", "Mateo Silva", "Lisbon", "Oct 24, 2026", 1, 189.0, "PayPal", "Pending"],
    ["#TW-10480", "Amara Diallo", "Dakar", "Oct 23, 2026", 2, 278.0, "Card", "Shipped"],
    ["#TW-10479", "Kenji Watanabe", "Osaka", "Oct 23, 2026", 4, 616.5, "Card", "Delivered"],
    ["#TW-10478", "Liam Okafor", "Lagos", "Oct 22, 2026", 1, 49.0, "Bank transfer", "Delivered"],
    ["#TW-10477", "Sofia Marín", "Madrid", "Oct 22, 2026", 2, 378.0, "Card", "Cancelled"],
    ["#TW-10476", "Noah Becker", "Berlin", "Oct 21, 2026", 1, 349.0, "PayPal", "Shipped"],
    ["#TW-10475", "Elena Petrova", "Sofia", "Oct 21, 2026", 5, 712.0, "Card", "Delivered"],
    ["#TW-10474", "Priya Raman", "Chennai", "Oct 20, 2026", 2, 238.0, "Card", "Processing"],
    ["#TW-10473", "Hana Kim", "Seoul", "Oct 19, 2026", 1, 165.0, "Card", "Delivered"],
  ] as const
).map(([id, customer, city, date, items, total, payment, status]) => ({ id, customer, city, date, items, total, payment, status }))

export const REPORTS: Report[] = (
  [
    ["October business overview", "Business overview", "Oct 1 – Oct 24", "Today, 09:12", "Ready", "Download"],
    ["Q3 sales analytics", "Sales analytics", "Jul 1 – Sep 30", "Oct 2, 2026", "Ready", "Download"],
    ["Weekly inventory", "Inventory report", "Oct 14 – Oct 20", "Oct 21, 2026", "Ready", "Download"],
    ["Customer cohort — Sep", "Customer insights", "Sep 1 – Sep 30", "Scheduled for Oct 26", "Scheduled", "Edit"],
    ["Tax summary FY26", "Financial summary", "Jan 1 – Sep 30", "Oct 18, 2026", "Failed", "Retry"],
  ] as const
).map(([name, type, range, generated, status, action]) => ({ name, type, range, generated, status, action }))

export const NOTIFICATIONS = [
  { text: "New order #TW-10482 from Hana Kim", ago: "4 min ago" },
  { text: "New guide “Sahara by Rail and Road” awaits review", ago: "1 hr ago" },
  { text: "Elena Petrova was invited as a creator", ago: "Yesterday" },
]

export const DASHBOARD_KPIS: Kpi[] = [
  { label: "Revenue", value: "$148,320", delta: "+12.4%" },
  { label: "Orders", value: "1,926", delta: "+8.1%" },
  { label: "New customers", value: "342", delta: "+4.6%" },
  { label: "Avg. order value", value: "$77.01", delta: "−1.2%" },
]

export const REPORT_KPIS: Kpi[] = [
  { label: "Total revenue", value: "$148,320", delta: "+12.4%" },
  { label: "Orders", value: "1,926", delta: "+8.1%" },
  { label: "Customers", value: "1,284", delta: "+5.3%" },
  { label: "Conversion rate", value: "3.42%", delta: "−0.3%" },
]

export const TRAFFIC_SOURCES: Share[] = [
  { name: "Organic search", pct: 38 },
  { name: "Direct", pct: 24 },
  { name: "Instagram", pct: 18 },
  { name: "Email", pct: 12 },
  { name: "Referral", pct: 8 },
]

export const REGIONS: Share[] = [
  { name: "Asia Pacific", pct: 34 },
  { name: "Europe", pct: 29 },
  { name: "North America", pct: 23 },
  { name: "Latin America", pct: 9 },
  { name: "Africa", pct: 5 },
]

export const ACQUISITION = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"].map((week, i) => ({
  week,
  organic: [120, 142, 138, 160, 171, 158, 184, 196][i],
  paid: [60, 72, 90, 84, 96, 110, 102, 118][i],
}))

// Deterministic fake revenue curve, same formula as the design.
function series(n: number, seed: number) {
  return Array.from({ length: n }, (_, i) =>
    Math.round(4200 + 1300 * Math.sin(i / Math.max(2, n / 5) + seed) + 520 * Math.sin(i * 1.9 + seed * 3) + i * (1800 / n)),
  )
}

export const REVENUE: Record<Range, RevenueSeries> = {
  "7D": { points: series(7, 0.4), caption: "Last 7 days", xLabels: ["Oct 18", "Oct 20", "Oct 22", "Oct 24"] },
  "30D": { points: series(30, 0.9), caption: "Last 30 days", xLabels: ["Sep 25", "Oct 2", "Oct 9", "Oct 16", "Oct 24"] },
  "90D": { points: series(90, 1.6), caption: "Last 90 days", xLabels: ["Jul 26", "Aug 24", "Sep 23", "Oct 24"] },
}
