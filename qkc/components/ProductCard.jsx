"use client";

import Image from "next/image";
import { motion, stagger } from "framer-motion";
import { useRouter } from "next/navigation";
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="relative flex aspect-square w-auto cursor-pointer flex-col overflow-hidden rounded-xl bg-[#1d1d1d] text-[17px] transition duration-300 ease-in-out first:cursor-none hover:-translate-y-2"
        style={{ "--animation-order": `${index + 1}` }}
        onClick={() => router.push(`/product/${product.handle}`)}
      >
        {/* Card content */}
        <div className="z-10 flex-grow p-[19px] md:p-[22px] ">
          <span className="mt-[-3px]">
            <a
              href={`/product/${product.handle}`}
              className="flex justify-between font-medium tracking-normal"
            >
              <span>
                ${dollarAULocale.format(product.variants[0].price.amount)}
              </span>
              <span>{product.title}</span>
            </a>
          </span>
        </div>
        {/* Card image */}
        <Image
          src={product.images[0].src}
          alt={product.imageAlt ?? "qkc apparel"}
          width="1000"
          height="1000"
          className="absolute left-0 top-2 aspect-auto h-full w-full max-w-full overflow-clip object-cover p-10 sm:p-24 drop-shadow-[0_15px_15px_rgba(255,255,255,0.1)]"
        />
      </motion.div>
    </>
  );
};

export default ProductCard;
