"use client";

import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import ProductDetails from "@/app/product/[handle]/ProductDetails";
import ProductImage from "@/app/product/[handle]/ProductImage";
import ProductSlider from "@/app/product/[handle]/ProductSlider";

const Product = ({ product, products }) => {
  const { variants } = product;
  const initialProduct = {
    colour: variants[0].selectedOptions[0].value,
    size: variants[0].selectedOptions[1]?.value,
  };

  const [activeProduct, setActiveProduct] = useState(variants[0]);
  const [selectedProduct, setSelectedProduct] = useState(initialProduct);

  // If selected product has no size, returns colour only
  const checkSize = () => {
    if (selectedProduct.size) {
      const productString = `${selectedProduct.colour} / ${selectedProduct.size}`;
      return productString;
    } else {
      const productString = `${selectedProduct.colour}`;
      return productString;
    }
  };

  const productString = checkSize();

  // Searches all variants of the product based on productString query
  const finalVariant = variants.filter((variant) =>
    variant.title.includes(productString)
  );

  // everytime product is changed, sets active product
  useEffect(() => {
    setActiveProduct(finalVariant[0]);
  }, [productString]);

  return (
    <>
      {/* Product details */}
      <div className="flex flex-col gap-6 md:flex-row-reverse">
        <ProductImage activeProduct={activeProduct} />
        <ProductDetails
          product={product}
          activeProduct={activeProduct}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      </div>

      <ProductSlider products={products} />
      <Footer />
    </>
  );
};

export default Product;
