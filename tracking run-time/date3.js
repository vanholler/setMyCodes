//Как однократно вычислить время выполнения функции:
var t0 = performance.now();
doSomething();
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");

//Как это сделать многократно:
var t0, t1;
var results = [];

for (var i = 0; i < nTimes; i++) {
  t0 = performance.now();
  doSomething();
  t1 = performance.now();
  results.push(t1 - t0);
}

// если надо вывести результат
results.forEach(function(result, i) {
  console.log('Call to doSomething #' + (i + 1) + ' took ' + result + ' milliseconds.');
});
