import Image from "next/image";

const ProductCard = ({ product }) => {
  let dollarAULocale = Intl.NumberFormat("en-AU");

  return (
    <>
      {/* Product cards */}
      <div className="flex flex-col relative w-auto bg-[#1d1d1d] overflow-hidden aspect-square rounded-[13px] text-[17px] tracking-wide leading-6">
        {/* Card content */}
        <div className="flex-grow p-[19px] md:p-[22px] z-10 ">
          <h2 className="mt-[-3px]">
            <a
              href="/"
              className="flex justify-between font-medium trakcing-normal"
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
          className="max-w-full h-full w-full overflow-clip absolute left-0 top-2 object-cover aspect-auto rounded-lg p-14"
        />
      </div>
    </>
  );
};

export default ProductCard;
