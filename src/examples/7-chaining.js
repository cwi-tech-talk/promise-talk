'use strict';

var promise = require ('../promise-creators/promise-q');

var outputPromise = promise.getUsername()
.then(function (username) {
  return promise.getUser(username);
})
.then(function (user) {
  return promise.getAge(user);
})
.then(function (age) {
  console.log(age);
});


