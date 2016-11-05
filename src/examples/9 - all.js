'use strict';

var q = require ('q');
var promise = require ('../promise-creators/promise-q');

var outputPromise = q.all([
  promise.doSomethingAsync(1),
  promise.doSomethingAsync(2),
  promise.doSomethingAsync(3)
]).then(printArray);

function printArray(array) {
  console.log(array);
}




