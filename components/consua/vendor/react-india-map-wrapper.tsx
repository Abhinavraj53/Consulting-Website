"use client"

import type { ComponentType } from "react"

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

export const IndiaMap = VendoredIndiaMap as ComponentType<IndiaMapProps>
