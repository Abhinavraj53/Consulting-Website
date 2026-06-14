"use client"

import { FormEvent, useEffect, useState } from "react"
import { BadgeCheck, Building2, CircleX, Landmark, Sparkles } from "lucide-react"

const storageKey = "epeno-visitor-popup-dismissed"

const networkItems = [
  { label: "Govt. Schemes", icon: Landmark },
  { label: "Incubation Support", icon: Building2 },
  { label: "Startup Benefits", icon: BadgeCheck },
]

export function VisitorPopup() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    window.setTimeout(closePopup, 1400)
  }

  if (!open) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#06111f]/74 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="visitor-popup-title"
    >
      <div className="relative grid max-h-[calc(100vh-2rem)] w-full max-w-5xl overflow-y-auto rounded-[1.75rem] bg-white shadow-[0_32px_120px_-50px_rgba(0,0,0,0.72)] md:grid-cols-[0.92fr_1.08fr]">
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close popup"
          className="absolute right-5 top-5 z-10 rounded-full text-muted-foreground transition-colors hover:text-navy"
        >
          <CircleX className="h-8 w-8" />
        </button>

        <section className="relative overflow-hidden bg-gradient-to-b from-[#dff5fa] via-white to-white p-8 md:p-12">
          <div
            aria-hidden="true"
            className="absolute inset-x-8 top-16 h-[430px] opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 28% 28%, #102f58 0 12px, transparent 13px), radial-gradient(circle at 52% 40%, #102f58 0 16px, transparent 17px), radial-gradient(circle at 42% 64%, #102f58 0 22px, transparent 23px)",
              backgroundSize: "120px 120px",
            }}
          />

          <div className="relative">
            <p className="font-heading text-3xl font-medium uppercase leading-tight tracking-wide text-[#111827] md:text-4xl">
              We have the
            </p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold uppercase leading-tight text-[#05070c] md:text-4xl">
              strongest support network
            </h2>
            <p className="mt-2 font-heading text-3xl font-semibold italic leading-tight text-[#05070c] md:text-5xl">
              for Startups
            </p>
            <p className="mt-3 font-heading text-2xl uppercase tracking-wide text-[#111827]">
              in India
            </p>

            <div className="mt-10 w-fit rounded-2xl bg-white px-7 py-5 text-center shadow-[0_22px_60px_-34px_rgba(16,47,88,0.7)]">
              <p className="font-heading text-xl font-extrabold text-[#05070c] md:text-2xl">
                92% <span className="text-base font-semibold">of clients move to</span>
              </p>
              <p className="font-heading text-2xl font-extrabold italic text-navy">
                the next stage
              </p>
            </div>

            <div className="mt-10">
              <span className="inline-flex rounded-sm bg-[#d7001e] px-5 py-2 font-heading text-2xl font-extrabold italic text-white">
                Share your plans
              </span>
              <p className="mt-2 w-fit rounded-sm border border-border bg-white px-4 py-2 font-heading text-xl font-semibold uppercase text-[#111827]">
                with Epeno <span className="text-[#d7001e]">now!</span>
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {networkItems.map((item) => (
                <div key={item.label} className="rounded-xl border border-border bg-white/84 p-3 text-center">
                  <item.icon className="mx-auto h-6 w-6 text-primary" />
                  <p className="mt-2 text-xs font-extrabold leading-4 text-navy">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-dashed border-navy/20 bg-accent px-4 py-2 text-sm font-bold text-navy">
              <Sparkles className="h-4 w-4 text-primary" />
              and 100+ more support options
            </div>
          </div>
        </section>

        <section className="flex items-center p-8 md:p-12">
          <div className="w-full">
            <h2 id="visitor-popup-title" className="font-heading text-2xl font-extrabold text-[#05070c]">
              Have a question? Need expert support?
            </h2>
            <p className="mt-2 text-xl leading-8 text-[#111827]">
              Just drop us a message, we&apos;re here to help you grow.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 grid gap-6">
              <input
                required
                name="name"
                type="text"
                placeholder="Full Name"
                className="h-16 rounded-xl border border-border bg-white px-7 text-xl text-foreground outline-none transition-colors placeholder:text-[#111827] focus:border-primary focus:ring-2 focus:ring-primary/25"
              />
              <input
                required
                name="email"
                type="email"
                placeholder="Email"
                className="h-16 rounded-xl border border-border bg-white px-7 text-xl text-foreground outline-none transition-colors placeholder:text-[#111827] focus:border-primary focus:ring-2 focus:ring-primary/25"
              />
              <input
                required
                name="phone"
                type="tel"
                placeholder="Phone no."
                className="h-16 rounded-xl border border-border bg-white px-7 text-xl text-foreground outline-none transition-colors placeholder:text-[#111827] focus:border-primary focus:ring-2 focus:ring-primary/25"
              />
              <button
                type="submit"
                className="h-16 rounded-full bg-black font-heading text-xl font-semibold text-white transition-colors hover:bg-navy"
              >
                {submitted ? "Thank you!" : "Submit"}
              </button>
            </form>

            <a
              href="/about-us#contact"
              onClick={closePopup}
              className="mt-7 inline-flex text-lg font-semibold text-[#111827] transition-colors hover:text-primary"
            >
              Already a customer? Get support for your service
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
