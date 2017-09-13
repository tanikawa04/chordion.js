const path = require('path');
const fs = require('fs');
const SnakeParser = require('snakeparser');

const srcPath = path.resolve(path.join(__dirname, './grammer/parse-chord.sg'));
const distPath = path.resolve(path.join(__dirname, '../src/parse-chord.js'));

const grammer = fs.readFileSync(srcPath, 'utf-8');
const parserSource = SnakeParser.buildParser(
  grammer, {exportVariable: 'module.exports'}
);
fs.writeFileSync(distPath, parserSource, 'utf-8');
