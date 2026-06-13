export function Consulting() {
  return (
    <section className="relative overflow-hidden bg-secondary py-24">
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

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left: images + badge */}
        <div className="relative pl-0 lg:pl-24">
          {/* small overlay image */}
          <img
            src="/consua-process-1.jpg"
            alt="Consultants reviewing a document together"
            className="absolute -left-2 top-4 z-20 hidden w-44 rounded-2xl object-cover shadow-xl ring-8 ring-secondary sm:block lg:-left-4"
          />
          {/* main image */}
          <img
            src="/consua-innovation.jpg"
            alt="Business consultant talking on the phone"
            className="relative z-10 ml-auto w-full max-w-md rounded-3xl object-cover shadow-2xl"
          />
          {/* experience badge */}
          <div className="absolute bottom-12 left-4 z-20 flex h-40 w-40 flex-col justify-end rounded-3xl bg-primary p-6 text-primary-foreground shadow-2xl lg:left-12">
            <span
              aria-hidden="true"
              className="absolute left-6 top-3 font-heading text-[5.5rem] font-bold leading-none text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.85)]"
            >
              15
            </span>
            <p className="relative font-heading text-lg font-bold leading-tight">
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
            <article className="bg-card p-8 shadow-lg ring-1 ring-border">
              <TargetingIcon className="h-12 w-12 text-primary" />
              <h3 className="mt-6 font-heading text-xl font-bold leading-snug text-foreground">
                Funding &amp; Government Benefits
              </h3>
            </article>
            <article className="bg-card p-8 shadow-lg ring-1 ring-border">
              <IdeasIcon className="h-12 w-12 text-primary" />
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
