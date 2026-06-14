"use client"

import { useState } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    eyebrow: "Startup Support",
    title: "Startup certification, pitch decks and DPR support",
    desc: "Get certified as a startup, prepare investor-ready pitch decks, create detailed project reports and access government-backed growth opportunities with structured documentation.",
    metric: "01",
    tag: "Startup readiness",
    img: "/consua-project.jpg",
    href: "/services/startup-india-certification",
  },
  {
    eyebrow: "Funding Assistance",
    title: "Government loans, grants and subsidy applications",
    desc: "We help you identify eligible schemes, prepare loan documentation and manage submission workflows with a clear compliance checklist.",
    metric: "02",
    tag: "Capital access",
    img: "/consua-cta.jpg",
    href: "/services/seed-fund",
  },
  {
    eyebrow: "Brand Protection",
    title: "Trademark, GST and core registrations",
    desc: "Secure your brand identity, register tax essentials and build a clean legal foundation before scaling operations or raising capital.",
    metric: "03",
    tag: "Legal foundation",
    img: "/consua-blog-3.jpg",
    href: "/services/trademark-registration",
  },
  {
    eyebrow: "Compliance Desk",
    title: "ROC, tax filing and annual compliance management",
    desc: "Stay ahead of filing timelines with structured documentation, reminders and expert review across company and tax compliance.",
    metric: "04",
    tag: "Ongoing support",
    img: "/consua-blog-2.jpg",
    href: "/services/roc-compliances-for-pvt-ltd",
  },
]

export function Projects() {
  const [active, setActive] = useState(0)
  const slide = slides[active]

  const goPrev = () => setActive((current) => (current - 1 + slides.length) % slides.length)
  const goNext = () => setActive((current) => (current + 1) % slides.length)

  return (
    <section id="projects" className="relative overflow-hidden bg-navy py-24 text-navy-foreground md:py-32">
      <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="ep-container">
        <div className="relative grid items-end gap-8 lg:grid-cols-[minmax(0,0.72fr)_auto]">
          <div>
            <p className="ep-eyebrow">Epeno Special</p>
            <h2 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-[1.04] tracking-tight text-balance md:text-5xl lg:text-[3.25rem] xl:text-[3.55rem]">
              High-value services for startups and growing companies
            </h2>
          </div>

          <div className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.04] p-2 shadow-[0_20px_70px_-50px_rgba(0,0,0,0.8)] backdrop-blur">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous project"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="min-w-20 text-center font-heading text-sm font-extrabold tracking-[0.18em] text-white/72">
              {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next project"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative mt-14 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-[0_34px_120px_-78px_rgba(0,0,0,0.95)] backdrop-blur lg:grid-cols-[0.9fr_1fr]">
          <div className="relative min-h-[320px] overflow-hidden md:min-h-[440px]">
            <img
              key={slide.img}
              src={slide.img}
              alt={slide.title}
              className="h-full w-full object-cover transition-all duration-700 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
            <div className="absolute left-6 top-6 rounded-full border border-white/18 bg-navy/72 px-4 py-2 font-heading text-xs font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur">
              {slide.tag}
            </div>
          </div>

          <div className="flex min-h-[420px] flex-col justify-center p-8 md:p-12 lg:p-14 xl:p-16">
            <div key={slide.title} className="animate-in fade-in slide-in-from-bottom-3 duration-500">
              <div className="mb-8 flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary font-heading text-lg font-extrabold text-primary-foreground">
                  {slide.metric}
                </span>
                <div>
                  <p className="ep-eyebrow">{slide.eyebrow}</p>
                  <p className="mt-1 text-sm font-semibold text-white/52">
                    Premium support designed for growth-stage execution
                  </p>
                </div>
              </div>

              <h3 className="max-w-2xl font-heading text-3xl font-extrabold leading-[1.12] tracking-tight text-white text-balance md:text-[2.45rem]">
                {slide.title}
              </h3>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
                {slide.desc}
              </p>
              <a href={slide.href} className="ep-button group mt-10 w-fit gap-3">
                Read More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-4">
          {slides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`group flex items-center gap-3 rounded-2xl border p-3 text-left transition-all duration-300 ${
                active === index
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-white/10 bg-white/[0.035] text-white/60 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  active === index ? "bg-primary-foreground" : "bg-primary/70"
                }`}
              />
              <span className="truncate font-heading text-xs font-extrabold uppercase tracking-[0.16em]">
                {item.eyebrow}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
