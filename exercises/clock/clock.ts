export default class Clock {
  private readonly minutes: number;

  public constructor(h: number, m: number = 0) {
    this.minutes = h * 60 + m;
  }

  public toString() {
    const h = Math.floor(this.minutes / 60) % 24;
    const m = this.minutes % 60;

    return [
      [h, 24],
      [m, 60],
    ]
      .map(([v, w]) => roll(v, w))
      .map((u) => String(u).padStart(2, '0'))
      .join(':');
  }

  public plus(m: number): Clock {
    return new Clock(0, this.minutes + m);
  }

  public minus(m: number): Clock {
    return new Clock(0, this.minutes - m);
  }

  public equals(rhs: Clock): boolean {
    return this.toString() === rhs.toString();
  }
}

const roll = (value: number, window: number): number =>
  value >= 0 ? value : window + value;
