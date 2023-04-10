'use client';

import React, { useState } from "react";

type Props = {};

const LeftPanel = (props: Props) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpen(false)
  };

  return (
    <div
      className={`${isOpen ? "flex" : "-translate-x-[420px]"} opacity-1 fixed flex flex-col max-w-full h-auto bg-[#1d1d1d] w-[420px] p-5 bottom-[26px] left-[26px] overflow-y-auto top-[80px] z-[999] rounded-2xl transition duration-300`}
      aria-hidden="true"
    >
      <button className="items-start block cursor border-0 bg-transparent absolute z-10 top-0 right-0 p-4" onClick={handleClick}>
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
      <nav></nav>
      <nav></nav>
    </div>
  );
};

export default LeftPanel;
