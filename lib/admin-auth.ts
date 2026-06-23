import "server-only"

import {
  createHmac,
  timingSafeEqual,
} from "node:crypto"
import { cookies } from "next/headers"

export const adminCookieName = "epeno_admin_session"
const sessionDurationSeconds = 60 * 60 * 12

function encode(value: string) {
  return Buffer.from(value).toString("base64url")
}

function decode(value: string) {
  return Buffer.from(value, "base64url").toString("utf8")
}

function getSessionSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET
  if (!secret || secret.length < 32) {
    throw new Error("ADMIN_SESSION_SECRET must contain at least 32 characters")
  }
  return secret
}

function sign(payload: string) {
  return createHmac("sha256", getSessionSecret())
    .update(payload)
    .digest("base64url")
}

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left)
  const rightBuffer = Buffer.from(right)
  return (
    leftBuffer.length === rightBuffer.length &&
    timingSafeEqual(leftBuffer, rightBuffer)
  )
}

export function validateAdminCredentials(username: string, password: string) {
  const configuredUsername = process.env.ADMIN_USERNAME
  const configuredPassword = process.env.ADMIN_PASSWORD

  if (!configuredUsername || !configuredPassword) {
    throw new Error("Admin credentials are not configured")
  }

  return (
    safeEqual(username, configuredUsername) &&
    safeEqual(password, configuredPassword)
  )
}

export function createAdminSession() {
  const payload = encode(
    JSON.stringify({
      role: "admin",
      expiresAt: Date.now() + sessionDurationSeconds * 1_000,
    }),
  )
  return `${payload}.${sign(payload)}`
}

export function verifyAdminSession(token?: string) {
  if (!token) return false

  const [payload, signature] = token.split(".")
  if (!payload || !signature || !safeEqual(signature, sign(payload))) {
    return false
  }

  try {
    const session = JSON.parse(decode(payload)) as {
      role?: string
      expiresAt?: number
    }
    return (
      session.role === "admin" &&
      typeof session.expiresAt === "number" &&
      session.expiresAt > Date.now()
    )
  } catch {
    return false
  }
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies()
  return verifyAdminSession(cookieStore.get(adminCookieName)?.value)
}

export const adminCookieOptions = {
  httpOnly: true,
  sameSite: "strict" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: sessionDurationSeconds,
}
