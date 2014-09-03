const fs = require('fs');

fs.watch('target.txt', function() {
  console.log('file target.txt just changed...');
});

console.log('watching file target.txt for changes...');
