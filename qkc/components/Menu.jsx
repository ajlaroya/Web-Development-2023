const menuList = ["Shop", "Search", "About", "Help", "Terms", "Privacy"];

const Menu = ({ menuToggle }) => {
  return (
    <div
      id="menu"
      className={`${menuToggle ? "opacity-100" : "-translate-x-[450px]"} fixed bottom-[20px] left-[20px] top-[65px] z-[999] flex h-auto w-[290px] min-w-[290px] md:w-[420px] md:min-w-[420px] max-w-full flex-col overflow-y-auto rounded-xl bg-[#1d1d1d] p-[17px] transition duration-300 ease-in-out md:bottom-[26px] md:left-[26px] md:top-[80px]`}
      aria-hidden="true"
    >
      <button
        className="cursor absolute right-0 top-0 z-10 items-start p-4"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31.4"
          height="31.4"
          viewBox="0 0 31.4 31.4"
          className="inline-block h-4 w-4 overflow-hidden"
          aria-hidden="true"
        >
          <path
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="m.7.7 30 30M30.7.7l-30 30"
          ></path>
        </svg>
      </button>
      <nav className="mt-10">
        {menuList.map((item, index) => (
          <a
            data-id={index}
            href={`/${item}/`}
            key={index}
            className="relative mx-[-17px] flex cursor-pointer border-b border-white px-[17px] py-5 first:border-t hover:bg-white hover:text-black"
          >
            <span className="">{item}</span>
          </a>
        ))}
      </nav>
      <nav className="grid h-full w-full content-center">
        <ul className="flex justify-around">
          <li className="cursor-pointer">Facebook</li>
          <li className="cursor-pointer">Instagram</li>
          <li className="cursor-pointer">Spotify</li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
