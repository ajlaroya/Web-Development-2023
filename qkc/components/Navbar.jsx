"use client";

import { useContext } from "react";
import Menu from "./Menu";
import Cart from "./Cart";
import { ShopContext } from "@/context/shopContext";

const Navbar = () => {
  const {
    checkout,
    cartToggle,
    menuToggle,
    setCartToggle,
    setMenuToggle
  } = useContext(ShopContext);

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
          <button
            className="flex cursor-pointer whitespace-nowrap tracking-tight transition duration-300 ease-in-out hover:text-zinc-500"
            onClick={handleMenuToggle}
          >
            Menu
            <div className="top-1 ml-[4px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="8"
                viewBox="0 0 15 8"
                className=""
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M0 1h15M0 7h15"
                ></path>
              </svg>
            </div>
          </button>

          <span className="cursor-pointer transition duration-300 ease-in-out hover:text-zinc-500">
            <a href="/">
              <div>QKC Studios</div>
            </a>
          </span>

          <button
            className="flex cursor-pointer whitespace-nowrap transition duration-300 ease-in-out hover:text-zinc-500"
            onClick={handleCartToggle}
          >
            Cart
            <sup className="top-1 ml-[4px] font-mono slashed-zero">
              {
                checkout.lineItems?.length ||
                <span className="flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-100 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gray-200"></span>
                </span>
              }
            </sup>
          </button>
        </div>
      </nav>
      <Menu menuToggle={menuToggle}/>
      <Cart checkout={checkout} cartToggle={cartToggle} handleCartToggle={handleCartToggle} />
    </>
  );
};

export default Navbar;
