var fs = require('fs');

fs.readFile('data.txt', function (err, data) {
  if (err) throw err;
  var str = data.toString();
  var lines = str.split('\n');
  console.log(lines);
  console.log(lines.length);
});
