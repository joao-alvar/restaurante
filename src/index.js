import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import ProductsContextProvider from "./context/products-context";
import CartContextProvider from "./context/cart-context";
import { GlobalProvider } from "./context/UserContext/GlobalState";
import BookData from "./Data.json";

ReactDOM.render(
  <BrowserRouter>
    <ProductsContextProvider data={BookData}>
      <GlobalProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </GlobalProvider>
    </ProductsContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
