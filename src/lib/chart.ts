import { money } from "@/lib/format"

export const W = 600
export const H = 220

// Hand-rolled SVG area chart; ponytail: add a chart lib when tooltips/axes get real requirements.
export function buildChart(points: number[]) {
  const mx = Math.ceil(Math.max(...points) / 1000) * 1000
  const mn = Math.floor(Math.min(...points) / 1000) * 1000
  const step = W / (points.length - 1)
  const xy = points.map((v, i) => `${(i * step).toFixed(1)} ${(H - 8 - ((v - mn) / (mx - mn)) * (H - 16)).toFixed(1)}`)
  const line = "M" + xy.join(" L")
  return {
    line,
    area: `${line} L${W} ${H} L0 ${H} Z`,
    ticks: [0, 1, 2, 3].map((k) => "$" + ((mx - ((mx - mn) * k) / 3) / 1000).toFixed(1) + "k"),
    total: money(points.reduce((a, b) => a + b, 0)) + " total",
  }
}
