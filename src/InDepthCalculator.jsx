import React, { useState } from "react";

import Input from "./Input";
import ResultButton from "./ResultButton";
import ResultModal from "./ResultModal";
import ContributionSelect from "./ContributionSelect";

const InDepthCalculator = ({ className, calcName }) => {
  const [income, setIncome] = useState("Income");
  const [age, setAge] = useState("Age");
  const [contribution, setContribution] = useState("Contribution");
  const [modalClass, setModalClass] = useState("");

  return (
    <div className={className}>
      <h2>{calcName}</h2>
      <div className={`${className}-arguments`}>
        <Input
          label="income-two"
          type="number"
          value={income}
          setValue={setIncome}
        />
        <Input label="age" type="number" value={age} setValue={setAge} />
        <ContributionSelect
          label="contribution"
          value={contribution}
          setValue={setContribution}
        />
      </div>
      <ResultButton className={className} setModalClass={setModalClass} />
      <ResultModal
        income={income}
        modalClass={modalClass}
        setModalClass={setModalClass}
        className={className}
        age={age}
      />
    </div>
  );
};

export default InDepthCalculator;
