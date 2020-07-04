import React from "react";

const ResultModal = ({ result, modalClass, setModalClass, className, age }) => {
  return (
    <div className={modalClass === "" ? "modal" : modalClass}>
      <div className="modal-content">
        <span className="close-button" onClick={() => setModalClass("modal")}>
          &times;
        </span>
        <h3>
          Your income = ${result}{" "}
          {className === "in-depth-calculator" ? `Your age = ${age}` : ""}
        </h3>
      </div>
    </div>
  );
};

export default ResultModal;
