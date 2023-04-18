import Footer from "@/components/Footer";
import ProductDescription from "@/components/ProductDescription";
import ProductImage from "@/components/ProductImage";
import ProductSlider from "@/components/ProductSlider";

import { client } from "../../../utils/shopify";

export default async function ProductDetail({ params }) {
  const handle = params.handle;
  const data = await client.product.fetchByHandle(handle);
  const product = JSON.parse(JSON.stringify(data));
  const { descriptionHtml, title, images, options, variants } = product;

  return (
    <main
      id="page"
      className="flex-col min-w-full pb-[19px] pt-[64px] md:pt-[80px] px-[19px] md:px-[26px] transition duration-300 ease-in overflow-x-hidden"
    >
      {/* Product details */}
      <div className="flex flex-col md:flex-row-reverse gap-6">
        <ProductImage images={images} />
        <ProductDescription
          description={descriptionHtml}
          title={title}
          options={options}
          variants={variants}
        />
      </div>

      <ProductSlider />
      <Footer />
    </main>
  );
}
