"use client"

import { useEffect, useState } from "react"
import { ChevronDown, MapPin, Menu, Phone, X } from "lucide-react"
import { siteDetails } from "@/lib/site"
import { Facebook, Instagram, Linkedin } from "./brand-icons"
import { Logo } from "./logo"
import { getServiceHref, serviceCategories } from "./service-data"

const navItems = [
  { label: "Home", href: "/", hasDropdown: false },
  { label: "About", href: "/about-us", hasDropdown: false },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Contact", href: "/contact", hasDropdown: false },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [hasMounted, setHasMounted] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    setHasMounted(true)
    const onScroll = () => {
      setIsScrolled(window.scrollY > 80)
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(
        scrollableHeight > 0
          ? Math.min((window.scrollY / scrollableHeight) * 100, 100)
          : 0,
      )
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const scrolled = hasMounted && isScrolled

  return (
    <header
      onMouseLeave={() => setServicesOpen(false)}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background shadow-sm" : "bg-transparent"
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-[60] h-1 bg-black/10"
      >
        <div
          className="h-full bg-primary shadow-[0_0_12px_rgba(245,186,75,0.75)] transition-[width] duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-0 top-0 z-10 hidden bg-white transition-all duration-300 xl:block ${
          scrolled ? "h-[76px] w-[340px]" : "h-[136px] w-[590px]"
        }`}
        style={{
          clipPath: scrolled
            ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            : "polygon(0 0, 94% 0, 100% 100%, 0 100%)",
        }}
      />

      {!scrolled && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-[9] hidden h-[120px] w-[612px] bg-white/70 xl:block"
          style={{ clipPath: "polygon(0 0, 94% 0, 100% 100%, 0 100%)" }}
        />
      )}

      <a
        href="/"
        className={`absolute z-30 hidden shrink-0 items-center transition-all duration-300 xl:flex ${
          scrolled
            ? "left-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] top-1/2 -translate-y-1/2"
            : "left-[clamp(110px,12vw,210px)] top-[68px] -translate-y-1/2"
        }`}
        aria-label="Epeno home"
      >
        <Logo
          large={!scrolled}
          compact={scrolled}
          className="text-foreground"
        />
      </a>

      <div
        className={`hidden overflow-hidden bg-navy text-white transition-all duration-300 xl:block ${
          scrolled ? "max-h-0 border-transparent" : "max-h-14 border-b border-white/10"
        }`}
      >
        <div className="ml-auto flex h-14 items-center justify-between gap-6 pl-[600px] pr-16 text-sm font-semibold 2xl:pr-28">
          <div className="flex min-w-0 items-center gap-7">
            <a
              href={siteDetails.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="flex min-w-0 items-center gap-3 text-white/90 transition-colors hover:text-primary"
            >
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              <span className="truncate">{siteDetails.address}</span>
            </a>
            <a
              href={siteDetails.phoneHref}
              className="flex shrink-0 items-center gap-3 text-white/90 transition-colors hover:text-primary"
            >
              <Phone className="h-5 w-5 text-primary" />
              {siteDetails.phoneDisplay}
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-5 text-white/90">
            <a href={siteDetails.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="transition-all hover:-translate-y-0.5 hover:text-primary">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={siteDetails.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-all hover:-translate-y-0.5 hover:text-primary">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={siteDetails.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-all hover:-translate-y-0.5 hover:text-primary">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div
        className={`relative transition-all duration-300 ${
          scrolled
            ? "border-b border-border/70 bg-background/95 backdrop-blur-xl"
            : "bg-navy/68 backdrop-blur-md"
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between px-4 transition-all duration-300 sm:px-6 ${
            scrolled
              ? "h-[76px] max-w-7xl xl:pl-[380px]"
              : "h-[74px] max-w-none sm:h-20 xl:pl-[640px] xl:pr-16 2xl:pr-28"
          }`}
        >
          <a href="/" aria-label="Epeno home" className="relative z-20 xl:hidden">
            <Logo
              compact={!scrolled}
              mini={scrolled}
              className={scrolled || mobileOpen ? "text-foreground" : "text-white"}
            />
          </a>

          <nav className="hidden items-center gap-7 xl:flex 2xl:gap-9">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onMouseEnter={() => setServicesOpen(item.label === "Services")}
                onFocus={() => setServicesOpen(item.label === "Services")}
                className={`flex items-center gap-1.5 font-heading text-[0.96rem] font-bold transition-colors hover:text-primary ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden xl:block">
            <a href={siteDetails.phoneHref} className="ep-button min-w-[160px] gap-2 rounded-lg">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          <button
            type="button"
            className={`relative z-20 flex h-11 w-11 items-center justify-center rounded-full border xl:hidden ${
              scrolled || mobileOpen
                ? "border-border bg-white text-foreground"
                : "border-white/25 bg-white/10 text-white"
            }`}
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {servicesOpen && (
        <div
          onMouseEnter={() => setServicesOpen(true)}
          className="absolute left-0 right-0 top-full hidden px-8 pb-8 xl:block"
        >
          <div className="mx-auto max-h-[calc(100vh-9rem)] max-w-[calc(100vw-6rem)] overflow-y-auto rounded-2xl border border-border/80 bg-white p-7 shadow-[0_34px_120px_-70px_rgba(16,47,88,0.82)]">
            <div className="grid gap-7 xl:grid-cols-7">
              {serviceCategories.map((category) => (
                <div key={category.title}>
                  <a href={`/services#${category.slug}`} className="group inline-flex flex-col">
                    <span className="font-heading text-lg font-extrabold uppercase tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {category.title}
                    </span>
                    <span className="mt-2 h-0.5 w-11 rounded-full bg-primary transition-all group-hover:w-16" />
                  </a>
                  <ul className="mt-5 grid gap-3.5">
                    {category.services.map((service) => (
                      <li key={service}>
                        <a
                          href={getServiceHref(service)}
                          className="group flex items-start gap-3 text-sm font-semibold leading-6 text-foreground/82 transition-all hover:translate-x-1 hover:text-navy"
                        >
                          <category.icon className="mt-1 h-4 w-4 shrink-0 fill-primary/10 text-navy transition-colors group-hover:text-primary" />
                          <span>{service}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="h-[calc(100dvh-74px)] overflow-y-auto border-t border-border bg-background shadow-lg xl:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-bold text-foreground transition-colors hover:bg-secondary"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-border/70 pt-4">
              {serviceCategories.map((category) => (
                <a
                  key={category.title}
                  href={`/services#${category.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl bg-secondary px-3 py-3 text-center text-xs font-extrabold uppercase text-foreground transition-colors hover:bg-accent"
                >
                  {category.title}
                </a>
              ))}
            </div>
            <a
              href={siteDetails.phoneHref}
              className="ep-button mt-3 rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
