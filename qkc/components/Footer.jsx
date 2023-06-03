import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-auto pt-6">
      <div className="flex flex-wrap gap-5">
        {/* Newsletter */}
        <div className="relative flex grow basis-full items-center rounded-xl bg-[#1d1d1d] sm:basis-1/3 md:basis-1/4">
          <label
            htmlFor="newsletter"
            className="flex h-full min-h-[68px] w-full items-center justify-between px-5 py-2 text-lg"
          >
            Sign up for the next drop
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
          </label>
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
              className="cursor mr-[-1em] min-h-[68px] w-full min-w-[300px] appearance-none rounded-xl bg-[#1d1d1d] px-6 py-2 ring-inset focus:ring-white"
            />
            <button className="absolute right-0 top-0 flex min-h-[68px] items-center justify-center rounded-xl bg-white px-6 py-2 text-black">
              Subscribe
            </button>
          </form>
        </div>

        {/* Payment options */}
        <div className="relative flex grow basis-full items-center rounded-xl bg-[#1d1d1d] p-6 sm:basis-1/3 md:basis-1/4">
          <div className="flex w-full items-center justify-center gap-5">
            <Image
              src="https://099.supply/images/payment-providers/visa.svg"
              alt="visa"
              width={65}
              height={22}
              className="h-auto max-h-[1rem] w-auto max-w-[5rem] overflow-clip"
            />
            <Image
              src="https://099.supply/images/payment-providers/mastercard.svg"
              alt="mastercard"
              width={40}
              height={26}
              className="h-auto max-h-[1rem] w-auto max-w-[5rem] overflow-clip"
            />
            <Image
              src="/afterpay.svg"
              alt="afterpay"
              width={50}
              height={26}
              className="h-auto max-h-[4rem] w-auto max-w-[5rem] overflow-clip"
            />
            <Image
              src="https://099.supply/images/payment-providers/paypal.svg"
              alt="paypal"
              width={81}
              height={22}
              className="h-auto max-h-[1rem] w-auto max-w-[5rem] overflow-clip"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
