export function Innovation() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        {/* Left text */}
        <div>
          <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance">
            Reach out today for business growth support
          </h2>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="font-heading text-lg font-bold">
                Funding Assistance
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-navy-foreground/70">
                Apply for government grants and loans with documentation,
                eligibility checks and guided support from our advisory team.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold">
                Digital Marketing
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-navy-foreground/70">
                Build your online presence with website development, graphic
                design, social media management and lead generation services.
              </p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="relative">
          <img
            src="/consua-innovation.jpg"
            alt="Epeno Advisory consultant on the phone"
            className="w-full rounded-sm object-cover shadow-xl"
          />
          <span className="pointer-events-none absolute bottom-6 right-6 font-heading text-5xl font-bold uppercase tracking-widest text-white/10">
            Epeno
          </span>
        </div>
      </div>
    </section>
  )
}
