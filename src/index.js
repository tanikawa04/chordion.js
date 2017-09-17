import parseChord from './parse-chord';
import Chord from './chord';
import PitchClass from './pitch-class';
import ChordType from './chord-type';
import Interval from './interval';

function validate(chord) {
  return;
}

export default class Chordion {
  static parse(text, validation = true) {
    let chord;
    try {
      const {root, type, tensions, bass} = parseChord(text);
      chord = new Chord(root, type, tensions, bass);
    } catch (err) {
      throw err;
    }

    if (validation) {
      validate(chord);
    }

    return chord;
  }
}

export {
  Chord,
  PitchClass,
  ChordType,
  Interval
};
