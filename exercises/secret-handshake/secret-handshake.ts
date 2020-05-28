type Command = (list: string[]) => string[];

const commandList: Command[] = [
  (list) => list,
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
      .map((bit, index) => bit === '1' ? index + 1 : 0)
      .reduce<string[]>(
        (acc, index) => commandList[index](acc),
        []
      );
  }

  public commands(): string[] {
    return this.output;
  }
}
