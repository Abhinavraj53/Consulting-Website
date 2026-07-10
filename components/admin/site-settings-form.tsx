"use client"

import { useState } from "react"
import { Megaphone, Save } from "lucide-react"
import type { SerializedSiteSettings } from "@/lib/site-settings"

type SaveState = "idle" | "saving" | "saved" | "error"

export function SiteSettingsForm({
  settings,
}: {
  settings: SerializedSiteSettings
}) {
  const [marqueeText, setMarqueeText] = useState(settings.marqueeText)
  const [marqueeEnabled, setMarqueeEnabled] = useState(settings.marqueeEnabled)
  const [saveState, setSaveState] = useState<SaveState>("idle")
  const [message, setMessage] = useState("")

  const saveSettings = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSaveState("saving")
    setMessage("")

    try {
      const response = await fetch("/api/admin/site-settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ marqueeText, marqueeEnabled }),
      })
      const result = (await response.json()) as {
        error?: string
        settings?: SerializedSiteSettings
      }

      if (!response.ok) {
        throw new Error(result.error || "Unable to save marquee settings.")
      }

      if (result.settings) {
        setMarqueeText(result.settings.marqueeText)
        setMarqueeEnabled(result.settings.marqueeEnabled)
      }

      setSaveState("saved")
      setMessage("Marquee information bar updated.")
      window.setTimeout(() => setSaveState("idle"), 1_800)
    } catch (error) {
      setSaveState("error")
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to save marquee settings.",
      )
    }
  }

  return (
    <form
      onSubmit={saveSettings}
      className="rounded-2xl border border-border bg-white p-5 shadow-[0_24px_70px_-55px_rgba(16,47,88,0.5)] sm:p-6"
    >
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <div className="flex items-center gap-2 text-primary">
            <Megaphone className="h-5 w-5" />
            <p className="font-heading text-xs font-extrabold uppercase tracking-[0.2em]">
              Website information bar
            </p>
          </div>
          <h2 className="mt-3 font-heading text-xl font-extrabold text-foreground">
            Top marquee message
          </h2>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            This text appears above the website header.
          </p>
        </div>

        <label className="flex w-fit cursor-pointer items-center gap-3 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-bold text-foreground">
          <input
            type="checkbox"
            checked={marqueeEnabled}
            onChange={(event) => setMarqueeEnabled(event.target.checked)}
            className="h-4 w-4 accent-primary"
          />
          Show bar
        </label>
      </div>

      <div className="mt-5">
        <textarea
          value={marqueeText}
          onChange={(event) => setMarqueeText(event.target.value)}
          maxLength={220}
          rows={3}
          placeholder="Enter announcement text..."
          className="w-full resize-none rounded-xl border border-border bg-secondary px-4 py-3 text-sm font-semibold leading-6 text-foreground outline-none transition-colors focus:border-primary focus:bg-white"
        />
        <div className="mt-2 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <p
            role={saveState === "error" ? "alert" : "status"}
            className={`text-sm font-semibold ${
              saveState === "error" ? "text-red-600" : "text-muted-foreground"
            }`}
          >
            {message || `${marqueeText.length}/220 characters`}
          </p>
          <button
            type="submit"
            disabled={saveState === "saving"}
            className="ep-button min-w-36 gap-2 rounded-xl disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Save className="h-4 w-4" />
            {saveState === "saving" ? "Saving..." : "Save bar"}
          </button>
        </div>
      </div>
    </form>
  )
}
