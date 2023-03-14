"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} relative py-8`}
  >
    <div className="gradient-01 absolute inset-0 w-[50%]" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[24px] w-[24px] object-contain mix-blend-darken"
      >
        <path
          d="M100 0L124.1 58.2576L186.603 50L148.2 100L186.603 150L124.1 141.742L100 200L75.9 141.742L13.3975 150L51.8 100L13.3975 50L75.9 58.2576L100 0Z"
          fill="url(#paint0_linear_103_2)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_103_2"
            x1="100"
            y1="0"
            x2="100"
            y2="200"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFFFF" />
            <stop offset="1" stop-color="#FFFFF" />
          </linearGradient>
        </defs>
      </svg>
      <h2 className="text-[24px] font-bold uppercase leading-[30px] tracking-tight">
        Arthur Laroya
      </h2>
      <img src="/images/menu.svg" alt="menu" className="h-[24px] w-[24px] fill-black" />
    </div>
  </motion.nav>
);

export default Navbar;
