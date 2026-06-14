"use client"

import { useEffect, useRef, useState } from "react"
import { Award, BadgeCheck, Handshake } from "lucide-react"

function Counter({
  end,
  suffix = "+",
  duration = 1400,
}: {
  end: number
  suffix?: string
  duration?: number
}) {
  const [value, setValue] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node || hasStarted) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setHasStarted(true)
        const startTime = performance.now()

        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)

          setValue(Math.round(end * eased))

          if (progress < 1) {
            requestAnimationFrame(tick)
          }
        }

        requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.35 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [duration, end, hasStarted])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

export function CtaBanner() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
      <div className="absolute inset-0">
        <img
          src="/innovation-man.png"
          alt=""
          className="h-full w-full object-cover opacity-70 mix-blend-luminosity [object-position:68%_42%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/95" />
        <div className="absolute inset-0 bg-primary/15" />
      </div>

      <div className="ep-container relative grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
        <div className="max-w-xl">
          <h2 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-balance md:text-5xl">
            Looking for a First-Class Business Consultant?
          </h2>
          <a href="tel:+919211831649" className="ep-button mt-12 h-16 px-12 text-base">
            Request A Call Back
          </a>
        </div>

        <div className="border-l border-white/20 pl-10 lg:pl-14">
          <div className="flex items-center gap-7">
            <Handshake className="h-16 w-16" />
            <div>
              <p className="font-heading text-7xl font-bold leading-none">
                <Counter end={500} />
              </p>
              <p className="mt-3 font-heading text-lg font-semibold text-white">
                Business advices given over 30 years
              </p>
            </div>
          </div>

          <div className="mt-14 flex items-center gap-7">
            <span className="relative">
              <Award className="h-16 w-16" />
              <BadgeCheck className="absolute -right-2 -top-2 h-6 w-6" />
            </span>
            <div>
              <p className="font-heading text-7xl font-bold leading-none">
                <Counter end={30} />
              </p>
              <p className="mt-3 font-heading text-lg font-semibold text-white">
                Business Excellence awards achieved
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
