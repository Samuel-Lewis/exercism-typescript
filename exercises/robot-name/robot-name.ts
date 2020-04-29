/**
 * This exercise uses two different approaches to solve the same problem.
 * Approach 1 is using a function generator to calculate the corresponding uuid
 * Approach 2 pregenerates all uuids but focuses on types and HOFs
 */
const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const genId = (n: number): string => {
  const numbers = (n % 1000).toString().padStart(3, '0');
  const A1 = alpha[Math.floor(n / 26000) % 26];
  const A2 = alpha[Math.floor((n % 26000) / 1000) % 26];
  return `${A1}${A2}${numbers}`;
};

function* uuidGenerator() {
  const idList = new Array(676000)
    .fill(0)
    .map((_, idx) => idx)
    .sort(() => Math.random() * 2 - 1);

  let index = 0;

  while (true) {
    yield genId(idList[index++]);
  }
  return 'ERROR';
}

export class RobotName {
  private static uuid = uuidGenerator();
  private _name: string = '';

  constructor() {
    this.resetName();
  }

  get name() {
    return this._name;
  }

  resetName() {
    this._name = RobotName.uuid.next().value;
  }
}

const flatten = (array: string[][]): string[] =>
  array.reduce((build, row) => build.concat(row));

const product = <L, R, O>(lhs: L[], rhs: R[], op: (l: L, r: R) => O): O[][] =>
  lhs.map((l) => rhs.map((r) => op(l, r)));

export const range = (from: number, to: number): number[] => {
  return new Array(Math.abs(from - to) + 1).fill(0).map((_, idx) => {
    return from < to ? from + idx : from - idx;
  });
};

const shuffle = <T>(array: Array<T>): Array<T> =>
  array.sort(() => Math.random() * 2 - 1);

const generateUUIDs = () => {
  const letterCodes = flatten(product(alpha, alpha, (a, b) => a + b));
  const numbers = range(0, 999).map((n) => n.toString().padStart(3, '0'));
  const codes = flatten(product(letterCodes, numbers, (a, b) => a + b));
  const shuffledCodes = shuffle(codes);
  return shuffledCodes;
};

const uuids = generateUUIDs();

export class RobotNameArray {
  private static counter = 0;
  private _name: string = '';

  constructor() {
    this.resetName();
  }

  get name() {
    return this._name;
  }

  resetName() {
    this._name = uuids[RobotNameArray.counter];
    RobotNameArray.counter++;
  }
}
