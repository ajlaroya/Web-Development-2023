"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
  
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerwidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Where I'm From" textStyles="text-center" />
      <TitleText
        title={
          <>
            I was born and raised in Melbourne, Victoria, Australia and work
            with people who came from around the world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex h-full w-full md:h-[550px]"
      >
        <img
          src="/images/map.png"
          alt="map"
          className="h-full w-full object-cover"
        />

        <div className="absolute bottom-20 right-20 h-[70px] w-[70px] rounded-full bg-[#5d6680] p-[6px]">
          <img
            src="/images/people-01.png"
            alt="people"
            className="h-full w-full"
          />
        </div>
        <div className="absolute top-10 left-20 h-[70px] w-[70px] rounded-full bg-[#5d6680] p-[6px]">
          <img
            src="/images/people-02.png"
            alt="people"
            className="h-full w-full"
          />
        </div>
        <div className="absolute top-1/2 left-[45%] h-[70px] w-[70px] rounded-full bg-[#5d6680] p-[6px]">
          <img
            src="/images/people-03.png"
            alt="people"
            className="h-full w-full"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
