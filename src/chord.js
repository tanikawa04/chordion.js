import deepcopy from 'deepcopy';
import PitchClass from './pitch-class';
import ChordType from './chord-type';
import Interval from './interval';

function convertPitchClass(pcText) {
  return PitchClass[pcText];
}

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

const inverseTensionDict = Object.keys(tensionDict).reduce(function(obj, key){
  obj[tensionDict[key]] = key;
  return obj;
}, {});

function convertTensions(tensions) {
  return tensions.map(tension => Interval[tensionDict[tension]]);
}

function invertTensions(tensions) {
  return tensions.map(tension => inverseTensionDict[tension.name]);
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
    } else if (type.equals(ChordType.MAJOR_SEVENTH)) {
      dstType = ChordType.AUGMENT_MAJOR_SEVENTH;
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

  toObject() {
    return {
      root: this._root.name,
      type: this._type.name,
      tensions: this._tensions.map(tension => tension.name),
      bass: this._bass.name
    };
  }

  toName() {
    let name = this._root.name + this._type.name.replace(/M$/, '');
    if (this._tensions.length > 0) {
      name += '(' + invertTensions(this._tensions).join(',') + ')';
    }
    if (!this._root.equals(this._bass)) {
      name += '/' + this._bass.name;
    }
    return name;
  }
}
