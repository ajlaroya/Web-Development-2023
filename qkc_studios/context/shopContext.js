'use client';

import { createContext, useEffect, useState } from "react";

const ShopContext = createContext()

export const ShopProvider = ({ children }) => {
  const [checkout, setCheckout] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu =  ()  =>  {
    setIsMenuOpen(prev => !prev);
    console.log(isMenuOpen)
  }

  const createCheckout = async () => {
    const checkout = await client.checkout.create();
    console.log("creating new checkout");
    sessionStorage.setItem("checkout_id", checkout.id);
    setCheckout(checkout);
  };

  const fetchCheckout = async (checkoutId) => {
    client.checkout.fetch(checkoutId).then((checkout) => {
      console.log("existing checkout. fetching...");
      setCheckout(checkout);
    });
  };

    return (
        <ShopContext.Provider value={{
          checkout,
          isMenuOpen, setIsMenuOpen,
          isCartOpen, setIsCartOpen,
        }}>
            {children}
        </ShopContext.Provider>
    )
};

export { ShopContext };
export default ShopProvider;