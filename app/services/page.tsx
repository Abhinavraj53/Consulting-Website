import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/consua/header"
import { Footer } from "@/components/consua/footer"
import { allServices, serviceCategories } from "@/components/consua/service-data"
import { siteDetails } from "@/lib/site"

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden bg-background">
      <Header />

      <section className="relative overflow-hidden bg-navy pb-16 pt-32 text-white sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-48">
        <img
          src="/service-heroes/make-in-india.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071d38]/98 via-navy/92 to-navy/48" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-navy/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(245,186,75,0.2),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.12),transparent_25%)]" />
        <div className="ep-container relative">
          <div className="max-w-4xl">
            <p className="ep-eyebrow">Epeno Services</p>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              Business support services built for founders, MSMEs and growing companies.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
              From registration and certifications to funding, investor documents
              and compliance, Epeno keeps every step structured, transparent and
              growth-focused.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["7", "Service pillars"],
              [`${allServices.length}+`, "Business services"],
              ["1", "Documentation desk"],
              ["360°", "Founder support"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="group rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-white/[0.1]"
              >
                <p className="font-heading text-4xl font-extrabold text-primary transition-transform duration-300 group-hover:scale-105">
                  {value}
                </p>
                <p className="mt-2 text-sm font-semibold text-white/68">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="ep-container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {serviceCategories.map((category) => {
              const categoryImage = allServices.find(
                (service) => service.category === category.title,
              )

              return (
                <a
                  key={category.title}
                  href={`#${category.slug}`}
                  className="group flex min-h-[350px] min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_18px_60px_-48px_rgba(16,47,88,0.72)] transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_24px_65px_-42px_rgba(16,47,88,0.62)]"
                >
                  <span className="relative block h-44 shrink-0 overflow-hidden bg-navy">
                    {categoryImage ? (
                      <img
                        src={categoryImage.heroImage}
                        alt={`${category.title} services`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                        style={{ objectPosition: categoryImage.heroPosition }}
                      />
                    ) : null}
                    <span className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                    <span className="absolute bottom-4 left-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_14px_30px_-18px_rgba(0,0,0,0.85)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
                      <category.icon className="h-6 w-6" />
                    </span>
                    <span className="absolute bottom-4 right-4 rounded-full border border-white/20 bg-navy/65 px-3 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur-md">
                      {category.services.length} services
                    </span>
                  </span>

                  <span className="flex flex-1 flex-col p-5 sm:p-6">
                    <span className="break-words font-heading text-lg font-extrabold uppercase leading-[1.35] tracking-[-0.015em] text-foreground sm:text-xl">
                      {category.title}
                    </span>
                    <span className="mt-3 text-sm leading-6 text-muted-foreground">
                      {category.description}
                    </span>
                    <span className="mt-auto inline-flex items-center gap-2 pt-5 font-heading text-xs font-extrabold uppercase tracking-[0.1em] text-navy transition-colors group-hover:text-primary">
                      Explore category
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section className="ep-section">
        <div className="ep-container">
          <div className="max-w-3xl">
            <p className="ep-eyebrow">Complete Service Menu</p>
            <h2 className="ep-title mt-4">
              Choose the exact Epeno service your business needs.
            </h2>
          </div>

          <div className="mt-14 grid gap-12">
            {serviceCategories.map((category) => (
              <section
                key={category.title}
                id={category.slug}
                className="scroll-mt-36"
              >
                <div className="mb-7 flex flex-col justify-between gap-5 border-b border-border pb-6 md:flex-row md:items-end">
                  <div>
                    <p className="ep-eyebrow">{category.title}</p>
                    <h3 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                      {category.description}
                    </h3>
                  </div>
                  <span className="w-fit rounded-full bg-accent px-5 py-2 text-sm font-extrabold text-accent-foreground">
                    {category.services.length} Services
                  </span>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {allServices
                    .filter((service) => service.category === category.title)
                    .map((service) => (
                    <article
                      key={service.slug}
                      className="ep-card ep-card-hover group flex min-h-[430px] flex-col overflow-hidden"
                    >
                      <a
                        href={service.href}
                        className="relative block h-48 shrink-0 overflow-hidden bg-navy"
                        aria-label={`View ${service.title} details`}
                      >
                        <img
                          src={service.heroImage}
                          alt={`${service.title} service`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                          style={{ objectPosition: service.heroPosition }}
                        />
                        <span className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/5 to-transparent transition-colors duration-300 group-hover:from-navy/60" />
                        <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-navy/72 px-3 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                          <category.icon className="h-3.5 w-3.5 text-primary" />
                          {category.title}
                        </span>
                      </a>

                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex items-start gap-4">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/14 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <category.icon className="h-6 w-6" />
                          </span>
                          <div className="min-w-0">
                            <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-primary">
                              Epeno service
                            </p>
                            <h4 className="mt-1.5 break-words font-heading text-xl font-extrabold leading-snug text-foreground">
                              {service.title}
                            </h4>
                          </div>
                        </div>
                        <p className="mt-4 line-clamp-3 text-sm leading-6 text-muted-foreground">
                          Epeno helps with document preparation, eligibility
                          review, filing guidance and follow-up support for this
                          service.
                        </p>

                        <a
                          href={service.href}
                          className="mt-auto inline-flex items-center gap-2 pt-6 font-heading text-sm font-extrabold text-navy transition-colors hover:text-primary"
                        >
                          View details
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-navy py-20 text-white">
        <div className="ep-container grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="ep-eyebrow">Talk to Epeno</p>
            <h2 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Not sure which service fits your business?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
              Share your current stage and Epeno will help you identify the
              right registration, funding, certification or compliance path.
            </p>
          </div>
          <a href={siteDetails.phoneHref} className="ep-button sm:h-16 sm:px-10">
            {siteDetails.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="ep-container grid gap-4 sm:grid-cols-3">
          {["Clear documentation", "Eligibility-first advice", "End-to-end follow-up"].map(
            (item) => (
              <div key={item} className="group flex items-center gap-3 rounded-xl px-3 py-2 text-foreground transition-colors hover:bg-accent">
                <CheckCircle2 className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                <span className="font-heading font-extrabold">{item}</span>
              </div>
            ),
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
