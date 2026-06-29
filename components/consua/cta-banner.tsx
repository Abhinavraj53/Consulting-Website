"use client"

import { Award, BadgeCheck, Handshake } from "lucide-react"
import { AnimatedCounter } from "./animated-counter"
import { siteStats } from "./stats-data"

export function CtaBanner() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
      <div className="absolute inset-0">
        <img
          src="/indian-assets/indian-businessman-office.jpg"
          alt=""
          className="h-full w-full object-cover opacity-70 mix-blend-luminosity [object-position:64%_42%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/95" />
        <div className="absolute inset-0 bg-primary/15" />
      </div>

      <div className="ep-container relative grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
        <div className="max-w-xl">
          <h2 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-balance md:text-5xl">
            Looking for a First-Class Business Consultant?
          </h2>
          <a href="tel:+919211831649" className="ep-button mt-8 sm:mt-12 sm:h-16 sm:px-12 sm:text-base">
            Request A Call Back
          </a>
        </div>

        <div className="border-t border-white/20 pt-10 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
          <div className="flex items-center gap-7">
            <Handshake className="h-16 w-16" />
            <div>
              <p className="font-heading text-5xl font-bold leading-none sm:text-7xl">
                <AnimatedCounter end={siteStats.projectsSupported.value} suffix={siteStats.projectsSupported.suffix} />
              </p>
              <p className="mt-3 font-heading text-lg font-semibold text-white">
                {siteStats.projectsSupported.label}
              </p>
            </div>
          </div>

          <div className="mt-14 flex items-center gap-7">
            <span className="relative">
              <Award className="h-16 w-16" />
              <BadgeCheck className="absolute -right-2 -top-2 h-6 w-6" />
            </span>
            <div>
              <p className="font-heading text-5xl font-bold leading-none sm:text-7xl">
                <AnimatedCounter end={siteStats.businessAwards.value} suffix={siteStats.businessAwards.suffix} />
              </p>
              <p className="mt-3 font-heading text-lg font-semibold text-white">
                {siteStats.businessAwards.label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
