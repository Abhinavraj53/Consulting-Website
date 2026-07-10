import { NextRequest, NextResponse } from "next/server"
import { isAdminAuthenticated } from "@/lib/admin-auth"
import { updateSiteSettings } from "@/lib/site-settings"

export const runtime = "nodejs"

export async function PATCH(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const origin = request.headers.get("origin")
  if (origin && origin !== request.nextUrl.origin) {
    return NextResponse.json({ error: "Invalid request origin" }, { status: 403 })
  }

  try {
    const body = (await request.json()) as Record<string, unknown>
    const settings = await updateSiteSettings(body)
    return NextResponse.json({ success: true, settings })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to update site settings"
    const configurationError =
      message.includes("MONGODB_URI") || message.includes("configured")

    return NextResponse.json(
      {
        error: configurationError
          ? "Site settings storage is not configured"
          : message,
      },
      { status: configurationError ? 503 : 400 },
    )
  }
}
