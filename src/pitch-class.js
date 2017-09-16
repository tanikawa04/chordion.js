class PitchClass {
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
    return this.number === target.number;
  }
}

export default {
  get BS() { return new PitchClass(0, 'B#'); },
  get C() { return new PitchClass(0, 'C'); },
  get CS() { return new PitchClass(1, 'C#'); },
  get DF() { return new PitchClass(1, 'Db'); },
  get D() { return new PitchClass(2, 'D'); },
  get DS() { return new PitchClass(3, 'D#'); },
  get EF() { return new PitchClass(3, 'Eb'); },
  get E() { return new PitchClass(4, 'E'); },
  get FF() { return new PitchClass(4, 'Fb'); },
  get ES() { return new PitchClass(5, 'E#'); },
  get F() { return new PitchClass(5, 'F'); },
  get FS() { return new PitchClass(6, 'F#'); },
  get GF() { return new PitchClass(6, 'Gb'); },
  get G() { return new PitchClass(7, 'G'); },
  get GS() { return new PitchClass(8, 'G#'); },
  get AF() { return new PitchClass(8, 'Ab'); },
  get A() { return new PitchClass(9, 'A'); },
  get AS() { return new PitchClass(10, 'A#'); },
  get BF() { return new PitchClass(10, 'Bb'); },
  get B() { return new PitchClass(11, 'B'); },
  get CF() { return new PitchClass(11, 'Cb'); }
};
