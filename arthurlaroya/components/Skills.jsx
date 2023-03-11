import Image from "next/image";
import React from "react";

const Skills = ({ skills }) => {
  return (
    <>
      <div className="w-full pb-32 text-center">
        <span className="text-[80px] tracking-tight sm:text-[101px] md:text-[128px]">
          SKILLS
        </span>
      </div>

      {/* Logo cloud */}
      <div className="mx-10 grid grid-cols-3 justify-center gap-10 mb-32 md:grid-cols-5">
        {skills.map((skill, index) => (
          <div
            className="relative h-20 w-20 justify-center justify-self-center transition duration-200 mb-20 hover:scale-110"
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
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
