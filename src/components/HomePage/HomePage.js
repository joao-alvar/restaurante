import React from "react";
import Navbar from "../Navbar";
import { MdKeyboardArrowRight } from "react-icons/md";

const HomePage = () => {
  return (
    <section className="home__page">
      <div className="home__page__wrap">
        <Navbar />
        <div className="home__page__content">
          <div className="inner__content">
            <h3 className="inner__content__h3">comida caseira</h3>
            <div className="inner__h1__wrap">
              <h1 className="inner__content__h1 first__h1">mexicana?</h1>
              <h2 className="inner__content__h2"> Faça o seu pedido</h2>
            </div>
            <a href="#pedido" className="link__home">
              pedir agora
              <MdKeyboardArrowRight
                style={{ fontSize: "2.3rem", color: "#fff" }}
                className="arrowIcon"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
