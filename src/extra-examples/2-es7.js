'use strict';

const promise = require('../promise-creators/promise-es6');

async function asyncTest() {
  let result = await promise.doSomethingAsync();
  console.log(result);
}

asyncTest();
