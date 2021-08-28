import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import PedidosProntos from "./PedidosProntos";

const PedidosCheckout = () => {
  const { cartItems, increase, decrease, removeProduct } =
    useContext(CartContext);
  const funcs = { increase, decrease, removeProduct };
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="lista__vazia">
          <LocalMallOutlinedIcon style={{ fontSize: 50 }} />
          <h2 className="lista__vazia__h2">Sua lista está vazia</h2>
          <p className="lista__vazia__p">
            adicione itens e eles aparecerão aqui.
          </p>
        </div>
      ) : (
        <>
          <div className="lista__cart__container">
            <div className="lista__cart">
              <h1>Minha Lista</h1>
              <div className="lista__cart__wrap">
                {cartItems.map((item) => (
                  <PedidosProntos {...item} key={item.id} {...funcs} />
                ))}
              </div>
            </div>
            <div className="total__cart__container"></div>
          </div>
        </>
      )}
    </>
  );
};

export default PedidosCheckout;
