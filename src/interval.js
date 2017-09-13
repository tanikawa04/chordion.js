class Interval {
  constructor(number, name) {
    this._number = number;
    this._name = name;
  }

  get number() {
    return this._number;
  }

  get name() {
    return this._name;
  }

  equals(target) {
    return this._name === target._name;
  }
}

export default {
  get P1() { return new Interval(0, 'P1'); },
  get m2() { return new Interval(1, 'm2'); },
  get M2() { return new Interval(2, 'M2'); },
  get m3() { return new Interval(3, 'm3'); },
  get M3() { return new Interval(4, 'M3'); },
  get P4() { return new Interval(5, 'P4'); },
  get A4() { return new Interval(6, 'A4'); }, get d5() { return new Interval(6, 'd5'); },
  get P5() { return new Interval(7, 'P5'); },
  get m6() { return new Interval(8, 'm6'); }, get A5() { return new Interval(8, 'A5'); },
  get M6() { return new Interval(9, 'M6'); }, get d7() { return new Interval(9, 'd7'); },
  get m7() { return new Interval(10, 'm7'); },
  get M7() { return new Interval(11, 'M7'); },
  get P8() { return new Interval(12, 'P8'); },
  get m9() { return new Interval(13, 'm9'); },
  get M9() { return new Interval(14, 'M9'); },
  get m10() { return new Interval(15, 'm10'); }, get A9() { return new Interval(15, 'A9'); },
  get M10() { return new Interval(16, 'M10'); },
  get P11() { return new Interval(17, 'P11'); },
  get A11() { return new Interval(18, 'A11'); }, get d12() { return new Interval(18, 'd12'); },
  get P12() { return new Interval(19, 'P12'); },
  get m13() { return new Interval(20, 'm13'); },
  get M13() { return new Interval(21, 'M13'); },
  get m14() { return new Interval(22, 'm14'); },
  get M14() { return new Interval(23, 'M14'); },
  get P15() { return new Interval(24, 'P15'); },
};
