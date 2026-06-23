"use client"

import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export function AdminLogout() {
  const router = useRouter()

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" })
    router.replace("/admin/login")
    router.refresh()
  }

  return (
    <button
      type="button"
      onClick={logout}
      className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-white px-4 text-sm font-bold text-foreground transition-all hover:border-primary hover:text-navy"
    >
      <LogOut className="h-4 w-4" />
      Logout
    </button>
  )
}
