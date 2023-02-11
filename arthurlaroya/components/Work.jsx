'use client'

import Image from "next/image";
import React, { useEffect } from "react";

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

const Work = () => {
  useEffect(() => {
    const tl = gsap.timeline({
        scrollTrigger: '.img',
        scrub: true
      })
      .to('.img', {
        stagger: .2,
        y:-700,
        scrub:true
      })
  }, [])
  

  return (
    <>
      <section className="grid grid-cols-3 min-h-screen m-auto">
        <div className="absolute h-[100vh] w-full z-40 top-0 left-0 border-r-2"></div>
        <div className="absolute h-[100vh] w-full z-40 top-0 left-0 border-r-2"></div>
        <div className="absolute h-[100vh] w-full z-40 top-0 left-0 border-r-2"></div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 h-[200vh] m-auto">
        <div className="img w-full h-full relative bg-cover -z-1">
          <Image
            src="http://res.cloudinary.com/deaiddej2/image/upload/v1675422798/h6wxmovxxbw5ehx5fpqi.png"
            fill
          />
        </div>
        <div className="img w-full h-full relative bg-cover -z-1">
          <Image
            src="http://res.cloudinary.com/deaiddej2/image/upload/v1675422685/lyqtrqydsfxqg9kf8ozr.png"
            fill
          />
        </div>
        <div className="img w-full h-full relative bg-cover -z-1">
          <Image
            src="https://res.cloudinary.com/deaiddej2/image/upload/v1675422565/dz60xcg7yk3q0dtbmdiv.png"
            fill
          />
        </div>
        <div className="img w-full h-full relative bg-cover -z-1">
          <Image
            src="https://res.cloudinary.com/deaiddej2/image/upload/v1675415562/xsfngbpranpvhiec0rlq.png"
            fill
          />
        </div>
        <div className="img w-full h-full relative bg-cover -z-1">
          <Image
            src="https://res.cloudinary.com/deaiddej2/image/upload/v1675415685/jseddzj9abgydburo2u1.png"
            fill
          />
        </div>
        <div className="img w-full h-full relative bg-cover -z-1">
          <Image
            src="http://res.cloudinary.com/deaiddej2/image/upload/v1675422798/h6wxmovxxbw5ehx5fpqi.png"
            fill
          />
        </div>
      </section>
    </>
  );
};

export default Work;
