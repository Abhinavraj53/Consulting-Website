import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  FileSignature,
  FileUp,
  Handshake,
  SearchCheck,
} from "lucide-react"

const steps = [
  {
    num: "01",
    icon: SearchCheck,
    title: "Share Your Requirement",
    desc: "Customer chooses a service or explains the business problem, funding need, registration or compliance issue.",
  },
  {
    num: "02",
    icon: BadgeCheck,
    title: "Expert Scheme Mapping",
    desc: "Our experts review the case and suggest the best schemes, government grants and necessary services.",
  },
  {
    num: "03",
    icon: Handshake,
    title: "Agreement & Scope",
    desc: "A clear agreement is created with service scope, responsibilities, timeline and document checkpoints.",
  },
  {
    num: "04",
    icon: ClipboardCheck,
    title: "Document Review",
    desc: "Admin team checks all papers, finds gaps and prepares required declarations, forms and support documents.",
  },
  {
    num: "05",
    icon: FileUp,
    title: "File Submission",
    desc: "The completed file is submitted to the relevant portal, bank, department or government authority.",
  },
  {
    num: "06",
    icon: FileSignature,
    title: "Official Follow-up",
    desc: "Experts and managers track status, coordinate with offices and respond to queries until the file moves ahead.",
  },
  {
    num: "07",
    icon: BadgeCheck,
    title: "Service Completed",
    desc: "Customer receives the fund, certificate, registration or selected service outcome, solving the business need.",
  },
]

export function Process() {
  return (
    <section className="ep-section relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
      />

      <div className="ep-container">
        <div className="grid items-end gap-8 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <p className="ep-eyebrow">How uncertainty becomes action</p>
            <h2 className="ep-title mt-4 max-w-xl">
              <span className="block text-foreground">
                When Bank <span className="ep-heading-strike">Rejects</span> You,
              </span>
              <span className="block text-foreground">
                We Structure <span className="ep-heading-accent">Solutions</span>
              </span>
            </h2>
          </div>
          <p className="ep-copy max-w-2xl lg:justify-self-end">
            Every service moves through a documented advisory flow, so the
            customer knows what is being checked, submitted and followed up at
            each stage.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-7xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-20 hidden h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl lg:block"
          />
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full overflow-visible lg:block"
            viewBox="0 0 1200 840"
            preserveAspectRatio="none"
          >
            <defs>
              <marker
                id="process-arrow"
                markerHeight="12"
                markerWidth="12"
                orient="auto"
                refX="10"
                refY="6"
              >
                <path d="M1,1 L11,6 L1,11" fill="none" stroke="currentColor" strokeWidth="2.4" />
              </marker>
            </defs>
            <path
              d="M-40 118
                H1040
                C1190 118 1235 200 1135 265
                H65
                C-10 265 -10 418 160 418
                H1040
                C1210 418 1235 565 1050 565
                H610
                C540 565 540 660 610 660"
              className="text-primary"
              fill="none"
              markerEnd="url(#process-arrow)"
              stroke="currentColor"
              strokeDasharray="9 9"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </svg>

          <div className="relative z-20 grid gap-6 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isLast = index === steps.length - 1

              return (
                <article
                  key={step.num}
                  className={`group relative min-h-[220px] overflow-hidden rounded-[24px] border border-border bg-card px-5 pb-6 pt-8 text-center shadow-[0_18px_50px_-34px_rgba(16,47,88,0.55)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/70 hover:bg-navy hover:shadow-[0_28px_80px_-42px_rgba(16,47,88,0.78)] sm:min-h-[235px] sm:px-7 sm:pb-8 sm:pt-8 ${
                    isLast ? "lg:col-start-2" : ""
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-3 bg-primary transition-all duration-300 group-hover:h-4 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-accent group-hover:to-primary"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-10 -translate-x-1/2 font-heading text-[5.25rem] font-extrabold leading-none text-secondary transition-all duration-300 group-hover:scale-110 group-hover:text-white/10 sm:text-[6rem]"
                  >
                    {Number(step.num)}
                  </span>

                  <div className="absolute right-5 top-6 z-20 flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-primary shadow-sm transition-all duration-300 group-hover:rotate-3 group-hover:bg-primary group-hover:text-primary-foreground sm:right-6 sm:top-7 sm:h-12 sm:w-12">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="relative z-10 mx-auto mt-24 max-w-sm sm:mt-28">
                    <h3 className="font-heading text-xl font-extrabold tracking-tight text-foreground transition-colors duration-300 group-hover:text-white sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mx-auto mt-3 text-sm leading-7 text-muted-foreground transition-colors duration-300 group-hover:text-white/78 sm:text-base">
                      {step.desc}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="mx-auto mt-5 flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-primary bg-background text-primary shadow-sm lg:hidden">
                      <ArrowRight className="h-4 w-4 rotate-90" />
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
