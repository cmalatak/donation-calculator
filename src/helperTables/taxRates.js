//Based on the Single 2020 federal income tax brackets for taxes due in April of 2021
const tenPercentCeiling = 9875;
const twelvePercentCeiling = 40125;
const twentyTwoPercentCeiling = 85525;
const twentyFourPercentCeiling = 163300;
const thirtyTwoPercentCeiling = 207350;
const thrityFivePercentCeiling = 518400;
// 37% is the effective tax rate for anyone earning more than $518,400 annually

export const effectiveTaxRate = (income) => {
  if (income < tenPercentCeiling) {
    return 10;
  } else if (income < twelvePercentCeiling) {
    return 12;
  } else if (income < twentyTwoPercentCeiling) {
    return 22;
  } else if (income < twentyFourPercentCeiling) {
    return 24;
  } else if (income < thirtyTwoPercentCeiling) {
    return 32;
  } else if (income < thrityFivePercentCeiling) {
    return 35;
  } else {
    return 37;
  }
};
