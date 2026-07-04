"use client"

import { useEffect, useState } from "react"
import {
  BadgeIndianRupee,
  Building2,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  FileCheck2,
  Quote,
  Star,
} from "lucide-react"

const testimonials = [
  {
    name: "Jitesh Bhanu",
    role: "Founder",
    company: "Bhanu Agro Foods",
    industry: "Food Processing",
    scheme: "PMFME Scheme",
    funding: "Subsidy-linked project file",
    service: "Mudra Loan & Trademark",
    rating: 5,
    text: "Epeno helped us structure our documents, funding file and follow-up process so our expansion plan looked bank-ready.",
  },
  {
    name: "Manish Rajput",
    role: "Co-founder",
    company: "Rajput Engineering Works",
    industry: "MSME Manufacturing",
    scheme: "CGTMSE",
    funding: "Collateral-free credit support",
    service: "CGTMSE Loan",
    rating: 5,
    text: "The team understood our machine purchase requirement and prepared the CGTMSE loan documentation with clarity.",
  },
  {
    name: "Shivanshu Gangwar",
    role: "Founder",
    company: "Gangwar Tech Labs",
    industry: "SaaS Startup",
    scheme: "Startup India",
    funding: "DPIIT recognition support",
    service: "Startup India Certificate",
    rating: 4,
    text: "Epeno made the Startup India certificate process simple and kept our documents organized from day one.",
  },
  {
    name: "Krishna Yadav",
    role: "Founder",
    company: "Yadav Wellness Naturals",
    industry: "Consumer Brand",
    scheme: "Trademark + MSME",
    funding: "Brand protection readiness",
    service: "Trademark Registration",
    rating: 5,
    text: "Our brand registration and business records were handled cleanly, which helped us approach distributors with confidence.",
  },
  {
    name: "Anjali Verma",
    role: "Founder",
    company: "Verma Solar Solutions",
    industry: "Clean Energy",
    scheme: "CGSS",
    funding: "Startup credit guarantee",
    service: "CGTMSE Loan",
    rating: 5,
    text: "Epeno mapped our startup stage, prepared the funding file and explained how the credit guarantee route could support our working capital.",
  },
  {
    name: "Nand Kishor Singh",
    role: "Director",
    company: "Singh Logistics India",
    industry: "Logistics",
    scheme: "PMMY",
    funding: "Business loan documentation",
    service: "Government Loan",
    rating: 5,
    text: "We needed a practical government-loan file. Epeno guided the checklist, projections and submission steps patiently.",
  },
]

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
}

export function Testimonial() {
  const [active, setActive] = useState(0)
  const testimonial = testimonials[active]

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length)
    }, 6500)

    return () => window.clearInterval(interval)
  }, [])

  const previous = () =>
    setActive((current) => (current - 1 + testimonials.length) % testimonials.length)
  const next = () =>
    setActive((current) => (current + 1) % testimonials.length)

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
      <div className="ep-container relative">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="ep-eyebrow">Founder Success Stories</p>
            <h2 className="mt-3 max-w-3xl font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Founder journeys backed by schemes, funding files and Epeno guidance.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-navy transition-all hover:-translate-x-0.5 hover:border-primary hover:bg-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-navy transition-all hover:translate-x-0.5 hover:border-primary hover:bg-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <article className="relative mt-9 overflow-hidden rounded-3xl border border-border bg-white shadow-[0_28px_90px_-58px_rgba(16,47,88,0.55)]">
          <Quote className="absolute -right-5 -top-8 h-36 w-36 text-primary/[0.08]" />
          <div
            key={testimonial.name}
            className="relative grid animate-in fade-in slide-in-from-bottom-2 duration-500 lg:grid-cols-[0.42fr_0.58fr]"
          >
            <div className="relative flex min-h-[360px] items-end justify-center overflow-hidden bg-secondary px-6 pt-8 lg:min-h-[560px]">
              <span className="absolute left-8 top-8 rounded-full border border-primary/25 bg-white/85 px-4 py-2 font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-navy shadow-sm">
                Client founder
              </span>
              <img
                src="/Client%20testimonial%20girl.png"
                alt={`${testimonial.name}, ${testimonial.role} of ${testimonial.company}`}
                className="relative z-10 w-full max-w-[430px] object-contain drop-shadow-[0_28px_42px_rgba(16,47,88,0.16)]"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/88 to-transparent" />
            </div>

            <div className="relative p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={`h-5 w-5 ${
                          index < testimonial.rating
                            ? "fill-current"
                            : "fill-transparent text-border"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mt-4 font-heading text-xs font-extrabold uppercase tracking-[0.18em] text-primary">
                    {testimonial.industry}
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-extrabold leading-tight text-foreground sm:text-3xl">
                    {testimonial.company}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-muted-foreground">
                    {testimonial.name}, {testimonial.role}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3">
                  <img
                    src="/epeno-logo.png"
                    alt="Epeno Advisory"
                    className="h-10 w-10 rounded-full object-contain"
                  />
                  <div>
                    <p className="font-heading text-sm font-extrabold text-navy">
                      EPENO
                    </p>
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-primary">
                      Advisory Partner
                    </p>
                  </div>
                </div>
              </div>

              <blockquote className="mt-7 max-w-3xl font-heading text-xl font-semibold leading-[1.55] text-foreground sm:text-2xl">
                “{testimonial.text}”
              </blockquote>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-border bg-secondary p-4">
                  <Building2 className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
                    Company
                  </p>
                  <p className="mt-1 font-heading text-sm font-extrabold text-foreground">
                    {testimonial.company}
                  </p>
                </div>
                <div className="rounded-2xl border border-primary/40 bg-accent p-4">
                  <BadgeIndianRupee className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
                    Scheme
                  </p>
                  <p className="mt-1 font-heading text-sm font-extrabold text-foreground">
                    {testimonial.scheme}
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-secondary p-4">
                  <FileCheck2 className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
                    Outcome
                  </p>
                  <p className="mt-1 font-heading text-sm font-extrabold text-foreground">
                    {testimonial.funding}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy font-heading text-sm font-extrabold text-white">
                    {initials(testimonial.name)}
                  </span>
                  <div>
                    <p className="font-heading text-base font-extrabold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Founder story · {testimonial.service}
                    </p>
                  </div>
                </div>
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-navy px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-white">
                  <CircleCheck className="h-4 w-4 text-primary" />
                  Epeno verified file
                </span>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show testimonial from ${item.name}`}
              aria-pressed={active === index}
              className={`group flex min-w-0 items-center gap-2 rounded-xl border p-2 text-left transition-all duration-300 ${
                active === index
                  ? "border-primary bg-accent"
                  : "border-border bg-white hover:-translate-y-0.5 hover:border-primary/50"
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-heading text-[0.65rem] font-extrabold ${
                  active === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-navy"
                }`}
              >
                {initials(item.name)}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-xs font-extrabold text-foreground">
                  {item.name.split(" ")[0]}
                </span>
                <span className="block truncate text-[0.65rem] font-semibold text-muted-foreground">
                  {item.scheme}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
