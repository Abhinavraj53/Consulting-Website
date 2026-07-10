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
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="ep-container relative grid items-start gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16 xl:gap-20">
        <div className="relative mx-auto w-full max-w-[620px]">
          <div className="overflow-hidden rounded-[2rem] border border-border/80 bg-gradient-to-b from-[#f6f9fc] to-white p-4 shadow-[0_34px_100px_-65px_rgba(16,47,88,0.65)] transition-all duration-300 hover:border-primary/45 hover:shadow-[0_38px_110px_-58px_rgba(16,47,88,0.72)] sm:p-6">
            <div className="flex items-center justify-between gap-4 border-b border-border/70 pb-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
                  Selected region
                </p>
                <p className="mt-1 font-heading text-xl font-extrabold text-navy sm:text-2xl">
                  {activeRegion.name}
                </p>
              </div>
              <div className="shrink-0 rounded-2xl bg-primary px-4 py-3 text-center text-primary-foreground">
                <p className="font-heading text-2xl font-extrabold leading-none">
                  <AnimatedCounter key={activeRegion.name} end={activeRegion.count} />
                </p>
                <p className="mt-1 text-[0.65rem] font-extrabold uppercase tracking-wide">
                  Centres
                </p>
              </div>
            </div>

            <div className="epeno-india-map mx-auto mt-4 aspect-[611.86/695.702] w-full max-w-[460px]">
              <IndiaMap
                mapStyle={{
                  backgroundColor: "#e8eef5",
                  hoverColor: "#f5ba4b",
                  stroke: "#a6b7ca",
                  strokeWidth: 1.2,
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

            <p className="mt-2 text-center text-xs font-semibold leading-5 text-muted-foreground sm:text-sm">
              Hover or tap a highlighted state to explore the network.
            </p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:hidden">
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
              line-height: 0;
            }

            .epeno-india-map .responsive-india-map,
            .epeno-india-map .responsive-india-map > .india-map-container,
            .epeno-india-map .responsive-india-map > .india-map-container > div {
              width: 100%;
              height: 100%;
            }

            .epeno-india-map .india-map-container svg {
              display: block;
              width: 100% !important;
              height: 100% !important;
              max-width: 100%;
              max-height: 100%;
              margin: 0 auto;
              overflow: hidden;
            }

            .epeno-india-map .india-map-container .state-tooltip {
              display: none !important;
            }

            .epeno-india-map .india-map-container path {
              fill: #e8eef5 !important;
              stroke: #a6b7ca !important;
              stroke-width: 1.2px !important;
              opacity: 1;
              vector-effect: non-scaling-stroke;
              outline: none;
              transition: fill 180ms ease, stroke 180ms ease, opacity 180ms ease,
                filter 180ms ease;
            }

            ${mapStateData
              .map(
                (state) => `
                  .epeno-india-map .india-map-container path#${state.id} {
                    fill: #ffffff !important;
                    stroke: #102f58 !important;
                    stroke-width: 1.65px !important;
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
              stroke-width: 2px !important;
              filter: drop-shadow(0 8px 12px rgba(16, 47, 88, 0.2));
            }

          `}</style>
        </div>

        <div className="lg:pt-3" aria-live="polite">
          <div
            key={activeRegion.code}
            className="animate-in fade-in slide-in-from-bottom-2 duration-300"
          >
            <p className="ep-eyebrow">{activeRegion.name} opportunity map</p>
            <h2 className="mt-4 max-w-2xl font-heading text-3xl font-extrabold leading-[1.12] tracking-[-0.035em] text-foreground sm:text-4xl lg:text-[2.65rem] xl:text-5xl">
              The support network around {activeRegion.name} is bigger than it looks
              <span className="mt-4 block text-2xl font-extrabold leading-tight tracking-[-0.025em] text-navy sm:text-3xl xl:text-[2.35rem]">
                {activeRegion.count} incubation centre{activeRegion.count > 1 ? "s" : ""}
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              Epeno helps founders in {activeRegion.name} connect with government
              schemes, institutional support, incubation opportunities and
              startup-ready guidance.
            </p>
          </div>

          <a href="/contact" className="ep-button mt-7 gap-3 rounded-full sm:h-14 sm:px-8">
            Get support in {activeRegion.name}
            <ArrowRight className="h-5 w-5" />
          </a>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {partners.map(([shortName, label]) => (
              <div
                key={shortName}
                className="flex min-h-24 flex-col items-center justify-center rounded-2xl border border-border bg-secondary px-3 py-4 text-center transition-all hover:-translate-y-1 hover:border-primary hover:bg-white"
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

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            {supportHighlights.map(([Icon, label]) => (
              <span key={label} className="group inline-flex items-center gap-2 rounded-full border border-transparent bg-accent px-4 py-2 text-sm font-extrabold text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground">
                <Icon className="h-4 w-4 text-primary transition-all group-hover:scale-110 group-hover:text-primary-foreground" />
                {label}
              </span>
            ))}
          </div>

          <div className="mt-5 inline-flex rounded-full border border-dashed border-navy/35 bg-white px-5 py-2 font-heading text-lg font-extrabold italic text-navy">
            and <span className="mx-1"><AnimatedCounter end={siteStats.incubationSupportOptions.value} suffix={siteStats.incubationSupportOptions.suffix} /></span> more
          </div>
        </div>
      </div>
    </section>
  )
}
