import React from "react";
import Input from "../../controls/Input";
import FormLayout from "../../layout/Form";
const OrdemForm = () => {
  return (
    <FormLayout>
      <div className="form__container">
        <label htmlFor="name" className="inputLabel">
          Nome:
        </label>
        <Input id="name" />
        <label htmlFor="pagamento" className="inputLabel">
          Número do pedido
        </label>
        <Input id="pagamento" />
      </div>
    </FormLayout>
  );
};

export default OrdemForm;
