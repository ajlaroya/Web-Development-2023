const Cart = () => {
  return (
    <div
      className="fixed bottom-[20px] right-[20px] top-[65px] z-[999] flex h-auto w-[420px] min-w-[420px] max-w-full flex-col overflow-y-auto rounded-[13px] bg-[#1d1d1d] p-[17px] transition duration-300 md:bottom-[26px] md:right-[26px] md:top-[80px]"
      aria-hidden="true"
    >
      <div className="mb-4 flex w-full items-center justify-between border-b pb-4">
        <h2 className="mt-0 text-lg">Cart</h2>
        <p>0 items</p>
        <button className="cursor z-10 inline-block" aria-label="Close">
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
      </div>

      <p>Your cart is empty.</p>
    </div>
  );
};

export default Cart;
