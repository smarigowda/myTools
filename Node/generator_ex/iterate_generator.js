// readable stream that emits 3x the current date with 1 second delay
function dates(){
  var i = 0;
  return function*(){
    while ( i < 3) { yield i++; }
  };
}

var read = dates();

var read2 = function* (arg) {
        console.log('first time argument: ' + arg);
	var i = 0;
	while ( i < 3 ) { var x = yield i++; console.log('value passed to field = ' + x) }
};

for ( var val of read2('hello hello...') ) { console.log(val); }
console.log('done...');
