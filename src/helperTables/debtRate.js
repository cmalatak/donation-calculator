//Uses the 50-30-20 rule as a guide wehre food spending fits into the 50.
const debtRate = (debt) => {
  if (debt === "Currently have debt") {
    return 3;
  } else {
    return 0;
  }
};

export default debtRate;
