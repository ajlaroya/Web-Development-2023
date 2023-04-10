import { getProducts } from "../utils/shopify";
import { Key } from "react";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import HeroCard from "@/components/HeroCard";
import LeftPanel from "@/components/LeftPanel";

export default async function Home() {
  const data = await getProducts();
  const products = data.products.edges;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Side panels */}
      <LeftPanel />

      {/* Page push */}
      <div className="flex flex-col flex-grow pb-[19px] pt-[64px] md:pt-[80px] translate-x-[440px]">
        <main>
          <div className="px-[19px] md:px-[26px]">
            <HeroCard />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full ">
              {/* Initial card */}
              <div className="flex relative w-auto bg-[#1d1d1d] overflow-hidden aspect-square rounded-[13px] text-[17px] tracking-wide leading-6">
                {/* Card content */}
                <div className="flex flex-col flex-grow p-[19px] relative z-10">
                  {/* Card title */}
                  <h2 className="mb-[17px] mt-[-3px]">
                    <span className="flex justify-between font-bold">
                      <span>QKC</span>
                      <span></span>
                    </span>
                  </h2>
                  {/* Card desc */}
                  <div>
                    <p className="text-justify">
                      QKC Studios is an apparel line that celebrates the unique
                      qualities of introverts. All of the designs are inspired
                      by introversion and feature bold statements. QKC Studios
                      is committed to creating a community where introverts can
                      feel empowered and accepted.
                    </p>
                  </div>
                </div>
              </div>

              {/* Product section */}
              {products.map(
                (product: { node: { id: Key | null | undefined } }) => {
                  return (
                    <ProductCard key={product.node.id} product={product} />
                  );
                }
              )}
            </div>
          </div>
        </main>

        {/* Footer */}
      </div>
    </div>
  );
}
