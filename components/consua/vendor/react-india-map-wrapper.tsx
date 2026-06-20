"use client"

import { useLayoutEffect, useRef, type ComponentType } from "react"

// Vendored from the Surakshamitra project so the map renderer stays local.
import { IndiaMap as VendoredIndiaMap } from "./react-india-map.mjs"

export type EpenoMapStateData = {
  id: string
  customData?: Record<string, unknown>
}

type IndiaMapProps = {
  mapStyle?: {
    backgroundColor?: string
    hoverColor?: string
    stroke?: string
    strokeWidth?: number
    tooltipConfig?: {
      backgroundColor?: string
      textColor?: string
    }
  }
  stateData?: EpenoMapStateData[]
  onStateHover?: (stateId: string, stateInfo?: EpenoMapStateData) => void
  onStateClick?: (stateId: string, stateInfo?: EpenoMapStateData) => void
}

const MapRenderer = VendoredIndiaMap as ComponentType<IndiaMapProps>

export function IndiaMap(props: IndiaMapProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const normalizeSvg = () => {
      const svg = root.querySelector("svg")
      if (!svg) return false

      // The vendored map ships with width/height but no viewBox. Without a
      // viewBox, CSS resizes the viewport while the paths keep their original
      // coordinates, which crops eastern and southern India.
      if (svg.getAttribute("viewBox") !== "0 0 611.86 695.702") {
        svg.setAttribute("viewBox", "0 0 611.86 695.702")
      }
      if (svg.getAttribute("preserveAspectRatio") !== "xMidYMid meet") {
        svg.setAttribute("preserveAspectRatio", "xMidYMid meet")
      }
      if (svg.hasAttribute("width")) svg.removeAttribute("width")
      if (svg.hasAttribute("height")) svg.removeAttribute("height")
      if (svg.getAttribute("role") !== "img") svg.setAttribute("role", "img")
      if (svg.getAttribute("aria-label") !== "Interactive map of India") {
        svg.setAttribute("aria-label", "Interactive map of India")
      }
      return true
    }

    normalizeSvg()

    // Keep watching: the vendored component rewrites its dangerously-set SVG
    // after hover/state updates, restoring the original width/height and
    // dropping the viewBox. Re-normalize every replacement.
    const observer = new MutationObserver(() => {
      normalizeSvg()
    })

    observer.observe(root, {
      childList: true,
      subtree: true,
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={rootRef} className="responsive-india-map">
      <MapRenderer {...props} />
    </div>
  )
}
