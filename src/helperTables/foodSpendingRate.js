//Uses the 50-30-20 rule as a guide wehre food spending fits into the 50.
const foodSpendingRate = (contribution) => {
  if (contribution === "Dependent") {
    return 5;
  } else if (contribution === "Primary Wage-Earner w/ Dependents") {
    return 20;
  } else {
    return 12;
  }
};

export default foodSpendingRate;
