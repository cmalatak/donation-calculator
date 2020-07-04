import React from "react";

const ContributionSelect = ({ id, value, setValue }) => {
  return (
    <select
      id={id}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onBlur={(event) => setValue(event.target.value)}
    >
      <option>Am a Dependent of Someone</option>
      <option>Single Head of Household</option>
      <option>Equal Contributor in Home</option>
      <option>Responsible for Dependents</option>
    </select>
  );
};

export default ContributionSelect;
