import Image from "next/image";

const menuList = ["Shop", "About", "Help", "Terms", "Privacy"];

const Menu = ({ menuToggle }) => {
  return (
    <div
      id="menu"
      className={`${
        menuToggle ? "opacity-100" : "-translate-x-[450px]"
      } fixed bottom-[20px] left-[20px] top-[65px] z-[999] flex h-auto w-[290px] min-w-[290px] max-w-full flex-col overflow-y-auto rounded-xl bg-[#1d1d1d] p-[1em] transition duration-300 ease-in-out sm:bottom-[26px] sm:left-[26px] sm:w-[420px] sm:min-w-[420px] md:top-[80px]`}
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
      <nav className="mt-[2.2em]">
        {menuList.map((item, index) => (
          <a
            data-id={index}
            href={`/${item.toLowerCase()}/`}
            key={index}
            className="relative mx-[-1em] block cursor-pointer border-b border-[hsla(0,0%,100%,.6)] px-[1em] transition duration-300 ease-in-out first:border-t hover:bg-white hover:text-black"
          >
            <span className="block py-[1em]">{item}</span>
          </a>
        ))}
      </nav>
      {/* sublist */}
      <nav className="mt-auto pt-5">
        <ul className="flex flex-col gap-2">
          <li>
            <Image
              src="twitter.svg"
              alt="visa"
              width={50}
              height={50}
              className="h-8 w-8"
            />
            {/* <a
              target="_blank"
              rel="noreferrer noopener"
              className="inline-block transition"
              href="https://twitter.com/099supply"
            >
              <span>Twitter</span>
            </a> */}
          </li>
          <li>
            <Image
              src="instagram.svg"
              alt="instagram"
              width={50}
              height={50}
              className="h-8 w-8"
            />
            {/* <a
              target="_blank"
              rel="noreferrer noopener"
              className="inline-block transition"
              href="https://www.instagram.com/099supply"
            >
              <span>Instagram</span>
            </a> */}
          </li>
          <li>
            <Image
              src="facebook.svg"
              alt="facebook"
              width={50}
              height={50}
              className="h-8 w-8"
            />
            {/* <a
              target="_blank"
              rel="noreferrer noopener"
              className="inline-block transition"
              href="https://www.pinterest.com/099supply"
            >
              <span>Facebook</span>
            </a> */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
