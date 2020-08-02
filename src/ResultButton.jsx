import React from "react";

const ResultButton = ({
  income,
  age,
  debt,
  contribution,
  className,
  setModalClass,
}) => {
  return (
    <button
      className={`${className}-result-button`}
      onClick={() =>
        income
          ? setModalClass("show-modal")
          : alert(`Don't forget to input all your info for this Calculator!`)
      }
    >
      Submit
    </button>
  );
};

export default ResultButton;
