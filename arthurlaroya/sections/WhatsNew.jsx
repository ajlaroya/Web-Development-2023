"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerwidth} mx-auto flex flex-col gap-8 lg:flex-row`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex flex-[0.75] flex-col justify-center"
      >
        <TypingText title="| Work History" />
        <TitleText title={<>An overview of my work experience 💼</>} />
        <ol className="mt-10 relative border-l border-gray-200">
          <li className="mb-10 ml-10">
            <span className="absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 ring-1 ring-white  ">
              <img src="/images/upwork.svg" alt="upwork" className="w-6 h-6 object-contain" />
            </span>
            <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900">
              Freelance Web Developer{" "}
              <span className="mr-2 ml-3 rounded bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 ">
                Current
              </span>
            </h3>
            <time className="mb-2 block text-sm font-normal leading-none text-gray-400">
              at Upwork
            </time>
            <ul className="list-disc mb-4 text-base font-normal text-gray-500">
              <li>Responsible for the creation, design and styling of websites using coding and software design tools.</li>
              <li>Currently working on a medium-sized project for a client on a short-term basis.</li>
              <li>I usually liaise with my client and give creative briefs that outline the style and content of the project.</li>
            </ul>
          </li>
          <li className="mb-10 ml-10">
          <span className="absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 ring-1 ring-white  ">
              <img src="/images/auspost.svg" alt="australia post" className="w-6 h-6 object-contain" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900">
              Mail Officer
            </h3>
            <time className="mb-2 block text-sm font-normal leading-none text-gray-400">
              at Australia Post Sunshine West PDC
            </time>
            <ul className="list-disc mb-4 text-base font-normal text-gray-500">
              <li>Successfully work independently and as part of a team t achieve daily processing targets</li>
              <li>Communicate with all different walks of life to get the job done in an efficient manner</li>
            </ul>
          </li>
        </ol>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`${styles.flexCenter} flex-1`}
      >
        <img
          src="/images/shape-8.svg"
          alt="shapes"
          className="h-[90%] w-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
