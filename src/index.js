import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import ProductsContextProvider from "./context/products-context";
import CartContextProvider from "./context/cart-context";
import { GlobalProvider } from "./context/UserContext/GlobalState";
import BookData from "./Data.json";
import { MsgProvider } from "./context/msgContext/MsgContext";

ReactDOM.render(
  <BrowserRouter>
    <ProductsContextProvider data={BookData}>
      <GlobalProvider>
        <MsgProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </MsgProvider>
      </GlobalProvider>
    </ProductsContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
