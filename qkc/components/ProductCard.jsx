"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProductCard = ({ product, index }) => {
  console.log(product.options[0].values.length)
  let dollarAULocale = Intl.NumberFormat("en-AU");
  const router = useRouter();

  useEffect(() => {
    // Prefetch products
    router.prefetch(`/product/${product.handle}`);
  }, [router]);

  return (
    <>
      {/* Product cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className="relative flex aspect-square w-auto cursor-pointer flex-col overflow-hidden rounded-xl bg-[#1d1d1d] text-[17px] transition duration-300 ease-in-out first:cursor-none hover:-translate-y-2"
        onClick={() => router.push(`/product/${product.handle}`)}
      >
        {/* Card content */}
        <div className="z-10 flex-grow p-[19px] md:p-[22px] ">
          <span className="mt-[-3px]">
            <a
              href={`/product/${product.handle}`}
              className="flex justify-between font-medium text-sm sm:text-base md:text-sm text-gray-200 uppercase"
            >
              <span>
                ${dollarAULocale.format(product.variants[0].price.amount)}
              </span>
              <span>{product.title} / {product.options[0].values.length} hues</span>
            </a>
          </span>
        </div>
        {/* Card image */}
        <Image
          src={product.images[0].src}
          alt={product.imageAlt ?? "qkc apparel"}
          width="500"
          height="500"
          priority
          className="absolute left-0 top-2 aspect-auto h-full w-full max-w-full overflow-clip object-cover p-10 sm:p-24 drop-shadow-[0_15px_15px_rgba(255,255,255,0.05)]"
        />
      </motion.div>
    </>
  );
};

export default ProductCard;
