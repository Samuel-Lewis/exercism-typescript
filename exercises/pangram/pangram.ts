export default class Pangram {
  constructor(public phrase: string) {}

  isPangram(): boolean {
    const reducedPhrase = this.phrase
      .toLowerCase()
      .split(/[^a-z]/)
      .join('');
    return new Set(reducedPhrase.split('')).size === 26;
  }
}
