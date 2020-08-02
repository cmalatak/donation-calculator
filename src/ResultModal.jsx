import React from "react";

import { effectiveTaxRate } from "./helperTables/taxRates";
import { rentAllocation } from "./helperTables/rentRates";
import { retirementSavingRate } from "./helperTables/retirementRates";
import debtRate from "./helperTables/debtRate";
import foodSpendingRate from "./helperTables/foodSpendingRate";

const ResultModal = ({
  income,
  age,
  debt,
  contribution,
  modalClass,
  setModalClass,
  className,
}) => {
  // For at a glance 62 is the sum of the average rates remaining for food spending and retirement savings
  const percentageLeftOver =
    className === "in-depth-calculator"
      ? (100 -
          effectiveTaxRate(income) -
          rentAllocation(income) -
          foodSpendingRate(contribution) -
          debtRate(debt) -
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

  const retirementRec = Math.round(
    (income * (retirementSavingRate(age) / 100)) / 12
  );
  const foodSpendRec = Math.round(
    (income * (foodSpendingRate(contribution) / 100)) / 12
  );
  const debtSavingRec = Math.round((income * (debtRate(debt) / 100)) / 12);
  const rentRec = Math.round((income * (rentAllocation(income) / 100)) / 12);

  const budgetRecommendations = {
    retirement: retirementRec,
    food: foodSpendRec,
    debt: debtSavingRec,
    rent: rentRec,
  };

  const extraThings = ` You can also set aside $${retirementRec} for retirement, $${debtSavingRec} to pay off your debts, and still be able to afford an apartment at ${rentRec} a month.`;

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
