import Product from "@/app/product/[handle]/Product";
import { getProducts, getProduct } from "@/hooks/shopFunctions";

export async function generateMetadata({ params }) {
  const handle = params.handle;
  const product = await getProduct(handle);

  return {
    title: `${product.title} | QKC Studios®`,
    description: "minimal, modern, and affordable clothing brand for introverts",
    referrer: "origin-when-cross-origin",
    keywords: ["minimal", "modern", "affordable", "clothing", "brand", "introverts", "fashion", "men", "women", "kids", "accessories", "shoes", "clothing"],
    colorScheme: "dark",
    creator: "Arthur Laroya",
  };
}

export default async function ProductDetail({ params }) {
  const handle = params.handle;
  const productData = getProduct(handle);
  const productsData = getProducts();

  // Parallel data fetching
  const [product, products] = await Promise.all([productData, productsData]);

  return (
    <main
      id="page"
      className="min-w-full flex-col overflow-x-hidden px-[19px] pb-[19px] pt-[64px] transition duration-300 ease-in-out md:px-[26px] md:pt-[80px]"
    >
      <Product product={product} products={products} />
    </main>
  );
}
