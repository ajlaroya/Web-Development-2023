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
      className="min-w-full flex-col overflow-x-hidden px-[19px] pb-[19px] pt-[64px] transition duration-300 ease-in md:px-[26px] md:pt-[80px]"
    >
      {/* Product details */}
      <div className="flex flex-col gap-6 md:flex-row-reverse">
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
