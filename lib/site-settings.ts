import "server-only"

import { getDatabase } from "./mongodb"

export type SiteSettings = {
  marqueeText: string
  marqueeEnabled: boolean
  updatedAt?: Date
}

export type SerializedSiteSettings = {
  marqueeText: string
  marqueeEnabled: boolean
}

const SETTINGS_ID = "global"

export const defaultSiteSettings: SerializedSiteSettings = {
  marqueeEnabled: true,
  marqueeText:
    "Funding files, MSME support, startup registrations and compliance guidance are open for consultation.",
}

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string"
    ? value.trim().replace(/\s+/g, " ").slice(0, maxLength)
    : ""
}

function serializeSettings(settings?: Partial<SiteSettings> | null) {
  return {
    marqueeEnabled:
      typeof settings?.marqueeEnabled === "boolean"
        ? settings.marqueeEnabled
        : defaultSiteSettings.marqueeEnabled,
    marqueeText:
      cleanText(settings?.marqueeText, 220) || defaultSiteSettings.marqueeText,
  }
}

export async function getSiteSettings() {
  try {
    const database = await getDatabase()
    const settings = await database
      .collection<SiteSettings>("site_settings")
      .findOne({ _id: SETTINGS_ID } as object)

    return serializeSettings(settings)
  } catch (error) {
    return defaultSiteSettings
  }
}

export async function updateSiteSettings(input: Record<string, unknown>) {
  const marqueeText = cleanText(input.marqueeText, 220)
  const marqueeEnabled = Boolean(input.marqueeEnabled)

  if (marqueeEnabled && marqueeText.length < 8) {
    throw new Error("Please enter a marquee message with at least 8 characters.")
  }

  const nextSettings = {
    marqueeEnabled,
    marqueeText: marqueeText || defaultSiteSettings.marqueeText,
    updatedAt: new Date(),
  }

  const database = await getDatabase()
  await database.collection("site_settings").updateOne(
    { _id: SETTINGS_ID } as object,
    { $set: nextSettings },
    { upsert: true },
  )

  return serializeSettings(nextSettings)
}
