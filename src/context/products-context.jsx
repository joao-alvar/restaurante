import React, { createContext, useState } from "react";
// import from "../produtos/Data.json";
import BookData from "../Data.json";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(BookData);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
