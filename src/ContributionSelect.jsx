import React from "react";

const ContributionSelect = ({ label, value, setValue }) => {
  return (
    <label htmlFor={label}>
      Enter your {label} status:
      <select
        id={label}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onBlur={(event) => setValue(event.target.value)}
      >
        <option>Am a Dependent of Someone</option>
        <option>Single Head of Household</option>
        <option>Equal Contributor in Home</option>
        <option>Responsible for Dependents</option>
      </select>
    </label>
  );
};

export default ContributionSelect;
