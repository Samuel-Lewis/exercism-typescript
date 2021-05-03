const Luhn = {
  valid(s: string) {
    const numberArray = s
      .split("")
      .filter((digit) => digit !== " ")
      .reverse()
      .map(Number);

    const hasNaN = numberArray.filter((digit) => digit === NaN).length > 0;
    // const hasNaN2 = numberArray.some((digit) => Number.isNaN(digit));

    if (hasNaN || numberArray.length <= 1) {
      return false;
    }

    const check = numberArray
      .map((digit, index) => {
        if (index % 2 === 1) {
          return (digit *= 2);
        }
        return digit;
      })
      .map((digit) => {
        return digit > 9 ? digit - 9 : digit;
      })
      .reduce((accum, curr) => (accum += curr));

    return check % 10 === 0;
  },
};

export default Luhn;
