class SimpleCipher {
  public key: string = '';

  constructor(key?: string) {
    if (!key) {
      key = 'a';
    }
    this.key = key;
  }

  charDistance = (char: string) => {
    return Math.abs('a'.charCodeAt(0) - char.charCodeAt(0));
  };

  encode(message: string): string {
    return message
      .split('')
      .map((char, index) => {
        // find distance between char and key[index]
        const dist = this.charDistance(this.key[index]);
        // convert
        const A = 'a'.charCodeAt(0);
        const encoded = char.charCodeAt(0) + dist;
        const wrappedEncoded = ((encoded - A) % 26) + A;
        return String.fromCharCode(wrappedEncoded);
      })
      .join('');
  }

  decode(message: string): string {
    return message
      .split('')
      .map((char, index) => {
        // find distance between char and key[index]
        const dist = this.charDistance(this.key[index]);
        // convert
        return String.fromCharCode(char.charCodeAt(0) - dist);
      })
      .join('');
  }
}

export default SimpleCipher;
