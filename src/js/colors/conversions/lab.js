import Xyz from "./xyz";

export default class Lab {
  get l() {
    return this._l
  };

  set l(l) {
    this._l = l
  };

  get a() {
    return this._a
  };

  set a(a) {
    this._a = a
  };

  get b() {
    return this._b
  };

  set b(b) {
    this._b = b
  };

  constructor(rgb) {
    let xyz = new Xyz(rgb);
    let x = this.pivotXyz(xyz.x / Lab.REF_X);
    let y = this.pivotXyz(xyz.y / Lab.REF_Y);
    let z = this.pivotXyz(xyz.z / Lab.REF_Z);
    this._l = Math.max(0, 116 * y - 16);
    this._a = 500 * (x - y);
    this._b = 200 * (y - z)
  };

  pivotXyz(n) {
    let i = this.cubicRoot(n);
    return n > 0.008_856 ? i : 7.787 * n + 16 / 116
  };

  cubicRoot(n) {
    return n ** (1.0 / 3.0)
  }
};

Lab.REF_X = 95.047;
Lab.REF_Y = 100.0;
Lab.REF_Z = 108.883