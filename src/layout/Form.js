import React from "react";

const FormLayout = (props) => {
  const { children, ...other } = props;
  return (
    <form className="form__layout" noValidate autoComplete="off" {...other}>
      {props.children}
    </form>
  );
};

export default FormLayout;
