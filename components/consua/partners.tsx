const stats = [
  { value: "50+", label: "Service Options" },
  { value: "500+", label: "Projects Completed" },
  { value: "100+", label: "Startup India Recognitions" },
  { value: "8+", label: "Core Service Categories" },
]

const categories = [
  "Business Incorporation",
  "Funding Assistance",
  "Compliances",
  "Registrations",
  "Certifications",
  "Tax Filing",
  "Digital Marketing",
  "Epeno Special Package",
]

export function Partners() {
  return (
    <section className="ep-section bg-background">
      <div className="ep-container grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="ep-eyebrow">
            Service Options
          </p>
          <h2 className="ep-title mt-4">
            Empowering your business journey with tailored solutions
          </h2>
          <p className="ep-copy mt-6 max-w-xl">
            Epeno brings registrations, certifications, tax filings,
            compliances, funding assistance and digital marketing into one
            dependable advisory experience.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((stat) => (
            <div key={stat.label} className="ep-card ep-card-hover p-7">
              <p className="font-heading text-4xl font-extrabold text-primary">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <div
                key={category}
                className="rounded-full border border-border bg-secondary px-5 py-3 text-sm font-bold text-foreground"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
