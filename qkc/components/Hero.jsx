const HeroCard = () => {
  return (
    <div className="relative z-10 mb-[19px] md:mb-[26px]">
      <video
        className="left-0 top-0 h-[500px] w-full max-w-full rounded-xl object-cover sm:h-[350px]"
        muted
        loop
        autoPlay
        playsInline
        src="/hero.webm"
      />
      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-black/30 font-bold tracking-tight text-white mix-blend-overlay">
        <span className="text-5xl md:text-7xl">QKC Studios®</span>
        <span className="text-xl md:text-2xl">quietly bold.</span>
      </div>
    </div>
  );
};

export default HeroCard;
