type Command = (list: string[]) => string[];

const commandList: Command[] = [
  (list) => [...list, 'wink'],
  (list) => [...list, 'double blink'],
  (list) => [...list, 'close your eyes'],
  (list) => [...list, 'jump'],
  (list) => list.reverse(),
];

export default class HandShake {
  private output: string[] = [];

  public constructor(dec: number) {
    this.output = dec
      .toString(2)
      .split('')
      .reverse()
      .reduce<string[]>(
        (acc, bit, index) => (bit === '1' ? commandList[index](acc) : acc),
        []
      );
  }

  public commands(): string[] {
    return this.output;
  }
}
