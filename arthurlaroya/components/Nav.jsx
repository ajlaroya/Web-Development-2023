const Nav = () => {
  return (
    <nav className="sticky w-full top-0 z-50 grid grid-cols-2 px-10 py-5">
      <div className="relative w-[90%] flex items-center justify-start my-auto text-white z-10">
        <a href="/" className="text-3xl invert-0 inline-block decoration-none tracking-tight">
          ✪ Arthur Laroya
        </a>
      </div>
      <div className="relative flex items-center justify-end text-white text-xl cursor-pointer">
        <p className="inline-block border border-gray-600 hover:border-gray-50 hover:border-x-2 transition duration-500 py-3 px-6 rounded-full text-sm">
          SAY HELLO
        </p>
      </div>
    </nav>
  );
};

export default Nav;
