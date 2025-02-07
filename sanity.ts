// src/sanity/lib/sanity.ts
import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "s7gk6yhf", 
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: false,
});
