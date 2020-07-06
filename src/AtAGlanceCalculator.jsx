import React, { useState } from "react";

import Input from "./Input";
import ResultButton from "./ResultButton";
import ResultModal from "./ResultModal";

const AtAGlanceCalculator = ({ className, calcName }) => {
  const [income, setIncome] = useState("Income");
  const [modalClass, setModalClass] = useState("");

  return (
    <div className={className}>
      <h3>{calcName}</h3>
      <div className={`${className}-arguments`}>
        <Input
          label="income"
          type="number"
          value={income}
          setValue={setIncome}
        />
        <ResultButton className={className} setModalClass={setModalClass} />
        <ResultModal
          income={income}
          age=""
          modalClass={modalClass}
          setModalClass={setModalClass}
          className={className}
        />
      </div>
    </div>
  );
};

export default AtAGlanceCalculator;
