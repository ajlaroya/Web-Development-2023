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
      document.getElementById("page").classList.remove("-translate-x-[450px]");
    } else {
      document.getElementById("page").classList.add("-translate-x-[450px]");
      document.getElementById("page").classList.remove("translate-x-[450px]");
      setMenuToggle(false);
    }
  };

  const handleMenuToggle = () => {
    setMenuToggle((prevState) => !prevState);
    if (menuToggle) {
      document.getElementById("page").classList.remove("translate-x-[450px]");
    } else {
      document.getElementById("page").classList.add("translate-x-[450px]");
      document.getElementById("page").classList.remove("-translate-x-[450px]");
      setCartToggle(false);
    }
  };

  return (
    <>
      <nav className="fixed flex justify-between p-[19px] md:p-[26px] left-0 right-0 top-0 z-[999] bg-black">
          <label className="swap-rotate swap cursor-pointer whitespace-nowrap transition duration-300 ease-in-out hover:text-zinc-400" htmlFor="menuToggle">
            <input id="menuToggle" type="checkbox" onClick={handleMenuToggle} />
            <Bars3Icon className="swap-on h-6 w-6" />
            <Bars3Icon className="swap-off h-6 w-6" />
          </label>

          <span className="cursor-pointer font-bold tracking-tight transition duration-300 ease-in hover:text-zinc-400">
            <a href="/">
              <div className="flex gap-2 items-center"><img src="/logo.svg" alt="Logo" className="w-4 h-4"/>QKC Studios®</div>
            </a>
          </span>

          <button
            id="cart" aria-label="shoppingbag"
            className="flex cursor-pointer whitespace-nowrap transition duration-300 ease-in-out hover:text-zinc-400"
            onClick={handleCartToggle}
          >
            <ShoppingBagIcon className="h-6 w-6" />
            <sup className="top-1 ml-[3.5px] font-mono slashed-zero">
              {checkout.lineItems?.length != 0 && checkout.lineItems?.length }
            </sup>
          </button>
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
