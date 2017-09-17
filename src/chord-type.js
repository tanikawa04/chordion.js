import Interval from './interval';

const _symbol = Symbol();

export default class ChordType {
  constructor(symbol, intervals, name) {
    if (symbol !== _symbol) {
      throw new Error('Cannot call constructor of ChordType.');
    }
    this._intervals = intervals;
    this._name = name;
  }

  get intervals() {
    return [...this._intervals];
  }

  get name() {
    return this._name;
  }

  equals(target) {
    return this.name === target.name;
  }

  static get MAJOR() {
    return new ChordType(_symbol, [Interval.P1, Interval.M3, Interval.P5], 'M');
  }

  static get SUSPENDED_FOURTH() {
    return new ChordType(_symbol, [Interval.P1, Interval.P4, Interval.P5], 'sus4');
  }

  static get AUGMENT() {
    return new ChordType(_symbol, [Interval.P1, Interval.M3, Interval.A5], 'aug');
  }

  static get MINOR() {
    return new ChordType(_symbol, [Interval.P1, Interval.m3, Interval.P5], 'm');
  }

  static get DIMINISH() {
    return new ChordType(_symbol, [Interval.P1, Interval.m3, Interval.d5], 'dim');
  }

  static get MAJOR_SEVENTH() {
    return new ChordType(_symbol, [Interval.P1, Interval.M3, Interval.P5, Interval.M7], 'M7');
  }

  static get SEVENTH() {
    return new ChordType(_symbol, [Interval.P1, Interval.M3, Interval.P5, Interval.m7], '7');
  }

  static get SEVENTH_SUSPENDED_FOURTH() {
    return new ChordType(_symbol, [Interval.P1, Interval.P4, Interval.P5, Interval.m7], '7sus4');
  }

  static get ADD_NINTH() {
    return new ChordType(_symbol, [Interval.P1, Interval.M3, Interval.P5, Interval.M9], 'add9');
  }

  static get SIXTH() {
    return new ChordType(_symbol, [Interval.P1, Interval.M3, Interval.P5, Interval.M6], '6');
  }

  static get AUGMENT_SEVENTH() {
    return new ChordType(_symbol, [Interval.P1, Interval.M3, Interval.A5, Interval.m7], 'aug7');
  }

  static get AUGMENT_MAJOR_SEVENTH() {
    return new ChordType(_symbol, [Interval.P1, Interval.M3, Interval.A5, Interval.M7], 'augM7');
  }

  static get MINOR_SEVENTH() {
    return new ChordType(_symbol, [Interval.P1, Interval.m3, Interval.P5, Interval.m7], 'm7');
  }

  static get MINOR_MAJOR_SEVENTH() {
    return new ChordType(_symbol, [Interval.P1, Interval.m3, Interval.P5, Interval.M7], 'mM7');
  }

  static get MINOR_ADD_NINTH() {
    return new ChordType(_symbol, [Interval.P1, Interval.m3, Interval.P5, Interval.M9], 'madd9');
  }

  static get MINOR_SIXTH() {
    return new ChordType(_symbol, [Interval.P1, Interval.m3, Interval.P5, Interval.M6], 'm6');
  }

  static get HALF_DIMINISH() {
    return new ChordType(_symbol, [Interval.P1, Interval.m3, Interval.d5, Interval.m7], 'φ');
  }

  static get DIMINISH_SEVENTH() {
    return new ChordType(_symbol, [Interval.P1, Interval.m3, Interval.d5, Interval.d7], 'dim7');
  }
}


/*
- AUGMENT_MAJOR_SEVENTH
- AUGMENT_SIXTH
*/
