// src/lib/sanity.ts
import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "your_project_id", // Replace with your actual Sanity project ID
  dataset: "production",
  apiVersion: "2023-01-01", // Use your correct API version
  useCdn: false, // Set to true for faster response with cached data
});
