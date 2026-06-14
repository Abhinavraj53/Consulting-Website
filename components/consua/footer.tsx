import { ArrowRight } from "lucide-react"
import { Facebook, Twitter, Linkedin, Instagram } from "./brand-icons"
import { Logo } from "./logo"
import { getServiceHref } from "./service-data"

const company = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Contact us", href: "/#contact" },
]
const servicesLinks = [
  { label: "Business Incorporation", href: getServiceHref("Private Limited Company") },
  { label: "Funding Assistance", href: getServiceHref("Seed Fund") },
  { label: "Certifications", href: getServiceHref("START-UP India Certificate") },
  { label: "Tax Filing", href: getServiceHref("GST Compliances") },
  { label: "Digital Marketing", href: getServiceHref("Bhaskar ID") },
]

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="ep-container grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-flex rounded-2xl bg-white px-4 py-3">
            <Logo />
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-navy-foreground/60">
            Empowering your business journey with expert guidance and tailored
            solutions for sustainable growth and success.
          </p>
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Get in Touch
            </p>
            <div className="mt-3 space-y-2 text-sm text-navy-foreground/70">
              <p>A-451, Tower - A, IThum Heights, Sector 62, Noida - 201301</p>
              <p>For Consultation: +91 9211831649</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold">Useful Links</h3>
          <ul className="mt-6 space-y-3 text-sm text-navy-foreground/70">
            {company.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold">Our Services</h3>
          <ul className="mt-6 space-y-3 text-sm text-navy-foreground/70">
            {servicesLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold">Company Policies</h3>
          <p className="mt-6 text-sm leading-relaxed text-navy-foreground/60">
            Privacy policy, pricing policy, terms and conditions, refund policy
            and disclaimer.
          </p>
          <form className="mt-6 flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your Email"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-navy-foreground placeholder:text-navy-foreground/40 focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              className="ep-button gap-2 rounded-xl px-5 py-3 text-sm"
            >
              Contact Epeno
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="ep-container flex flex-col items-center justify-between gap-4 py-6 text-sm text-navy-foreground/60 md:flex-row">
          <p>© Copyright All Right Reserved ©2024 Epeno Advisory Private Limited</p>
          <div className="flex items-center gap-4">
            <a href="/#contact" aria-label="Facebook" className="transition-colors hover:text-primary">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="/#contact" aria-label="Twitter" className="transition-colors hover:text-primary">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="/#contact" aria-label="LinkedIn" className="transition-colors hover:text-primary">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="/#contact" aria-label="Instagram" className="transition-colors hover:text-primary">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
