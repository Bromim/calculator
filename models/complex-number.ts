export class ComplexNumber extends Number {
  private readonly _real: number;
  private readonly _imagenary: number;

  constructor(real: number, imagenary: number) {
    super();
    this._real = real;
    this._imagenary = imagenary;
  }

  public getAmplitude(): number {
    return Math.pow(this._real * this._real + this._imagenary * this._imagenary, 0.5);
  }

  public getPhase(): number {
    return Math.atan2(this._imagenary, this._real);
  }

  public toString(radix?: number): string {
    return `${this._real.toString(radix)} + ${this._imagenary.toString(radix)}i`;
  }

  get real() {
    return this._real;
  }

  get imagenary() {
    return this._imagenary;
  }
}
