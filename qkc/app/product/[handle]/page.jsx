import { check } from "prettier";
import { client } from "../../../utils/shopify";
import Product from "@/components/Product";

async function getProducts() {
  const products = await client.product.fetchAll();
  return JSON.parse(JSON.stringify(products));
}

async function createCheckout() {
  const checkout = await client.checkout.create();
  return JSON.parse(JSON.stringify(checkout));
}

export default async function ProductDetail({ params }) {
  const handle = params.handle;

  async function getProduct() {
    const product = await client.product.fetchByHandle(handle);
    return JSON.parse(JSON.stringify(product));
  }

  const productData = getProduct();
  const productsData = getProducts()
  const checkoutData = createCheckout();

  const [product, products, checkout] = await Promise.all([productData, productsData, checkoutData]);

  return (
    <main
      id="page"
      className="min-w-full flex-col overflow-x-hidden px-[19px] pb-[19px] pt-[64px] transition duration-300 ease-in md:px-[26px] md:pt-[80px]"
    >
      <Product product={product} products={products} checkout={checkout}/>
    </main>
  );
}
