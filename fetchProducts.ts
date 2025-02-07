import { sanityClient } from "./sanity";

export async function fetchProducts() {
  try {
    const products = await sanityClient.fetch('*[_type == "product"]');
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
