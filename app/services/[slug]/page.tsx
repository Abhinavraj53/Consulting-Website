import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle2, FileText, Phone, ShieldCheck } from "lucide-react"
import { Header } from "@/components/consua/header"
import { Footer } from "@/components/consua/footer"
import {
  allServices,
  getRelatedServices,
  getServiceBySlug,
  getServiceHref,
  serviceCategories,
} from "@/components/consua/service-data"
import { siteDetails } from "@/lib/site"

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return allServices.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: "Service Not Found | Epeno Advisory",
    }
  }

  return {
    title: `${service.title} | Epeno Advisory`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const Icon = service.icon
  const relatedServices = getRelatedServices(service.category, service.slug)

  return (
    <main className="overflow-x-hidden bg-background">
      <Header />

      <section className="relative overflow-hidden bg-navy pb-16 pt-32 text-white sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(245,186,75,0.2),transparent_28%),radial-gradient(circle_at_86%_12%,rgba(255,255,255,0.13),transparent_24%)]" />
        <div className="ep-container relative grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_360px] lg:items-end">
          <div>
            <p className="ep-eyebrow">{service.category}</p>
            <h1 className="mt-5 max-w-5xl break-words font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-[4.4rem]">
              {service.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/74 md:text-xl">
              {service.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/contact" className="ep-button h-16 px-9 text-base">
                Talk to Epeno
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="/services"
                className="inline-flex h-16 items-center rounded-full border border-white/20 px-8 font-heading text-sm font-extrabold text-white transition-colors hover:border-primary hover:text-primary"
              >
                View all services
              </a>
            </div>
          </div>

          <aside className="group rounded-2xl border border-white/12 bg-white/[0.07] p-7 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.9)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.1]">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
              <Icon className="h-8 w-8" />
            </span>
            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
              Service Desk
            </p>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-white">
              Documentation-led support for better approval readiness.
            </h2>
            <div className="mt-6 grid gap-3 text-sm font-semibold text-white/72">
              <span className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Eligibility review
              </span>
              <span className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-primary" />
                Document preparation
              </span>
              <span className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary" />
                Filing follow-up
              </span>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="ep-container grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <article className="min-w-0 space-y-8">
            <section className="ep-card p-7 md:p-10">
              <p className="ep-eyebrow">Overview</p>
              <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
                Practical guidance for {service.title}
              </h2>
              <div className="mt-7 grid gap-5 text-lg leading-9 text-muted-foreground">
                <p>
                  {service.summary} Our team focuses on clarity first: what
                  applies to your business, which documents are required, and
                  how the filing should be presented.
                </p>
                <p>
                  This service page is structured like a working guide for
                  business owners. Epeno keeps the process organized from
                  eligibility review to document preparation, filing support and
                  final record management.
                </p>
              </div>
            </section>

            <section className="ep-card overflow-hidden">
              <div className="border-b border-border bg-white p-7 md:p-10">
                <p className="ep-eyebrow">Benefits</p>
                <h2 className="mt-4 font-heading text-3xl font-extrabold text-foreground">
                  Why this service matters
                </h2>
              </div>
              <div className="grid gap-0 md:grid-cols-2">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="group flex gap-4 border-b border-border/70 p-6 transition-colors duration-300 hover:bg-accent/50 md:p-7">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform group-hover:scale-110" />
                    <p className="leading-7 text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="ep-card p-7 md:p-10">
              <p className="ep-eyebrow">Documents</p>
              <h2 className="mt-4 font-heading text-3xl font-extrabold text-foreground">
                Keep these ready before you start
              </h2>
              <div className="mt-8 grid gap-4">
                {service.documents.map((document) => (
                  <div key={document} className="group flex gap-4 rounded-xl border border-transparent bg-secondary p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent">
                    <FileText className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform group-hover:scale-110" />
                    <p className="leading-7 text-muted-foreground">{document}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl bg-navy p-7 text-white shadow-[0_24px_80px_-56px_rgba(16,47,88,0.72)] md:p-10">
              <p className="ep-eyebrow">Process</p>
              <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight md:text-4xl">
                How Epeno handles your {service.title} work
              </h2>
              <div className="mt-9 grid gap-5">
                {service.process.map((step, index) => (
                  <div key={step} className="group flex gap-5 border-t border-white/10 px-3 pt-5 transition-colors hover:bg-white/[0.04]">
                    <span className="font-heading text-2xl font-extrabold text-primary transition-transform group-hover:translate-x-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="leading-7 text-white/72">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="ep-card p-7 md:p-10">
              <p className="ep-eyebrow">Questions</p>
              <h2 className="mt-4 font-heading text-3xl font-extrabold text-foreground">
                Common questions before you start
              </h2>
              <div className="mt-8 grid gap-5">
                {service.faqs.map((faq) => (
                  <div key={faq.question} className="border-b border-border pb-5 last:border-b-0 last:pb-0">
                    <h3 className="font-heading text-xl font-extrabold text-foreground">
                      {faq.question}
                    </h3>
                    <p className="mt-3 leading-7 text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {relatedServices.length > 0 && (
              <section className="ep-card p-7 md:p-10">
                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                  <div>
                    <p className="ep-eyebrow">Related Services</p>
                    <h2 className="mt-3 font-heading text-3xl font-extrabold text-foreground">
                      More from {service.category}
                    </h2>
                  </div>
                  <a href="/services" className="font-heading text-sm font-extrabold text-navy hover:text-primary">
                    All services
                  </a>
                </div>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {relatedServices.map((related) => (
                    <a key={related.slug} href={related.href} className="rounded-2xl border border-border bg-secondary p-6 transition-all hover:border-primary hover:bg-white">
                      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">
                        {related.category}
                      </p>
                      <h3 className="mt-3 font-heading text-lg font-extrabold leading-snug text-foreground">
                        {related.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {related.categoryDescription}
                      </p>
                    </a>
                  ))}
                </div>
              </section>
            )}
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28">
            <div className="ep-card overflow-hidden">
              <div className="bg-navy p-6 text-white">
                <p className="ep-eyebrow">All Services</p>
                <h2 className="mt-3 font-heading text-2xl font-extrabold">
                  Explore Epeno services
                </h2>
              </div>
              <div className="max-h-[690px] overflow-y-auto p-5">
                {serviceCategories.map((category) => (
                  <div key={category.title} className="border-b border-border py-5 first:pt-0 last:border-b-0 last:pb-0">
                    <p className="font-heading text-sm font-extrabold uppercase tracking-[0.18em] text-navy">
                      {category.title}
                    </p>
                    <div className="mt-3 grid gap-2">
                      {category.services.map((serviceTitle) => {
                        const href = getServiceHref(serviceTitle)
                        const active = href === service.href

                        return (
                          <a
                            key={serviceTitle}
                            href={href}
                            className={`group flex items-start justify-between gap-3 rounded-xl px-4 py-3 text-sm font-semibold leading-5 transition-colors ${
                              active
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-foreground hover:bg-accent hover:text-navy"
                            }`}
                          >
                            <span>{serviceTitle}</span>
                            <ArrowRight className={`mt-0.5 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${active ? "text-primary-foreground" : "text-primary"}`} />
                          </a>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-navy p-7 text-white shadow-[0_24px_80px_-56px_rgba(16,47,88,0.72)]">
              <p className="ep-eyebrow">Need Help?</p>
              <h2 className="mt-3 font-heading text-2xl font-extrabold">
                Talk to an Epeno consultant.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Share your business stage and we will suggest the right
                documentation path.
              </p>
              <a href={siteDetails.phoneHref} className="ep-button mt-6 h-14 w-full gap-3">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section id="contact" className="bg-navy py-20 text-white">
        <div className="ep-container grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="ep-eyebrow">Start with Epeno</p>
            <h2 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Need help with {service.title}?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
              Share your business stage and Epeno will guide the next practical
              step, required documents and expected workflow.
            </p>
          </div>
          <a href={siteDetails.phoneHref} className="ep-button gap-3 sm:h-16 sm:px-10">
            <Phone className="h-5 w-5" />
            Call Epeno
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
