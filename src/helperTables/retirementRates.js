//Based on 2020 recommendations by Fidelity and Investopedia
const noRetirementCeiling = 20;
const sevenPercentCeiling = 29;
const eightPercentCeiling = 49;
const tenPercentCeiling = 59;
const elevenPercentCeiling = 69;
const twelvePercentCeiling = 79;
//Assumes people under 20 or over 80 are not saving for retirement

export const retirementSavingRate = (age) => {
  if (age < noRetirementCeiling) {
    return 0;
  } else if (age < sevenPercentCeiling) {
    return 7;
  } else if (age < eightPercentCeiling) {
    return 8;
  } else if (age < tenPercentCeiling) {
    return 10;
  } else if (age < elevenPercentCeiling) {
    return 11;
  } else if (age < twelvePercentCeiling) {
    return 12;
  } else {
    return 0;
  }
};
