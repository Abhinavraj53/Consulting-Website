import { AnimatedCounter } from "./animated-counter"
import { siteStats } from "./stats-data"

const stats = [
  siteStats.serviceOptions,
  siteStats.projectsSupported,
  siteStats.startupRecognitions,
  siteStats.coreServiceCategories,
]

const categories = [
  "Business Incorporation",
  "Funding Assistance",
  "Compliances",
  "Registrations",
  "Certifications",
  "Tax Filing",
  "Digital Marketing",
  "Epeno Special Package",
]

export function Partners() {
  return (
    <section className="ep-section bg-background">
      <div className="ep-container grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="ep-eyebrow">
            The Epeno stack
          </p>
          <h2 className="ep-title mt-4">
            Not just services. A sequence built for business momentum.
          </h2>
          <p className="ep-copy mt-6 max-w-xl">
            Epeno brings registrations, certifications, tax filings,
            compliances, funding assistance and digital marketing into one
            dependable advisory experience.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group ep-card relative overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:bg-navy hover:shadow-[0_26px_70px_-38px_rgba(16,47,88,0.68)]"
            >
              <span
                aria-hidden="true"
                className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/15 transition-transform duration-500 group-hover:scale-[2.4]"
              />
              <p className="relative font-heading text-4xl font-extrabold text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-[1.04]">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="relative mt-2 text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-white">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <div
                key={category}
                className="group flex cursor-default items-center gap-3 rounded-full border border-border bg-secondary px-5 py-3 text-sm font-bold text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_14px_34px_-20px_rgba(16,47,88,0.6)]"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-primary transition-all duration-300 group-hover:scale-125 group-hover:bg-navy" />
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
