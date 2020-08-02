import React, { useState } from "react";

import Input from "./Input";
import ResultButton from "./ResultButton";
import ResultModal from "./ResultModal";
import Select from "./Select";

const InDepthCalculator = ({ className, calcName }) => {
  const [income, setIncome] = useState(0);
  const [age, setAge] = useState(0);
  const [debt, setDebt] = useState("Debt");
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
        <Select
          label="debt"
          value={debt}
          setValue={setDebt}
          optionArray={["Currently have debt", "Do not have debt"]}
        />
        <Select
          label="contribution"
          value={contribution}
          setValue={setContribution}
          optionArray={[
            "Dependent",
            "Primary Wage-Earner",
            "Equal Contributor",
            "Primary Wage-Earner w/ Dependents",
          ]}
        />
      </div>
      <ResultButton
        income={income}
        age={age}
        debt={debt}
        contribution={contribution}
        className={className}
        setModalClass={setModalClass}
      />
      <ResultModal
        income={income}
        age={age}
        debt={debt}
        contribution={contribution}
        modalClass={modalClass}
        setModalClass={setModalClass}
        className={className}
      />
    </div>
  );
};

export default InDepthCalculator;
