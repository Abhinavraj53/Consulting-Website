import { NextRequest, NextResponse } from "next/server"
import {
  adminCookieName,
  adminCookieOptions,
  createAdminSession,
  validateAdminCredentials,
} from "@/lib/admin-auth"

export const runtime = "nodejs"

const loginAttempts = new Map<string, { count: number; resetAt: number }>()

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown"
  const now = Date.now()
  const attempt = loginAttempts.get(ip)

  if (attempt && attempt.resetAt > now && attempt.count >= 5) {
    return NextResponse.json(
      { error: "Too many login attempts. Try again in 15 minutes." },
      { status: 429 },
    )
  }

  try {
    const body = (await request.json()) as {
      username?: string
      password?: string
    }

    if (
      !validateAdminCredentials(body.username || "", body.password || "")
    ) {
      loginAttempts.set(ip, {
        count: (attempt?.resetAt || 0) > now ? attempt!.count + 1 : 1,
        resetAt: now + 15 * 60_000,
      })
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 },
      )
    }

    loginAttempts.delete(ip)
    const response = NextResponse.json({ success: true })
    response.cookies.set(
      adminCookieName,
      createAdminSession(),
      adminCookieOptions,
    )
    return response
  } catch {
    return NextResponse.json(
      { error: "Admin authentication is not configured" },
      { status: 503 },
    )
  }
}
