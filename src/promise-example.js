'use strict'

const q = require ('q');

exports.doSomethingAsync = doSomethingAsync;

function doSomethingAsync() {
  var deferred = q.defer();

  console.log('Início da operação');
  
  setTimeout(() => {
    deferred.resolve('Operação com sucesso');
  }, 3000);

  return deferred.promise;
}