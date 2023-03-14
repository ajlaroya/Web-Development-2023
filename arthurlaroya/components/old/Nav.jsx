const Nav = () => {
  return (
    <nav
      className="fixed w-full z-50 top-0 grid grid-cols-2 px-5 sm:px-10 py-5"
    >
      <div className="relative w-[90%] flex items-center justify-start my-auto bg-transparent">
        <a
          href="/"
          className="md:text-2xl text-xl inline-block decoration-none tracking-tight mix-blend-difference text-black uppercase"
        >
          Arthur Laroya
        </a>
      </div>
      <div className="relative flex items-center justify-end text-xl cursor-pointer mix-blend-difference">
        <p className="inline-block border border-gray-600 hover:border-gray-50 hover:border-x-2 transition duration-500 py-3 px-6 rounded-full text-sm mix-blend-difference">
          SAY HELLO
        </p>
      </div>
    </nav>
  );
};

export default Nav;
