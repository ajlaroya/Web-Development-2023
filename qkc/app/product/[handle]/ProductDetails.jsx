"use client";

import { useContext, useState } from "react";
import { ShopContext } from "@/context/shopContext";

const ProductDetails = ({
  product,
  activeProduct,
  selectedProduct,
  setSelectedProduct,
}) => {
  const { addItemToCheckout } = useContext(ShopContext);
  const { descriptionHtml, title, variants, options } = product;
  const [activeColour, setActiveColour] = useState(selectedProduct.colour);
  const [activeSize, setActiveSize] = useState(selectedProduct.size);
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="flex flex-col md:w-1/2">
      {/* Product info */}
      <div className="flex flex-wrap justify-between gap-y-4 border-t pt-2">
        <h1 itemProp="name" className="relative">
          {title}
        </h1>
        <p>${Intl.NumberFormat("en-AU").format(variants[0].price.amount)}</p>
      </div>
      {/* Product SKU */}
      <div className="mt-auto">
        {/* Flipper */}
        <div className="relative flex overflow-hidden text-7xl md:text-9xl tracking-tight py-3">
          QKC
        </div>
      </div>

      {/* Accordion */}
      <div className="border-t">
        {/* Colors */}
        <button
          type="button"
          data-id=""
          aria-expanded="false"
          className="flex w-full cursor-pointer justify-between bg-transparent py-4 text-left transition"
        >
          <span aria-hidden="true">Colour</span>
          <span>-​</span>
        </button>
        <div
          aria-hidden="false"
          className="relative max-h-[80px] overflow-hidden border-b transition"
        >
          <div className="mb-5">
            <div className="mb-0 flex w-full gap-4">
              {options[0].values.map((colour, index) => (
                <div key={index}>
                  <label
                    onClick={() => {
                      setSelectedProduct({
                        ...selectedProduct,
                        colour: colour.value,
                      });
                      setActiveColour(colour.value);
                    }}
                    className={`${
                      activeColour === colour.value ? "ring-white" : ""
                    } flex grow basis-1/3 cursor-pointer items-center justify-center rounded-lg bg-black px-4 py-2 text-center text-xs ring-1 ring-inset ring-[#1d1d1d] transition duration-300 ease-in-out hover:ring-gray-500 md:text-sm`}
                  >
                    {colour.value}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sizes */}
        <button
          type="button"
          data-id=""
          aria-expanded="false"
          className="flex w-full cursor-pointer justify-between bg-transparent py-4 text-left transition"
        >
          <span aria-hidden="true">Size</span>
          <span>-​</span>
        </button>
        <div
          aria-hidden="true"
          className="relative max-h-[80px] overflow-hidden border-b transition"
        >
          <div className="mb-5">
            <div className="mb-0 flex w-full gap-4">
              {/* not all products have sizes so render one size only */}
              {options[1] ? (
                options[1].values.map((size, index) => (
                  <div key={index}>
                    <label
                      onClick={() => {
                        setSelectedProduct({
                          ...selectedProduct,
                          size: size.value,
                        });
                        setActiveSize(size.value);
                      }}
                      className={`${
                        activeSize === size.value ? "ring-white" : ""
                      } flex grow basis-1/3 cursor-pointer items-center justify-center rounded-lg bg-black px-4 py-2 text-center text-xs ring-1 ring-inset ring-[#1d1d1d] transition duration-300 ease-in-out hover:ring-gray-500 md:text-sm`}
                    >
                      {size.value}
                    </label>
                  </div>
                ))
              ) : (
                // ONE SIZE ONLY
                <div>
                  <label className="flex grow basis-1/3 cursor-pointer items-center justify-center rounded-lg bg-black px-4 py-2 text-center text-xs ring-1 ring-inset ring-white transition duration-300 ease-in-out hover:ring-gray-500 md:text-sm">
                    OS
                  </label>
                </div>
              )}
              {}
            </div>
          </div>
        </div>

        {/* Description */}
        <button
          type="button"
          data-id=""
          aria-expanded="false"
          className="flex w-full cursor-pointer justify-between bg-transparent py-5 text-left transition"
          onClick={() => {setIsExpanded(!isExpanded)}}
        >
          <span aria-hidden="true">Description</span>
          <span>{isExpanded ? '-' : '+'}​</span>
        </button>
        <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} className={`${isExpanded ? 'block' : 'hidden'} border-b pb-5 transition duration-300 ease-in-out`} />
      </div>

      {/* Button group */}
      <div className="mt-5 flex gap-5">
        <button
          type="button"
          className="shrink grow basis-1/2 cursor-pointer items-center justify-center rounded-xl bg-[#1d1d1d] px-6 py-4 ring-inset transition duration-200 hover:text-white hover:ring-1 hover:ring-white md:text-sm"
          onClick={(e) => {
            e.preventDefault();
            addItemToCheckout(activeProduct.id, 1);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;