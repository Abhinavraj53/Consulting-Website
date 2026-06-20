import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowRight, CalendarDays, Mail, Phone } from "lucide-react"
import { Footer } from "@/components/consua/footer"
import { Header } from "@/components/consua/header"
import { getPolicy, policies } from "@/lib/policies"
import { policyLinks, siteDetails } from "@/lib/site"

type PolicyPageProps = {
  params: Promise<{ policy: string }>
}

export function generateStaticParams() {
  return policies.map((policy) => ({ policy: policy.slug }))
}

export async function generateMetadata({ params }: PolicyPageProps): Promise<Metadata> {
  const policy = getPolicy((await params).policy)
  if (!policy) return { title: "Page Not Found | Epeno Advisory" }
  return {
    title: `${policy.title} | Epeno Advisory`,
    description: policy.intro,
  }
}

export default async function PolicyPage({ params }: PolicyPageProps) {
  const policy = getPolicy((await params).policy)
  if (!policy) notFound()

  return (
    <main className="overflow-x-hidden bg-background">
      <Header />

      <section className="relative overflow-hidden bg-navy pb-16 pt-32 text-white sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(245,186,75,0.2),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.12),transparent_24%)]" />
        <div className="ep-container relative">
          <p className="ep-eyebrow">Company Policies</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {policy.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
            {policy.intro}
          </p>
          {policy.updated && (
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm text-white/75">
              <CalendarDays className="h-4 w-4 text-primary" />
              Last updated: {policy.updated}
            </p>
          )}
        </div>
      </section>

      <section className="ep-section">
        <div className="ep-container grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
          <article className="ep-card min-w-0 p-6 sm:p-8 lg:p-12">
            <div className="space-y-10">
              {policy.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-heading text-2xl font-extrabold leading-tight text-foreground sm:text-3xl">
                    {section.heading}
                  </h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mt-4 text-base leading-8 text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                  {section.items && (
                    <ul className="mt-5 grid gap-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3 leading-7 text-muted-foreground">
                          <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-28">
            <div className="ep-card p-5">
              <p className="ep-eyebrow">All Policies</p>
              <nav className="mt-4 grid gap-2">
                {policyLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={item.href === `/${policy.slug}` ? "page" : undefined}
                    className={`flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                      item.href === `/${policy.slug}`
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground hover:bg-accent"
                    }`}
                  >
                    {item.label}
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="rounded-2xl bg-navy p-6 text-white">
              <p className="ep-eyebrow">Need clarification?</p>
              <h2 className="mt-3 font-heading text-xl font-extrabold">
                Contact Epeno
              </h2>
              <div className="mt-5 grid gap-3">
                <a href={siteDetails.phoneHref} className="flex items-center gap-3 text-sm text-white/75 hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" />
                  {siteDetails.phoneDisplay}
                </a>
                <a href={siteDetails.emailHref} className="flex items-center gap-3 text-sm text-white/75 hover:text-primary">
                  <Mail className="h-4 w-4 text-primary" />
                  {siteDetails.email}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  )
}
