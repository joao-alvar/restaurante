import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Select from "../../controls/Select";
// import SelectInput from "../../components/SelectInput";

const pagamento = [
  { id: "credito", title: "Cartão de crédito" },
  { id: "debito", title: "Cartão de débito" },
  { id: "dinheiro", title: "Dinheiro" },
];

const Total = ({ itemCount, total, history, clearCart }) => {
  const { values, handleInputChange } = useState("");
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
            ></Select>
            <button className="form__input__btn btn__secondary">
              Excluir pedidos
            </button>
            <button className="form__input__btn btn__primary">checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Total);
