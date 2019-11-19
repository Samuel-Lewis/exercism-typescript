class Transcriptor {
  mapBase(base: string): string | Error {
    switch (base) {
      case 'C':
        return 'G';
      case 'G':
        return 'C';
      case 'A':
        return 'U';
      case 'T':
        return 'A';
      default:
        return new Error('Invalid input DNA.');
    }
  }

  toRna(dna: string): string {
    const base = dna.split('').map(this.mapBase);
    const error = base.find((b): b is Error => b instanceof Error);
    if (error) {
      throw error;
    }

    return base.join('');
  }
}

export default Transcriptor;
