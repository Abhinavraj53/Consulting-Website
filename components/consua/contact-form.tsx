"use client"

import { FormEvent, useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { siteDetails } from "@/lib/site"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const message = [
      "Hello Epeno, I would like a business consultation.",
      `Name: ${form.get("name")}`,
      `Phone: ${form.get("phone")}`,
      `Email: ${form.get("email")}`,
      `Service: ${form.get("service")}`,
      `Message: ${form.get("message")}`,
    ].join("\n")

    window.open(
      `${siteDetails.whatsappHref}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    )
    setSubmitted(true)
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

      <button type="submit" className="ep-button group w-full gap-3 sm:w-fit sm:px-9">
        {submitted ? (
          <>
            WhatsApp opened
            <CheckCircle2 className="h-5 w-5" />
          </>
        ) : (
          <>
            Send enquiry
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  )
}
