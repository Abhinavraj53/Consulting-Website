import { ArrowUpRight, Check, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8f6f2] text-foreground">
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

      <div className="ep-container relative grid min-h-screen items-center gap-10 pb-20 pt-44 lg:grid-cols-[0.94fr_1.06fr] lg:pb-0 lg:pt-36">
        <div className="relative z-20 max-w-2xl">
          <p className="mb-8 inline-flex items-center gap-3 font-heading text-sm font-extrabold uppercase tracking-[0.24em] text-foreground">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Check className="h-3.5 w-3.5" />
            </span>
            सोच हमारी, कामयाबी आपकी
          </p>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-[#05070c] text-balance md:text-5xl lg:text-[4rem]">
            Are You Maximizing Your Company&apos;s
            <br />
            <span className="text-primary">Government Benefits?</span>
          </h1>

          <p className="mt-8 max-w-2xl text-[1.35rem] leading-[1.55] text-[#101318] md:text-[1.5rem]">
            Funding Benefits? Marketing Benefits? Certifications?
            <br />
            <strong>सोच हमारी, कामयाबी आपकी</strong>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-7">
            <button className="ep-button h-16 gap-3 px-9 text-lg">
              Grow with us
              <ArrowUpRight className="h-5 w-5" />
            </button>
            <button className="inline-flex items-center gap-4 font-heading text-sm font-extrabold uppercase tracking-[0.2em] text-foreground transition-colors hover:text-primary">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-foreground">
                <Play className="ml-1 h-6 w-6 fill-current" />
              </span>
              Introduction
            </button>
          </div>
        </div>

        <div className="relative z-10 mt-10 flex min-h-[520px] items-end justify-center lg:pointer-events-none lg:absolute lg:bottom-0 lg:-right-6 lg:mt-0 lg:min-h-0 lg:w-[54%] lg:justify-end xl:-right-2">
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-[4%] z-0 hidden h-[68%] w-[72%] bg-white/35 lg:block"
            style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%, 0 22%)" }}
          />
          <img
            src="/epeno-hero-woman.png"
            alt="Financial consultant"
            className="relative z-10 h-auto w-[min(88vw,560px)] translate-y-0 object-contain drop-shadow-[0_28px_38px_rgba(18,52,95,0.18)] lg:w-[560px] xl:w-[610px] 2xl:w-[640px]"
          />
        </div>
      </div>
    </section>
  )
}
