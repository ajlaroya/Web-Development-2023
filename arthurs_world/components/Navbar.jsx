const Navbar = () => {
  return (
    <nav className="sticky top-0 isolate z-10 flex items-center justify-center py-4 px-1 md:justify-between">
      {/* Left Nav */}
      <div className="relative flex rounded-lg border border-neutral-200 bg-white/70 p-1 shadow-md backdrop-blur-md opacity-100 transform-none">
        <div
          className="absolute left-0 -z-10 h-7 rounded bg-neutral-200 backdrop-blur transition-[width,transform,opacity]"
          style={{
            transitionDuration: "0ms",
            opacity: "0",
            width: "68.3056px",
            transform: "translate(4.88889px)",
          }}
        ></div>
        <a
          className="rounded py-1 px-2 text-sm transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 focus:text-neutral-900 hover:text-neutral-900  text-neutral-900"
          href="/"
        >
          Arthur
        </a>
        <a
          className="rounded py-1 px-2 text-sm transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 focus:text-neutral-900 hover:text-neutral-900  text-neutral-400"
          href="/projects"
        >
          Projects
        </a>
        <a
          className="rounded py-1 px-2 text-sm transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 focus:text-neutral-900 hover:text-neutral-900  text-neutral-400"
          href="/skills"
        >
          Skills
        </a>
        <a
          className="rounded py-1 px-2 text-sm transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 focus:text-neutral-900 hover:text-neutral-900  text-neutral-400"
          href="/education"
        >
          Education
        </a>
        <a
          className="rounded py-1 px-2 text-sm transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 focus:text-neutral-900 hover:text-neutral-900  text-neutral-400"
          href="/hobbies"
        >
          Hobbies
        </a>
      </div>

      {/* Right Nav */}
      <div className="hidden md:flex transition-opacity opacity-100 bg-transparent mix-blend-difference!">
        <a
          href="https://github.com/ajlaroya"
          target="_blank"
          className=" rounded py-1 px-2 text-sm text-neutral-400 decoration-wavy underline-offset-4 focus-visible:ring-4 focus-visible:ring-blue-200 focus:text-neutral-900 cursor-alias transition-colors hover:text-neutral-900 hover:underline mix-blend-difference"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/arthurlaroya"
          target="_blank"
          className=" rounded py-1 px-2 text-sm text-neutral-400 decoration-wavy underline-offset-4 focus-visible:ring-4 focus-visible:ring-blue-200 focus:text-neutral-900 cursor-alias transition-colors hover:text-neutral-900 hover:underline"
        >
          Twitter
        </a>
        <a
          href="https://read.cv/arthurlaroya"
          target="_blank"
          className=" rounded py-1 px-2 text-sm text-neutral-400 decoration-wavy underline-offset-4 focus-visible:ring-4 focus-visible:ring-blue-200 focus:text-neutral-900 cursor-alias transition-colors hover:text-neutral-900 hover:underline"
        >
          CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
