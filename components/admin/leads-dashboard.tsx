"use client"

import { useMemo, useState } from "react"
import {
  Check,
  Clipboard,
  Mail,
  Search,
  Users,
} from "lucide-react"

export type AdminLead = {
  id: string
  name: string
  email: string
  phone: string
  service: string
  message: string
  sources: string[]
  submissionCount: number
  createdAt: string
  updatedAt: string
}

export function LeadsDashboard({ leads }: { leads: AdminLead[] }) {
  const [query, setQuery] = useState("")
  const [copied, setCopied] = useState("")

  const filteredLeads = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return leads
    return leads.filter((lead) =>
      [
        lead.name,
        lead.phone,
        lead.email,
        lead.service,
        lead.sources.join(" "),
      ].some((value) => value.toLowerCase().includes(term)),
    )
  }, [leads, query])

  const copyNumber = async (phone: string) => {
    await navigator.clipboard.writeText(phone)
    setCopied(phone)
    window.setTimeout(() => setCopied(""), 1_500)
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-white p-5">
          <Users className="h-5 w-5 text-primary" />
          <p className="mt-4 font-heading text-3xl font-extrabold text-navy">
            {leads.length}
          </p>
          <p className="mt-1 text-sm font-semibold text-muted-foreground">
            Unique phone numbers
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-white p-5">
          <Clipboard className="h-5 w-5 text-primary" />
          <p className="mt-4 font-heading text-3xl font-extrabold text-navy">
            {leads.reduce((total, lead) => total + lead.submissionCount, 0)}
          </p>
          <p className="mt-1 text-sm font-semibold text-muted-foreground">
            Total form submissions
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-white p-5">
          <Mail className="h-5 w-5 text-primary" />
          <p className="mt-4 font-heading text-3xl font-extrabold text-navy">
            {leads.filter((lead) => lead.email).length}
          </p>
          <p className="mt-1 text-sm font-semibold text-muted-foreground">
            Leads with email
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-white shadow-[0_24px_70px_-55px_rgba(16,47,88,0.5)]">
        <div className="flex flex-col justify-between gap-4 border-b border-border p-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-heading text-xl font-extrabold text-foreground">
              All website leads
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Duplicate numbers are combined into one lead.
            </p>
          </div>
          <label className="relative block w-full sm:max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search name, phone, service..."
              className="h-11 w-full rounded-xl border border-border bg-secondary pl-10 pr-4 text-sm outline-none focus:border-primary focus:bg-white"
            />
          </label>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] text-left">
            <thead className="bg-secondary text-xs font-extrabold uppercase tracking-[0.12em] text-muted-foreground">
              <tr>
                <th className="px-5 py-4">Lead</th>
                <th className="px-5 py-4">Phone</th>
                <th className="px-5 py-4">Service / Message</th>
                <th className="px-5 py-4">Source</th>
                <th className="px-5 py-4">Updated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="align-top transition-colors hover:bg-accent/35">
                  <td className="px-5 py-4">
                    <p className="font-heading text-sm font-extrabold text-foreground">
                      {lead.name}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {lead.email || "No email"}
                    </p>
                    {lead.submissionCount > 1 && (
                      <span className="mt-2 inline-flex rounded-full bg-accent px-2.5 py-1 text-[0.68rem] font-extrabold text-accent-foreground">
                        {lead.submissionCount} submissions
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:+91${lead.phone}`}
                        className="font-heading text-sm font-extrabold text-navy hover:text-primary"
                      >
                        +91 {lead.phone}
                      </a>
                      <button
                        type="button"
                        onClick={() => copyNumber(lead.phone)}
                        aria-label={`Copy ${lead.phone}`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-white text-muted-foreground transition-all hover:border-primary hover:text-navy"
                      >
                        {copied === lead.phone ? (
                          <Check className="h-4 w-4 text-green-600" />
                        ) : (
                          <Clipboard className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </td>
                  <td className="max-w-sm px-5 py-4">
                    <p className="text-sm font-bold text-foreground">
                      {lead.service || "General enquiry"}
                    </p>
                    <p className="mt-1 line-clamp-3 text-xs leading-5 text-muted-foreground">
                      {lead.message || "No message provided"}
                    </p>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex flex-wrap gap-1.5">
                      {lead.sources.map((source) => (
                        <span
                          key={source}
                          className="rounded-full bg-secondary px-2.5 py-1 text-[0.68rem] font-bold text-foreground"
                        >
                          {source.replaceAll("-", " ")}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-4 text-xs text-muted-foreground">
                    {new Intl.DateTimeFormat("en-IN", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    }).format(new Date(lead.updatedAt))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredLeads.length === 0 && (
          <div className="p-10 text-center text-sm text-muted-foreground">
            No leads match this search.
          </div>
        )}
      </div>
    </>
  )
}
