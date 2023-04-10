import Image from "next/image";
import Link from "next/link";

type Props = {};

const ProductCard = ({ product }: any) => {
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
                $
                {dollarAULocale.format(
                  product.node.priceRange.minVariantPrice.amount
                )}
              </span>
              <span>{product.node.title}</span>
            </a>
          </h2>
        </div>
        {/* Card image */}
        <Image
          src={product.node.featuredImage.url}
          alt={product.node.featuredImage.alttext ?? "qkc apparel"}
          width="1000"
          height="1000"
          className="max-w-full h-full w-full overflow-clip absolute left-0 top-2 object-cover aspect-auto rounded-lg p-14"
        />
      </div>
    </>
  );
};

export default ProductCard;
