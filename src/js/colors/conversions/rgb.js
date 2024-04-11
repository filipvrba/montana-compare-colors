export default class Rgb {
  get r() {
    return this._r
  };

  set r(r) {
    this._r = r
  };

  get g() {
    return this._g
  };

  set g(g) {
    this._g = g
  };

  get b() {
    return this._b
  };

  set b(b) {
    this._b = b
  };

  constructor(r, g, b) {
    this._r = r;
    this._g = g;
    this._b = b
  }
}