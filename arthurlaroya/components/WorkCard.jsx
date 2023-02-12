import Image from "next/image";
import React from "react";

const WorkCard = ({ img, title, subtitle, tag }) => {
  return (
    <>
      {/* Image */}
      <div className="relative h-full w-full aspect-square transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale">
        <Image
          src={img}
          fill
          className="rounded-lg z-0"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
        {/* Overlay */}
        <div className="absolute w-full h-full flex justify-start items-end rounded-lg p-6 bg-black/20">
          <div className="flex flex-col">
            <div className="flex gap-2">
              <span className="text-white text-2xl tracking-tight">{title}</span>
              <span className="text-white italic text-2xl">{subtitle}</span>
            </div>

            <span className="text-white uppercase text-xl">
            • {tag}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
