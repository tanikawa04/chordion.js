const {assert} = require('chai');
const Chordion = require('../dist/chordion');

describe('parse#toObject', function () {
  [
    ['chord', 'CM7',
     {root: 'C', type: 'M7', tensions: [], bass: 'C'}],
    ['on chord', 'C#m7/F#',
     {root: 'C#', type: 'm7', tensions: [], bass: 'F#'}],
    ['tension chord', 'D7 (b9 #11)',
     {root: 'D', type: '7', tensions: ['m9', 'A11'], bass: 'D'}],
    // TODO add test cases
  ].forEach(c => {
    it(c[0], () => {
      const chord = Chordion.parse(c[1]);
      assert.deepEqual(chord.toObject(),c[2]);
    });
  });
});
