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
  touchMultiplier: 10,
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
    <div className="mx-5 pt-[6rem] sm:mx-16">
      <div className="pb-5">
        <span className="z-50 text-[60px] leading-none tracking-tight sm:text-[78px] md:text-[150px]">
          FULL-STACK
        </span>
        <br />
        <span className="text-[60px] leading-none tracking-tight underline decoration-1 underline-offset-[15px] sm:text-[78px] md:text-[150px]">
          WEB DEV ↝
        </span>

        <div className="top-50 absolute right-10 z-10 h-24 w-24 sm:right-20 sm:top-48 sm:h-32 sm:w-32 md:right-52 md:top-64 md:h-64 md:w-64">
          <Image className="" src="images/shape-8.svg" fill alt="placeholder" />
        </div>
      </div>
      <div className="relative h-[24rem] w-full sm:h-[32rem]">
        <Image
          className="rounded-lg"
          src="https://images.unsplash.com/photo-1597524115557-3b88520704c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1464&q=80"
          fill
          style={{ objectFit: "cover" }}
          alt="placeholder"
        />
        <div className="absolute left-0 bottom-0 z-10 h-36 w-36 mix-blend-difference sm:h-48 sm:w-48 md:bottom-0 md:right-0 md:h-64 md:w-64">
          <Image src="images/arthur.svg" fill alt="placeholder" />
        </div>
      </div>
    </div>
  );
};

export default Header;
