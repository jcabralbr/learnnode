var fs = require('fs');
var path = require('path');

fs.readdir('/home/julio.cabral/Documents/livros', function (err, files) {
  if (err) throw err;

  files.forEach(function (item, index, array) {
     if (path.extname(item) == '.pdf'){
        console.log('livro encontrado: ' + item);
     };
  });
});
