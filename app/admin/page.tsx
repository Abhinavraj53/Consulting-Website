import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { AdminLogout } from "@/components/admin/admin-logout"
import {
  LeadsDashboard,
  type AdminLead,
} from "@/components/admin/leads-dashboard"
import { SiteSettingsForm } from "@/components/admin/site-settings-form"
import { Logo } from "@/components/consua/logo"
import { isAdminAuthenticated } from "@/lib/admin-auth"
import { getAllLeads } from "@/lib/leads"
import { getSiteSettings } from "@/lib/site-settings"

export const metadata: Metadata = {
  title: "Leads Admin | Epeno Advisory",
  robots: { index: false, follow: false },
}

export const dynamic = "force-dynamic"

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login")

  const [leads, siteSettings] = await Promise.all([
    getAllLeads(),
    getSiteSettings(),
  ])
  const serializedLeads: AdminLead[] = leads.map((lead) => ({
    id: lead._id!.toString(),
    name: lead.name,
    email: lead.email,
    phone: lead.normalizedPhone,
    service: lead.service,
    message: lead.message,
    sources: lead.sources,
    submissionCount: lead.submissionCount,
    createdAt: lead.createdAt.toISOString(),
    updatedAt: lead.updatedAt.toISOString(),
  }))

  return (
    <main className="min-h-screen bg-secondary">
      <header className="border-b border-border bg-white">
        <div className="ep-container flex h-20 items-center justify-between gap-5">
          <a href="/" className="text-navy">
            <Logo compact />
          </a>
          <AdminLogout />
        </div>
      </header>

      <section className="ep-container py-8 sm:py-10">
        <p className="ep-eyebrow">Secure admin panel</p>
        <h1 className="mt-3 font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
          Website form leads
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          Contact-page and popup submissions are saved together using unique
          phone numbers.
        </p>

        <div className="mt-8">
          <SiteSettingsForm settings={siteSettings} />
        </div>

        <div className="mt-8">
          <LeadsDashboard leads={serializedLeads} />
        </div>
      </section>
    </main>
  )
}
