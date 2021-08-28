import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router";
import { ProductsContext } from "../../context/products-context";
import { CartContext } from "../../context/cart-context";
import { isInCart } from "../../helpers";

const ProductPage = ({ match, history: { push } }) => {
  const { products } = useContext(ProductsContext);
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const { id } = match.params;
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const product = products.find((item) => Number(item.id) === Number(id));

    // se produto não existe redirecionar para página do produto
    if (!product) {
      return push("/");
    }

    setProduct(product);
  }, [id, product, products, push]);
  if (!product) {
    return null;
  }
  const { imageURL, title, price, description } = product;
  const itemInCart = isInCart(product, cartItems);
  return (
    <section className="product__page__wrap">
      <div className="product__page__img__wrap">
        <img src={imageURL} alt={title} />
      </div>
      <div className="product__page__container">
        <div className="product__page__title">
          <h1>{title}</h1>
          <p>R$ {price}</p>
        </div>
        <div className="product__page__description">
          <h3 className="product__page__description__h3">Sobre o prato</h3>
          <p>{description}</p>
        </div>
        <div className="product__page__btn">
          {!itemInCart && (
            <button
              className="btn__product btn__primary"
              onClick={() => addProduct(product)}
            >
              {""}
              pedir
            </button>
          )}
          {itemInCart && (
            <button
              className="btn__product btn__primary"
              onClick={() => increase(product)}
            >
              {" "}
              pedir mais um?
            </button>
          )}
          <button className="btn__product btn__secondary">checkout</button>
        </div>
      </div>
    </section>
  );
};

export default withRouter(ProductPage);
