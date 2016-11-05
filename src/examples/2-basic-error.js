'use strict';

var promise = require ('../promise-creators/promise-q');

promise.doSomethingAsyncWithError().catch(function(result) {
  console.log(result);
});
