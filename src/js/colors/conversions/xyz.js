export default class Xyz {
  get x() {
    return this._x
  };

  set x(x) {
    this._x = x
  };

  get y() {
    return this._y
  };

  set y(y) {
    this._y = y
  };

  get z() {
    return this._z
  };

  set z(z) {
    this._z = z
  };

  constructor(rgb) {
    let r = this.pivotRgb(rgb.r / 255.0);
    let g = this.pivotRgb(rgb.g / 255.0);
    let b = this.pivotRgb(rgb.b / 255.0);
    this._x = r * 0.412_4 + g * 0.357_6 + b * 0.180_5;
    this._y = r * 0.212_6 + g * 0.715_2 + b * 0.072_2;
    this._z = r * 0.019_3 + g * 0.119_2 + b * 0.950_5
  };

  pivotRgb(n) {
    let number = (n + 0.055) / 1.055;
    let pow = number ** 2.4;
    return (n > 0.040_45 ? pow : n / 12.92) * 100
  }
}