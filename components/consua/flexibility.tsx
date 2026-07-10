"use client"

import { BadgeCheck, ClipboardCheck, FileText, HandCoins, ShieldCheck } from "lucide-react"
import { AnimatedCounter } from "./animated-counter"
import { siteStats } from "./stats-data"

const metrics = [
  siteStats.processSupport,
  siteStats.clientFocus,
  siteStats.serviceOptions,
]

const features = [
  {
    icon: HandCoins,
    title: "Government Benefits",
    text: "We map relevant schemes, grants, certifications, tax benefits and funding routes for your business profile.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Support",
    text: "ROC filings, GST returns, audit reports, annual compliances and regulatory documentation handled with structure.",
  },
  {
    icon: ShieldCheck,
    title: "Registrations & Certifications",
    text: "Startup India, MSME, ISO, GeM, trademark, GST, PF, ESIC and sector-specific registrations managed end to end.",
  },
  {
    icon: FileText,
    title: "Documentation Desk",
    text: "Pitch decks, DPRs, financial projections, application files and follow-up documents prepared professionally.",
  },
]

const checkpoints = [
  "Dedicated advisory owner",
  "Clear document checklist",
  "Timeline and status visibility",
]

export function Flexibility() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="grid max-w-none lg:grid-cols-[0.48fr_0.52fr]">
        <div className="relative bg-navy px-4 py-16 text-white sm:px-6 sm:py-20 lg:min-h-[720px] lg:py-32 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-28 lg:[clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]">
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
          />
          <div className="relative max-w-xl">
            <p className="ep-eyebrow mb-5">Why files move with Epeno</p>
            <h2 className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-white text-balance md:text-5xl">
              Every missed detail has a cost. We build the checklist before it does.
            </h2>
            <p className="mt-7 text-lg leading-8 text-white/70">
              From choosing the right registration to applying for benefits,
              we turn complex business paperwork into a guided, transparent
              execution plan.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 min-[420px]:grid-cols-3 sm:mt-12">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/[0.1]"
                >
                  <p className="font-heading text-3xl font-extrabold text-primary">
                    <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-snug text-white/75">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-3">
              {checkpoints.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-bold text-white/85">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <BadgeCheck className="h-4 w-4" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative bg-background px-4 py-16 sm:px-6 sm:py-20 lg:py-32 lg:pl-20 lg:pr-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          <div
            aria-hidden="true"
            className="absolute right-16 top-16 h-32 w-32 rounded-full bg-primary/10 blur-2xl"
          />
          <div className="relative grid max-w-3xl gap-5">
            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <article key={feature.title} className="group ep-card ep-card-hover flex flex-col gap-4 p-5 min-[420px]:flex-row sm:gap-5 sm:p-6">
                  <span className="ep-icon-hover flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <Icon className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-base leading-8 text-muted-foreground">
                      {feature.text}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
