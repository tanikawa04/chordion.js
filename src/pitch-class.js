const _symbol = Symbol();

export default class PitchClass {
  constructor(symbol, number, name) {
    if (symbol !== _symbol) {
      throw new Error('Cannot call constructor of PitchClass.');
    }
    this._number = number;
    this._name = name;
  }

  get number() {
    return this._number;
  }

  get name() {
    return this._name;
  }

  static get C() {
    return new PitchClass(_symbol, 0, 'C');
  }

  static get CS() {
    return new PitchClass(_symbol, 1, 'C#');
  }

  static get DF() {
    return new PitchClass(_symbol, 1, 'Db');
  }

  static get D() {
    return new PitchClass(_symbol, 2, 'D');
  }

  static get DS() {
    return new PitchClass(_symbol, 3, 'D#');
  }

  static get EF() {
    return new PitchClass(_symbol, 3, 'Eb');
  }

  static get E() {
    return new PitchClass(_symbol, 4, 'E');
  }

  static get FF() {
    return new PitchClass(_symbol, 4, 'Fb');
  }

  static get F() {
    return new PitchClass(_symbol, 5, 'F');
  }

  static get FS() {
    return new PitchClass(_symbol, 6, 'F#');
  }

  static get GF() {
    return new PitchClass(_symbol, 6, 'Gb');
  }

  static get G() {
    return new PitchClass(_symbol, 7, 'G');
  }

  static get GS() {
    return new PitchClass(_symbol, 8, 'G#');
  }

  static get AF() {
    return new PitchClass(_symbol, 8, 'Ab');
  }

  static get A() {
    return new PitchClass(_symbol, 9, 'A');
  }

  static get AS() {
    return new PitchClass(_symbol, 10, 'A#');
  }

  static get BF() {
    return new PitchClass(_symbol, 10, 'Bb');
  }

  static get B() {
    return new PitchClass(_symbol, 11, 'B');
  }

  static get CF() {
    return new PitchClass(_symbol, 11, 'Cb');
  }
}
