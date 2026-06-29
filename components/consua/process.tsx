import { ArrowRight, CalendarCheck, FileCheck2, SearchCheck } from "lucide-react"

const steps = [
  {
    num: "01",
    icon: SearchCheck,
    img: "/indian-assets/indian-team-meeting.jpg",
    title: "Pick a Service",
    desc: "Choose the right advisory track for compliance, funding, registration or growth.",
  },
  {
    num: "02",
    icon: CalendarCheck,
    img: "/indian-assets/indian-founder-laptop.jpg",
    title: "Book an Appointment",
    desc: "Meet our team over phone, video or in person to clarify scope and timeline.",
  },
  {
    num: "03",
    icon: FileCheck2,
    img: "/indian-assets/indian-businesswoman-office.jpg",
    title: "Get It Done",
    desc: "We manage documentation, filings and follow-ups while you focus on business.",
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
            <p className="ep-eyebrow">How we work</p>
            <h2 className="ep-title mt-4 max-w-xl">
              A precise process for getting expert support
            </h2>
          </div>
          <p className="ep-copy max-w-2xl lg:justify-self-end">
            A premium advisory experience should feel clear from the first
            conversation. Each step is structured, documented and easy to track.
          </p>
        </div>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[88px] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <article
                  key={step.num}
                  className="group ep-card ep-card-hover relative overflow-hidden p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="relative">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="h-28 w-28 rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute -bottom-3 -right-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary font-heading text-sm font-extrabold text-primary-foreground ring-4 ring-card transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                        {step.num}
                      </span>
                    </div>

                    <span className="ep-icon-hover flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                  </div>

                  <div className="mt-10">
                    <h3 className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="absolute right-6 top-[86px] hidden h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-primary shadow-sm lg:flex">
                      <ArrowRight className="h-4 w-4" />
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
