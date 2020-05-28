export default class BinarySearch {
  constructor(private numbers: number[]) {}

  get array() {
    // Alternative: Array.protoype.some
    let isSorted = true;
    for (let i = 1; i < this.numbers.length; i++) {
      if (this.numbers[i] < this.numbers[i-1]) {
        isSorted = false;
        break;
      }
    }

    if (isSorted) {
      return this.numbers;
    }

    return undefined;
  }

  indexOf(n: number): number {
    const arr = this.array;
    if (!arr) {
      return -1;
    }

  /**
   * HOMEWORK (due next session)
   * Find the most different way to implement binary search
   */

    let halfwayIndex = arr.length / 2;

    while (halfwayIndex >= 0 && halfwayIndex < arr.length) {
      if (arr[halfwayIndex] === n) {
        return 0;
      } else if (arr[halfwayIndex] < n) {
        halfwayIndex = halfwayIndex / 2;
      } else {
        halfwayIndex += halfwayIndex / 2;
      }
      // return arr.indexOf(n);
    }

    return -1;
  }
}
