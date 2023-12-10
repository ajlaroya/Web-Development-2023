"use server"

import { scrapeAmazonProduct } from "../scraper";

export async function scrapeAndStoreProduct(productUrl: string) {
    if(!productUrl) return;

    try {
        // timestamp 1:48:39 DB
        const scrapedProduct = await scrapeAmazonProduct(productUrl);

        if(!scrapedProduct) return;
        // 
    } catch (error:any) {
        throw new Error(`Failed to create/update product: ${error.message}`)
    }
}