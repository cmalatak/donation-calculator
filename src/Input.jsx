import React from "react";

const Input = ({ label, type, value, setValue }) => {
  const text = label.split("-");
  return (
    <label htmlFor={label}>
      Enter your {text[0]}:
      <input
        id={label}
        type={type}
        value={value}
        placeholder={value}
        onChange={(event) => setValue(event.target.value)}
        onBlur={(event) => setValue(event.target.value)}
      ></input>
    </label>
  );
};

export default Input;
