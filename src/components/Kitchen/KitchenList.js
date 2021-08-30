import React from "react";

const generateOrderNumber = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

const KitchenList = (props) => {
  const { title, imageURL, quantity, id, description, moveItem } = props;
  const product = { title, imageURL, quantity, id, description };
  const orderNum = generateOrderNumber();
  return (
    <div className="cart__list__items">
      <div className="cart__items__img__wrap">
        <img src={imageURL} alt={title} className="cart__items__img" />
      </div>
      <div className="cart__content">
        <h2>{title}</h2>
        <div className="quantidade">
          <p className="cart__quant">{`Quantidade: ${quantity}`}</p>
          <h3>Pedido número: {orderNum}</h3>
        </div>
      </div>
      <div className="cart__btn__wrap">
        <button className="kitchen__btn" onClick={() => moveItem()}>
          Entregar
        </button>
      </div>
    </div>
  );
};

export default KitchenList;
