const ProductImage = ({ activeProduct }) => {
  return (
    <div className="flex-col md:w-1/2 h-full">
      <div className="relative z-10 aspect-square overflow-hidden rounded-xl bg-[#1d1d1d]">
        <img
          alt={activeProduct?.image.altText}
          aria-hidden="true"
          fetchPriority="high"
          loading="eager"
          width="1500"
          height="1000"
          decoding="async"
          data-nimg="1"
          className="absolute left-0 top-0 aspect-auto h-full w-full max-w-full overflow-clip rounded-xl object-cover align-middle transition ease-out"
          src={activeProduct?.image.src}
        />
        <button
          type="button"
          className="inline-block cursor-zoom-in self-start"
        >
          <img
            alt={activeProduct?.image.altText}
            itemProp="image"
            fetchPriority="high"
            loading="eager"
            width="1500"
            height="1000"
            decoding="async"
            data-nimg="1"
            className="absolute left-0 top-0 h-full w-full max-w-full overflow-clip rounded-xl object-cover align-middle transition ease-out"
            src={activeProduct?.image.src}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductImage;
