let id = 0;
const uuids: string[] = [];

const flatten = (array: string[][]): string[] =>
  array.reduce((build, row) => build.concat(row));

const product = <L, R, O>(lhs: L[], rhs: R[], op: (l: L, r: R) => O): O[][] =>
  lhs.map(l => rhs.map(r => op(l, r)));

const range = (from: number, to: number): number[] => {
  return new Array(from + to).fill(0).map((_, idx) => from + idx);
};

const generateUUIDs = () => {
  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const letterCodes = product(alpha, alpha, String.prototype.concat);

  const offset = 1000;
  const number = new Array(1000).fill(0).map((_, idx) => offset + idx);
};

export class RobotName {
  private static id = 0;
  public readonly name: string = '';

  constructor() {
    this.name = uuids[id];
  }
}
