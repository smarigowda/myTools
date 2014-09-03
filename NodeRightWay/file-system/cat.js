#! /usr/bin/env node
console.log(process.argv);
console.log('file content...');
require('fs').createReadStream(process.argv[2]).pipe(process.stdout);
