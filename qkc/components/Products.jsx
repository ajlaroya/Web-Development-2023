import React from "react";

import { client } from "../utils/shopify";
import ProductCard from "./ProductCard";

async function getProducts() {
  const products = await client.product.fetchAll();
  return JSON.parse(JSON.stringify(products));
}

const Products = async () => {
  const products = await getProducts();

  return (
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
              qualities of introverts. All of the designs are inspired by
              introversion and feature bold statements. QKC Studios is committed
              to creating a community where introverts can feel empowered and
              accepted.
            </p>
          </div>
        </div>
      </div>

      {/* Product cards */}
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Products;
