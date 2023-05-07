'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

const ProductCard = ({ product, index }) => {
  let dollarAULocale = Intl.NumberFormat("en-AU");
  const router = useRouter();

  useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch(`/product/${product.handle}`);
  }, [router]);

  return (
    <>
      {/* Product cards */}
      <div
        className="relative flex aspect-square w-auto cursor-pointer flex-col overflow-hidden rounded-xl bg-[#1d1d1d] text-[17px] transition duration-300 ease-in-out first:cursor-none hover:-translate-y-2"
        style={{ "--animation-order": `${index + 1}` }}
        onClick={() => router.push(`/product/${product.handle}`)}
      >
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
