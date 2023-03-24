"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";
import Image from "next/image";

const Skills = ({ skills }) => {
  console.log(skills);

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.25 }}
        className={`${styles.innerwidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Skills" textStyles="text-center" />
        <TitleText
          title={
            <>
              A collection of skills & technology I've learnt over the creation
              of my projects
            </>
          }
          textStyles="text-center"
        />

        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1)}
          className="relative mt-[68px] flex h-full w-full justify-center"
        >
          {/* Logo cloud */}
          <div className="grid grid-cols-4 justify-center gap-x-16 gap-y-24 md:grid-cols-8">
            {skills.map((skill, index) => (
              <motion.div
                variants={fadeIn("down", "tween", index * 0.1, 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: "false", amount: 0.25 }}
                className="relative h-20 w-20 justify-center justify-self-center transition duration-200 hover:scale-110"
                key={index}
              >
                {skill.imageUrl && (
                  <Image
                    src={skill.imageUrl}
                    alt={skill.skill}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
