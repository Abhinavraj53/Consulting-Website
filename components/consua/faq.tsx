"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Which business services does Epeno provide?",
    answer:
      "Epeno supports business incorporation, funding assistance, registrations, certifications, tax filing, digital marketing and ongoing compliances for startups and established companies.",
  },
  {
    question: "Can Epeno help with government benefits and loans?",
    answer:
      "Yes. The team helps businesses understand eligibility, prepare documents and apply for government grants, government loans and other startup or MSME benefits.",
  },
  {
    question: "Where is Epeno Advisory located?",
    answer:
      "Epeno Advisory Private Limited is based at A-451, Tower - A, IThum Heights, Sector 62, near Noida Electronic City Metro Station, Noida, Uttar Pradesh.",
  },
]

function DotGrid({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <div className="grid grid-cols-7 gap-1.5">
        {Array.from({ length: 49 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-primary" />
        ))}
      </div>
    </div>
  )
}

export function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      {/* Red liquid blob bottom-left */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -left-10 w-[420px] text-primary"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          fill="currentColor"
          fillOpacity="0.18"
          d="M0 180c40-50 90-30 140-60s60-90 120-70 90 80 80 140-70 100-140 110-130 20-180-30S-40 230 0 180Z"
        />
        <path
          fill="currentColor"
          fillOpacity="0.35"
          d="M0 240c30-40 80-20 120-50s50-70 100-55 70 70 60 120-60 80-120 88-110 10-150-30S-20 280 0 240Z"
        />
        <path
          fill="currentColor"
          d="M0 300c25-30 60-15 95-38s35-55 80-44 55 55 47 95-50 62-95 68-90 6-122-26S-15 330 0 300Z"
        />
        <circle cx="120" cy="250" r="14" fill="none" stroke="currentColor" strokeWidth="6" />
        <circle cx="220" cy="320" r="9" fill="currentColor" />
      </svg>

      {/* Dot grids */}
      <DotGrid className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 md:block" />
      <DotGrid className="pointer-events-none absolute bottom-16 left-1/2 hidden -translate-x-1/2 md:block" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left: content */}
        <div className="relative">
          {/* Light blue circle behind heading */}
          <div
            aria-hidden="true"
            className="absolute -left-6 -top-10 -z-10 h-44 w-44 rounded-full bg-secondary"
          />
          <p className="mb-3 text-sm font-bold uppercase tracking-widest">
            <span className="bg-gradient-to-r from-primary to-navy bg-clip-text text-transparent">
              Basic FAQ
            </span>
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight text-foreground text-balance md:text-5xl">
            Common Questions
            <br />
            about Epeno
          </h2>

          <div className="mt-10 flex flex-col gap-5">
            {faqs.map((faq, i) => {
              const isOpen = open === i
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-transparent bg-card shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_18px_50px_-24px_rgba(16,47,88,0.4)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors ${
                      isOpen
                        ? "rounded-t-2xl bg-primary text-primary-foreground"
                        : "text-foreground"
                    }`}
                  >
                    <span className="font-heading text-lg font-semibold">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-7 pt-6">
                      <p className="leading-relaxed text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Right: FAQ visual */}
        <div className="relative flex justify-center lg:justify-end">
          <Image
            src="/epeno-faq-cutout.png"
            alt="Man thinking about Epeno questions"
            width={1793}
            height={1504}
            className="relative z-10 h-auto w-full max-w-2xl object-contain transition-transform duration-700 hover:-translate-y-2 hover:scale-[1.02]"
            priority={false}
          />
        </div>
      </div>
    </section>
  )
}
