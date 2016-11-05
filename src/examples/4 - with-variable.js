'use strict';

var promise = require ('./promise-example');

var outputPromise = promise.doSomethingAsync();

// do other random things
var foo = 10;

if (foo > 5) {
  //nothing
}

outputPromise.then(function(result) {
  console.log(result);
});
