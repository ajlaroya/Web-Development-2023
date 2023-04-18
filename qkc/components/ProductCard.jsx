import Image from "next/image";

const ProductCard = ({ product }) => {
  let dollarAULocale = Intl.NumberFormat("en-AU");

  return (
    <>
      {/* Product cards */}
      <div className="relative flex aspect-square w-auto cursor-pointer flex-col overflow-hidden rounded-[13px] bg-[#1d1d1d] text-[17px] leading-6 tracking-wide transition duration-300 first:cursor-none hover:-translate-y-1">
        {/* Card content */}
        <div className="z-10 flex-grow p-[19px] md:p-[22px] ">
          <h2 className="mt-[-3px]">
            <a
              href={`/product/${product.handle}`}
              className="flex justify-between font-medium tracking-normal"
            >
              <span>
                ${dollarAULocale.format(product.variants[0].price.amount)}
              </span>
              <span>{product.title}</span>
            </a>
          </h2>
        </div>
        {/* Card image */}
        <Image
          src={product.images[0].src}
          alt={product.imageAlt ?? "qkc apparel"}
          width="1000"
          height="1000"
          className="absolute left-0 top-2 aspect-auto h-full w-full max-w-full overflow-clip object-cover p-14"
        />
      </div>
    </>
  );
};

export default ProductCard;
