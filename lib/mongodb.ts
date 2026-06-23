import "server-only"

import { attachDatabasePool } from "@vercel/functions"
import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI
const databaseName = process.env.MONGODB_DB || "epeno"

declare global {
  var __epenoMongoClientPromise: Promise<MongoClient> | undefined
}

function getClientPromise() {
  if (!uri) {
    throw new Error("MONGODB_URI is not configured")
  }

  if (!global.__epenoMongoClientPromise) {
    const client = new MongoClient(uri, {
      maxPoolSize: 10,
      minPoolSize: 0,
      maxIdleTimeMS: 5_000,
      serverSelectionTimeoutMS: 8_000,
    })

    if (process.env.VERCEL) {
      attachDatabasePool(client)
    }

    global.__epenoMongoClientPromise = client.connect()
  }

  return global.__epenoMongoClientPromise
}

export async function getDatabase() {
  const client = await getClientPromise()
  return client.db(databaseName)
}
