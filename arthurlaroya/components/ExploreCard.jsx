"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import styles from "../styles";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({
  slug,
  imageUrl,
  githubUrl,
  externUrl,
  tech,
  title,
  index,
  active,
  handleClick,
  desc,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.2, 0.75)}
    className={`relative ${
      active === slug.current
        ? "flex-[18] lg:flex-[4.5]"
        : "flex-[2] lg:flex-[1]"
    } flex h-[600px] min-w-[10px] cursor-pointer items-center justify-center transition duration-300 ease-out`}
    onClick={() => handleClick(slug.current)}
  >
    <Image
      width={800}
      height={800}
      src={imageUrl}
      alt={title}
      className={`absolute h-full w-full rounded-lg object-cover ${
        active === slug.current ? "brightness-100" : "brightness-50"
      } transition duration-500 ease-out hover:brightness-75`}
    />
    {active !== slug.current ? (
      <h3 className="absolute z-0 whitespace-nowrap text-xs font-semibold uppercase text-white sm:text-xs lg:origin-[0,0] lg:rotate-[-90deg]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 w-full flex-col justify-start rounded-b-lg bg-[rgba(0,0,0,0.7)] p-8">
        <div className="flex flex-row gap-2">
          <a href={githubUrl} target="_blank">
            <div
              className={`${styles.flexCenter} glassmorphism mb-[16px] h-[50px] w-[50px] rounded-xl`}
            >
              <Image
                width={50}
                height={50}
                src="/images/github.svg"
                alt="github"
                className="h-1/2 w-1/2 object-contain"
              />
            </div>
          </a>

          <a href={externUrl} target="_blank">
            <div
              className={`${styles.flexCenter} glassmorphism mb-[16px] h-[50px] w-[50px] rounded-xl`}
            >
              <Image
                width={50}
                height={50}
                src="/images/external-link.svg"
                alt="headset"
                className="h-1/2 w-1/2 object-contain"
              />
            </div>
          </a>
        </div>

        <h2 className="sm:text-md text-lg font-semibold uppercase text-white">
          {title}
        </h2>
        <p className="w-1/2 justify-center text-sm font-medium text-white md:w-full">
          {desc}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={item}
              className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
