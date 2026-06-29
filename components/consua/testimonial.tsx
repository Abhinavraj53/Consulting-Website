"use client"

import { useEffect, useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react"

const testimonials = [
  {
    name: "Jitesh Bhanu",
    service: "Mudra Loan & Trademark",
    rating: 5,
    text: "Epeno's team was professional, knowledgeable and supportive throughout my Mudra Loan and Trademark registration process.",
  },
  {
    name: "Manish Rajput",
    service: "CGTMSE Loan",
    rating: 5,
    text: "Thanks to Epeno for helping me through the CGTMSE loan process.",
  },
  {
    name: "Shivanshu Gangwar",
    service: "Startup India Certificate",
    rating: 4,
    text: "Thanks to Epeno for helping me get my Startup India certificate.",
  },
  {
    name: "Krishna Yadav",
    service: "Trademark Registration",
    rating: 5,
    text: "The entire Epeno team helped us with trademark registration and treated us with genuine care.",
  },
  {
    name: "Anjali Verma",
    service: "CGTMSE Loan",
    rating: 5,
    text: "Epeno supported us with the CGTMSE loan process. The team's behaviour was consistently helpful.",
  },
  {
    name: "Nand Kishor Singh",
    service: "Government Loan",
    rating: 5,
    text: "A dependable Noida-based team for guidance through the government loan process.",
  },
]

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
}

export function Testimonial() {
  const [active, setActive] = useState(0)
  const testimonial = testimonials[active]

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length)
    }, 6500)

    return () => window.clearInterval(interval)
  }, [])

  const previous = () =>
    setActive((current) => (current - 1 + testimonials.length) % testimonials.length)
  const next = () =>
    setActive((current) => (current + 1) % testimonials.length)

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="ep-container relative">
        <div className="grid items-center gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="relative hidden self-end lg:block">
            <span className="absolute left-5 top-16 h-56 w-56 rounded-full bg-primary/15" />
            <span className="absolute bottom-12 right-4 h-36 w-36 rounded-full border border-dashed border-primary/40" />
            <img
              src="/Client%20testimonial%20girl.png"
              alt="Epeno client experience"
              className="relative z-10 mx-auto w-full max-w-[410px] object-contain drop-shadow-[0_28px_38px_rgba(16,47,88,0.14)]"
            />
          </div>

          <div>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="ep-eyebrow">Client Testimonials</p>
                <h2 className="mt-3 max-w-2xl font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
                  Trusted by founders and growing businesses.
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-navy transition-all hover:-translate-x-0.5 hover:border-primary hover:bg-primary"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-navy transition-all hover:translate-x-0.5 hover:border-primary hover:bg-primary"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <article className="relative mt-8 overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-[0_28px_90px_-58px_rgba(16,47,88,0.55)] sm:p-8 lg:p-10">
              <Quote className="absolute -right-3 -top-6 h-32 w-32 text-primary/[0.08]" />
              <div
                key={testimonial.name}
                className="relative animate-in fade-in slide-in-from-bottom-2 duration-500"
              >
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`h-5 w-5 ${
                        index < testimonial.rating
                          ? "fill-current"
                          : "fill-transparent text-border"
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="mt-6 max-w-3xl font-heading text-xl font-semibold leading-[1.55] text-foreground sm:text-2xl">
                  “{testimonial.text}”
                </blockquote>

                <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy font-heading text-sm font-extrabold text-white">
                    {initials(testimonial.name)}
                  </span>
                  <div>
                    <p className="font-heading text-base font-extrabold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {testimonial.service} · Google Review
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-6">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Show testimonial from ${item.name}`}
                  aria-pressed={active === index}
                  className={`group flex min-w-0 items-center gap-2 rounded-xl border p-2 text-left transition-all duration-300 ${
                    active === index
                      ? "border-primary bg-accent"
                      : "border-border bg-white hover:-translate-y-0.5 hover:border-primary/50"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-heading text-[0.65rem] font-extrabold ${
                      active === index
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-navy"
                    }`}
                  >
                    {initials(item.name)}
                  </span>
                  <span className="hidden min-w-0 truncate text-xs font-bold text-foreground xl:block">
                    {item.name.split(" ")[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
