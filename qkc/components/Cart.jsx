"use client";
import { ShopContext } from "@/context/shopContext";
import Image from "next/image";
import { useContext } from "react";

const Cart = ({ checkout, cartToggle, handleCartToggle }) => {
  const { removeItemFromCheckout } = useContext(ShopContext);
  return (
    <div
      className={`${
        cartToggle
          ? "opacity-100"
          : "translate-x-[360px] sm:translate-x-[450px]"
      } fixed bottom-[20px] right-[20px] top-[65px] z-[999] flex h-auto w-[340px] flex-col rounded-xl bg-[#1d1d1d] p-[17px] transition duration-300 ease-in-out sm:w-[420px] md:bottom-[26px] md:right-[26px] md:top-[80px]`}
      aria-hidden="true"
    >
      <div className="mb-4 flex w-full items-center justify-between border-b border-[hsla(0,0%,100%,.6)] pb-4">
        <h2>Cart</h2>
        <h3>{checkout?.lineItems?.length} items</h3>
        <button
          className="cursor z-10 inline-block"
          id="shoppingBag"
          aria-label="Close"
          onClick={handleCartToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31.4"
            height="31.4"
            viewBox="0 0 31.4 31.4"
            className="inline-block h-4 w-4 overflow-hidden"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="m.7.7 30 30M30.7.7l-30 30"
            ></path>
          </svg>
        </button>
      </div>

      {/* Cart line items */}
      {checkout?.lineItems?.map((item, index) => (
        <ul
          className="mb-4 mt-[-17px] list-outside list-none list-image-none"
          key={index}
        >
          <li className="group relative mx-[-17px] flex px-[17px] transition duration-500 ease-in-out hover:bg-white hover:text-black">
            <div className="flex shrink items-center border-b border-[hsla(0,0%,100%,.6)]">
              <Image
                src={item.variant.image.src}
                alt={item.title}
                width={150}
                height={150}
                className="h-20 w-20 p-1"
              />
            </div>
            <div className="grow border-b border-[hsla(0,0%,100%,.6)] pb-5 pl-2 pt-8">
              <span className="mb-1 flex items-center gap-2">
                {/* Remove item button */}
                <button
                  title="Remove item"
                  className="relative z-50 cursor-pointer bg-transparent align-middle opacity-0 transition duration-500 ease-in-out group-hover:opacity-100"
                  onClick={() => {
                    removeItemFromCheckout(checkout.id, item.id);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    className="w-[1em]"
                    aria-hidden="true"
                  >
                    <circle
                      cx="14"
                      cy="14"
                      r="13"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                    ></circle>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                      d="M7.2 14.6h13.6"
                    ></path>
                  </svg>
                  <span className="sr-only">Remove</span>
                </button>
                <span className="text-sm font-semibold sm:text-base">
                  <a
                    href=""
                    className="ml-[-20px] inline-block group-hover:ml-[0px]"
                  >
                    {item.title}
                  </a>
                </span>
                <span className="ml-auto whitespace-nowrap text-sm font-semibold sm:text-base">
                  $
                  {Intl.NumberFormat("en-AU").format(
                    item.variant.priceV2.amount * item.quantity
                  )}
                </span>
              </span>
              {/* Badges */}
              <div className="transition duration-500 group-hover:opacity-0">
                <ul className="flex">
                  <li className="flex min-w-0 basis-1/2 pl-[0.3em]">
                    <span className="inline-block flex-1 shrink grow whitespace-nowrap rounded-[0.5em] border border-[#383838] bg-[#383838] px-[6px] py-[3px] text-center align-middle text-xs font-medium leading-[1] text-[hsla(0,0%,100%,.6)] sm:text-sm">
                      <span className="relative top-[-0.05em]">
                        {item.variant.title}
                      </span>
                    </span>
                  </li>
                  <li className="flex min-w-0 basis-1/2 pl-[0.3em]">
                    <span className="inline-block flex-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-[0.5em] border border-[#383838] bg-[#1d1d1d] px-[6px] py-[3px] text-center align-middle text-xs font-medium leading-[1] text-[hsla(0,0%,100%,.6)] sm:text-sm">
                      <span className="relative top-[-0.05em]">
                        x{item.quantity}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      ))}

      {/* Cart subtotal */}
      {checkout?.lineItems?.length > 0 ? (
        <div className="mt-auto pt-[1em]">
          <div className="mb-[1em] flex items-start justify-between gap-[0.5em] font-bold">
            <h3>Subtotal</h3>
            <h3>
              $
              {Intl.NumberFormat("en-AU").format(
                checkout?.subtotalPrice?.amount
              )}
            </h3>
          </div>
          <a href={checkout?.webUrl} target="_blank" rel="noreferrer">
            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-[#383838] px-6 py-4 text-center align-middle text-white transition duration-500 ease-in-out hover:bg-white hover:text-black"
            >
              Checkout
            </button>
          </a>
        </div>
      ) : (
        <div className="mt-auto border-t pt-[1em]">
          <div className="mb-[1em] flex justify-center gap-[0.5em]">
            <span>Your cart is empty</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
