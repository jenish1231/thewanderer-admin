import { Outlet } from "react-router"
import { BrandMark, BrandName } from "@/components/common/BrandMark"

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] bg-card">
      <div className="flex min-h-80 flex-col justify-between gap-12 bg-ink p-12 text-white">
        <div className="flex items-center gap-3">
          <BrandMark className="size-8" />
          <BrandName className="text-xl" mutedClassName="text-slate-300" />
        </div>
        <div className="flex max-w-115 flex-col gap-5">
          <div className="text-[clamp(36px,5vw,56px)] leading-[1.02] font-black tracking-tight text-balance">
            Run the store behind every trail.
          </div>
          <div className="text-lg leading-normal font-light text-pretty text-slate-300">
            Orders, inventory and customers for thewanderer — in one quiet workspace.
          </div>
        </div>
        <div className="text-[13px] text-slate-300">© 2026 thewanderer</div>
      </div>
      <div className="flex items-center justify-center px-6 py-12">
        <div className="flex w-full max-w-100 flex-col gap-7">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
