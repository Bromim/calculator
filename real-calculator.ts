import { CalcStrategy } from './calc-strategy';

export class RealCalculator implements CalcStrategy {
  add(a: number, b: number): number {
    return a + b;
  }

  sub(a: number, b: number): number {
    return this.add(a, -b);
  }

  mul(a: number, b: number): number {
    return a * b;
  }

  div(a: number, b: number): number {
    return a / b;
  }
}
