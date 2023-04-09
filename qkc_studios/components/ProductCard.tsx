import Image from "next/image";
import Link from "next/link";

type Props = {};

const ProductCard = ({ product }: any) => {
  return (
    <>
      <div>
        <div className="relative w-full h-40 aspect-w-1 aspect-h-1 bg-gradient-to-b from-zinc-800/30 rounded-lg overflow-hidden backdrop-blur-2xl  xl:aspect-w-7 xl:aspect-h-8">
          <Image
            src={product.node.featuredImage.url}
            alt={product.node.featuredImage.alttext}
            fill
            className="object-cover group-hover:opacity-75"
          />
        </div>
        <div className="font-mono">
          <h3 className="mt-4 text-sm uppercase font-medium text-zinc-400">
            <Link
              href={`products/${product.node.handle}/?id=${product.node.id}`}
            >
              {product.node.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-zinc-300">
            ${product.node.priceRange.minVariantPrice.amount}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
