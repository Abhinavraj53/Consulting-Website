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
    img: "/indian-assets/indian-team-meeting.jpg",
    href: "/services/startup-india-certification",
  },
  {
    eyebrow: "Funding Assistance",
    title: "Government loans, grants and subsidy applications",
    desc: "We help you identify eligible schemes, prepare loan documentation and manage submission workflows with a clear compliance checklist.",
    metric: "02",
    tag: "Capital access",
    img: "/indian-assets/indian-founder-laptop.jpg",
    href: "/services/seed-fund",
  },
  {
    eyebrow: "Brand Protection",
    title: "Trademark, GST and core registrations",
    desc: "Secure your brand identity, register tax essentials and build a clean legal foundation before scaling operations or raising capital.",
    metric: "03",
    tag: "Legal foundation",
    img: "/indian-assets/indian-businesswoman-office.jpg",
    href: "/services/trademark-registration",
  },
  {
    eyebrow: "Compliance Desk",
    title: "ROC, tax filing and annual compliance management",
    desc: "Stay ahead of filing timelines with structured documentation, reminders and expert review across company and tax compliance.",
    metric: "04",
    tag: "Ongoing support",
    img: "/indian-assets/indian-businessman-office.jpg",
    href: "/services/roc-compliances-for-pvt-ltd",
  },
]

export function Projects() {
  const [active, setActive] = useState(0)
  const slide = slides[active]

  const goPrev = () => setActive((current) => (current - 1 + slides.length) % slides.length)
  const goNext = () => setActive((current) => (current + 1) % slides.length)

  return (
    <section id="projects" className="relative overflow-hidden bg-navy py-16 text-navy-foreground sm:py-20 lg:py-28">
      <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="ep-container relative">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(320px,0.45fr)] lg:items-end">
          <div className="max-w-2xl">
            <p className="ep-eyebrow">Featured Solutions</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-[1.08] tracking-tight text-balance sm:text-4xl lg:text-[2.8rem] xl:text-5xl">
              Strategic services that move your business forward
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-md text-sm leading-7 text-white/58 sm:text-base">
              Explore focused support for setup, funding, brand protection and
              recurring compliance.
            </p>
            <div className="mt-5 flex items-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous project"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white transition-all duration-300 hover:-translate-x-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
              <div className="flex min-w-32 items-center gap-3">
                <span className="font-heading text-sm font-extrabold tracking-[0.14em] text-white">
              {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
                <span className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                  <span
                    className="block h-full rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${((active + 1) / slides.length) * 100}%` }}
                  />
                </span>
              </div>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next project"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white transition-all duration-300 hover:translate-x-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            </div>
          </div>
        </div>

        <div className="group relative mt-10 grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#1b3c68] shadow-[0_32px_100px_-58px_rgba(0,0,0,0.9)] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative min-h-[300px] overflow-hidden sm:min-h-[380px] lg:min-h-[500px]">
            <img
              key={slide.img}
              src={slide.img}
              alt={slide.title}
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.035]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-navy/10" />
            <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-navy/75 px-4 py-2 font-heading text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur sm:left-7 sm:top-7">
              {slide.tag}
            </div>
            <p className="absolute bottom-6 left-6 hidden max-w-sm text-sm font-semibold leading-6 text-white/72 sm:block lg:bottom-8 lg:left-8">
              Practical advisory, structured documentation and end-to-end
              execution support.
            </p>
          </div>

          <div className="relative flex flex-col justify-center p-6 sm:p-9 lg:p-10 xl:p-12">
            <span
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/[0.08]"
            />
            <div key={slide.title} className="animate-in fade-in slide-in-from-bottom-3 duration-500">
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary font-heading text-base font-extrabold text-primary-foreground shadow-[0_16px_35px_-22px_rgba(0,0,0,0.8)]">
                  {slide.metric}
                </span>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">
                    {slide.eyebrow}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-white/48 sm:text-sm">
                    Focused business support
                  </p>
                </div>
              </div>

              <h3 className="max-w-xl font-heading text-2xl font-extrabold leading-[1.14] tracking-tight text-white text-balance sm:text-3xl xl:text-[2.35rem]">
                {slide.title}
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/66 sm:text-base sm:leading-8">
                {slide.desc}
              </p>
              <a href={slide.href} className="ep-button mt-7 w-fit gap-3 sm:mt-8">
                Explore service
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {slides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`group flex min-h-16 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 ${
                active === index
                  ? "border-primary bg-primary text-primary-foreground shadow-[0_15px_35px_-25px_rgba(245,186,75,0.85)]"
                  : "border-white/10 bg-white/[0.035] text-white/58 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-heading text-[0.68rem] font-extrabold ${
                  active === index
                    ? "bg-navy text-white"
                    : "bg-white/[0.06] text-primary"
                }`}
              >
                {item.metric}
              </span>
              <span className="truncate font-heading text-xs font-extrabold uppercase tracking-[0.12em]">
                {item.eyebrow}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
