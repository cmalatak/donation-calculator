import React from "react";

import { effectiveTaxRate } from "./helperTables/taxRates";
import { rentAllocation } from "./helperTables/rentRates";
import { retirementSavingRate } from "./helperTables/retirementRates";
import foodSpendingRate from "./helperTables/foodSpendingRate";

const ResultModal = ({ income, age, modalClass, setModalClass, className }) => {
  // For at a glance 62 is the sum of the average rates remaining for food spending and retirement savings
  const percentageLeftOver =
    className === "in-depth-calculator"
      ? (100 -
          effectiveTaxRate(income) -
          rentAllocation(income) -
          foodSpendingRate("") -
          20) /
        100
      : (100 - effectiveTaxRate(income) - rentAllocation(income) - 32) / 100;
  const excessIncome = income * percentageLeftOver;
  const donationPercentage = (percentageLeftOver) => {
    if (percentageLeftOver < 10) {
      return 0.01;
    } else if (percentageLeftOver < 15) {
      return 0.02;
    } else if (percentageLeftOver < 20) {
      return 0.03;
    } else if (percentageLeftOver < 30) {
      return 0.04;
    } else {
      return 0.05;
    }
  };
  const monthlyDonationRec = Math.round(
    (income * donationPercentage(percentageLeftOver)) / 12
  );
  const discretionarySpending = Math.round(
    excessIncome / 12 - monthlyDonationRec
  );

  const extraThings = ` Extra Things!`;

  return (
    <div className={modalClass === "" ? "modal" : modalClass}>
      <div className="modal-content">
        <span className="close-button" onClick={() => setModalClass("modal")}>
          &times;
        </span>
        <h2>You can donate ${monthlyDonationRec} each month,</h2>
        <h3>
          and you can still afford ${discretionarySpending} of free spending
          each month.
          {className === "in-depth-calculator" ? extraThings : ""}
        </h3>
      </div>
    </div>
  );
};

export default ResultModal;
