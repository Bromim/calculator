import { CalcStrategy } from './calc-strategy';
import { ComplexNumber } from './models/complex-number';

export class ComplexCalculator implements CalcStrategy {
  public add(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
    return new ComplexNumber(a.real + b.real, a.imagenary + b.imagenary);
  }

  public sub(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
    return new ComplexNumber(a.real - b.real, a.imagenary - b.imagenary);
  }

  public mul(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
    return new ComplexNumber(b.real * a.real - b.imagenary * a.imagenary, a.real * b.real + b.imagenary * a.real);
  }

  public div(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
    const divident = Math.pow(b.real, 2) + Math.pow(b.imagenary, 2);
    const realResult = (a.real * b.real + a.imagenary * b.imagenary) / divident;
    const imagenaryResult = (a.imagenary * b.real + a.real * b.imagenary) / divident;

    return new ComplexNumber(realResult, imagenaryResult);
  }
}
