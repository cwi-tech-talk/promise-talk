'use strict'

var q = require ('q');

exports.doSomethingAsync = doSomethingAsync;
exports.doSomethingAsyncWithError = doSomethingAsyncWithError;

function doSomethingAsync() {
  var deferred = q.defer();

  console.log('Início da operação');
  
  setTimeout(() => {
    deferred.resolve('Operação com sucesso');
  }, 3000);

  return deferred.promise;
}

function doSomethingAsyncWithError() {
  var deferred = q.defer();

  console.log('Início da operação');
  
  setTimeout(() => {
    deferred.reject('Erro! Falha na operação');
  }, 3000);

  return deferred.promise;
}
