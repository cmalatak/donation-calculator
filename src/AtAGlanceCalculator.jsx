import React, { useState } from "react";

import Input from "./Input";
import ResultButton from "./ResultButton";
import ResultModal from "./ResultModal";

const AtAGlanceCalculator = ({ className, calcName }) => {
  const [income, setIncome] = useState(0);
  const [modalClass, setModalClass] = useState("");

  return (
    <div className={className}>
      <h2>{calcName}</h2>
      <div className={`${className}-arguments`}>
        <Input
          label="income-one"
          type="number"
          value={income}
          setValue={setIncome}
        />
      </div>
      <ResultButton className={className} setModalClass={setModalClass} />
      <ResultModal
        income={income}
        age=""
        modalClass={modalClass}
        setModalClass={setModalClass}
        className={className}
      />
    </div>
  );
};

export default AtAGlanceCalculator;
