import "server-only"

import type { Collection, ObjectId } from "mongodb"
import { getDatabase } from "./mongodb"

export type LeadSource = "contact-page" | "visitor-popup" | string

export type LeadSubmission = {
  source: LeadSource
  service: string
  message: string
  submittedAt: Date
}

export type LeadDocument = {
  _id?: ObjectId
  name: string
  email: string
  phone: string
  normalizedPhone: string
  service: string
  message: string
  sources: string[]
  submissionCount: number
  submissions: LeadSubmission[]
  createdAt: Date
  updatedAt: Date
}

let indexesReady = false

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string"
    ? value.trim().replace(/\s+/g, " ").slice(0, maxLength)
    : ""
}

export function normalizePhone(value: unknown) {
  let digits = typeof value === "string" ? value.replace(/\D/g, "") : ""
  if (digits.length === 12 && digits.startsWith("91")) {
    digits = digits.slice(2)
  } else if (digits.length > 10) {
    digits = digits.slice(-10)
  }
  return digits
}

async function getLeadCollection() {
  const database = await getDatabase()
  const collection = database.collection<LeadDocument>("leads")

  if (!indexesReady) {
    await collection.createIndex(
      { normalizedPhone: 1 },
      { unique: true, name: "unique_lead_phone" },
    )
    await collection.createIndex({ updatedAt: -1 }, { name: "recent_leads" })
    indexesReady = true
  }

  return collection
}

export async function saveLead(input: Record<string, unknown>) {
  const name = cleanText(input.name, 100)
  const email = cleanText(input.email, 160).toLowerCase()
  const phone = cleanText(input.phone, 30)
  const normalizedPhone = normalizePhone(phone)
  const service = cleanText(input.service, 120)
  const message = cleanText(input.message, 1_500)
  const source = cleanText(input.source, 60) || "website"

  if (name.length < 2) throw new Error("Please enter a valid name")
  if (normalizedPhone.length !== 10) {
    throw new Error("Please enter a valid 10-digit phone number")
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Please enter a valid email address")
  }

  const collection = await getLeadCollection()
  const now = new Date()
  const submission: LeadSubmission = {
    source,
    service,
    message,
    submittedAt: now,
  }

  const result = await collection.updateOne(
    { normalizedPhone },
    {
      $setOnInsert: {
        normalizedPhone,
        createdAt: now,
      },
      $set: {
        name,
        email,
        phone: normalizedPhone,
        service,
        message,
        updatedAt: now,
      },
      $addToSet: { sources: source },
      $push: {
        submissions: {
          $each: [submission],
          $slice: -25,
        },
      },
      $inc: { submissionCount: 1 },
    },
    { upsert: true },
  )

  return {
    created: result.upsertedCount === 1,
    normalizedPhone,
  }
}

export async function getAllLeads() {
  const collection: Collection<LeadDocument> = await getLeadCollection()
  return collection.find({}).sort({ updatedAt: -1 }).limit(5_000).toArray()
}
