"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, Check } from "lucide-react"

const rotatingBenefits = [
  "Government Benefits?",
  "Funding Benefits?",
  "Marketing Benefits?",
  "Certifications?",
]

export function Hero() {
  const [activeBenefit, setActiveBenefit] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveBenefit((current) => (current + 1) % rotatingBenefits.length)
    }, 2600)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#f8f6f2] text-foreground">
      {/* Why: restrained texture adds depth without competing with the headline. */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-[58%] opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(60deg, rgba(18,52,95,0.12) 0 1px, transparent 1px), linear-gradient(120deg, rgba(18,52,95,0.08) 0 1px, transparent 1px)",
          backgroundSize: "180px 180px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute left-[-7%] top-[20%] hidden h-[560px] w-[520px] bg-white/60 lg:block"
        style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
      />

      {/* Why: the portrait gets a single calm brand panel instead of noisy shapes. */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 top-[136px] hidden w-[43%] bg-gradient-to-br from-primary/25 via-primary/55 to-primary/90 lg:block"
        style={{ clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 100%, 0 35%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-[30%] top-[136px] hidden w-[16%] bg-white/70 lg:block"
        style={{ clipPath: "polygon(58% 0, 100% 0, 42% 100%, 0 100%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[8%] right-[5%] hidden h-[58%] w-[28%] rounded-[2rem] bg-navy/10 blur-2xl lg:block"
      />

      <div className="ep-container relative grid min-h-[100svh] items-center gap-8 pb-0 pt-28 sm:pt-32 lg:grid-cols-[0.94fr_1.06fr] lg:pb-0 lg:pt-40">
        <div className="relative z-20 max-w-xl xl:max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2.5 font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-foreground sm:mb-6 sm:text-sm sm:tracking-[0.2em]">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Check className="h-3.5 w-3.5" />
            </span>
            सोच हमारी, कामयाबी आपकी
          </p>

          <h1 className="font-heading text-[2.15rem] font-extrabold leading-[1.1] tracking-[-0.035em] text-[#05070c] text-balance sm:text-[2.85rem] lg:text-[3.15rem] xl:text-[3.45rem] 2xl:text-[3.7rem]">
            Are You Maximizing Your Company&apos;s
            <span className="mt-2 grid min-h-[2.2em] overflow-hidden text-primary sm:min-h-[1.15em]">
              <span
                key={rotatingBenefits[activeBenefit]}
                className="animate-in fade-in slide-in-from-bottom-3 duration-500"
              >
                {rotatingBenefits[activeBenefit]}
              </span>
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#101318] sm:mt-6 sm:text-lg sm:leading-8 xl:text-xl">
            Unlock the right opportunities for your business with expert,
            documentation-led support.
            <strong className="mt-1 block font-heading text-base font-extrabold text-foreground sm:text-lg">
              सोच हमारी, कामयाबी आपकी
            </strong>
          </p>

          <div className="mt-7 sm:mt-8">
            <a href="/services" className="ep-button gap-3 sm:h-14 sm:px-8 sm:text-base">
              Grow with us
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative z-10 mt-2 flex min-h-[300px] items-end justify-center sm:min-h-[430px] lg:pointer-events-none lg:absolute lg:bottom-0 lg:-right-6 lg:mt-0 lg:min-h-0 lg:w-[54%] lg:justify-end xl:-right-2">
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-[4%] z-0 hidden h-[68%] w-[72%] bg-white/35 lg:block"
            style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%, 0 22%)" }}
          />
          <img
            src="/epeno-hero-woman.png"
            alt="Financial consultant"
            className="relative z-10 h-auto w-[min(82vw,430px)] translate-y-0 object-contain drop-shadow-[0_28px_38px_rgba(18,52,95,0.18)] sm:w-[min(76vw,520px)] lg:w-[560px] xl:w-[610px] 2xl:w-[640px]"
          />
        </div>
      </div>
    </section>
  )
}
