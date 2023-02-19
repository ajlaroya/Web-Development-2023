import Image from "next/image";
import React from "react";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";

const WorkCard = ({ project }) => {
  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  const { title, desc, tech, image } = project;
  const imageUrl = urlFor(image.asset).url();
  console.log(project)

  return (
    <>
      <div className="flex flex-col object-center items-center justify-around bg-[#f8f7f5] h-[60vh] sm:h-[90vh] md:h-[65vh] w-full rounded shadow">
        <div className="text-md uppercase text-neutral-700">{title}</div>

        {/* Image */}
        <div className="relative h-32 w-64 sm:h-64 sm:w-96 md:h-48 md:w-64">
          <Image
            className="rounded-lg object-cover drop-shadow-lg hover:-translate-y-3 hover:drop-shadow-2xl transition duration-300 ease-in-out cursor-pointer"
            src={imageUrl}
            fill
            alt={image.caption}
          />
        </div>

        <div className="px-16 sm:px-32">
          <p className="text-sm md:text-xs text-center italic font-serif text-neutral-500 leading-7">{desc}</p>
        </div>

        {/* TAGS */}
        <div className="flex space-x-2 flex-wrap justify-center gap-2">
          {tech.map((item, index) => (
            <span key={index} className="text-xs leading-sm uppercase px-3 py-1 bg-neutral-100 shadow-sm text-neutral-500 rounded">
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkCard;
