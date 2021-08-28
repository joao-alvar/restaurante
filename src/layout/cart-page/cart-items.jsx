import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";

const CartItems = (props) => {
  const {
    title,
    imageURL,
    price,
    quantity,
    id,
    description,
    increase,
    decrease,
    removeProduct,
  } = props;
  const product = { title, imageURL, price, quantity, id, description };
  return (
    <div className="cart__list__items">
      <div className="cart__items__img__wrap">
        <img src={imageURL} alt={title} className="cart__items__img" />
      </div>
      <div className="cart__content">
        <h2>{title}</h2>
        <p className="cart__price">R$ {price}</p>
      </div>

      <div className="cart__btn__wrap">
        <button
          onClick={() => increase(product)}
          className="btn__cart btn__checkout"
        >
          <AddIcon style={{ fontSize: 20 }} />
        </button>
        <div className="quantidade">
          <p className="cart__quant">{quantity}</p>
        </div>
        {quantity === 1 && (
          <button
            onClick={() => removeProduct(product)}
            className="btn__cart btn__delete"
          >
            <DeleteIcon style={{ fontSize: 20 }} />
          </button>
        )}
        {quantity > 1 && (
          <button
            onClick={() => decrease(product)}
            className="btn__cart btn__remove"
          >
            <RemoveIcon style={{ fontSize: 20 }} />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItems;
