import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-auto pt-6">
      <div className="flex flex-wrap gap-5">
        {/* Newsletter */}
        <div className="relative flex grow basis-full items-center rounded-xl bg-[#1d1d1d] sm:basis-1/3 md:basis-1/4">
          <div
            className="text-md flex h-full min-h-[68px] w-full items-center justify-between px-5 py-2 font-semibold"
          >
            Sign up for QKC news
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="41.2"
                height="19.4"
                viewBox="0 0 41.2 19.4"
                className="h-5 w-8 max-w-[34px]"
              >
                <path
                  fill="none"
                  stroke="currentcolor"
                  strokeWidth="2"
                  d="m30.7.692 9 9-9 9M38.5 9.892H0"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Email form */}
        <div className="relative flex grow basis-full items-center rounded-xl bg-[#1d1d1d] sm:basis-1/3 md:basis-1/4">
          <form
            action=""
            id="newsletter"
            method="post"
            target="_blank"
            className="relative flex h-full w-full items-center"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="on"
              className="cursor mr-[-1em] min-h-[68px] w-full min-w-[300px] appearance-none rounded-xl bg-[#1d1d1d] px-6 py-2 ring-inset focus:ring-[#D3D3D3] placeholder-white"
            />
            <button className="text-sm sm:text-base absolute right-0 top-0 flex min-h-[68px] items-center justify-center rounded-xl bg-[#D3D3D3] px-6 py-2 font-semibold text-black hover:animate-pulse">
              Subscribe
            </button>
          </form>
        </div>

        {/* Social links */}
        <div className="relative flex grow basis-full items-center rounded-xl bg-[#1d1d1d] p-4 sm:basis-1/3 md:basis-1/4">
          <div className="flex w-full items-center justify-center gap-5">
            <a
              href="https://www.facebook.com/qkcstudios"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/facebook.svg"
                alt="facebook"
                width={50}
                height={50}
                className="h-auto max-h-[2rem] w-auto max-w-[2rem] hover:animate-pulse"
              />
            </a>

            <a href="https://www.instagram.com/qkcstudios/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={50}
                height={50}
                className="h-auto max-h-[2rem] w-auto max-w-[2rem] hover:animate-pulse"
              />
            </a>

            <a href="https://twitter.com/qkcstudios" target="_blank" rel="noopener noreferrer">
              <Image
                src="/twitter.svg"
                alt="twitter"
                width={50}
                height={50}
                className="h-auto max-h-[2rem] w-auto max-w-[2rem] hover:animate-pulse"
              />
            </a>

            <a href="https://open.spotify.com/playlist/6EdWkciJ9At70lkbT3ugEo?si=ddd28a4134224812" target="_blank" rel="noopener noreferrer">
              <Image
                src="/spotify.svg"
                alt="spotify"
                width={50}
                height={50}
                className="h-auto max-h-[2rem] w-auto max-w-[2rem] hover:animate-pulse"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
