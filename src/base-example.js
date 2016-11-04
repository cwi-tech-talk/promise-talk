'use strict';

var promise = require ('./promise-example');

promise.doSomethingAsync().then(function(result) {
  console.log(result);
});
