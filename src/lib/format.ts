export const money = (n: number) =>
  "$" + n.toLocaleString("en-US", { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 })

export const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
