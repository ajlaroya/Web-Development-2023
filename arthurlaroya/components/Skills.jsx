import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <>
      <div className="w-full text-center">
        <span className="text-[80px] tracking-tight sm:text-[101px] md:text-[128px]">
          "SKILLS"
        </span>
      </div>

      {/* Logo strip */}
      <div className="relative flex flex-col py-32">
        <div className="flex h-32 w-full gap-10 overflow-hidden marquee">

          <div className="flex h-full w-32 items-center justify-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"
              width={120}
              height={120}
              className="grayscale"
            />
          </div>
          <div className="flex h-full w-32 items-center justify-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"
              width={120}
              height={120}
              className="grayscale"
            />
          </div>
          <div className="flex h-full w-32 items-center justify-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"
              width={120}
              height={120}
              className="grayscale"
            />
          </div>
          <div className="flex h-full w-32 items-center justify-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"
              width={120}
              height={120}
              className="grayscale"
            />
          </div>
          <div className="flex h-full w-32 items-center justify-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"
              width={120}
              height={120}
              className="grayscale"
            />
          </div>
          <div className="flex h-full w-32 items-center justify-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"
              width={120}
              height={120}
              className="grayscale"
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default Skills;
