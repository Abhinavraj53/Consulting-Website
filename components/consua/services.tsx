"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import {
  getServiceHref,
  serviceCategories,
} from "./service-data"

type ServiceCategory = (typeof serviceCategories)[number]

export function Services() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>(
    serviceCategories[0],
  )
  const ActiveIcon = activeCategory.icon

  return (
    <section id="services" className="ep-section bg-secondary">
      <div className="ep-container">
        <div className="grid items-start gap-6 lg:grid-cols-[330px_minmax(0,1fr)] xl:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="ep-card h-fit p-5 sm:p-6 lg:sticky lg:top-28">
            <p className="ep-eyebrow">What we do</p>
            <h2 className="mt-3 font-heading text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl">
              Complete business support under one roof
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Select a category to explore every available Epeno service.
            </p>

            <div
              className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1"
              role="tablist"
              aria-label="Service categories"
            >
              {serviceCategories.map((category) => {
                const Icon = category.icon
                const active = activeCategory.title === category.title

                return (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={active}
                    key={category.title}
                    onClick={() => setActiveCategory(category)}
                    className={`group flex min-h-14 w-full items-center gap-3 rounded-xl border px-3 py-3 text-left transition-all duration-300 sm:px-4 ${
                      active
                        ? "border-navy bg-navy text-white shadow-[0_16px_35px_-24px_rgba(16,47,88,0.9)]"
                        : "border-transparent bg-secondary text-foreground hover:-translate-y-0.5 hover:border-primary/50 hover:bg-accent lg:hover:translate-x-1"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                        active
                          ? "bg-primary text-primary-foreground"
                          : "bg-white text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                      }`}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-heading text-sm font-extrabold uppercase">
                        {category.title}
                      </span>
                      <span
                        className={`mt-0.5 hidden text-[0.68rem] font-semibold lg:block ${
                          active ? "text-white/60" : "text-muted-foreground"
                        }`}
                      >
                        {category.services.length} services
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
          </aside>

          <div className="ep-card h-fit min-w-0 overflow-hidden">
            <div
              key={activeCategory.title}
              className="animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              <div className="relative overflow-hidden bg-navy p-5 text-white sm:p-7 lg:p-8">
                <span
                  aria-hidden="true"
                  className="absolute -right-14 -top-16 h-48 w-48 rounded-full bg-primary/15"
                />
                <div className="relative flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_14px_30px_-20px_rgba(0,0,0,0.75)]">
                      <ActiveIcon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">
                        {activeCategory.title}
                      </p>
                      <h3 className="mt-2 max-w-2xl font-heading text-xl font-extrabold leading-tight text-white sm:text-2xl lg:text-[1.75rem]">
                        {activeCategory.description}
                      </h3>
                    </div>
                  </div>
                  <span className="w-fit shrink-0 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-white">
                    {activeCategory.services.length} services
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-7 lg:p-8">
                <div
                  className={`grid gap-3 ${
                    activeCategory.services.length <= 4
                      ? "sm:grid-cols-2"
                      : "sm:grid-cols-2 xl:grid-cols-3"
                  }`}
                  role="tabpanel"
                >
                  {activeCategory.services.map((service, index) => (
                    <a
                      key={service}
                      href={getServiceHref(service)}
                      className="group relative flex min-h-[96px] items-center gap-4 overflow-hidden rounded-xl border border-border/80 bg-secondary p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-white hover:shadow-[0_16px_40px_-28px_rgba(16,47,88,0.6)]"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-8 -right-8 h-20 w-20 rounded-full bg-primary/0 transition-colors group-hover:bg-primary/10"
                      />
                      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white font-heading text-xs font-extrabold text-primary shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="relative min-w-0 flex-1 font-heading text-sm font-extrabold leading-5 text-foreground sm:text-[0.95rem]">
                        {service}
                      </span>
                      <ArrowUpRight className="relative h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </a>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between gap-4 border-t border-border pt-5">
                  <p className="hidden text-sm text-muted-foreground sm:block">
                    Select a service to view eligibility, benefits and required documents.
                  </p>
                  <a
                    href={`/services#${activeCategory.slug}`}
                    className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-4 py-2.5 font-heading text-xs font-extrabold text-navy transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    View all
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
