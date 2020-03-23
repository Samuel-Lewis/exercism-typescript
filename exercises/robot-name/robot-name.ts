const flatten = (array: string[][]): string[] =>
  array.reduce((build, row) => build.concat(row));

const product = <L, R, O>(lhs: L[], rhs: R[], op: (l: L, r: R) => O): O[][] =>
  lhs.map(l => rhs.map(r => op(l, r)));

export const range = (from: number, to: number): number[] => {
  return new Array(Math.abs(from - to) + 1).fill(0).map((_, idx) => {
    return from < to ? from + idx : from - idx;
  });
};

const shuffle = <T>(array: Array<T>): Array<T> =>
  array.sort(() => Math.random() * 2 - 1);

const generateUUIDs = () => {
  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const letterCodes = flatten(product(alpha, alpha, (a, b) => a + b));
  const numbers = range(0, 999).map(n => n.toString().padStart(3, '0'));
  const codes = flatten(product(letterCodes, numbers, (a, b) => a + b));
  const shuffledCodes = shuffle(codes);
  return shuffledCodes;
};

const uuids = generateUUIDs();

export class RobotName {
  private static counter = 0;
  private _name: string = '';

  constructor() {
    this.resetName();
  }

  get name() {
    return this._name;
  }

  resetName() {
    this._name = uuids[RobotName.counter];
    RobotName.counter++;
  }
}
