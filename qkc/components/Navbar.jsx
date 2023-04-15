"use client";

import { useState } from "react";
import Menu from "./Menu";
import Cart from "./Cart";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [cartToggle, setCartToggle] = useState(false);

  const handleMenuToggle = () => {
    setMenuToggle((prevState) => !prevState);
    if (menuToggle) {
      document.getElementById("page").classList.remove("translate-x-[445px]");
    } else {
      document.getElementById("page").classList.add("translate-x-[445px]");
      document.getElementById("page").classList.remove("-translate-x-[445px]");
      setCartToggle(false)
    }
  };

  const handleCartToggle = () => {
    setCartToggle((prevState) => !prevState);
    if (cartToggle) {
      document.getElementById("page").classList.remove("-translate-x-[445px]");
    } else {
      document.getElementById("page").classList.add("-translate-x-[445px]");
      document.getElementById("page").classList.remove("translate-x-[445px]");
      setMenuToggle(false)
    }
  };

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-[999] bg-black">
        <div className="flex justify-between p-[19px] md:p-[26px] md:text-[19px] font-medium">
          <button
            className="cursor-pointer whitespace-nowrap flex hover:text-zinc-500 transition duration-300 ease-in-out tracking-tight"
            onClick={handleMenuToggle}
          >
            Menu
            <div className="ml-[4px] top-1">
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

          <span className="hover:text-zinc-500 transition duration-300 ease-in-out cursor-pointer">
            <a href="/">
              <div>QKC Studios</div>
            </a>
          </span>

          <button
            className="flex whitespace-nowrap hover:text-zinc-500 transition duration-300 ease-in-out cursor-pointer"
            onClick={handleCartToggle}
          >
            Cart
            <sup className="ml-[4px] top-2 font-mono slashed-zero">0</sup>
          </button>
        </div>
      </nav>
      {menuToggle && <Menu />}
      {cartToggle && <Cart />}
    </>
  );
};

export default Navbar;
