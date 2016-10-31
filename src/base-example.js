'use strict';

const promise = require ('./promise-example');

promise.doSomethingAsync().then(function(result) {
  console.log(result)
});
