"use client"

import { useMemo, useState } from "react"
import {
  Check,
  Clipboard,
  Mail,
  Search,
  Trash2,
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

export function LeadsDashboard({ leads: initialLeads }: { leads: AdminLead[] }) {
  const [leads, setLeads] = useState(initialLeads)
  const [query, setQuery] = useState("")
  const [copied, setCopied] = useState("")
  const [deletingId, setDeletingId] = useState("")
  const [deleteError, setDeleteError] = useState("")

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

  const deleteLead = async (lead: AdminLead) => {
    const confirmed = window.confirm(
      `Delete ${lead.name}'s lead permanently? This action cannot be undone.`,
    )
    if (!confirmed) return

    setDeleteError("")
    setDeletingId(lead.id)

    try {
      const response = await fetch(`/api/admin/leads/${lead.id}`, {
        method: "DELETE",
      })
      const result = (await response.json()) as { error?: string }

      if (!response.ok) {
        throw new Error(result.error || "Unable to delete this lead.")
      }

      setLeads((current) => current.filter((item) => item.id !== lead.id))
    } catch (error) {
      setDeleteError(
        error instanceof Error ? error.message : "Unable to delete this lead.",
      )
    } finally {
      setDeletingId("")
    }
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

        {deleteError ? (
          <p role="alert" className="border-b border-red-200 bg-red-50 px-5 py-3 text-sm font-semibold text-red-700">
            {deleteError}
          </p>
        ) : null}

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1060px] text-left">
            <thead className="bg-secondary text-xs font-extrabold uppercase tracking-[0.12em] text-muted-foreground">
              <tr>
                <th className="px-5 py-4">Lead</th>
                <th className="px-5 py-4">Phone</th>
                <th className="px-5 py-4">Service / Message</th>
                <th className="px-5 py-4">Source</th>
                <th className="px-5 py-4">Updated</th>
                <th className="px-5 py-4 text-right">Action</th>
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
                  <td className="px-5 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => deleteLead(lead)}
                      disabled={deletingId === lead.id}
                      aria-label={`Delete ${lead.name}`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-red-200 bg-red-50 text-red-600 transition-all hover:-translate-y-0.5 hover:border-red-500 hover:bg-red-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Trash2 className={`h-4 w-4 ${deletingId === lead.id ? "animate-pulse" : ""}`} />
                    </button>
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
