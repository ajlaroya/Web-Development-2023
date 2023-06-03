"use client";

import { client } from "@/utils/shopify";
import React, { useEffect, useState } from "react";

const ShopContext = React.createContext();

const ShopProvider = ({ children }) => {
  const [checkout, setCheckout] = useState({});
  const [cartToggle, setCartToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

  useEffect(() => {
    if (sessionStorage.checkout_id) {
      fetchCheckout(sessionStorage.checkout_id);
    } else {
      createCheckout();
    }
  }, []);

  const createCheckout = async () => {
    const checkout = await client.checkout.create();
    console.log("creating new checkout");
    sessionStorage.setItem("checkout_id", checkout.id);
    setCheckout(checkout);
  };

  const fetchCheckout = async (checkoutId) => {
    client.checkout.fetch(checkoutId).then((checkout) => {
      console.log("existing checkout. fetching...");
      
      if(checkout.completedAt) {
        console.log("checkout completed, removing checkout")
        sessionStorage.removeItem("checkout_id")
      }
      
      setCheckout(checkout);
    });
  };

  const handleCartToggle = () => {
    setCartToggle((prevState) => !prevState);
    if (cartToggle) {
      document.getElementById("page").classList.remove("-translate-x-[445px]");
    } else {
      document.getElementById("page").classList.add("-translate-x-[445px]");
      document.getElementById("page").classList.remove("translate-x-[445px]");
      setMenuToggle(false);
    }
  };

  const handleMenuToggle = () => {
    setMenuToggle((prevState) => !prevState);
    if (menuToggle) {
      document.getElementById("page").classList.remove("translate-x-[445px]");
    } else {
      document.getElementById("page").classList.add("translate-x-[445px]");
      document.getElementById("page").classList.remove("-translate-x-[445px]");
      setCartToggle(false);
    }
  };

  const addItemToCheckout = async (variantId, quantity) => {
    const lineItemToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];

    client.checkout
      .addLineItems(checkout.id, lineItemToAdd)
      .then((checkout) => {
        setCheckout(checkout);
        console.log("item added", checkout);
        handleCartToggle();
      });
  };

  const removeItemFromCheckout = async (checkoutId, variantId) => {
    client.checkout.removeLineItems(checkoutId, variantId).then((checkout) => {
      console.log("item removed");
      setCheckout(checkout);
      console.log(checkout.lineItems);
    });
  };

  return (
    <ShopContext.Provider
      value={{
        checkout,
        cartToggle,
        menuToggle,
        setMenuToggle,
        setCartToggle,
        addItemToCheckout,
        removeItemFromCheckout,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export { ShopContext };
export default ShopProvider;
