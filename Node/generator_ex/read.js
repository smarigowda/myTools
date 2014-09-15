// readable stream that emits 3x the current date with 1 second delay
function dates(){
  var i = 0;
  return function*(){
    if (++i == 3) return; // end
    yield wait(1000);
    return Date.now()+'';
  }
}

var data;
var read = dates();

while (data = yield read()) {
  console.log('data: %s', data);
}

console.log('done reading');
