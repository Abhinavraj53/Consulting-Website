import { NextRequest, NextResponse } from "next/server"
import { saveLead } from "@/lib/leads"

export const runtime = "nodejs"

const attempts = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for")
  const key = forwarded?.split(",")[0]?.trim() || "unknown"
  const now = Date.now()
  const current = attempts.get(key)

  if (!current || current.resetAt < now) {
    attempts.set(key, { count: 1, resetAt: now + 60_000 })
    return false
  }

  current.count += 1
  return current.count > 10
}

export async function POST(request: NextRequest) {
  if (isRateLimited(request)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429 },
    )
  }

  try {
    const body = (await request.json()) as Record<string, unknown>
    const result = await saveLead(body)
    return NextResponse.json({
      success: true,
      duplicate: !result.created,
    })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to save your enquiry"
    const configurationError =
      message.includes("MONGODB_URI") || message.includes("configured")

    return NextResponse.json(
      { error: configurationError ? "Lead storage is not configured" : message },
      { status: configurationError ? 503 : 400 },
    )
  }
}
