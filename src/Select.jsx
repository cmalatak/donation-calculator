import React from "react";

const Select = ({ label, value, setValue, optionArray }) => {
  return (
    <label htmlFor={label}>
      Enter your {label} status:
      <select
        id={label}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onBlur={(event) => setValue(event.target.value)}
      >
        {optionArray.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </label>
  );
};

export default Select;
