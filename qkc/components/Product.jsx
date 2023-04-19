"use client";

import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import ProductDescription from "@/components/ProductDescription";
import ProductImage from "@/components/ProductImage";
import ProductSlider from "@/components/ProductSlider";

const Product = ({ product, products, checkout }) => {
  const { variants } = product;
  const [activeProduct, setActiveProduct] = useState(variants[0]);
  const [selectedProduct, setSelectedProduct] = useState({
    colour: variants[0].selectedOptions[0].value,
    size: variants[0].selectedOptions[1]?.value,
  });

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

  // This basically filters all variants of the product based on productString query
  const finalVariant = variants.filter((variant) =>
    variant.title.includes(productString)
  );

  // everytime product is changed, sets active product
  useEffect(() => {
    setActiveProduct(finalVariant[0]);
    console.log(productString);
  }, [productString]);

  return (
    <>
      {/* Product details */}
      <div className="flex flex-col gap-6 md:flex-row-reverse">
        <ProductImage activeProduct={activeProduct} />
        <ProductDescription
          product={product}
          checkout={checkout}
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
