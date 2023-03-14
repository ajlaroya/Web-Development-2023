"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} p-6 sm:pl-16`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="relative flex flex-col items-center justify-center bg-transparent">
        <motion.h1
          variants={textVariant(1.1)}
          className={`${styles.heroHeading} tracking-tight text-white mix-blend-difference`}
        >
          Full Stack
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="z-10 flex flex-row items-center justify-center"
        >
          <h1 className={styles.heroHeading}>Web{"  "}</h1>
          <div className={`${styles.heroDText}`} />
          <h1 className={styles.heroHeading}>ev</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative -mt-[12px] w-full md:-mt-[20px]"
      >
        <div className="hero-gradient absolute -top-[10px] h-[300px] w-full rounded-2xl" />
        <img
          src="https://images.unsplash.com/photo-1597524115557-3b88520704c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1464&q=80"
          alt="cover"
          className="relative h-[350px] w-full rounded-2xl object-cover sm:h-[500px]"
        />

        <a href="#explore">
          <div className="relative z-10 -mt-[50px] flex w-full justify-end pr-[40px] sm:-mt-[70px]">
            <img
              src="/images/arthur.svg"
              alt="stamp"
              className="h-[100px] w-[100px] rounded-full bg-black/30 object-contain pl-2 backdrop-blur sm:h-[155px] sm:w-[155px]"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
