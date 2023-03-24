"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { ExploreCard, TitleText, TypingText } from "../components";

const Explore = ({ projects }) => {
  const [active, setActive] = useState("protean");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="|  my Projects" textStyles="text-center" />
        <TitleText
          title={
            <>
              Explore the projects
              <br className="hidden sm:block" />
              I've developed
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex min-h-[200vh] lg:min-h-[100vh] flex-col gap-2 lg:flex-row">
          {projects.map((project, index) => (
            <ExploreCard
              key={index}
              {...project}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
