const Luhn = {
  valid(s: string) {
    if (s.length <= 1) {
      return false;
    }
    // const doubled = [];
    // for (let i = s.length - 1; i >= 0; i--) {
    //   let digit = parseInt(s[i]);
    //   if (i % 2 === 0) {
    //     digit *= 2;
    //   }
    //   doubled.push(digit);
    // }

    return (
      s
        .split("")
        .reverse()
        .map(Number)
        .map((digit, index) => {
          if (index % 2 === 1) {
            return (digit *= 2);
          }
          return digit;
        })
        .map((digit) => {
          return digit > 9 ? digit - 9 : digit;
        })
        .reduce((accum, curr) => (accum += curr)) %
        10 ===
      0
    );
  },
};

export default Luhn;
