import React, { useContext } from "react";
import { ProductsContext } from "../../context/products-context";
import FeaturedProduct from "../shared/featured-products";

const FeaturedCollection = () => {
  const { products } = useContext(ProductsContext);
  const productItems = products
    .filter((product, i) => i < 4)
    .map((product) => <FeaturedProduct {...product} key={product.id} />);

  return (
    <>
      <div className="container">
        <div className="products__container">
          <ul className="food__list__ul">{productItems}</ul>
        </div>
      </div>
    </>
  );
};

export default FeaturedCollection;
