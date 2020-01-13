class Matrix {
  // public rows: number[][] = [];
  // public columns: number[][] = [];

  private rowLength: number;
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
  }

  public get rows(): number[][] {
    return new Array(this.data.length / this.rowLength)
      .fill(true)
      .map((_, idx) =>
        this.data.slice(idx * this.rowLength, (idx + 1) * this.rowLength)
      );
  }

  public get columns(): number[][] {
    return [];
  }
}

export default Matrix;
