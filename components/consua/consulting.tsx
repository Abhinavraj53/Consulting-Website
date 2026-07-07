export function Consulting() {
  return (
    <section className="relative overflow-hidden bg-secondary py-16 sm:py-20 lg:py-28">
      {/* Triangle grid pattern, top-left */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-64 w-[36rem] text-foreground/[0.06]"
        viewBox="0 0 600 260"
        fill="none"
      >
        <defs>
          <pattern
            id="tri-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path d="M0 0 L20 0 L10 17 Z" fill="currentColor" />
            <path d="M20 0 L40 0 L30 17 Z" fill="currentColor" />
            <path d="M10 17 L30 17 L20 34 Z" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="600" height="260" fill="url(#tri-grid)" />
      </svg>

      {/* Squiggly hand-drawn line, bottom-left */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-12 left-2 h-24 w-72 text-foreground/15"
        viewBox="0 0 300 90"
        fill="none"
      >
        <path
          d="M5 60 C30 20 55 20 60 45 C64 66 40 78 34 60 C29 44 60 30 80 50 C100 70 78 84 70 66 C63 50 95 38 115 56 C135 74 112 86 105 68 C98 50 135 42 158 60 C180 77 240 40 295 25"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <div className="ep-container relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: images + badge */}
        <div className="group relative pl-0 lg:pl-24">
          {/* small overlay image */}
          <img
            src="/service-heroes/financial-deck.jpg"
            alt="Financial deck and business documentation support"
            className="absolute -left-2 top-4 z-20 hidden aspect-[4/5] w-44 rounded-2xl object-cover object-[50%_28%] shadow-xl ring-8 ring-secondary transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-2 sm:block lg:-left-4"
          />
          {/* main image */}
          <img
            src="/indian-assets/indian-team-meeting.jpg"
            alt="Business consultant talking on the phone"
            className="relative z-10 ml-auto aspect-[4/5] w-full max-w-md rounded-3xl object-cover object-center shadow-2xl transition-transform duration-700 group-hover:scale-[1.025]"
          />
          {/* experience badge */}
          <div className="absolute bottom-5 left-2 z-20 flex h-28 w-28 flex-col justify-end rounded-3xl bg-primary p-3 text-primary-foreground shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-2 sm:bottom-12 sm:left-4 sm:h-40 sm:w-40 sm:p-6 lg:left-12">
            <span
              aria-hidden="true"
              className="absolute left-4 top-2 font-heading text-[4.35rem] font-bold leading-none text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.85)] sm:left-6 sm:top-3 sm:text-[5.5rem]"
            >
              15
            </span>
            <p className="relative max-w-[4.8rem] font-heading text-base font-bold leading-[1.05] sm:max-w-none sm:text-lg sm:leading-tight">
              Years experience
            </p>
          </div>
        </div>

        {/* Right: text + cards */}
        <div>
          <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground text-balance md:text-5xl">
            Expert guidance for business benefits and compliance
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Don&apos;t miss out on valuable support for your business. Epeno
            simplifies the process of accessing government benefits, funding
            options, registrations and certifications, helping your startup or
            company move forward with confidence.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <article className="group ep-soft-hover bg-card p-8 shadow-lg ring-1 ring-border">
              <TargetingIcon className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
              <h3 className="mt-6 font-heading text-xl font-bold leading-snug text-foreground">
                Funding &amp; Government Benefits
              </h3>
            </article>
            <article className="group ep-soft-hover bg-card p-8 shadow-lg ring-1 ring-border">
              <IdeasIcon className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
              <h3 className="mt-6 font-heading text-xl font-bold leading-snug text-foreground">
                Registrations &amp; Certifications
              </h3>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

function TargetingIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M24 6a18 18 0 1 0 18 18" />
      <path d="M24 6a18 18 0 0 1 18 18H24Z" />
      <circle cx="14" cy="30" r="3.5" />
      <path d="M17 27.5 27 18m0 0h-5m5 0v5" />
      <path d="M42 24l4-4m0 0h-3m3 0v3" />
    </svg>
  )
}

function IdeasIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="24" cy="12" r="6" />
      <path d="M14 40v-4a10 10 0 0 1 20 0v4" />
      <path d="M30 30l8-8m0 0h-5m5 0v5" />
    </svg>
  )
}
