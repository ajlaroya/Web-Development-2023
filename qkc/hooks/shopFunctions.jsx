import { client } from "@/utils/shopify";

// SSR DATA FETCHING
export async function getProducts() {
  const products = await client.product.fetchAll();
  return JSON.parse(JSON.stringify(products));
}

export async function getProduct(handle) {
  const product = await client.product.fetchByHandle(handle);
  return JSON.parse(JSON.stringify(product));
}
