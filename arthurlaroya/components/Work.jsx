import WorkCard from "./WorkCard";

const Work = ({ projects }) => {
  return (
    <>
      <div className="w-full text-center pb-32">
        <span className="text-[80px] sm:text-[101px] md:text-[128px] tracking-tight">"WORK"</span>
      </div>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mx-5 sm:mx-10 pb-32">
        {projects.map((project, index) => (
          <WorkCard key={index} project={project} />
        ))}
      </section>
    </>
  );
};

export default Work;
