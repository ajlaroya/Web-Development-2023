'use client'

import React, { useRef, useEffect } from "react";
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: true,
  touchMultiplier: 2,
  infinite: false,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.registerPlugin(ScrollTrigger)

const Landing = () => {
  const boxRef = useRef();

  useEffect(() => {
    gsap.fromTo([boxRef.current], {
      y:0,
      scrollTrigger: {
        trigger: [boxRef.current],
        start: 'top',
        end: 'bottom',
        scrub: true,
      }}, {y: 0, duration: 2, ease: "elastic"}
    );
  });

  return (
    <section className="mx-10 section-content">
      <div className="py-28 px-20 md:px-48 md:py-56" ref={boxRef}>
        <p className="indent-12 text-[33px] md:text-[54px] leading-[38px] md:leading-[62px] text-gray-400 text-left font-medium">
          Arthur Laroya <span className="relative animate-bounce">🍃</span>is a{" "}
          <span className="font-serif italic text-white">rising </span>star
          full-stack{" "}
          <span className="font-serif italic text-white">web developer</span>.
          Self-taught with an expanding{" "}
          <span className="font-serif italic text-white">skill set</span>,
          Arthur brings{" "}
          <span className="underline text-green-400 font-[450] tracking-tight">
            life
          </span>{" "}
          to his creative ideas of all{" "}
          <span className="font-serif italic text-white">shapes</span> and sizes
          to the screen.
        </p>
      </div>
    </section>
  );
};

export default Landing;
