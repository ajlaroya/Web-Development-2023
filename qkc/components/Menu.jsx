const menuList = ["Shop", "Search", "About", "Help", "Terms", "Privacy"];

const Menu = () => {
    return (
      <div
        id="menu"
        className="fixed flex flex-col grow max-w-full min-w-[420px] h-auto bg-[#1d1d1d] w-[420px] p-[17px] md:bottom-[26px] bottom-[20px] left-[20px] md:left-[26px] overflow-y-auto md:top-[80px] top-[65px] z-[999] rounded-[13px] transition duration-300"
        aria-hidden="true"
      >
        <button
          className="items-start cursor absolute z-10 top-0 right-0 p-4"
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
              className="first:border-t border-b border-white block mx-[-17px] px-[17px] relative cursor-pointer py-5 hover:bg-white hover:text-black"
            >
              <span className="">{item}</span>
            </a>
          ))}
        </nav>
        <nav className="w-full h-full content-center grid">
          <ul className="flex justify-around">
            <li className="cursor-pointer">Facebook</li>
            <li className="cursor-pointer">Instagram</li>
            <li className="cursor-pointer">Spotify</li>
          </ul>
        </nav>
      </div>
    )
  }
  
  export default Menu