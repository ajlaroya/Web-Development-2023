import { getProducts } from "../utils/shopify";
import { Key } from "react";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import HeroCard from "@/components/HeroCard";

export default async function Home() {
  const data = await getProducts();
  const products = data.products.edges;

  return (
    <div className="flex flex-col min-h-[681px]">
      <Navbar />
      <div className="flex flex-col flex-grow pb-[19px] pt-[64px] md:pt-[80px] leading-[24px]">
        <main>
          <div className="px-[19px] md:px-[26px]">
            <HeroCard />
            <div className="grid grid-cols-1 gap-[19px]">
              <div className="animate">
                {/* Card */}
                <div className="flex flex-col relative md:w-[654px] bg-[#1d1d1d] overflow-hidden w-full aspect-square rounded-[13px]">
                  {/* Card content */}
                  <div className="flex flex-grow p-[19px] relative z-10">
                    <h2 className="mb-[17px] mt-[-3px]">
                      <span className="flex space-between gap-[17px]">
                        <span>QKC</span>
                        <span></span>
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product: { node: { id: Key | null | undefined } }) => {
            return <ProductCard key={product.node.id} product={product} />;
          })}
          </div>
        </div>
      </main> */}
    </div>
  );
}
