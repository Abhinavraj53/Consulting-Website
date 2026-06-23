"use client"

import { FormEvent, useState } from "react"
import { Loader2, LockKeyhole } from "lucide-react"
import { useRouter } from "next/navigation"

export function AdminLoginForm() {
  const router = useRouter()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError("")
    setLoading(true)

    const form = new FormData(event.currentTarget)
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: form.get("username"),
        password: form.get("password"),
      }),
    })
    const result = (await response.json()) as { error?: string }

    if (!response.ok) {
      setError(result.error || "Unable to sign in")
      setLoading(false)
      return
    }

    router.replace("/admin")
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
      <label className="grid gap-2 text-sm font-bold text-foreground">
        Username
        <input
          name="username"
          required
          autoComplete="username"
          className="h-12 rounded-xl border border-border bg-secondary px-4 font-normal outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/15"
        />
      </label>
      <label className="grid gap-2 text-sm font-bold text-foreground">
        Password
        <input
          name="password"
          required
          type="password"
          autoComplete="current-password"
          className="h-12 rounded-xl border border-border bg-secondary px-4 font-normal outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/15"
        />
      </label>

      {error && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="ep-button mt-2 w-full gap-2 rounded-xl disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <LockKeyhole className="h-4 w-4" />
        )}
        {loading ? "Signing in..." : "Secure sign in"}
      </button>
    </form>
  )
}
