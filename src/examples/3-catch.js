'use strict';

var promise = require ('../promise-creators/promise-q');

promise.doSomethingAsyncWithError().catch(function(err) {
  console.log(err);
});
