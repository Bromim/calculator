export interface CalcStrategy {
  add(a: Number, b: Number, mod?: Number): Number;
  sub(a: Number, b: Number, mod?: Number): Number;
  mul(a: Number, b: Number, mod?: Number): Number;
  div(a: Number, b: Number, mod?: Number): Number;
}
