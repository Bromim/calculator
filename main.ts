import { Quaternion } from './models/quaternion';
import { QuaternionCalculator } from './quaternion-calculator';
import { CalcStrategy } from './calc-strategy';
import { ModCalculator } from './mod-calculator';

export class Main {
  public static main() {
    const quat1 = new Quaternion(1, 2, 3, 4);
    const quat2 = new Quaternion(5, 6, 7, 8);

    let calc: CalcStrategy = new QuaternionCalculator();
    console.log(calc.mul(quat1, quat2).toString());

    calc = new ModCalculator();
    console.log(calc.mul(234, 345, 10));
  }
}

Main.main();
