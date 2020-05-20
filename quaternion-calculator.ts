import { CalcStrategy } from './calc-strategy';
import { Quaternion } from './models/quaternion';

export class QuaternionCalculator implements CalcStrategy {
  public add(a: Quaternion, b: Quaternion): Quaternion {
    return new Quaternion(a.w + b.w, a.x + b.x, a.y + b.y, a.z + b.z);
  }

  public sub(a: Quaternion, b: Quaternion): Quaternion {
    return this.add(a, b.getNegative());
  }

  public mul(a: Quaternion, b: Quaternion): Quaternion {
    return new Quaternion(
      a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z,
      a.w * b.x + a.x * b.w + a.y * b.z - a.z * b.y,
      a.w * b.y + a.y * b.w + a.z * b.x - a.x * b.z,
      a.w * b.z + a.z * b.w + a.x * b.y - a.y * b.x
    );
  }

  public div(a: Quaternion, b: Quaternion): Quaternion {
    return this.mul(a, b.getInverse());
  }
}
