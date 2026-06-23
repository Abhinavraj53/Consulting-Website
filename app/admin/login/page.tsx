import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { LockKeyhole } from "lucide-react"
import { AdminLoginForm } from "@/components/admin/admin-login-form"
import { Logo } from "@/components/consua/logo"
import { isAdminAuthenticated } from "@/lib/admin-auth"

export const metadata: Metadata = {
  title: "Admin Login | Epeno Advisory",
  robots: { index: false, follow: false },
}

export const dynamic = "force-dynamic"

export default async function AdminLoginPage() {
  if (await isAdminAuthenticated()) redirect("/admin")

  return (
    <main className="flex min-h-screen items-center justify-center bg-secondary px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-border bg-white p-7 shadow-[0_32px_100px_-60px_rgba(16,47,88,0.7)] sm:p-9">
        <a href="/" className="inline-flex text-navy">
          <Logo />
        </a>
        <span className="mt-8 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <LockKeyhole className="h-6 w-6" />
        </span>
        <h1 className="mt-5 font-heading text-3xl font-extrabold text-foreground">
          Admin login
        </h1>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Secure access to all website form submissions.
        </p>
        <AdminLoginForm />
      </div>
    </main>
  )
}
