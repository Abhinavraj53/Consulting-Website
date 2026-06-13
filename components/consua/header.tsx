"use client"

import { useEffect, useState } from "react"
import { ChevronDown, MapPin, Menu, Phone, X } from "lucide-react"
import { Logo } from "./logo"
import { serviceCategories } from "./service-data"

const navItems = [
  { label: "Home", href: "/", hasDropdown: false },
  { label: "Pages", href: "#", hasDropdown: false },
  { label: "Projects", href: "#projects", hasDropdown: false },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Blog", href: "#blog", hasDropdown: false },
  { label: "Contact", href: "#contact", hasDropdown: false },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    setHasMounted(true)
    const onScroll = () => setIsScrolled(window.scrollY > 80)

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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
        className={`pointer-events-none absolute left-0 top-0 z-10 hidden bg-white transition-all duration-300 xl:block ${
          scrolled
            ? "h-[76px] w-[300px]"
            : "h-[136px] w-[540px]"
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
          className="pointer-events-none absolute left-0 top-0 z-[9] hidden h-[120px] w-[562px] bg-white/70 xl:block"
          style={{ clipPath: "polygon(0 0, 94% 0, 100% 100%, 0 100%)" }}
        />
      )}

      <a
        href="#"
        className={`absolute z-30 flex shrink-0 items-center transition-all duration-300 ${
          scrolled
            ? "left-6 top-1/2 -translate-y-1/2 xl:left-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
            : "left-[clamp(120px,13vw,230px)] top-[68px] hidden -translate-y-1/2 xl:flex"
        }`}
        aria-label="Epeno home"
      >
        <Logo className="text-foreground" />
      </a>

      {/* Top bar */}
      <div
        className={`hidden overflow-hidden bg-navy text-white transition-all duration-300 xl:block ${
          scrolled ? "max-h-0 border-transparent" : "max-h-14 border-b border-white/10"
        }`}
      >
        <div className="ml-auto flex h-14 items-center justify-between pl-[600px] pr-16 text-sm font-semibold 2xl:pr-28">
          <div className="flex items-center gap-9">
            <span className="flex items-center gap-3 text-white/90">
              <MapPin className="h-5 w-5 text-primary" />
              70240 Avenue of the Moon, California
            </span>
            <span className="flex items-center gap-3 text-white/90">
              <Phone className="h-5 w-5 text-primary" />
              +4733378901
            </span>
          </div>

          <div className="flex items-center gap-6 font-heading text-base font-bold text-white/90">
            <a href="#" aria-label="Facebook" className="transition-colors hover:text-primary">
              f
            </a>
            <a href="#" aria-label="Twitter" className="transition-colors hover:text-primary">
              x
            </a>
            <a href="#" aria-label="Pinterest" className="font-heading text-base font-bold transition-colors hover:text-primary">
              p
            </a>
            <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-primary">
              in
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`relative transition-all duration-300 ${
          scrolled ? "border-b border-border/70 bg-background/95 backdrop-blur-xl" : "bg-navy/68 backdrop-blur-md"
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between px-6 transition-all duration-300 ${
            scrolled
              ? "h-[76px] max-w-7xl"
              : "h-20 max-w-none xl:pl-[600px] xl:pr-16 2xl:pr-28"
          }`}
        >
          <span className="w-[260px] shrink-0 xl:hidden" />

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
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden xl:block">
            <button className="ep-button min-w-[178px] rounded-lg">
              Get Consultant
            </button>
          </div>

          <button
            className={`relative z-10 xl:hidden ${
              scrolled || mobileOpen ? "text-foreground" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {servicesOpen && (
        <div
          onMouseEnter={() => setServicesOpen(true)}
          className="absolute left-0 right-0 top-full hidden px-8 pb-8 xl:block"
        >
          <div className="mx-auto max-w-[calc(100vw-6rem)] rounded-2xl border border-border/80 bg-white p-7 shadow-[0_34px_120px_-70px_rgba(16,47,88,0.82)]">
            <div className="grid gap-7 xl:grid-cols-7">
              {serviceCategories.map((category) => (
                <div key={category.title}>
                  <a
                    href={`/services#${category.title.toLowerCase()}`}
                    className="group inline-flex flex-col"
                  >
                    <span className="font-heading text-lg font-extrabold uppercase tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {category.title}
                    </span>
                    <span className="mt-2 h-0.5 w-11 rounded-full bg-primary" />
                  </a>
                  <ul className="mt-5 grid gap-3.5">
                    {category.services.map((service) => (
                      <li key={service}>
                        <a
                          href={`/services#${category.title.toLowerCase()}`}
                          className="group flex items-start gap-3 text-sm font-semibold leading-6 text-foreground/82 transition-colors hover:text-navy"
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background shadow-lg xl:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-2 text-left text-sm font-medium text-foreground"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </a>
            ))}
            <div className="grid gap-2 border-t border-border/70 pt-3">
              {serviceCategories.map((category) => (
                <a
                  key={category.title}
                  href={`/services#${category.title.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl bg-secondary px-4 py-3 text-sm font-bold text-foreground"
                >
                  {category.title}
                </a>
              ))}
            </div>
            <button className="mt-3 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Get Consultant
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
