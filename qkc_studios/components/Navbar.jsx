"use client";

import React from "react";

const Navbar = ({ handleToggle }) => {
  return (
    <>
      <nav className="fixed block left-0 right-0 top-0 z-[999] bg-black">
        <div className="flex justify-between p-[19px] md:p-[26px] md:text-[19px] font-medium">
          <button
            className="cursor-pointer whitespace-nowrap flex hover:text-zinc-500 transition duration-300 ease-in-out tracking-tight"
            onClick={handleToggle}
          >
            Menu
            <div className="ml-[4px] top-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="8"
                viewBox="0 0 15 8"
                className="header_burgerIcon__VQKm9"
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
          <button className="flex whitespace-nowrap hover:text-zinc-500 transition duration-300 ease-in-out cursor-pointer">
            Cart
            <sup className="ml-[4px] top-2 font-mono slashed-zero">0</sup>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
