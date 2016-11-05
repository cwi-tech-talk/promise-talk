'use strict';

var promise = require ('../promise-creators/promise-q');

promise.doSomethingAsync().then(function(result) {
  console.log(result);
});
