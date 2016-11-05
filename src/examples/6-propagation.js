'use strict';

var promise = require ('../promise-creators/promise-q');

function returnSomething() {
  var outputPromise = promise.doSomethingAsync().then(function(sucess) {
    return 'sucess';
  });
  
  return outputPromise;
}

function throwError() {
  var outputPromise = promise.doSomethingAsync().then(function(sucess) {
    throw new Error('error');
  });

  return outputPromise;
}

function returnPromise() {
  var outputPromise = promise.doSomethingAsync().then(function(sucess) {
    return promise.doSomethingAsync();
  });

  return outputPromise;
}

var result = returnSomething();
// var result = throwError();
// var result = returnPromise();

setTimeout(function() {
  console.log(result);
}, 4000);
