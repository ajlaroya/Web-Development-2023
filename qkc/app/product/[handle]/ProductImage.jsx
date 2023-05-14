import Image from "next/image";

const ProductImage = ({ activeProduct, images }) => {
  return (
    <>
      <div className="h-full flex-col md:w-1/2">
        <div className="relative z-10 aspect-square overflow-hidden rounded-xl bg-[#1d1d1d]">
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

      {/* full screen gallery overlay */}
      <div className="opacity-0 z-0 min-w-screen absolute top-0 left-0 h-screen min-h-screen w-screen bg-black flex flex-wrap items-center justify-center whitespace-pre">
        {images.map((image) => (
          <div key={image.src} className="h-36 w-36">
            <Image
              alt={image.altText}
              width={image.height}
              height={image.width}
              className="h-full w-full object-contain"
              src={image.src}
              priority
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductImage;
