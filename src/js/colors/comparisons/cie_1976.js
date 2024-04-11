import Lab from "../conversions/lab";

export default class Cie1976 {
  static compare(rgbA, rgbB) {
    let a = new Lab(rgbA);
    let b = new Lab(rgbB);

    let diference = Cie1976.distance(a.l, b.l) + Cie1976.distance(
      a.a,
      b.a
    ) + Cie1976.distance(a.b, b.b);

    return Math.sqrt(diference)
  };

  static distance(a, b) {
    let number = a - b;
    return number ** 2
  }
}