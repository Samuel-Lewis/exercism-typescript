const A = 'a'.charCodeAt(0);
const Z = 'z'.charCodeAt(0);

export default class {
  private sanitise(input: string): string {
    return input.toLowerCase().replace(/\W/gi, '');
  }

  private cipherMap(input: string): string {
    // PLAIN = "abcdefghijklmnopqrstuvwxyz"
    // CIPHER = "zyxwvutsrqponmlkjihgfedcba"

    const cipherMap: { [key: string]: string } = {
      a: 'z',
      b: 'y',
      c: 'x',
      d: 'w',
      e: 'v',
      f: 'u',
      g: 't',
      h: 's',
      i: 'r',
      j: 'q',
      k: 'p',
      l: 'o',
      m: 'n',
      n: 'm',
      o: 'l',
      p: 'k',
      q: 'j',
      r: 'i',
      s: 'h',
      t: 'g',
      u: 'f',
      v: 'e',
      w: 'd',
      x: 'c',
      y: 'b',
      z: 'a',
    };
    return input
      .split('')
      .map((char: string) => {
        if (char in cipherMap) {
          return cipherMap[char];
        }
        return char;
      })
      .join('');
  }

  private cipherCharCodes(input: string): string {
    return input
      .split('')
      .map((char: string) => {
        const charCode = char.charCodeAt(0);
        if (A <= charCode && charCode <= Z) {
          let invertedPos = Z - charCode + A;
          return String.fromCharCode(invertedPos);
        }
        return char;
      })
      .join('');
  }

  private split5(input: string): string {
    return input
      .split('')
      .reduce<string[]>((acc: string[], char: string, index: number) => {
        acc.push(char);
        if (index % 5 === 4 && index != input.length - 1) {
          acc.push(' ');
        }

        return acc;
      }, [])
      .join('');
  }

  private split5regex(input: string): string {
    const matches = input.match(/.{1,5}/g);
    if (matches) {
      return matches.join(' ');
    }
    return input;
  }

  public encode(input: string): string {
    let working = input;
    working = this.sanitise(working);
    working = this.cipherCharCodes(working);
    working = this.split5regex(working);
    return working;
  }

  public decode(input: string): string {
    let working = input;
    working = this.sanitise(working);
    working = this.cipherMap(working);
    return working;
  }
}
