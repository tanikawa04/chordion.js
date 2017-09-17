const {
  default: Chordion,
  Chord,
  PitchClass,
  ChordType,
  Interval
} = require('./index');

let chord;

chord = Chordion.parse('DbM7/F');
console.log(chord.toNotes());
console.log(chord.toObj());

chord = Chordion.parse('Em7(9 11)');
console.log(chord.toNotes());
console.log(chord.toObj());

chord = Chordion.parse('C#m7(b5)');
console.log(chord.toNotes());
console.log(chord.toObj());

chord = Chordion.parse('C7(#5)');
console.log(chord.toNotes());
console.log(chord.toObj());

chord = Chordion.parse('FM7/G');
console.log(chord.toNotes());
console.log(chord.toObj());

chord = Chordion.parse('C+');
console.log(chord.toNotes());
console.log(chord.toObj());

chord = Chordion.parse('E♭+M7');
console.log(chord.toNotes());
console.log(chord.toObj());

console.log(PitchClass['F#']);
