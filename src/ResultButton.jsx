import React from "react";

const ResultButton = ({ className, setModalClass }) => {
  return (
    <button
      className={`${className}-result-button`}
      onClick={() => setModalClass("show-modal")}
    >
      Submit
    </button>
  );
};

export default ResultButton;
