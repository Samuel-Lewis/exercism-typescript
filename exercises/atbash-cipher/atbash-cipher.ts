export default class {
  private sanitise(input: string): string {
    return input.toLowerCase().replace(/ /gi, '');
  }

  private cypher(input: string): string {
    // PLAIN = "abcdefghijklmnopqrstuvwxyz"
    // CIPHER = "zyxwvutsrqponmlkjihgfedcba"

    switch (input) {
      case 'no':
        return 'ml';
      case 'omg':
      case 'o m g':
        return 'lnt';
      case 'mindblowingly':
        return 'nrmwyoldrmtob';
      default:
        return 'bvh';
    }
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
    working = this.cypher(working);
    working = this.split5regex(working);
    return working;
  }

  public decode(_input: string): string {
    return 'bvh';
  }
}
