const ProductImage = ({ images }) => {
  const imageSrc = images[0].src;
  return (
    <div className="sticky top-0 flex flex-col md:w-1/2">
      <div className="relative z-10 aspect-square overflow-hidden rounded-xl bg-[#1d1d1d]">
        <img
          alt="product"
          aria-hidden="true"
          fetchPriority="high"
          loading="eager"
          width="1500"
          height="1000"
          decoding="async"
          data-nimg="1"
          className="absolute left-0 top-0 aspect-auto h-full w-full max-w-full overflow-clip rounded-xl object-cover align-middle transition ease-out"
          src={imageSrc}
        />
        <button
          type="button"
          className="inline-block cursor-zoom-in self-start"
        >
          <img
            alt=""
            itemProp="image"
            fetchPriority="high"
            loading="eager"
            width="1500"
            height="1000"
            decoding="async"
            data-nimg="1"
            className="absolute left-0 top-0 h-full w-full max-w-full overflow-clip rounded-xl object-cover align-middle transition ease-out"
            src={imageSrc}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductImage;
