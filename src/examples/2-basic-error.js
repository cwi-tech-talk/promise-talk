'use strict';

var promise = require ('../promise-creators/promise-q');

promise.doSomethingAsyncWithError().then(function(result) {
  console.log(result);
}, function(err) {
  console.log(err);
});
