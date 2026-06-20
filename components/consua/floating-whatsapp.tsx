import { siteDetails } from "@/lib/site"
import { WhatsApp } from "./brand-icons"

export function FloatingWhatsApp() {
  return (
    <a
      href={`${siteDetails.whatsappHref}?text=${encodeURIComponent(
        "Hello Epeno, I would like to know more about your business services.",
      )}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Epeno on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-[#25D366] text-white shadow-[0_18px_45px_-18px_rgba(37,211,102,0.75)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#1fbd5a] focus-visible:ring-[#25D366]/30 sm:bottom-7 sm:right-7 sm:h-15 sm:w-15"
    >
      <WhatsApp className="h-8 w-8 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-navy px-3 py-2 text-xs font-bold text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
    </a>
  )
}
