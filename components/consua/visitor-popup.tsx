"use client"

import { FormEvent, useEffect, useState } from "react"
import { ArrowRight, BadgeCheck, Building2, CheckCircle2, CircleX, Landmark } from "lucide-react"
import { AnimatedCounter } from "./animated-counter"
import { siteStats } from "./stats-data"
import { siteDetails } from "@/lib/site"

const storageKey = "epeno-visitor-popup-dismissed"

const networkItems = [
  { label: "Govt. Schemes", icon: Landmark },
  { label: "Incubation Support", icon: Building2 },
  { label: "Startup Benefits", icon: BadgeCheck },
]

export function VisitorPopup() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (window.sessionStorage.getItem(storageKey) === "true") {
      return
    }

    const timer = window.setTimeout(() => setOpen(true), 700)
    return () => window.clearTimeout(timer)
  }, [])

  const closePopup = () => {
    window.sessionStorage.setItem(storageKey, "true")
    setOpen(false)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError("")
    setSubmitted(false)
    setSubmitting(true)

    const formElement = event.currentTarget
    const form = new FormData(formElement)
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      service: "General consultation",
      message: "Consultation request submitted from the visitor popup.",
      source: "Visitor popup",
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

  if (!open) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#06111f]/74 px-3 py-3 backdrop-blur-sm sm:px-4 sm:py-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="visitor-popup-title"
    >
      <div className="relative grid max-h-[calc(100dvh-1.5rem)] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-[0_32px_120px_-50px_rgba(0,0,0,0.72)] md:grid-cols-[0.88fr_1.12fr] md:rounded-[1.5rem]">
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close popup"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white/90 text-muted-foreground shadow-sm backdrop-blur transition-all hover:rotate-6 hover:border-primary hover:text-navy"
        >
          <CircleX className="h-6 w-6" />
        </button>

        <section className="relative hidden min-h-[570px] overflow-hidden p-8 text-white md:flex md:flex-col md:justify-between lg:p-9">
          <img
            src="/indian-assets/indian-team-meeting.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[38%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/78 via-navy/88 to-[#071d38]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(245,186,75,0.32),transparent_34%)]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-primary backdrop-blur">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Business growth support
            </span>
            <h2 className="mt-5 max-w-sm font-heading text-3xl font-extrabold leading-[1.08] tracking-tight">
              Turn your business plans into clear next steps.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/72">
              Get practical guidance for registration, funding, certifications
              and compliance from one advisory team.
            </p>

            <div className="mt-6 flex items-center gap-4 rounded-2xl border border-white/12 bg-white/[0.08] p-4 backdrop-blur">
              <p className="font-heading text-3xl font-extrabold leading-none text-primary">
                <AnimatedCounter end={siteStats.clientSatisfaction.value} suffix={siteStats.clientSatisfaction.suffix} />
              </p>
              <div>
                <p className="font-heading text-sm font-extrabold text-white">Client satisfaction</p>
                <p className="mt-1 text-xs text-white/55">Guidance built around your goals</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/55">
              Support areas
            </p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {networkItems.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/12 bg-white/[0.08] p-3 text-center backdrop-blur">
                  <item.icon className="mx-auto h-5 w-5 text-primary" />
                  <p className="mt-2 text-[0.68rem] font-extrabold leading-4 text-white/82">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex items-center p-5 sm:p-7 md:p-8 lg:p-10">
          <div className="w-full">
            <p className="ep-eyebrow">Free consultation</p>
            <h2 id="visitor-popup-title" className="mt-3 pr-10 font-heading text-2xl font-extrabold leading-tight text-foreground sm:text-3xl">
              Let&apos;s discuss what your business needs next.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
              Share your details and our consultation team will contact you
              shortly.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-3.5">
              <input
                required
                name="name"
                type="text"
                placeholder="Full Name"
                className="h-12 rounded-xl border border-border bg-secondary px-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/15 sm:h-13 sm:text-base"
              />
              <input
                required
                name="email"
                type="email"
                placeholder="Email"
                className="h-12 rounded-xl border border-border bg-secondary px-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/15 sm:h-13 sm:text-base"
              />
              <input
                required
                name="phone"
                type="tel"
                placeholder="Phone no."
                className="h-12 rounded-xl border border-border bg-secondary px-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/15 sm:h-13 sm:text-base"
              />
              <button
                type="submit"
                disabled={submitting}
                className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-navy font-heading text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-65 sm:h-13 sm:text-base"
              >
                {submitted ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
                {submitting ? "Saving enquiry..." : "Submit enquiry"}
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
              {error ? (
                <p role="alert" className="text-sm font-semibold text-red-600">
                  {error}
                </p>
              ) : null}
            </form>

            <a
              href={siteDetails.whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={closePopup}
              className="mt-5 inline-flex text-xs font-bold text-muted-foreground transition-colors hover:text-primary sm:text-sm"
            >
              Already a customer? Chat with support
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
