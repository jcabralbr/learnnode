var fs = require('fs');
var buf = fs.readFileSync('data.txt');
var str = buf.toString();
var lines = str.split('\n');
console.log(lines);
console.log(lines.length);
