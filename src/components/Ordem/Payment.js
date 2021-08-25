import React from "react";
import Input from "../../controls/Input";
import FormLayout from "../../layout/Form";

const Payment = () => {
  return (
    <div className="total__container">
      <div className="total__wrap">
        <h2>Detalhes do pedido</h2>
        <div className="total__content__md">
          <span className="total__content">Total:</span>
          <span className="total__count">R$ 500</span>
        </div>
        <FormLayout className="inputTotal">
          <label htmlFor="pagamento" className="inputLabelTotal">
            Método de pagamento*
          </label>
          <select
            className="form__input input__select"
            name="pagamento"
            id="pagamento"
          >
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
            <option value="dinheiro">Dinheiro</option>
          </select>
          <button className="form__input__btn btn__secondary">pedidos</button>
          <button className="form__input__btn btn__primary">checkout</button>
        </FormLayout>
      </div>
    </div>
  );
};

export default Payment;
