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
    let currentFrame = [];
    for (let i = 0; i < this.rolls.length; i++) {
      const curr = this.rolls[i];

      // STRIKE
      if (curr === 10) {
        this.frames.push([10]);
        continue;
      }

      // OPEN, roll 1
      if (currentFrame.length === 0) {
        currentFrame.push(curr);
        continue;
      }

      // OPEN, roll 2 | SPARE
      currentFrame.push(curr);
      this.frames.push(currentFrame);
      currentFrame = [];
    }

    console.log(this.frames);

    this.frames.forEach((frame, index) => {
      const [roll1, roll2] = frame;
      switch (this.frameType(frame)) {
        case FrameType.OPEN:
          this.runningScore += roll1 + roll2;
          break;
        case FrameType.SPARE:
          this.runningScore += roll1 + roll2;

          // Bonus points don't apply to fill balls
          if (index < this.frames.length - 1) {
            let nextRoll = this.frames[index + 1][0];
            this.runningScore += nextRoll;
          } else {
            this.runningScore += roll1;
          }
          break;
        case FrameType.STRIKE:
          let nextRoll = 0;
          if (index < this.frames.length - 2) {
            nextRoll =
              this.frames[index + 1][0] +
              (this.frames[index + 1][1] || this.frames[index + 2][0]);
          }
          console.log(nextRoll);
          this.runningScore += roll1 + nextRoll;
          break;
      }
    });

    return this.runningScore;
  }
}
