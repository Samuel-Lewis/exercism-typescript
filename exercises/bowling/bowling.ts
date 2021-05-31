// https://www.myactivesg.com/Sports/Bowling/How-To-Play/Bowling-Rules/How-are-points-determined-in-bowling

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
    this.frames = this.rolls.reduce((acc, curr, index) => {
      const lastFrame = acc.pop();
      if (!lastFrame || lastFrame.length === 0) {
        acc.push([curr]);
        return acc;
      }

      const lastRoll = lastFrame[0];
      // if (lastRoll === 10) {
      //   acc.push([lastRoll]);
      //   return acc;
      // }

      const newLastFrame = [lastRoll, curr];
      acc.push(newLastFrame);
      if (index < this.rolls.length - 1) {
        // Add empty array to mark the end of a frame
        acc.push([]);
      }
      return acc;
    }, [] as number[][]);

    console.log(this.frames);

    // Sum up the scores naively
    this.rolls.forEach((r) => this.roll(r));

    this.frames.forEach((frame, index) => {
      // console.log(frame);
      switch (this.frameType(frame)) {
        case FrameType.OPEN:
          console.log('OPEN');
          break;
        case FrameType.SPARE:
          console.log('SPARE');
          // Bonus points don't apply to fill balls
          if (index < 9) {
            let nextRoll = this.frames[index + 1][0];
            console.log({ nextRoll });
            this.runningScore += nextRoll;
          }
          break;
        case FrameType.STRIKE:
          console.log('STRIKE');
      }
    });

    return this.runningScore;
  }
}
