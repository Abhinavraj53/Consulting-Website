import { TrendingUp, Globe } from "lucide-react"
import { AnimatedCounter } from "./animated-counter"
import { siteStats } from "./stats-data"

export function About() {
  return (
    <section id="about" className="ep-section relative overflow-hidden bg-background">
      <div className="ep-container grid items-center gap-20 lg:grid-cols-2">
        {/* Why: a strict two-column split creates a calm credibility section after the expressive hero. */}
        <div>
          <p className="ep-eyebrow mb-4">
            Who we are
          </p>
          <h2 className="ep-title">
            Epeno Advisory Private Limited
          </h2>
          <p className="ep-copy mt-7 max-w-xl">
            Epeno Advisory Private Limited is a dynamic business consultancy
            firm dedicated to helping startups and established businesses thrive
            in today&apos;s competitive market.
          </p>
          <p className="ep-copy mt-4 max-w-xl">
            Our team offers expert guidance on government compliance, legal
            frameworks, strategic planning and financial management so clients
            can focus on growing and innovating.
          </p>

          <div className="mt-8">
            <p className="font-heading text-lg font-bold text-foreground">
              सोच हमारी, कामयाबी आपकी
            </p>
            <p className="text-sm text-muted-foreground">
              Business setup, compliance, funding and growth support under one
              roof.
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src="/consua-about.jpg"
            alt="Epeno Advisory consultant at work"
            className="ml-auto aspect-[4/5] w-full max-w-lg rounded-3xl object-cover shadow-[0_28px_90px_-58px_rgba(16,47,88,0.75)]"
          />
          <div className="ep-card absolute -bottom-10 left-0 w-80 space-y-6 bg-white/95 p-8 text-foreground backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <TrendingUp className="h-6 w-6" />
              </span>
              <div>
                <p className="font-heading text-3xl font-extrabold leading-none text-navy">
                  <AnimatedCounter end={siteStats.clientSatisfaction.value} suffix={siteStats.clientSatisfaction.suffix} />
                </p>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">
                  {siteStats.clientSatisfaction.label}
                </p>
              </div>
            </div>
            <div className="h-px bg-border" />
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Globe className="h-6 w-6" />
              </span>
              <div>
                <p className="font-heading text-3xl font-extrabold leading-none text-navy">
                  <AnimatedCounter end={siteStats.serviceOptions.value} suffix={siteStats.serviceOptions.suffix} />
                </p>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">
                  {siteStats.serviceOptions.label}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
