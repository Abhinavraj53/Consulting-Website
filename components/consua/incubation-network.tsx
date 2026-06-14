"use client"

import { useState } from "react"
import { ArrowRight, Building2, Landmark, Lightbulb, Network } from "lucide-react"
import { AnimatedCounter } from "./animated-counter"
import { siteStats } from "./stats-data"

const states = [
  { name: "Jammu & Kashmir", count: 4, x: 210, y: 48, path: "M176 22 L226 16 L259 48 L242 94 L194 92 L162 56 Z" },
  { name: "Himachal Pradesh", count: 5, x: 238, y: 102, path: "M214 94 L263 89 L291 117 L267 147 L219 133 Z" },
  { name: "Punjab", count: 6, x: 188, y: 133, path: "M172 96 L215 100 L220 139 L184 166 L153 136 Z" },
  { name: "Haryana", count: 8, x: 219, y: 168, path: "M195 145 L237 141 L255 176 L228 211 L190 194 Z" },
  { name: "Rajasthan", count: 11, x: 150, y: 234, path: "M83 163 L178 156 L217 212 L184 310 L96 306 L54 241 Z" },
  { name: "Uttar Pradesh", count: 14, x: 302, y: 219, path: "M243 170 L357 182 L407 232 L353 277 L255 251 L220 205 Z" },
  { name: "Bihar", count: 9, x: 401, y: 257, path: "M361 231 L438 245 L460 284 L407 312 L351 278 Z" },
  { name: "Madhya Pradesh", count: 7, x: 248, y: 315, path: "M183 263 L314 253 L358 320 L310 388 L197 371 L154 317 Z" },
  { name: "Gujarat", count: 10, x: 95, y: 335, path: "M63 305 L150 304 L190 367 L142 427 L61 399 L34 345 Z" },
  { name: "Maharashtra", count: 16, x: 229, y: 422, path: "M147 373 L300 388 L341 462 L270 520 L169 487 L112 420 Z" },
  { name: "Chhattisgarh", count: 6, x: 352, y: 376, path: "M311 316 L371 310 L407 386 L367 460 L318 423 Z" },
  { name: "Odisha", count: 8, x: 424, y: 411, path: "M383 383 L451 382 L482 432 L441 488 L378 457 Z" },
  { name: "West Bengal", count: 12, x: 470, y: 333, path: "M429 282 L475 275 L500 334 L478 392 L434 366 L452 320 Z" },
  { name: "Telangana", count: 13, x: 302, y: 476, path: "M282 438 L352 450 L372 508 L319 547 L266 511 Z" },
  { name: "Andhra Pradesh", count: 12, x: 353, y: 530, path: "M319 512 L405 492 L442 540 L365 588 L296 565 Z" },
  { name: "Karnataka", count: 15, x: 241, y: 536, path: "M190 487 L280 515 L295 596 L229 616 L173 568 Z" },
  { name: "Tamil Nadu", count: 9, x: 296, y: 608, path: "M264 574 L331 592 L343 664 L297 704 L252 641 Z" },
  { name: "Kerala", count: 5, x: 215, y: 636, path: "M207 574 L249 637 L237 711 L203 674 L179 608 Z" },
  { name: "Assam & North East", count: 10, x: 485, y: 178, path: "M408 157 L486 139 L536 176 L504 224 L432 217 Z" },
]

const partners = [
  ["EIC", "Epeno Incubation Cell"],
  ["AIC", "Startup Advisory"],
  ["DPIIT", "Recognition Desk"],
  ["MSME", "Growth Desk"],
  ["GEM", "Tender Support"],
  ["NSIC", "Certification"],
  ["FUND", "Funding Cell"],
  ["IP", "Brand Protection"],
]

export function IncubationNetwork() {
  const [activeState, setActiveState] = useState(states[9])

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="ep-container grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[520px]">
          <div className="absolute left-0 top-6 hidden rounded-2xl border border-border bg-white p-5 shadow-[0_22px_70px_-48px_rgba(16,47,88,0.74)] md:block">
            <p className="font-heading text-xl font-extrabold text-primary">
              {activeState.name}
            </p>
            <p className="mt-1 text-lg font-bold text-foreground">
              <AnimatedCounter key={activeState.name} end={activeState.count} /> Incubation centre{activeState.count > 1 ? "s" : ""}
            </p>
          </div>

          <svg
            viewBox="0 0 560 720"
            aria-label="Interactive India incubation centre map"
            className="mx-auto h-auto w-full max-w-[560px]"
          >
            <defs>
              <filter id="mapShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#102f58" floodOpacity="0.08" />
              </filter>
            </defs>
            <g filter="url(#mapShadow)">
              {states.map((state) => {
                const isActive = activeState.name === state.name

                return (
                  <path
                    key={state.name}
                    d={state.path}
                    tabIndex={0}
                    role="button"
                    aria-label={`${state.name}, ${state.count} incubation centres`}
                    onMouseEnter={() => setActiveState(state)}
                    onFocus={() => setActiveState(state)}
                    className={`cursor-pointer stroke-white stroke-[2.5] outline-none transition-all duration-200 ${
                      isActive ? "fill-primary" : "fill-[#e2e6eb] hover:fill-primary/70 focus:fill-primary/70"
                    }`}
                  />
                )
              })}
            </g>
          </svg>

          <div className="rounded-2xl border border-border bg-white p-5 shadow-[0_22px_70px_-48px_rgba(16,47,88,0.74)] md:hidden">
            <p className="font-heading text-xl font-extrabold text-primary">
              {activeState.name}
            </p>
            <p className="mt-1 text-lg font-bold text-foreground">
              <AnimatedCounter key={activeState.name} end={activeState.count} /> Incubation centre{activeState.count > 1 ? "s" : ""}
            </p>
          </div>
        </div>

        <div>
          <p className="ep-eyebrow">Pan India Network</p>
          <h2 className="mt-4 max-w-xl font-heading text-4xl font-medium leading-tight tracking-tight text-[#05070c] md:text-5xl">
            We have the
            <span className="mt-4 block font-extrabold">strongest network of</span>
            <span className="mt-2 block font-serif text-5xl font-bold italic md:text-6xl">
              Incubation centres
            </span>
            <span className="mt-2 block">in India</span>
          </h2>
          <p className="mt-8 max-w-lg text-xl leading-8 text-muted-foreground">
            Epeno helps founders connect with government schemes, institutional
            support and startup-ready guidance across the nation.
          </p>

          <a href="/about-us#contact" className="ep-button mt-8 h-16 gap-3 rounded-full px-9 text-base">
            Share Your Business plan today
            <ArrowRight className="h-5 w-5" />
          </a>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {partners.map(([shortName, label]) => (
              <div
                key={shortName}
                className="flex min-h-24 flex-col items-center justify-center rounded-2xl border border-border bg-secondary px-3 text-center transition-all hover:-translate-y-1 hover:border-primary hover:bg-white"
              >
                <span className="font-heading text-xl font-extrabold text-navy">
                  {shortName}
                </span>
                <span className="mt-1 text-[0.7rem] font-bold leading-4 text-muted-foreground">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {[
              [Landmark, "Govt. Schemes"],
              [Network, "Institutional Support"],
              [Lightbulb, "Training & Development"],
            ].map(([Icon, label]) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-extrabold text-accent-foreground">
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </span>
            ))}
          </div>

          <div className="mt-6 inline-flex rounded-full border border-dashed border-navy/35 bg-white px-6 py-2 font-heading text-xl font-extrabold italic text-navy">
            and <span className="mx-1"><AnimatedCounter end={siteStats.incubationSupportOptions.value} suffix={siteStats.incubationSupportOptions.suffix} /></span> more
          </div>
        </div>
      </div>
    </section>
  )
}
