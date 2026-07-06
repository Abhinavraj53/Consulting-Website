import type { Metadata } from "next"
import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react"
import { ContactForm } from "@/components/consua/contact-form"
import { Footer } from "@/components/consua/footer"
import { Header } from "@/components/consua/header"
import { siteDetails } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact Us | Epeno Advisory",
  description:
    "Contact Epeno Advisory for business incorporation, funding, government schemes, registrations, certifications and compliance support.",
}

const contactCards = [
  {
    icon: Phone,
    label: "Call for consultation",
    value: siteDetails.phoneDisplay,
    href: siteDetails.phoneHref,
  },
  {
    icon: Mail,
    label: "Email our team",
    value: siteDetails.email,
    href: siteDetails.emailHref,
  },
  {
    icon: MessageCircle,
    label: "Chat on WhatsApp",
    value: "Start a conversation",
    href: siteDetails.whatsappHref,
    external: true,
  },
]

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden bg-background">
      <Header />

      <section className="relative overflow-hidden bg-navy pb-20 pt-44 text-white sm:pt-48 lg:pb-24 lg:pt-56">
        <img
          src="/consua-project.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
        />
        <div className="absolute inset-0 bg-navy/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071d38]/98 via-navy/92 to-navy/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/88 via-transparent to-navy/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(245,186,75,0.22),transparent_31%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.12),transparent_25%)]" />
        <div className="ep-container relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div>
            <p className="ep-eyebrow">Contact Epeno</p>
            <h1 className="mt-5 max-w-4xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s simplify your next business move.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Tell us where your business stands today. Our team will help you
              identify the right registration, funding, certification or
              compliance path.
            </p>
          </div>

          <div className="rounded-2xl border border-white/12 bg-white/[0.07] p-6 backdrop-blur">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Clock3 className="h-6 w-6" />
              </span>
              <div>
                <p className="font-heading text-lg font-extrabold">Quick response</p>
                <p className="mt-2 text-sm leading-6 text-white/68">
                  Call or WhatsApp for the fastest consultation response during
                  business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ep-section bg-secondary">
        <div className="ep-container">
          <div className="grid gap-4 md:grid-cols-3">
            {contactCards.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="group ep-card ep-card-hover flex items-center gap-4 p-5 sm:p-6"
              >
                <span className="ep-icon-hover flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="mt-1 block break-words font-heading text-base font-extrabold text-foreground">
                    {item.value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
            <div className="ep-card p-6 sm:p-8 lg:p-10">
              <p className="ep-eyebrow">Send an enquiry</p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-foreground">
                How can we help your business?
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                Submit the form and your enquiry will be saved securely for the
                Epeno consultation team to review.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <aside className="space-y-6">
              <div className="overflow-hidden rounded-2xl bg-navy p-7 text-white shadow-[0_26px_80px_-50px_rgba(16,47,88,0.75)] sm:p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <MapPin className="h-7 w-7" />
                </span>
                <p className="mt-6 ep-eyebrow">Visit our office</p>
                <h2 className="mt-3 font-heading text-2xl font-extrabold">
                  Epeno Advisory, Noida
                </h2>
                <p className="mt-4 leading-8 text-white/70">
                  {siteDetails.address}
                </p>
                <a
                  href={siteDetails.mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="ep-button mt-7 w-full"
                >
                  Get directions
                </a>
              </div>

              <div className="ep-card p-6 sm:p-7">
                <p className="font-heading text-xl font-extrabold text-foreground">
                  Before you contact us
                </p>
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted-foreground">
                  <li>Keep your business registration details available.</li>
                  <li>Share your current business stage and required timeline.</li>
                  <li>Mention the scheme, loan or registration if already identified.</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
