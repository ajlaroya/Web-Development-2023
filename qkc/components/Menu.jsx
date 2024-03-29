import Image from "next/image";
import { usePathname } from "next/navigation";

const menuList = ["About", "FAQ", "Terms", "Privacy"];

const Menu = ({ menuToggle }) => {
  const pathname = usePathname();

  return (
    <div
      id="menu"
      className={`${
        menuToggle
          ? "opacity-100"
          : "-translate-x-[360px] sm:-translate-x-[450px]"
      } fixed bottom-[20px] left-[20px] top-[65px] z-[999] flex h-auto w-[340px] flex-col rounded-xl bg-[#1d1d1d] p-[17px] transition duration-300 ease-in-out sm:bottom-[26px] sm:left-[26px] sm:w-[420px] sm:top-[80px]`}
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
        <a
          href="/"
          className={`${
            pathname === "/" ? "bg-white text-black" : ""
          } relative mx-[-1em] block cursor-pointer border-b border-[hsla(0,0%,100%,.6)] px-[1em] transition duration-300 ease-in-out first:border-t hover:bg-white hover:text-black`}
        >
          <span className="block py-[1em]">Shop</span>
        </a>
        {menuList.map((item, index) => (
          <a
            href={`/${item.toLowerCase()}/`}
            key={index}
            className={`${
              pathname.startsWith(`${"/" + item.toLowerCase()}`) &&
              "bg-white text-black"
            } relative mx-[-1em] block cursor-pointer border-b border-[hsla(0,0%,100%,.6)] px-[1em] transition duration-300 ease-in-out first:border-t hover:bg-white hover:text-black`}
          >
            <span className="block py-[1em]">{item}</span>
          </a>
        ))}
      </nav>
      {/* sublist */}
      <div className="mt-auto pt-5">
        <div className="flex gap-2">
          <a href="https://twitter.com/qkcstudios">
            <Image
              src="/twitter.svg"
              alt="visa"
              width={50}
              height={50}
              className="h-8 w-8"
            />
          </a>
          <a href="https://instagram.com/qkcstudios">
            <Image
              src="/instagram.svg"
              alt="instagram"
              width={50}
              height={50}
              className="h-8 w-8"
            />
          </a>

          <a href="https://www.facebook.com/qkcstudios">
            <Image
              src="/facebook.svg"
              alt="facebook"
              width={50}
              height={50}
              className="h-8 w-8"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
