import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { policyLinks, siteDetails } from "@/lib/site"
import { Facebook, Linkedin, Instagram } from "./brand-icons"
import { Logo } from "./logo"
import { getServiceHref } from "./service-data"

const company = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "All services", href: "/services" },
  { label: "Contact us", href: "/contact" },
]

const serviceLinks = [
  { label: "Business Incorporation", href: getServiceHref("Private Limited Company") },
  { label: "Funding Assistance", href: getServiceHref("Seed Fund") },
  { label: "Startup India Certificate", href: getServiceHref("START-UP India Certificate") },
  { label: "Trademark Registration", href: getServiceHref("Trademark Registration") },
  { label: "GST Compliance", href: getServiceHref("GST Compliances") },
]

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="ep-container grid gap-10 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.25fr_0.7fr_1fr_1fr] lg:py-20">
        <div>
          <div className="inline-flex rounded-2xl bg-white px-4 py-3 text-navy">
            <Logo />
          </div>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
            Business incorporation, government funding, registrations,
            certifications and compliance support for startups and growing companies.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-white/72">
            <a href={siteDetails.phoneHref} className="flex items-center gap-3 transition-all hover:translate-x-1 hover:text-primary">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              {siteDetails.phoneDisplay}
            </a>
            <a href={siteDetails.emailHref} className="flex items-center gap-3 transition-all hover:translate-x-1 hover:text-primary">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              {siteDetails.email}
            </a>
            <a href={siteDetails.mapsHref} target="_blank" rel="noreferrer" className="flex items-start gap-3 transition-all hover:translate-x-1 hover:text-primary">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
              <span>{siteDetails.address}</span>
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-lg font-extrabold">Company</h2>
          <ul className="mt-5 grid gap-3 text-sm text-white/65">
            {company.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="inline-block transition-all hover:translate-x-1 hover:text-primary">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-lg font-extrabold">Popular Services</h2>
          <ul className="mt-5 grid gap-3 text-sm text-white/65">
            {serviceLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="inline-block transition-all hover:translate-x-1 hover:text-primary">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-lg font-extrabold">Company Policies</h2>
          <ul className="mt-5 grid gap-3 text-sm text-white/65">
            {policyLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-block transition-all hover:translate-x-1 hover:text-primary">{item.label}</a>
              </li>
            ))}
          </ul>
          <a
            href={siteDetails.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="ep-button mt-6 h-12 w-full gap-2 rounded-xl px-5"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="ep-container flex flex-col items-center justify-between gap-4 py-6 text-center text-xs text-white/55 sm:text-sm md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Epeno Advisory Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href={siteDetails.social.facebook} target="_blank" rel="noreferrer" aria-label="Epeno on Facebook" className="transition-transform hover:-translate-y-1 hover:scale-110 hover:text-primary">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={siteDetails.social.linkedin} target="_blank" rel="noreferrer" aria-label="Epeno on LinkedIn" className="transition-transform hover:-translate-y-1 hover:scale-110 hover:text-primary">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={siteDetails.social.instagram} target="_blank" rel="noreferrer" aria-label="Epeno on Instagram" className="transition-transform hover:-translate-y-1 hover:scale-110 hover:text-primary">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
