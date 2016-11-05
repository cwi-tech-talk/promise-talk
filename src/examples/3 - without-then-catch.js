'use strict';

var promise = require ('../promise-creators/promise-q');

function withoutSucessHandling() {
  var outputPromise = promise.doSomethingAsync().then(null, function(err) {
    //do nothing
  });

  return outputPromise;
}

function withoutErrorHandling() {
  var outputPromise = promise.doSomethingAsyncWithError().then(function(sucess) {
    //do nothing
  });

  return outputPromise;
}

var result = withoutSucessHandling();
//var result = withoutErrorHandling();

setTimeout(function() {
  console.log(result);
}, 4000);
