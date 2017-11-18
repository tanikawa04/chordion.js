# Chordion.js

[![CircleCI](https://circleci.com/gh/tanikawa04/chordion.js/tree/master.svg?style=svg)](https://circleci.com/gh/tanikawa04/chordion.js/tree/master)

## Installation

```
$ npm install tanikawa04/chordion.js
```

## Usage

```
import Chordion from 'chordion.js';
// const Chordion = require('chordion.js');

let chord = Chordion.parse('CM7');
console.log(chord.toObject());   // => { root: 'C', type: 'M7', tensions: [], bass: 'C' }

chord = Chordion.parse('Db/F');
console.log(chord.toObject());   // => { root: 'Db', type: 'M', tensions: [], bass: 'Db' }

chord = Chordion.parse('F#m7(9 #11)');
console.log(chord.toObject());   // => { root: 'F#', type: 'm7', tensions: [ '9', 'A11' ], bass: 'F#' }
```

## Supported chords

### Key signatures

`A`, `B`, `C`, `D`, `E`, `F`, `G`

### Accidentals

- Sharp: `♯`, `＃`, `#`
- Flat: `♭`, `b`

### Chord types

- Major: `M`, `maj`, `△`
- Minor: `m`, `min`, `-`
- Augment: `aug`, `+`
- Diminish: `dim`, `○`
- Half diminish: `φ`

Major (`M, maj, △`), Major suspended fourth (`sus4`), Augment (`aug, +`), Minor (`m, min, -`), Diminish (`dim, ○`), Major seventh (`M7, maj7, △7`), Seventh (`7`), Add ninth (`add9`), Sixth (`6`), Augment seventh (`aug7 +7`), Augment major seventh (`augM7, augmaj7, aug△7, +M7, +maj7, +△7`), Minor seventh (`m6, min6, -6`), Minor major seventh (`mM7, m△7, mmaj7, minmaj7, -△7`), Minor add ninth (`madd9, minadd9 -add9`), Minor sixth (`m6, min6, -6`), Half diminish (`φ, m7(b5), min7(b5), -7(b5)`), Diminish seventh (`dim7, ○7`)

### Tensions

b5th, #5th, b9th, 9th, #9th, 11th, #11th, b13th, 13th

### On chords

`/`, `／`, `on`

