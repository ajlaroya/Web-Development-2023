import Image from "next/image";

const ProductImage = ({ activeProduct }) => {
  return (
    <div className="h-full flex-col md:w-1/2">
      <div className="relative z-10 aspect-square overflow-hidden rounded-xl bg-[#1d1d1d]">
        <Image
          alt={activeProduct?.image.altText}
          width="1500"
          height="1000"
          className="absolute left-0 top-0 aspect-auto h-full w-full max-w-full overflow-clip rounded-xl object-cover align-middle transition ease-out"
          src={activeProduct?.image.src}
          priority
        />
        <button
          type="button"
          className="inline-block cursor-zoom-in self-start"
        >
          <Image
            alt={activeProduct?.image.altText}
            width="1500"
            height="1000"
            className="absolute left-0 top-0 h-full w-full max-w-full overflow-clip rounded-xl object-cover align-middle transition ease-out"
            src={activeProduct?.image.src}
            priority
          />
        </button>
      </div>
    </div>
  );
};

export default ProductImage;
