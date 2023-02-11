import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="mx-16 pt-[6rem]">
      <div className="pb-5">
        <span className="text-white text-[78px] md:text-[150px] leading-none tracking-tight">
          FULL-STACK
        </span>
        <br />
        <span className="text-white text-[78px] md:text-[150px] underline-offset-[15px] underline decoration-1 leading-none tracking-tight">
          WEB DEV ↝
        </span>
      </div>
      <div className="relative h-[32rem] w-full">
        <Image
          className="rounded-lg h-auto max-w-4xl ml-auto"
          src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60"
          fill
          style={{ objectFit: "cover" }}
          alt="placeholder"
        />
      </div>
    </div>
  );
};

export default Header;
