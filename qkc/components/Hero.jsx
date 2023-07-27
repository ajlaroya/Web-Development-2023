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
        <p className="text-2xl md:text-5xl">QKC Studios®</p>
        <p className="text-lg md:text-2xl">a work in progress</p>
      </div>
    </div>
  );
};

export default HeroCard;
