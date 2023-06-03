import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductSlider = ({ products }) => {
  const router = useRouter();

  return (
    <div className="relative flex snap-x snap-mandatory items-center gap-5 overflow-x-scroll pt-8">
      {/* Product item */}
      {products.map((product, index) => (
        <div
          key={index}
          className="flex w-[33vw] shrink-0 cursor-pointer snap-start items-center justify-center transition duration-300 ease-in-out hover:-translate-y-2 md:w-[16vw]"
          onClick={() => router.push(`/product/${product.handle}`)}
        >
          <div className="relative flex aspect-square w-full flex-col overflow-hidden rounded-xl bg-[#1d1d1d]">
            {/* <div className="relative z-10 grow p-4">
              <h2 className="mt-[-3px]">
                <a
                  href={`/product/${product.handle}`}
                  className="flex justify-between gap-4 bg-transparent"
                >
                  <span>00{index}</span>
                  <span></span>
                </a>
              </h2>
            </div> */}
            <Image
              alt={product.imageAlt ?? "qkc apparel"}
              width="1500"
              height="1000"
              src={product.images[0].src}
              className="absolute left-0 top-0 aspect-auto h-full w-full max-w-full rounded-lg object-cover p-10"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSlider;
