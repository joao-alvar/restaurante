import React from "react";
import OrdemForm from "./OrdemForm";
import { useForm } from "../../hooks/useForm";

const generateOrderNumber = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

const getFreshModelObject = () => ({
  customerName: [],
  orderNumeber: generateOrderNumber(),
  pagamento: "none",
  total: 0,
  deletedOrederItem: "",
  orderDetails: [],
});

const Ordem = () => {
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetFormControls,
  } = useForm(getFreshModelObject);
  return (
    <section className="ordem__form" id="pedido">
      <div className="ordem__form__wrap">
        <div className="ordem__form__title">
          <h2 className="ordem__title__content">menu</h2>
        </div>
        <div className="ordem__md">
          <OrdemForm {...{ values, errors, handleInputChange }} />
        </div>
      </div>
    </section>
  );
};

export default Ordem;
