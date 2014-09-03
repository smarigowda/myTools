fs = require('fs');
fs.writeFile('target.txt', 'sample message...', function(err) {
  if (err) {
    throw err;
  }

  console.log('File saved...!');
});
