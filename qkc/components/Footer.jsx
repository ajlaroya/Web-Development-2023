import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-auto pt-6">
      <div className="flex flex-wrap gap-5">
        {/* Newsletter */}
        <div className="items-center grow flex relative basis-1/3 md:basis-1/4 rounded-xl bg-[#1d1d1d]">
          <label
            htmlFor="newsletter"
            className="items-center flex justify-between py-2 px-5 w-full text-lg h-full"
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
        <div className="items-center grow relative flex basis-1/3 md:basis-1/4 rounded-xl bg-[#1d1d1d]">
          <form
            action=""
            method="post"
            target="_blank"
            className="items-center flex w-full h-full"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="min-h-[68px] mr-[-0.7em] w-full py-2 px-6 bg-[#1d1d1d] cursor rounded-xl appearance-none focus:border-white"
            />
            <button className="items-center flex justify-center bg-white text-black py-2 px-6 min-h-[68px] rounded-xl">
              Subscribe
            </button>
          </form>
        </div>

        {/* Payment options */}
        <div className="relative items-center grow bg-[#1d1d1d] md:basis-1/4 rounded-xl basis-1/3 p-6 flex gap-5">
          <div className="flex justify-center items-center w-full gap-5">
            <Image
              src="https://099.supply/images/payment-providers/visa.svg"
              alt="visa"
              width={65}
              height={22}
              className="w-auto h-auto max-w-[5rem] max-h-[1rem] overflow-clip"
            />
            <Image
              src="https://099.supply/images/payment-providers/mastercard.svg"
              alt="mastercard"
              width={40}
              height={26}
              className="w-auto h-auto max-w-[5rem] max-h-[1rem] overflow-clip"
            />
            <Image
              src="https://099.supply/images/payment-providers/discover.svg"
              alt="discover"
              width={99}
              height={18}
              className="w-auto h-auto max-w-[5rem] max-h-[1rem] overflow-clip"
            />
            <Image
              src="https://099.supply/images/payment-providers/paypal.svg"
              alt="paypal"
              width={81}
              height={22}
              className="w-auto h-auto max-w-[5rem] max-h-[1rem] overflow-clip"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
