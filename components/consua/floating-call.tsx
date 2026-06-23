import { Phone } from "lucide-react"
import { siteDetails } from "@/lib/site"

export function FloatingCall() {
  return (
    <a
      href={siteDetails.phoneHref}
      aria-label={`Call Epeno at ${siteDetails.phoneDisplay}`}
      className="group fixed bottom-21 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-navy text-white shadow-[0_18px_45px_-18px_rgba(16,47,88,0.8)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-primary hover:text-primary-foreground focus-visible:ring-primary/30 sm:bottom-24 sm:right-7 sm:h-15 sm:w-15 xl:hidden"
    >
      <Phone className="h-6 w-6 fill-current transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-navy px-3 py-2 text-xs font-bold text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 sm:block">
        Call Now
      </span>
    </a>
  )
}
