"use client"

import { useEffect, useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
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
    fundAmount: "Rs9.20 Lakh",
    service: "Mudra Loan & Trademark",
    rating: 5,
    beforeHighlight: "When we planned our food-processing expansion, the biggest challenge was presenting the business clearly to the bank. Epeno helped us prepare a",
    afterHighlight: "file and kept every follow-up practical, so the plan felt complete and ready for the next step.",
  },
  {
    name: "Manish Rajput",
    role: "Co-founder",
    company: "Rajput Engineering Works",
    industry: "MSME Manufacturing",
    scheme: "CGTMSE",
    fundAmount: "Rs8.70 Cr",
    service: "CGTMSE Loan",
    rating: 5,
    beforeHighlight: "We needed funds for machinery but did not know how to present the credit case properly. Epeno prepared the documents for",
    afterHighlight: "support and helped us explain the machinery funding need in a way that felt professional.",
  },
  {
    name: "Shivanshu Gangwar",
    role: "Founder",
    company: "Gangwar Tech Labs",
    industry: "SaaS Startup",
    scheme: "Startup India",
    fundAmount: "Recognition",
    service: "Startup India Certificate",
    rating: 4,
    beforeHighlight: "As a young tech startup, we wanted our recognition process to be clean from day one. Epeno reviewed our details for",
    afterHighlight: "and guided the application step by step without making the process feel confusing.",
  },
  {
    name: "Krishna Yadav",
    role: "Founder",
    company: "Yadav Wellness Naturals",
    industry: "Consumer Brand",
    scheme: "Trademark + MSME",
    fundAmount: "Rs46.50 Lakh",
    service: "Trademark Registration",
    rating: 5,
    beforeHighlight: "Before approaching distributors, we wanted our brand and business identity to look credible. Epeno helped us prepare an",
    afterHighlight: "ready file, protect the brand name and keep records ready for serious business conversations.",
  },
  {
    name: "Anjali Verma",
    role: "Founder",
    company: "Verma Solar Solutions",
    industry: "Clean Energy",
    scheme: "CGSS",
    fundAmount: "Rs18.30 Cr",
    service: "CGTMSE Loan",
    rating: 5,
    beforeHighlight: "Our solar startup had orders coming in, but cash flow planning was becoming difficult. Epeno mapped our stage, explained",
    afterHighlight: "and built a funding file that connected our project need with a realistic repayment story.",
  },
  {
    name: "Nand Kishor Singh",
    role: "Director",
    company: "Singh Logistics India",
    industry: "Logistics",
    scheme: "PMMY",
    fundAmount: "Rs18.70 Lakh",
    service: "Government Loan",
    rating: 5,
    beforeHighlight: "For our logistics business, we needed a government-loan file that was simple, practical and complete. Epeno helped us prepare a",
    afterHighlight: "file, improved the projections and patiently guided each submission step.",
  },
]

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
}

function schemeLogo(scheme: string) {
  if (scheme.includes("PMFME")) {
    return {
      short: "PM",
      name: "PMFME",
      amount: "Up to Rs10 Lakh",
      logo: "/scheme-logos/pmfme.png",
      tone: "border-primary/50 bg-[#fff4dc] text-[#9b6400]",
    }
  }
  if (scheme.includes("CGTMSE")) {
    return {
      short: "CG",
      name: "CGTMSE",
      amount: "Up to Rs10 Cr",
      logo: "/scheme-logos/cgtmse.png",
      tone: "border-[#2f5f9f]/25 bg-[#eaf2ff] text-navy",
    }
  }
  if (scheme.includes("Startup")) {
    return {
      short: "SI",
      name: "Startup India",
      amount: "Recognition",
      logo: "/scheme-logos/startup-india.png",
      tone: "border-[#ff8a65]/35 bg-[#fff1ed] text-[#b44220]",
    }
  }
  if (scheme.includes("MSME")) {
    return {
      short: "MS",
      name: "MSME",
      amount: "Up to Rs50 Lakh",
      logo: "/scheme-logos/msme.jpg",
      tone: "border-[#33a263]/30 bg-[#eef8f2] text-[#176b3b]",
    }
  }
  if (scheme.includes("CGSS")) {
    return {
      short: "CS",
      name: "CGSS",
      amount: "Up to Rs20 Cr",
      logo: "",
      tone: "border-[#6b73d6]/30 bg-[#eef0ff] text-[#24318a]",
    }
  }
  if (scheme.includes("PMMY")) {
    return {
      short: "MY",
      name: "PMMY",
      amount: "Up to Rs20 Lakh",
      logo: "",
      tone: "border-primary/50 bg-[#fff7e8] text-[#965700]",
    }
  }
  return {
    short: "GO",
    name: scheme,
    amount: "",
    logo: "",
    tone: "border-border bg-secondary text-navy",
  }
}

export function Testimonial() {
  const [active, setActive] = useState(0)
  const testimonial = testimonials[active]
  const activeScheme = schemeLogo(testimonial.scheme)

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
                Success stories
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
                “{testimonial.beforeHighlight}{" "}
                <span className="inline-flex translate-y-[-0.08em] items-center gap-2 rounded-full border border-primary/45 bg-accent px-3 py-1.5 text-primary shadow-[0_12px_30px_-24px_rgba(245,186,75,0.9)]">
                  <span className="text-[0.72em] font-extrabold uppercase tracking-[0.12em]">
                    {activeScheme.name}
                  </span>
                  <span className="h-4 w-px bg-primary/40" />
                  <span className="text-[0.82em] font-extrabold text-navy">
                    {testimonial.fundAmount}
                  </span>
                </span>{" "}
                {testimonial.afterHighlight}”
              </blockquote>

              <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
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
                <span
                  className={`inline-flex w-fit items-center gap-3 rounded-full border px-3 py-2 shadow-sm transition-all duration-300 ${activeScheme.tone}`}
                  aria-label={`${activeScheme.name} scheme logo`}
                >
                  <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white p-1 shadow-inner">
                    {activeScheme.logo ? (
                      <img
                        src={activeScheme.logo}
                        alt=""
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <span className="font-heading text-[0.7rem] font-extrabold">
                        {activeScheme.short}
                      </span>
                    )}
                  </span>
                  <span className="flex flex-col leading-none">
                    <span className="font-heading text-xs font-extrabold uppercase tracking-[0.13em]">
                      {activeScheme.name}
                    </span>
                    {activeScheme.amount ? (
                      <span className="mt-1 text-[0.68rem] font-extrabold tracking-normal">
                        {activeScheme.amount}
                      </span>
                    ) : null}
                  </span>
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
