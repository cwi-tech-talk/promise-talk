'use strict';

var promise = require ('../promise-creators/promise-q');

var outputPromise = promise.getUsername()
    .then(getUser)
    .then(getAge)
    .then(print);


function getUser(username) {
  return promise.getUser(username);
}

function getAge(user) {
  return promise.getAge(user);
}

function print(text) {
  console.log(text);
}
