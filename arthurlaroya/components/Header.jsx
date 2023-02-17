"use client";

import Lenis from "@studio-freight/lenis";

import React from "react";
import Image from "next/image";

const lenis = new Lenis({
  duration: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: true,
  touchMultiplier: 2,
  infinite: false,
});

//get scroll value
lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
  console.log({ scroll, limit, velocity, direction, progress });
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const Header = () => {
  return (
    <div className="mx-16 pt-[6rem]">
      <div className="pb-5">
        <span className="text-[78px] md:text-[150px] leading-none tracking-tight">
          FULL-STACK
        </span>
        <br />
        <span className="text-[78px] md:text-[150px] underline-offset-[15px] underline decoration-1 leading-none tracking-tight">
          WEB DEV ↝
        </span>
        <Image
          className="absolute right-20 top-28 md:right-52 md:top-32"
          src="images/shape-8.svg"
          width={100}
          height={100}
          alt="placeholder"
        />
      </div>
      <div className="relative h-[32rem] w-full">
        <Image
          className="rounded-lg h-auto max-w-4xl ml-auto"
          src="https://images.unsplash.com/photo-1597524115557-3b88520704c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1464&q=80"
          fill
          style={{ objectFit: "cover" }}
          alt="placeholder"
        />
      </div>
    </div>
  );
};

export default Header;
