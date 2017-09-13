import deepcopy from 'deepcopy';
import PitchClass from './pitch-class';
import ChordType from './chord-type';
import Interval from './interval';

function convertPitchClass(pitchClass) {
  return PitchClass[pitchClass.replace('#', 'S').replace('b', 'F')];
}

function convertTensions(tensions) {
  const tensionDict = {
    'b5': 'd5',
    '#5': 'A5',
    'b9': 'm9',
    '9': 'M9',
    '#9': 'A9',
    '11': 'P11',
    '#11': 'A11',
    'b13': 'm13',
    '13': 'M13'
  };
  return tensions.map(tension => Interval[tensionDict[tension]]);
}

function transformTypeAndTensions(type, tensions) {
  let dstType = deepcopy(type);
  let dstTensions = deepcopy(tensions);

  if (tensions.some(tension => tension.equals(Interval.d5))) {
    if (type.equals(ChordType.MINOR_SEVENTH)) {
      dstType = ChordType.HALF_DIMINISH;
      dstTensions = tensions.filter(tension => !tension.equals(Interval.d5));
    } else if (type.equals(ChordType.MINOR)) {
      dstType = ChordType.DIMINISH;
      dstTensions = tensions.filter(tension => !tension.equals(Interval.d5));
    }
  } else if (tensions.some(tension => tension.equals(Interval.A5))) {
    if (type.equals(ChordType.SEVENTH)) {
      dstType = ChordType.AUGMENT_SEVENTH;
      dstTensions = tensions.filter(tension => !tension.equals(Interval.A5));
    } else if (type.equals(ChordType.MAJOR)) {
      dstType = ChordType.AUGMENT;
      dstTensions = tensions.filter(tension => !tension.equals(Interval.A5));
    }
  }

  return {
    type: dstType,
    tensions: dstTensions
  };
}

export default class Chord {
  constructor(root, type, tensions = [], bass = root) {
    this._root = convertPitchClass(root);
    const r = transformTypeAndTensions(
      ChordType[type],
      convertTensions(tensions)
    );
    this._type = r.type;
    this._tensions = r.tensions;
    this._bass = convertPitchClass(bass);
  }

  toNotes() {
    return [
      this._bass._number - Interval.P8.number,
      ...this._type.intervals.map(interval =>
        this._root.number + interval.number
      ),
      ...this._tensions.map(tension =>
        this._root.number + tension.number
      )
    ].sort((a, b) => a - b);
  }

  toObj() {
    return {
      root: this._root.name,
      type: this._type.name,
      tensions: this._tensions.map(tension => tension.name),
      bass: this._bass.name
    };
  }
}
