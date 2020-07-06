const enoughMoneyToNotThinkAboutRent = 500000;

export const rentAllocation = (income) => {
  if (income < enoughMoneyToNotThinkAboutRent) {
    return 30;
  } else return 15;
};
