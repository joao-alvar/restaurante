import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { UserName } from "../../context/userName";

const PedidosProntos = (props) => {
  const { title, imageURL, quantity, id, description, removeProduct } = props;
  const product = { title, imageURL, quantity, id, description };
  return (
    <div className="cart__list__items">
      <div className="cart__items__img__wrap">
        <img src={imageURL} alt={title} className="cart__items__img" />
      </div>
      <div className="cart__content">
        <h2>{title}</h2>
        <div className="quantidade">
          <p className="cart__quant">{`Quantidade: ${quantity}`}</p>
          <UserName />
        </div>
      </div>
      <div className="cart__btn__wrap">
        {quantity === 1 && (
          <button
            onClick={() => removeProduct(product)}
            className="btn__cart btn__delete"
          >
            <DeleteForeverIcon style={{ fontSize: 20 }} />
          </button>
        )}
      </div>
    </div>
  );
};

export default PedidosProntos;
