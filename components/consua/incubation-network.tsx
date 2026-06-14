"use client"

import { useState } from "react"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, Landmark, Lightbulb, Network } from "lucide-react"
import { AnimatedCounter } from "./animated-counter"
import { siteStats } from "./stats-data"
import { IndiaMap } from "./vendor/react-india-map-wrapper"

const mapRegions = [
  { name: "Delhi", code: "IN-DL", count: 18 },
  { name: "Haryana", code: "IN-HR", count: 8 },
  { name: "Punjab", code: "IN-PB", count: 6 },
  { name: "Rajasthan", code: "IN-RJ", count: 11 },
  { name: "Uttar Pradesh", code: "IN-UP", count: 14 },
  { name: "Madhya Pradesh", code: "IN-MP", count: 7 },
  { name: "Maharashtra", code: "IN-MH", count: 16 },
  { name: "Gujarat", code: "IN-GJ", count: 10 },
  { name: "Karnataka", code: "IN-KA", count: 15 },
  { name: "Telangana", code: "IN-TG", count: 13 },
  { name: "Andhra Pradesh", code: "IN-AP", count: 12 },
  { name: "Tamil Nadu", code: "IN-TN", count: 9 },
  { name: "Kerala", code: "IN-KL", count: 5 },
  { name: "West Bengal", code: "IN-WB", count: 12 },
  { name: "Bihar", code: "IN-BR", count: 9 },
  { name: "Odisha", code: "IN-OR", count: 8 },
  { name: "Chhattisgarh", code: "IN-CT", count: 6 },
  { name: "Assam", code: "IN-AS", count: 10 },
  { name: "Himachal Pradesh", code: "IN-HP", count: 5 },
  { name: "Jammu and Kashmir", code: "IN-JK", count: 4 },
]

const mapStateData = mapRegions.map((region) => ({
  id: region.code,
  customData: {
    name: region.name,
    incubationCenters: region.count,
  },
}))

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

const supportHighlights: [LucideIcon, string][] = [
  [Landmark, "Govt. Schemes"],
  [Network, "Institutional Support"],
  [Lightbulb, "Training & Development"],
]

export function IncubationNetwork() {
  const [activeRegion, setActiveRegion] = useState(mapRegions[6])

  const handleRegionChange = (stateId: string) => {
    const region = mapRegions.find((item) => item.code === stateId)

    if (region) {
      setActiveRegion(region)
    }
  }

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="ep-container grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[520px]">
          <div className="absolute left-0 top-6 hidden rounded-2xl border border-border bg-white p-5 shadow-[0_22px_70px_-48px_rgba(16,47,88,0.74)] md:block">
            <p className="font-heading text-xl font-extrabold text-primary">
              {activeRegion.name}
            </p>
            <p className="mt-1 text-lg font-bold text-foreground">
              <AnimatedCounter key={activeRegion.name} end={activeRegion.count} /> Incubation centre{activeRegion.count > 1 ? "s" : ""}
            </p>
          </div>

          <div className="epeno-india-map mx-auto w-full max-w-[620px] drop-shadow-[0_28px_40px_rgba(16,47,88,0.08)]">
            <IndiaMap
              mapStyle={{
                backgroundColor: "#e2e6eb",
                hoverColor: "#f5ba4b",
                stroke: "#ffffff",
                strokeWidth: 1,
                tooltipConfig: {
                  backgroundColor: "#102f58",
                  textColor: "#ffffff",
                },
              }}
              stateData={mapStateData}
              onStateHover={(stateId) => handleRegionChange(stateId)}
              onStateClick={(stateId) => handleRegionChange(stateId)}
            />
          </div>

          <div className="rounded-2xl border border-border bg-white p-5 shadow-[0_22px_70px_-48px_rgba(16,47,88,0.74)] md:hidden">
            <p className="font-heading text-xl font-extrabold text-primary">
              {activeRegion.name}
            </p>
            <p className="mt-1 text-lg font-bold text-foreground">
              <AnimatedCounter key={activeRegion.name} end={activeRegion.count} /> Incubation centre{activeRegion.count > 1 ? "s" : ""}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:hidden">
            {mapRegions.map((region) => (
              <button
                key={region.code}
                type="button"
                onClick={() => setActiveRegion(region)}
                className={`min-h-11 rounded-full border px-3 text-xs font-extrabold transition-colors ${
                  activeRegion.code === region.code
                    ? "border-primary bg-primary text-navy"
                    : "border-border bg-white text-navy"
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>

          <style jsx global>{`
            .epeno-india-map .india-map-container {
              width: 100%;
              height: 100%;
            }

            .epeno-india-map .india-map-container svg {
              display: block;
              width: 100% !important;
              height: auto !important;
              max-height: 650px;
              margin: 0 auto;
              padding: 12px;
            }

            .epeno-india-map .india-map-container .state-tooltip {
              display: none !important;
            }

            .epeno-india-map .india-map-container path {
              fill: #e2e6eb !important;
              stroke: #ffffff !important;
              stroke-width: 1.4px !important;
              opacity: 0.62;
              outline: none;
              transition: fill 180ms ease, stroke 180ms ease, opacity 180ms ease,
                filter 180ms ease;
            }

            ${mapStateData
              .map(
                (state) => `
                  .epeno-india-map .india-map-container path#${state.id} {
                    fill: #f4f7fb !important;
                    stroke: #102f58 !important;
                    cursor: pointer;
                    opacity: 1;
                  }
                `
              )
              .join("")}

            ${mapStateData
              .map(
                (state) => `
                  .epeno-india-map .india-map-container path#${state.id}:hover {
                    fill: #f5ba4b !important;
                    stroke: #102f58 !important;
                    filter: drop-shadow(0 12px 20px rgba(16, 47, 88, 0.2));
                  }
                `
              )
              .join("")}

            .epeno-india-map .india-map-container path#${activeRegion.code} {
              fill: #f5ba4b !important;
              stroke: #102f58 !important;
              filter: drop-shadow(0 14px 24px rgba(16, 47, 88, 0.24));
            }
          `}</style>
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
            {supportHighlights.map(([Icon, label]) => (
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
