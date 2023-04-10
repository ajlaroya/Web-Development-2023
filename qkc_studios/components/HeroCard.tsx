import React from "react";

type Props = {};

const HeroCard = (props: Props) => {
  return (
    <div className="relative z-10 mb-[19px] md:mb-[26px]">
      <video
        className="h-[245px] md:h-[507px] left-0 max-w-full overflow-y-clip overflow-x-clip top-0 w-full object-cover rounded-[13px]"
        muted
        loop
        autoPlay
        playsInline
        src="https://099.supply/media/hero-desktop.mp4"
      />
      <button className="items-start bottom-0 p-[26px] absolute right-0 overflow-x-visible overflow-y-visible">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="none"
          viewBox="0 0 25 25"
          className="h-[20px] w-[20px]"
        >
          <g stroke="currentColor">
            <path
              fill="currentColor"
              strokeWidth="2.747"
              d="M5.474 9.268h.646l.412-.498 4.094-4.953v17.848L6.45 17.454l-.403-.407H1.374V9.268h4.1Z"
            ></path>
            <path strokeWidth="2" d="m15.707 9.293 8 8m-8.414 0 8-8"></path>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default HeroCard;
