import React, { useState } from "react";
import { createContext, useContext } from "react";
import { useCookies } from "react-cookie";
export const ProductContext = createContext(null);

export const ProductProvider = (props) => {
  const { children } = props;
  const [cookies, setCookies, removeCookies] = useCookies([
    "username",
    "password",
  ]);
  const [cart, setCart] = useState(0);
  const [productsOfCart, setProductOfCart] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <ProductContext.Provider
      value={{
        cart,
        setCart,
        productsOfCart,
        setProductOfCart,
        total,
        setTotal,
        cookies,
        setCookies,
        removeCookies,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
