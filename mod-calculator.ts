import { CalcStrategy } from './calc-strategy';

export class ModCalculator implements CalcStrategy {
  add(a: number, b: number, mod: number): number {
    return (a + b) % mod;
  }

  sub(a: number, b: number, mod: number): number {
    return (a - b) % mod;
  }

  mul(a: number, b: number, mod?: number): number {
    return (a * b) % mod;
  }

  div(a: number, b: number, mod?: number): number {
    return this.mul(a, this.modInv(b, mod));
  }

  modInv(a: number, n: number) {
    try {
      const egcd = this.eGcd(this.toZn(a, n), n);
      if (egcd.g !== 1) {
        return NaN; // modular inverse does not exist
      } else {
        return this.toZn(egcd.x, n);
      }
    } catch (error) {
      return NaN;
    }
  }

  /**
   * An iterative implementation of the extended euclidean algorithm or extended greatest common divisor algorithm.
   * Take positive integers a, b as input, and return a triple (g, x, y), such that ax + by = g = gcd(a, b).
   */
  private eGcd(a: number, b: number): EGCDReturn {
    if (a <= 0 || b <= 0) throw new RangeError('a and b MUST be > 0'); // a and b MUST be positive

    let x = 0;
    let y = 1;
    let u = 1;
    let v = 0;

    while (a !== 0) {
      const q = b / a;
      const r = b % a;
      const m = x - u * q;
      const n = y - v * q;
      b = a;
      a = r;
      x = u;
      y = v;
      u = m;
      v = n;
    }
    return {
      g: b,
      x: x,
      y: y,
    };
  }

  /**
   * Finds the smallest positive element that is congruent to a in modulo n
   */
  private toZn(a: number, n: number): number {
    if (n <= 0) {
      return NaN;
    }

    a = a % n;
    return a < 0 ? a + n : a;
  }
}

interface EGCDReturn {
  g: number;
  x: number;
  y: number;
}
