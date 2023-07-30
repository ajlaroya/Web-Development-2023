import React from "react";

import { client } from "../utils/shopify";
import ProductCard from "./ProductCard";

async function getProducts() {
  const products = await client.product.fetchAll();
  return JSON.parse(JSON.stringify(products));
}

// Home page product grid display
const Products = async () => {
  const products = await getProducts();

  return (
    <div className="grid h-full w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
      {/* Initial card */}
      <div className="relative flex aspect-square w-auto overflow-hidden rounded-xl bg-[#1d1d1d] text-[17px] leading-6 tracking-wide">
        {/* Card content */}
        <div className="relative z-10 flex flex-grow flex-col p-[19px] justify-center">
          {/* Card title */}
          <h2 className="mb-[17px] mt-[-3px]">
            <span className="flex justify-center font-bold sm:text-2xl md:text-lg tracking-tight">
              <a href="/about" className="cursor-help">QKC Studios®</a>
            </span>
          </h2>
          {/* Card desc */}
          <div className="mx-5 sm:mx-10 sm:text-xl md:text-lg">
            <p className="text-justify text-sm sm:text-lg text-gray-200 md:text-base tracking-tight">
              QKC Studios is an apparel line that celebrates the unique
              qualities of introverts. We are committed
              to creating a space where introverts can feel empowered and
              accepted.
            </p>
          </div>
        </div>
      </div>

      {/* Product cards */}
      {products.map((product, index) => {
        return <ProductCard key={product.id} product={product} index={index} />;
      })}
    </div>
  );
};

export default Products;
