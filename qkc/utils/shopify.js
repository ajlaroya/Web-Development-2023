import Client from 'shopify-buy';

const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;

// Initializing a client to return content
export const client = Client.buildClient({
  domain: domain,
  storefrontAccessToken: storefrontAccessToken
});