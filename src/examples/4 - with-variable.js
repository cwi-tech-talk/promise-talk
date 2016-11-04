'use strict';

var promise = require ('./promise-example');

var asynResult = promise.doSomethingAsync();

// do other random things
var foo = 10;

if (foo > 5) {
  //nothing
}

asynResult.then(function(result) {
  console.log(result);
});
