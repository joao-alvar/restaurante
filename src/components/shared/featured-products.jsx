import React, { useContext } from "react";
import { isInCart } from "../../helpers";
import { CartContext } from "../../context/cart-context";
import { withRouter } from "react-router-dom";

const FeaturedProduct = (props) => {
  const { title, imageURL, price, history, id, description } = props;
  const product = { title, imageURL, price, history, id, description };
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const itemInCart = isInCart(product, cartItems);

  return (
    <li className="cart__list__items food__list__li">
      <div className="cart__items__img__wrap">
        <img
          src={imageURL}
          alt={title}
          className="cart__items__img"
          onClick={() => history.push(`/product/${id}`)}
        />
      </div>
      <div className="cart__content">
        <h2>{title}</h2>
        <p className="cart__price">R$ {price}</p>
        <p className="food__list__description">{description}</p>
      </div>

      <div className="product__btn__wrap">
        {!itemInCart && (
          <button
            className="btn__minha__lista"
            onClick={() => addProduct(product)}
          >
            <span>adcionar</span>
          </button>
        )}
        {itemInCart && (
          <button
            className="btn__minha__lista btn__add__mais"
            onClick={() => increase(product)}
          >
            {" "}
            <span>pedir mais um?</span>
          </button>
        )}
      </div>
    </li>
  );
};

export default withRouter(FeaturedProduct);
