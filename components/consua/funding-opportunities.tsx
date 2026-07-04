import {
  ArrowUpRight,
  BadgeIndianRupee,
  Building2,
  CheckCircle2,
  HandCoins,
  Landmark,
  Leaf,
  ShieldCheck,
  Sprout,
  TrendingUp,
  Wheat,
} from "lucide-react"

const fundingSchemes = [
  {
    title: "CGSS",
    amount: "Up to Rs20 Crore",
    icon: ShieldCheck,
    bullets: [
      "Credit Guarantee Scheme for Startups support",
      "Collateral-free debt funding file guidance",
    ],
  },
  {
    title: "CGTMSE",
    amount: "Up to Rs5 Crore",
    icon: TrendingUp,
    bullets: [
      "Collateral-free working capital support",
      "Helpful for MSMEs planning credit expansion",
    ],
  },
  {
    title: "NAIFF",
    amount: "Up to Rs2 Crore",
    icon: Leaf,
    bullets: [
      "Agriculture infrastructure financing guidance",
      "Project file support for eligible agri businesses",
    ],
  },
  {
    title: "SSS",
    amount: "Up to Rs1 Crore",
    icon: BadgeIndianRupee,
    bullets: [
      "Seed Support Scheme application assistance",
      "Funding route for early-stage startup growth",
    ],
  },
  {
    title: "SISFS",
    amount: "Up to Rs50 Lakh",
    icon: Sprout,
    bullets: [
      "Startup India Seed Fund Scheme support",
      "Documentation for prototype and market-entry needs",
    ],
  },
  {
    title: "PMEGP",
    amount: "Up to Rs50 Lakh",
    icon: Landmark,
    bullets: [
      "Employment-generation loan application support",
      "Credit-linked subsidy guidance for micro enterprises",
    ],
  },
  {
    title: "MSME Loan",
    amount: "Up to Rs50 Lakh",
    icon: Building2,
    bullets: [
      "Loan planning for micro, small and medium enterprises",
      "Bank-ready documents and eligibility review",
    ],
  },
  {
    title: "PMFME",
    amount: "Up to Rs10 Lakh",
    icon: Wheat,
    bullets: [
      "Micro food-processing enterprise scheme support",
      "Subsidy and documentation assistance for applicants",
    ],
  },
  {
    title: "PMMY",
    amount: "Up to Rs20 Lakh",
    icon: HandCoins,
    bullets: [
      "Pradhan Mantri MUDRA Yojana guidance",
      "Collateral-free loan support for small businesses",
    ],
  },
]

export function FundingOpportunities() {
  return (
    <section className="ep-section bg-background">
      <div className="ep-container">
        <a href="/services#funding-solutions" className="group/section block">
          <div className="mb-9 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="ep-eyebrow inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 fill-primary text-primary-foreground" />
                Funding opportunities
              </p>
              <h2 className="mt-4 max-w-4xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Funding support for every stage of{" "}
                <span className="text-primary">your business</span>
              </h2>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-5 py-3 font-heading text-sm font-extrabold text-navy shadow-[0_18px_48px_-34px_rgba(16,47,88,0.55)] transition-all duration-300 group-hover/section:-translate-y-0.5 group-hover/section:border-primary group-hover/section:bg-primary group-hover/section:text-primary-foreground">
              Explore services
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/section:-translate-y-0.5 group-hover/section:translate-x-0.5" />
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {fundingSchemes.map((scheme) => {
              const Icon = scheme.icon

              return (
                <article
                  key={scheme.title}
                  className="group/card overflow-hidden rounded-2xl border border-border/80 bg-white shadow-[0_22px_70px_-52px_rgba(16,47,88,0.65)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_28px_80px_-46px_rgba(16,47,88,0.75)]"
                >
                  <div className="flex min-h-16 flex-col items-start justify-between gap-3 bg-navy p-3 text-white min-[420px]:flex-row min-[420px]:items-center">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-primary transition-all duration-300 group-hover/card:bg-primary group-hover/card:text-primary-foreground">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="break-words font-heading text-lg font-extrabold tracking-wide sm:text-xl">
                        {scheme.title}
                      </h3>
                    </div>
                    <span className="w-full shrink-0 rounded-xl bg-primary px-3 py-2 text-center font-heading text-xs font-extrabold text-primary-foreground shadow-[inset_0_-12px_22px_-18px_rgba(16,47,88,0.9)] min-[420px]:w-auto sm:text-sm">
                      {scheme.amount}
                    </span>
                  </div>

                  <div className="space-y-4 p-5">
                    {scheme.bullets.map((bullet) => (
                      <p
                        key={bullet}
                        className="flex gap-3 text-sm font-medium leading-6 text-foreground sm:text-base"
                      >
                        <HandCoins className="mt-1 h-4 w-4 shrink-0 text-primary" />
                        <span>{bullet}</span>
                      </p>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </a>
      </div>
    </section>
  )
}
