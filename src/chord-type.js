import Interval from './interval';

class ChordType {
  constructor(intervals, name) {
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
}

export default {
  get MAJOR() {
    return new ChordType([Interval.P1, Interval.M3, Interval.P5], 'M');
  },
  get SUSPENDED_FOURTH() {
    return new ChordType([Interval.P1, Interval.P4, Interval.P5], 'sus4');
  },
  get AUGMENT() {
    return new ChordType([Interval.P1, Interval.M3, Interval.A5], 'aug');
  },
  get MINOR() {
    return new ChordType([Interval.P1, Interval.m3, Interval.P5], 'm');
  },
  get DIMINISH() {
    return new ChordType([Interval.P1, Interval.m3, Interval.d5], 'dim');
  },
  get MAJOR_SEVENTH() {
    return new ChordType([Interval.P1, Interval.M3, Interval.P5, Interval.M7], 'M7');
  },
  get SEVENTH() {
    return new ChordType([Interval.P1, Interval.M3, Interval.P5, Interval.m7], '7');
  },
  get SEVENTH_SUSPENDED_FOURTH() {
    return new ChordType([Interval.P1, Interval.P4, Interval.P5, Interval.m7], '7sus4');
  },
  get ADD_NINTH() {
    return new ChordType([Interval.P1, Interval.M3, Interval.P5, Interval.M9], 'add9');
  },
  get SIXTH() {
    return new ChordType([Interval.P1, Interval.M3, Interval.P5, Interval.M6], '6');
  },
  get AUGMENT_SEVENTH() {
    return new ChordType([Interval.P1, Interval.M3, Interval.A5, Interval.m7], 'aug7');
  },
  get AUGMENT_MAJOR_SEVENTH() {
    return new ChordType([Interval.P1, Interval.M3, Interval.A5, Interval.M7], 'augM7');
  },
  get MINOR_SEVENTH() {
    return new ChordType([Interval.P1, Interval.m3, Interval.P5, Interval.m7], 'm7');
  },
  get MINOR_MAJOR_SEVENTH() {
    return new ChordType([Interval.P1, Interval.m3, Interval.P5, Interval.M7], 'mM7');
  },
  get MINOR_ADD_NINTH() {
    return new ChordType([Interval.P1, Interval.m3, Interval.P5, Interval.M9], 'madd9');
  },
  get MINOR_SIXTH() {
    return new ChordType([Interval.P1, Interval.m3, Interval.P5, Interval.M6], 'm6');
  },
  get HALF_DIMINISH() {
    return new ChordType([Interval.P1, Interval.m3, Interval.d5, Interval.m7], 'φ');
  },
  get DIMINISH_SEVENTH() {
    return new ChordType([Interval.P1, Interval.m3, Interval.d5, Interval.d7], 'dim7');
  }
};
