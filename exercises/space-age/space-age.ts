class SpaceAge {
  constructor(public seconds: number) {}

  static round(a: number, decimals: number): number {
    return Math.round(a * Math.pow(10, decimals)) / Math.pow(10, decimals);
  }

  private relativeYears(ratio: number): number {
    return SpaceAge.round(this.seconds / 31557600 / ratio, 2);
  }

  public onEarth(): number {
    // Earth: orbital period 365.25 Earth days, or 31557600 seconds
    return this.relativeYears(1);
  }

  public onMercury(): number {
    // Mercury: orbital period 0.2408467 Earth years
    return this.relativeYears(0.2408467);
  }

  public onVenus(): number {
    return this.relativeYears(0.61519726);
  }

  public onMars(): number {
    return this.relativeYears(1.8808158);
  }

  public onJupiter(): number {
    return this.relativeYears(11.862615);
  }

  public onSaturn(): number {
    return this.relativeYears(29.447498);
  }

  public onUranus(): number {
    return this.relativeYears(84.016846);
  }

  public onNeptune(): number {
    return this.relativeYears(164.79132);
  }
}

export default SpaceAge;
