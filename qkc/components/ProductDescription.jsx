"use client";

import { client } from "@/utils/shopify";
import { useState } from "react";

const ProductDescription = ({
  product,
  checkout,
  activeProduct,
  selectedProduct,
  setSelectedProduct
}) => {
  const { description, title, variants, options } = product;
  const markup = { __html: description };
  const colourCount = Object.keys(options[0].values).length;
  const [activeColour, setActiveColour] = useState(selectedProduct.colour);
  const [activeSize, setActiveSize] = useState(selectedProduct.size);

  const checkoutId = checkout.id
  const variantId = activeProduct.id

  const lineItemsToAdd = [
    {
      variantId: variantId,
      quantity: 1,
    }
  ];
  console.log(activeProduct)

  const handleAddToCart = () => {
    console.log("adding to cart")
    client.checkout.addLineItems(checkoutId, lineItemsToAdd).then((checkout) => {
      // Do something with the updated checkout
      const cart = JSON.parse(JSON.stringify(checkout))
      console.log(cart); // Array with one additional line item
    });

  }

  return (
    <div className="flex flex-col md:w-1/2">
      {/* Product info */}
      <div className="flex flex-wrap justify-between gap-y-4 border-t pt-2">
        <h1 itemProp="name" className="relative">
          {title}
        </h1>
        <p>{colourCount} colours</p>
      </div>
      {/* Product SKU */}
      <div className="mt-auto">
        {/* Flipper */}
        <div className="relative flex overflow-hidden text-[130px] tracking-tight">
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
          <span aria-hidden="true">Colours</span>
          <span>-​</span>
        </button>
        <div
          aria-hidden="true"
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
          <span aria-hidden="true">Sizes</span>
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
          className="flex w-full cursor-pointer justify-between border-b bg-transparent py-5 text-left transition"
        >
          <span aria-hidden="true">Description</span>
          <span>+​</span>
        </button>
        {/* <div dangerouslySetInnerHTML={markup} className="border-b pb-5" /> */}

        {/* <div
        aria-hidden="true"
        className="max-h-full relative overflow-hidden border-b transition"
      >
        <div className="mb-5">
          <table className=" table w-full border-spacing-[2px] border-gray-200 mb-[-20px]">
            <tbody className="table-row-group align-middle">
              <tr className="table-row">
                <th
                  width="20%"
                  className="table-cell pr-4 py-2 text-left align-top w-32"
                >
                  Dimensions
                </th>
                <td className="table-cell py-2">
                  6000 × 4000 px (72 dpi)
                </td>
              </tr>
              <tr className="table-row">
                <th className="table-cell pr-4 py-2 text-left align-top w-32">
                  File Size
                </th>
                <td className="table-cell py-2">approx. 150 MB</td>
              </tr>
              <tr>
                <th className="table-cell pr-4 py-2 text-left align-top w-32">
                  Format
                </th>
                <td className="table-cell py-2">Adobe PSD File</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
      </div>
      {/* Button group */}
      <div className="mt-5 flex gap-5">
        <button
          type="button"
          className="shrink grow basis-1/2 cursor-pointer items-center justify-center rounded-xl bg-black px-6 py-4 ring-[0.8px] ring-inset ring-white transition duration-200 hover:text-white hover:ring hover:ring-white"
          onClick={handleAddToCart}
        >
          Add to Cart{" "}
          <span className="whitespace-nowrap">
            (${variants[0].price.amount})
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
