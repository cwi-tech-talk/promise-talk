'use strict'

var q = require ('q');

exports.doSomethingAsync = doSomethingAsync;

function doSomethingAsync() {
  var deferred = q.defer();

  console.log('Início da operação');
  
  setTimeout(() => {
    deferred.resolve('Operação com sucesso');
  }, 5000);

  return deferred.promise;
}
