import Product from "@/app/product/[handle]/Product";
import { getProducts, getProduct } from "@/hooks/shopFunctions";

export async function generateMetadata({ params }) {
  const handle = params.handle;
  const product = await getProduct(handle);

  return {
    title: `${product.title} | QKC Studios®`,
    description: `${product.description}`,
    referrer: "origin-when-cross-origin",
    keywords: ["minimal", "modern", "affordable", "clothing", "brand", "introvert", "fashion", "quiet", "kids", "club"],
    colorScheme: "dark",
    creator: "Arthur Laroya",
    openGraph: {
      title: `${product.title} | QKC Studios®`,
      description: `${product.description}`,
      url: `https://qkc-studios.vercel.app/${handle}`,
      siteName: 'QKC Studios®',
      images: [
        {
          url:  `${product.images[0].src}`
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
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
