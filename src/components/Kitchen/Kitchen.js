import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart-context";
import KitchenList from "./KitchenList";
import { UserName } from "../UserInputName/UserName";
import { MsgDisplay } from "../userMsg/MsgDisplay";

const Kitchen = () => {
  const { itemCount, total, moveItem } = useContext(CartContext);

  const { cartItems, increase, decrease, removeProduct } =
    useContext(CartContext);
  const funcs = { increase, decrease, removeProduct };
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="kitchen__empty">
          <h2 className="kitchen__empty__h2">
            Você ainda não fez nenhum pedido
          </h2>
          <p className="kitchen__empty__p">
            volte para a{" "}
            <Link to="/" className="kitchen__empty__link">
              pagina inicial
            </Link>{" "}
            e faça o seu pedido.
          </p>
        </div>
      ) : (
        <>
          <div className="kitchen__cart__container">
            <div className="kitchen__title__wrap">
              <h2 className="kitchen__title__content">pedidos para entregar</h2>
            </div>
            <div className="list__kitchen">
              <h2 className="list__kitchen__userName">
                Nome do cliente: {"  "}
                <span className="list__kitchen__userName__span">
                  <UserName />
                </span>
              </h2>
              <div className="kitchen__list__wrap">
                {cartItems.map((item) => (
                  <KitchenList
                    {...item}
                    key={item.id}
                    {...funcs}
                    itemCount={itemCount}
                    total={total}
                    moveItem={moveItem}
                  />
                ))}
              </div>
            </div>
            <div className="user__msg">
              <div className="kitchen__title__wrap">
                <h2 className="msg__title">observações</h2>
              </div>
              <div className="user__msg__wrap">
                <MsgDisplay />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Kitchen;
