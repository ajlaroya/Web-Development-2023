"use client";

import { useContext } from "react";
import Menu from "./Menu";
import Cart from "./Cart";
import { ShopContext } from "@/context/shopContext";
import { Bars3Icon, ShoppingBagIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const { checkout, cartToggle, menuToggle, setCartToggle, setMenuToggle } =
    useContext(ShopContext);

  const handleCartToggle = () => {
    setCartToggle((prevState) => !prevState);
    if (cartToggle) {
      document.getElementById("page").classList.remove("-translate-x-[445px]");
    } else {
      document.getElementById("page").classList.add("-translate-x-[445px]");
      document.getElementById("page").classList.remove("translate-x-[445px]");
      setMenuToggle(false);
    }
  };

  const handleMenuToggle = () => {
    setMenuToggle((prevState) => !prevState);
    if (menuToggle) {
      document.getElementById("page").classList.remove("translate-x-[445px]");
    } else {
      document.getElementById("page").classList.add("translate-x-[445px]");
      document.getElementById("page").classList.remove("-translate-x-[445px]");
      setCartToggle(false);
    }
  };

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-[999] bg-black">
        <div className="flex justify-between p-[19px] font-medium md:p-[26px] md:text-[19px]">
          <label className="swap-rotate swap cursor-pointer whitespace-nowrap transition duration-300 ease-in-out hover:text-zinc-400">
            <input type="checkbox" onClick={handleMenuToggle} />
            <Bars3Icon className="swap-on h-6 w-6" />
            <Bars3Icon className="swap-off h-6 w-6" />
          </label>

          <span className="cursor-pointer font-bold hover:text-zinc-400">
            <a href="/">
              <div>QKC Studios®</div>
            </a>
          </span>

          <button
            className="flex cursor-pointer whitespace-nowrap transition duration-300 ease-in-out hover:text-zinc-400"
            onClick={handleCartToggle}
          >
            <ShoppingBagIcon className="h-6 w-6" />
            <sup className="top-1 ml-[4px] font-mono slashed-zero">
              {checkout.lineItems?.length || (
                <span className="flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-100 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gray-200"></span>
                </span>
              )}
            </sup>
          </button>
        </div>
      </nav>
      <Menu menuToggle={menuToggle} />
      <Cart
        checkout={checkout}
        cartToggle={cartToggle}
        handleCartToggle={handleCartToggle}
      />
    </>
  );
};

export default Navbar;
