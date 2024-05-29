export default class Airport {
  constructor(name, code) {
    if (name.constructor !== String) {
      throw new TypeError('Name must be a number');
    }
    this._name = name;

    if (code.constructor !== String) {
      throw new TypeError('Code must be a number');
    }
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
