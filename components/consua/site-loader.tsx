"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"

const MIN_VISIBLE_MS = 650

function isInternalLink(link: HTMLAnchorElement) {
  if (!link.href || link.target || link.hasAttribute("download")) {
    return false
  }

  const url = new URL(link.href)
  return url.origin === window.location.origin && url.pathname !== window.location.pathname
}

export function SiteLoader() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  const startedAt = useRef(Date.now())
  const hideTimer = useRef<number | null>(null)

  const clearHideTimer = () => {
    if (hideTimer.current) {
      window.clearTimeout(hideTimer.current)
      hideTimer.current = null
    }
  }

  const hideNow = () => {
    clearHideTimer()
    setVisible(false)
  }

  useEffect(() => {
    const hide = () => {
      const elapsed = Date.now() - startedAt.current
      const delay = Math.max(MIN_VISIBLE_MS - elapsed, 0)

      clearHideTimer()

      hideTimer.current = window.setTimeout(() => {
        setVisible(false)
        hideTimer.current = null
      }, delay)
    }

    hide()

    return clearHideTimer
  }, [pathname])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return
      }

      const target = event.target as Element | null
      const link = target?.closest("a")

      if (link instanceof HTMLAnchorElement && isInternalLink(link)) {
        startedAt.current = Date.now()
        setVisible(true)
      }
    }

    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  useEffect(() => {
    const onPageShow = () => {
      hideNow()
    }

    const onPopState = () => {
      hideNow()
    }

    window.addEventListener("pageshow", onPageShow)
    window.addEventListener("popstate", onPopState)

    return () => {
      window.removeEventListener("pageshow", onPageShow)
      window.removeEventListener("popstate", onPopState)
      clearHideTimer()
    }
  }, [])

  if (!visible) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
      role="status"
      aria-label="Loading Epeno Advisory"
    >
      <div className="flex flex-col items-center gap-5">
        <div className="relative flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
          <span className="absolute inset-0 rounded-full border-2 border-primary/25" />
          <span className="ep-loader-ring absolute inset-0 rounded-full border-2 border-transparent border-t-primary" />
          <img
            src="/epeno-logo.png"
            alt=""
            className="h-16 w-16 rounded-full object-contain sm:h-20 sm:w-20"
          />
        </div>
        <div className="text-center">
          <p className="font-heading text-xl font-extrabold uppercase tracking-tight text-navy sm:text-2xl">
            Epeno
          </p>
          <p className="mt-1 font-heading text-[0.68rem] font-extrabold tracking-[0.18em] text-primary">
            सोच हमारी, कामयाबी आपकी
          </p>
        </div>
      </div>
    </div>
  )
}
