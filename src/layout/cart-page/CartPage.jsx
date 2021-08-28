import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import CartItems from "./cart-items";

const CartPage = () => {
  const { cartItems, increase, decrease, removeProduct } =
    useContext(CartContext);
  const funcs = { increase, decrease, removeProduct };
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="lista__vazia">
          <h2 className="lista__vazia__h2">Você não fez nenhum pedido</h2>
          <p className="lista__vazia__p">peça agora.</p>
        </div>
      ) : (
        <>
          <div className="lista__cart__container">
            <div className="lista__cart">
              <div className="lista__cart__wrap">
                {cartItems.map((item) => (
                  <CartItems {...item} key={item.id} {...funcs} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CartPage;
