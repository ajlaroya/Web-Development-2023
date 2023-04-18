const ProductImage = ({ images }) => {
  const imageSrc = images[0].src;
  return (
    <div className="flex flex-col md:w-1/2 sticky top-0">
      <div className="overflow-hidden aspect-square rounded-xl relative z-10 bg-[#1d1d1d]">
        <img
          alt="product"
          aria-hidden="true"
          fetchPriority="high"
          loading="eager"
          width="1500"
          height="1000"
          decoding="async"
          data-nimg="1"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-xl overflow-clip max-w-full aspect-auto align-middle transition ease-out"
          src={imageSrc}
        />
        <button
          type="button"
          className="self-start inline-block cursor-zoom-in"
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
            className="absolute top-0 left-0 w-full h-full object-cover rounded-xl transition ease-out max-w-full align-middle overflow-clip"
            src={imageSrc}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductImage;
