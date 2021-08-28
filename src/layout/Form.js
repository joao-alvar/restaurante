import React from "react";

const FormLayout = (props) => {
  const handleInput = (e) => {
    e.preventDefault();
  };
  const { children, ...other } = props;
  return (
    <form
      className="form__layout"
      noValidate
      autoComplete="off"
      {...other}
      onSubmit={handleInput}
    >
      {children}
    </form>
  );
};

export default FormLayout;
