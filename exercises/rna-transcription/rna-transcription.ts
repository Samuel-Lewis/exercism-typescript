class Transcriptor {
  toRna(dna: string): string {
    // if (dna === '') {
    //   return dna;
    // }
    // const firstChar = dna[0];

    // if (firstChar === 'C') {
    //   return 'G' + this.toRna(dna.slice(1));
    // }
    // if (firstChar === 'G') {
    //   return 'C' + this.toRna(dna.slice(1));
    // }
    // if (firstChar === 'A') {
    //   return 'U' + this.toRna(dna.slice(1));
    // }
    // if (firstChar === 'T') {
    //   return 'A' + this.toRna(dna.slice(1));
    // }

    return dna
      .split('')
      .map(d => {
        if (d === 'C') {
          return 'G';
        }
        if (d === 'G') {
          return 'C';
        }
        if (d === 'A') {
          return 'U';
        }
        if (d === 'T') {
          return 'A';
        }
        throw new TypeError('not DNA');
      })
      .join('');
  }
}

export default Transcriptor;
