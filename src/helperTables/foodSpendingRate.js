//Uses the 50-30-20 rule as a guide wehre food spending fits into the 50.
const foodSpendingRate = (householdContribution) => {
  if (householdContribution === "Am a Dependent of Someone") {
    return 5;
  } else if (householdContribution === "Responsible for Dependents") {
    return 20;
  } else {
    return 12;
  }
};

export default foodSpendingRate;
