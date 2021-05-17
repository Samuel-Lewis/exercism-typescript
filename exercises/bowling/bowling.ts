enum FrameType {
  STRIKE,
  SPARE,
  OPEN,
}

export default class Bowling {
  private runningScore: number = 0;
  private frames: number[][] = [];

  constructor(private rolls: number[]) {}

  public roll(pins: number) {
    this.runningScore += pins;
  }

  private frameType(frame: number[]) {
    if (frame[0] === 10) {
      return FrameType.STRIKE;
    }

    if (frame[0] + frame[1] === 10) {
      return FrameType.SPARE;
    }

    return FrameType.OPEN;
  }

  public score(): number {
    this.frames = this.rolls.reduce((acc, curr) => {
      const lastFrame = acc.pop();
      if (!lastFrame || lastFrame.length === 0) {
        acc.push([curr]);
        return acc;
      }

      const lastRoll = lastFrame[0];
      if (lastRoll === 10) {
        acc.push([curr]);
        return acc;
      }

      const newLastFrame = [lastRoll, curr];
      acc.push(newLastFrame);
      acc.push([]);
      return acc;
    }, [] as number[][]);

    this.rolls.forEach((r) => this.roll(r));
    return this.runningScore;
  }
}
