"use client"

import { FormEvent, useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError("")
    setSubmitted(false)
    setSubmitting(true)

    const formElement = event.currentTarget
    const form = new FormData(formElement)
    const payload = {
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
      service: String(form.get("service") ?? ""),
      message: String(form.get("message") ?? ""),
      source: "Contact page",
    }
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const result = (await response.json()) as { error?: string }

      if (!response.ok) {
        throw new Error(result.error || "We could not save your enquiry.")
      }

      formElement.reset()
      setSubmitted(true)
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "We could not save your enquiry. Please try again.",
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-foreground">
          Full name
          <input
            required
            name="name"
            type="text"
            placeholder="Your name"
            className="h-13 rounded-xl border border-border bg-secondary px-4 font-normal outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/15"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-foreground">
          Phone number
          <input
            required
            name="phone"
            type="tel"
            placeholder="+91"
            className="h-13 rounded-xl border border-border bg-secondary px-4 font-normal outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/15"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-foreground">
          Email address
          <input
            required
            name="email"
            type="email"
            placeholder="you@example.com"
            className="h-13 rounded-xl border border-border bg-secondary px-4 font-normal outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/15"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-foreground">
          Service required
          <select
            required
            name="service"
            defaultValue=""
            className="h-13 rounded-xl border border-border bg-secondary px-4 font-normal outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/15"
          >
            <option value="" disabled>Select a service</option>
            <option>Business Setup</option>
            <option>Brand Protection</option>
            <option>Business Credentials</option>
            <option>Government Schemes</option>
            <option>Funding Solutions</option>
            <option>Growth & Investment</option>
            <option>Compliance Desk</option>
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-bold text-foreground">
        Tell us about your requirement
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Share your business stage and the support you need..."
          className="resize-none rounded-xl border border-border bg-secondary px-4 py-3 font-normal leading-7 outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/15"
        />
      </label>

      {error ? (
        <p role="alert" className="text-sm font-semibold text-red-600">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="ep-button group w-full gap-3 disabled:cursor-not-allowed disabled:opacity-65 sm:w-fit sm:px-9"
      >
        {submitting ? (
          "Saving enquiry..."
        ) : (
          <>
            Send enquiry
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      {submitted ? (
        <div
          role="status"
          className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-semibold leading-6 text-green-800"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
          Form submitted successfully. We will contact you shortly.
        </div>
      ) : null}
    </form>
  )
}
