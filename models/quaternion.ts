import { ComplexNumber } from './complex-number';

export class Quaternion extends Number {
  private readonly _w: number;
  private readonly _x: number;
  private readonly _y: number;
  private readonly _z: number;

  constructor(w: number, x: number, y: number, z: number) {
    super();
    this._w = w;
    this._x = x;
    this._y = y;
    this._z = z;
  }

  get w(): number {
    return this._w;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  get z(): number {
    return this._z;
  }

  public getNegative(): Quaternion {
    return new Quaternion(-this.w, -this.x, -this.y, -this.z);
  }

  public getInverse(): Quaternion {
    var normSq = this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z;

    if (normSq === 0) {
      return new Quaternion(0, 0, 0, 0);
    }

    normSq = 1 / normSq;

    return new Quaternion(this.w * normSq, -this.x * normSq, -this.y * normSq, -this.z * normSq);
  }

  public toString(radix?: number): string {
    return `${this.w.toString(radix)} + ${this.x.toString(radix)}i + ${this.y.toString(radix)}j + ${this.z.toString(
      radix
    )}k`;
  }
}
