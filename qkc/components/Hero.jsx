const HeroCard = () => {
  return (
    <div className="relative z-10 mb-[19px] md:mb-[26px]">
      <video
        className="left-0 top-0 h-[245px] w-full max-w-full overflow-x-clip overflow-y-clip rounded-xl object-cover md:h-[507px]"
        muted
        loop
        autoPlay
        playsInline
        src="https://099.supply/media/hero-desktop.mp4"
      />
      <button className="absolute bottom-0 right-0 items-start overflow-x-visible overflow-y-visible p-[26px]">
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
