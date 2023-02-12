'use client'

import Image from "next/image";
import React, { useLayoutEffect } from "react";
import WorkCard from "./WorkCard";

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

const Work = () => {
  return (
    <>
      <div className="w-full text-center pb-32">
        <span className="text-white text-[101px] md:text-[128px]">"WORK"</span>
      </div>

      <section className="grid grid-cols-2 gap-5 md:grid-cols-3 mx-10 pb-32">
        <WorkCard img="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60"
        title="ANGEL"
        subtitle="1/12/23"
        tag="REACT" />
        <WorkCard img="https://images.unsplash.com/photo-1579965342575-16428a7c8881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpbnRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60"
        title="BIRD"
        subtitle="2/12/23"
        tag="NEXTJS" />
        <WorkCard img="https://images.unsplash.com/photo-1549289524-06cf8837ace5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGFpbnRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60"
        title="OPEN"
        subtitle="3/12/23"
        tag="UI/UX" />
        <WorkCard img="https://images.unsplash.com/photo-1544867885-2333f61544ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBhaW50aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60"
        title="PALM"
        subtitle="4/12/23"
        tag="FRONTEND" />
      </section>
    </>
  );
};

export default Work;
