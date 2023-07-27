"use client";

import { useContext, useState } from "react";
import { ShopContext } from "@/context/shopContext";

function convert(color) {
  var colours = {
    onyx: "#0e1111",
    sky: "#87CEEB",
    blush: "#FE828C",
    slate: "#B8BEC3",
    chalk: "#FFFFFF",
    indigo: "#202A44",
    spruce: "#0a5f38",
  };

  if (typeof colours[color.toLowerCase()] != "undefined")
    return colours[color.toLowerCase()];
  return false;
}

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

  return (
    <div className="flex flex-col md:w-1/2">
      {/* Product info */}
      <div className="flex flex-wrap justify-between text-xl font-semibold tracking-tight">
        <span className="italic">{title}</span>
        <p>${Intl.NumberFormat("en-AU").format(variants[0].price.amount)}</p>
      </div>
      {/* Product SKU */}
      <div className="mt-auto">
        <div
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          className="transition duration-300 ease-in-out"
        />
      </div>

      {/* Accordion */}
      <div className="">
        {/* Colors */}
        <div
          type="button"
          className="flex w-full justify-between bg-transparent py-4 text-left font-bold transition"
        >
          <span>Colour</span>
          <span>{activeColour}​</span>
        </div>
        <div className="relative max-h-[80px] overflow-hidden transition">
          <div className="mb-3">
            <div className="mb-0 flex w-full gap-5">
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
                      activeColour === colour.value
                        ? "ring-2 ring-white"
                        : "ring-[#1d1d1d]"
                    } flex grow basis-1/3 cursor-pointer items-center justify-center rounded-full p-4 text-center text-xs ring-1 ring-inset transition duration-300 ease-in-out hover:ring-gray-200 md:text-sm`}
                    style={{ backgroundColor: convert(colour.value) }}
                  ></label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sizes */}
        <div className="flex w-full justify-between bg-transparent py-4 text-left font-semibold transition">
          <span>Size</span>
          <span>{activeSize}</span>
        </div>
        <div className="relative max-h-[80px] overflow-hidden transition">
          <div className="mb-5">
            <div className="mb-0 flex w-full gap-5">
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
      </div>

      {/* Button group */}
      <div className="mt-5 flex gap-5">
        <button
          type="button"
          className="shrink grow basis-1/2 cursor-pointer items-center justify-center rounded-xl bg-[#D3D3D3] px-6 py-4 text-sm sm:text-md text-black ring-inset transition duration-200 hover:text-white hover:ring-1 hover:ring-white font-semibold"
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
