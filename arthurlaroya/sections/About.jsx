"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col lg:w-[80%]`}
    >
      <TypingText title="|  about Arthur Laroya" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] text-center text-[20px] font-normal sm:text-[32px]"
      >
        <span className="font-extrabold">Arthur Laroya </span>
        is a rising star full-stack web developer. Self-taught with an expanding
        skill set, Arthur
        <span className="font-extrabold"> brings life </span>
        to his creative ideas of all shapes and sizes to the screen.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/images/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px] animate-bounce"
      />
    </motion.div>
  </section>
);

export default About;
