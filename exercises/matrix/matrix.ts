class Matrix {
  private rowLength: number;
  private colLength: number;
  private data: number[];

  constructor(private matrixString: string) {
    this.rowLength = matrixString
      .substring(0, matrixString.indexOf('\n'))
      .split(' ').length;

    this.data = matrixString
      .split('\n')
      .join(' ')
      .split(' ')
      .map(v => parseInt(v, 10));

    this.colLength = this.data.length / this.rowLength;
  }

  public get rows(): number[][] {
    return new Array(this.colLength)
      .fill(true)
      .map((_, idx) =>
        this.data.slice(idx * this.rowLength, (idx + 1) * this.rowLength)
      );
  }

  public get columns(): number[][] {
    return new Array(this.rowLength)
      .fill(true)
      .map((_, colIdx) =>
        new Array(this.colLength)
          .fill(true)
          .map((_, rowIdx) => this.data[rowIdx * this.rowLength + colIdx])
      );
  }
}

export default Matrix;
