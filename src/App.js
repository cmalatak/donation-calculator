import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [income, setIncome] = useState("Income");
  const [modalClass, setModalClass] = useState("");

  return (
    <div className="app">
      <h1>How much should I be donating?</h1>
      <div className="at-a-glance-calc">
        <h3>At a glance:</h3>
        <div className="arguments">
          <label htmlFor="income">
            Enter your annual income:
            <input
              type="number"
              id="income"
              value={income}
              placeholder={income}
              onChange={(event) => setIncome(event.target.value)}
              onBlur={(event) => setIncome(event.target.value)}
            ></input>
          </label>
          <button
            className="calc-at-a-glance-result"
            onClick={() => setModalClass("show-modal")}
          >
            Submit
          </button>
          <div className={modalClass === "" ? "modal" : modalClass}>
            <div className="modal-content">
              <span
                className="close-button"
                onClick={() => setModalClass("modal")}
              >
                &times;
              </span>
              <h3>You can donate ${} a month,</h3>
              <h4>and still have ${} left in free spending.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
