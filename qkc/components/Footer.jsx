const Footer = () => {
  return (
    <footer className="pt-6">
      <div className="flex flex-wrap gap-5">
        {/* Newsletter */}
        <div className="items-center grow flex relative basis-4 rounded-xl bg-[#1d1d1d]">
          <label
            htmlFor="newsletter"
            className="items-center flex h-16 justify-between py-2 px-5 w-full text-lg"
          >
            Sign up for the next drop
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="41.2"
                height="19.4"
                viewBox="0 0 41.2 19.4"
                className="h-5 max-w-[34px] w-8"
              >
                <path
                  fill="none"
                  stroke="currentcolor"
                  strokeWidth="2"
                  d="m30.7.692 9 9-9 9M38.5 9.892H0"
                ></path>
              </svg>
            </div>
          </label>
        </div>

        {/* Email form */}
        <div className="items-center grow relative flex basis-4 rounded-xl bg-[#1d1d1d] gap-5">
          <form
            action=""
            method="post"
            target="_blank"
            className="items-center flex"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="mr-[-13px] min-h-[68px] py-2 px-6 bg-[#1d1d1d] cursor rounded-xl"
            />
            <button className="items-center flex justify-center bg-white text-black py-2 px-6 min-h-[68px] rounded-xl">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
