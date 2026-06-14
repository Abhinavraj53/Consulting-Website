import type { Metadata } from "next"
import { ArrowRight, BadgeCheck, Building2, CheckCircle2, HandCoins, Megaphone, ShieldCheck } from "lucide-react"
import { Header } from "@/components/consua/header"
import { Footer } from "@/components/consua/footer"
import { AnimatedCounter } from "@/components/consua/animated-counter"
import { primaryStats } from "@/components/consua/stats-data"

export const metadata: Metadata = {
  title: "About Us | Epeno Advisory",
  description:
    "Learn about Epeno Advisory Private Limited, a Noida-based business consultancy supporting startups and growing businesses with funding, compliance, registrations, certifications and digital marketing.",
}

const strengths = [
  {
    icon: Building2,
    title: "Comprehensive Business Services",
    text: "From incorporation and registration to funding readiness, compliance and growth support, Epeno keeps essential business work under one roof.",
  },
  {
    icon: HandCoins,
    title: "Government Funding Access",
    text: "We help businesses understand suitable government grants, loan schemes and funding pathways with clear eligibility and documentation support.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Expertise",
    text: "Our team supports registrations, certifications and recurring compliance work so companies can operate with cleaner records and fewer avoidable delays.",
  },
  {
    icon: Megaphone,
    title: "Startup-Centric Growth Support",
    text: "Epeno works closely with startups and small businesses that need practical guidance, sharper documentation and execution-focused advisory.",
  },
]

const focusAreas = [
  "Business Incorporation",
  "Funding Assistance",
  "Registrations",
  "Certifications",
  "Compliances",
  "Tax Filing",
  "Digital Marketing",
  "Epeno Special Package",
]

export default function AboutUsPage() {
  return (
    <main className="overflow-x-hidden bg-background">
      <Header />

      <section className="relative overflow-hidden bg-navy pb-20 pt-44 text-white md:pb-28 md:pt-52">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(245,186,75,0.2),transparent_28%),radial-gradient(circle_at_84%_12%,rgba(255,255,255,0.12),transparent_24%)]" />
        <div className="ep-container relative grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_380px] lg:items-end">
          <div>
            <p className="ep-eyebrow">About Epeno</p>
            <h1 className="mt-5 max-w-5xl font-heading text-4xl font-extrabold leading-[1.04] tracking-tight text-balance md:text-6xl lg:text-[4.6rem]">
              Trusted guidance for startups and growing businesses.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/74 md:text-xl">
              Epeno Advisory Private Limited helps entrepreneurs simplify the
              complex parts of business growth, including incorporation,
              funding, registrations, certifications, compliance and digital
              growth support.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/services" className="ep-button h-16 gap-3 px-9 text-base">
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-16 items-center rounded-full border border-white/20 px-8 font-heading text-sm font-extrabold text-white transition-colors hover:border-primary hover:text-primary"
              >
                Contact Epeno
              </a>
            </div>
          </div>

          <aside className="rounded-2xl border border-white/12 bg-white/[0.07] p-7 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.9)] backdrop-blur">
            <p className="font-heading text-lg font-extrabold text-primary">
              सोच हमारी, कामयाबी आपकी
            </p>
            <p className="mt-5 text-sm leading-7 text-white/72">
              Business setup, government benefits, compliance and growth
              advisory designed for founders who want clarity and execution.
            </p>
            <div className="mt-7 grid gap-3 text-sm font-semibold text-white/78">
              {["Funding guidance", "Compliance support", "Digital growth"].map((item) => (
                <span key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="ep-section bg-secondary">
        <div className="ep-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <img
              src="/consua-about.jpg"
              alt="Epeno Advisory team consultation"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[0_28px_90px_-58px_rgba(16,47,88,0.75)]"
            />
            <div className="absolute -bottom-8 left-6 right-6 rounded-2xl border border-border bg-white p-6 shadow-[0_24px_80px_-56px_rgba(16,47,88,0.7)]">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">
                Epeno Advisory Private Limited
              </p>
              <p className="mt-2 font-heading text-xl font-extrabold text-navy">
                Built to simplify business growth.
              </p>
            </div>
          </div>

          <div>
            <p className="ep-eyebrow">Who We Are</p>
            <h2 className="ep-title mt-4">
              A business consultancy focused on clarity, compliance and growth.
            </h2>
            <div className="mt-7 grid gap-5 text-lg leading-9 text-muted-foreground">
              <p>
                Epeno Advisory Private Limited is a business consultancy firm
                dedicated to helping startups, MSMEs and established companies
                move through important growth stages with confidence.
              </p>
              <p>
                Our work combines government compliance knowledge, legal and
                registration guidance, funding preparation, strategic planning,
                financial documentation and digital marketing support. The aim is
                simple: reduce confusion so business owners can focus on
                building, improving and scaling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ep-section bg-background">
        <div className="ep-container grid gap-8 lg:grid-cols-2">
          <article className="ep-card p-8 md:p-10">
            <p className="ep-eyebrow">Mission</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold text-foreground">
              Empower businesses with complete support.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Our mission is to support startups and small businesses with
              funding guidance, compliance assistance and digital growth
              services, helping them handle growth obstacles with a practical,
              step-by-step approach.
            </p>
          </article>

          <article className="ep-card p-8 md:p-10">
            <p className="ep-eyebrow">Vision</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold text-foreground">
              Become the advisory partner businesses trust.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Our vision is to be an all-in-one advisory partner for emerging
              Indian businesses by simplifying access to resources, guidance and
              funding pathways that support sustainable growth and innovation.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-navy py-24 text-white md:py-32">
        <div className="ep-container">
          <div className="max-w-3xl">
            <p className="ep-eyebrow">Why Choose Us</p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              End-to-end support for businesses that want momentum.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {strengths.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-7">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-heading text-2xl font-extrabold">
                  {item.title}
                </h3>
                <p className="mt-4 leading-8 text-white/70">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ep-section bg-secondary">
        <div className="ep-container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {primaryStats.map((stat) => (
              <div key={stat.label} className="ep-card p-7 text-center">
                <p className="font-heading text-5xl font-extrabold text-navy">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-border bg-white p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="ep-eyebrow">Focus Areas</p>
                <h2 className="mt-4 font-heading text-3xl font-extrabold text-foreground">
                  Services built around business essentials.
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {focusAreas.map((area) => (
                  <span key={area} className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-foreground">
                    <BadgeCheck className="h-4 w-4 text-primary" />
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-navy py-20 text-white">
        <div className="ep-container grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="ep-eyebrow">Reach Out To Us</p>
            <h2 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Ready to simplify your business journey?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
              Visit us at A-451, Tower - A, IThum Heights, Sector 62, Noida -
              201301, or speak with Epeno for consultation.
            </p>
          </div>
          <a href="tel:+919211831649" className="ep-button h-16 gap-3 px-10">
            +91 9211831649
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
