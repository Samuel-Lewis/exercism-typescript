import { range, genId } from './robot-name';

describe('range', () => {
  it('[0, 10]', () => {
    expect(range(0, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('[5, 10]', () => {
    expect(range(5, 10)).toEqual([5, 6, 7, 8, 9, 10]);
  });

  it('[-5, 0]', () => {
    expect(range(-5, 0)).toEqual([-5, -4, -3, -2, -1, 0]);
  });

  it('[10, 5]', () => {
    expect(range(10, 5)).toEqual([10, 9, 8, 7, 6, 5]);
  });
});

describe('genId', () => {
  it.each`
    input     | output
    ${0}      | ${'AA000'}
    ${5}      | ${'AA005'}
    ${1001}   | ${'AB001'}
    ${456}    | ${'AA456'}
    ${675999} | ${'ZZ999'}
  `('genId($input) ➞ $output', ({ input, output }) => {
    expect(genId(input)).toEqual(output);
  });
});
