"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerwidth} mx-auto flex flex-col gap-8 lg:flex-row`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`${styles.flexCenter} flex-1`}
      >
        <img
          src="/images/shape-8.svg"
          alt="shapes"
          className="h-[90%] w-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex flex-[0.75] flex-col justify-center"
      >
        <TypingText title="| Education" />
        <TitleText title={<>A brief overview of my education 🎓</>} />

        <ol className="mt-10 relative border-l border-gray-200">
          <li className="mb-10 ml-10">
            <span className="absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 ring-1 ring-white  ">
              <img src="/images/rmit.svg" alt="rmit" className="w-6 h-6 object-contain" />
            </span>
            <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900">
              Royal Melbourne Institute of Technology{" "}
              <span className="mr-2 ml-3 rounded bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 ">
                Latest
              </span>
            </h3>
            <time className="mb-2 block text-sm font-normal leading-none text-gray-400">
              Bachelor of Information Technology
            </time>
            <p className="mb-4 text-base font-normal text-gray-500">
              Gained knowledge and practical experience in user-centred design, web programming, web servers & web tech and e-business systems
            </p>
          </li>
          <li className="mb-10 ml-10">
          <span className="absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 ring-1 ring-white  ">
              <img src="/images/udemy.svg" alt="udemy" className="w-6 h-6 object-contain" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900">
              Udemy
            </h3>
            <time className="mb-2 block text-sm font-normal leading-none text-gray-400">
              Django Full-Stack Web Dev Bootcamp
            </time>
            <p className="text-base font-normal text-gray-500">
            Learned to build websites with HTML, CSS, Bootstrap, Javascript, jQuery, Python 3, and Django!
            </p>
          </li>
          <li className="ml-10">
          <span className="absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 ring-1 ring-white  ">
              <img src="/images/udemy.svg" alt="udemy" className="w-6 h-6 object-contain" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900">
              Udemy
            </h3>
            <time className="mb-2 block text-sm font-normal leading-none text-gray-400">
              Complete Python Bootcamp
            </time>
            <p className="text-base font-normal text-gray-500">
            Learned Python like a professional starting from the basics and go all the way to creating your own applications and games
            </p>
          </li>
        </ol>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
