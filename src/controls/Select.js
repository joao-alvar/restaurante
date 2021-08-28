import React from "react";

const Select = (props) => {
  const {
    placeholder,
    name,
    value,
    onChange,
    options,
    error = null,
    ...other
  } = props;
  return (
    <select
      className="form__input"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    >
      {options.map((item) => (
        <option key={item.id} value={item.id}>
          {item.title}
        </option>
      ))}
    </select>
  );
};

export default Select;
