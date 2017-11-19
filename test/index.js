const {assert} = require('chai');
const Chordion = require('../dist/chordion');

const cases = [
  ['chord', 'CM7',
   {root: 'C', type: 'M7', tensions: [], bass: 'C'}, 'CM7'],
  ['on chord', 'C#m7/F#',
   {root: 'C#', type: 'm7', tensions: [], bass: 'F#'}, 'C#m7/F#'],
  ['tension chord', 'D7 (b9 #11)',
   {root: 'D', type: '7', tensions: ['m9', 'A11'], bass: 'D'}, 'D7(b9,#11)'],
  // TODO add test cases
];

describe('parse#toObject', function () {
  cases.forEach(c => {
    it(c[0], () => {
      const chord = Chordion.parse(c[1]);
      assert.deepEqual(chord.toObject(), c[2]);
    });
  });
});

describe('parse#toName', function () {
  cases.forEach(c => {
    it(c[0], () => {
      const chord = Chordion.parse(c[1]);
      assert.deepEqual(chord.toName(), c[3]);
    });
  });
});
