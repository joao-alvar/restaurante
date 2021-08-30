import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../../controls/Input";
import Select from "../../controls/Select";
// import SelectInput from "../../components/SelectInput";

const pagamento = [
  { id: "dinheiro", title: "Dinheiro" },
  { id: "credito", title: "Cartão de crédito" },
  { id: "debito", title: "Cartão de débito" },
];

const Total = ({ itemCount, total, clearCart }) => {
  const { values, handleInputChange } = useState("");
  const [currentNum, setCurrentNum] = useState("");
  const [clear, setClear] = useState(false);

  const Add = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    let currentNum = document.querySelector("#num").value;
    if (currentNum <= total) return;
    let dim = total.toFixed(2) - parseInt(currentNum);
    setCurrentNum(Math.abs(-dim).toFixed(2));
    document.querySelector("#num").value = "";
  };

  const Clear = (e) => {
    e.preventDefault();
    console.log("dim:", currentNum);
    document.querySelector("form").reset();
    setClear(true);
    setCurrentNum(0);
  };
  useEffect(() => {
    document.querySelector("#result").value = "";
  }, []);

  useEffect(() => {
    if (clear) document.querySelector("#result").value = "";
  });
  return (
    <>
      <div className="total__container">
        <div className="total__wrap">
          <h2>Detalhes do pedido</h2>
          <div className="total__content__itens">
            <span className="total__content">Pedidos:</span>
            <span className="total__count">{itemCount}</span>
          </div>
          <div className="total__content__md">
            <span className="total__content">Total:</span>
            <span className="total__count">R$ {total.toFixed(2)}</span>
          </div>
          <div className="inputTotal">
            <label htmlFor="pagamento" className="inputLabelTotal">
              Método de pagamento*
            </label>
            <Select
              className="form__input input__select"
              name="pagamento"
              id="pagamento"
              value={values.pagamento}
              options={pagamento}
              onChange={handleInputChange}
              // {...(.pagamento === "dinheiro" && alert("it working"))}
              // {...(handleInputChange === pagamento[2] && alert("its working"))}
            />
            {/* <Input type="number" />
            <button onClick={() => clearCart()}>calcular</button> */}

            <div className="change__tip">
              <label
                htmlFor="num"
                className="inputLabelTotal change__tip__label"
              >
                Troco a receber*
              </label>
              <div className="change__input__wrap">
                <Input
                  type="number"
                  id="num"
                  placeholder="Colocar montante"
                  className="change__tip__num"
                />
                <Input
                  type="text"
                  id="result"
                  value={`R$ ${currentNum}`}
                  placeholder="Resultado"
                  readOnly
                  className="change__tip__results"
                />
              </div>
              <div className="change__tip__btn__wrap">
                <button
                  className="change__tip__btn change__btn__primary"
                  onClick={Add}
                >
                  Calcular
                </button>
                <button
                  className="change__tip__btn change__btn__secondary"
                  onClick={Clear}
                >
                  Limpar
                </button>
              </div>
            </div>

            <button
              className="form__input__btn btn__secondary"
              onClick={() => clearCart()}
            >
              Excluir pedidos
            </button>
            <Link to="/cozinha" className="form__input__link">
              <button className="form__input__btn btn__primary">
                checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Total;
