// sanity/lib/client.ts
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "b40usb73",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Important: false for write operations
  token: process.env.SANITY_API_TOKEN, // ← ADD THIS LINE (for creating reviews)
});

// Optional: Export a read-only client for public data
export const clientReadOnly = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "b40usb73",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true, // Can use CDN for read-only
});

// import { createClient } from "next-sanity";

// export const client = createClient({
//   projectId: "b40usb73",
//   dataset: "production",
//   apiVersion: "2024-01-01",
//   useCdn: false,
// });