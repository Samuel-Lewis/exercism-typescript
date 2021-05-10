export default class OcrParser {
  static digits = [
    " _ \n| |\n|_|\n   ",
    "   \n  |\n  |\n   ",
    " _ \n _|\n|_ \n   ",
    " _ \n _|\n _|\n   ",
    "   \n|_|\n  |\n   ",
    " _ \n|_ \n _|\n   ",
    " _ \n|_ \n|_|\n   ",
    " _ \n  |\n  |\n   ",
    " _ \n|_|\n|_|\n   ",
    " _ \n|_|\n _|\n   ",
  ];

  static convert(input: string) {
    const segments = input
      .split("\n")
      .map((segments) => segments.match(/.{3}/g)!);
    // [
    //   [ '   ', ' _ ' ],
    //   [ '  |', '| |' ],
    //   [ '  |', '|_|' ],
    //   [ '   ', '   ' ]
    // ]

    const totalDigits = segments[0].length;
    const allDigits = [];
    for (let i = 0; i < totalDigits; i++) {
      const parsed = segments.map((segment) => segment[i]).join("\n");
      const index = OcrParser.digits.indexOf(parsed);
      const char = index < 0 ? "?" : index.toString();
      allDigits.push(char);
    }

    return allDigits.join("");
  }
}
