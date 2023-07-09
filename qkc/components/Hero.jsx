const HeroCard = () => {
  return (
    <div className="md:mb-[26px] relative z-10 mb-[19px]">
      <video
        className="md:h-[507px] left-0 top-0 h-[245px] w-full max-w-full overflow-x-clip overflow-y-clip rounded-xl object-cover"
        muted
        loop
        autoPlay
        playsInline
        src="/hero.mp4"
      />
      <div className="absolute left-0 top-0 flex flex-col h-full w-full items-center justify-center font-bold tracking-tight text-white mix-blend-overlay bg-black/30">
        <p className="text-2xl md:text-5xl">QKC Studios®</p>
        <p className="text-lg md:text-2xl">coming late July</p>
      </div>
    </div>
  );
};

export default HeroCard;
