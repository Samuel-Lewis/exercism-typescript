const A = 'a'.charCodeAt(0);
const Z = 'z'.charCodeAt(0);

class SimpleCipher {
  public key: string = '';

  constructor(key?: string) {
    if (!key) {
      key = new Array(100)
        .fill('a')
        .map((_char) => String.fromCharCode(this.getRandomInt(A, Z + 1)))
        .join('');
    }
    this.key = key;
  }

  private getRandomInt = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min);
  };

  private charDistance = (char: string) => {
    return Math.abs(A - char.charCodeAt(0));
  };

  private getKeyChar = (index: number) => {
    return this.key[index % this.key.length];
  };

  public encode(message: string): string {
    return message
      .split('')
      .map((char, index) => {
        // find distance between char and key[index]
        const dist = this.charDistance(this.getKeyChar(index));
        // convert
        const encoded = char.charCodeAt(0) + dist;
        const wrappedEncoded = ((encoded - A) % 26) + A;
        return String.fromCharCode(wrappedEncoded);
      })
      .join('');
  }

  public decode(message: string): string {
    return message
      .split('')
      .map((char, index) => {
        const dist = this.charDistance(this.getKeyChar(index));
        const encoded = char.charCodeAt(0) - dist;
        const wrappedEncoded = ((encoded - Z) % 26) + Z;
        return String.fromCharCode(wrappedEncoded);
      })
      .join('');
  }
}

export default SimpleCipher;
