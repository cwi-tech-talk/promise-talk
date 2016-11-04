'use strict';

var promise = require ('../promise-creators/promise-q');

var result = promise.doSomethingAsyncWithError().then(function(sucess) {
  //do nothing
});

var result2 = promise.doSomethingAsync().then(null, function(err) {
  //do nothing
});

setTimeout(function() {
  console.log(result);
  console.log(result2);
}, 4000);
