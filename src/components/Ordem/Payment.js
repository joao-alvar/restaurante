import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import CartPage from "../../layout/cart-page/CartPage";
import Total from "../../layout/cart-page/total";
import { CartContext } from "../../context/cart-context";

const Payment = () => {
  const { itemCount, total, clearCart } = useContext(CartContext);

  return (
    <div className="order__details">
      <Total itemCount={itemCount} total={total} clearCart={clearCart} />
      <CartPage />
    </div>
  );
};

export default withRouter(Payment);
