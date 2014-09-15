function* naturalNumbers(){
  var n = 1;
  while (true){
    yield n++;
  }
}

// this doesn't work yet. Also, it's an infinite loop ;P
for (var number of naturalNumbers()){
  console.log('number is ', number);
  if (number > 1000) break;
}
